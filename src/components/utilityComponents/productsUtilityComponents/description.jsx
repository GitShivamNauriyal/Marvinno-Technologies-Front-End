import { React, useState } from "react";
import MakeAPayment from "./MakePayment";
import Module from "./module";
import AOS from "aos";
import "aos/dist/aos.css";
import cardData from "./cardDetails";
import Card_Data_2M from "./cardDetails_2M";
import "../../css/productsCss/products.css";
// import brochure from "../../images/Marvinno SPECTRUM Range Brochure.pdf";
import brochure_all from "../../images/pdfs/Marvinno SPRECTRUM Range Brochure.pdf";
import brochure_2M from "../../images/pdfs/Marvinno Smart 2M Range Brochure.pdf";
import wiring_diagram from "../../images/pdfs/Wiring Diagrams - All Modules.pdf";

export default function Description() {
    AOS.init({ duration: 1500 });

    return (
        <div className="product-master">
            <MakeAPayment />
            <div className="productHeadingContainer" data-aos="fade-up">
                <p className="p-spectrum-products-heading">
                    Marvinno's SPECTRUM Range
                </p>
            </div>
            <div
                className="product row1"
                data-aos="fade-up"
                data-aos-delay="200"
            >
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
            <div className="productHeadingContainer" data-aos="fade-up">
                <p className="p-spectrum-products-heading">
                    Marvinno's Smart 2M Range
                </p>
            </div>
            <div className="product row1" data-aos="fade-up">
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
            <div className="products-top-bg-black" data-aos="fade-up">
                <div className="descriptionProductsCss">
                    <p>
                        Dive into a set of 12 captivating modules, available in
                        Gloss or Matte enchantments. Customize your ideal
                        combination by mixing Base colors (Black or White) with
                        Frame coatings (Gold or Silver). Whether you seek
                        boldness or prefer the timeless, our selection caters to
                        your preferences. Explore a journey of innovation with
                        our groundbreaking modules and their exceptional
                        characteristics. Prepare yourself for a touch of
                        enchantment!
                    </p>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure_all}
                            download
                        >
                            Dowload Spectrum Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure_2M}
                            download
                        >
                            Download Smart 2M Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={wiring_diagram}
                            download
                        >
                            Wiring Diagrams and Connections
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
