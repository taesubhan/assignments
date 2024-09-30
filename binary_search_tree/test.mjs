import {Tree} from './bst.mjs';

const arr = [1,5,9,14,17,21,29];
// const arr = [1]
const tree = new Tree();
// tree.printTree();
// tree.insert(28);
// tree.insert(30);
// tree.insert(15);
// tree.insert(16);
// tree.printTree();
// tree.deleteItem(1);
// tree.printTree();

// console.log(tree.find(14));
// tree.levelOrder((n) => console.log(n.value));
// tree.preOrder((n) => console.log(n.value));
// tree.inOrder((n) => console.log(n.value));
// tree.postOrder((n) => console.log(n.value));
// console.log(tree.height(tree.root));
// console.log(tree.depth(tree.root.left));
// console.log(tree.isBalanced());
// tree.rebalance();
// tree.printTree();

tree.createRandomTree();
tree.printTree();
// console.log(tree.isBalanced());
const call = (n)=>console.log(n.value);
// tree.levelOrder(call);
// tree.preOrder(call);
// tree.inOrder(call);
// tree.postOrder(call);
tree.insert(101);
tree.insert(105);
tree.insert(107);
tree.printTree();
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
tree.printTree();

tree.levelOrder(call);
tree.preOrder(call);
tree.inOrder(call);
tree.postOrder(call);