import * as React from 'react';
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
  complainedID: string,
  senderName: string,
  userType: string,
  complainedDate: string,
  reason: string,
  senderEmail: string,
) {
  return { complainedID, senderName, userType, complainedDate, reason, senderEmail };
}

const rows = [
  createData('js008', 'Nimal Hettiarachi', 'Job Seeker', '07/08/2022', 'Bad work', 'lak98@gmail.com'),
  createData('mp016', 'Rashmika Malshan', 'Job Seeker', '13/08/2022', 'Seems to be a fraud', 'rm97@gmail.com'),
  createData('js013', 'Pasindu Sandaruwan', 'Manpower agency', '22/08/2022', 'Thief...', 'shala.hans89@gmail.com'),
  createData('jp076', 'Shalanai Tharuka', 'Job Provider', '11/08/2022', 'Bad working experience..', 'shehanLak@gmail.com'),
  createData('mp002', 'Chavinda Perera', 'Job Provider', '09/08/2022', 'Fake account....', 'chaviPP@gmail.com'),
];

export default function AdminUserRequest() {
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
  const declineButton = () => {
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
          'Declined!',
          'Complaint declined',
          'error'
        )
      }
    })
  }

  // Resolve button popup
  const resolveButton = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Complaint has been resolved',
        showConfirmButton: false,
        timer: 1500
      })
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
        User Requests / Complaints
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Complained ID</StyledTableCell>
              <StyledTableCell align="center">Sender's Name</StyledTableCell>
              <StyledTableCell align="center">User Type</StyledTableCell>
              <StyledTableCell align="center">Complained Date</StyledTableCell>
              <StyledTableCell align="center">Reason</StyledTableCell>
              <StyledTableCell align="center">Sender's email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.senderName}>
                <StyledTableCell align="left">{row.complainedID}</StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.senderName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.userType}</StyledTableCell>
                <StyledTableCell align="center">{row.complainedDate}</StyledTableCell>
                <StyledTableCell align="center">{row.reason}</StyledTableCell>
                <StyledTableCell align="center">{row.senderEmail}</StyledTableCell>
                <StyledTableCell align="right"><Button onClick={resolveButton} sx={{backgroundColor: '#7A3293'}} variant="contained">Resolve</Button></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={declineButton} sx={{backgroundColor: '#d32f2f'}} variant="contained">Decline</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
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

