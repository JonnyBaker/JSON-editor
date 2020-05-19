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

export default function Editor() {
  const classes = useStyles();
  const [tree, removeNodeFromTree] = React.useState(schema);

  const handleArchive = (id) => {
    removeNodeFromTree((tree) => {
      delete tree.properties.dimensions.properties.width; //todo this needs to use the id
      console.error('AFTER', tree);
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
        <SchemaVisualiserItem currentProperty={tree} name={'root'} handleArchive={handleArchive} />
      </TreeView>
    </Grid>
  );
}
