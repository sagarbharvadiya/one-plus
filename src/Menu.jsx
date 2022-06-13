/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from './images/logo.png';

function Topheadar(){
    return(
        <>
            <div className="top-header-section d-flex justify-content-between">    
                <div className="logo"><img src={logo} /></div>
                <ul className="menu d-flex flex-row align-items-center">
                    <li className="list-group list-group-flush"><a href="#Home" className="text-decoration-none">Home</a></li>
                    <li className="list-group list-group-flush"><a href="#About" className="text-decoration-none">About</a></li>
                    <li className="list-group list-group-flush"><a href="#Services" className="text-decoration-none">Services</a></li>
                    <li className="list-group list-group-flush"><a href="#Team" className="text-decoration-none">Team</a></li>
                    <li className="list-group list-group-flush"><a href="#Contact" className="text-decoration-none">Contact</a></li>
                </ul>
            </div>
        </>
    )
};

export default Topheadar;