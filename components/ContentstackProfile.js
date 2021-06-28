import React from 'react';
import waveChart from '../public/images/WaveChart_Homepage.jpg'
import { Grid, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import { Typography, Button } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    mainContent: {
        padding: 50,
        marginTop: 30,
    },
    contentText: {
        marginTop: 80,
        color: 'white',
        marginBottom: 20,
    },
    description: {
        marginBottom: 20,
    }
})

const ContentstackProfile = () => {
    const classes = useStyles();

    return (
        <section className="profile-main">
        <div className={classes.mainContent}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={8}>
                <Image src={waveChart} alt=""></Image>
                </Grid>
                <Grid item lg={8} md={8}>
                    <Typography
                    variant="h2"
                    className={classes.contentText}
                    >
                    Contentstack named a Strong Performer in the Forrester Wave for Agile CMS
                    </Typography>
                    <Typography
                    variant="h5"
                    className={classes.description}
                    >
                    Contentstack named a Strong Performer in the Forrester Wave™ : Agile Content Management Systems (CMSes), Q1 2021
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    >LEARN MORE</Button>
                </Grid>
            </Grid>
        </div>
        </section>
    );
};

export default ContentstackProfile;