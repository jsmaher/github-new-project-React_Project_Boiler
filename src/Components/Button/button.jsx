import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color:"white",
    outLine:"none",
    textTransform:"capitalize"
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button}>{props.value}</Button>

    </div>
  );
}
