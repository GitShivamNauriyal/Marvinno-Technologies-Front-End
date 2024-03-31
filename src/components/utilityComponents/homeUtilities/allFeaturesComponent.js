import React from "react";
import FeatureComponent from "./featuresComponent";
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

export default function allFeaturesComponent() {
    return (
        <div>
            <p className="headingFeatures">Features</p>
            <div className="row rowFeaturesCss">
                <div className="col-sm  rowPaddingFeatures firstColoumn">
                    <FeatureComponent
                        icon={touchControlImage}
                        heading="Touch Control"
                        description="Capacitive Touch Buttons, Convienience at your finger tips"
                    />
                    <FeatureComponent
                        icon={ratingsImage}
                        heading="Ratings & Size"
                        description="Available in 4M, 6M, 8M sizes with USB Charging"
                    />
                    <FeatureComponent
                        icon={ledFeaturesImage}
                        heading="LED Features"
                        description="LED Feature to see in dark, red for OFF & blue for ON"
                    />
                    <FeatureComponent
                        icon={testedAndSecuredImage}
                        heading="Tested & Secure"
                        description="Made with certified Components Passed Various Safety & load tests"
                    />
                </div>
                <div className="col-sm rowPaddingFeatures secondColoumn">
                    <FeatureComponent
                        icon={applicationSupportImage}
                        heading="App Support"
                        description="Android App and iOS App support"
                    />
                    <FeatureComponent
                        icon={technologyImage}
                        heading="Technology"
                        description="Based on IoT platform with OTA software updates"
                    />
                    <FeatureComponent
                        icon={timerImage}
                        heading="Timer & Scheduling"
                        description="To turn on/off appliance at predefined times"
                    />
                    <FeatureComponent
                        icon={sharingImage}
                        heading="Sharing & Scenes"
                        description="Multi-User control with custom scenes and routines"
                    />
                </div>
                <div className="col-sm rowPaddingFeatures rowPaddingFeatures-2 thirdColoumn">
                    <FeatureComponent
                        icon={voiceCommandsImage}
                        heading="Voice Commands"
                        description="Voice control your devices using Amazon Alexa "
                    />
                    <FeatureComponent
                        icon={retrofitImage}
                        heading="Retrofit & Adaptable"
                        description="Fits in existing wall spaces , Makes existing devices smart"
                    />
                    <FeatureComponent
                        icon={lookAndFeelImage}
                        heading="Look & Feel"
                        description="Variety of colors & textures, Customizable frontpanel design"
                    />
                    <FeatureComponent
                        icon={safeANdHasslefreeImage}
                        heading="Safe & Hassle Free"
                        description="Fire and Shock proof , No need of additional wiring"
                    />
                </div>
                <div className="col-sm rowPaddingFeatures fourthColoumn rowPaddingFeatures-2">
                    <FeatureComponent
                        icon={energyImage}
                        heading="Energy Efficient"
                        description="Saves money by helping you in keeping electricity bills in check"
                    />
                    <FeatureComponent
                        icon={resetImage}
                        heading="Reset & Connectivity"
                        description="Auto-Reset function with Inverter support in every Device"
                    />
                    <FeatureComponent
                        icon={supportImage}
                        heading="Support & Service"
                        description="Made in India product with 24/7 support and 12 months warranty"
                    />
                    <FeatureComponent
                        icon={energyEfficient}
                        heading="Eco friendly"
                        description="No use of single use plastic in product packaging"
                    />
                </div>
            </div>
        </div>
    );
}
