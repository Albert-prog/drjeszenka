import React from 'react';
import Dropdown from './dropdown';
import professions from '../lists/professions';

export const Professions = () => {
  return (
    <div className="profession" id='profession'>
      <h3>SZAKTERÜLETEK</h3>
      <div className="dropdownDiv">
        {
          professions.map((data, i)=> <Dropdown data={data} key={i}/>)
        }
      </div>
    </div>
  )
}
