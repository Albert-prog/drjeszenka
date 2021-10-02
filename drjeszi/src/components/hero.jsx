import React from 'react'
import profil from '../img/Urak676.webp';
import Button from './button';


export default function Hero() {
  return (
    <div className='heroDiv'>
      <div className="herotitle">
        <h4>Forduljon hozzám bizalommal!</h4>
        <h3>DR. JESZENKA ÁDÁM <br/> ÜGYVÉD, <br/>GAZDASÁGI JOGI SZAKJOGÁSZ</h3>
        <Button text='KAPCSOLATFELVÉTEL' url='#contact' class="btn"/>
      </div>
      <img src={profil} alt="jeszenkaprofil"/>
    </div>
  )
}
