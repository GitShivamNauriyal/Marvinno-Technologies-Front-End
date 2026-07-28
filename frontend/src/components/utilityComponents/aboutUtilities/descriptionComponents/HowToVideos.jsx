import React from "react";
import { Link } from "react-router-dom";
import HowToVideo1 from "../../../images/How-to-video-2.mp4";
import HowToVideo2 from "../../../images/How-to-video-1.mp4";
import HowToVideo3 from "../../../images/How-to-video-3.mp4";

import "../../../css/aboutCss/howToVideos.css";

const HowToVideos = () => {
    return (
        <div>
            <div className="about-how-to-videos-section" data-aos="fade-up">
                <p className="about-section-headings">'How to' Videos</p>
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
                            <Link to="/about/products" alt="products">
                                <p>Checkout videos about our products</p>
                            </Link>
                        </div>
                        <div className="how-to-videos-view-more">
                            <Link to="/about/products" alt="products">
                                <h3>View more</h3>
                            </Link>
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
                            <Link to="/about/projects" alt="projects">
                                <p>Checkout videos about our projects</p>
                            </Link>
                        </div>
                        <div className="how-to-videos-view-more">
                            <Link to="/about/projects" alt="projects">
                                <h3>View more</h3>
                            </Link>
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
                            <Link to="/about/installations" alt="installations">
                                <p>See how to install our modules</p>
                            </Link>
                        </div>
                        <div className="how-to-videos-view-more">
                            <Link to="/about/installations" alt="installations">
                                <h3>View more</h3>
                            </Link>
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
                            <Link
                                to="/about/configurations"
                                alt="device-config"
                            >
                                <p>See how to configure our devices</p>
                            </Link>
                        </div>
                        <div
                            className="how-to-videos-view-more"
                            alt="device-config"
                        >
                            <Link to="/about/configurations">
                                <h3>View more</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToVideos;
