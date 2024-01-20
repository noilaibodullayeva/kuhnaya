import {
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tab,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
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

function Drawercomponent() {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {Pages.map((page, index) => (
                                            <Link style={{ color: '#000' }} to={`${page.link}`}>
                                                <Tab key={index} label={page?.name} />
                                            </Link>
                                        ))}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: '#80A6AD' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </React.Fragment>
    )
}

export default Drawercomponent