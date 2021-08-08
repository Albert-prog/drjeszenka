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


  const classes = useStyles();
  return (
    <div className="arrowDiv" onClick={()=>setShow(!show)}>
      <ArrowRightAltIcon className={classes.root}/>
      <h4>{props.data.name}</h4>
      {
        show ? <p>{props.data.desc}</p> : null
      }
    </div>
  )
}
