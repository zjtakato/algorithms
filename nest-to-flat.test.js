const tree = [
  {
    id: 0,
    name: 'root',
    children: [
      {
        id: 1,
        name: 'child1',
        children: [
          {
            id: 4,
            name: 'child1-1',
            children: [],
          },
          {
            id: 5,
            name: 'child1-2',
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: 'child2',
        children: [
          {
            id: 6,
            name: 'child2-1',
            children: [
              {
                id: 8,
                name: 'child2-1-1',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'child3',
        children: [
          {
            id: 7,
            name: 'child3-1',
            children: [],
          },
        ],
      },
    ],
  },
];

function nestToFlat(tree, list) {
  list = list || [];
  for (const node of tree) {
    const children = node.children;
    delete node.children;
    list.push(node);
    if (children.length > 0) {
      nestToFlat(children, list);
    }
  }
  return list;
}

console.log(nestToFlat(tree));
