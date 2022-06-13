import React from "react";
import footerimage from './images/footer-image.png';
import footerlogologo from './images/logo.png';

function Footersection(){
    return(
        <>
          <div id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>CONTACT US</h2>
                    <p>Ways to reach us</p>
                </div>
                <div className="form-flex">
                    <div className="sentMessage">
                        <form name="sentMessage">
                            <div className="form-group d-flex gap-1">
                                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                                <p class="help-block text-danger"></p>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Email" required=""/>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required=""></textarea>
                            <p class="help-block text-danger"></p>
                            </div>
                            <button type="submit" class="btn btn-custom btn-lg">Send Message</button>
                        </form>
                    </div>
                    <div className=" contact-info">
                      <div className="contact-item">
                        <h3>Contact Info</h3>
                        <p><span><i class="fas fa-map-marker"></i> Address</span>Gresham House, 24 Holborn Viaduct, London, England, EC1A 2BN</p>
                      </div>
                      <div class="contact-item"><p><span><i class="fas fa-phone"></i> Phone</span> +1 123 456 1234</p></div>
                      <div class="contact-item"><p><span><i class="fas fa-envelope"></i> Email</span> hello@oneplus.com</p></div>
                    </div>
                </div>
                <div className="social">
                <ul>
                   <li><a href="fb.com"><i class="fab fa-facebook-f"></i></a></li>
                   <li><a href="twitter.com"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="youtube.com"><i class="fab fa-youtube"></i></a></li>
                </ul>
                </div>
            </div>
          </div>
          <div className="copy-right">
          <p> Copyright © 2022 OnePlus</p>
          </div>
        </>
    )
};

export default Footersection;