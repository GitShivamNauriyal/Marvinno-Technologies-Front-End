import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureComponent from "./featuresComponent";
import "../../css/homeCss/AllFeaturesComponent.css"; // Ensure this path is correct

// Importing images
import applicationSupportImage from "../../images/icons/applicationSupport.png";
import technologyImage from "../../images/icons/technology.png";
import timerImage from "../../images/icons/timer.png";
import sharingImage from "../../images/icons/sharing.png";
import resetImage from "../../images/icons/reset.png";
import voiceCommandsImage from "../../images/icons/voiceCommands.png";
import retrofitImage from "../../images/icons/retrofit.png";
import lookAndFeelImage from "../../images/icons/lookAndFeel.png";
import safeANdHasslefreeImage from "../../images/icons/safeANdHasslefree.png";
import supportImage from "../../images/icons/support.png";
import touchControlImage from "../../images/icons/touchControl.png";
import ratingsImage from "../../images/icons/ratings.png";
import ledFeaturesImage from "../../images/icons/ledFeatures.png";
import testedAndSecuredImage from "../../images/icons/testedAndSecured.png";
import energyImage from "../../images/icons/energy.png";
import energyEfficient from "../../images/icons/energyefficient.png";

export default function AllFeaturesComponent() {
    AOS.init({ duration: 1500 });

    const features = [
        {
            icon: touchControlImage,
            heading: "Touch Control",
            description:
                "Capacitive Touch Buttons, Convenience at your fingertips",
        },
        {
            icon: ratingsImage,
            heading: "Ratings & Size",
            description:
                "Available in 2M, 4M, 6M, 8M and 12M sizes with USB Charging",
        },
        {
            icon: ledFeaturesImage,
            heading: "LED Features",
            description: "LED Feature to see in dark Red for OFF & blue for ON",
        },
        {
            icon: testedAndSecuredImage,
            heading: "Tested & Secure",
            description:
                "Made with certified Components, Passed Various Safety & load tests",
        },
        {
            icon: applicationSupportImage,
            heading: "App Support",
            description: "Android App and iOS App support",
        },
        {
            icon: technologyImage,
            heading: "Technology",
            description: "Based on IoT platform with OTA software updates",
        },
        {
            icon: timerImage,
            heading: "Timer & Scheduling",
            description: "To turn on/off appliance at predefined times",
        },
        {
            icon: sharingImage,
            heading: "Sharing & Scenes",
            description: "Multi-User control with custom scenes and routines",
        },
        {
            icon: voiceCommandsImage,
            heading: "Voice Commands",
            description: "Voice control your devices using Amazon Alexa",
        },
        {
            icon: retrofitImage,
            heading: "Retrofit & Adaptable",
            description:
                "Fits in existing wall spaces, Makes existing devices smart",
        },
        {
            icon: lookAndFeelImage,
            heading: "Look & Feel",
            description:
                "Variety of colors & textures, Customizable front panel design",
        },
        {
            icon: safeANdHasslefreeImage,
            heading: "Safe & Hassle Free",
            description: "Fire and Shock proof, No need for additional wiring",
        },
        {
            icon: energyImage,
            heading: "Energy Efficient",
            description:
                "Saves money by helping you in keeping electricity bills in check",
        },
        {
            icon: resetImage,
            heading: "Reset & Connectivity",
            description:
                "Auto-Reset function with Inverter support in every Device",
        },
        {
            icon: supportImage,
            heading: "Support & Service",
            description:
                "Made in India product with 24/7 support and 12 months warranty",
        },
        {
            icon: energyEfficient,
            heading: "Eco friendly",
            description: "No use of single-use plastic in product packaging",
        },
    ];

    return (
        <div className="featuresMaster">
            <div className="featuresColorContainer">
                <div className="headingFeatureContainer">
                    <div className="custom-shape-divider-top-1717109912">
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
                    <h1 className="headingFeatures" data-aos="fade-left">
                        FEATURES
                    </h1>
                </div>
                <div className="featuresGrid">
                    {features.map((feature, index) => (
                        <FeatureComponent
                            key={index}
                            icon={feature.icon}
                            heading={feature.heading}
                            description={feature.description}
                        />
                    ))}
                    <div className="custom-shape-divider-bottom-1717109659">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
//
