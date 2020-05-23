const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0;
};

export const deleteById = (node, id) => {
  return Object.keys(node).map((key) => {
    const property = node[key];

    if (hasChildren(property)) {
      deleteById(property.properties, id);
    }

    if (property.$id === id) {
      delete node[key];
    }
    return node;
  });
};
