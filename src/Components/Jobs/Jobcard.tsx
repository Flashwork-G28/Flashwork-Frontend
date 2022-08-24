import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import pc1 from "../../Assets/backgroundImages/man1.jpg";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import {blue} from "@mui/material/colors";
import { pink } from '@mui/material/colors';
import Swal from 'sweetalert2';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    cardBody: {
        backgroundColor:'white',
        width:'650px',
        height:'250px',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin:'30px',
    },

    line :{
        width: '300px',
        height: '0.001px',
        border: '0.5px solid #4E2363',
        marginTop:'25px',

    },
    contentCard:{
        width:'100%' ,
        height:'fitcontent'
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    }

})


const JobsCard = () => {
    const navigate = useNavigate()
    const {
        user
    } = useAuth0();
    const classes = useStyles();

    const confirmJob = () => {
        if(user?.family_name==="JobSeeker"){
            Swal.fire({
                title: 'You Are About Apply for this Job ? ',
                icon: 'question',
                iconHtml: '?',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Yes',
                showCancelButton: true,
                showCloseButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Apply!',
                        'Your SuccesfullY Apply this Job.',
                        'success'
                    )
                }
            })
        }else{
            navigate("/signUp/JobSeeker", { replace: false });
        }
    };
    return (
        <div className={classes.cardBody}>
            <Grid container margin='25px'>
                <Grid item xs={3}>
                    <Avatar
                        alt="Remy Sharp"
                        src= {pc1}
                        sx={{ width: 100, height: 100 }}
                    />
                </Grid>
                <Grid item xs={7} display={"flex"} flexDirection={"column"} >
                    <Typography  variant="h6" component="h6" fontWeight='700'sx={{mt:4}}  >
                        Mohomad Faalil Maharagama
                        <  LocationOnIcon sx={{ml:1 }} color="primary" />
                    </Typography>
                    <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                        <  PersonIcon sx={{mr:1,color: pink[500]}} />   Requires: 5 Members
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    < BookmarkBorderIcon />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px' marginRight='25px'  >
                        I have been repairing anything that needed it for 35 years.
                        I have an engineering degree, tools, and a truck. How can I help you?
                    </Typography>
                </Grid>

                <Grid item xs={12} display={"flex"}  flexDirection={"row-reverse"}>
                    <Button sx={{ mr: 6}} variant="contained" onClick={confirmJob}>Apply</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default JobsCard;
