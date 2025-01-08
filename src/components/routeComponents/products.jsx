import React from 'react';
import Navbar from '../utilityComponents/commonUtilities/nonRespNavbar';
import Footer from "../utilityComponents/commonUtilities/footer";
import ProductDescription from "../utilityComponents/productsUtilityComponents/description"

export default function products() {
  return (
    <div>
      <Navbar />
      <ProductDescription />
      <Footer />
    </div>
  )
}
