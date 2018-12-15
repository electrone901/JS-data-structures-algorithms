/*
BinarySearchTree
  Class Node:
    val
    left 
    right
  
  BinarySearchTree:
    constructor:
      this.root = null;
  
    Methods:
      insertion: o(log n)
      searching: o(log n)on average
    
    Notes:
      Trees are non-lineal
      Trees contains root and chil notes
      Binary trees can have values of any type and at most 2 children
      Binary trees Search is a type of BT where every node to the left is less than parent node and right nodes are greater
      We can serach trees with:
        - BST
        - DFT
            - postOrder:
                - left
                - right 
                - node

            - preOrder:
                - node 
                - left
                - right

            - inOrder: 
                - left
                - node
                - right

            

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserts a node 
  insert(val) {
    let newNode = new Node(val);
    
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let cur = this.root;
    while(true) {
      if(val === cur.val) return 'Already exist!';
      if(val < cur.val) {
        if(cur.left === null) {
          cur.left = newNode;
          return this;
        }
        else {
          cur = cur.left;
        }
      }
      else {
        if(cur.right === null) {
          cur.right = newNode;
          return this;
        }
        else {
          cur = cur.right;
        }
      }
    }
  }



  // print BST in preorder
  print(node) {
    if(node === null) {
      return null;
    }
    else {
     console.log('cur ', node);
     this.print(node.left);
     this.print(node.right); 
    } 
  }

  // finds a node value
  find(val) {
    if(!this.root) return false;
    else {
      let cur = this.root;
      
      while(cur !== null) {
        if(val === cur.val) return cur;
        if(val < cur.val) cur = cur.left;
        else {
          cur = cur.right;
          return cur;
        }
      }
      return false;
    } 
  }

  contains(val) {
    if(!this.root) return false;
    let current = this.root,
        found = false;

        while(current && !found) {
          if(val < current.val) current = current.left;
          if(val > current.val) current = current.right;
          else return true;
        }
        if(!found)return false;
  }

  breathFirstSearch() {
    if(!this.root) return null;
    let queue = [],
        visited = [],
        current = this.root;
    
    queue.push(current);

    while(queue.length > 0 ) {
      current = queue.shift();
      visited.push(current.val);

      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return visited;
  }


  /*
  DFS is a vertically search
  DFSPreOrder:
    traverse BST:
      - node
      - left
      - right
    First push the node.val then traverse left,then the right and return the list/array
  */
  depthFirstSearchPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    // invoke it so it triggers 
    traverse(this.root);

    return data;
  }

  /*
  DFSPostOrder:
    traverse BST:
      - left
      - right
      - node
    First traverse until the leaf node then print its left & right,then visit the node and return the list/array
  */
  depthFirstSearchPostOrder() {
    let data = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  /*
  DFSInorder:
    traverse BST:
      - first
      - node
      - right
    First traverse left the print the value, then visit the node, then the right and return the list/array
  */
  depthFirstSearchInOrder() {
    let data = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFS vs BFS
    - BFS will take more space
    - DFS & BFS same time complexity

  

}
let b = new BinarySearchTree();
b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(8);
b.insert(20);
// const root = b.root;
// b.print(root);

// console.log(b);
// b.find(13);  // => Node {val: 13,left: Node { val: 11, left: null, right: null },right: null }
// b.contains(13); // true
// b.contains(1301); // false
// b.breathFirstSearch(); // false
// b.depthFirstSearchPreOrder();// 10, 6, 3, 8, 15, 20 ]
b.depthFirstSearchPostOrder(); //[ 3, 8, 6, 20, 15, 10 ]
// b.depthFirstSearchInOrder();