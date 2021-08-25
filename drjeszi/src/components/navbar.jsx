import React from 'react'
import logo from '../img/logo.png';

export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <a href="#about"><h3>Rólam</h3></a>
      <div className="verticalspacer"></div>
      <a href="#profession"><h3>Szakterületek</h3></a>
      <div className="verticalspacer"></div>
      <a href="#prices"><h3>Díjazás</h3></a>
      <div className="verticalspacer"></div>
      <a href="#contact"><h3>Kapcsolat</h3></a>
    </div>
    <a href="/">
      <img src={logo} alt="jeszenkalogo" className="logoImg"/>
    </a>
    </>
  )
}

