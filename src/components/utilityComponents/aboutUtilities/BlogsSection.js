import React from "react";
import blogsImage1 from "../../images/blogImage-1.jpeg";
import blogsImage2 from "../../images/blogImage-2.jfif";
import blogsImage3 from "../../images/blogImage-3.jpg";

import "../../css/aboutCss/blogs.css";

const BlogsSection = () => {
    return (
        <div>
            <div className="section-4-about">
                <h1 className="about-section-headings">BLOGS</h1>
                <hr />
                <div className="blogSectionCompleteDiv">
                    {/* First Blog */}
                    <div className="blogsThreeColomn main-blog">
                        <div className="blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage1}
                                    alt="Blog 1"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="/blogs/indore"
                                    >
                                        Marvinno Has Recently Exhibited its
                                        products line
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    At the 2nd Electric Expo held in Indore, MP
                                    from 8th October to 10th October. There were
                                    multiple stalls offering many Electrical
                                    devices but Marvinno stood out...
                                </p>
                                <p className="center-button-continue-reading">
                                    <a
                                        className="continue-reading-button"
                                        href="/blogs/indore"
                                    >
                                        CONTINUE
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Blog */}
                    <div className="blogsThreeColomn">
                        <div className="blog secondary-blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage2}
                                    alt="Blog 2"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="https://www.digilantern.com/blogs/healthcare-industry-from-transactions-to-strong-brand-identity/"
                                    >
                                        FROM TRANSACTIONS TO STRONG BRAND
                                        IDENTITY
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    Most of the traditional businesses are built
                                    and run on references, particularly in
                                    Healthcare. I notice every day during my
                                    interactions with Healthcare....
                                </p>
                                <p className="center-button-continue-reading">
                                    <a
                                        className="continue-reading-button"
                                        href="https://www.digilantern.com/blogs/healthcare-industry-from-transactions-to-strong-brand-identity/"
                                    >
                                        CONTINUE
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Blog */}
                    <div className="blogsThreeColomn">
                        <div className="blog secondary-blog">
                            <div className="centerBlogImage">
                                <img
                                    className="blogImageCss"
                                    src={blogsImage3}
                                    alt="Blog 3"
                                />
                            </div>
                            <div className="blog-text-content">
                                <p className="heading-blogs-name">
                                    <a
                                        className="blogName"
                                        href="https://www.digilantern.com/blogs/medical-web-solutions-or-word-of-mouth/"
                                    >
                                        MEDICAL WEB SOLUTIONS OR A WORD OF
                                        MOUTH?
                                    </a>
                                </p>
                                <p className="blogDescription">
                                    So, in the times of technology and
                                    digitization, it is mostly the inherent
                                    businesses that are still relying on the
                                    traditional marketing method -'Word of
                                    Mouth'....
                                </p>
                                <p className="center-button-continue-reading">
                                    <a
                                        className="continue-reading-button"
                                        href="https://www.digilantern.com/blogs/medical-web-solutions-or-word-of-mouth/"
                                    >
                                        CONTINUE
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsSection;
