import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {inspect} from "util";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';

//
// const CardContainer = shal`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #1f2229;
//
// `;

const useStyles = makeStyles({
    root: {
        width:'50px',
        height:'50px',
        borderRadius: '10px',
        border: '1px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft:'100px'
    },
    CardBody: {
        width: '250px',
        // borderRadius: '10px',
        padding:'10px'
        // backgroundColor:'pink',
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
        // <div>
        //     {[
        //         { title : 'Find jobs', name: 'FlashWork is your source for jobs and career opportunities.Search for jobs, read career advice from Monsters job experts,and find hiring and recruiting advice.' },
        //         { title: 'Find SSS', name: 'jjjjjjjjjjj' },
        //         { title: 'Find AAA', name: 'kkkkkkkkkkkkkkkkkkkkk' },
        //
        //     ].map((item, index) => (
        //         <Grid className={classes.GridCard} >
        //             <Grid item xs={3} key={index} >
        //                     {/*<div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , order:'2',marginLeft:'100px'}}>*/}
        //                     {/*</div>*/}
        //
        //                     <div className={classes.CardBody} >
        //                         <div className={classes.root}>
        //                         </div>
        //                         <Card color={'blue'}>
        //                             <CardContent>
        //                                 <Typography variant="h5" component="div" color={'secondary'} style={{paddingBottom:'10px'}}>
        //                                     {item.title}
        //                                 </Typography>
        //                                 <Typography variant="body2">{item.name}</Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </div>
        //             </Grid>
        //         </Grid>
        //     ))}
        // </div>


        <Grid className={classes.GridCard} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
            <Grid item xs={3}  >
                <div>
                    {/*<div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , order:'2',marginLeft:'100px'}}>*/}
                    {/*</div>*/}
                    <div className={classes.root}>
                    </div>
                    <div>
                        <Card className={classes.CardBody} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="div" color={'secondary'} style={{paddingBottom:'10px'}}>
                                    Find jobs
                                </Typography>

                                <Typography variant="body2">
                                    FlashWork is your source for jobs and career opportunities.
                                    Search for jobs, read career advice from Monster's job experts,
                                    and find hiring and recruiting advice.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    {/*<div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , order:'2',marginLeft:'100px'}}>*/}
                    {/*</div>*/}
                    <div className={classes.root}>
                    </div>
                    <div>
                        <Card className={classes.CardBody} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="div" color={'secondary'} style={{paddingBottom:'10px'}}>
                                    Find jobs
                                </Typography>

                                <Typography variant="body2">
                                    FlashWork is your source for jobs and career opportunities.
                                    Search for jobs, read career advice from Monster's job experts,
                                    and find hiring and recruiting advice.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    {/*<div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , order:'2',marginLeft:'100px'}}>*/}
                    {/*</div>*/}
                    <div className={classes.root}>
                    </div>
                    <div>
                        <Card className={classes.CardBody} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="div" color={'secondary'} style={{paddingBottom:'10px'}}>
                                    Find jobs
                                </Typography>

                                <Typography variant="body2">
                                    FlashWork is your source for jobs and career opportunities.
                                    Search for jobs, read career advice from Monster's job experts,
                                    and find hiring and recruiting advice.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
