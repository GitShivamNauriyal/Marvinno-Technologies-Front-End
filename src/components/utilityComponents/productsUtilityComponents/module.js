import React from "react";
import { Link } from "react-router-dom";
import "../../css/productsCss/description.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function module(props) {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
        stars.push(<FaStar key={i} className="icon-style" />);
    }
    return (
        <>
            <div className="productList">
                <div className="productCard">
                    <FaShoppingCart className={"productCard__cart"} />
                    <div className="productImageContainer">
                        <Link to={props.url} className="abc">
                            <img
                                src={props.imgsrc}
                                alt=" not loaded"
                                className="productImage"
                            />
                        </Link>
                    </div>

                    <div className="productContent">
                        <Link to={props.url}>
                            <h3 className="productName">{props.name}</h3>
                        </Link>
                        <div className="displayStack__2">
                            <div className="productRating">{stars}</div>
                        </div>
                        <div className="displayStack_1">
                            <div className="productPrice">{props.price}</div>
                            <div className="productSales">
                                {props.totalSales} units sold
                            </div>
                        </div>
                    </div>
                    <div className="productBtnContainer">
                        <Link to={props.url}>
                            <button className="productBtn">
                                {props.title}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
// <Link to={props.url} className='buy-now'>View</Link>
