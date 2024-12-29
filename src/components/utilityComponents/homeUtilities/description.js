import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/homeCss/description.css";
import AllFeaturesComponent from "../homeUtilities/allFeaturesComponent";
import AppandSocials from "../homeUtilities/AppandSocials";
import descriptionImage1 from "../../images/dec_img_1.png";
import descriptionImage2 from "../../images/dec_img_2.png";
import descriptionImage3 from "../../images/dec_img_3.png";
import ReadMore from "./readMore";

export default function description() {
    AOS.init({ duration: 500 });

    return (
        <div className="home-description">
            <div className="backgroundShadowOfTemplate home-flex-row">
                <div
                    className="toCenterTemplateCss col-md-3 toCenterTemplateCss-1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="card-body cardBodyWidth">
                        <h5 className="card-title paraHeadingCss">
                            Discover Infinite Possibilities
                        </h5>
                        <img
                            className="card-img-top"
                            src={descriptionImage1}
                            alt="Card img cap"
                        />
                        <p className="paraPaddingDescription card-text">
                            Introducing Marvinno's SPECTRUM lineup - where your
                            home or office transforms into a futuristic
                            wonderland! Say hello to a world where your space
                            becomes a smart, savvy oasis.
                            <ReadMore
                                text="               With Marvinno, your humble abode or workplace is just a tap
                              away from a tech-savvy makeover. Now you can boss around your appliances
                               wherever you roam. It's time to embrace the IoT and Automation era for
                                a life filled with ease, speed, and smarts!"
                            />
                        </p>
                        {/* <p className="paraPaddingDescription card-text">
                            Marvinno SPECTRUM range of devices gives you the
                            power of IoT and brings infinite possibilities to
                            your home/office in making your lives smarter.
                            <ReadMore
                                text="  Bring home the Marvinno SPECTRUM range of devices and convert your existing homes/office into smart homes/offices. Marvinno Devices not just transform your homes, it also leads you to a smarter living experience.
                                        Now you will never be far away from your loved place, be it your home or your office, Marvinno lets you have the control of your homes electrical appliances with you anytime & anywhere.
                                        The time has come to start living with the technologies of IoT & Automation to make our lives easy, comfortable, fast, safe and smarter.
              "
                            />
                        </p> */}
                    </div>
                </div>
                <div
                    className="toCenterTemplateCss col-md-3 toCenterTemplateCss-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="card-body cardBodyWidth card">
                        <h5 className="card-title paraHeadingCss">
                            Choose Smarter way of Living
                        </h5>
                        <img
                            className="card-img-top"
                            src={descriptionImage2}
                            alt="Card img cap"
                        />
                        <p className="paraPaddingDescription card-text">
                            Marvinno gadgets are like the superheroes of homes
                            and offices, swooping in to save the day with their
                            custom-made magic!
                            <ReadMore
                                text="          They follow your every command,
                                 making life a breeze.These nifty devices are 
                                 all about fitting seamlessly into your space
                                 without any fuss. No need for extra wires or
                                 renovations; they snugly slide into your existing
                                 switchboard nooks, adding a touch of elegance
                                 and intelligence to your abode. With sizes 
                                 anging from 2M to 12M, and 12 different modules
                                 to choose from, Marvinno is basically the superhero
                                 team of the tech world!
                                 And here's the real kicker - you can jazz up
                                 their look whenever you fancy! The front panel
                                 is like a chameleon, easily switchable to match
                                 your mood or style, all without breaking the bank.
                                 Smart AND stylish? Marvinno has got it all!"
                            />
                        </p>
                        {/* <p className="paraPaddingDescription card-text">
                            Marvinno devices are made according to the standard
                            need & requirement of homes & offices. They respond
                            to commands, make life hassle free.
                            <ReadMore
                                text="          Marvinno Devices keeps you connected with your place every time. These devices 
          donot require any additional wiring or fittings, they fit in your existing wall switch          board spaces and make your homes beautiful and smart. They are of standard sizes and are available in 8 different modules each designed & developed according to the standard requirement of homes and offices. Marvinno devices are of 4M, 6M and 12M modular sizes. The front panel is changeable and customizable, so you can replace it or custom made it with any color or design you like without replacing the whole device that too at a nick of a price. 
          "
                            />
                        </p> */}
                    </div>
                </div>
                <div
                    className="toCenterTemplateCss col-md-3 toCenterTemplateCss-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
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
                            Stay in sync with your favorite spot thanks to our
                            nifty mobile apps and Alexa buddy that lets you boss
                            around your gadgets with just your voice!
                            <ReadMore
                                text="          Our slick Android and iOS apps are
                                 your go-to for managing all your appliances - toggle
                                 them on and off, set timers, create schedules,
                                 organize rooms & groups, handle multiple gadgets
                                 at once, and even set up scenes for that one-command
                                 magic. Best part? You can do all of this anytime,
                                 anywhere! Our Marvinno gadgets are best buds with
                                 Alexa too - just power up, set up via the app, and
                                 voilà! Your Alexa can now take commands to control
                                 your devices, all without lifting a finger.
                                 Time to sit back and let your voice do all the heavy
                                 lifting!"
                            />
                        </p>
                        {/* <p className="paraPaddingDescription1 card-text">
                            Remain connected with your loved place with the help
                            of our mobile applications and Alexa compatibility
                            lets you control your electrical appliances using
                            voice.
                            <ReadMore
                                text="          Our Specially designed android and iOS apps will let you control the status of your    electrical appliances, set timer function, schedule them, create specific rooms & groups, manage multiple appliances at once, create scenes to control a group of appliances with a single command and most importantly, all this you can do anytime and from anywhere.

          Marvinno devices are Alexa compatible as well, once you power up the device and configure it via the app, it automatically adds the device buttons to the Alexa and you can voice command the Alexa (to Alexa smart speaker or Alexa app) to control your devices. The voice command feature lets you control your appliances completely handsfree.
          
          "
                            />
                        </p> */}
                    </div>
                </div>
            </div>

            <AllFeaturesComponent />
            <AppandSocials />
        </div>
    );
}
