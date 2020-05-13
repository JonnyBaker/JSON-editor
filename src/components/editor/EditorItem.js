import React from 'react';

import TreeItem from '@material-ui/lab/TreeItem';
import EditorCard from './EditorCard';
import { buildItems } from './editorItemBuilder';

const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0;
};

export default function EditorItem(props) {
  const { id, currentProperty, name } = props;

  console.error('EDITORITEM', props);

  return (
    <TreeItem nodeId={id} label={<EditorCard element={currentProperty} name={name} />}>
      {hasChildren(currentProperty) && buildItems(currentProperty.properties)}
    </TreeItem>
  );
}
