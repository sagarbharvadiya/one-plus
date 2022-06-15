import React from "react";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";


function OurTeam() {
    return (
        <>
            <div className="card-section our-team-section">
                <div className=" container">


                    <div className="cardwrapper">

                        <div className="section-title"><h2>OUR TEAM</h2></div>
                        <div id="row">
                            <div className="blog-section ">
                            <div className="blog-box team">
                                    <div className="thumbnail">
                                        <div className="card-image">
                                            <img src={img1} />
                                        </div>
                                        <div className="caption">
                                            <div className="blog-title">
                                            <h4>KOICHI YOKOZEKI</h4>
                        <p>Founder</p>
                                            </div>
                                            <div className="card-folder">

                                                <div className="icons">
                                                <a href="https://www.linkedin.com/in/koichi-yokozeki-b45675159/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-box team">
                                    <div className="thumbnail">
                                        <div className="card-image">
                                            <img src={img2} />
                                        </div>
                                        <div className="caption">
                                            <div className="blog-title">
                                                <h4>XINGNA FU</h4>
                                                <p>Founder</p>
                                            </div>
                                            <div className="card-folder">

                                                <div className="icons">
                                                    <a href="https://www.linkedin.com/in/xingna-fu-15b453195/"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-box team">
                                    <div className="thumbnail">
                                        <div className="card-image">
                                            <img src={img3} />
                                        </div>
                                        <div className="caption">
                                            <div className="blog-title">
                                                <h4>ADITI AYARE</h4>
                                                <p>Founder</p>
                                            </div>
                                            <div className="card-folder">

                                                <div className="icons">
                                                    <a href="https://www.linkedin.com/in/aditiayare/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OurTeam;