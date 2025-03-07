import React from "react";
import CardImage from "./cardImage";
import "../../css/solutionsCss/description.css";
import homeAutomation from "../../images/homeAutomation-1.png";
import hotelAutomation from "../../images/hotelAutomation-1.jpg";
import industryAutomation from "../../images/industryAutomation-1.webp";
import smartCityAutomation from "../../images/smartCity-1.jpg";
export default function description() {
    return (
        <div className="solutions-master">
            <div className="solutions-div-grid">
                <CardImage
                    automation="Home/Office Automation"
                    description="Marvinno provides complete Home Automation Solution which includes SPECTRUM range Smart Touch Switch Boards, Smart Curtain Systems, Smart Lights & Accessories and Anti - Theft Device."
                    readmore="          Marvinno offers different Home/Office Automation Packages suitable for every type of house and office spaces Marvinno team takes care of all the installations, setups, wiring, settings, configurations, scenes creation, Alexa voice setup and gives hands on training to the users about device handling, setups and all the features. 
      Complete Home Automation range includes packages for 1BHK, 2BHK, 3BHK, 4BHK, 5BHK, Apartments, Duplex Houses, Penthouse, Villa, Bungalow, Mansion and every other type of residential and commercial property.  
      Users have the option to either choose from the default colors of front panel of smart touch boards or they can customize the color, design and style of front panels according to their liking or the interior of their house."
                    img={homeAutomation}
                />

                <CardImage
                    automation="Hotel Automation"
                    description="Marvinno's Hotel Automation solutions enrich the hotel guest's in-room experience and improve the operational and energy efficiency of the hotel. Guests are provided the luxury to control."
                    readmore="           Centralized Property Management allows monitoring of occupancy, safety/ security monitoring, control of all hotel electrical assets & devices from a single point. Energy optimization sensors eliminate wastage of energy by ACs in rooms, and lighting in the hotel aisles, bathrooms & more. The choice of wireless and wired solutions offer flexibility & make deployment economical for both existing & new hotels."
                    img={hotelAutomation}
                />

                <CardImage
                    automation="Industrial Automation"
                    description="Lower operating cost: Industrial automation eliminates healthcare costs and paid leave and holidays associated with a human operator. Further, industrial automation does not require other employee benefits such as bonuses, pension coverage, etc."
                    readmore="          Above all, although it is associated with a high initial cost it saves the monthly wages of the workers which leads to substantial cost savings for the company. The maintenance cost associated with machinery used for industrial automation is less because it does not often fail. If it fails, only computer and maintenance engineers are required to repair it. High Productivity: many companies hire hundreds of production workers for up to three shifts to run the plant for the maximum number of hours, the plant still needs to be closed for maintenance and holidays. Industrial automation fulfills the aim of the company by allowing the company to run a manufacturing plant for 24 hours a day 7 days a week and 365 days a year. This leads to a significant improvement in the productivity of the company. High Quality: Automation alleviates the error associated with a human being. Further, unlike human beings, robots do not involve any fatigue, which results in products with uniform quality manufactured at different times. High Flexibility:
      Adding a new task in the assembly line requires training with a human operator, however, robots can be programmed to do any task. This makes the manufacturing process more flexible. High Information Accuracy: Adding automated data collection can allow you to collect key production information, improve data accuracy, and reduce your data collection costs.  This provides you with the facts to make the right decisions when it comes to reducing waste and improving your processes. High Safety: Industrial automation can make the production line safe for employees by deploying robots to handle hazardous conditions."
                    img={industryAutomation}
                />

                <CardImage
                    automation="Smart City"
                    description="Every citizen would be able to request these services, and the 'smart' city would be able to process most of the workload automatically. No more standing in line on every Monday morning, but already being able to request the new document online."
                    readmore="          You would already be able to upload your photo, insert your key contact information and execute the payment. Additional features, such as uploading a police report, could be added very easily. The benefits of delivering automated services to citizens are easily identified: The self service portal is highly scalable. With a single portal, all citizens of a big city can be serviced. Additionally, automated services can be requested after office hours and during the weekends. The self service interface assists smart cities in making data-driven decisions based on on the interactions of its citizens. Smart cities 'know' what kind of services citizens are looking for and when they would like to receive theses services. As a result, cities can plan their resources more effectively. A smart city focuses on it citizens, making it a user-centric approach. City services are provided based on the wishes and preferences of of their citizens. By automating frequently occurring tasks (passport requests, parking permits, etc) unnecessary manual labor is eliminated, freeing up community budgets for different purposes. Automated services help a city prepare for the future and to become a smart city…"
                    img={smartCityAutomation}
                />
            </div>
        </div>
    );
}
