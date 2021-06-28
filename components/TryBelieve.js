import { Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: "white",
        fontWeight: 600,
        fontFamily: "'Montserrat',sans-serif",
    }
})

const TryBelieve = () => {
    const classes = useStyles();
    return (
        <div className="try-container">
            <Typography
            variant="h2"
            align="center"
            className={classes.title}
            >
              TRY IT TO BELIEVE IT
            </Typography>
            <div style={{textAlign: 'center', color: 'white'}}>
                <Button>LEARN MORE</Button>
                <Button>CONTACT US</Button>
            </div>
        </div>
    );
};

export default TryBelieve;