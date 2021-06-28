import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import alliance from '../public/images/MACH_Alliance_logo.svg'

const useStyles = makeStyles({
    Btn: {
        marginTop: 30,
    },
    Img: {
        marginTop: 40,
    }
})

const Alliance = () => {
    const classes = useStyles();

    return (
        <div style={{marginLeft: '200px', 
        border: '15px solid #ffd433', 
        padding: '50px', 
        width: '70%',
        marginTop: '80px'
        }}
        >
            <Grid container spacing={4}>
                <Grid item lg={3}
                className={classes.Img}
                >
                    <Image src={alliance} alt="55"></Image>
                </Grid>
                <Grid item lg={8}>
                    <Typography
                    variant="h6"
                    color="textSecondary"
                    >
                        Contentstack is a founding member of the MACH Alliance, providing the industry leading best-of-breed CMS and Experience Management solutions via microservices, API-first, cloud-native SaaS, and headless technologies.
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.Btn}
                    >
                        LEARN MORE
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Alliance;