import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

import CaseStudy from '../public/images/CaseStudies_thumb.jpg';
import Docs from '../public/images/Docs_thumb.jpg';
import Blog from '../public/images/Blog_tile.jpg'
import Image from 'next/image';

const useStyles= makeStyles({
    title: {
        marginTop: 50,
        color: '#2a0f57',
        fontWeight: 600,
        fontFamily: "'Montserrat',sans-serif",
    },
    containerMain: {
        marginLeft: 150,
        marginTop: 50,
    },
    Text: {
        marginTop: 20,
        padding: 20,
        fontFamily: "'Montserrat',sans-serif",
    }
})

const Resources = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography
            variant="h2"
            align="center"
            className={classes.title}
            >
                Recommended Resources
            </Typography>

            <Grid container
            spacing={3}
            className={classes.containerMain}
            >
            <Grid item lg={3}>
                        <Paper className={classes.ImgMain}>
                            <Image height="300px" width="500px" src={CaseStudy} alt="1"></Image>
                            <Typography className={classes.Text} variant="h6" color="textSecondary">Learn more about the headless CMS technology, news, tips, and best practices, including CXPs, DXPs, content hubs, SaaS CMS, and more!</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <Paper>
                            <Image height="300px" width="500px" src={Docs} alt="2"></Image>
                            <Typography className={classes.Text} variant="h6" color="textSecondary">Learn more about the headless CMS technology, news, tips, and best practices, including CXPs, DXPs, content hubs, SaaS CMS, and more!</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <Paper>
                            <Image height="300px" width="500px" src={Blog} alt="3"></Image>
                            <Typography className={classes.Text} variant="h6" color="textSecondary">Learn more about the headless CMS technology, news, tips, and best practices, including CXPs, DXPs, content hubs, SaaS CMS, and more!</Typography>
                        </Paper>
            </Grid>
            </Grid>
        </div>
    );
};

export default Resources;