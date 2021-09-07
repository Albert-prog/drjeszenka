import React from 'react'
import profil from '../img/Urak676.webp';
import Button from './button';


export default function Hero() {
  return (
    <div className='heroDiv'>
      <img src={profil} alt="jeszenkaprofil"/>
      <div className="herotitle">
        <h3>DR. JESZENKA ÁDÁM <br /> ÜGYVÉD, GAZDASÁGI <br /> JOGI SZAKJOGÁSZ</h3>
        <Button text='INGYENES KONZULTÁCIÓ' url="/" class="btn"/>
      </div>
    </div>
  )
}
