import React from "react";
import "../../css/homeCss/description.css";
import AllFeaturesComponent from "../homeUtilities/allFeaturesComponent";
import descriptionImage1 from "../../images/dec_img_1.png";
import descriptionImage2 from "../../images/dec_img_2.png";
import descriptionImage3 from "../../images/dec_img_3.png";
import voiceControlUsingAlexaImage from "../../images/website icons/Alexa pic .png";
import marvinnoApplicationImage from "../../images/website icons/marvinnoAppImageCascade.png";
import flauntYourSmartHomeOnSocialMedia from "../../images/flauntYourHomeOnSocialMediaAbout.png";
import ReadMore from "./readMore";

export default function description(props) {
    return (
        <div>
            <div className="backgroundShadowOfTemplate row">
                <div className="toCenterTemplateCss col-md-3 toCenterTemplateCss-1">
                    <div className="card-body cardBodyWidth card">
                        <h5 className="card-title paraHeadingCss">
                            <span className="home-cards-span">n</span>Discover
                            Infinite Possibilities
                            <span className="home-cards-span">l</span>
                        </h5>
                        <img
                            className="card-img-top"
                            src={descriptionImage1}
                            alt="Card img cap"
                        />
                        <p className="paraPaddingDescription card-text">
                            Marvinno SPECTRUM range of devices gives you the
                            power of IoT and brings infinite possibilities to
                            your home/office in making your lives smarter.
                            <ReadMore
                                text="           Bring home the Marvinno SPECTRUM range of devices and convert your existing homes/office into smart homes/offices. Marvinno Devices not just transform your homes, it also leads you to a smarter living experience.
              Now you will never be far away from your loved place, be it your home or your office, Marvinno lets you have the control of your homes electrical appliances with you anytime & anywhere.
              The time has come to start living with the technologies of IoT & Automation to make our lives easy, comfortable, fast, safe and smarter.
              "
                            />
                        </p>
                    </div>
                </div>
                <div className="toCenterTemplateCss col-md-3 toCenterTemplateCss-2">
                    <div className="card-body cardBodyWidth card">
                        <h5 className="card-title paraHeadingCss">
                            <span className="home-cards-span">l</span>Choose
                            Smarter way of Living
                            <span className="home-cards-span">l</span>
                        </h5>
                        <img
                            className="card-img-top"
                            src={descriptionImage2}
                            alt="Card img cap"
                        />
                        <p className="paraPaddingDescription card-text">
                            Marvinno devices are made according to the standard
                            need & requirement of homes & offices. They respond
                            to commands, make life hassle free.
                            <ReadMore
                                text="          Marvinno Devices keeps you connected with your place every time. These devices 
          donot require any additional wiring or fittings, they fit in your existing wall switch          board spaces and make your homes beautiful and smart. They are of standard sizes and are available in 8 different modules each designed & developed according to the standard requirement of homes and offices. Marvinno devices are of 4M, 6M and 12M modular sizes. The front panel is changeable and customizable, so you can replace it or custom made it with any color or design you like without replacing the whole device that too at a nick of a price. 
          "
                            />
                        </p>
                    </div>
                </div>
                <div className="toCenterTemplateCss col-md-3 toCenterTemplateCss-3">
                    <div className="card-body cardBodyWidth card">
                        <h5 className="card-title paraHeadingCss">
                            <span className="home-cards-span"></span>With you,
                            For you, Anytime
                            <span className="home-cards-span"></span>
                        </h5>
                        <img
                            className="card-img-top"
                            src={descriptionImage3}
                            alt="Card img cap"
                        />
                        <p className="paraPaddingDescription1 card-text">
                            Remain connected with your loved place with the help
                            of our mobile applications and Alexa compatibility
                            lets you control your electrical appliances using
                            voice.
                            <ReadMore
                                text="          Our Specially designed android and iOS apps will let you control the status of your    electrical appliances, set timer function, schedule them, create specific rooms & groups, manage multiple appliances at once, create scenes to control a group of appliances with a single command and most importantly, all this you can do anytime and from anywhere.

          Marvinno devices are Alexa compatible as well, once you power up the device and configure it via the app, it automatically adds the device buttons to the Alexa and you can voice command the Alexa (to Alexa smart speaker or Alexa app) to control your devices. The voice command feature lets you control your appliances completely handsfree.
          
          "
                            />
                        </p>
                    </div>
                </div>
            </div>

            <AllFeaturesComponent />

            <div className="completeDivFlexbox completeDivFlexbox-1">
                <div className="dataCss dataCss-1">
                    <h5 className="headingCSS">Marvinno APP</h5>
                    <p className="descriptionCSS">
                        Our specially designed and developed mobile applications
                        are available at Playstore (for Android phones) and
                        Appstore (for iPhones). Our application keeps you in
                        control of your home/office 24/7. User Interface is very
                        friendly and all the features are built in.
                    </p>
                </div>
                <div className="imageDivCSS">
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
                <div className="imageDivCSS">
                    <p className="imageCSSCenter">
                        <img
                            className="imageCSS"
                            src={voiceControlUsingAlexaImage}
                            alt="..."
                        />
                    </p>
                </div>
                <div className="dataCss dataCss-2">
                    <h5 className="headingCSS">Voice Control Using Alexa</h5>
                    <p className="descriptionCSS">
                        Control your devices handsfree using voice commands with
                        the help of Amazon Alexa. No need to get up or use
                        mobile when in your home, your voice will control the
                        appliances and that too promptly and fast.You can also
                        control multiple electrical appliances together by
                        creating a scene. Just say the scene name and see the
                        magic yourself e.g., You can create a scene with name I
                        am Home and add your bedroom lights and fan together in
                        a group, and when you say, Alexa, I am Home, it will
                        automatically turn on the grouped appliances. Similarly,
                        you can create multiple scenes and enjoy the new way of
                        living.
                    </p>
                </div>
            </div>
            <div className="completeDivFlexbox completeDivFlexbox-3">
                <div className="dataCss dataCss-3">
                    <h5 className="headingCSS">
                        Flaunt Your Smart Home on Social Media
                    </h5>
                    <p className="descriptionCSS">
                        There is no limit to how much you can do with your
                        Marvinno Smart Home devices, enjoy its features, play
                        with its scenes, save your time with remote access and
                        share your new and smart life with your friends and
                        loved ones on social media.Connect with us on our social
                        media channels, tag us in your posts, stories, reels,
                        etc and if you like our products & services, recommend
                        us to others and we will reward you with exiting offers
                        and discounts on your recurrent purchases.
                    </p>
                </div>
                <div className="imageDivCSS">
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
    );
}
