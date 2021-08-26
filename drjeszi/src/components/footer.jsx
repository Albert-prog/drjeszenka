import React from 'react';
import logo from '../img/logo.png';
import professions from '../lists/professions';

function Footer() {
  return (
    <div className="footerDiv">
      <div>
        <img src={logo} alt="" className="logoImg2"/>
        <p>Valami kamu szöveg</p>
      </div>
      <div className="footerFlex">
        <h3>Navigáció</h3>
        <ul className="footerList">
          <a href="#about"><li>Rólam</li></a>
          <a href="#about"><li>Szakterületek</li></a>
          <a href="#about"><li>Díjazás</li></a>
          <a href="#about"><li>Kapcsolat</li></a>
        </ul>
      </div>
      <div className="footerFlex">
        <h3>Szakterületek</h3>
        <ul className="footerList">
          {
            professions.map((prof, i) => <a href="#professions"><li>{prof.name}</li></a>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer
