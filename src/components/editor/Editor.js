import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EditorItem from './EditorItem';
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

export default function Editor() {
  const classes = useStyles();

  return (
    <Grid md={8} item>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <EditorItem id={'1'} />
        <EditorItem id={'2'} />
        <EditorItem id={'3'} />
      </TreeView>
    </Grid>
  );
}
