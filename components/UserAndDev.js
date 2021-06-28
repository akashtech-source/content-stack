import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import people from "../public/images/homePage_peopleStrip-2.jpg";

const useStyles = makeStyles({
    UserAndDev:{
        marginTop: 200,
    },
    titleLeft: {
        marginBottom: 40,
    },
    sloganLeft: {
        marginBottom: 30,
        color: '#eb5646'
    },
    detailsLeft :{
        marginBottom: 30,
    },
    titleRight: {
        marginBottom: 40,
    },
    sloganRight: {
        marginBottom: 30,
        color: '#2a0f57'
    },
    detailsRight :{
        marginBottom: 30,
    },
    
})

const UserAndDev = () => {
    const classes = useStyles()
    return (
        <div className={classes.UserAndDev}>
            <Image src={people} alt="23"></Image>
                <Grid container>
                    <Grid item lg={6}>
                        <div className="leftDiv">
                            <Typography
                            variant="h3"
                            className={classes.titleLeft}
                            >Developer</Typography>
                            <Typography
                            variant="h4"
                            className={classes.sloganLeft}
                            >Free to Build. Freed from fixes.</Typography>
                            <Typography
                            variant="h5"
                            className={classes.detailsLeft}
                            >Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.</Typography>
                            <Button
                            variant="contained"
                            >LEARN MORE</Button>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className="rightDiv">
                            <Typography
                            variant="h3"
                            className={classes.titleRight}
                            >Business Users</Typography>
                            <Typography
                            variant="h4"
                            className={classes.sloganRight}
                            >Empowered to do more faster.</Typography>
                            <Typography
                            variant="h5"
                            className={classes.detailsRight}
                            >Take control of content creation with an intuitive experience that lets you build more, publish faster, and get more results from your digital content strategy.</Typography>
                            <Button
                            variant="contained"
                            >LEARN MORE</Button>
                        </div>
                    </Grid>
            </Grid>
        </div>
    );
};

export default UserAndDev;