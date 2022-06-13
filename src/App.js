import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './App.css';
import Topheadar from './Menu';
import AboutUSsection from './aboutUS-section';
import Servicesection from './Service-section';
import Contenarsection from './Contenar-section';
import Gallerysection from './Gallery.section';
import Blogsection from './Blog-section';
import Promosection from './Promo-section';
// import Productionsection from './Production-section';
import Footersection from './Footer-section';
// import Mydata from './Mydata'; 

function App() {
  return (
    <>
      <Topheadar></Topheadar>
      <AboutUSsection></AboutUSsection>
      <Servicesection></Servicesection>
      <Contenarsection></Contenarsection>
      <Gallerysection></Gallerysection>
      <Blogsection></Blogsection>
      <Promosection></Promosection>
      {/* <Productionsection></Productionsection> */}
      <Footersection></Footersection>
    </>
  );
}

export default App;
