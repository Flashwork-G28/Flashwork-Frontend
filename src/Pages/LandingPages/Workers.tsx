import React, {useEffect, useState} from 'react';
import WorkerMainComponents from "../../Components/Workers/WorkerMainComponents";
import Typography from "@mui/material/Typography";
import WorkerPageSearch from "../../Components/Workers/WorkerPageSearch";
import axios from "axios";


const Workers = () => {

    const [workers, setWorkers]= useState([]);

    const getData = () => {
        // Make a request for a user with a given ID
        alert('in call');
        axios.get('http://localhost:8000/workers')
            .then(function (response: any) {
                // handle success
                console.log(response.data.workers[0]);
                setWorkers(response.data.workers);
                console.log(workers);

            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    useEffect(() => {
        getData()
    }, [])


    return (
      <>
          <WorkerPageSearch />
          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Suggested For You
              </Typography>
              <WorkerMainComponents />
          </div>

          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Top Rate Workers
              </Typography>
              <WorkerMainComponents />
          </div>

          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Favourites
              </Typography>
              <WorkerMainComponents />
          </div>


      </>
  );
};

export default Workers;

