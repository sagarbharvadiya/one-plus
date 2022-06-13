import React from "react";

function Blogsection(){
    return(
        <>
            <div className="blog-section">
                <div className="container">
                <div className="blogweapper d-flex flex-column justify-content-start align-items-start">
                    <h2 className="pb-4">What makes us different</h2>
                    <p>Our customers come back to us again
                       and again because we genuinely care about your business.
                       We take the time to understand your
                       communication objectives and target audience,
                       so we can deliver a production which reflects your
                       brand values and the story you want to tell. We are 
                       more than a creative agency, we are your media 
                       partner.
                    </p>
                    <div className="blog-btn">
                        <a href="#" className="arrow text-danger"><i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="#" className="submit-btn text-decoration-none d-flex align-items-center text-danger">Learn about our services</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};

export default Blogsection;