import { Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    content: {
        padding: 60,
        marginLeft: 40,
        color: 'white',
    },
    text: {
        marginTop: 40,
    },
    mainBtn: {
        marginTop: 40,
    }
})

const Header = () => {
    const classes = useStyle();

    return (
        <div className="header-container">
            <div className={classes.content}>
                <Typography
                variant="h2"
                className="main-header-text"
                >
                HOW DOES TRADITIONAL <br /> CMS MANAGE TO MANAGE SO <br /> BADLY?
                </Typography>
                <Typography
                variant="h5"
                className={classes.text}
                >
                See how to empower teams, free developers, and get more done faster with headless, <br /> agile CMS.
                </Typography>
                <Button
                variant="contained"
                color="primary"
                className={classes.mainBtn}
                >PLAY VIDEO</Button>
            </div>
        </div>
    );
};

export default Header;