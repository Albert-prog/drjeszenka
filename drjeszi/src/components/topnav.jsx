import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';




export default function Topnav() {


  return (
    <div className="topnavsection">
      <div className="topnavdiv">
        <h3>1133 Budapest, Váci út 78/A 1.emelet 3.ajtó</h3>
        <div className="verticalspacer"></div>
        <h3>ugyved.jeszenka@gmail.com</h3>
      </div>
      <div className="topnavicons">
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><FacebookIcon></FacebookIcon></a>
        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><InstagramIcon/></a>
      </div>
    </div>
  )
}
