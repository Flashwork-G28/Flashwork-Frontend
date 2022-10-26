import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AdminPopupProfile from "./AdminPopupProfile";
import AdminSearchUsers from "./AdminSearchUsers";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, ListItemSecondaryAction, Rating, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4E2363',
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    
  },
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

function createData(
  status: any,
  userID: string,
  name: string,
  userType: string,
  reg: string,
  city: string,
  email: string,
) {
  return { status, userID, name, userType, reg, city, email };
}

const rows = [
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'js004', 'Udesh Lakshan', 'Job Seeker', '07/08/2022', 'Matara', 'lak98@gmail.com'),
  createData('FREE', 'js017', 'Rashmika Malshan', 'Job Seeker', '13/08/2022', 'Colombo', 'rm97@gmail.com'),
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'mp056', 'Shalani Hansika', 'Manpower agency', '22/08/2022', 'Kandy', 'shala.hans89@gmail.com'),
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'jp008', 'Lakshitha Shehan', 'Job Provider', '11/08/2022', 'Galle', 'shehanLak@gmail.com'),
  createData('FREE', 'jp024', 'Chavinda Perera', 'Job Provider', '09/08/2022', 'Jaffna', 'chaviPP@gmail.com'),
];

export default function AdminAllUsers() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
 
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Get all users
  const [details, setDetails] = useState<any>([]);

    const viewUsers = () => {
        axios.get('http://localhost:8000/users/').then((response) => {
            const det = response.data;
            // console.log(user_id);
            det.map((item: any) => {
                // const date1:any = new Date();
                // const date2:any = new Date(item.pub_date);
                // const diffTime = Math.abs(date2 - date1);
                // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                setDetails((prevState: any) => [...prevState, {
                    user_id: item.user_id,
                    img: item.img,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    nid: item.nid,
                    street: item.street,
                    city: item.city,
                    mobile: item.mobile,
                    email: item.email,
                    type: item.type,
                    status: item.status,
                }])
                
            });
        }).catch(function (error) {
            if (error.response) {
                // setAlertPara("Something went wrong when creating the user!");
                // setVariant("danger");
                // setShow(true);
            }
        })
    }

  // Delete button popup
  const deleteButton = (status : any, user_id: any) => {
    axios.put('http://localhost:8000/users/updateStatus', {
      user_id: user_id,
      status: status,
    })
    .then(function (response) {
      console.log(response);
      if(status == '0' || status == false) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: 'btn btn-success',
          confirmButtonText: 'Confirm'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deactivated!',
              'User has been successfully deactivated.',
              'success',
            ).then((result) => {
              window.location.reload();
            })
          }
        })
      }
      else {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: 'btn btn-success',
          confirmButtonText: 'Confirm'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Activated!',
              'User has been successfully activated.',
              'success'
            ).then((result) => {
              window.location.reload();
            })
          }
        })
      }
      // window.location.reload();
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (user_id: any) => {
        setDetails(
            details.filter((details: { user_id: any; }) => {
                return details.user_id === user_id;
            })
        );
        console.log(user_id);
        console.log(details.first_name);
        setOpen(true);
    };

    const setButtonStatus =(status : boolean, userId: any)=>{
     
      const newDetails = details.map((user: any) => {
        if (user.user_id === userId)
          user.status=status;
          return user;
        
      });
      console.log(newDetails);
      setDetails(newDetails);

    };

    const handleClose = () => {
        setOpen(false);
        // viewUsers();
        window.location.reload();
    }; 

    

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="left" ref={ref} {...props} />;
    }
  );

  useEffect(() => {
    viewUsers();
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
        Manage Users
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
          <Grid item xs={5} alignItems='center'></Grid>
          <Grid item xs={7} alignItems='center'>
            <AdminSearchUsers />
          </Grid>
      </Grid>

      <TableContainer component={Grid} sx={{borderRadius: '20px 20px 0px 0px', maxHeight: '50vh', overflow: 'scroll', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell align="center">Status</StyledTableCell> */}
              {/* <StyledTableCell align="center">ID</StyledTableCell> */}
              <StyledTableCell align="left">Profile Picture</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">User Type</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          {details.map((item: any) => {          
            return (
          <TableBody>
              <StyledTableRow key={item.first_name}>
                {/* <StyledTableCell align="center">{item.status}</StyledTableCell> */}
                {/* <StyledTableCell align="center">{item.user_id}</StyledTableCell> */}
                <StyledTableCell align="left"><img style={{borderRadius: "50%", width: "50px", height: "50px"}} src={item.img} alt='profile_pic' /></StyledTableCell>
                <StyledTableCell component="th" scope="row" align="left">
                  {item.first_name} {item.last_name}
                </StyledTableCell>
                <StyledTableCell align="left">{item.type}</StyledTableCell>
                <StyledTableCell align="left">{item.city}</StyledTableCell>
                <StyledTableCell align="left">{item.email}</StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => handleClickOpen(item.user_id)} sx={{backgroundColor: '#7A3293'}} variant="contained">&nbsp;View&nbsp;</Button></StyledTableCell>
                {/* <StyledTableCell align="right"><Button onClick={()=> setButtonStatus(!item.status,item.user_id)} sx={{backgroundColor: item.status ? 'red' : 'green', }} variant="contained">{item.status ? "Deactivate" : "Activate"}</Button></StyledTableCell> */}
                <StyledTableCell align="right"><Button onClick={()=> deleteButton(!item.status,item.user_id)} sx={{backgroundColor: item.status ? 'red' : 'green', }} variant="contained">{item.status ? "Deactivate" : "Activate"}</Button></StyledTableCell>
                
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    TransitionComponent={Transition}
                    sx={{backdropFilter: "blur(30px)", borderRadius: "15px"}}
                >
                <DialogTitle id="responsive-dialog-title" align='center' sx={{backgroundColor: "#ce93d8", padding:"20px 10px", fontWeight: "bold"}}>
                {"User Details"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                  
                    {/* <Grid container sx={{backgroundImage: 'linear-gradient(white, white, #e1bee7, #7A3293)', borderRadius: '0% 0% 10% 10%', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)'}}> */}
                    <Grid container sx={{borderRadius: '0px 0px 20px 20px', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)', padding: '10px 30px'}}>
                        <Grid padding="20px" item xs={12}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><img style={{borderRadius: "50%", width: "150px", height: "150px"}} src={item.img} alt='profile_pic' /></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{overflowWrap: 'break-word', textAlign: 'center'}} variant="h4" component="h4" color="primary">
                              {item.first_name} {item.last_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{overflowWrap: 'break-word', padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}} component="legend" color="#9e9e9e">
                              {item.city} &nbsp;&nbsp;|&nbsp;&nbsp; {item.type}
                            </Typography>
                        </Grid>
                        {/* <Grid padding= '10px 0px' item xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'right', paddingRight: '6px'}}>
                            <PhoneIcon />
                        </Grid>
                        <Grid padding= '10px 0px' item xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '6px'}}>
                            <MailIcon />
                        </Grid> */}
                        <Grid xs={12}>
                            <Rating name="read-only" value={3} sx={{overflowWrap: 'break-word', padding: '15px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}} readOnly/>
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                            <Typography sx={{overflowWrap: 'break-word', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}} padding="40px 0px">
                              <PhoneIcon/> {item.mobile} &nbsp;&nbsp;|&nbsp;&nbsp; <EmailIcon/> {item.email}
                            </Typography>
                            </div>
                        </Grid>
                        </Grid>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} sx={{fontSize: "16px", padding: "10px 20px"}}>
                    Okay
                </Button>
                </DialogActions>
                </Dialog>

              </StyledTableRow>
          </TableBody>
          )
        })}
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

