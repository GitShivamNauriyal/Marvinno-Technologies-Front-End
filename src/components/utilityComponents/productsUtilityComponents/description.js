import React from "react";
import Module from "./module";
import AOS from "aos";
import "aos/dist/aos.css";
import cardData from "./cardDetails";
import Card_Data_2M from "./cardDetails_2M";
import "../../css/productsCss/description.css";
import brochure from "../../images/Marvinno SPECTRUM Range Brochure.pdf";

export default function Description() {
    AOS.init({ duration: 1500 });

    return (
        <div>
            {/* <div className="banner-container">
                <div className="banner"></div>
            </div> */}
            <div className="products-top-bg-black">
                <div className="descriptionProductsCss" data-aos="fade-left">
                    <p>
                        We offer 12 different modules in various styles (Gloss
                        or Matte) & colors (Base: Black or White, Frame: Gold or
                        Silver). Choose according to your need or customise as
                        you desire and leave the rest on us. Enjoy our products
                        and its features, and let it take you into a world full
                        of smartness.
                    </p>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure}
                            download
                        >
                            Dowload Spectrum Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure}
                            download
                        >
                            Download Smart 2M Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure}
                            download
                        >
                            Wiring Diagrams and Connections
                        </a>
                    </div>
                </div>
            </div>
            <div className="productHeadingContainer">
                <p className="p-spectrum-products-heading">
                    MARVINNO's Spectrum Range
                </p>
            </div>
            {/* <div className="sepratorLine" /> */}
            <div className="product row1">
                {cardData.map((item) => (
                    <Module
                        key={item.id} // Don't forget to add a unique key prop when mapping over arrays in React
                        id={item.id}
                        imgsrc={item.img}
                        price={item.price}
                        name={item.name}
                        totalSales={item.totalSales}
                        title={item.btnTitle}
                        rating={item.rating}
                        url={item.url}
                    />
                ))}
            </div>
            <div className="productHeadingContainer">
                <p className="p-spectrum-products-heading">
                    Marvinno’s Smart 2M Range
                </p>
            </div>
            <div className="product row1">
                {Card_Data_2M.map((item) => (
                    <Module
                        key={item.id} // Don't forget to add a unique key prop when mapping over arrays in React
                        id={item.id}
                        imgsrc={item.img}
                        price={item.price}
                        name={item.name}
                        totalSales={item.totalSales}
                        title={item.btnTitle}
                        rating={item.rating}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
}
