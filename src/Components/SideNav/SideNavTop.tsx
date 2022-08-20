import React from 'react';

const SideNavTop = () => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div>
                <h3>Nimesh Dahanayaka De Silva</h3>
            </div>
            <div style={{paddingRight:"50px",paddingBottom:"10px"}}>
                Deshaniparttime@gmail.com
            </div>
            <div style={{color:"black",paddingRight:"130px",paddingBottom:"15px"}}>
                <button style={{padding:"5px",width:"130px",backgroundColor:"white",color:"black",fontWeight:"bolder",borderRadius:"7px",borderColor:""}}>Get Pro</button>
            </div>
            <span style={{width:'250px',backgroundColor:'gray', border:'0.01rem solid gray',marginLeft:'10px',height:"1px"}}>

            </span>
        </div>

    );
};

export default SideNavTop;