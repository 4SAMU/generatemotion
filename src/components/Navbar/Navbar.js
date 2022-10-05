import React from 'react'
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="bar">
      <div className="logo">Montex</div>
      <button className="HomeBtn">Home</button>
      <button className="FAQbtn">FAQ</button>
      <button className="AboutBTN">About</button>
      <button className="GenerateMotionBTN">Generate Motion</button>
    </div>
  );
}

export default Navbar