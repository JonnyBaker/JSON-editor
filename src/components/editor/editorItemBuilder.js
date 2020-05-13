import React from 'react';
import EditorItem from './EditorItem';

const buildItems = (properties) => {
  const items = Object.keys(properties).map((key) => {
    const property = properties[key];
    return <EditorItem id={property.$id} currentProperty={property} />;
  });

  return items;
};
