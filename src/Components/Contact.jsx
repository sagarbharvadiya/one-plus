import  React from "react";

function Contact(){
    return( 
            <>
              <div className="Contact" id="contact">
                <div className=" container d-flex justify-content-between">
                    <div className=" location">
                    <i class="fas fa-map-marker"></i>
                    <span>VISIT OUR OFFICE</span>
                     <p>
                     Gresham House, 24 Holborn Viaduct, London, England, EC1A 2BN
                    </p>
                    <a href=""><del>GET DIRECTION</del> </a>
                    </div>
                    <div className=" location">
                    <i class="fas  fa-comments"></i>
                    <span>LET'S TALK</span>
                     <p>
                     Phone:  +1 123 456 1234
                    </p>
                    <a href=""><del>CALL US</del> </a>
                    </div>
                    <div className=" location">
                    <i class="fas fa-envelope"></i>
                    <span>E-MAIL US</span>
                     <p>
                     Email hello@oneplus.com
                    </p>
                    <a href=""><del>SEND E-MAIL</del> </a>
                    </div>

                </div>
              </div>

            </>
    )
};
export default Contact;