import React from 'react';
import "../../css/commonComponentsCss/footer.css";
import { Link } from 'react-router-dom';
import appStoreImage from "../../images/website icons/appstoreLink.png";
import playStoreImage from "../../images/website icons/googlePlayLink.png";
import footerMarvinnoLogo from "../../images/website icons/marvinnoApp.png";
import instagramLogo from "../../images/icons/instagram.jpg";
import facebookLogo from "../../images/icons/facebook.jpg";
import youtubeLogo from "../../images/icons/youtube.png";
import twitterLogo from "../../images/icons/twitter.png";
import quoraLogo from "../../images/icons/quora.jpg";
import termsAndConditions from "../../images/Terms_and_Conditions.pdf";


export default function footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-div-grid div1">
          <Link className="heading-center-more products-heading-footer" to="/products">Products</Link><br />
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/s1-module">S1 - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/s2-module">S2 - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/p-module">P - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/e-module">E - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/c-module">C - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/t-module">T - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/r-module">R - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/u-module">U - Module</Link></li>
          <li className='li-items-footer'><Link className="anchor-tag-items-footer" to="/products/m-module">M - Module</Link></li>
        </div>
        <div className="footer-div-grid div2">
          <a className="heading-center-more heading-footer" href="/">More</a><br />
          <li className=' li-items-footer'><Link className="anchor-tag-items-footer" to="/about">About Us</Link></li>
          <li className=' li-items-footer'><Link className="anchor-tag-items-footer" to="/products">Products</Link></li>
          <li className=' li-items-footer'><Link className="anchor-tag-items-footer" to="/solutions">Solutions</Link></li>
          <li className=' li-items-footer'><Link className="anchor-tag-items-footer" to="/connect">Connect</Link></li>
          <li className=' li-items-footer'><a className="anchor-tag-items-footer" target="blank" href={termsAndConditions}>Terms & Conditions</a></li>
          <li className=' li-items-footer'><Link className="anchor-tag-items-footer" to="/Privacy">Privacy Policy </Link></li>
        </div>
        <div className="footer-div-grid div3">
          <p className="heading-footer">Connect With Us</p>
          <div className='icons-footer'>
            <a className='socialMediaFooterYoutube' target="blank" href='https://www.youtube.com/channel/UCO9cJ8f5HztqR2HcM9XFY0w'><img src={youtubeLogo} className='youtube-link link-social-media-footer' alt="..."/></a>
            <a className='socialMediaFooterQuora' target="blank" href='https://pin.it/3gPNrJy'><img src={quoraLogo} className='link-social-media-footer' alt="..."/></a>
            <a className='socialMediaFooterInstagram' target="blank" href='https://www.instagram.com/marvinnotechnologies/'><img src={instagramLogo} className='instagram-link link-social-media-footer' alt="..."/></a>
            <a className='socialMediaFooterFacebook' target="blank" href='https://www.facebook.com/marvinnotechnologies/'><img src={facebookLogo} className='facebook-link link-social-media-footer' alt="..." /></a>
            <a className='socialMediaFooterTwitter' target="blank" href='https://www.twitter.com/marvinnotech'><img src={twitterLogo} className='twitter-link link-social-media-footer' alt="..."/></a>
          </div>
          <p className='footer-address footer-address-new-delhi'>New Delhi, India</p>
          <p className='footer-address'>Email: info@marvinno.in,</p>
          <p className='footer-address'>info.marvinno@gmail.com</p>
          <p className='footer-address'>Service Hours: 24/7, 365 days</p>
          <div className='footer-download-links'>
            <a className="footer-download-images" target="blank" href="https://play.google.com/store/apps/details?id=in.marvinno"><img className ="footer-download-images" src={playStoreImage} alt="playstore link" /></a><br />
            <a className="footer-download-images" target="blank" href="https://apps.apple.com/in/app/marvinno/id1615715918"><img  className ="footer-download-images appstore-link" src={appStoreImage} alt="appstore link" /></a><br />
          </div>
        </div>
        <hr className='line-break-footer'/>
        <div className='footer-div-grid div4 footer-div4'>
          <img className='footer-marvinno-image' alt='marvinno logo' src={footerMarvinnoLogo} />
          <p className='footer-copyright-text'>&#169; 2022 Marvinno Technologies India Pvt. Ltd.   All rights reserved. Privacy Policy Terms of Use</p>
        </div>
    </div>
  </div>
  )
}