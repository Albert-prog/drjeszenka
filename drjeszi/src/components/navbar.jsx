import React, { useState, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY>150) {
      setShowNav(false)}
      else{
        setShowNav(true)
      }
    }

  useEffect(()=> {
    window.addEventListener('scroll',controlNavbar)
    return() => {
      window.removeEventListener('scroll',controlNavbar)
    }
  },[])

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('1020'));

  return (
    <div>
      <div className={showNav ? 'navbar' : 'navbarDeactive'}>
    { !isMatch ? 
      <>
    
    <div className='navbarText'>
        <a href="#about"><h4>RÓLAM</h4></a>
        <div className="verticalspacer"></div>
        <a href="#profession"><h4>SZAKTERÜLETEK</h4></a>
        <div className="verticalspacer"></div>
        <a href="#prices"><h4>DÍJAZÁS</h4></a>
        <div className="verticalspacer"></div>
        <a href="#contact"><h4>KAPCSOLAT</h4></a>
    </div>
      </> : null 
}
    
    </div>
    </div>
  )
}

