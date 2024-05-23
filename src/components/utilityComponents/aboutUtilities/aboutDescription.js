import React from "react";
// import { Carousel } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../css/aboutCss/aboutDescription.css";
import customerExperienceImage from "../../images/customerExperienceAbout.png";
import qualityImage from "../../images/qualityIconAbout.png";
import innovationImage from "../../images/innovationAbout.png";
import trustImage from "../../images/trustAbout.png";
import blogsImage1 from "../../images/blogImage-1.jpeg";
import blogsImage2 from "../../images/blogImage-2.jfif";
import blogsImage3 from "../../images/blogImage-3.jpg";

// team images
// import teamImg1 from "../../images/team-img-1.jpg";
// import teamImg2 from "../../images/team-img-2.jpg";
// import teamImg3 from "../../images/team-img-1.jpg";

// how to video 1
import HowToVideo1 from "../../images/How-to-video-2.mp4";
import HowToVideo2 from "../../images/How-to-video-1.mp4";
import HowToVideo3 from "../../images/How-to-video-3.mp4";
import Team from "./Team";

// <img src={whoWeAreImage} className="aboutTopSectionImagesCss" alt="Who We Are Img" />
export default function aboutDescription() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className="whole-about">
            <div className="products-who-we-are-div">
                <p className="heading-about-cursive">What does MARVINNO do ?</p>
                <p className="aboutTopSectionDescriptionCss">
                    Marvinno is a leading provider of cutting-edge technologies
                    and services, offering scalable IoT solutions for companies
                    of all sizes. Founded by a tech-loving team who started by
                    scribbling their ideas on a piece of paper, today we offer
                    smart, innovative services to dozens of clients worldwide.
                    We built our solutions by closely learning our potential
                    clientele and their expectations from our IoT products.
                    Marvinno is an innovation by IoT enthusiasts at Marvinno
                    Technologies India Pvt. Ltd., New Delhi, who have developed
                    this product after extensive research in Home Automation
                    Systems. Our key differentiator is detailed engineering,
                    where we make a conceptual design in tune with our clients
                    unique requirement.
                </p>
            </div>
            <div className="centerAboutSection">
                <div className="div div1-about">
                    <p className="centerImage">
                        <img
                            className="resizeImageAboutPage"
                            src={customerExperienceImage}
                            alt="Customer Experience Img"
                        />
                    </p>
                    <h4 className="headingAboutFooter">Experience</h4>
                    <p className="paraAboutStyling">
                        We understand that trust and reliability are the pillars
                        of great customer experience. We make our clients a top
                        priority and ensure that they receive the best services
                        and solutions.
                    </p>
                </div>
                <div className="div div2-about">
                    <p className="centerImage">
                        <img
                            className="resizeImageAboutPage"
                            src={qualityImage}
                            alt="Quality Img"
                        />
                    </p>
                    <h5 className="headingAboutFooter">Quality</h5>
                    <p className="paraAboutStyling">
                        Our commitment is to ensure that Quality is never
                        compromised and that we become champions in Home
                        Automation Solutions and Services.
                    </p>
                </div>
                <div className="div div3-about">
                    <p className="centerImage">
                        <img
                            className="resizeImageAboutPage"
                            src={innovationImage}
                            alt="Innovation Img"
                        />
                    </p>
                    <h5 className="headingAboutFooter">Innovation</h5>
                    <p className="paraAboutStyling">
                        Our dedication to innovation keeps us motivated to build
                        and design Smart Home Solutions that are Eco- friendly
                        user-friendly, energy-efficient as well as highly
                        affordable.
                    </p>
                </div>
                <div className="div div4-about">
                    <p className="centerImage">
                        <img
                            className="resizeImageAboutPage"
                            src={trustImage}
                            alt="Trust Img"
                        />
                    </p>
                    <h5 className="headingAboutFooter">Trust</h5>
                    <p className="paraAboutStyling">
                        We aim to establish ourselves at the forefront and
                        become a name to reckon with. We strive to establish
                        ourselves as your preferred and most trusted smat home
                        solutions.
                    </p>
                </div>
            </div>
            <div className="products-team">
                <hr />
                <p className="heading-about-cursive team-marvinno">
                    Team MARVINNO{" "}
                </p>
                <hr />
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    showDots={true}
                    // customDot={<CustomDot />}
                    infinite={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    autoPlaySpeed={3 * 1000}
                    // dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                >
                    {/* <div className="carousel-item"> */}
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
                    <div className="carousel-content">
                        <Team
                            name="Mr. Mohd Mujeeb"
                            role="Full Stack Web Developer"
                        />
                    </div>
                    <div className="carousel-content">
                        <Team name="Mr. Ayush Dobriyal" role="Web Developer" />
                    </div>
                    <div className="carousel-content">
                        <Team name="Mr. Shivam Nauriyal" role="Web Developer" />
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
                {/* <Carousel>
                    <Carousel.Item interval={2000}>
                        <div className="team-grid">
                            <Team
                                img={teamImg1}
                                name="Gaurav Varma"
                                role="Chief Excutive Officer (CEO)"
                                exp="5Y"
                            />
                            <Team
                                img={teamImg2}
                                name="Sarthak Vig"
                                role="Marketing & Distribution"
                                exp="3.5Y"
                            />
                            <Team
                                img={teamImg3}
                                name="Mohd Mujeeb"
                                role="Application Developer"
                                exp="1Y"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel> */}
            </div>
            <div className="section-3-about">
                <p className="heading-about-cursive">How To VIDEOS</p>
                <hr />
                <div className="videosMarginBottom">
                    <div className="div-videos-grid">
                        <video width="400" height="250" controls>
                            <source src={HowToVideo1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="div-videos-grid">
                        <video width="400" height="250" controls>
                            <source src={HowToVideo2} type="video/mp4" />
                        </video>
                    </div>
                    <div className="div-videos-grid">
                        <video width="400" height="250" controls>
                            <source src={HowToVideo3} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="section-4-about">
                <hr />
                <p className="heading-about-cursive">Blogs</p>
                <hr />
                <div className="blogSectionCompleteDiv">
                    <div className="blogsThreeColomn">
                        <div className="blog">
                            <p className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage1}
                                    alt="blog img"
                                />
                            </p>
                            <p className="heading-blogs-name">
                                <a className="blogName" href="/blogs/indore">
                                    Marvinno Has Recently Exhibited its products
                                    line
                                </a>
                            </p>
                            <p className="blogDescription">
                                At the 2nd Electric Expo held in Indore, MP from
                                8th October to 10th October. There were multiple
                                stalls offering many Electrical devices but
                                Marvinno stood out...
                            </p>
                            <p className="center-button-continue-reading">
                                <a
                                    className="continue-reading-button"
                                    href="/blogs/indore"
                                >
                                    CONTINUE
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="blogsThreeColomn">
                        <div className="blog">
                            <p className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage2}
                                    alt="blog img"
                                />
                            </p>
                            <p className="heading-blogs-name">
                                <a
                                    className="blogName"
                                    href="https://www.digilantern.com/blogs/healthcare-industry-from-transactions-to-strong-brand-identity/"
                                >
                                    FROM TRANSACTIONS TO STRONG BRAND IDENTITY
                                </a>
                            </p>
                            <p className="blogDescription">
                                Most of the traditional businesses are built and
                                run on references, particularly in Healthcare. I
                                notice every day during my interactions with
                                Healthcare....
                            </p>
                            <p className="center-button-continue-reading">
                                <a
                                    className="continue-reading-button"
                                    href="https://www.digilantern.com/blogs/healthcare-industry-from-transactions-to-strong-brand-identity/"
                                >
                                    CONTINUE
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="blogsThreeColomn">
                        <div className="blog">
                            <p className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage3}
                                    alt="blog img"
                                />
                            </p>
                            <p className="heading-blogs-name">
                                <a
                                    className="blogName"
                                    href="https://www.digilantern.com/blogs/medical-web-solutions-or-word-of-mouth/"
                                >
                                    MEDICAL WEB SOLUTIONS OR A WORD OF MOUTH?
                                </a>
                            </p>
                            <p className="blogDescription">
                                So, in the times of technology and digitization,
                                it is mostly the inherent businesses that are
                                still relying on the traditional marketing
                                method -'Word of Mouth'....
                            </p>
                            <p className="center-button-continue-reading">
                                <a
                                    className="continue-reading-button"
                                    href="https://www.digilantern.com/blogs/medical-web-solutions-or-word-of-mouth/"
                                >
                                    CONTINUE
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
