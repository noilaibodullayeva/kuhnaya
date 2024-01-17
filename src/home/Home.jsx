import { Box, Typography } from '@mui/material'
import React from 'react'
import Img1 from "../img/68c56f_65b7c273b17a494d9c1647865e8818c5~mv2.webp"
import Img2 from "../img/pic2.webp"
import Img3 from "../img/lamp.webp"
import Img4 from "../img/gilam.webp"
import Img5 from "../img/sochiq.webp"
import Img6 from "../img/qoshiq.webp"
import Img7 from "../img/stul.webp"
import Img8 from "../img/qorachoynal.webp"
import Img9 from "../img/oqidish.webp"
import Img10 from "../img/savatyostiq.webp"
import Img11 from "../img/yostiq.webp"
import Img12 from "../img/kaktus.webp"
import Img13 from "../img/oqgul.webp"


export default function Home() {
    return (
        <Box>
            <Box sx={styles.home1}>
                <Box sx={styles.first_1}>
                    <Typography sx={styles.span1}>GOOD DESIGN IS VISIBLE. EXCELLENT IS - UNNITICED</Typography>
                    <Typography sx={styles.lorem1}>Create the perfect space.</Typography>
                    <Typography sx={styles.lorem2}>_____________________________________|</Typography>
                </Box>
                <Box sx={styles.first_2}>
                </Box>
            </Box>

            <Box sx={styles.home2}>
                <Box sx={styles.second1}></Box>
                <Box sx={styles.second2}>
                    <Box sx={styles.img1}></Box>
                    <Box sx={styles.img2}></Box>
                </Box>
                <Box sx={styles.second3}>
                    <Box sx={styles.boxText}><Typography sx={styles.decor}>Decor</Typography></Box>
                    <Box sx={styles.img3}></Box>
                </Box>
            </Box>
            <Box sx={styles.home2}>
                <Box sx={styles.second3}>
                    <Box sx={styles.boxText}><Typography sx={styles.decor}>Kitchen</Typography></Box>
                    <Box sx={styles.img4}></Box>
                </Box>
                <Box sx={styles.second5}></Box>
                <Box sx={styles.second2}>
                    <Box sx={styles.img6}></Box>
                    <Box sx={styles.img7}></Box>
                </Box>
            </Box>
            <Box sx={styles.home2}>
                <Box sx={styles.second11}></Box>
                <Box sx={styles.second2}>
                    <Box sx={styles.img11}></Box>
                    <Box sx={styles.img21}></Box>
                </Box>
                <Box sx={styles.second3}>
                    <Box sx={styles.boxText}><Typography sx={styles.decor}>Bedroom</Typography></Box>
                    <Box sx={styles.img3}></Box>
                </Box>
            </Box>
        </Box>
    )
}


const styles = {
    home1: {
        display: 'flex',
        width: '100%',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center'
    },
    first_1: {
        backgroundColor: '#80A6AD',
        height: '500px',
        width: '500px',
    },
    first_2: {
        backgroundImage: `url(${Img1})`,
        width: '500px',
        backgroundRepeat: "no-repeat",
        height: '500px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        display: { md: 'block', xs: 'none' }
    },
    span1: {
        color: '#405357',
        fontSize: '50px',
        padding: "60px 10px 0 10px"

    },
    lorem1: {
        color: '#fff',
        fontSize: '25px',
        padding: ' 5px 10px',
    },
    lorem2: {
        color: '#fff',
        fontSize: '16px',
        padding: '0 10px',
    },
    home2: {
        display: { md: 'flex', xs: 'none' },
        width: '100%',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '10px'
        // margin:'10px 250px'
    },
    second1: {
        backgroundImage: `url(${Img2})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '600px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        flex: '4'
    },
    second2: {
        // width: '350px',
        flex: '4',
        height: '600px',
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px'
    },
    img1: {
        backgroundImage: `url(${Img3})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    img2: {
        backgroundImage: `url(${Img4})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    second3: {
        // width: '350px',
        flex: '4',
        height: '600px',
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    boxText: {
        backgroundColor: "#405357",
        height: '70px',
        // width:'350px'
    },
    decor: {
        color: '#fff',
        fontSize: '20px',
        padding: '15px',
    },
    img3: {
        backgroundImage: `url(${Img5})`,
        // width: '350px',
        flex: '4',
        backgroundRepeat: "no-repeat",
        height: '530px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    img4:{
        backgroundImage: `url(${Img6})`,
        // width: '350px',
        flex: '4',
        backgroundRepeat: "no-repeat",
        height: '530px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1, 
    },
    second5:{
        backgroundImage: `url(${Img7})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '600px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        flex: '4'
    },
    img6:{
        backgroundImage: `url(${Img8})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    img7:{
        backgroundImage: `url(${Img9})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    second11: {
        backgroundImage: `url(${Img10})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '600px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        flex: '4'
    },
    img11: {
        backgroundImage: `url(${Img11})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    img21: {
        backgroundImage: `url(${Img12})`,
        // width: '350px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
    img3: {
        backgroundImage: `url(${Img13})`,
        // width: '350px',
        flex: '4',
        backgroundRepeat: "no-repeat",
        height: '530px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
    },
}