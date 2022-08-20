import React from 'react';
import WorkerCard from "../../Components/Workers/WorkerCard";
import WorkerMainComponents from "../../Components/Workers/WorkerMainComponents";
import Typography from "@mui/material/Typography";

const Workers = () => {
  return (
      <div>
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
                  Favourite
              </Typography>
              <WorkerMainComponents />
          </div>

      </div>
  );
};

export default Workers;

