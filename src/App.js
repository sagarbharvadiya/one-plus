import React from 'react';
import './css/index.css';
import Menu from './Components/Menu';
import AboutUs from './Components/AboutUs';
import MarketingFeature from './Components/MarketingFeature';
import OurApproach from './Components/OurApproach';
import OurService from './Components/OurService';
import WhatMakeUs from './Components/WhatMakeUs';
import OurTeam from './Components/OurTeam';
import FooterContact from './Components/FooterContact';

function App() {
  return (
    <>
      <div>
          <Menu/>
          <MarketingFeature/>
          <AboutUs/>
          <OurApproach/>
          <OurService/>
          <WhatMakeUs/>
          <OurTeam/>
          <FooterContact/> 
      </div>
    </>
  );
}

export default App;
