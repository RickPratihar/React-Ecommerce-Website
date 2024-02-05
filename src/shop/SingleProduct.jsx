import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PaageHeader from "../component/PaageHeader";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

// const ProductDisplay = () => import('./ProductDisplay');
// const PopularPost = () => import('./PopularPost');
// const Tags = () => import('./Tags');
// const Review = () => import('./Review');

const SingleProduct = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);

  return (
    <div>
      <PaageHeader
        title={"OUR SINGLE PRODUCT"}
        curPage={"Shop / Single Product"}
      />
      <div className="shop-single paddingtb aside-bg">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <div className="product-details">
                <div className="row align-items-center">
                  <div className="col-md-6 col-12">
                    <div className="product-thumb">
                      <div className="swiper-container pro-single-top">
                        <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        navigation= {
                            {
                                prevEl:".pro-single-prev",
                                prevE2:".pro-single-next",
                            }
                        }
                        className="mySwiper">
                          {
                            result.map((item, i) => (
                              <SwiperSlide key={i}>
                               <div className="single-thumb">
                               <img src={item.img} alt="" />
                               </div>
                              </SwiperSlide>
                            ))
                          }
                          {
                            result.map((item, i) => (
                              <SwiperSlide key={i}>
                               <div className="single-thumb">
                               <img src={item.img2} alt="" />
                               </div>
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                        <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                        </div>
                        <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Details section*/}
                  <div className="col-md-6 col-12">
                    <div className="post-content">
                        <div>
                            {
                                result.map(item => <ProductDisplay key={item.id} item={item}/>)
                            }
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Reviews */}
              <div className="review">
              <Review/>
              </div>
            </div>

            {/*Right Side */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
