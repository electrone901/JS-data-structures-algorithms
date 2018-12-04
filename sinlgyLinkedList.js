/*
Singly Linked List

class Node
  constructor

class SinglyLinkedList
  constructor

  Methods
    push(val) //add Node
    pop() //remove last Node
    traverse() //print all nodes
    shift() //remove first node
    unshift(val) //add at the beggining
    remove(index) // remove node at index
    getByIndex(index) //get node by index
    setByIndex(index, val) // change val node @index 
    insert(val, index) // insert node at index
    reverse() //reverse list
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add Node
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove last Node
  pop() {
    if(!this.head) return null;
    let cur = this.head;
    let prev = null;
    while(cur.next) {
      prev = cur;
      cur = cur.next;
    }
    this.tail = prev.next;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return cur;
  }


  //print all nodes
  traverse() {
    if(!this.head) return null;
    let cur = this.head;
    while(cur) {
      console.log(cur.val);
      cur = cur.next;
    }
  }


  //remove first node
  shift() {
    if(!this.head) return null;

    let remove = this.head;
    this.head = remove.next;
    this.length--;

    if(this.length === 0) {
      this.head =null;
      this.tail =null;
    }
    return remove; 
  }

  //add at the beggining
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  //get node by index
  getByIndex(index) {
    if(index < 0 || index >= this.length) return null;
    let count = 0;
    let cur = this.head;
    while(count !== index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  // change val node @index 
  setByIndex(index, val) {
    if(index < 0 || index > this.length) return null;
    var foundNode = this.getByIndex(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  
  // remove node at index
  remove(index) {
    if(index < 0 || index > this.length) return null;
    if(index === 0) {
      this.shift();
      return true;
    }
    if(index === this.length-1) {
      this.pop();
      return true;
    }
    let prevNodeFound = this.getByIndex(index -1);
    let removeNode = prevNodeFound.next;
    prevNodeFound.next = removeNode.next;
    this.length--;
    return removeNode;
  }
  
  // insert node at index
  insert(index, val) {
    if(index < 0 || index > this.length) return null;
    if(index === 0) {
      this.unshift(val);
      return true;
    }
    if(index === this.length) {
      this.push(val);
      return true;
    }

    let newNode = new Node(val);
    let foundNode = this.getByIndex(index -1);
    let temp = foundNode.next;
    foundNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
    
  }
  
  //reverse list
  reverse() {
    if(!this.head) return null;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next, prev = null;

    while(node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // print list in array form
  print() {
    let cur = this.head;
    let ar = [];
    while(cur) {
      ar.push(cur.val);
      cur = cur.next
    }
    return ar;
  }

}
 let list = new SinglyLinkedList();
 list.push(1);
 list.push(2);
 list.push(3);
 list.push('last');

 list.unshift(100);
 console.log(list);
 list.insert(3, 'inserting');
 
 list.remove(4)
 list.print()
//  console.log('list',list);

//  list.print();
//  list.traverse();
// list.pop();
// list.shift();
// list.getByIndex(0)
// list.setByIndex(1, 'set');
