import React, { useState } from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '5px',
    color: '#e9c57d',
  },

});


export default function Dropdown(props) {

  const [show, setShow] = useState(false)
  const [isActive, setActive] = useState(false);


  const classes = useStyles();
  const handleToggle = () => {
    setShow(!show);
    setActive(!isActive);
  };

  return (
    <div className="arrowDiv" onClick={handleToggle}>
      <ArrowRightAltIcon className={` ${classes.root} ${isActive ? "arrowOn" : "arrowOff"}`}/>
      <h4>{props.data.name}</h4>
      {
        show ? <ul className="professionList">{
          props.data.desc.map((details, i)=><li>{details}</li>)
          }</ul> : null
      }
    </div>
  )
}
