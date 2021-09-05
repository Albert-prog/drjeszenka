import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact', 'template_acflxo9', e.target, 'user_Lw8QMChaw20tZBOUusF1W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="profession" id='contact'>
      <h3>KAPCSOLAT</h3>
      <div className="contactText">
        <p>Keressen bizalomma, minden levélre 24 órán belül válaszolok</p>
      
        <div className="formContainer">
          <form className="contactForm" onSubmit={sendEmail}>
            <label>Név</label>
            <div className="col-75">
              <input type="text" name="from_name" />  
            </div>
            <label>Tárgy</label>
            <div className="col-75">
              <input type="text" name="subject" />
            </div>
            <label>Email cím</label>
            <div className="col-75">
              <input type="email" name="user_email" />
            </div>
            <label>Üzenet</label>
            <div className="col-75">
              <textarea name="message" style={{height:"150px"}} />
            </div>
            <input type="submit" value="Küldés" className="email"/>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
