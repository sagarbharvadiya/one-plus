import React from "react";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";



function OurTeam(){
    return(
        <>
            <div className="our-team-section">
                <div className="container">
                <div className="section-title"><h2>Our Team</h2></div>

               <div id="row">
                <div className="team">
                    <div className="thumbnail">
                        <img src={img1} alt=".." className="team-img" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        <div className="caption">
                        <h4>KOICHI YOKOZEKI</h4>
                        <p>Founder</p>
                        <a href="https://www.linkedin.com/in/koichi-yokozeki-b45675159/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>
                <div className="team">
                    <div className="thumbnail">
                    <img src={img2} alt=".." className="team-img" /> 
                        <div className="caption">
                        <h4>XINGNA FU</h4>
                        <p>Founder</p>
                        <a href="https://www.linkedin.com/in/xingna-fu-15b453195/"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>
                <div className="team">
                    <div className="thumbnail">
                    <img src={img3} alt=".." className="team-img" /> 
                        <div className="caption">
                        <h4>ADITI AYARE</h4>
                        <p>Founder</p>
                        <a href="https://www.linkedin.com/in/aditiayare/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
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