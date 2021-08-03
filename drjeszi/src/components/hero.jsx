import React from 'react'
import profil from '../img/Urak676_retus-1.jpg';
import Button from './button';

export default function Hero() {
  return (
    <div className='heroDiv'>
      <img src={profil} alt="jeszenkaprofil"/>
      <div className="herotitle">
        <p>Forduljon hozzám bizalommal</p>
        <h3>DR. JESZENKA ÁDÁM <br /> ÜGYVÉD, GAZDASÁGI <br /> JOGI SZAKJOGÁSZ</h3>
        <Button text='KAPCSOLAT'/>
      </div>
    </div>
  )
}
