const hasChildren = (property) => {
  return property.properties && Object.keys(property.properties).length > 0; //TODO remove duplication with deleteById
};

export const updateNodeById = (tree, node, id) => {
  return Object.keys(tree).map((key) => {
    let property = tree[key];

    if (hasChildren(property)) {
      updateNodeById(property.properties, node, id);
    }

    if (property.$id === id) {
      property = { ...node };
    }
    return tree;
  });
};
