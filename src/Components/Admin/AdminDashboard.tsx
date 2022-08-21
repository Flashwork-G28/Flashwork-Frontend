import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { height } from '@mui/system';

// for chart
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';


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

export default function dminDashboard() {
  return (
    <Box sx={{ width: 'auto', padding: '30px'}}>
      <div>
        <div style={{float: 'left', marginBottom: '-35px', color: '#7A3293', fontWeight: 'bold'}}>
            <h2>Users</h2>  
        </div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={4}>
            <Item>Job Provider Count <br /> <div><h1>9</h1></div></Item>
            </Grid>
            <Grid item xs={4}>
            <Item>Job Seeker Count <br /> <div><h1>7</h1></div></Item>
            </Grid>
            <Grid item xs={4}>
            <Item>Manpower Agency Count <br /> <div><h1>15</h1></div></Item>
            </Grid>
        </Grid>
      </div><br />

      <div>
        <div style={{float: 'left', marginBottom: '-35px', color: '#7A3293', fontWeight: 'bold'}}>
            <h2>Payments</h2>  
        </div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={4}>
            <Item>Job Provider Count <br /> <div><h1>6</h1></div></Item>
            </Grid>
            <Grid item xs={4}>
            <Item>Job Seeker Count <br /> <div><h1>4</h1></div></Item>
            </Grid>
            <Grid item xs={4}>
            <Item>Manpower Agency Count <br /> <div><h1>11</h1></div></Item>
            </Grid>
        </Grid>
      </div>
    </Box>
  );
}