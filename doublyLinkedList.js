/*
Differences of SinglyLL vs DoublyLL
DoublyLL is use to track your browser history it has pre & next 
double linked lists are better for finding things because it can be done in half the time.
However that extra pointer comes at a cost because it does take up more memory but it comes at a cost of more memory.
*/
/*
Doubly Linked List
insertion o(1)
removal o(1)
searching o(n)
accessing o(n)

*/
class Node {
  constructor(val) {
   this.val = val;
   this.prev = null;
   this.next = null; 
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a node @ end
  push(val) {
    let newNode =  new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  // removes last node
  pop() {
    if(!this.head) return null;

    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // removes first node
  shift() {
    if(!this.head) return null;
    
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  // add a node @ the beggining
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  } 

  /*
  get node by index
  PSEUDO CODE:
  1: check if index is outbound return null
  2: our list start @ index 0 so if index=length return null
  3: if index <= length/2 start from head 
  4: otherwise start from the tail
  5: loop trough decreasing/increasing & moving cur to next
  6: return the found node
  */ 
  get(idx) {
    if(this.length === 0 ||idx < 0 || idx >= this.length) return null;

    let count;
    let cur;
    if(idx < this.length/2) {
      count = 0;
      cur = this.head;
      while(count !== idx) {
        count++;
        cur = cur.next;
      }
    }
    else {
      count = this.length-1;
      cur = this.tail;
      while(count !== idx) {
        count--;
        cur = cur.prev;
      }
    }
    return cur;
  }

  /*
    set/change node value byIndex
    PSEUDO CODE:
    1: use get method
    2: if is valid node update node.val & return true
    3: otherwise return false
  */
  set(idx, val) {
    let foundNode = this.get(idx);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    else {
      return false;
    }
  }

  /*
  insert a node byIndex
  PSEUDO CODE:
  1: check if index is outbound return null
  2: if index =0 call unshif()
  3: if index = this.length call push()
  4: else call get(idx-1) to get prevNode set prev/next on the correct nodes 
  5: length++
  6: return true
  */
  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) {
      this.unshift(val);
      return true;
    }
    if(idx === this.length) {
      this.push(val);
      return true;
    }
    else  {
      let newNode = new Node(val);
      let beforeNode = this.get(idx-1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
    }
    this.length++;
    return true;
  }

  /*
  REMOVE: removes a node byIndex
  PSEUDO CODE:
  1: check if index is outbound return null
  2: if index =0 call shift()
  3: if index = this.length-1 call pop()
  4: else call get(idx) to get prevNode set prev/next on the correct nodes 
  5: length--
  6: return removeNode
  */
  remove(idx) {
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) {
      return this.shift();
    }
    if(idx === this.length-1) {
      return this.pop();
    }
    else {
      let removeNode = this.get(idx);
      let beforeNode = removeNode.prev;
      let afterNode = removeNode.next;

      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      removeNode.prev = null;
      removeNode.next = null;
      return removeNode;
    }
    this.length--;
  }

  // print list
  print() {
    if(!this.head)return null;
    let obj = {};
    let cur = this.head;

    while(cur) {
      obj.val = cur.val;
      obj.prev = cur.prev;
      obj.next = cur.next;
      console.log(obj)
      cur = cur.next;
    }
    return obj;
  }
}

let doubly = new DoublyLL();
doubly.push(1);
doubly.push(2);
doubly.push(3);
// doubly.pop();
// doubly.shift();
// doubly.unshift(3);
// doubly.get(2);

// doubly.set(2,'Luis');
// console.log(doubly);
// doubly.insert(0,'FIRST');
// doubly.insert(40,'LAST');
// doubly.insert(1,'MIDDLE');
// doubly.remove()
// console.log(doubly)


