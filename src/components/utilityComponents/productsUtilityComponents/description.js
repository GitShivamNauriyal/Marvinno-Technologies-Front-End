import React from 'react';
import Module from './module';
import data from "./cardDetails"; 
import "../../css/productsCss/description.css";
import brochure from "../../images/Marvinno SPECTRUM Range Brochure.pdf";

export default function description() {
  return (
    <div>
      <div className='banner-container'>
        <div className='banner' ></div>
      </div>
      <p className='p-spectrum-products'>Marvinno SPECTRUM Range</p>
    <div className='sepratorLine'/>
    <div className='product row1'>
  
      {data.map(item => (
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
      <div className='products-top-bg-black'>
        <p className='descriptionProductsCss'>We offer 8 different modules in various styles (Gloss or Matte) & color (Pearl white, Phantom Black, Olive Green, Sterling Silver, Rose Gold etc), choose according to your need & requirement and leave the rest on us. Enjoy our products and its features, and let it take you into a world full of smartness.
        <p className='p-download-products'><a className="anchor-tag-items-products-download-top" target="blank" href={brochure} download>Download Brochure</a></p></p>
      </div>
        </div>
    )
  }