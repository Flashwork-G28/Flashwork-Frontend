import React, {useEffect} from 'react';
import JobProviderProfileContent from "./JobProviderComponents/JobProviderProfileContent";
import JobProviderProMember from "./JobProviderComponents/JobProviderProMember";
import JobProviderProfileDetails from "./JobProviderComponents/JobProviderProfileDetails";



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
import axios from "axios";


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




export const data = [
    ["x", "Manpower Agency", "Job Seeker"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
];


export const options = {
    hAxis: {
        title: "Time",
    },
    vAxis: {
        title: "Popularity",
    },
    series: {
        1: { curveType: "function" },
    },
};


const JobProfile = () => {

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
    const [jobProviderProfile, setJobProviderProfileDetails] = React.useState<any>([]);

    useEffect(() => {

        axios.get("http://localhost:8000/JobSeeker/jobProviderProfile").then((response: { data: any; }) => {
            alert("gg")

            const det = response.data;

            det.map((item: any) => {

                setJobProviderProfileDetails((prevState: any) => [...prevState, {
                    conpanyName: item.conpanyName,
                    email: item.email,
                    location: item.city,
                    mobile: item.mobile,
                    description: item.description,

                }])
                return null;
            });
        })
    }, []);



    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={8}>
                        <Grid item xs={12}>
                            <div style={{display:"flex",flexDirection:"column",paddingTop:"20px"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",borderRadius:"5px"}} >
                                    <div style={{color:"#46225F"}}><h3>Membership Details</h3></div>

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

                                                    {jobProviderProfile.map((item:any) => {
                                                        return (
                                                    <form noValidate autoComplete="off">

                                                        <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"87%"}}
                                                                   id="outlined-helperText"
                                                                   label="conpany_name"
                                                                   disabled
                                                                   defaultValue={item.conpanyName}
                                                        />

                                                        <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"87%"}}
                                                                   id="outlined-helperText"
                                                                   label="Email"
                                                                   disabled
                                                                   defaultValue={item.email}
                                                        />
                                                        <div style={{display:"flex",flexDirection:"row",marginRight:"5px",paddingBottom:"20px"}}>

                                                            <div style={{paddingRight:"30px"}}>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Location"
                                                                    disabled
                                                                    defaultValue={item.location}
                                                                />
                                                            </div>

                                                            <div >
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Mobile"
                                                                    disabled
                                                                    defaultValue={item.mobile}
                                                                />
                                                            </div>
                                                        </div>

                                                        <Grid item xs={12}>
                                                            <div >
                                                                <TextField style={{display:"flex", justifyContent:"start",paddingBottom:"20px",width:"91.5%"}}
                                                                           id="outlined-helperText"
                                                                           label="Description"
                                                                           disabled
                                                                    defaultValue={item.description}
                                                                />
                                                            </div>
                                                        </Grid>
                                                    </form>

                                                        );
                                                    })}
                                                </Grid>

                                            </Grid>
                                        </Grid>






                                    </Grid>



                                </Grid>

                    </Grid>

                    <Grid item xs={4}>
                       <Item>
                       </Item>
                    </Grid>

                </Grid>

            </Box>
        </div>
    );
};

export default JobProfile;
