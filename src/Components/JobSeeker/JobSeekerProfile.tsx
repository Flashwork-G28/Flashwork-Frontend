import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BlueMarket from '../../Assets/JobSeeker/BlueMarket.png'
import FrockMe from '../../Assets/JobSeeker/FrockMe.png'
import profile from '../../Assets/JobSeeker/profile.png'
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
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import star from '../../Assets/JobSeeker/star.png';
import MenuItem from "@mui/material/MenuItem";

import Menu from "@material-ui/core/Menu";





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

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
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
                               <div style={{width:"170px",height:"110px",backgroundColor:"lightgray",paddingTop:"10px",borderRadius:"5px"}}>
                                   <CreditScoreIcon />
                                   <div style={{color:"#46225F",fontWeight:"bold"}}>Payment</div>
                                   <p>xxxxxxxx</p>
                               </div>
                               <div style={{width:"170px",height:"110px",backgroundColor:"lightgray",paddingTop:"10px",borderRadius:"5px"}}>
                                   <CalendarMonthIcon />
                                   <div style={{color:"#46225F",fontWeight:"bold"}}>Date</div>
                                   <p>09/09/2022</p>
                               </div>

                           </div>
                       </div>
                        </Grid>
                        <Grid item xs={12}>
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
                                                                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                                            <MenuItem onClick={handleClose}>Deactivate</MenuItem>

                                                                        </MenuList>
                                                                    </ClickAwayListener>
                                                                </Paper>
                                                            </Grow>
                                                        )}
                                                    </Popper>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>


                                                    <form noValidate autoComplete="off">
                                                        <div style={{display:"flex",flexDirection:"row",marginRight:"5px"}}>
                                                            <TextField   id="outlined-basic" label="First Name" variant="outlined" />
                                                            <TextField style={{paddingLeft:"10px",paddingBottom:"10px"}} id="outlined-basic" label="Last Name" variant="outlined" />
                                                        </div>
                                                        <TextField   style={{display:"flex",justifyContent:"flex-start",paddingBottom:"10px",width:"94.5%"}} id="outlined-basic" label="Email Address" variant="outlined" />
                                                        <div style={{display:"flex",flexDirection:"row",marginRight:"5px"}}>
                                                            <TextField   id="outlined-basic" label="Location" variant="outlined" />
                                                            <TextField style={{paddingLeft:"10px",paddingBottom:"10px"}} id="outlined-basic" label="Mobile" variant="outlined" />
                                                        </div>


                                                    </form>


                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>

                                        <TextField   style={{display:"flex",justifyContent:"flex-start",paddingBottom:"10px",width:"95%",marginLeft:"1.5%"}} id="outlined-basic" label="Description" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>

                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl style={{width:"95%",paddingRight:"2%"}}>
                                                <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Qualification"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Qualification 1</MenuItem>
                                                    <MenuItem value={20}>Qualification 2</MenuItem>
                                                    <MenuItem value={30}>Qualification 3</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                </Grid>
                                <Grid item xs={12}>

                                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                                            <div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>NVQ Level 1</div>
                                            <div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>2 years Experience</div>
                                            <div style={{width:"150px",height:"35px",backgroundColor:"lightgray",fontWeight:"bold",paddingTop:"10px",borderRadius:"5px"}}>NVQ Level 1</div>

                                        </div>

                                </Grid>
                                <Grid item xs={12}>

                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <div style={{paddingLeft:"10px"}}><h3>Review 05</h3></div>
                                            <div style={{paddingLeft:"550px"}}> <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <p>4.5</p>
                                        </div>



                                </Grid>
                                <Grid item xs={12}>

                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <div style={{paddingLeft:"10px"}}>
                                                <div>Anjana Thilakawardana</div>
                                                <div>2022-08-12</div>
                                                <div>Good Aguncy, Good service</div>
                                            </div>
                                            <div style={{paddingLeft:"400px"}}> <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <div> <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                            <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        </div>

                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div style={{paddingLeft:"10px"}}>
                                            <div>Anjana Thilakawardana</div>
                                            <div>2022-08-12</div>
                                            <div>Good Aguncy, Good service</div>
                                        </div>
                                        <div style={{paddingLeft:"400px"}}> <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        <div> <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                        <div > <img src={star} alt={star} width={"20px"} height={"20px"} /></div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >

                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"lightgrey",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                    <div><h3>Upcoming All Task 24</h3></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"lightgrey",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                    <div><h3>Daily Task 2</h3></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>

                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div><h4>BlueMarket Privet Limited</h4></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div><h4>FrockMe Textile</h4></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%",display:"flex",flexDirection:"column"}}>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Date:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    2022 july 23
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Time:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    9.00 am
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Venue:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    FrockMe, No 133/02/01
                                    Highlevel Road
                                    Kirulapana.
                                </Grid>




                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerProfile;
