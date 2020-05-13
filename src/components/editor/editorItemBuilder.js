import React from 'react';
import EditorItem from './EditorItem';

export const buildItems = (properties) => {
  const items = Object.keys(properties).map((key) => {
    const property = properties[key];
    console.error('KEY', key);
    return <EditorItem id={property.$id} currentProperty={property} name={key} />;
  });

  return items;
};
