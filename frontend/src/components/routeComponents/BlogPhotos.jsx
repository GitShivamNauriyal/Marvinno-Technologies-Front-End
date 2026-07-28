import React from 'react'
import NonRespNavbar from '../utilityComponents/commonUtilities/nonRespNavbar'
import Footer from '../utilityComponents/commonUtilities/footer'

// images
import IndoreBlog1 from "../images/indore-blog-2.jpeg"
import IndoreBlog2 from "../images/indore-blog-3.jpeg"
import IndoreBlog3 from "../images/indore-blog-4.jpeg"
import IndoreBlog4 from "../images/indore-blog-5.jpeg"
import IndoreBlog5 from "../images/indore-blog-6.jpeg"
import IndoreBlog7 from "../images/indore-blog-8.jpeg"
import IndoreBlog8 from "../images/indore-blog-9.jpeg"
import IndoreBlog9 from "../images/indore-blog-10.jpeg"

// videos
import IndoreBlogVideo from "../images/indore-blog-video.mp4"

export default function BlogPhotos() {
  return (
    <div>
      <NonRespNavbar />

      <p className='blog-indore-heading'>Electric Expo Indore</p>
      <p className='blog-indore-description'>Marvinno Technologies recently exhibited its entire product line at the 2nd Electric Expo held in Indore, MP from 8th October to 10th October.
      There were multiple stalls offering many Electrical devices but Marvinno stood out because of its unique and in house developed Smart Home and Automation products. Only Marvinno showcased such a product and response of the consumers was overwhelming. 
      For three consecutive days, Marvinno demonstrated the products multiple time to consumers of different age groups ranging from 6 years to 75 years and each and every one of them was amazed to see such versatility in a complete Made in India Product</p>
      <p className='blog-indore-heading'>Gallery</p>
      
      <div className='indore-blog-grid-div'>
        <img className='blog-indore-image' src={IndoreBlog1} alt='first img' />
        <img className='blog-indore-image' src={IndoreBlog5} alt='fifth img' />
        <img className='blog-indore-image' src={IndoreBlog3} alt='third img' />
        <img className='blog-indore-image' src={IndoreBlog7} alt='seventh img'/>
        <img className='blog-indore-image' src={IndoreBlog8} alt='eighth img' />
        <img className='blog-indore-image' src={IndoreBlog2} alt='second img' />
        <img className='blog-indore-image' src={IndoreBlog4} alt='fourth img' />
        <img className='blog-indore-image' src={IndoreBlog9} alt='nineth img' />
      </div>
        
      <p className='blog-indore-heading'>Video</p>

      <div className='blog-video'>
        <video width="560" height="315" controls >
          <source src={IndoreBlogVideo} type="video/mp4" />
        </video>
      </div>

      <Footer />
    </div>
  )
}
