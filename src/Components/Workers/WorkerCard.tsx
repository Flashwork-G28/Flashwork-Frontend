import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import pc1 from "../../Assets/backgroundImages/man1.jpg";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { yellow } from '@mui/material/colors';

const useStyles = makeStyles({
    cardBody: {

        backgroundColor:'white',
        width:'350px',
        height:'450px',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin:'30px',
        position: 'relative',
    },

    line :{
        width: '300px',
        height: '0.001px',
        border: '0.5px solid #4E2363',
        marginTop:'15px',

    },
    contentCard:{
        width:'100%' ,
        height:'fitcontent',
        // backgroundColor: 'red',
        textalign: 'left',

    },
    booking:{
        // marginTop:'80px',
        position: 'absolute',
        bottom: '50px',
        right: '25px',
    },
    hartCard:{
        width:'100px',
        height:'100px',
        marginRight: '50px',
        display: 'flex',
        flexDirection:'column',


    },
})


const WorkerCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.cardBody}>

            <Grid
                container
                direction="column"
                margin='25px' >

                <Grid className={classes.contentCard} sx={{ width:'100%' , height:'fitContent'} }
                      container
                      justifyContent="space-between"
                      alignItems="flex-start">
                    <Grid item xs={6}>
                        <Avatar
                            alt="Remy Sharp"
                            src= {pc1}
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs={6} container
                          direction="column"
                          alignItems="flex-end"
                          >

                            <FavoriteBorderIcon fontSize='medium' sx={{mr:5.8}} />
                            <Stack direction="row" spacing={0.5} sx={{mt:7 ,mr:5.8}} alignItems="flex-end">
                                <StarIcon sx={{color:yellow[600]}}/>
                                <Typography variant="subtitle2" fontWeight='500'>4.5</Typography>
                                <Typography variant="subtitle2" fontWeight='500'>(2 reviews)</Typography>
                            </Stack>

                    </Grid>

                </Grid>
                <Grid alignItems="flex-start" className={classes.contentCard}>
                    <div className={classes.line}></div>
                    <Typography variant="h6" component="h6" fontWeight='700' textAlign='left'>
                        Mohomad Faalil
                    </Typography>
                    <Typography variant="subtitle2" fontWeight='700' textAlign='left'>
                        <span><WorkIcon fontSize='small' /></span> Home Repairs
                    </Typography>
                    <Typography variant="subtitle2" fontWeight='500' textAlign='left'>
                        <span><CheckCircleOutlineIcon fontSize='small' /></span> 49 Minor Tasks Completed
                    </Typography>

                    <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px' marginRight='25px' position='absolute' >
                        I have been repairing anything that needed it for 35 years.
                        I have an engineering degree, tools, and a truck. How can I help you?
                    </Typography>
                </Grid>
                <Grid className={classes.booking} >
                    <Button variant="contained">Booking</Button>
                </Grid>

            </Grid>


        </div>
    );
};

export default WorkerCard;
