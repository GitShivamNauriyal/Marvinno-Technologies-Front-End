import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routeComponents/home";
import Products from "./components/routeComponents/products";
import About from "./components/routeComponents/about";
import ContactUs from "./components/routeComponents/contact";
import ProductDescription from "./components/utilityComponents/productsUtilityComponents/productDescription";
import BlogPhotos from "./components/routeComponents/BlogPhotos";
import Solutions from "./components/routeComponents/solutions";
import PrivacyPolicy from "./components/routeComponents/Privacy";
import ScrollToTop from "./components/utilityComponents/commonUtilities/ScrollToTop";
import LogIn from "./components/utilityComponents/commonUtilities/LogIn";
import SignUp from "./components/utilityComponents/commonUtilities/SignUp";

import moduleS1Image1 from "../src/components/images/image/Marvinno (15) PNG/S/S black1.png";
import moduleS1Image2 from "./components/images/image/Marvinno (15) PNG/S/10/0P5A4424.png";
import moduleS1Image3 from "./components/images/image/Marvinno (15) PNG/S/S white silver 2.png";

// import moduleS2Image1 from "./components/images/S2 LED Black.png";
// import moduleS2Image2 from "./components/images/S2 LED.png";

import moduleRImage1 from "./components/images/image/Marvinno (15) PNG/R/0P5A4396.png";
import moduleRImage2 from "./components/images/image/Marvinno (15) PNG/R/R white silver 2.png";
import moduleRImage3 from "./components/images/image/Marvinno (15) PNG/R/8/0P5A4404.png";
import moduleRImage4 from "./components/images/image/Marvinno (15) PNG/Boxes/0P5A4433.png";

import modulePImage1 from "./components/images/image/Marvinno (15) PNG/P/0P5A4417.png";
import modulePImage3 from "./components/images/image/Marvinno (15) PNG/P/13/0P5A4427.png";

import moduleEImage1 from "./components/images/E LED black.png";
import moduleEImage3 from "./components/images/E LED.png";

import moduleKImage1 from "./components/images/C LED black.png";
import moduleKImage3 from "./components/images/C LED.png";

import moduleTImage1 from "./components/images/image/Marvinno (15) PNG/T/0P5A4402.png";
import moduleTImage3 from "./components/images/image/Marvinno (15) PNG/T/6/0P5A4399.png";

import moduleUImage1 from "./components/images/image/Marvinno (15) PNG/U/0P5A4394.png";
import moduleUImage2 from "./components/images/image/Marvinno (15) PNG/U/U white 2.png";
import moduleUImage3 from "./components/images/image/Marvinno (15) PNG/U/4/0P5A4391.png";

import moduleMImage1 from "./components/images/image/Marvinno (15) PNG/M/0P5A4376.png";
import moduleMImage2 from "./components/images/image/Marvinno (15) PNG/M/3/0P5A4386.png"; //black side
import moduleMImage3 from "./components/images/image/Marvinno (15) PNG/M/2/0P5A4382.png";

import moduleXImage1 from "./components/images/image/Marvinno (15) PNG/X/X pic.png";
import moduleXImage2 from "./components/images/image/Marvinno (15) PNG/X/X pic 2.png";
import moduleXImage3 from "./components/images/image/Marvinno (15) PNG/X/Module X.png";
import moduleXImage4 from "./components/images/image/Marvinno (15) PNG/X/Module X white.png";

import moduleYImage1 from "./components/images/image/Marvinno (15) PNG/Y/Y Pic.png";
import moduleYImage2 from "./components/images/image/Marvinno (15) PNG/Y/Y Pic 2.png";
import moduleYImage3 from "./components/images/image/Marvinno (15) PNG/Y/Module Y.png";
import moduleYImage4 from "./components/images/image/Marvinno (15) PNG/Y/Module Y white.png";

import moduleZImage1 from "./components/images/image/Marvinno (15) PNG/Z/Z Pic.png";
import moduleZImage2 from "./components/images/image/Marvinno (15) PNG/Z/Z Pic 2.png";
import moduleZImage3 from "./components/images/image/Marvinno (15) PNG/Z/Module Z.png";
import moduleZImage4 from "./components/images/image/Marvinno (15) PNG/Z/Module Z white.png";

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/blogs/indore" element={<BlogPhotos />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/privacy" element={<PrivacyPolicy />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/connect" element={<ContactUs />} />
                <Route exact path="/login" element={<LogIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/solutions" element={<Solutions />} />
                <Route
                    exact
                    path="/products/s1-module"
                    element={
                        <ProductDescription
                            img1={moduleS1Image2}
                            img2={moduleS1Image1}
                            img3={moduleS1Image3}
                            price="Revealing Soon"
                            bgcolor="#bfa7f469"
                            name="Module S"
                            fullform="Single Socket"
                            loadcapacity="1 x 25A Socket and 1 x 10A Switch"
                            size="4M (Modular Fitting)"
                            touchbuttons="2"
                            maxloadsocket="1 x 2500W"
                            maxloadswitch="1 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                {/* <Route
                    exact
                    path="/products/s2-module"
                    element={
                        <ProductDescription
                            bgcolor="#bfa7f469"
                            img1={moduleS2Image1}
                            img2={moduleS2Image2}
                            price="Revealing Soon"
                            name="Module S2"
                            fullform="Single Socket"
                            loadcapacity="6A Socket & 16A Switch"
                            size="4M (Modular Fitting)"
                            touchbuttons="4"
                            maxloadsocket="1000W"
                            maxloadswitch="1000W"
                            color="Gloss Black & Pearl White"
                        />
                    }
                /> */}
                <Route
                    exact
                    path="/products/p-module"
                    element={
                        <ProductDescription
                            bgcolor="#004bae49"
                            img1={modulePImage1}
                            img2={modulePImage3}
                            price="Revealing Soon"
                            name="Module P"
                            fullform="Power Module"
                            loadcapacity="(1 x 25A) and (3 x 10A)"
                            size="4M (Modular Fitting)"
                            touchbuttons="4"
                            maxloadsocket="No Socket"
                            maxloadswitch="(1 x 2000W) and (3 x 300W)"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/e-module"
                    element={
                        <ProductDescription
                            bgcolor="#5adce17d"
                            img1={moduleEImage1}
                            img2={moduleEImage3}
                            price="Revealing Soon"
                            name="Module E"
                            fullform="Electric Motor Module"
                            loadcapacity=" 2 x 16A Switch"
                            size="4M (Modular Fitting)"
                            touchbuttons="2"
                            Sensor="Real Time Tank Water Level Sensor (Wired/Wireless)"
                            maxloadswitch="1000W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                            maxloadsocket="No Socket"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/c-module"
                    element={
                        <ProductDescription
                            bgcolor="#61e6c378"
                            img1={moduleKImage1}
                            img2={moduleKImage3}
                            price="Revealing Soon"
                            name="Module C"
                            fullform="Curtain Module"
                            loadcapacity="2 x 16A Switch"
                            size="4M (Modular Fitting)"
                            touchbuttons="2 (Open & Close Curtain)"
                            maxloadsocket="No Socket"
                            maxloadswitch="1000W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/t-module"
                    element={
                        <ProductDescription
                            bgcolor="#13994d78"
                            img1={moduleTImage1}
                            img2={moduleTImage3}
                            price="Revealing Soon"
                            name="Module T"
                            fullform="TV-STB Module"
                            loadcapacity="1 x 25A Socket, 1 x 6A Socket and 2 x 10A Switches"
                            size="6M (Modular Fitting)"
                            touchbuttons="4"
                            maxloadsocket="1 x 2500W and 1 x 500W"
                            maxloadswitch="2 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/r-module"
                    element={
                        <ProductDescription
                            bgcolor="#f6cc2668"
                            img1={moduleRImage1}
                            img2={moduleRImage2}
                            img3={moduleRImage3}
                            img4={moduleRImage4}
                            price="Revealing Soon"
                            name="Module R"
                            fullform="Room Module"
                            loadcapacity="1 x 20A Switch, 4 x 10A Switches, 1 x 6A Socket "
                            size="6M (Modular Fitting)"
                            touchbuttons="6"
                            maxloadsocket="1 x 500W"
                            maxloadswitch="1 x 2500W and 4 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                            // rmodule="Max Load at Power Switch: 2500W"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/u-module"
                    element={
                        <ProductDescription
                            bgcolor="#f6872c7a"
                            img1={moduleUImage1}
                            img2={moduleUImage2}
                            img3={moduleUImage3}
                            price="Revealing Soon"
                            name="Module U"
                            fullform="Unit Module"
                            loadcapacity="3 x 10A Switches, 1 x 4 Speed Fan Dimmer and 1 x 6A Socket"
                            size="6M (Modular Fitting)"
                            touchbuttons="7"
                            maxloadsocket="1 x 500W"
                            maxloadswitch="3 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/m1-module"
                    element={
                        <ProductDescription
                            bgcolor="#f15c5c57"
                            img1={moduleMImage1}
                            img2={moduleMImage2}
                            img3={moduleMImage3}
                            price="Revealing Soon"
                            name="Module M1"
                            fullform="Master Room Module"
                            loadcapacity="5 x 10A Switches, 2 x 6A Socketes and 1 x 4 Speed Fan Dimmer"
                            size="12M (Modular Fitting)"
                            touchbuttons="9"
                            maxloadsocket="2 x 500W"
                            maxloadswitch="5 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/m3-module"
                    element={
                        <ProductDescription
                            bgcolor="#f15c5c57"
                            img1={moduleMImage1}
                            img2={moduleMImage2}
                            img3={moduleMImage3}
                            price="Revealing Soon"
                            name="Module M3"
                            fullform="8M Sq. Module"
                            loadcapacity="1 x 25A Switch, 3 x 10A Switches, 1 x 10A Socket and 1 x 4 Speed Fan Dimmer"
                            size="12M (Modular Fitting)"
                            touchbuttons="8"
                            maxloadsocket="1 x 500W"
                            maxloadswitch="1 x 2500W and 3 x 300W"
                            color="Base: Black and White"
                            frame="Frame: Gold and Chrome"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/x-module"
                    element={
                        <ProductDescription
                            bgcolor="#f15c5c57"
                            img1={moduleXImage1}
                            img2={moduleXImage2}
                            img3={moduleXImage3}
                            img4={moduleXImage4}
                            price="Revealing Soon"
                            name="Module X"
                            fullform="Four Touch Module"
                            loadcapacity="4 x 6A Switches"
                            size="2M (Modular Roma Fitting)"
                            touchbuttons="4"
                            maxloadsocket="No Socket"
                            maxloadswitch="4 x 200W"
                            color="Gloss Black & Pearl White"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/y-module"
                    element={
                        <ProductDescription
                            bgcolor="#f15c5c57"
                            img1={moduleYImage1}
                            img2={moduleYImage2}
                            img3={moduleYImage3}
                            img4={moduleYImage4}
                            price="Revealing Soon"
                            name="Module Y"
                            fullform="Power Module"
                            loadcapacity="1 x 20A Switch"
                            size="2M (Modular Roma Fitting)"
                            touchbuttons="1"
                            maxloadsocket="No Socket" /*** */
                            maxloadswitch="1 x 2500W"
                            color="Gloss Black & Pearl White"
                        />
                    }
                />
                <Route
                    exact
                    path="/products/z-module"
                    element={
                        <ProductDescription
                            bgcolor="#f15c5c57"
                            img1={moduleZImage1}
                            img2={moduleZImage2}
                            img3={moduleZImage3}
                            img4={moduleZImage4}
                            price="Revealing Soon"
                            name="Module Z"
                            fullform="Fan Module"
                            loadcapacity="1 x 4 Speed Fan Dimmer"
                            size="2M (Modular Roma Fitting)"
                            touchbuttons="3"
                            maxloadsocket="No Socket"
                            maxloadswitch="1 x 300W"
                            color="Gloss Black & Pearl White"
                        />
                    }
                />
            </Routes>
        </>
    );
}
