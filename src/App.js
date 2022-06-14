import React from 'react';
import './css/index.css';
import Menu from './Components/Menu';
import WhatMakeUs from './Components/WhatMakeUs';
import AboutUs from './Components/AboutUs';
import Bannersection from './Components/Bannersection';
import OurApproach from './Components/OurApproach';
// import OurService from './Components/OurService';
import OurTeam from './Components/OurTeam';
import FooterContact from './Components/FooterContact';


function App() {
  return (
    <>
      <div>
          <Menu/>
          <Bannersection/>
          <WhatMakeUs/>
          <AboutUs/>
          <OurApproach/>
          {/* <OurService/> */}
          <OurTeam/>
          <FooterContact/> 
      </div>
    </>
  );
}

export default App;
