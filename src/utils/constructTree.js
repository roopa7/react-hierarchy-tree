const getBstTreeJSON = ({ designationData }) => {
  let rootNode,
    bstTreeJSON = {};
  designationData.forEach((newMember, index) => {
    if (index === 0) {
      rootNode = constructMemberInfoObj({ newMember });
    } else {
      newMember = constructMemberInfoObj({ newMember });
      bstTreeJSON = addMember(rootNode, newMember);
    }
  });
  return bstTreeJSON;
};

const addMember = (node, newMember) => {
  if (newMember.inorder_index < node.inorder_index) {
    if (!node.children[0]) {
      node.children[0] = newMember;
    } else addMember(node.children[0], newMember);
  } else {
    if (!node.children[1]) {
      node.children[1] = newMember;
    } else addMember(node.children[1], newMember);
  }
  return node;
};
const constructMemberInfoObj = ({ newMember }) => {
  return {
    inorder_index: newMember.inorder_index,
    name: newMember.name,
    designation: newMember.designation,
    children: [],
  };
};
export { getBstTreeJSON };
