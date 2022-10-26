import * as React from 'react';
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
// import AdminPopupProfile from "../../Components/Admin/AdminPopupProfile";
import AdminSearchUsers from "./AdminSearchUsers";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

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
  compID: string,
  suspectID: string,
  complainedDate: string,
  reason: string,
  senderEmail: string,
) {
  return { compID, suspectID, complainedDate, reason, senderEmail };
}

const rows = [
  createData('comp001', 'js006', '07/08/2022', 'Bad work', 'lak98@gmail.com'),
  createData('comp002', 'js054', '13/08/2022', 'Seems to be a fraud', 'rm97@gmail.com'),
  createData('comp003', 'mp017', '22/08/2022', 'Thief...', 'shala.hans89@gmail.com'),
  createData('comp004', 'jp047', '11/08/2022', 'Bad working experience..', 'shehanLak@gmail.com'),
  createData('comp005', 'jp066', '09/08/2022', 'Fake account....', 'chaviPP@gmail.com'),
];

export default function AdminUserRequest() {
  const [details, setDetails] = useState<any>([]);

    const viewCompl = () => {
        axios.get('http://localhost:8000/complaints/ViewCompl').then((response) => {
            const det = response.data;
            // console.log(user_id);
            det.map((item: any) => {
                setDetails((prevState: any) => [...prevState, {
                  id: item.id,
                  email: item.email,
                  date: item.date,
                  reason: item.reason,
                  rating: item.rating,
                }])
                return null;
            });
        }).catch(function (error) {
            if (error.response) {
                // setAlertPara("Something went wrong when creating the user!");
                // setVariant("danger");
                // setShow(true);
            }
        })
    }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Add new user popup
  const addNewUser = async () => {
    const { value: text } = await Swal.fire({
      input: 'text',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }
  }

  // Decline button popup
  const declineButton = (id: any) => {
    axios.delete("http://localhost:8000/complaints/DeleteCompl/"+id)
    
      .then(function (response) {
        console.log(response);
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
                'Resolved!',
                'Complaint has been resolved.',
                'success'
              )
            }
          })
        })
        // window.location.reload();
      .catch(function (error) {
        console.log(error);
      });
  }

  // Resolve button popup
  const resolveButton = (id: any) => {
    // console.log(id);
      axios.delete("http://localhost:8000/complaints/DeleteCompl/"+id)
    
      .then(function (response) {
        console.log(response);
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
                'Resolved!',
                'Complaint has been resolved.',
                'success'
              )
            }
          })
        })
        // window.location.reload();
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    viewCompl();
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
        User Requests / Complaints
      </Typography>

      <TableContainer component={Paper} sx={{borderRadius: '20px 20px 0px 0px', maxHeight: '60vh', overflow: 'scroll', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Complaint ID</StyledTableCell>
              <StyledTableCell align="left">Complainer email</StyledTableCell>
              {/* <StyledTableCell align="left">Suspected User ID</StyledTableCell> */}
              <StyledTableCell align="left">Complained Date</StyledTableCell>
              <StyledTableCell align="left">Reason</StyledTableCell>
              <StyledTableCell align="center">Complaint Weight</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          {details.map((item: any) => {
            return (
              <TableBody>
                  <StyledTableRow key={item.id}>
                    <StyledTableCell align="left">{item.id}</StyledTableCell>
                    <StyledTableCell align="left">{item.email}</StyledTableCell>
                    {/* <StyledTableCell align="left">{item.suspectID}</StyledTableCell> */}
                    <StyledTableCell align="left">{item.date}</StyledTableCell>
                    <StyledTableCell align="left">{item.reason}</StyledTableCell>
                    <StyledTableCell align="center">{item.rating}</StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={() => resolveButton(item.id)} sx={{backgroundColor: '#7A3293'}} variant="contained">Resolve</Button></StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={() => declineButton(item.id)} sx={{backgroundColor: '#d32f2f'}} variant="contained">Decline</Button></StyledTableCell>
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

