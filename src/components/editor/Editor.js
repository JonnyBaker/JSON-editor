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
      </TreeView>
    </Grid>
  );
}
