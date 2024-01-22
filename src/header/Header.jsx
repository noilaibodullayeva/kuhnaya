import {
    AppBar,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Box
} from '@mui/material';
import React, { useState } from 'react';
import Drawercomponent from '../header/Drawercomponent';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Pages = [
    {
        name: 'INTERIOR',
        link: '/',
    },
    {
        name: 'HOME',
        link: '/',
    },
    {
        name: 'DECOR',
        link: '/decor',
    },
    {
        name: 'KITCHEN',
        link: '/kitchen',
    },
    {
        name: 'ABOUT US',
        link: '/about',
    },
    {
        name: 'BEDROOM',
        link: '/bedroom',
    },
    {
        name: 'CONTACT',
        link: '/contact',
    },
];

function Header() {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar
                sx={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Toolbar sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    {isMatch ? (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '0 20px'
                        }}>
                            <Typography sx={{ fontSize: '1.5rem', color: '#80A6AD' }}>
                                Interior
                            </Typography>
                            <Drawercomponent />
                        </Box>
                    ) : (
                        <>
                            <Tabs
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyConten: 'center',
                                    color: '#666',
                                }}
                                textColor='#666'
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                indicatorColor='primary'
                            >
                                {Pages.map((page, index) => (
                                    <Link style={{ color: '#000' }} to={`${page.link}`}>
                                        <Tab key={index} label={page?.name} />
                                    </Link>
                                ))}
                            </Tabs>
                            <ShoppingBasketIcon
                                sx={{ color: '#577175', cursor: 'pointer' }}
                            />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
