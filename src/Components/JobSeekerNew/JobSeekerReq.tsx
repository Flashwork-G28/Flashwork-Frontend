import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import OthersProfile from './OthersProfile';
import { Grid } from '@mui/material';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4E2363',
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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
          'User request has been declined.',
          'success'
        )
      }
    })
}

// Accept button popup
const acceptButton = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Request has been accepted!',
        showConfirmButton: false,
        timer: 1500
    })
}

interface Column {
    id: 'user' | 'userType' | 'category' | 'date' | 'city';
    label: string;
    align?: 'center';
    // minWidth?: number;
    // format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'user', label: 'User Name'},
    {id: 'userType', label: 'User Type'},
    {id: 'category', label: 'Job Category'},
    {id: 'date', label: 'Requested Date'},
    {id: 'city', label: 'City'},
];

interface Data {
    user: string,
    userType: string,
    category: string,
    date: string,
    city: string,
}

function createData(
    user: string,
    userType: string,
    category: string,
    date: string,
    city: string,
) {
    return {user, userType, category, date, city};
}

const rows = [
    createData('Udesh', 'Job Provider', 'Carpentery', '09-98-2022', 'Kandy'),
    createData('Udesh', 'Job Provider', 'Carpentery', '08/09/2022', 'Kandy'),
    createData('Udesh', 'Job Provider', 'Carpentery', '08/09/2022', 'Kandy'),
    createData('Udesh', 'Job Provider', 'Carpentery', '08/09/2022', 'Kandy'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
    createData('Saman', 'Job Provider', 'Carpentery', '08/09/2022', 'Matara'),
];

export default function JobSeekerReq() {
    const[page, setPage] = React.useState(0);
    const[rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        
            <Grid container spacing={1}>
                <Grid item xs={12}><Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
                        Requests
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <StyledTableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        // style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </StyledTableCell>
                                    ))}
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.city}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <StyledTableCell key={column.id} align={column.align}>
                                            {/* {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value} */}
                                                {value}
                                            </StyledTableCell>
                                        );
                                        })}
                                        <StyledTableCell align="right"><Button onClick={acceptButton} sx={{backgroundColor: '#4caf50'}} variant="contained">&nbsp;Accept&nbsp;</Button></StyledTableCell>
                                        <StyledTableCell align="center"><Button onClick={declineButton} sx={{backgroundColor: '#d32f2f'}} variant="contained">Decline</Button></StyledTableCell>
                                    </StyledTableRow>
                                    );
                                })}
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
                </Grid>
                <Grid item xs={3}><OthersProfile /></Grid>
            </Grid> 
    )
}



// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

// interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
// ];

// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
//   density: number;
// }

// function createData(
//   name: string,
//   code: string,
//   population: number,
//   size: number,
// ): Data {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
