import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../css/aboutCss/aboutDescription.css";
// import backgroundVideo from "../../images/backgroundVideo.mp4";
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
export default function AboutDescription() {
    AOS.init({ duration: 1500 });

    const [typeEffect] = useTypewriter({
        words: ["DREAMS", "VISION", "CONCEPTS", "AMBITIONS", "GOALS"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 100,
    });

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
    const sections = [
        {
            image: customerExperienceImage,
            title: "Experience",
            description:
                "We get it - trust and reliability are the superhero duo for awesome customer journeys. Our clients are our VIPs, getting primo services and solutions every time.",
        },
        {
            image: qualityImage,
            title: "Quality",
            description:
                "Our promise? To lock arms with Quality and march as champions in the realm of Home Automation Solutions and Services!",
        },
        {
            image: innovationImage,
            title: "Innovation",
            description:
                "Our promise? To lock arms with Quality and march as champions in the realm of Home Automation Solutions and Services!",
        },
        {
            image: trustImage,
            title: "Trust",
            description:
                "Our promise? To lock arms with Quality and march as champions in the realm of Home Automation Solutions and Services!",
        },
    ];

    return (
        <div className="whole-about">
            {/* <div className="video-background">
                <video autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="overlay"></div>
            </div> */}
            {/* <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div> */}
            <div className="products-who-we-are-div">
                <h1 className="heading-about">
                    What does <span className="highlight">MARVINNO</span> do?
                </h1>
                <p className="aboutTopSectionDescriptionCss" data-aos="fade-up">
                    Marvinno, the tech wizards behind the curtain, are here to
                    sprinkle some IoT magic into your homes! From scribbles on a
                    napkin to high-tech solutions for clients across the globe,
                    we've got your back. Dive into the world of smart services
                    tailored just for you, crafted with passion and precision by
                    our team at Marvinno Technologies India Pvt. Ltd. in New
                    Delhi. We're not just about technology - we're about
                    creating tailored experiences that make your dreams come
                    true!
                </p>
                <div
                    className="products-who-we-are-div-dynamic-quote"
                    data-aos="fade-up"
                >
                    <h1>
                        YOUR<span> </span>
                        <span className="highlight">{typeEffect}</span>
                        <Cursor />
                        <span>, </span>
                        <span className="products-who-we-are-div-static-quote">
                            OUR TECHNOLOGY!!
                        </span>
                    </h1>
                </div>
                <div className="custom-shape-divider-bottom-1720199442">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="about-section-2">
                <p className="about-section-headings">Our Promises</p>
                <hr />
                <div className="centerAboutSection" data-aos="fade-up">
                    {sections.map((section, index) => (
                        <div className="div" key={index}>
                            <p className="centerImage">
                                <img
                                    className="resizeImageAboutPage"
                                    src={section.image}
                                    alt={`${section.title} Img`}
                                />
                            </p>
                            <h4 className="headingAboutFooter">
                                {section.title}
                            </h4>
                            <p className="paraAboutStyling">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

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
            </div>
            <div className="section-3-about" data-aos="fade-up">
                <p className="about-section-headings">How To Videos</p>
                <hr />
                <div className="how-to-videos-grid">
                    <div className="how-to-videos-grid-item how-to-videos-product">
                        <div className="div-video">
                            <video controls>
                                <source src={HowToVideo1} type="video/mp4" />
                            </video>
                        </div>
                        <div className="how-to-video-grid-item-text">
                            <h2>Products</h2>
                            <p>Checkout videos about our products</p>
                        </div>
                        <div className="how-to-videos-view-more">
                            <h3>View more</h3>
                        </div>
                    </div>
                    <div className="how-to-videos-grid-item how-to-videos-project">
                        <div className="div-video">
                            <video controls>
                                <source src={HowToVideo2} type="video/mp4" />
                            </video>
                        </div>
                        <div className="how-to-video-grid-item-text">
                            <h2>Projects</h2>
                            <p>Checkout videos about our projects</p>
                        </div>
                        <div className="how-to-videos-view-more">
                            <h3>View more</h3>
                        </div>
                    </div>
                    <div className="how-to-videos-grid-item how-to-videos-installations">
                        <div className="div-video">
                            <video controls>
                                <source src={HowToVideo3} type="video/mp4" />
                            </video>
                        </div>
                        <div className="how-to-video-grid-item-text">
                            <h2>Installations</h2>
                            <p>See how to install our modules</p>
                        </div>
                        <div className="how-to-videos-view-more">
                            <h3>View more</h3>
                        </div>
                    </div>
                    <div className="how-to-videos-grid-item how-to-videos-configurations">
                        <div className="div-video">
                            <video controls>
                                <source src={HowToVideo1} type="video/mp4" />
                            </video>
                        </div>
                        <div className="how-to-video-grid-item-text">
                            <h2>Device Configuration</h2>
                            <p>See how to configure our devices</p>
                        </div>
                        <div className="how-to-videos-view-more">
                            <h3>View more</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4-about">
                <p className="about-section-headings">BLOGS</p>
                <hr />
                <div className="blogSectionCompleteDiv">
                    <div className="blogsThreeColomn main-blog">
                        <div className="blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage1}
                                    alt="blog img"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="/blogs/indore"
                                    >
                                        Marvinno Has Recently Exhibited its
                                        products line
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    At the 2nd Electric Expo held in Indore, MP
                                    from 8th October to 10th October. There were
                                    multiple stalls offering many Electrical
                                    devices but Marvinno stood out...
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
                    </div>
                    <div className="blogsThreeColomn">
                        <div className="blog secondary-blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage2}
                                    alt="blog img"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="https://www.digilantern.com/blogs/healthcare-industry-from-transactions-to-strong-brand-identity/"
                                    >
                                        FROM TRANSACTIONS TO STRONG BRAND
                                        IDENTITY
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    Most of the traditional businesses are built
                                    and run on references, particularly in
                                    Healthcare. I notice every day during my
                                    interactions with Healthcare....
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
                    </div>
                    <div className="blogsThreeColomn ">
                        <div className="blog secondary-blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage3}
                                    alt="blog img"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="https://www.digilantern.com/blogs/medical-web-solutions-or-word-of-mouth/"
                                    >
                                        MEDICAL WEB SOLUTIONS OR A WORD OF
                                        MOUTH?
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    So, in the times of technology and
                                    digitization, it is mostly the inherent
                                    businesses that are still relying on the
                                    traditional marketing method -'Word of
                                    Mouth'....
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
        </div>
    );
}
