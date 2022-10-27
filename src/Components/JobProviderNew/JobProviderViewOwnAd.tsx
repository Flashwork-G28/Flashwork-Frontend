import { Button, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import JobProviderPostAd from './JobProviderPostAd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {styled} from "@mui/material/styles";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { red } from '@mui/material/colors';


export default function JobProviderViewOwnAd() {
    // const {user} = useAuth0();
    // let user_id:any = user?.sub;
    // user_id = user_id.substring(6);

    // localStorage.setItem('userID', user_id);
    // const [userid, setuserid] = useState(localStorage.getItem('userID'));

    // setuserid(userid);

    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        // toggle shown state
        setIsShown(current => !current);
        // or simply set it to true
        // setIsShown(true);
    };

    const [details, setDetails] = useState<any>([]);

    const viewJobs = () => {
        axios.get('http://localhost:8000/jobs/JobAdView', {params:{user_id: '631313df003454364c278fee'}}).then((response) => {
            const det = response.data;
            // console.log(user_id);
            det.map((item: any) => {
                // const date1:any = new Date();
                // const date2:any = new Date(item.pub_date);
                // const diffTime = Math.abs(date2 - date1);
                // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                setDetails((prevState: any) => [...prevState, {
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    city: item.city,
                    pub_date: item.pub_date,
                    job_date: item.job_date,
                    category: item.category,
                    apply_type: item.apply_type,
                    description: item.description,
                    rmc: item.rmc,
                    amc: item.amc,
                    pay: item.pay,
                    status: item.status,
                    // pub_date: diffDays,
                }])
                // return null;
            });
        }).catch(function (error) {
            if (error.response) {
                // setAlertPara("Something went wrong when creating the user!");
                // setVariant("danger");
                // setShow(true);
            }
        })
    }

    const deletePost = (id: any) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'btn btn-success',
        confirmButtonText: 'Confirm',
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete('http://localhost:8000/jobs/DeleteJobs', {params: {user_id: '631313df003454364c278fee', id: id}}).then((response) => {
            console.log(response);
            console.log(response.data);
            setDetails(
                details.filter((details: { id: any; }) => {
                    return details.id !== id;
                })
            );
            Swal.fire(
                    'Deleted!',
                    'Advertisement has been deleted',
                    'success'
                )
            }).catch(function (error) {
                if (error.response) {
                    console.log(error);
                }
            })
        }
    })
    
   };

    function createData(
        title: string,
        city: string,
        category: string,
        description: string,
        // protein: string,
    ) {
        return { title, city, category, description };
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: 'purple',
          color: theme.palette.common.white,
          font: '16px bold',
          padding: '16px 30px',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: '14px',
          padding: '10px 30px',
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        borderBottom: '1px solid #ede7f6',
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    

    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (id: any) => {
        setDetails(
            details.filter((details: { id: any; }) => {
                return details.id === id;
            })
        );
        console.log(id);
        console.log(details.title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        viewJobs();
        window.location.reload();
    };

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="left" ref={ref} {...props} />;
    });


    useEffect(() => {
        viewJobs();
    }, []);
    // if (!details) return null;

  return (
    
    <div>
        <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h5" component="h5" fontWeight='700' color='black' padding={3} textAlign='left'>
            Job Advertisements
        </Typography><br />
        <Grid container spacing={2} sx={{padding: '10px 20px 40px 20px'}}>
            <Grid item xs={12}>
                <Button variant='contained' onClick={handleClick} sx={{padding: '10px 30px 10px 30px', fontSize: '14px', display: 'flex', borderRadius: '20px'}}>
                    New Advertisement &nbsp; &nbsp;
                    <ArrowDropDownCircleIcon />
                </Button>
                {/* show elements on click */}
                {isShown && (
                    <div>
                        <Typography variant="h5" component="h5" fontWeight='700' color='primary' marginTop={4} textAlign='left'>
                            Post A New Advertisement
                        </Typography> <br />
                    </div>
                )}

                {/* show component on click */}
                {isShown && <JobProviderPostAd />}
            </Grid>
            <Grid item xs={12}>
                {/* {details.map((val, key) => {
                    return (
                        <h6 >{val}</h6>
                        // <h6 >{val}</h6>
                    );
                })} */}
                {/* <p>{JSON.stringify(details, null, 4)}</p> */}
                
                <TableContainer component={Grid} sx={{borderRadius: '20px', maxHeight: '40vh', overflow: 'scroll', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">City</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Published Date</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                        </TableHead>
                        {details.map((item: any) => {
                            if(item.category==1) {
                                item.category='Restaurant & Food Services'
                            }
                            if(item.category==2) {
                                item.category='Transportation & Delivery'
                            }
                            if(item.category==3) {
                                item.category='Retail & Production'
                            }
                            if(item.category==4) {
                                item.category='Office Work & Administration'
                            }
                            if(item.category==5) {
                                item.category='General Services'
                            }

                            if(item.apply_type==0) {
                                item.apply_type='Both (Job Seeker/Manpower)'
                            }
                            if(item.apply_type==1) {
                                item.apply_type='Manpower Agency'
                            }
                            if(item.apply_type==2) {
                                item.apply_type='Job Seeker'
                            }
                            return (
                                <TableBody>
                                    <StyledTableRow
                                        key={item.id}
                                    >
                                    <StyledTableCell
                                        component="th" scope="row" align='left'>{item.title}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left">{item.city}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left"> {item.category}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left"> {item.pub_date}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{maxWidth: '200px', overflowWrap: 'break-word'}}
                                        align="left">{item.description}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{maxWidth: '200px'}}
                                        align="left">
                                        <div style={{display: 'flex'}}>
                                            <Button onClick={() => handleClickOpen(item.id)}>
                                                <VisibilityIcon />
                                            </Button>
                                            <Button onClick={() => deletePost(item.id)}>
                                                <DeleteIcon color='error'/>
                                            </Button>

                                            <Dialog
                                                fullScreen={fullScreen}
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="responsive-dialog-title"
                                                TransitionComponent={Transition}
                                                sx={{backdropFilter: "blur(30px)", borderRadius: "15px"}}
                                            >
                                                <DialogTitle id="responsive-dialog-title" align='center' sx={{backgroundColor: "#ce93d8", padding:"20px 10px", fontWeight: "bold"}}>
                                                {"Advertisement Details"}
                                                </DialogTitle>
                                                <DialogContent>
                                                <DialogContentText>
                                                    <Grid container spacing={0} sx={{color: "grey", fontWeight: "normal", padding: "10px"}}>
                                                        <Grid item xs={8} textAlign={'left'} color={'purple'}><h1>{item.title}</h1></Grid>
                                                        <Grid item xs={4} textAlign={'right'} color={'red'}><h1>Rs. {item.pay}</h1></Grid>

                                                        <Grid item xs={4} textAlign={'left'} sx={{marginTop: "15px"}}>{item.city}</Grid>
                                                        <Grid item xs={4} textAlign={'center'} sx={{marginTop: "15px"}}>{item.category}</Grid>
                                                        <Grid item xs={4} textAlign={'right'} sx={{marginTop: "15px"}}>{item.pub_date}</Grid>

                                                        <Grid item xs={6} textAlign={'left'} sx={{marginTop: "70px", fontWeight: "bolder"}}></Grid>
                                                        <Grid item xs={3} textAlign={'center'} sx={{marginTop: "70px", fontWeight: "bolder"}}>Required Members</Grid>
                                                        <Grid item xs={3} textAlign={'right'} sx={{marginTop: "70px", fontWeight: "bolder"}}>Available Members</Grid>

                                                        <Grid item xs={6} textAlign={'left'} sx={{marginTop: "15px", fontWeight: "bolder"}}>{item.apply_type}</Grid>
                                                        <Grid item xs={3} textAlign={'center'} sx={{marginTop: "15px", fontWeight: "bolder", fontSize: "22px"}}>{item.rmc}</Grid>
                                                        <Grid item xs={3} textAlign={'right'} sx={{marginTop: "15px", fontWeight: "bolder", fontSize: "22px"}}>{item.amc}</Grid>

                                                        <Grid item xs={3} textAlign={'left'} sx={{marginTop: "70px", fontWeight: "bolder"}}>Job Date:</Grid>
                                                        <Grid item xs={9} textAlign={'right'} sx={{marginTop: "70px"}}>{item.job_date}</Grid>

                                                        <Grid item xs={12} textAlign={'left'} sx={{marginTop: "70px", padding: "30px", boxShadow: '1px 2px 9px grey'}}>{item.description}</Grid>                                                                            
                                                    </Grid>
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button autoFocus onClick={handleClose} sx={{fontSize: "16px", padding: "10px 20px"}}>
                                                    Okay
                                                </Button>
                                                </DialogActions>
                                            </Dialog>

                                        </div>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )
                        })}
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </div>
  )
}
