import React from "react";
import img1 from "../images/6.png";



function FooterContact() {
    return (
        <>
            <div className="wrapper About-section" id="about-us">
                <div className="container row">
                    <div className="About-wrapper d-flex flex-column justify-content-end">
                    </div>
                    <div className="Footer-section-img col-lg-6">
                        <img src={img1} alt="" className="img-footer" />
                    </div>
                    <div className="About-flex col-lg-6">
                        <div className="sentMessage ">
                            <form name="sentMessage">
                                <div>
                                    READY TO REQUEST A QUOTE?
                                </div>
                                <div className="form-group d-flex gap-1">
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                                    <p className="help-block text-danger"></p>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="Email" required="" />
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