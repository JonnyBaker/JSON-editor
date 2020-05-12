import React from 'react';

import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'align-items': 'stretch',
    direction: 'row',
    justify: 'center',
  },
  paper: {
    height: 900,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Editor(props) {
  const classes = useStyles();

  return (
    <TreeItem nodeId={props.id} label="Root">
      <Card>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </Card>{' '}
    </TreeItem>
  );
}
