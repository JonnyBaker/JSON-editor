import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    float: 'right',
    '& .MuiTypography-body1': {
      fontSize: 12,
    },
  },
}));

const handleClick = (e) => {
  e.stopPropagation();
};

export default function EditorCard(props) {
  const classes = useStyles();

  const { checked } = props;

  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch
          defaultChecked={checked}
          onClick={(event) => handleClick(event)}
          name="required"
          color="primary"
        />
      }
      label="Required"
    />
  );
}
