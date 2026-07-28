import React from "react";
import CardImage from "./cardImage";
import "../../css/solutionsCss/description.css";
import homeAutomation from "../../images/homeAutomation-1.png";
import hotelAutomation from "../../images/hotelAutomation-1.jpg";
import industryAutomation from "../../images/industryAutomation-1.webp";
import smartCityAutomation from "../../images/smartCity-1.jpg";

export default function Description() {
    return (
        <div className="solutions-master">
            {/* 2026 Solutions Hero Banner */}
            <div className="solutions-hero-banner">
                <span className="solutions-hero-tag">Smart Ecosystems</span>
                <h1 className="solutions-hero-title">Next-Gen Automation Solutions</h1>
                <p className="solutions-hero-subtitle">
                    Intelligent IoT automation tailored for residential, hospitality, industrial, and urban infrastructure.
                </p>
            </div>

            <div className="solutions-container">
                <div className="solutions-div-grid">
                    <CardImage
                        badge="Residential & Office"
                        automation="Home & Office Automation"
                        description="Marvinno provides complete Home Automation Solutions including SPECTRUM Smart Touch Switch Boards, Smart Curtains, Intelligent Lighting, and Anti-Theft Protection."
                        readmore="Marvinno offers customized Home/Office Automation packages suitable for 1BHK to penthouses and luxury bungalows. Our team manages full end-to-end installation, wiring, Alexa/Siri voice setup, and provides comprehensive hands-on user guidance."
                        img={homeAutomation}
                    />

                    <CardImage
                        badge="Hospitality IoT"
                        automation="Hotel Automation"
                        description="Enrich the guest in-room experience while maximizing operational efficiency and energy savings for hotel properties."
                        readmore="Centralized property management allows live occupancy monitoring, asset control, and security tracking from a single dashboard. Automated energy optimization sensors prevent wasteful AC and lighting usage across guest rooms and hallways."
                        img={hotelAutomation}
                    />

                    <CardImage
                        badge="Industrial 4.0"
                        automation="Industrial Automation"
                        description="Drive operational savings, 24/7 continuous production, and zero-error precision with Marvinno's industrial automation systems."
                        readmore="Industrial automation eliminates repetitive manual errors, reduces overhead costs, and ensures 24/7/365 continuous manufacturing operation. Automated sensor telemetry provides real-time data accuracy to optimize waste reduction and plant safety."
                        img={industryAutomation}
                    />

                    <CardImage
                        badge="Urban Infrastructure"
                        automation="Smart City Automation"
                        description="Empower municipal services with automated digital citizen portals, smart grid sensors, and scalable public utility automation."
                        readmore="Automated public service portals enable citizens to request services and documents online anytime. Data-driven infrastructure analysis allows smart cities to optimize energy allocation, traffic management, and municipal budgets."
                        img={smartCityAutomation}
                    />
                </div>
            </div>
        </div>
    );
}
