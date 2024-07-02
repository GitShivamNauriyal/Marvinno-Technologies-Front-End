import React from "react";
import Navbar from "../utilityComponents/commonUtilities/nonRespNavbar";
import Footer from "../utilityComponents/commonUtilities/footer";
import Carousel from "../utilityComponents/homeUtilities/CarouselHome";
import Description from "../utilityComponents/homeUtilities/description";
import Reviews from "../utilityComponents/homeUtilities/reviews";

// images for reviews
// import reviewImage1 from "../images/reviewPersonImage-1.jfif"
// import reviewImage2 from "../images/reviewPersonImage-2.jfif"
// import reviewImage3 from "../images/reviewPersonImage-3.jfif"
// import reviewImage4 from "../images/reviewPersonImage-4.jpeg"
// import reviewImage5 from "../images/reviewPersonImage-5.jpeg"
// import reviewImage6 from "../images/reviewPersonImage-6.jpeg"

// team images
import teamImg1 from "../images/team-img-1.jpg";
import teamImg2 from "../images/team-img-2.jpg";
import teamImg3 from "../images/team-img-3.jpg";
import teamImg4 from "../images/team-img-4.jpg";
import teamImg5 from "../images/team-img-5.jpg";
import teamImg6 from "../images/team-img-6.jpg";

export default function home() {
    const usersObj = {
        user1: {
            image: teamImg1,
            name: "Mayank Agarwal",
            city: "New Delhi, India",
            message:
                "Marvinno Smart Home Switch Board has a great appeal and it works flawlessly.",
        },
        user2: {
            image: teamImg2,
            name: "Rohit Agarwal",
            city: "Noida, India",
            message: "A very good product from a new age start-up company.",
        },
        user3: {
            image: teamImg3,
            name: "Disha Chadha",
            city: "Dehradun, India",
            message:
                "Voice control feature helps me control my room's lights hands- free, switching works very fast.",
        },
        user4: {
            image: teamImg4,
            name: "Piyush Chauhan",
            city: "Dehradun, India",
            message: "Innovative product from a stratup company",
        },
        user5: {
            image: teamImg5,
            name: "Shivam Agarwal",
            city: "Delhi, India",
            message: "A very good product for technology lovers",
        },
        user6: {
            image: teamImg6,
            name: "Pawan (K G Somani Group)",
            city: "Delhi, India",
            message: "Well built tech product to cater the needs of consumers",
        },
    };

    return (
        <div>
            <Navbar />
            <Carousel />
            <Description />
            <Reviews users={usersObj} />
            <Footer />
        </div>
    );
}
