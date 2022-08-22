import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import Typography from '@mui/material/Typography';

import AssistantIcon from '@mui/icons-material/Assistant';
import { Chart } from "react-google-charts";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ede7f6',
  ...theme.typography.body2,
//   padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '30px',
  borderRadius: '0px 0px 30px 30px',
}));


// for chart
const data = [
    ["User Type", "User Count", { role: "style" }],
    ["Job Provider", 9, "#f44336"],
    ["Job Seeker", 7, "#03a9f4"],
    ["Manpower Agency", 15, "#ff9800"]
];

export default function AdminDashboard() {
  return (
    <Box sx={{ width: 'auto', padding: '30px'}}>
      <div>
        <div style={{float: 'left', marginBottom: '-20px', fontWeight: 'bold'}}>
            <Typography variant="h5" component="h5" fontWeight='700' color='secondary' textAlign='left'>
                Users
            </Typography>
        </div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Job Provider Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >9</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Job Seeker Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >7</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Manpower Agency Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >15</Typography></Item>
            </Grid>
        </Grid>
      </div><br /><br />

      <div>
        <div style={{float: 'left', marginBottom: '-20px', fontWeight: 'bold'}}>
            <Typography variant="h5" component="h5" fontWeight='700' color='secondary' textAlign='left'>
                Payments
            </Typography> 
        </div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Job Provider Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >6</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Job Seeker Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >4</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '12px'}} fontSize='large' color='secondary' />&nbsp;&nbsp;&nbsp;Manpower Agency Count <br /> <Typography variant="h1" fontWeight='bold' padding='20px 0px 0px 0px' >11</Typography></Item>
            </Grid>
        </Grid>
      </div><br /><br />

      <div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={12}>
                <Chart chartType="ColumnChart" width="100%" height="500px" data={data} />
            </Grid>
        </Grid>
      </div>
    </Box>
  );
}