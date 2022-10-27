import React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ariaLabel = { 'aria-label': 'description' };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const JobSeekerHelp = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Item>
                            <div>
                                <div style={{fontWeight:"bold",color:"#46225F",fontSize:"20px"}}>Chat Bubble With Admin</div>
                                <div></div>
                                <div></div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <div style={{paddingLeft:"350px"}}>
                                <div style={{width:"100px",height:"30px",backgroundColor:"lightgrey",paddingTop:"5px",marginBottom:"2px"}}>Hello Admin</div>
                                <div style={{width:"150px",height:"30px",backgroundColor:"lightgrey",paddingTop:"5px"}}>I want you help</div>
                            </div>
                            <div style={{width:"250px",height:"30px",backgroundColor:"lightgrey",paddingTop:"5px"}}>Ok i can help you. tell me you issue</div>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{width:"550px",height:"50px"}}>
                            <div style={{marginLeft:"40px",display:"flex",flexDirection:"row",paddingTop:"15px"}}>
                                <div style={{width:"80px",height:"40px"}}>
                                    <NoteIcon />
                                </div>
                                <div style={{width:"290px",height:"40px"}}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1 },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >

                                        <Input placeholder="Write your message" inputProps={ariaLabel} />

                                    </Box>
                                </div>
                                <div style={{width:"80px",height:"40px"}}>
                                    <SendIcon />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={6}>
                        <div style={{display:"flex",justifyContent:"start",color:"#46225F"}}><h1>Help</h1></div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{display:"flex",justifyContent:"start"}}><h3>How we bring these ads to you
                        </h3></div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <div style={{width:"500px"}}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h4>How we use the information</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We use that information to help us figure out what you might be interested in seeing. This lets us tailor and improve your online experience - both on websites of the eBay corporate family and elsewhere on the web.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{width:"500px"}}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h4>Who we work with</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We may work with other companies, like websites or ad networks to show customized ads to you. These partners may have access to your information in order to assist us with providing you customized ads. Advertisers and other third parties (e.g., advertising platforms and service providers they may use) may assume that users who interact with a targeted ad are part of the group that the ad is directed toward. Also, some third parties may provide us information about you (e.g., demographic information) from offline and online sources that we may use to provide you more relevant advertising. Read more about our policies on sharing information with other companies in our Privacy Notice
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{width:"500px"}}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h4>How you can control your information</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            But you can tell us not to use your eBay activity to customize advertising we show you, whether on eBay or anywhere else on the web. Whenever you see the "About" or "Adchoice" link next to or in one of the ads we serve, or in the footer of one of our websites, click it to check and change your advertising preferences. Also, we support the Self-Regulatory Principles for Online Behavioral Advertising developed by the Digital Advertising Alliance (DAA), and have integrated our opt-out platform with the DAA choice tool available here. Remember, when you opt out, you'll still see ads, but they won't be tailored to your interests based on your eBay activity.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </div>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default JobSeekerHelp;
