import { Box, makeStyles, Typography } from '@material-ui/core';
import Youtube from '../Assets/Images/Youtube.png';
import Instagram from '../Assets/Images/Instagram.jpg';

const useStyle = makeStyles({
    image: {
        width: '50%' ,
        height: '50%'
    },
    component: {
        margin: 50
    }
})

const CodeForInterview = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
        <Typography variant="h4" style={{marginBottom: 50}}>Code for Interview</Typography>
        <Box style={{display: 'flex'}}>
            <img className={classes.image} src={Youtube} />
            <img className={classes.image} src={Instagram} />
        </Box>
        </Box>

    )
}

export default CodeForInterview;