import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ImgAbout from "../img/84770f_ac9e70d726634e089a1aaee093978a1a.webp"

export default function About() {
    return (
        <Box sx={{
            backgroundColor: '#EDEFF0',
            marginTop: '0'
        }}>
            <Header />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'baseline',
                backgroundColor: '#EDEFF0'
            }}>

                <Box sx={styles.boxAbout}>
                    <Box sx={styles.boxTypoAbout}>
                        <Typography sx={styles.aboutWord}>About Us</Typography>
                        <Typography sx={styles.loremAbout}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquid dolorem, omnis, ex sequi vero odit saepe repellat nam voluptate ipsam? Commodi molestias deleniti sit debitis exercitationem corporis autem reprehenderit.
                        </Typography>
                        <Typography sx={styles.loremAbout}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquid dolorem, omnis, ex sequi vero odit saepe repellat nam voluptate ipsam? Commodi molestias deleniti sit debitis exercitationem corporis autem reprehenderit.
                        </Typography>
                    </Box>
                    <Box sx={styles.backAbout}></Box>
                </Box>
                <Box>
                    <Typography sx={styles.aboutWord}>Answer the Questions</Typography>
                    <Box sx={styles.questionBox}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { md: 'column', xs: 'column' },
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            width:'500px'
                        }}>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>How can we order?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>Do we pay for delivering?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>How can we pay?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { md: 'column', xs: 'column' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            width:'500px'
                        }}>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>How can we decline the order?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>How can we order?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                            <Box sx={styles.quesztionBoxSm}>
                                <Typography sx={styles.aboutWord}>How can we order?</Typography>
                                <Typography sx={styles.loremAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus porro odit asperiores vel minima recusandae enim voluptatum libero alias!</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

const styles = {
    aboutWord: {
        fontSize: '30px',
        color: '#405357',
        textAlign: 'left',
        mt: '100px',
        padding: { md: 0, xs: '0 30px' }
    },
    boxAbout: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    boxTypoAbout: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
    },
    loremAbout: {
        fontSize: '18px',
        color: '#666',
        padding: { md: '20px 0', xs: '20px 30px' },
    },
    backAbout: {
        backgroundImage: `url(${ImgAbout})`,
        width: '400px',
        backgroundRepeat: "no-repeat",
        height: '300px',
        backgroundSize: "cover",
        marginTop: '70px',
        backgroundPositionY: 1,
    },
    questionBox : {
        display:'flex',
        flexDirection: {md:'row', xs:'column'},
        justifyContent:'center'
    }
}
