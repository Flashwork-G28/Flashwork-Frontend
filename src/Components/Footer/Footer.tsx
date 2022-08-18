import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import facebook from '../../Assets/footer/facebook.png';
import insta from '../../Assets/footer/instagram.png';
import twi from '../../Assets/footer/twitter.png';



const Footer = () => {
    // const classes = useStyles();
    return (

        <div>
            <div style={{height:"250px",backgroundColor:"#46225F",padding:"1px",marginBottom:"1px",display:"flex",flexDirection:"row",paddingLeft:"20px"}}>
                <div style={{paddingLeft:"5%",paddingTop:"3%",color:"white"}}>
                   <div  style={{display:"flex",justifyContent:"flex-start"}}>FlashWork</div>
                    <div style={{display:"flex",justifyContent:"flex-start",paddingBottom:"12px"}}>The Service Integration Platform</div>
                    <div style={{display:"flex",justifyContent:"flex-start",paddingBottom:"12px"}}>CONTACT US</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"15px",color:"#c2c2a3"}}> FlashWork</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"15px",color:"#c2c2a3"}}> No 256, James Road, Kadawatha</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"15px",color:"#c2c2a3"}}>(+94)77 869 83219</div>

                </div>
                <div className="d-flex" style={{height:"110px",backgroundColor:'white',width:'2px',marginTop:'5%',marginLeft:"300px"}}>
                    <div className="vr"></div>
                </div>
                <div style={{paddingTop:"3%",color:"white"}}>
                    <div style={{display:"flex",justifyContent:"flex-start",paddingBottom:"12px",fontSize:"20px"}}>QUICK LINKS</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_Browse Service</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_Become a Worker</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_How it works?</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_Payment methods</div>
                </div>

                <div className="d-flex" style={{height:"110px",backgroundColor:'white',width:'2px',marginTop:'5%',marginLeft:"300px"}}>
                    <div className="vr"></div>
                </div>
                <div style={{paddingTop:"3%",color:"white"}}>
                    <div style={{display:"flex",justifyContent:"flex-start",paddingBottom:"12px",fontSize:"20px"}}>SUPPORT</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_ F.A.Q.s</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_ About us</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_ Privacy Policy</div>
                    <div style={{display:"flex",justifyContent:"flex-start",fontSize:"18px",color:"#c2c2a3",paddingBottom:"2px"}}>_ Terms and Conditions</div>
                </div>


            </div><div style={{width:"100%",height:"50px",backgroundColor:"#46225F",display:"flex",flexDirection:"row"}}>
                <div style={{color:"white", marginRight:"900px", fontSize:"12px",padding:"5px",paddingTop:"15px",marginLeft:"70px",}}>
                    Copyright ©  2021 FLASHWORK SERVICE CENTER (PVT) LTD
                </div>

                <div style={{paddingTop:"10px",marginLeft:"5px",display:"flex",flexDirection:"row"}}>
                        {/*<div style={{paddingLeft:"8px"}}><img src={facebook}/></div>*/}
                        {/*<div style={{paddingLeft:"8px"}}><img src={insta}/></div>*/}
                        {/*<div style={{paddingLeft:"8px"}}><img src={twi}/></div>*/}
                </div>
            </div>

        </div>

    );
};


export default Footer;
