import React from 'react'
import logo from '../img/logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function Navbar() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('1020'));

  return (
    <>
      <div className="navbar">
    { !isMatch ? 
      <>
        <a href="#about"><h3>Rólam</h3></a>
        <div className="verticalspacer"></div>
        <a href="#profession"><h3>Szakterületek</h3></a>
        <div className="verticalspacer"></div>
        <a href="#prices"><h3>Díjazás</h3></a>
        <div className="verticalspacer"></div>
        <a href="#contact"><h3>Kapcsolat</h3></a>
      </> : null 
}
    </div>
    <a href="/">
      <img src={logo} alt="jeszenkalogo" className="logoImg"/>
    </a>
    </>
  )
}

