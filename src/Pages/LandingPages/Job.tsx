import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Props} from "react-select";
import {Order} from "./About";

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    height: "100%",
    borderRadius: 12,
    boxShadow: 'rgba(83, 144, 217, 0.1) 0px 4px 12px',
    overflow: 'unset',
    backgroundColor: '#ECD2F2'
  },
  content: {
    padding: 10,
    justifyContent: 'center'
  },
});





const Job = (props: Order) => {
  const [count, setCount] = useState<number>(0);
  const classes = useStyles();
  return (
      <div>
        <header>
          <h1>{props.name}</h1>
          <button onClick={() => setCount(count + 1)}>
            Click me!
          </button>
          <p>You've clicked the button {count} times.</p>
        </header>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.content}>
            {props.name}
          </CardContent>
        </Card>
      </div>
  );
};

export default Job;