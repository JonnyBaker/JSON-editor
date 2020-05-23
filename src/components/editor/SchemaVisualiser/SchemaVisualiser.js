import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import SchemaVisualiserItem from '../SchemaVisualiserItem/SchemaVisualiserItem';
import useStyles from './SchemaVisualiser.styles';

const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0;
};

const deleteById = (node, id) => {
  return Object.keys(node).map((key) => {
    const property = node[key];

    if (hasChildren(property)) {
      deleteById(property.properties, id);
    }

    if (property.$id === id) {
      delete node[key];
    }
    return node;
  });
};

export default function Editor(props) {
  const classes = useStyles();
  const { tree, removeNodeFromTree } = props;

  const handleArchive = (id) => {
    //TODO change this so it handlesUpdate instead of just deleting
    removeNodeFromTree((tree) => {
      deleteById(tree.properties, id);
      return { ...tree };
    });
  };

  return (
    <Grid md={8} item>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <SchemaVisualiserItem
          node={tree}
          name={'root'}
          handleArchive={handleArchive}
          isRoot={true}
        />
      </TreeView>
    </Grid>
  );
}
