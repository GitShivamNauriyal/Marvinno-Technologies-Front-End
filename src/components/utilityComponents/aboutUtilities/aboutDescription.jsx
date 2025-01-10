import React from "react";
import { Link } from "react-router-dom";

import { useTypewriter } from "react-simple-typewriter";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css";

import BackgroundParticles from "./AboutHero";

import "../../css/aboutCss/aboutDescription.css";

import navbarLogo from "../../images/navbarLogoBlackText.png";
// import backgroundVideo from "../../images/backgroundVideo.mp4";
import customerExperienceImage from "../../images/customerExperienceAbout.png";
import qualityImage from "../../images/qualityIconAbout.png";
import innovationImage from "../../images/innovationAbout.png";
import trustImage from "../../images/trustAbout.png";

//recognitions
import OurRecognitions from "./descriptionComponents/OurRecognitions";
//team
import TeamSection from "./descriptionComponents/TeamSection";
// how to videos
import HowToVideos from "./descriptionComponents/HowToVideos";
//blogs
import BlogsSection from "./descriptionComponents/BlogsSection";
//career form
import CareerForm from "./descriptionComponents/CareerForm";

// <img src={whoWeAreImage} className="aboutTopSectionImagesCss" alt="Who We Are Img" />
export default function AboutDescription() {
    AOS.init({ duration: 1500 });

    const [typeEffect] = useTypewriter({
        words: ["DREAMS", "VISION", "CONCEPTS", "AMBITIONS", "GOALS"],
        loop: {},
        typeSpeed: 180,
        deleteSpeed: 70,
    });

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
            {/* <BackgroundParticles /> */}

            <div className="products-who-we-are-div">
                <BackgroundParticles
                    className="particles-background"
                    quantity={250}
                    staticity={100}
                    ease={30}
                    size={0.3}
                    refresh={false}
                    color="#000000"
                    vx={0.1}
                    vy={-0.1}
                />
                <div className="about-logo-padding">
                    {/* <img
                        className="navBarLogoImageHeight"
                        src={navbarLogo}
                        alt="..."
                    /> */}
                    <div className="about-company-name">
                        <h1>Marvinno Technologies</h1>
                    </div>
                </div>

                <div
                    className="products-who-we-are-div-dynamic-quote"
                    data-aos="fade-up"
                >
                    <h1>
                        YOUR<span> </span>
                        <span className="highlight">{typeEffect}</span>
                        {/* <Cursor /> */}
                        <span className="products-who-we-are-div-static-quote">
                            , OUR TECHNOLOGY!!
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

            {/* WHO WE ARE SECTION */}
            <div className="about-paragraph-description-section">
                <img
                    className="about-paragraph-description-image"
                    src={navbarLogo}
                    alt="..."
                />
                <hr />
                <div
                    className="about-paragraph-description"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <p className="aboutTopSectionDescriptionCss">
                        Marvinno, the tech wizards behind the curtain, are here
                        to sprinkle some IoT magic into your homes! From
                        scribbles on a napkin to high-tech solutions for clients
                        across the globe, we've got your back. Dive into the
                        world of smart services tailored just for you, crafted
                        with passion and precision by our team at Marvinno
                        Technologies India Pvt. Ltd. in New Delhi. We're not
                        just about technology - we're about creating tailored
                        experiences that make your dreams come true!
                    </p>
                </div>
                <Link to="/products">
                    <div className="product-display-discover-div-button">
                        <p>Checkout Products</p>
                        <PiArrowCircleUpRightThin className="product-display-discover-div-button-link-arrow" />
                    </div>
                </Link>
            </div>

            {/* PROMICES SECTION */}
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
                            <h4 className="headingPromises">{section.title}</h4>
                            <p className="paraAboutStyling">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <OurRecognitions />

            <TeamSection />

            <HowToVideos />

            <BlogsSection />

            <CareerForm />
        </div>
    );
}
