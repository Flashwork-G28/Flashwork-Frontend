import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import AssistantIcon from '@mui/icons-material/Assistant';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Chart } from "react-google-charts";
import { normalize } from 'path';
import { shadows } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  ...theme.typography.body2,
//   padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '30px',
  borderRadius: '20px 20px 20px 20px',
  border: 'none',
  marginTop: '15px',
  boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)',
}));


// for charts
const data = [
    ["User Type", "User Count", { role: "style" }],
    ["Job Provider", 9, "#f44336"],
    ["Job Seeker", 7, "#03a9f4"],
    ["Manpower Agency", 15, "#ff9800"]
];
const options = {
    pieHole: 50,
    is3D: true,
};

const data2 = [
    ["Month", "Total visits", { role: "style" }],
    ["January", 26, '#7986cb'],
    ["February", 54, '#7986cb'],
    ["March", 20, '#7986cb'],
    ["April", 34, '#7986cb'],
    ["May", 15, '#7986cb'],
    ["June", 18, '#7986cb'],
    ["July", 9, '#7986cb'],
    ["August", 45, '#7986cb'],
    ["September", 24, '#7986cb'],
    ["October", 87, '#7986cb'],
    ["November", 56, '#7986cb'],
    ["December", 39, '#7986cb'],
];

export default function AdminDashboard() {
  return (
    <Box sx={{ width: 'auto', padding: '30px'}}>
      <div>
        <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={3} textAlign='left'>
            Users
        </Typography> 
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={2.5}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;Job Provider Count <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >9</Typography></Item>
            </Grid>
            <Grid item xs={2.5}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;Job Seeker Count <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >7</Typography></Item>
            </Grid>
            <Grid item xs={2.5}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;Manpower Agency Count <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >15</Typography></Item>
            </Grid>
            <Grid item xs={4.5}>
                <br />
                <Card sx={{boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)'}} >
                    <CardActionArea>
                        <CardContent>
                            {/* <Chart chartType="PieChart" width='100%' height='180px' data={data} /> */}
                            <Typography gutterBottom variant="h6" component="div">
                                Total Count
                            </Typography><br />
                            <Typography gutterBottom variant="h3" component="div">
                                31
                            </Typography>
                            <Typography gutterBottom fontSize={16} marginTop={5} fontWeight='lighter' component="div" align='left' justifyContent='center'>
                                <div>
                                <CalendarMonthIcon sx={{color: '#7A3293', fontSize: '25px', float: 'left', marginRight: '15px'}} />
                                Total registered users for last month
                                </div>
                                
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid><br /><br />
        <Grid item xs={12}><Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={3} textAlign='left'>
            Payments
        </Typography></Grid>
        
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;From Job Provider <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >Rs.32k</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;From Job Seeker <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >Rs.48k</Typography></Item>
            </Grid>
            <Grid item xs={4}>
            <Item><AssistantIcon sx={{position: 'relative', top: '4px'}} fontSize='small' color='secondary' />&nbsp;&nbsp;From Manpower Agency <br /> <Typography variant="h4" fontWeight='bold' padding='20px 0px 0px 0px' >Rs.78k</Typography></Item>
            </Grid>
        </Grid>
      </div><br /><br />

      <div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid item xs={6}>
                <Card sx={{boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)'}}>
                    <CardActionArea>
                        <CardContent>
                            <Grid xs={6}>
                                <Button variant='contained' sx={{backgroundColor: '#7A3293'}} >Monthly</Button> <Button variant='outlined' >Annually</Button>
                            </Grid>
                            <Chart chartType="PieChart" width="100%" height="500px" data={data} options={options} />
                            <Typography gutterBottom variant="h6" component="div">
                                Registered User Count
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)'}}>
                    <CardActionArea>
                        <CardContent>
                            <Grid xs={6}>
                                <Button variant='contained' sx={{backgroundColor: '#7A3293'}} >Monthly</Button> <Button variant='outlined' >Annually</Button>
                            </Grid>
                            <Chart chartType="ColumnChart" width="100%" height="500px" data={data2} />
                            <Typography gutterBottom variant="h6" component="div">
                                Monthly Views
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
      </div>
    </Box>
  );
}