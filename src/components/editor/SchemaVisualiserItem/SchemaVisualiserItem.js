import React from 'react';

import TreeItem from '@material-ui/lab/TreeItem';
import SchemaVisualiserCard from '../SchemaVisualiserCard/SchemaVisualiserCard';
import { buildItems } from './editorItemBuilder';
import useStyles from './SchemaVisualiserItem.styles';

const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0;
};

export default function EditorItem(props) {
  const { currentProperty, name, required, handleArchive, isRoot } = props;
  const classes = useStyles();
  const requiredFields = currentProperty.required;

  return (
    <TreeItem
      className={classes.root}
      nodeId={currentProperty.$id}
      label={
        <SchemaVisualiserCard
          element={currentProperty}
          required={required}
          name={name}
          handleArchive={handleArchive}
          isRoot={isRoot}
        />
      }
    >
      {hasChildren(currentProperty) &&
        buildItems(currentProperty.properties, requiredFields, handleArchive)}
    </TreeItem>
  );
}
