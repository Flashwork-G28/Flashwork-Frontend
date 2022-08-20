import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from 'react-bootstrap/Card';


const useStyles = makeStyles({
    TheServicesIntegration: {
        width:'100%',
        height:'10%',
    },

});


export default function TheServicesIntegration() {
    const classes = useStyles();
    return (

        <div className={classes.TheServicesIntegration}>
            <div style={{color:"#600080",marginRight:"28%"}}>
                <h1>The services integration platform is at your service</h1>
            </div>

            <div>
                <Card style={{ width: '70rem', borderRadius:'10px', marginLeft:'7%', fontSize:"20px",fontWeight:"2px" }}>
                    <Card.Text>
                        Flashwork is a platform which connects part-time workers with suitable opportunities. The main purpose of this system is to provide facilities to interconnect part-time service providers such as individual service providers or manpower agencies with part-time service receivers with the facilities to make online payments, online chat services, online booking services and other facilities.
                    </Card.Text>
                </Card>
            </div>


        </div>

    );
}



