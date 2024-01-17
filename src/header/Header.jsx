import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Drawercomponent from "../header/Drawercomponent";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Directions } from "@mui/icons-material";

const Pages = ["INTERIOR", "HOME", "DECOR", "KITCHEN","ABOUT US", "BEDROOM", "CONTACT"]

function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: '#fff', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <Toolbar>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize:'1.5rem', color:'#80A6AD', }}>
                                    Interior
                                </Typography>
                                <Drawercomponent />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ alignItems:'center', display:'flex', justifyConten:'center', color:'#666' }}
                                    textColor='#666'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="primary"
                                    >
                                        {
                                            Pages.map((page, index) => (
                                                <Tab key={index} label={page}/>
                                            ))
                                        }
                                </Tabs>
                                <ShoppingBasketIcon sx={{color:"#577175", cursor:'pointer'}}/>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Header