import React from 'react';
import logo from '../img/logo.png';
import professions from '../lists/professions';

function Footer() {
  return (
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
  )
}

export default Footer
