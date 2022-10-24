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
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import Swal from 'sweetalert2';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';




const useStyles = makeStyles({
    JobcardBody: {
        backgroundColor:'white',
        width:'650px',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin:'30px',
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    }

})

type JobProps = {
    message: string;
};


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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please Log as a Job Seeker !"
            })
        }
    };
    return (
        <div className={classes.JobcardBody}>
            <Grid container  sx={{m:2}} width={"fit-content"}>
                <Grid item xs={3}>
                    <Avatar
                        alt="Remy Sharp"
                        src= {pc1}
                        sx={{ width: 100, height: 100 }}
                    />
                </Grid>
                <Grid item xs={9} display={"flex"} flexDirection={"column"} >
                    <Typography  variant="h5"  fontWeight='700'  >
                        Mohomad Faalil
                    </Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                <  LocationOnIcon sx={{mr:1,color:purple[900]}} />Angoda
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                <  WorkIcon sx={{mr:1,color: purple[900]}} />Clener
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                <  PersonIcon sx={{mr:1,color: purple[900]}} />5 Members
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography  variant="subtitle1"  fontWeight='400'   sx={{mt:2}}>
                        1 Worker Paymet : 5000 LKR
                    </Typography>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="body2" fontWeight='500' sx={{m:1}}  >
                        I have been repairing anything that needed it for 35 years.
                        I have ansfsfs\ engineering degree, tools, and a truck. How can I help you?
                    </Typography>

                </Grid>
                <Grid container item  alignItems="center" xs={12}  sx={{mt:1,ml:1}}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" fontWeight='700' >
                                7 Days Ago
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Box display="flex" justifyContent="flex-end">
                                <Button sx={{mr:2}} variant="contained" onClick={confirmJob}>Apply</Button>
                            </Box>

                        </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default JobsCard;
