import React from "react";


function FooterContact(){
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
                                <p className="help-block text-danger"></p>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required=""/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required=""></textarea>
                            <p className="help-block text-danger"></p>
                            </div>
                            <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                        </form>
                    </div>
                    <div className=" contact-info">
                      <div className="contact-item">
                        <h3>Contact Info</h3>
                        <p><span><i className="fas fa-map-marker"></i> Address</span>Gresham House, 24 Holborn Viaduct, London, England, EC1A 2BN</p>
                      </div>
                      <div className="contact-item"><p><span><i className="fas fa-phone"></i> Phone</span> +1 123 456 1234</p></div>
                      <div className="contact-item"><p><span><i className="fas fa-envelope"></i> Email</span> hello@oneplus.com</p></div>
                    </div>
                </div>
                <div className="social">
                <ul>
                   <li><a href="fb.com"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="youtube.com"><i className="fab fa-youtube"></i></a></li>
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

export default FooterContact;