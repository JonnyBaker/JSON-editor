import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import SchemaVisualiserItem from '../SchemaVisualiserItem/SchemaVisualiserItem';
import useStyles from './SchemaVisualiser.styles';

export default function Editor(props) {
  const classes = useStyles();
  const { tree, updateTree } = props;

  return (
    <Grid md={8} item>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <SchemaVisualiserItem node={tree} name={'root'} updateTree={updateTree} isRoot={true} />
      </TreeView>
    </Grid>
  );
}
