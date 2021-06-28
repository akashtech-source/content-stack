import { Paper } from '@material-ui/core';
import { Typography, makeStyles, Grid, Button } from '@material-ui/core';
import Image from 'next/image';
import CustomerVid from '../public/images/CustomerSuccess_video.jpg';

const useStyles = makeStyles({
    careTitle: {
        color: '#eb5646',
        fontWeight: 500,
        fontFamily: "'Montserrat',sans-serif",
        marginTop: 30,
        paddingLeft: 30,
        paddingTop: 50,
    },
    slogan : {
        color: 'white',
        marginBottom: 20,
        marginTop: 50,
        fontFamily: "'Montserrat',sans-serif",
    },
    detail: {
        marginBottom: 40,
        marginTop: 30,
        color: 'white',
    },
    workerData: {
        padding: 50,
        height: 400,
        border: '10px solid #7c4dff',
        marginTop: 100,
    },
    Name: {
        marginBottom: 20,
        fontWeight: 500,
    },
    Position: {
        marginBottom: 50,
        fontWeight: 500,
    }
})

const Care = () => {
    const classes = useStyles();

    return (
        <div className="care-container">
            <Typography
            variant="h2"
            className={classes.careTitle}
            >
            Care Without CompromiseTM
            </Typography>

            <div style={{padding: '50px'}}>
            <Grid container spacing={2}>
                
                <Grid item lg={6}>
                    <Typography
                    variant="h3"
                    className={classes.slogan}
                    >
                    We are obsessed with our customer success
                    </Typography>
                    <Typography
                    variant="h6"
                    className={classes.detail}
                    >
                    Our Customer Care team provides exceptional whiteglove service with unprecedented response time to support customer goals.
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    >LEARN ABOUT CUSTOMER CARE</Button>
                </Grid>
                
                <Grid item lg={6}>
                    <Image src={CustomerVid} alt="3"></Image>
                </Grid>
            </Grid>

            {/* Second Grid */}

            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <Paper className={classes.workerData}>
                        <Typography
                        variant="h4"
                        color="primary"
                        className={classes.Name}
                        >
                            Ellie Mae
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.Position}
                        >
                            Financial Service
                        </Typography>
                        <Typography
                        variant="h6"
                        color="textSecondary"
                        className={classes.Detail}
                        >
                            Contentstack isnt just a CMS of today. Its the CMS of the future. I dont know how we operated without Contentstack.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item lg={6}>
                    <Paper className={classes.workerData}>
                        <Typography
                        variant="h4"
                        color="primary"
                        className={classes.Name}
                        >
                            Iceland Air
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.Position}
                        >
                            Travel
                        </Typography>
                        <Typography
                        variant="h6"
                        color="textSecondary"
                        className={classes.Detail}
                        >
                            With Contentstack, the Icelandair content team is able to publish content with a much higher frequency than ever before and we’ve cut the time it takes to push out promotions by over 90 percent
                        </Typography>
                    </Paper>
                </Grid>
                
            </Grid>
            </div>
        </div>
    );
};

export default Care;