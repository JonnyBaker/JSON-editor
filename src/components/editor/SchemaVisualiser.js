import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { schema } from '../../jsonSchema';
import SchemaVisualiserItem from './SchemaVisualiserItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'align-items': 'stretch',
    direction: 'row',
    justify: 'center',
    maxWidth: '100%',
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));
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

export default function Editor() {
  const classes = useStyles();
  const [tree, removeNodeFromTree] = React.useState(schema);

  const handleArchive = (id) => {
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
          currentProperty={tree}
          name={'root'}
          handleArchive={handleArchive}
          isRoot={true}
        />
      </TreeView>
    </Grid>
  );
}
