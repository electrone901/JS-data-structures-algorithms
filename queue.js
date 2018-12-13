/*
	Queue
		- Follows FIFO (first in first out)
		- i.e: waiting on line
  
  Methods:
	  insertion O(1)
	  removal O(1)

	NOTE: We can implement it with an array or we can write our own


	Queue with an array: 

	let queueArray = [];
	queueArray.unshift('first');
	queueArray.unshift('second');
	queueArray.unshift('third');

	console.log(queueArray); //[ 'third', 'second', 'first' ]

  queueArray.pop(); //removes last
  queueArray.pop();
  console.log(queueArray); //[ 'third' ]


*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adds nodes at the end
  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  // removes the first node
  dequeue() {
    if(!this.first) return null;

    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    else {
      this.first = this.first.next;
    }
    this.size++;
    return temp.val;
  }

}

let queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third'); // => [ third, second, first] 
queue.dequeue(); // => 'first'






