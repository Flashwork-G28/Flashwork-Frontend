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
import PendingIcon from '@mui/icons-material/Pending';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import UserChat from './UserChat';
import axios from 'axios';
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
  id: string,
  name: string,
  userType: string,
  recDate: string,
  validUntil: string,
  city: string,
  email: string,
  amount: string,
) {
  return { id, name, userType, recDate, validUntil, city, email, amount };
}

const rows = [
  createData('js003', 'Udesh Lakshan', 'Job Seeker', '07/08/2022', '07/09/2022', 'Matara', 'lak98@gmail.com', '1000'),
  createData('js007', 'Rashmika Malshan', 'Job Seeker', '13/08/2022', '13/09/2022', 'Colombo', 'rm97@gmail.com', '1000'),
  createData('mp004', 'Shalani Hansika', 'Manpower agency', '22/08/2022', '22/09/2022', 'Kandy', 'shala.hans89@gmail.com', '5000'),
  createData('jp016', 'Lakshitha Shehan', 'Job Provider', '11/08/2022', '11/09/2022', 'Galle', 'shehanLak@gmail.com', '1000'),
  createData('jp002', 'Chavinda Perera', 'Job Provider', '09/08/2022', '09/09/2022', 'Jaffna', 'chaviPP@gmail.com', '1000'),
  createData('js023', 'Hashan Kure', 'Job Seeker', '18/08/2022', '18/09/2022', 'Kandy', 'hasshKK@gmail.com', '1000'),
];

export default function AdminPayment() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [details, setDetails] = useState<any>([]);

  const viewPay = () => {
      axios.get('http://localhost:8000/payments/ViewPay').then((response) => {
          const det = response.data;
          // console.log(user_id);
          det.map((item: any) => {
              setDetails((prevState: any) => [...prevState, {
                id: item.id,
                user_id: item.user_id,
                price: item.price,
                start_date: item.start_date,
                end_date: item.end_date,
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

  useEffect(() => {
    viewPay();
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      {/* <UserChat /> */}
      <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
        Payments
      </Typography> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">PaymentID</StyledTableCell>
              <StyledTableCell align="left">UserID</StyledTableCell>
              <StyledTableCell align="center">Payment(Rs.)</StyledTableCell>
              <StyledTableCell align="left">Recieved Date</StyledTableCell>
              <StyledTableCell align="left">Valid Until</StyledTableCell>
              {/* <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="right">Amount (Rs.)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          {details.map((item: any) => {
            return (
          <TableBody>
              <StyledTableRow key={item.id}>
                <StyledTableCell align="center">{item.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row" align="left">
                  {item.user_id}
                </StyledTableCell>
                <StyledTableCell align="center">{item.price}</StyledTableCell>
                <StyledTableCell align="left">{item.start_date}</StyledTableCell>
                <StyledTableCell align="left">{item.end_date}</StyledTableCell>
                {/* <StyledTableCell align="center">{row.city}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell> */}
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

