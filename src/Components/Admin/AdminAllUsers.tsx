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
  name: string,
  userType: string,
  reg: string,
  city: string,
  email: string,
) {
  return { status, name, userType, reg, city, email };
}

const rows = [
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'Udesh Lakshan', 'Job Seeker', '07/08/2022', 'Matara', 'lak98@gmail.com'),
  createData('FREE', 'Rashmika Malshan', 'Job Seeker', '13/08/2022', 'Colombo', 'rm97@gmail.com'),
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'Shalani Hansika', 'Manpower agency', '22/08/2022', 'Kandy', 'shala.hans89@gmail.com'),
  createData(<LocalPoliceIcon sx={{color: '#7A3293', fontSize: '35px'}} />, 'Lakshitha Shehan', 'Job Provider', '11/08/2022', 'Galle', 'shehanLak@gmail.com'),
  createData('FREE', 'Chavinda Perera', 'Job Provider', '09/08/2022', 'Jaffna', 'chaviPP@gmail.com'),
];

export default function AdminAllUsers() {
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

  // Delete button popup
  const deleteButton = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
      }
    })
  }
  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='center'>
        Manage Users
      </Typography>
      <Button onClick={addNewUser} sx={{backgroundColor: '#7A3293', float: 'left', margin: '5px 5px 5px 0px', padding: '10px 50px'}} variant="contained"  >Add New User</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">User Type</StyledTableCell>
              <StyledTableCell align="center">Registered Date</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.userType}</StyledTableCell>
                <StyledTableCell align="center">{row.reg}</StyledTableCell>
                <StyledTableCell align="center">{row.city}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="right"><Button sx={{backgroundColor: '#1976d2'}} variant="contained">&nbsp;View&nbsp;</Button></StyledTableCell>
                <StyledTableCell align="right"><Button sx={{backgroundColor: '#7A3293'}} variant="contained">Update</Button></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={deleteButton} sx={{backgroundColor: '#d32f2f'}} variant="contained">Delete</Button></StyledTableCell>
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

