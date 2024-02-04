/*eslint-disable react/prop-types */
import React from 'react'

const Pagination = ({productsPerPage, totalProduct, paginate, activePage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-wrap">
            <ul className='default-pagination lab-ul'>
                <li>
                    <a href="#" onClick={() =>{
                        if(activePage < pageNumbers.length){
                            paginate(activePage-1)
                        }
                    }}>
                        <i className="icofont-long-arrow-left"></i>
                    </a>
                </li>
                {
                    pageNumbers.map(number => (
                        <li key={number} className={`page-item ${activePage === number ? "bg-warning " : ""}`}>
                            <button className='bg-transparent' onClick={() => paginate(number)}>{number}</button>
                        </li>
                    ))
                }
                <li>
                <a href="#" onClick={() =>{
                        if(activePage < pageNumbers.length){
                            paginate(activePage+1)
                        }
                    }}>
                        <i className="icofont-long-arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination