import React from "react";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";


function OurTeam(){
    return(
        <>
            <div className="card-section">
                <div className="cardwrapper">
                    <h2>CREATIVE PEOPLE</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                       has been the industry's standard dummy text ever since. Lorem Ipsum has been the 
                       industry. Lorem Ipsum has been the industry's standard dummy text since.
                    </p>
                    <div className="blog-section">
                        <div className="blog-box">
                            <div className="card-image">
                                <img src={img1}/>
                            </div>
                            <div className="blog-title">
                                <h2>HERMAN MILLER</h2>
                                <span>CO-FOUNDER / DESIGN</span>
                            </div>
                            <div className="card-folder">
                                <p>Lorem Ipsum is simply dummy text of the
                                   printing and typesetting industry dummy text.
                                </p>
                                <div className="icons">
                                <a href="https://www.linkedin.com/in/koichi-yokozeki-b45675159/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-box">
                            <div className="card-image">
                                <img src={img2}/>
                            </div>
                            <div className="blog-title">
                                <h2>HERMAN MILLER</h2>
                                <span>CO-FOUNDER / DESIGN</span>
                            </div>
                            <div className="card-folder">
                                <p>Lorem Ipsum is simply dummy text of the
                                   printing and typesetting industry dummy text.
                                </p>
                                <div className="icons">
                                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-box">
                            <div className="card-image">
                                <img src={img3}/>
                            </div>
                            <div className="blog-title">
                                <h2>HERMAN MILLER</h2>
                                <span>CO-FOUNDER / DESIGN</span>
                            </div>
                            <div className="card-folder">
                                <p>Lorem Ipsum is simply dummy text of the
                                   printing and typesetting industry dummy text.
                                </p>
                                <div className="icons">
                                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
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