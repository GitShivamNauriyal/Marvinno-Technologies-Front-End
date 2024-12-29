import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fiveStarReview from "../../images/5StarImageReviews.png";
import "../../css/homeCss/description.css";

export default function reviews({ users }) {
    AOS.init({ duration: 1500 });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <div className="reviews-heading-container">
                <h1>Our Clients and Installations</h1>
            </div>
            <div className="reviews-carousel-container" data-aos="fade-up">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2 * 1000}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user1.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user1.message}</p>
                            <p className="review-person-name">
                                {users.user1.name}
                            </p>
                            <p className="review-person-city">
                                {users.user1.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user2.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user2.message}</p>
                            <p className="review-person-name">
                                {users.user2.name}
                            </p>
                            <p className="review-person-city">
                                {users.user2.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user3.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user3.message}</p>
                            <p className="review-person-name">
                                {users.user3.name}
                            </p>
                            <p className="review-person-city">
                                {users.user3.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user4.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user4.message}</p>
                            <p className="review-person-name">
                                {users.user4.name}
                            </p>
                            <p className="review-person-city">
                                {users.user4.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user5.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user5.message}</p>
                            <p className="review-person-name">
                                {users.user5.name}
                            </p>
                            <p className="review-person-city">
                                {users.user5.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="complete-reviews-div">
                        <img
                            className="image-reviews"
                            src={users.user6.image}
                            alt="Client Image Loading..."
                        />
                        <div className="data-review">
                            <p className="review-para">{users.user6.message}</p>
                            <p className="review-person-name">
                                {users.user6.name}
                            </p>
                            <p className="review-person-city">
                                {users.user6.city}
                            </p>
                            <div className="center-review-image">
                                <img
                                    className="reviews-star-rating"
                                    alt="Review Loading..."
                                    src={fiveStarReview}
                                />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

/*--------------------------OLD CODE--------------------------*/
{
    /* <Carousel>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user1.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user1.message}</p>
                  <p className="review-person-name">
                      {users.user1.name}
                  </p>
                  <p className="review-person-city">
                      {users.user1.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user2.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user2.message}</p>
                  <p className="review-person-name">
                      {users.user2.name}, {users.user2.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user3.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user3.message}</p>
                  <p className="review-person-name">
                      {users.user3.name}, {users.user3.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user4.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user4.message}</p>
                  <p className="review-person-name">
                      {users.user4.name}, {users.user4.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user5.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user5.message}</p>
                  <p className="review-person-name">
                      {users.user5.name}, {users.user5.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="complete-reviews-div">
              <img
                  className="image-reviews"
                  src={users.user6.image}
                  alt=""
              />
              <div className="data-review">
                  <p className="review-para">{users.user6.message}</p>
                  <p className="review-person-name">
                      {users.user6.name}, {users.user6.city}
                  </p>
                  <p className="center-review-image">
                      <img
                          className="reviews-star-rating"
                          alt=""
                          src={fiveStarReview}
                      />
                  </p>
              </div>
          </div>
      </Carousel.Item>
  </Carousel> */
}
