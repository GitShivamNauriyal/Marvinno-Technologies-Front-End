import React from "react";
import voiceControlUsingAlexaImage from "../../images/website icons/Alexa pic .png";
import marvinnoApplicationImage from "../../images/website icons/marvinnoAppImageCascade.png";
import flauntYourSmartHomeOnSocialMedia from "../../images/flauntYourHomeOnSocialMediaAbout.png";
import appStoreImage from "../../images/website icons/appstoreLink.png";
import playStoreImage from "../../images/website icons/googlePlayLink.png";
import {
    PiXLogo,
    PiFacebookLogo,
    PiInstagramLogo,
    PiYoutubeLogo,
    // PiPinterestLogo,
    PiLinkedinLogoLight,
} from "react-icons/pi";
import "../../css/homeCss/description.css";

const AppandSocials = () => {
    return (
        <div>
            <div className="app-alexa-social-div">
                <div className="completeDivFlexbox completeDivFlexbox-1">
                    <div className="dataCss dataCss-1" data-aos="fade-right">
                        <h5 className="headingCSS">Marvinno APP</h5>
                        <p className="descriptionCSS">
                            Our top-notch mobile apps are up for grabs on
                            Playstore (for Android fans) and Appstore (for
                            iPhone enthusiasts). Dive into a world where you
                            rule your domain round the clock, thanks to our
                            super user-friendly interface and jam-packed
                            features!
                        </p>
                        <div className="app-download-links">
                            <a
                                className="footer-download-images"
                                target="blank"
                                href="https://play.google.com/store/apps/details?id=in.marvinno"
                            >
                                <img
                                    className="footer-download-images"
                                    src={playStoreImage}
                                    alt="playstore link"
                                />
                            </a>
                            <br />
                            <a
                                className="footer-download-images"
                                target="blank"
                                href="https://apps.apple.com/in/app/marvinno/id1615715918"
                            >
                                <img
                                    className="footer-download-images appstore-link"
                                    src={appStoreImage}
                                    alt="appstore link"
                                />
                            </a>
                            <br />
                        </div>
                    </div>
                    <div className="imageDivCSS" data-aos="fade-left">
                        <p className="imageCSSCenter">
                            <img
                                className="imageCSS"
                                src={marvinnoApplicationImage}
                                alt="..."
                            />
                        </p>
                    </div>
                </div>
                <div className="completeDivFlexbox completeDivFlexbox-2">
                    <div className="imageDivCSS" data-aos="fade-right">
                        <p className="imageCSSCenter">
                            <img
                                className="imageCSS"
                                src={voiceControlUsingAlexaImage}
                                alt="..."
                            />
                        </p>
                    </div>
                    <div className="dataCss dataCss-2" data-aos="fade-left">
                        <h5 className="headingCSS">
                            Voice Control Using Alexa
                        </h5>
                        <p className="descriptionCSS">
                            Take charge of your gadgets hands-free with Amazon
                            Alexa's voice commands! No more scrambling for your
                            phone or getting up - just let your voice work its
                            magic on your home devices in a flash. Want to
                            control a bunch of gizmos at once? Create a scene,
                            like "I'm Home", grouping your bedroom lights and
                            fan together. Then, simply say the scene name to
                            Alexa and watch the enchantment unfold as your
                            devices spring to life. Keep crafting new scenes and
                            revel in this futuristic way of living!
                        </p>
                    </div>
                </div>
                <div className="completeDivFlexbox completeDivFlexbox-3">
                    <div className="dataCss dataCss-3" data-aos="fade-right">
                        <h5 className="headingCSS">
                            Flaunt Your Smart Home on Social Media
                        </h5>
                        <p className="descriptionCSS">
                            With your Marvinno Smart Home gadgets, the
                            possibilities are endless! Dive into its cool
                            features, create scenes that amaze, and zap away
                            chores with remote control. Share the smart fun with
                            pals on social media. Join us online, tag us in your
                            posts, stories, and reels. If you dig our products,
                            spread the word and get rewarded with sweet deals on
                            future buys!
                        </p>
                        <div className="home-social-media-link-container">
                            <a href="https://www.youtube.com/channel/UCO9cJ8f5HztqR2HcM9XFY0w">
                                <PiYoutubeLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.instagram.com/marvinnotechnologies/">
                                <PiInstagramLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.facebook.com/marvinnotechnologies/">
                                <PiFacebookLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.twitter.com/marvinnotech">
                                <PiXLogo className="connect-social-media-link" />
                            </a>
                            {/* <a href="https://pin.it/3gPNrJy">
                                <PiPinterestLogo className="connect-social-media-link" />
                            </a> */}
                            <a href="https://www.linkedin.com/company/marvinno-technologies/">
                                <PiLinkedinLogoLight className="connect-social-media-link" />
                            </a>
                        </div>
                    </div>
                    <div className="imageDivCSS" data-aos="fade-left">
                        <p className="imageCSSCenter">
                            <img
                                className="imageCSS"
                                src={flauntYourSmartHomeOnSocialMedia}
                                alt="..."
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppandSocials;
