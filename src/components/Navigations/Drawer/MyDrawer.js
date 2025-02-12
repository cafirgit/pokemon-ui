import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MyDrawerMenu from "./DrawerMenu/MyDrawerMenu";


const drawerWidth = 240;

const MyDrawer = ({menuItems, anchor = 'left'}) => {
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
                    <MyDrawerMenu menuItems={menuItems} />
                </Box>
            }
        </Drawer>
    );
}

export default MyDrawer;