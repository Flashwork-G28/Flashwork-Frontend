import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Job from "./Job"

export interface Order {
    name: string


}

export default class About extends Component {
  render() {
    return (
      <div>
        <Typography variant="h1" component="h2" align="center" color="neutral">
          <h1>Heading</h1>
        </Typography>;
          <Job  name="James"/>
      </div>
    );
  }
}