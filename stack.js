/*
	Stack
	The right way to implement stacks is using nodes. Stacks follow LIFO and
	they are use for the browser next/last page.
	
	Methods:
	  insertion O(1)
	  removal O(1)

	Note: Not ideal but we can reuse methods of array in a stack:
	var stackArray = [];
	stackArray.push(2);   // => [2]
	stackArray.push(5);  // => [2,5]

	console.log(stackArray); // => [2,5] 

	var i = stack1.pop(); // => 5

	console.log(stackArray); // => [2]
*/
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	} 
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// adds a node at the biginning
	push(val) {
		let newNode = new Node(val);
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			let temp = this.first;
			this.first = this.first.next;
			this.first.next = temp;
		}
		this.size++;
		return this;
	}

	// removes first node
	pop() {

		if(!this.first) return null;

		let remove = this.first;
		if(this.first === this.last) {
			this.last = null;
		}
		else {
			this.first = this.first.next;
		}
		this.size--;
		return remove.val;
	}


}
let s = new Stack();
s.push(1);
s.push(2);
s.pop(); // => 2 

