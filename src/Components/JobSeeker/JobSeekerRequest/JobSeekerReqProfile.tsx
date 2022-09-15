import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CallIcon from '@mui/icons-material/Call';
import RequestProfile from '../../../Assets/JobSeeker/JobSeekerReqPro.png'

const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#000000' : 'none',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: '#1C1C1C',
    borderRadius:'20px',
    // color: theme.palette.text.secondary,
}));


const JobSeekerReqProfile = () => {


    return (
        <div>
            {/*<h1  className={classes.link}>Ananda Rajakaruna</h1>*/}
            <Box  sx={{ flexGrow: 1 }} style={{ paddingLeft:'25px'}}>
                <Grid  container spacing={2} >
                    <Grid  item xs={12} >
                        <Item style={{boxShadow:'none'}}><h2>Ananda Rajakaruna</h2></Item>
                    </Grid>
                    <Grid  item xs={6}>

                        <Item style={{boxShadow:'none'}} >
                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><PersonPinCircleIcon />Nugegoda</div>
                        <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><GroupIcon />5  Members</div>
                        <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><PaidIcon />Online</div>
                        <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><DateRangeIcon />23-08-2022</div>
                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><CallIcon />+94772826357</div>

                        </Item>


                    </Grid>
                    <Grid item xs={6}>
                        <Item style={{boxShadow:'none'}}>
                            <img src={RequestProfile} width={"150px"} height={"150px"} alt={"RequestProfile"}/>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item style={{boxShadow:'none'}}><h3>Note</h3></Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item style={{boxShadow:'none'}}>I Need A Job Today. Work From Home Sites. Work Remote. Work From Home Sites. Computer Work From Home</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item style={{boxShadow:'none'}}>Chat</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerReqProfile;

// import React from 'react';
// import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
// import GroupIcon from '@mui/icons-material/Group';
// import PaidIcon from '@mui/icons-material/Paid';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import CallIcon from '@mui/icons-material/Call';
// import RequestProfile from '../../../Assets/JobSeeker/JobSeekerReqPro.png'
//
//
//
//
// const JobSeekerReqProfile = () => {
//     return (
//         <div style={{width:"100%",height:"100%",borderRadius:"5px",backgroundColor:"yellow"}}>
//             <div style={{width:"100%",height:"50%"}}>
//                 <div style={{paddingRight:"200px"}}><h2>Ananda Rajakaruna</h2></div>
//                 <div style={{display:"flex",flexDirection:"row"}}>
//                     <div style={{paddingLeft:"30px",display:"flex",flexDirection:"column"}}>
//                        <div style={{display:"flex",flexDirection:"row"}}><PersonPinCircleIcon /> <div style={{paddingLeft:"10px",fontWeight:"bold"}}>Negegoda</div></div>
//                         <div style={{display:"flex",flexDirection:"row"}}><GroupIcon /> <div style={{paddingLeft:"10px",fontWeight:"bold"}}>5 Member</div></div>
//                         <div style={{display:"flex",flexDirection:"row"}}><PaidIcon /> <div style={{paddingLeft:"10px",fontWeight:"bold"}}>Oline</div></div>
//                         <div style={{display:"flex",flexDirection:"row"}}><DateRangeIcon /> <div style={{paddingLeft:"10px",fontWeight:"bold"}}>23 - 08 - 2022</div></div>
//                         <div style={{display:"flex",flexDirection:"row"}}><CallIcon /> <div style={{paddingLeft:"10px",fontWeight:"bold"}}></div>+94772826357</div>
//
//                     </div>
//                     <div style={{paddingLeft:"80px"}}>
//                         <img src={RequestProfile} width={"150px"} height={"150px"} alt={"RequestProfile"}/>
//                     </div>
//                 </div>
//                 <div style={{paddingRight:"350px"}}><h3>Note</h3></div>
//                 <div>Cz</div>
//             </div>
//
//
//             <div style={{width:"100%",height:"50%",backgroundColor:"red"}}>Cha</div>
//         </div>
//     );
// };
//
// export default JobSeekerReqProfile;

