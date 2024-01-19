import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Img15 from "../img/oqgul.webp"
import Img16 from "../img/kitchen1.webp"
import Img17 from "../img/kitchen2.webp"
import Img18 from "../img/gilam.webp"
import Img19 from "../img/qorachoynal.webp"
import Img20 from "../img/oqidish.webp"
import Img21 from "../img/qoshiqkitchen.webp"
import Img22 from "../img/stulkitchen.webp"
import Img23 from "../img/gilam.webp"
import Footer from '../footer/Footer'
import "./bedroom.css"

export default function Bedroom() {
    return (
        <Box>
            <Box sx={styles.interior}>
                <Typography sx={styles.kitchenn}>Bedroom</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={styles.KitchenBox}>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img15} alt="img15" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img16} alt="img16" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img17} alt="img17" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img18} alt="img18" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img19} alt="img19" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img20} alt="img20" className='img' />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img21} alt="img21" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img src={Img22} alt="img22" className='img'/>
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Footer />
        </Box>
    )
}

const styles = {
    kitchenn: {
        fontSize: '30px',
        color: '#405357',
        textAlign: 'left',
        mt: '100px',
        ml: {md:'200px', xs:'30px'},
    },
    KitchenBox: {
        display: { md: 'grid', xs: 'flex' },
        gap: '20px',
        gridTemplateColumns: 'auto auto auto auto',
        flexDirection: { md: 0, xs: 'column' },
        padding:{md:'0 200px', xs:'0 30px'}
    },
    typoProduct: {
        textTransform: 'uppercase',
        fontSize: '18px',
        color: '#666'
    },
    typoPrice: {
        fontSize: '16px',
        color: '#666'
    },
    boxInsideKitchen: {
        ml: { md: 0, xs: '10%' }
    },
    interior: {
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}