import React, { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Drawer, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles({
  drawerPaper: {
    width: 260,
  },
  drawerRoot: {
    fontSize: 48,
  }
});

export default function Topnav() {

  const classes = useStyles();

  const themeBtn = createTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: '#e9c576',
          border: 0,
          marginBottom: 10,
          color: 'white',
          height: 38,
          padding: '10px 20px',
          zIndex: 1000,
        },
      },
    },
  });

  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isMatch = useMediaQuery(theme.breakpoints.down('1020'));


  return (
    <>
      <div className="topnavsection">
    {
      !isMatch ? <>
      <div className="topnavdiv">
        <h3>1133 Budapest, Váci út 78/A 1.emelet 3.ajtó</h3>
        <div className="verticalspacer"></div>
        <h3>ugyved.jeszenka@gmail.com</h3>
        <div className="verticalspacer"></div>
        <h3>+36 70 395 8422</h3>
      </div>
      </> : 
      <ThemeProvider theme={themeBtn}>
        <Button>
          <MenuIcon onClick={()=>setOpenDrawer(!openDrawer)}/>
        </Button>
    </ThemeProvider>
    }

    {!isMatch ? 
      <div className="topnavicons">
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><FacebookIcon/></a>
        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><InstagramIcon/></a>
      </div> : <>
    <Drawer classes={{paper: classes.drawerPaper, root: classes.drawerRoot}} onClose={()=>setOpenDrawer(false)} anchor='left' open={openDrawer}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <ListItemText onClick={()=>setOpenDrawer(!openDrawer)}><a href="#about">Rólam</a></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListItemText onClick={()=>setOpenDrawer(!openDrawer)}><a href="#profession">Szakterületek</a></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListItemText onClick={()=>setOpenDrawer(!openDrawer)}><a href="#prices">Díjazás</a></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText onClick={()=>setOpenDrawer(!openDrawer)}><a href="#contact">Kapcsolat</a></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <div className="topnavicons">
            <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><FacebookIcon/></a>
            <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><InstagramIcon/></a>
          </div>
        </ListItem>
        <ListItem button>
        <div className="topnavdiv">
          <ListItemText>Váci út 78/A 1.emelet 3.ajtó</ListItemText>
          <ListItemText>1133 Budapest</ListItemText>
          <ListItemText>ugyved.jeszenka@gmail.com</ListItemText>
          <ListItemText>+36 70 395 8422</ListItemText>
        </div>
        </ListItem>
      </List>
    </Drawer>
    </>
    } 
    </div>
    </>
  )
}
