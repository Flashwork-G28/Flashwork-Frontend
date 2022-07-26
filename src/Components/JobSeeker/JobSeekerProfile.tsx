
import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Deshani from '../../Assets/JobSeeker/Deshani.png';
import TextField from "@material-ui/core/TextField";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Popup from '../Popup/popup'
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@material-ui/core/Menu";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
const axios = require('axios');





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#1C1C1C',
    //color: theme.palette.text.secondary,
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));







const JobSeekerProfile = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const [value, setValue] = React.useState<number | null>(2);
    const [profileDetails, setProfileDetails] = React.useState<any>([]);
    const [isShown, setShwon] = React.useState<boolean | false>(false);
    const [firstName, setFirstName] = React.useState<String>("");
    const [lastname, setLastName] = React.useState<String>("");
    const [email, setEmail] = React.useState<String>("");
    const [location, setLocation] = React.useState<String>("");
    const [mobile, setMobile] = React.useState<String>("");

    const popUp = () => {
        setShwon(true);
    }

    const updateProfile = async () => {
        const data = {firstName : firstName, lastname : lastname , email : email, location : location, mobile : mobile}
        await axios.post("http://localhost:8000/JobSeeker/updateProfile",data)
        // window.location.reload();
    }


    useEffect(() => {

        axios.get("http://localhost:8000/JobSeeker/profile")
            .then((response: { data: any; }) => {
                console.log(response.data);


                const det = response.data;
                console.log(det);

            det.map((item: any) => {

                setProfileDetails((prevState: any) => [...prevState, {
                    first_name: item.first_name,
                     last_name: item.last_name,
                    email: item.email,
                    mobile: item.mobile,
                    description: item.description,
                    city: item.city,
                    qualification: item.qualification,



                }])
                return null;
            });
        })
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                       <div style={{display:"flex",flexDirection:"column",paddingTop:"20px"}}>
                          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",borderRadius:"5px"}} >
                              <div style={{color:"#46225F"}}><h3>Membership Details</h3></div>
                              <div><button style={{backgroundColor:"#61266E",color:"white",border:"none",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Payement History</button></div>
                          </div>
                           <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                               <div style={{width:"170px",height:"110px",backgroundColor:"lightgray",paddingTop:"10px",borderRadius:"5px"}}>
                                   <AdminPanelSettingsIcon />
                                   <div style={{color:"#46225F",fontWeight:"bold"}}>Membership</div>
                                   <p>Pro membership</p>
                               </div>
                               {/*<div style={{width:"170px",height:"110px",backgroundColor:"lightgray",paddingTop:"10px",borderRadius:"5px"}}>*/}
                               {/*    <CreditScoreIcon />*/}
                               {/*    <div style={{color:"#46225F",fontWeight:"bold"}}>Payment</div>*/}
                               {/*    <p>xxxxxxxx</p>*/}
                               {/*</div>*/}
                               {/*<div style={{width:"170px",height:"110px",backgroundColor:"lightgray",paddingTop:"10px",borderRadius:"5px"}}>*/}
                               {/*    <CalendarMonthIcon />*/}
                               {/*    <div style={{color:"#46225F",fontWeight:"bold"}}>Date</div>*/}
                               {/*    <p>09/09/2022</p>*/}
                               {/*</div>*/}

                           </div>
                       </div>
                        </Grid>
                        <Grid item xs={12}>

                            {profileDetails.map((item:any) => {
                              return (

                            <Grid container spacing={2}>
                                <Grid container spacing={3} item xs={12}>
                                    <Grid item xs={4} style={{ display : "flex" , justifyContent: "center" , alignItems: "center"}}>

                                        <img src={Deshani} alt={Deshani} width={"100px"} height={"100px" }  style={{ border: "2px solid green", borderRadius:"100%"}}/>
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Grid item xs={12}>
                                            <div style={{display:"flex",justifyContent:"end"}}>
                                                <div>
                                                    <Button
                                                        ref={anchorRef}
                                                        id="composition-button"
                                                        aria-controls={open ? 'composition-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        aria-haspopup="true"
                                                        onClick={handleToggle}
                                                    >
                                                        <MoreVertIcon />
                                                    </Button>
                                                    <Popper
                                                        open={open}
                                                        anchorEl={anchorRef.current}
                                                        role={undefined}
                                                        placement="bottom-start"
                                                        transition
                                                        disablePortal
                                                    >
                                                        {({ TransitionProps, placement }) => (
                                                            <Grow
                                                                {...TransitionProps}
                                                                style={{
                                                                    transformOrigin:
                                                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                                }}
                                                            >
                                                                <Paper>
                                                                    <ClickAwayListener onClickAway={handleClose}>

                                                                        <MenuList
                                                                            autoFocusItem={open}
                                                                            id="composition-menu"
                                                                            aria-labelledby="composition-button"
                                                                            onKeyDown={handleListKeyDown}
                                                                        >
                                                                            <MenuItem onClick={popUp}>Edit</MenuItem>
                                                                            <MenuItem onClick={handleClose}>Deactivate</MenuItem>

                                                                        </MenuList>
                                                                    </ClickAwayListener>
                                                                </Paper>
                                                            </Grow>
                                                        )}
                                                    </Popper>
                                                    {isShown && (
                                                        <div>
                                                            <Dialog open={open} onClose={handleClose}>
                                                                <DialogTitle>Edit your profile</DialogTitle>
                                                                <DialogContent>

                                                                    <div style={{display:"flex",flexDirection:"row",marginRight:"5px",paddingBottom:"20px"}}>

                                                                        <div style={{paddingRight:"30px"}}>
                                                                            <TextField
                                                                                id="outlined-helperText"
                                                                                label="Fist Name"
                                                                                onChange={(e) => setFirstName(e.target.value)}
                                                                                // disabled
                                                                                defaultValue={item.first_name}
                                                                            />
                                                                        </div>

                                                                        <div >
                                                                            <TextField
                                                                                id="outlined-helperText"
                                                                                label="Last Name"
                                                                                onChange = {(e) => setLastName(e.target.value)}
                                                                                // disabled
                                                                                defaultValue={item.last_name}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"87%"}}
                                                                               id="outlined-helperText"
                                                                               label="Email"
                                                                               onChange={(e) => setEmail(e.target.value)}
                                                                        // disabled
                                                                               defaultValue={item.email}
                                                                    />
                                                                    <div style={{display:"flex",flexDirection:"row",marginRight:"5px",paddingBottom:"20px"}}>

                                                                        <div style={{paddingRight:"30px"}}>
                                                                            <TextField
                                                                                id="outlined-helperText"
                                                                                label="Location"
                                                                                onChange={(e) => setLocation(e.target.value)}
                                                                                // disabled
                                                                                defaultValue={item.city}
                                                                            />
                                                                        </div>

                                                                        <div >
                                                                            <TextField
                                                                                id="outlined-helperText"
                                                                                label="Mobile"
                                                                                onChange = {(e) => setMobile(e.target.value)}
                                                                                // disabled
                                                                                defaultValue={item.mobile}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button onClick={handleClose}>Cancel</Button>
                                                                    <Button onClick={updateProfile}>Update</Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Grid>

                                        {/*strat*/}




                                        <Grid item xs={12}>


                                                    <form noValidate autoComplete="off">
                                                        <div style={{display:"flex",flexDirection:"row",marginRight:"5px",paddingBottom:"20px"}}>

                                                            <div style={{paddingRight:"30px"}}>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Fist Name"
                                                                    // disabled
                                                                    defaultValue={item.first_name}
                                                                />
                                                            </div>

                                                            <div >
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Last Name"
                                                                    // disabled
                                                                    defaultValue={item.last_name}
                                                                />
                                                            </div>
                                                        </div>
                                                        <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"87%"}}
                                                            id="outlined-helperText"
                                                            label="Email"
                                                                   // disabled
                                                            defaultValue={item.email}
                                                        />
                                                        <div style={{display:"flex",flexDirection:"row",marginRight:"5px",paddingBottom:"20px"}}>

                                                            <div style={{paddingRight:"30px"}}>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Location"
                                                                    // disabled
                                                                    defaultValue={item.city}
                                                                />
                                                            </div>

                                                            <div >
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Mobile"
                                                                    // disabled
                                                                    defaultValue={item.mobile}
                                                                />
                                                            </div>
                                                        </div>


                                                    </form>


                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{paddingLeft:"40px"}}>
                                        <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"91.5%"}}
                                                   id="outlined-helperText"
                                                   label="Description"
                                                   // disabled
                                                   defaultValue={item.description}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>

                                    <div style={{paddingLeft:"40px"}}>
                                        <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"91.5%"}}
                                                   id="outlined-helperText"
                                                   label="Qualification"
                                                   // disabled
                                                   defaultValue={item.qualification}
                                        />
                                    </div>



                                </Grid>

                                        {/*the end*/}
                                {/*<Grid item xs={12}>*/}

                                {/*        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>*/}
                                {/*            <Item><div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>NVQ Level 1</div></Item>*/}
                                {/*            <Item><div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>2 years Experience</div></Item>*/}
                                {/*           <Item> <div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>NVQ Level 1</div></Item>*/}

                                {/*        </div>*/}

                                {/*</Grid>*/}
                                {/*<Grid item xs={12}>*/}
                                {/*    <div style={{backgroundColor:"lightgrey",borderRadius:"10px"}}>*/}
                                {/*        <Box component="fieldset" mb={3} borderColor="transparent">*/}
                                {/*            <Typography component="legend"><h3>Anjana Thilakawardana</h3>2022 - 08 - 12,Good Aguncy, Good service</Typography>*/}
                                {/*            <Rating*/}
                                {/*                name="simple-controlled"*/}
                                {/*                value={value}*/}
                                {/*                onChange={(event, newValue) => {*/}
                                {/*                    setValue(newValue);*/}
                                {/*                }}*/}
                                {/*            />*/}
                                {/*        </Box>*/}
                                {/*    </div>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12}>*/}

                                {/*    <div style={{backgroundColor:"lightgrey",borderRadius:"10px",marginTop:"2px"}}>*/}
                                {/*        <Box component="fieldset" mb={3} borderColor="transparent">*/}
                                {/*            <Typography component="legend"><h3>Amila Gnarathne</h3>2023 - 08 - 2,Good Aguncy, Good service</Typography>*/}
                                {/*            <Rating*/}
                                {/*                name="simple-controlled"*/}
                                {/*                value={value}*/}
                                {/*                onChange={(event, newValue) => {*/}
                                {/*                    setValue(newValue);*/}
                                {/*                }}*/}
                                {/*            />*/}
                                {/*        </Box>*/}
                                {/*    </div>*/}

                                {/*</Grid>*/}

                            </Grid>

                                );
                            } )}
                        </Grid>
                    </Grid>
                    {/*<Grid item xs={4}>*/}
                    {/*    <Grid container spacing={2}>*/}
                    {/*        <Grid item xs={12} >*/}

                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} style={{marginLeft:"5%",marginBottom:"10px"}}>*/}
                    {/*            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ECD2F2",borderRadius:"10px"}}>*/}
                    {/*                <div><h3>Upcoming All Task 24</h3></div>*/}

                    {/*            </div>*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} style={{marginLeft:"5%",marginBottom:"10px"}}>*/}
                    {/*            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ECD2F2",borderRadius:"10px"}}>*/}
                    {/*                <div><h3>Daily Task 1</h3></div>*/}

                    {/*            </div>*/}
                    {/*        </Grid>*/}

                    {/*        <Grid item xs={12} style={{marginLeft:"5%"}}>*/}

                    {/*            <div>*/}
                    {/*                <Accordion>*/}
                    {/*                    <AccordionSummary*/}
                    {/*                        expandIcon={<ExpandMoreIcon />}*/}
                    {/*                        aria-controls="panel1a-content"*/}
                    {/*                        id="panel1a-header"*/}
                    {/*                        style={{backgroundColor:"#ECD2F2"}}*/}
                    {/*                    >*/}
                    {/*                        <Typography><h4>FrockMe Textile</h4></Typography>*/}
                    {/*                    </AccordionSummary>*/}
                    {/*                    <AccordionDetails>*/}
                    {/*                        <div style={{display:"flex",flexDirection:"column"}}>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                    {/*                                Date:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                    {/*                                2022 july 23*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                    {/*                                Time:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                    {/*                                9.00 am*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                    {/*                                Venue:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                    {/*                                FrockMe, No 133/02/01*/}
                    {/*                                Highlevel Road*/}
                    {/*                                Kirulapana.*/}
                    {/*                            </Grid>*/}
                    {/*                        </div>*/}
                    {/*                    </AccordionDetails>*/}
                    {/*                </Accordion>*/}


                    {/*            </div>*/}


                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerProfile;
