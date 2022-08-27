import React from 'react';
import quto from '../../Assets/ContactUs/left-quote 2.png';

import p1 from '../../Assets/ContactUs/1.png';
import p2 from '../../Assets/ContactUs/2.png';
import p3 from '../../Assets/ContactUs/3.png';
import p4 from '../../Assets/ContactUs/4.png';
import p5 from '../../Assets/ContactUs/5.png';
import p6 from '../../Assets/ContactUs/6.png';
import p7 from '../../Assets/ContactUs/7.png';
import p8 from '../../Assets/ContactUs/8.png';
import p9 from '../../Assets/ContactUs/9.png';
import person from '../../Assets/ContactUs/Background 2.png';

import Card from 'react-bootstrap/Card';
import TextField from '@material-ui/core/TextField';

const ContactUs = () => {
  return (
      <>
          <div style={{height:"550px",display:"flex",flexDirection:"row"}}>
              <div style={{paddingLeft:"70px"}}>
                  <h1 style={{color:"#600080",fontWeight:"bold",fontSize:"40px",paddingLeft:"20px"}}>Time To Join With Us</h1>
                  <div style={{display:"flex",flexDirection:"row",paddingBottom:"10px"}}>
                      <img src={p1} alt={"contactImg"} style={{width:"150px",height:"100px",paddingRight:"10px"}}/>
                      <img src={p2} alt={"contactImg"} style={{paddingRight:"10px"}}/>
                      <img src={p4} alt={"contactImg"} style={{width:"150px",height:"100px"}}/>
                  </div>
                  <div  style={{display:"flex",flexDirection:"row",paddingLeft:"20%",paddingBottom:"10px"}}>
                      <img src={p9} alt={"contactImg"} style={{width:"100px",height:"150px",paddingRight:"10px"}}/>
                      <img src={p7} alt={"contactImg"} style={{width:"100px",height:"150px",paddingRight:"10px"}}/>
                      <img src={p3} alt={"contactImg"} style={{width:"100px",height:"150px"}}/>
                  </div>
                  <div style={{display:"flex",flexDirection:"row"}}>
                      <img src={p5} alt={"contactImg"} style={{width:"150px",height:"100px",paddingRight:"10px"}}/>
                      <img src={p6} alt={"contactImg"} style={{paddingRight:"10px"}}/>
                      <img src={p8} alt={"contactImg"} style={{width:"150px",height:"100px"}}/>
                  </div>
              </div>
              <div style={{paddingLeft:"15%",paddingTop:"5%",display:"flex",flexDirection:"column"}}>
                  <div><img src={quto} alt={"quto"} style={{width:"60px",height:"60px",paddingRight:"350px"}}/>
                      <div style={{display:"flex",justifyContent:"flex-start"}}>
                          <Card style={{ width: '20rem', borderRadius:'10px', marginLeft:'7%', fontSize:"20px",fontWeight:"2px"}}>
                              <Card.Text style={{display:"flex",justifyContent:"flex-start"}}>
                                  Join with us for Finding part-time workers and part-time working opportunities along with proper arrangements for work.

                               </Card.Text>
                          </Card>
                      </div>
                      <div style={{display:"flex",flexDirection:"row",paddingLeft:"40px",paddingTop:"10px"}}>
                        <div style={{paddingRight:"10px"}}>Call us anytime</div>
                          <div style={{color:"blue"}}>(+94)77 869 83219</div>
                      </div>

                      <div style={{display:"flex",flexDirection:"row",paddingLeft:"40px"}}>
                          <div style={{paddingRight:"10px"}}>Email us</div>
                          <div style={{color:"blue"}}> FlashWork@gmail.com</div>


                      </div>
                      <div style={{paddingTop:"30px",paddingRight:"270px",paddingLeft:"40px"}}>
                          <button style={{padding:"15px",borderRadius:"7px",fontWeight:"bold",backgroundColor:"#7A3293",color:"white",border:"none",width:"100px"}}>
                              Join Us
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{height:"550px",display:"flex",flexDirection:"row"}}>
              <div>

                  <Card style={{ width: '20rem', borderRadius:'10px', marginLeft:'90%',marginTop:"1%", fontSize:"20px",fontWeight:"2px",backgroundColor:"#f9e6ff",paddingLeft:"10%",paddingRight:"10%"}}>
                      <h3 style={{paddingTop:"10px", color:"#600080"}}>Tell Us About Your </h3>
                      <Card.Text style={{display:"flex",justifyContent:"flex-start",padding:"10px"}}>

                          <form noValidate autoComplete="off">
                              <div style={{display:"flex",flexDirection:"row",marginRight:"5px"}}>
                                  <TextField   id="outlined-basic" label="First Name" variant="outlined" />
                                  <TextField style={{paddingLeft:"10px",paddingBottom:"10px"}} id="outlined-basic" label="Last Name" variant="outlined" />
                              </div>
                              <TextField   style={{display:"flex",justifyContent:"flex-start",paddingBottom:"10px"}} id="outlined-basic" label="Email Address" variant="outlined" />
                              <TextField style={{display:"flex",justifyContent:"flex-start",paddingBottom:"10px"}}
                                  id="outlined-helperText"
                                  label="Mobile"
                                  defaultValue="+94"
                                  variant="outlined"
                              />
                              <TextField style={{display:"flex",justifyContent:"flex-start",paddingBottom:"20px"}}
                                  id="outlined-multiline-static"
                                  multiline
                                  defaultValue="Message"
                                  variant="outlined"
                              />
                              <div style={{display:"flex",justifyContent:"flex-end",padding:"10px"}}>
                                  <button style={{padding:"10px",width:"100px",backgroundColor:"#7A3293",fontWeight:"bold",border:"none",color:"white",borderRadius:"7px"}}>Send</button></div>
                          </form>
                      </Card.Text>
                  </Card>

              </div>
              <div style={{paddingLeft:"40%",paddingTop:"5%"}}>
                  <img src={person} alt={"person"} style={{width:"350px",height:"400px"}}/>
              </div>
          </div>
      </>
  );
};

export default ContactUs;

