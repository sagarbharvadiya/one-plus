import React from "react";
import img3 from "../images/2.png";

const Accordion = ({ Number, title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        <div
          className={`accordion-title${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  const Accodian = () => (
    <div className="wrapper About-section" id="about-us">
      <div className="container row">
      <div className="About-wrapper d-flex flex-column justify-content-end">
       </div>
    <div className="About-flex col-lg-6 d-flex justify-content-center flex-column align-items-center">
       <h2 className="pb-4">A multi-cultural team that designs <b> unique solutions for you</b></h2>
      <Accordion  title="Global Experience">
      We are a team of consultants with an immersive experience in global businesses. We work with you as partners; to deliver adaptive, effective and result-driven solutions.
      </Accordion>
      <Accordion  title="Customised Packages">
       To match your requirements and budgets, we deliver personalised solutions that are objective-driven and ROI-focussed with a sharp attention to detail. 
      </Accordion>
      <Accordion  title="Cultural Integration">
      The Internet has made the world flat. We specialise in creating strong brand identities that resonate with audiences across geographies, turning customers into loyalists. 
      </Accordion>
    </div>
  
    <div className="About-us-img col-lg-6">
     <img src={img3} alt="" />
    </div>
   
      </div> 
    </div>
  );

  export default Accodian;