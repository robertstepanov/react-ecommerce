

import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.landing}>
           <Typography variant="h2" className={classes.title}>Welcome to my Shop!</Typography>
        </div>
    )
}

export default Landing
