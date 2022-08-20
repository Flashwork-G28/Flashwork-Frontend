import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import img from '../../Assets/aboutus.png';
import Card from 'react-bootstrap/Card';



const useStyles = makeStyles({
    // const classes = useStyles();
    AboutUs: {

    },

    card: {

    },

});

export default function AboutUs() {
    const classes = useStyles();
    return (

        <div className={classes.AboutUs} style={{display:"flex", flexDirection:"row"}}>

            <div className={classes.card}>

                <Card style={{ width: '25rem', backgroundColor:'#e6e6e6' ,padding:'40px', borderRadius:'10px', marginLeft:'15%', marginTop:"7%",position:"absolute" }}>
                    <Card.Body>
                        <Card.Title><h2>About Us</h2></Card.Title>

                        <Card.Text>
                            <h5> Search Online Jobs For Students Today. Work From Home Sites. Work Remote.
                                Work From Home Sites. Computer Work From Home. Email. Facebook. Area. Search.
                                Chat. Number. Instagram. Local. Fast. Jobs. Types: Home, Office, Laptop, Phone, Call, Online Meeting.</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

           <div >
               <img src={img} className='img-fluid shadow-4' alt='...' width={"110%"} height={"90%"} style={{borderRadius:"30px", marginTop:"10%", marginLeft:"130%"}}/>
           </div>



        </div>

    );
}

