import  React from "react";
import img1 from "../images/3.png";



function FooterContact(){
    return(
        <>
          <div id="contact" className="Footer-section">
            <div className="container">
                {/* <div className="section-title">
                    <h2>CONTACT US</h2>
                    <p>Ways to reach us</p>
                </div> */}
                <div className="form-flex Footer-section-forms">
                    <div className="Footer-section-img">
                        <img src="{img1}" alt="...."  className="img-footer"/>
                    </div>
                    <div className="sentMessage">

                        <form name="sentMessage">
                            <div>
                            READY TO REQUEST A QUOTE?
                            </div>
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
                </div>
                
            </div>
          </div>
          
        </>
    )
};

export default FooterContact;