import React from "react";
// import Collapsible from 'react-collapsible';
// import { Parallax } from "react-scroll-parallax";
import img3 from "../images/image4.png";


function OurApproach(){
    return(
        <>  
        
           <div className="our-approach-main" id="service">
            <div className="">
               <div className="">
              <div className="our-approach-main-wrapper">  
                <div className="our-approach"> 
                  <div className="our-approach-img">
                     <span className="special-char-medium text-white absolute-middle-center position-absolute fas fa-quote-left"></span>
                     <p>Partner with us and work with a
                      Cross-border team that delivers cross-platform solutions.
                      </p>
                      <img src={img3} alt=".." className="approach-img" /> 
                   </div>  
                  <div className="our-approach-content">
                     <p>Partner with us and work with a
                      Cross-border team that delivers cross-platform solutions.
                      </p>
                      <h3>We design brand and marketing experiences that are on the cutting edge of digital, so that you always engage with the right audience.</h3>
                     <ul>
                       <li>+ Customer Insights + Market Insights + Consumer Journey Mapping</li>
                       <li>+ Branding Strategy + Digital Marketing Strategy + Performance Marketing Strategy</li>
                       <li>+ Brand Identity Design + Digital & Social Media Campaign + SEO & SEM Management</li>
                    </ul>
                   </div>   
                </div>
                </div>

                   <div className="our-approach-bottom">
                    <div className="our-approach-box">
                       <h1>01</h1>
                       <h4>EVALUATE & DEFINE</h4>
                       <p>We audit how customers interact with your brand and work with your marketing team to define objectives and unlock growth. </p>
                    </div>
                    <div className="our-approach-box">
                      <h1>02</h1>
                      <h4>STRATEGISE</h4>
                      <p>We devise compelling strategies to affect how consumers think, feel and act on your products, services and therefore, your brand. </p>
                    </div>
                    <div className="our-approach-box">
                      <h1>03</h1>
                      <h4>DESIGN & EXECUTE</h4>
                      <p>We partner with your team to co-create solutions and deliver them in-house or through our network of creative talent. </p>
                    </div>
                   </div>
               </div>
             </div>
        </div>
        </>  
    )
};

export default OurApproach;