import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fiveStarReview from "../../images/5StarImageReviews.png";
import "../../css/homeCss/description.css";

export default function Reviews({ users }) {
    AOS.init({ duration: 1500 });

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
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
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {/* Mapping the whole object and displaying the data in a carousel */}
                    {/* How this mapping works is that it takes user and index as parameters
                     and then maps the object to display the data in a carousel. */}
                    {Object.values(users).map((user, index) => (
                        <div key={index} className="complete-reviews-div">
                            <img
                                className="image-reviews"
                                src={user.image}
                                alt={`Client ${index + 1} (${user.name} from ${
                                    user.city
                                })`}
                            />
                            <div className="data-review">
                                <p className="review-para">{user.message}</p>
                                <p className="review-person-name">
                                    {user.name}
                                </p>
                                <p className="review-person-city">
                                    {user.city}
                                </p>
                                <div className="center-review-image">
                                    <img
                                        className="reviews-star-rating"
                                        alt="Review Rating"
                                        src={fiveStarReview}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
