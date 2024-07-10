import React from "react";
import { useState } from "react";

// import Module from "./module";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../../css/productsCss/description.css";
import { FaStar } from "react-icons/fa";

export default function Module(props) {
    AOS.init({ duration: 1500 });

    const white = { background: "white" };
    const purple = {
        background: "linear-gradient(45deg, #8c018c33, #ffe1ff33)",
    };
    const darkblue = {
        background: "linear-gradient(45deg, #0016db33, #c3c9ff33)",
    };
    const skyblue = {
        background: "linear-gradient(45deg, #00c3ff55, #97e4fb33)",
    };
    const aquagreen = {
        background: "linear-gradient(45deg, #00ffb755, #97e4fb33)",
    };
    const green = {
        background: "linear-gradient(45deg, #00ff2a33, #91ffa333)",
    };
    const yellow = {
        background: "linear-gradient(45deg, #ffff0033, #ffff8c11)",
    };
    const orange = {
        background: "linear-gradient(45deg, #ffa50055, #ffd07733)",
    };
    const red = {
        background: "linear-gradient(45deg, #ff000055, #ff818133)",
    };
    const maroon = {
        background: "linear-gradient(45deg, #90000088, #ff818133)",
    };
    const golden = {
        background: "linear-gradient(45deg, #ffd70055, #ffd70011)",
    };
    const silver = {
        background: "linear-gradient(45deg, #c0c0c088, #c0c0c011)",
    };
    const copper = {
        background: "linear-gradient(45deg, #ba920055, #ba920011)",
    };

    const [color, newColor] = useState(white);

    let stars = [];
    for (let i = 0; i < props.rating; i++) {
        stars.push(<FaStar key={i} className="icon-style" />);
    }
    return (
        <div className="module-master">
            <div className="productList">
                <div
                    className="productCard"
                    onMouseOver={() => {
                        if (props.id === 1) {
                            newColor(purple);
                        } else if (props.id === 2) {
                            newColor(darkblue);
                        } else if (props.id === 3) {
                            newColor(skyblue);
                        } else if (props.id === 4) {
                            newColor(aquagreen);
                        } else if (props.id === 5) {
                            newColor(green);
                        } else if (props.id === 6) {
                            newColor(yellow);
                        } else if (props.id === 7) {
                            newColor(orange);
                        } else if (props.id === 8) {
                            newColor(red);
                        } else if (props.id === 9) {
                            newColor(maroon);
                        } else if (props.id === 10) {
                            newColor(golden);
                        } else if (props.id === 11) {
                            newColor(silver);
                        } else if (props.id === 12) {
                            newColor(copper);
                        }
                    }}
                    onMouseOut={() => newColor(white)}
                    style={color}
                >
                    <div className="productImageContainer">
                        <Link to={props.url} className="abc">
                            <img
                                src={props.imgsrc}
                                alt="Image Not Loaded"
                                className="productImage"
                            />
                        </Link>
                    </div>

                    <div className="productContent">
                        <Link to={props.url}>
                            <div className="productNameContainer">
                                <h3 className="productName">{props.name}</h3>
                            </div>
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
        </div>
    );
}
// <Link to={props.url} className='buy-now'>View</Link>
