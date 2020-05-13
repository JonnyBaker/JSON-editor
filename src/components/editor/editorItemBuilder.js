import React from 'react';
import SchemaVisualiserItem from './SchemaVisualiserItem';

export const buildItems = (properties) => {
  const items = Object.keys(properties).map((key) => {
    const property = properties[key];

    return <SchemaVisualiserItem currentProperty={property} name={key} />;
  });

  return items;
};
