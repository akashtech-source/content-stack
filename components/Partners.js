import { Typography, makeStyles, Grid, Paper} from '@material-ui/core';
import Image from 'next/dist/client/image';
import Gatsby from '../public/images/gatsby-monogram-logo.png';
import Cloud from '../public/images/cloudinary-icon-logo.png';
import Google from '../public/images/thumb-icon-ga.png'
import Shopify from '../public/images/thumb-icon-shopify.png'
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    title: {
        color: '#2a0f57',
        fontWeight: 600,
        marginTop: 60,
        fontFamily: "'Montserrat',sans-serif",
    },
    imgCol: {
        marginTop: 100,
        marginBottom: 70,
    }
})

const Partners = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography
            variant="h3"
            align="center"
            className={classes.title}
            >
            Our Partners are Catalysts for Success
            </Typography>
            <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            >
            Industry-leading Technologies and Service Providers
            </Typography>

            <div style={{marginTop: '30px'}}>
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
                            <Image height="100px" width="100px" src={Shopify} alt="6"></Image>
                            <Typography variant="h6" color="textSecondary">Shopify</Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
        <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        >
         Our Catalysts are partners with years of experience accelerating projects with some of the industrys <br /> best-of-breed technologies.
        </Typography>
            <div style={{textAlign: 'center',  marginTop: '30px'}}>
            <Button
            >FIND A PARTNER</Button>
            <Button
            >PARTNER OVERVIEW</Button>
            </div>
        </div>
    );
};

export default Partners;