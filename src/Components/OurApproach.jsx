import React from "react";
// import Collapsible from 'react-collapsible';
// import { Parallax } from "react-scroll-parallax";

function OurApproach(){
    return(
        <>  
           <div className="contenar-section">
              <div className="contenarwrapper d-flex flex-column justify-content-start align-items-start">
                <h2 className="pb-4">Our Approach</h2>
                
                <div>
                    <h4>Global Experience</h4>
                  <p>We are a team of consultants with an immersive experience in global businesses.Our vision is to work with our clients as partners; to deliver adaptive, effective and result driven solutions in response to the VUCA world.</p>
                </div>
               
                <div>
                    <h4>
                    Customized Package
                    </h4>
                  <p>Our aim is to deliver concise, objective driven, ROI focused solutions.Hence,we provide personalised, expert attention in unique package depending on client’s business goal, budget and timeline.</p>
                </div>
                <div>
                    <h4>Cultural Integration</h4>
                  <p>The Internet has made the world a much flatter place.It's now or never.Our marketing expertise will create brand identity for your business, across geographies, build strong awareness and customer loyalty amongst the ever dynamic global consumer behaviour.</p>
                </div>
                <div className="contenar-btn" id="who-we-are-btn">
                    <a href="#who-we-are-btn" className="arrow text-danger"><i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href="#who-we-are-btn" className="submit-btn text-decoration-none d-flex align-items-center text-danger">Learn about our services</a>
                </div>
              </div>
           </div> 
        </>  
    )
};

export default OurApproach;