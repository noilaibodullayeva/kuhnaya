import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./contact.css"
import Footer from '../footer/Footer'

export default function Contact() {
    return (
        <>
         <Box>
            <Typography sx={styles.kitchenn}>Contact Us</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row',sm:'column', xs: 'column' },
                justifyContent: 'center',
                alignItems: 'center',
                padding: {md:'0 200px', xs:'0 10px'},
                gap:'15px'
            }} className="boxx">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'center',
                    width: {md:'500px', xs:'100%'},
                    padding: {md:0, xs:'10px'}
                }}>
                    <Typography sx={styles.inputtext}>+7 (775) 000-00-00</Typography>
                    <Typography sx={styles.inputtext}>info@gmail.com</Typography>
                    <Typography sx={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo, vel itaque consequuntur commodi eveniet aut saepe sapiente odit eum neque facere, eius esse quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus distinctio enim, iusto aspernatur optio ipsa in! Delectus eligendi itaque doloremque ex consequuntur illo rem cum dolore veritatis. Obcaecati sapiente dicta sint officiis ex quos, eveniet rem enim fuga laboriosam inventore!</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'left',
                    width: {md:'500px', xs:'100%'},
                    padding: {md:0, xs:'10px'}
                }}>
                    <input type="text" placeholder='Name' className='inputs' />
                    <input type="text" placeholder='Email' className='inputs' />
                    <input type="text" placeholder='Phone' className='inputs' />
                    <textarea row='10' columns='10' type="text" placeholder='Send a massage' className='textarea' />
                    <Button sx={styles.button} >Send</Button>
                </Box>
            </Box>
            
        </Box>
        <Footer/>
        </>
       
    )
}

const styles = {
    kitchenn: {
        fontSize: '30px',
        color: '#405357',
        textAlign: 'left',
        mt: '100px',
        ml: { md: '250px', xs: '10px' },
    },
    inputtext: {
        color: '#596D6F',
        fontSize: '20px',
        pt: '15px'
    },
    lorem: {
        color: '#222',
        fontSize: '16px',
        padding: '20px 0',
        opacity: '1'
    },
    button: {
        width: {md:'300px', xs:'90%'},
        height: '40px',
        alignItems: 'right',
        backgroundColor: '#405357',
        color: '#fff',
        fontFamily: 900,
        borderRadius: 'none',
        "&:hover": {
            backgroundColor: '#fff',
            color: '#405357',
        },
    }
}