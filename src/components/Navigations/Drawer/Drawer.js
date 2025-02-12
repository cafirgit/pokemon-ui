import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import DrawerMenu from "./DrawerMenu/DrawerMenu";


const drawerWidth = 240;

const Drawer = ({menuItems, anchor = 'left'}) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor={anchor}
        >
            <Toolbar />
            {
                <Box sx={{ overflow: 'auto' }}>
                    <DrawerMenu menuItems={menuItems} />
                </Box>
            }
        </Drawer>
    );
}

export default Drawer;