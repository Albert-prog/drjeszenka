import React from 'react';
import logo from '../img/logo.png';
import professions from '../lists/professions';
import rolandLogo from '../img/roland.png';
import albertLogo from '../img/albert-prog.PNG';

function Footer() {
  return (
    <>
    <div className="footerDiv">
      <div className="footerDisclaimer">
        <img src={logo} alt="" className="logoImg2"/>
          <p>
          Ezt a honlapot dr. Jeszenka Ádám ügyvéd, a Budapesti Ügyvédi Kamarába bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href="https://www.xn--mk-xka.hu/" target="_blank" rel="noreferrer">www.magyarugyvedikamara.hu</a> honlapon találhatóak.
          </p>
      </div>
      <div className="footerFlex">
        <h3>Navigáció</h3>
        <ul className="footerList">
          <a href="#about"><li>Rólam</li></a>
          <a href="#profession"><li>Szakterületek</li></a>
          <a href="#prices"><li>Díjazás</li></a>
          <a href="#contact"><li>Kapcsolat</li></a>
        </ul>
      </div>
      <div className="footerFlex">
        <h3>Szakterületek</h3>
        <ul className="footerList">
          {
            professions.map((prof, i) => <a href="#profession"><li>{prof.name}</li></a>)
          }
        </ul>
      </div>
    </div>
    <div className="bottom">
          <h5>dr. Jeszenka Ádám ügyvéd © Minden jog fenntartva</h5>
          <p>Fotó:<a href="https://nyarirolandphoto.com/" target="_blank" rel="noreferrer"><img src={rolandLogo} alt="RolandLogo"></img></a></p>
          <p>Dizájn:</p>
          <p>Kód:<a href="https://nyarirolandphoto.com/" target="_blank" rel="noreferrer"><img src={albertLogo} alt="AlbertLogo"></img></a></p>
    </div>
    </>
  )
}

export default Footer
