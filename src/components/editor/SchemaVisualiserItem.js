import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TreeItem from '@material-ui/lab/TreeItem';
import SchemaVisualiserCard from './SchemaVisualiserCard';
import { buildItems } from './editorItemBuilder';

const useStyles = makeStyles((theme) => ({
  root: {
    'padding-top': '10px',
  },
}));

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
