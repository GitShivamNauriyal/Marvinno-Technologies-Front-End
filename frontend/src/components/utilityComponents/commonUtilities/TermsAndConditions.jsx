import React from "react";
import "../../css/commonComponentsCss/PrivacyPolicy.css";
import Footer from "./footer";
import NonRespNavbar from "./nonRespNavbar";

const TermsAndConditions = () => {
    return (
        <div className="privacy-master">
            <NonRespNavbar />
            <div className="privacy-container">
                <div className="privacy-content">
                    <h1>Terms and Conditions</h1>
                    <p className="effective-date">
                        Effective Date: July 28, 2026
                    </p>

                    <section>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            Welcome to Marvinno Technologies LLP ("Company," "we," "us," or "our"). 
                            By accessing or using our website <a href="https://www.marvinno.in">www.marvinno.in</a>, 
                            mobile applications, and smart home hardware modules, you agree to be bound by these 
                            Terms and Conditions and our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and our smart switch hardware designs, firmware, 
                            trademarks, service marks, logos, website text, graphics, and code are owned by or licensed 
                            to Marvinno Technologies LLP and are protected by copyright, trademark, and patent laws.
                        </p>
                    </section>

                    <section>
                        <h2>3. Product Purchase & Payment Terms</h2>
                        <p>
                            All orders placed through the website or authorized dealers are subject to product availability 
                            and pricing confirmation. We reserve the right to refuse or cancel orders at our discretion. 
                            Payments are processed securely via authorized banking channels.
                        </p>
                    </section>

                    <section>
                        <h2>4. Warranty & Installation Guidelines</h2>
                        <p>
                            Marvinno hardware products come with a standard manufacturer warranty covering defects in 
                            materials and workmanship under normal use. Installation must follow specified electrical 
                            wiring diagrams provided in our official documentation. Improper wiring or tampering will 
                            void hardware warranty claims.
                        </p>
                    </section>

                    <section>
                        <h2>5. User Accounts & Responsibilities</h2>
                        <p>
                            If you create an account on our platform, you are responsible for maintaining the confidentiality 
                            of your account details and password, and for restricting access to your computer or mobile device.
                        </p>
                    </section>

                    <section>
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            In no event shall Marvinno Technologies LLP, its directors, employees, or partners be liable 
                            for any indirect, consequential, incidental, or punitive damages arising from your use of 
                            our hardware modules or online software services.
                        </p>
                    </section>

                    <section>
                        <h2>7. Governing Law & Dispute Resolution</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                            arising under or in connection with these Terms shall be subject to the exclusive jurisdiction 
                            of the courts in New Delhi, India.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Information</h2>
                        <p>
                            📧 Email: <a href="mailto:info@marvinno.in">info@marvinno.in</a><br />
                            🌍 Website: <a href="https://www.marvinno.in">www.marvinno.in</a><br />
                            📍 Head Office: New Delhi, India
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
