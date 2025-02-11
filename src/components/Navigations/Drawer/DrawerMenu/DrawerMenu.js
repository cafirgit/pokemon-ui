import React, { useState } from 'react';
import yaml from 'js-yaml';
import fs from 'fs';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const icons = {
    InboxIcon: <InboxIcon />,
    MailIcon: <MailIcon />,
};

const DrawerMenu = ({ menuItems }) => {
    const [open, setOpen] = useState({});

    const handleClick = text => () => {
        setOpen(prevOpen => ({ ...prevOpen, [text]: !prevOpen[text] }));
    };

    return (
        <List>
            {menuItems.map(({ text, iconName, items = [] }) => (
                <React.Fragment key={text}>
                    <ListItemButton onClick={handleClick(text)}>
                        <ListItemIcon>{icons[iconName]}</ListItemIcon>
                        <ListItemText primary={text} />
                        {items.length ? (open[text] ? <ExpandLess /> : <ExpandMore />) : null}
                    </ListItemButton>
                    <Collapse in={open[text]} timeout="auto" unmountOnExit>
                        <ListItems items={items} />
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
}

const ListItems = ({ items }) => (
    <List component="div" disablePadding>
        {items.map(item => (
            <ListItem key={item.text} sx={{ pl: 4 }}>
                <ListItemButton>
                    <ListItemIcon>{icons[item.iconName]}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
);

export default DrawerMenu;