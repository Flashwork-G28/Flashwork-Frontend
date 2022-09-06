import React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardback_1:{
        padding:'10px',
        color:'red',
        backgroundColor:'blue',
        borderRadius:'5px',



    },

});
const ProPaymentCard = () => {
    const  classes= useStyles();
    // const [spacing, setSpacing] = React.useState(2);
    //
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSpacing(Number((event.target as HTMLInputElement).value));
    // };

//     const jsx = `
// <Grid container spacing={${spacing}}>
// `;

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                    {/*{[0, 1, 2].map((value) => (*/}
                        <Grid item>
                            <Card
                                sx={{
                                    height: 400,
                                    width: 375,
                                    backgroundColor: '#E5E5E5',
                                }}
                            ><Grid container
                                   spacing="4"
                                   direction="column"
                                   justifyContent="flex-start"
                                   alignItems="flex-start"
                                   sx={{p:'30px'}}

                            >
                                <Grid justifyContent={"left"} style={{textAlign:'left'}}>
                                    <Typography variant={'h5'} className={classes.cardback_1}>Pro Member</Typography>
                                    <Typography >•	Unlimited advertisement posting.<br/>
                                        •	Unlimited requests of workers.<br/>
                                        •	Priority when an advertisement is posted.<br/>
                                        •	Priority when requesting a job seeker.</Typography>


                                </Grid>
                                <Grid justifyContent={"left"} style={{textAlign:'left'}}>
                                    <Typography variant={'h5'}>Free Member</Typography>
                                    <Typography >•	Advertisement can be posted once a day<br/>
                                        •	Limited requests of workers<br/>
                                        •	Less priority when an advertisement is posted.<br/>
                                        •	Less priority when requesting a job seeker.</Typography>


                                </Grid>


                            </Grid>




                            </Card>
                        </Grid>
                    <Grid item>
                        <Card
                            sx={{
                                height: 250,
                                width: 220,
                                backgroundColor: '#E5E5E5',
                            }}
                        ></Card>
                    </Grid>
                    <Grid item>
                        <Card
                            sx={{
                                height: 250,
                                width: 220,
                                backgroundColor: '#E5E5E5',
                            }}
                        ></Card>
                    </Grid>
                     {/*))}*/}
                </Grid>
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*    <Paper sx={{ p: 2 }}>*/}
            {/*        <Grid container>*/}
            {/*            <Grid item>*/}
            {/*                <FormControl component="fieldset">*/}
            {/*                    <FormLabel component="legend">spacing</FormLabel>*/}
            {/*                    <RadioGroup*/}
            {/*                        name="spacing"*/}
            {/*                        aria-label="spacing"*/}
            {/*                        value={spacing.toString()}*/}
            {/*                        onChange={handleChange}*/}
            {/*                        row*/}
            {/*                    >*/}
            {/*                        {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (*/}
            {/*                            <FormControlLabel*/}
            {/*                                key={value}*/}
            {/*                                value={value.toString()}*/}
            {/*                                control={<Radio />}*/}
            {/*                                label={value.toString()}*/}
            {/*                            />*/}
            {/*                        ))}*/}
            {/*                    </RadioGroup>*/}
            {/*                </FormControl>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Paper>*/}
            {/*    /!*<HighlightedCode code={jsx} language="jsx" />*!/*/}
            {/*</Grid>*/}
        </Grid>
    );
};

export default ProPaymentCard;
