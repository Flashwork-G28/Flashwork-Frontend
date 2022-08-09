import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {inspect} from "util";
import {makeStyles} from "@material-ui/core/styles";

//
// const CardContainer = shal`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #1f2229;
//
// `;

export default function HomeServiceCard() {
    return (
        <div>
            <div style={{width:'50px', height:'50px' , backgroundColor:'red', marginBottom:'-10px' , zIndex:2} }>

            </div>
            <div>
            <Card style={{ width: '250px', borderRadius: '10px',backgroundColor: '#ECD2F2', padding:'10px' , zIndex:1}} variant="outlined">
                <CardContent >
                    <Typography variant="h5" component="div" style={{paddingBottom:'10px'}}>
                        Find jobs
                    </Typography>

                    <Typography variant="body2">
                        FlashWork is your source for jobs and career opportunities. Search for jobs, read career advice from Monster's job experts, and find hiring and recruiting advice.
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    );
}
