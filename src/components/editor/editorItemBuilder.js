import React from 'react';
import SchemaVisualiserItem from './SchemaVisualiserItem';

export const buildItems = (properties, requiredFields) => {
  const items = Object.keys(properties).map((key) => {
    console.error('REqUIRED FIELDS', requiredFields);

    const property = properties[key];
    const required = requiredFields.includes(key);

    return <SchemaVisualiserItem currentProperty={property} required={required} name={key} />;
  });

  return items;
};
