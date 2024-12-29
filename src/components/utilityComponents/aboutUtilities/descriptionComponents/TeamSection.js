import React from "react";
import Carousel from "react-multi-carousel";
import Team from "./Team";
import AOS from "aos";

import "../../../css/aboutCss/teamSection.css";
import "react-multi-carousel/lib/styles.css";

const TeamSection = () => {
    AOS.init();
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
            <div className="products-team" data-aos="fade-up">
                {/* <hr /> */}
                <p className="about-section-headings">Team MARVINNO </p>
                <hr />
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    showDots={true}
                    infinite={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3 * 1000}
                >
                    <div className="carousel-content">
                        <Team
                            name="Dr. Gaurav Verma"
                            role="Founder & Director"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Sarthak Vig"
                            role="Founder & Director"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team name="Mr. Rishabh Sati" role="Technical Lead" />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Rahul Mittal"
                            role="Partner and promoter"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Satish Chandra"
                            role="DGM - Sales Operations"
                        />
                    </div>
                    {/* <div className="carousel-content">
                        <Team
                            name="Mr. Mohd Mujeeb"
                            role="Full Stack  Web Developer"
                        />
                    </div> */}
                    <div className="carousel-content">
                        <Team
                            name="Mr. Ayush Dobriyal"
                            role="Full Stack Web Developer"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Shivam Nauriyal"
                            role="Full Stack Web Developer"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Praveen Kumar"
                            role="On-Site Electrician"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team
                            name="Mr. Rakesh Kumar"
                            role="On-Site Electrician"
                        />
                    </div>

                    <div className="carousel-content">
                        <Team
                            name="Shaded Feather Productions"
                            role="Studio and Multimedia Partner"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default TeamSection;
