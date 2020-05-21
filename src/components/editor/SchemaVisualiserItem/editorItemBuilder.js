import React from 'react';
import SchemaVisualiserItem from './SchemaVisualiserItem';

export const buildItems = (properties, requiredFields, handleArchive) => {
  const items = Object.keys(properties).map((key) => {
    const property = properties[key];
    const required = requiredFields.includes(key);

    return (
      <SchemaVisualiserItem
        key={property.$id}
        node={property}
        required={required}
        name={key}
        handleArchive={handleArchive}
      />
    );
  });

  return items;
};
