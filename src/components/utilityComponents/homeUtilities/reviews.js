import React from 'react';
import { Carousel } from 'react-bootstrap';
import fiveStarReview from "../../images/5StarImageReviews.png";
import "../../css/homeCss/description.css";

export default function reviews({users}) {
  return (
    <div>
    <Carousel>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user1.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user1.message}</p>
              <p className='review-person-name'>{users.user1.name}</p>
              <p className='review-person-city'>{users.user1.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user2.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user2.message}</p>
              <p className='review-person-name'>{users.user2.name}, {users.user2.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user3.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user3.message}</p>
              <p className='review-person-name'>{users.user3.name}, {users.user3.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user4.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user4.message}</p>
              <p className='review-person-name'>{users.user4.name}, {users.user4.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user5.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user5.message}</p>
              <p className='review-person-name'>{users.user5.name}, {users.user5.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='complete-reviews-div'>
            <img className='image-reviews' src={users.user6.image} alt='' />
            <div className='data-review'>
              <p className='review-para'>{users.user6.message}</p>
              <p className='review-person-name'>{users.user6.name}, {users.user6.city}</p>
              <p className='center-review-image'><img className='reviews-star-rating' alt='' src={fiveStarReview} /></p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    )
  }
  
  