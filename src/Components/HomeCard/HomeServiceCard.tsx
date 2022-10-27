import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import bg1 from "../../Assets/backgroundImages/myPub.png";
import bg2 from "../../Assets/backgroundImages/countWorker2.png";
import bg3 from "../../Assets/backgroundImages/countWorker.png";
import Box from '@mui/material/Box';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const useStyles = makeStyles({
    imageBox: {
        width:'70px',
        height:'70px',
        borderRadius: '10px',
        border: '1px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft:'90px',
        position: 'relative',
        marginBottom:'-30px',
        textAlign:'center',
        paddingTop:'10px',
        backgroundColor:'white'

    },
    CardBody: {
        width: '250px',
        height: '250px',
        borderRadius: '20px',
        // backgroundColor: 'red',
        padding:'10px'

    }
});

const HomeServiceCard = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
                <div>
                    <Typography variant="h5" color="#4E2363" fontWeight="bold" textAlign='center' >Yes, Its That Easy To Enroll and get our services.</Typography>
                </div>
                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        height="360px"
                    >
                        {[
                            { title : 'Find jobs', name: ' Flashwork is your source for part-time work and will facilitate finding the most suitable work that you prefer even searching for jobs.' , img: bg1 },
                            { title: 'Get the services', name: 'Flashwork provides the platform to find the best and the most suitable workers for your part-time work according to the specific category.' , img: bg2 },
                            { title: 'Schedule plan', name: 'Flashwork has the facility to post advertisements for your specific requirements and can apply for advertisements for opportunities. ' , img: bg3 },

                        ].map((item, index) => (
                            <Grid item xs={3} key={index} >
                                <div className={classes.CardBody} >
                                    <div className={classes.imageBox}>
                                        {/*<img*/}
                                        {/*    src={`${item.img}?w=32&fit=crop&auto=format`}*/}
                                        {/*    srcSet={`${item.img}?w=32&fit=crop&auto=format&dpr=2 2x`}*/}
                                        {/*    loading="lazy"*/}
                                        {/*    style={{width: '32px', height:'32px'}}*/}
                                        {/*    alt={"homeImage"}*/}
                                        {/*/>*/}
                                        <WorkHistoryIcon />

                                    </div>
                                    <Card color={'blue'}>
                                        <CardContent>
                                            <Typography variant="h6" component="div" color={'secondary'} style={{padding:'40px 5px 10px 5px', textAlign:'center'}} fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" style={{padding:'10px 5px 10px 5px', textAlign:'center'}}>{item.name}</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </Box>
        </>
    );
};

export default HomeServiceCard;




