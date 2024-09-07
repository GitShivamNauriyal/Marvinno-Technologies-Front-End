import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";

import BackgroundParticles from "./AboutHero";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../css/aboutCss/aboutDescription.css";
import "../../css/aboutCss/careerSection.css";

import navbarLogo from "../../images/navbarLogoBlackText.png";
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
import OurRecognitions from "./OurRecognitions";

// <img src={whoWeAreImage} className="aboutTopSectionImagesCss" alt="Who We Are Img" />
export default function AboutDescription() {
    AOS.init({ duration: 1500 });

    const [typeEffect] = useTypewriter({
        words: ["DREAMS", "VISION", "CONCEPTS", "AMBITIONS", "GOALS"],
        loop: {},
        typeSpeed: 180,
        deleteSpeed: 70,
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

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [submissionSuccessful, setSubmissionSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        schoolName: "",
        state: "Andhra Pradesh",
        institutionCategory: "School",
        gender: "Male",
        language: "English",
        stream: "Science",
        interest: "Content Writing",
        termsAgreed: false,
        receiveUpdates: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate phone number
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
        }

        // Validate email
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Validate date of birth
        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = "Date of birth is required.";
        } else {
            const today = new Date();
            const birthDate = new Date(formData.dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (
                monthDifference < 0 ||
                (monthDifference === 0 && today.getDate() < birthDate.getDate())
            ) {
                age = age - 1;
            }
            if (age < 18) {
                newErrors.dateOfBirth = "You must be at least 18 years old.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!validateForm()) {
            return;
        }

        try {
            // console.log("Submitting form data:", formData);
            const response = await axios.post(
                // "/",
                {
                    ...formData,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("Response from server:", response);
            setLoading(false);
            setSubmissionSuccess(true);
            setTimeout(() => {
                setSubmissionSuccess(false);
                navigate("/"); // Navigate to home page after 3 seconds
            }, 5000);
        } catch (error) {
            console.error(
                "Error:",
                error.response ? error.response.data : error.message
            );
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="whole-about">
            {/* <BackgroundParticles /> */}

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
                <div className="about-logo-padding">
                    <img
                        className="navBarLogoImageHeight"
                        src={navbarLogo}
                        alt="..."
                    />
                </div>
                {/* <h1 className="heading-about">
                    What does <span className="highlight">MARVINNO</span> do?
                </h1> */}
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
                            <h4 className="headingPromises">{section.title}</h4>
                            <p className="paraAboutStyling">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <OurRecognitions />

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
                <p className="about-section-headings">How to Videos</p>
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
                <h1 className="about-section-headings">BLOGS</h1>
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

            <div className="about-career-section">
                <h1 className="about-section-headings">Career at MARVINNO</h1>
                <p className="about-career-section-paragraph">
                    Join Our Innovation Journey: Embark on a career with us and
                    be part of a pioneering team driving technological
                    advancements.
                </p>
                <div className="about-career-section-form-container">
                    {!submissionSuccessful && (
                        <form
                            className="internship-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="internship-label">
                                    First name
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Last name
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            {errors.email}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Phone number
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="+91"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phoneNumber && (
                                        <span className="error">
                                            {errors.phoneNumber}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Date of Birth
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.dateOfBirth && (
                                        <span className="error">
                                            {errors.dateOfBirth}
                                        </span>
                                    )}
                                </label>
                            </div>
                            {/* <div>
                            <label className="internship-label">
                                School/College/Institution Name संस्थान का नाम:
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div> */}
                            <div>
                                <label className="internship-label">
                                    State
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Andra Pradesh">
                                            Andhra Pradesh
                                        </option>
                                        <option value="Arunachal Pradesh">
                                            Arunachal Pradesh
                                        </option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">
                                            Chandigarh
                                        </option>
                                        <option value="Chhattisgarh">
                                            Chhattisgarh
                                        </option>
                                        <option value="Dadar and Nagar Haveli">
                                            Dadar and Nagar Haveli
                                        </option>
                                        <option value="Daman and Diu">
                                            Daman and Diu
                                        </option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">
                                            Himachal Pradesh
                                        </option>
                                        <option value="Jammu and Kashmir">
                                            Jammu and Kashmir
                                        </option>
                                        <option value="Jharkhand">
                                            Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                            Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Lakshadeep">
                                            Lakshadeep
                                        </option>
                                        <option value="Madya Pradesh">
                                            Madya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                            Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                            Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                            Nagaland
                                        </option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Pondicherry">
                                            Pondicherry
                                        </option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                            Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                            Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                            Telangana
                                        </option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttaranchal">
                                            Uttarakhand
                                        </option>
                                        <option value="Uttar Pradesh">
                                            Uttar Pradesh
                                        </option>
                                        <option value="West Bengal">
                                            West Bengal
                                        </option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label className="internship-label">
                                    Area of Interest
                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="content">
                                            Content Writing
                                        </option>
                                        <option value="research">
                                            Research Work
                                        </option>
                                        <option value="presentation">
                                            Presentations
                                        </option>
                                        <option value="workshop">
                                            Organizing Workshop
                                        </option>
                                        <option value="field">
                                            Field Activities
                                        </option>
                                        <option value="social">
                                            Social Media
                                        </option>
                                        <option value="leadership">
                                            Team leadership
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    <input
                                        type="checkbox"
                                        name="termsAgreed"
                                        checked={formData.termsAgreed}
                                        onChange={handleChange}
                                        required
                                    />
                                    I agree to the Terms and Conditions
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    <input
                                        type="checkbox"
                                        name="receiveUpdates"
                                        checked={formData.receiveUpdates}
                                        onChange={handleChange}
                                    />
                                    I want to receive updates about the
                                    internship/job vacancies
                                </label>
                            </div>
                            <div className="button-container">
                                <button
                                    type="submit"
                                    className="internship-button"
                                >
                                    {!loading && <p>Submit</p>}
                                    <PulseLoader
                                        loading={loading}
                                        color="#fff"
                                    />
                                </button>
                            </div>
                        </form>
                    )}
                    {submissionSuccessful && (
                        <div className="submission-success-message">
                            <h2>Form submitted successfully!</h2>
                            <p> We will reach you soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
