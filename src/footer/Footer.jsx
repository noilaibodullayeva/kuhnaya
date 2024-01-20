import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import Img15 from "../img/cards.png"

export default function Footer() {
  return (
    <Box sx={styles.footerBox}>
      <Box sx={styles.box1}>
        <Typography sx={styles.number}>Contact Us</Typography>
        <Typography sx={styles.number}>+7 (495) 000-00-00</Typography>
        <Typography sx={styles.number}>info@mysite.com</Typography>
        <Box sx={styles.icons}>
          <IconButton sx={styles.iconbutton}>
            <Facebook />
          </IconButton>
          <IconButton sx={styles.iconbutton}>
            <Twitter />
          </IconButton>
          <IconButton sx={styles.iconbutton}>
            <Instagram />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.box1}>
        <Typography sx={styles.number}>We Accept</Typography>
        <img src={Img15} alt="img15" />
      </Box>
      <Box sx={styles.box2}>
        <Typography sx={styles.number}>Contact Us</Typography>
        <TextField
          id="outlined-textarea"
          label="Enter your email"
          placeholder="Enter your email"
          multiline
          sx={styles.input}
        />
        <Button sx={styles.button}>OK</Button>
      </Box>
    </Box>
  )
}

const styles = {
  footerBox: {
    backgroundColor: '#577175',
    width: { md: '100%', xs: 'auto' },
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    justifyContent: 'center',
    alignItems: { md: 'baseline', xs: 'left' },
    margin: '30px 0 0 0',
    padding: { md: '30px 0', xs: '30px 15px' },
    gap: '20px'
  },
  box2: {
    display: 'flex',
    flexDirection: 'column'
  },
  number: {
    color: '#D5D6D6',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    padding: '5px 5px'
  },
  iconbutton: {
    color: '#D5D6D6',
    fontSize: '30px'
  },
  input: {
    backgroundColor: '#D6D6D6',
    color: '#666',
    width: '350px',
  },
  button: {
    width: '350px',
    backgroundColor: '#405357',
    color: '#fff',
    fontWeight: '800',
    marginTop: '15px',
    "&:hover": {
      backgroundColor: '#405357',
    }
  }
}
