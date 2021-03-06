import React from "react";
import img3 from "../images/image4.png";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
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
    <div className="wrapper">
      <Accordion title=" Global experience">
      We are a team of consultants with an immersive experience 
      in global businesses. We work with you as partners; to deliver adaptive, effective
      and result-driven solutions.
      </Accordion>
      <Accordion title=" Customised package">
      To match your requirements and budgets, we deliver 
      personalised solutions that are objective-driven and ROI-focussed with a sharp 
      attention to detail. 
      </Accordion>
      <Accordion title=" Cultural integration">
      The Internet has made the world flat. We specialise in 
      creating strong brand identities that resonate with audiences across 
      geographies, turning customers into loyalists.
      </Accordion>
    </div>
      
    </div>
  
    <div className="About-us-img col-lg-6">
     <img src={img3} alt="" />
    </div>
   
      </div> 
    </div>
  );

  export default Accodian;