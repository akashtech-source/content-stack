import { Grid, makeStyles } from '@material-ui/core';
import Image from 'next/dist/client/image';
import logo1 from '../public/images/logo-americanairlines.jpg'
import logo2 from '../public/images/logo-berlitz.jpg'
import logo3 from '../public/images/logo-dertouristik.jpg'
import logo4 from '../public/images/logo-elastic.jpg'
import logo5 from '../public/images/logo-express.jpg'
import logo6 from '../public/images/logo-holidayinn.jpg'

const useStyles = makeStyles({
    clientImg: {
        width: 30,
        
    }
})

const HappyClient = () => {
    const classes = useStyles()

    return (
        <div style={{marginTop: '30px'}}>
            <Grid container>
                <Grid item lg={2}>
                    <Image  src={logo1} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image src={logo2} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image src={logo3} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image src={logo4} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image src={logo5} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image src={logo6} alt=""></Image>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default HappyClient;