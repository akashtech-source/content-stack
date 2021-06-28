import { Typography, makeStyles, Grid } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import contentImg from '../public/images/ContentFaster_video.jpg';

const usesStyles = makeStyles({
    mainText: {
        color:'#2a0f57',
        marginTop: 40,
        fontWeight: 600,
        fontFamily: 'Montserrat,sans-serif'
    },
    whyText: {
        marginTop: 30,
        marginBottom: 20,
        color:'#2a0f57',
        fontWeight: 500,
    },
    gridContainer: {
        marginTop: 50,
        marginLeft: 50,
    },
    contentImg : {
        marginTop: 30,
    }
})

const WhyChoose = () => {
    const classes = usesStyles();

    return (
        <div>
            <Typography
            variant="h2"
            align="center"
            className={classes.mainText}
            >
                Why Choose Contentstack?
            </Typography>
            <Grid container
            spacing={3}
            className={classes.gridContainer}
            >
                <Grid item lg={4} sm={6}>
                        <div className={classes.textContainer}>
                            <div>
                            <Typography
                            variant="h4"
                            className={classes.whyText}
                            >
                                Creating Content Faster
                            </Typography>
                            <Typography
                            variant="h6"
                            >
                                Intuitively designed so marketers can do more faster, flying solo - developers rejoice.
                            </Typography>
                            </div>

                            <div>
                            <Typography
                                variant="h4"
                                className={classes.whyText}
                                >
                                    Creating Content Faster
                                </Typography>
                                <Typography
                                variant="h6"
                                >
                                    Intuitively designed so marketers can do more faster, flying solo - developers rejoice.
                                </Typography>
                            </div>
                            <div>
                            <Typography
                            variant="h4"
                            className={classes.whyText}
                            >
                                Creating Content Faster
                            </Typography>
                            <Typography
                            variant="h6"
                            >
                                Intuitively designed so marketers can do more faster, flying solo - developers rejoice.
                            </Typography>
                            </div>
                        </div>
                        
                </Grid>
                <Grid item lg={6}
                className={classes.contentImg}
                >
                    <Image src={contentImg} height="500" width="700" alt="22"></Image>
                </Grid>
            </Grid>
        </div>
    );
};

export default WhyChoose;