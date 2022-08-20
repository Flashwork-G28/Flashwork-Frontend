import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {inspect} from "util";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import bg1 from "../../Assets/backgroundImages/myPub.png";
import bg2 from "../../Assets/backgroundImages/countWorker2.png";
import bg3 from "../../Assets/backgroundImages/countWorker.png";
import Box, { BoxProps } from '@mui/material/Box';
import Image from '../../Assets/backgroundImages/backgroundDot.png';
import { positions } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const useStyles = makeStyles({
    root: {
        width:'70px',
        height:'70px',
        borderRadius: '10px',
        border: '1px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft:'90px',
        position: 'relative',
        marginBottom:'-30px',
        backgroundColor:'white'

    },
    CardBody: {
        width: '250px',
        height: '250px',
        borderRadius: '10px',
        // backgroundColor: 'red',
        padding:'10px'

    }
});

export default function HomeServiceCard() {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
                <div>
                    <Typography variant="h5" color="#4E2363" fontWeight="bold" >Its Easy To Anroll And Get Our Service</Typography>
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
                            { title : 'Find jobs', name: ' FlashWork is your source for jobs and career opportunities platform. Search for the jobs, read career advice from Monster\'s job experts, and find hiring and recruiting advice.' , img: bg1 },
                            { title: 'Get the services', name: 'one that works especially at manual or industrial labor or with a particular material as a factory worker. a person who works cafeteria worker He\'s a good worker.' , img: bg2 },
                            { title: 'Schedule plan', name: 'Create your own business plan 1.1 Mission At Web Applications, our mission is to provide an online office system that links workers in different locations to their mother company. ' , img: bg3 },

                        ].map((item, index) => (

                            <Grid item xs={3} key={index} >
                                <div className={classes.CardBody} >
                                    <div className={classes.root}>
                                        <img
                                            src={`${item.img}?w=32&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=32&fit=crop&auto=format&dpr=2 2x`}
                                            loading="lazy"
                                            style={{width: '32px', height:'32px'}}
                                        />
                                    </div>
                                    <Card color={'blue'}>
                                        <CardContent>
                                            <Typography variant="h6" component="div" color={'secondary'} style={{padding:'40px 5px 10px 5px'}} fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2">{item.name}</Typography>
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
}
