import React from 'react';

import TreeItem from '@material-ui/lab/TreeItem';
import SchemaVisualiserCard from '../SchemaVisualiserCard/SchemaVisualiserCard';
import { buildItems } from './editorItemBuilder';
import useStyles from './SchemaVisualiserItem.styles';

const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0;
};

export default function EditorItem(props) {
  const { node, name, required, handleArchive, isRoot } = props;
  const classes = useStyles();
  const requiredFields = node.required;

  return (
    <TreeItem
      className={classes.root}
      nodeId={node.$id}
      label={
        <SchemaVisualiserCard
          node={node}
          required={required}
          name={name}
          handleArchive={handleArchive}
          isRoot={isRoot}
        />
      }
    >
      {hasChildren(node) && buildItems(node.properties, requiredFields, handleArchive)}
    </TreeItem>
  );
}
