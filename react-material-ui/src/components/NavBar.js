import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@meterial-ui/core/Typography';
import { Typography } from '@material-ui/core';

const NavBar = () => {
    return (
        <div>
            <AppBar position='static'>
            <Toolbar>
                <Typography variant='title' color='inherit'>
                React & Material-UI Application
                </Typography>
            </Toolbar>
            </AppBar>
        </div>

    )
}
export default NavBar;