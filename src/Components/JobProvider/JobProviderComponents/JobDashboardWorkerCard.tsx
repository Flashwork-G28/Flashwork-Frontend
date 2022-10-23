import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import SearchBar from "../../CommonComponent/SearchBar";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import JobSeekerReqProfile from "../../JobSeeker/JobSeekerRequest/JobSeekerReqProfile";
import JobDashboardWorkerTable from "./JobDashboardWorkerTable";
import JobDashboardSaveJobSeeker from "./JobDashboardSaveJobSeeker";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ECD2F2',
        color: '#1C1C1C',
        fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

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
    name: string,
    category: string,

) {
    return { name, category};
}

const rows = [
    createData('Udesh Lakshan', 'Job Seeker'),
    createData('Rashmika Malshan', 'Job Seeker'),
    createData('Shalani Hansika', 'Manpower agency'),
    createData('Lakshitha Shehan', 'Job Provider'),
    createData('Chavinda Perera', 'Job Provider'),
];


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{display:'flex', justifyContent:'space-evenly'}}>

                    <Tab style={{fontWeight:'700',fontSize:'18px',color:'#4E2363' ,paddingBottom:'30px'}} label="Requested Worker" {...a11yProps(0)} />
                    <Tab style={{fontWeight:'700',fontSize:'18px',color:'#4E2363',paddingBottom:'30px'}} label="Saved Workers" {...a11yProps(1)} />
                    <Tab style={{fontWeight:'700',fontSize:'18px',color:'#4E2363',paddingBottom:'30px'}} label="Saved Manpower Aguncy" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

                <JobDashboardWorkerTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <JobDashboardSaveJobSeeker />
            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
        </Box>
    );
}
