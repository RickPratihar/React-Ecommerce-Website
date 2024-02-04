import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const ProductDisplay = ({ item }) => {
  // console.log(item);
  const { name, id, seller, price, ratingsCount, quantity, desc, img } = item;

  const [prequantity, setPrequantity] = useState(quantity);
  const [copun, setCopun] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity) {
      setPrequantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setPrequantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img:img,
      name:name,
      price:price,
      quantity:prequantity,
      size:size,
      color:color,
      coupon:copun,
    }

    const existingCart =JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(item => item.id === id);

    if (existingProductIndex != -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    }else{
      existingCart.push(product);
    }

    //update local stroage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    //reset form field

    setPrequantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCopun("");
   
  }

  const notify = () => {
    toast.success("item add to cart Successfully!", {
      // position:"top-center"
    });
  }
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>₹{price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/*cart component */}
      <form onSubmit={handleSubmit}>
        <div className="select-product size">
          <select value={size} onChange={handleSizeChange}>
            <option>Select Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <i className="icofont-rounded-down"></i>
        </div>

        {/* select Color  */}
        <div className="select-product color">
          <select value={color} onChange={handleColorChange}>
            <option>Select Color</option>
            <option>Pink</option>
            <option>Blue</option>
            <option>Red</option>
            <option>White</option>
            <option>Black</option>
            <option>Ash</option>
          </select>
          <i className="icofont-rounded-down"></i>
        </div>
        {/* Cart  + - counter */}

        <div className="cart-plus-minus">
          <div className="dec qtybutton" onClick={handleDecrease}>
            -
          </div>
          <input
            className="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            id="qtybutton"
            value={prequantity}
            onChange={(e) => setPrequantity(parseInt(e.target.value, 10))}
          />
          <div className="inc qtybutton" onClick={handleIncrease}>
            +
          </div>
        </div>

        {/*Copun Field */}
        <div className="discount-code mb-2">
          <input
            type="text"
            placeholder="Enter Discount Code"
            onChange={(e) => setCopun(e.target.value)}
          />
        </div>

        {/* submit button  */}
     
        <button type="submit" className="lab-btn" onClick={notify}>
          <span>Add to Cart</span> 
        </button>
        <ToastContainer />

        <Link to="/cart-page" className="lab-btn bg-primary ">
          <span>Check Out</span>
        </Link>
      </form>
     
    </div>
  );
};

export default ProductDisplay;
