import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Datapolicy from './Datapolicy';

function Contact() {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [checkedData, setCheckedData] = useState('false');
  const [checkedConsent, setCheckedConsent] = useState('false');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
    <div className="contact" id='contact'>
      <h3>KAPCSOLAT</h3>
      <div className="contactText">
        <p>Keressen bizalommal! Minden megkeresésre legkésőbb 72 órán belül válaszolok!</p>
      
        <div className="formContainer">
          <form className="contactForm" onSubmit={sendEmail}>
            <label>Név</label>
            <div className="col-75">
              <input placeholder="Minta János" type="text" name="from_name" />  
            </div>
            <label>Tárgy</label>
            <div className="col-75">
              <input placeholder="Bérleti szerződés" type="text" name="subject" />
            </div>
            <label>Email cím</label>
            <div className="col-75">
              <input placeholder="minta@janos.hu" type="email" name="user_email" />
            </div>
            <label>Üzenet</label>
            <div className="col-75">
              <textarea placeholder="Az ügyben érdeklődnék Önnél, hogy....." name="message" style={{height:"150px", minWidth: "280px", maxWidth:"800px"}} />
            </div>
            <button name="submit" type="submit" value="Küldés" className="email" disabled={(checkedData||checkedConsent)}>Küldés</button>
            <div className="formConsent">
              <div>
                <Checkbox defaultChecked={!checkedData} onChange={()=>setCheckedData(!checkedData)}
                sx={{
                  color: '#e9c576;',
                  '&.Mui-checked': {
                    color: '#e9c576;',
                  },
                }} 
                />
                <p>Egyetértek azzal, hogy az adataimat az oldal elmentse, hogy válaszolni lehessen a megkeresésemre.</p>
              </div>
              <div>
              <Checkbox defaultChecked={!checkedConsent} onChange={()=>setCheckedConsent(!checkedConsent)}
                sx={{
                  color: '#e9c576;',
                  '&.Mui-checked': {
                    color: '#e9c576;',
                  },
                }} 
                />
              <p>Elfogadom az oldal <span onClick={handleClickOpen('paper')}>Adatkezelési tájékoztatóját.</span></p>
              </div>
            </div>
          </form>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Adatkezelési tájékoztató</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
                <Datapolicy/>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{backgroundColor: "#e9c576", color: '#181026'}}>
                Rendben
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Contact
