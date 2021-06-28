import { Typography, makeStyles,Button, Grid, Paper } from "@material-ui/core";
import Image from 'next/dist/client/image';

import Gatsby from '../public/images/gatsby-monogram-logo.png';
import Cloud from '../public/images/cloudinary-icon-logo.png';
import Google from '../public/images/thumb-icon-ga.png'
import Shopify from '../public/images/thumb-icon-shopify.png'


const useStyles = makeStyles({
    IntegrationTitle: {
        color: '#2a0f57',
        fontWeight: 600,
        fontFamily: "'Montserrat',sans-serif",
        marginBottom: 20,
        marginTop: 60,
    },
    Btn: {
        textAlign: 'center',
        marginTop: 30,
    },
    imgCol: {
        marginTop: 100,
    }
})

const Integration = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography
            variant="h2"
            align="center"
            className={classes.IntegrationTitle}
            >
                Integrations for Every Industry
            </Typography>
            <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            >
            Our API-first headless CMS makes it easy. Easily integrate your preferred business and marketing technologies to meet <br /> your needs.
            </Typography>
                <div className={classes.Btn}>
                <Button
                    variant="outlined"
                    color="secondary"
                    >SEE ALL INTEGRATION</Button>
                </div>

                <Grid container spacing={3} className={classes.imgCol}>
                    <Grid item lg={2}>
                        <Paper align="center" className={classes.ImgMain}>
                            <Image height="100px" width="100px" src={Cloud} alt="1"></Image>
                            <Typography variant="h6" color="textSecondary">Cloudinary</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Google} alt="2"></Image>
                            <Typography variant="h6" color="textSecondary">Google Analytics</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Gatsby} alt="3"></Image>
                            <Typography variant="h6" color="textSecondary">Gatsby</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Cloud} alt="4"></Image>
                            <Typography variant="h6" color="textSecondary">Cloudinary</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Google} alt="5"></Image>
                            <Typography variant="h6" color="textSecondary">Google</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Cloud} alt="6"></Image>
                            <Typography variant="h6" color="textSecondary">Cloudinary</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                {/* second row */}
                <div style={{marginLeft: '200px'}}>
                <Grid container spacing={3} className={classes.imgCol}>
                    <Grid item lg={2}>
                        <Paper align="center" className={classes.ImgMain}>
                            <Image height="100px" width="100px" src={Cloud} alt="1"></Image>
                            <Typography variant="h6" color="textSecondary">Cloudinary</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Google} alt="2"></Image>
                            <Typography variant="h6" color="textSecondary">Google Analytics</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Gatsby} alt="3"></Image>
                            <Typography variant="h6" color="textSecondary">Gatsby</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Cloud} alt="4"></Image>
                            <Typography variant="h6" color="textSecondary">Cloudinary</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={2}>
                        <Paper align="center">
                            <Image height="100px" width="100px" src={Google} alt="5"></Image>
                            <Typography variant="h6" color="textSecondary">Google</Typography>
                        </Paper>
                    </Grid>
                    
                </Grid>
                </div>
        </div>
    );
};

export default Integration;