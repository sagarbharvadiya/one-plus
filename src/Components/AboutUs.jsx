import React from "react";

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
      <div className="container">
      <div className="About-wrapper d-flex flex-column justify-content-end">
    <h2 className="pb-4">A multi-cultural team that designs unique solutions for you</h2>
    </div>
    <div className="About-flex">

      <Accordion title="Global Experience">
      We are a team of consultants with an immersive experience 
      in global businesses. We work with you as partners; to deliver adaptive, effective
      and result-driven solutions.
      </Accordion>
      <Accordion title="Customised Package">
      To match your requirements and budgets, we deliver 
      personalised solutions that are objective-driven and ROI-focussed with a sharp 
      attention to detail. 
      </Accordion>
      <Accordion title="Cultural Integration">
      The Internet has made the world flat. We specialise in 
      creating strong brand identities that resonate with audiences across 
      geographies, turning customers into loyalists.
      </Accordion>
    </div>
   
      </div> 
    </div>
  );

  export default Accodian;