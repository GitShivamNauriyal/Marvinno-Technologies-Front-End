import React from "react";
import HowToVideo1 from "../../../images/How-to-video-2.mp4";
import HowToVideo2 from "../../../images/How-to-video-1.mp4";
import HowToVideo3 from "../../../images/How-to-video-3.mp4";

const HowToVideos = () => {
    return (
        <div>
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
        </div>
    );
};

export default HowToVideos;
