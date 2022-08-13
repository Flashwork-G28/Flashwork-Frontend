import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {inspect} from "util";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Image from '../../Assets/backgroundImages/backgroundDot.png';
import { positions } from '@mui/system';

const useStyles = makeStyles({
    root: {
        width:'70px',
        height:'70px',
        borderRadius: '10px',
        border: '1px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft:'110px',
        position: 'relative',
        // marginBottom:'-10px',
        backgroundColor:'white',
        backgroundImage: Image
    },
    CardBody: {
        width: '250px',
        borderRadius: '10px',
        padding:'10px',
        backgroundImage: "url('.././Assets/backgroundImages/backgroundGot.png')",
        // backgroundColor:'pink',
        marginTop:'-20px'
        // border: '1px solid #E5E5E5'

    },
    GridCard: {
        // direction: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
        // backgroundColor: 'blue'
    }
});

export default function HomeServiceCard() {
    const classes = useStyles();
    return (

        <div>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                >
            {[
                { title : 'Find jobs', name: 'FlashWork is your source for jobs and career opportunities.Search for jobs, read career advice from Monsters job experts,and find hiring and recruiting advice.' },
                { title: 'Get the services', name: 'one that works especially at manual or industrial labor or with a particular material as a factory worker. a person who works cafeteria worker He\'s a good worker.' },
                { title: 'Schedule plan', name: 'Create your own business plan 1.1 Mission At Web Applications, our mission is to provide an online office system that links workers in different locations to their mother company. ' },

            ].map((item, index) => (

                    <Grid item xs={3} key={index} >
                            {/*<div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , order:'2',marginLeft:'100px'}}>*/}
                            {/*</div>*/}

                            <div className={classes.CardBody} >
                                <div className={classes.root}>
                                </div>
                                <Card color={'blue'}>
                                    <CardContent>
                                        <Typography variant="h5" component="div" color={'secondary'} style={{paddingBottom:'10px'}}>
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

    );
}
