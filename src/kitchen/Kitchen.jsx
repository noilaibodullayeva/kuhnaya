import { Box, Typography } from '@mui/material'
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
import "./kitchen.css"

export default function Kitchen() {
    return (
        <Box>
            <Box sx={styles.interior}>
                <Typography sx={styles.kitchenn}>Kitchen</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={styles.KitchenBox}>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img15} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img16} alt="img16" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img17} alt="img17" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img18} alt="img18" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img19} alt="img19" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img20} alt="img20" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img21} alt="img21" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img  className='img'src={Img22} alt="img22" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img23} alt="img23" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img15} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img16} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img17} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img20} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img22} alt="img15" />
                            <Typography sx={styles.typoProduct}>Our Product</Typography>
                            <Typography sx={styles.typoPrice}>$66.00</Typography>
                        </Box>
                        <Box item xs={3} sx={styles.boxInsideKitchen}>
                            <img className='img' src={Img19} alt="img15" />
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
        ml: {md:'220px', xs:'40px'},
    },
    KitchenBox: {
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: {md:'auto auto auto auto', xs:'auto auto auto auto'},
        flexDirection: { md: 0, xs: 'column' },
        padding: {md:'0 220px', xs:'0 30px'},
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
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'100%'}
    },
    interior: {
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}