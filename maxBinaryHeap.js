/*
Heap: is type of tree that can have 2 children but there is not order between left/right is just that root is largest. Left children are filled out first.

  types:
    - Max: 
        parents nodes are always hihgers than child nodes
Rules:
parents > children notes 

    Example:
           100
        19    36
      17  3  25  1
    2   7

    - Min:
        parents nodes are always smaller than child nodes
 
Rules:
parents < children notes 

    Example:        
           1
        2       3
     17   19 36  7
   25 100

   FORMULAS:
    parent_formula = floor(idx-1)/2;
    left_child_formula = idx * 2 + 1;
    right_child_formula = idx * 2 + 2;

*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  
  // push an element & calls bubbleUp
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  /*
    place correctly the last val inserted so that follows the rules of a maxbianryheap
    - check if idxVal of element < parentVal then break
    - else:
      - swap idx = values[parentIdx] & parentIdx = values[idx] 
      - update idx = parentIdx
  */
  bubbleUp() {
    let idx = this.values.length-1;
    let idxVal = this.values[idx];
    
    while(idx > 0) {
      // parent_formula = (ind-1)/2;
      let parentIdx = Math.floor((idx-1)/2);
      let parentVal = this.values[parentIdx];

      if(idxVal <= parentVal) break;
      else {
        // swap them
        this.values[idx] = parentVal;
        this.values[parentIdx] = idxVal;
        // update idx equals parentIdx
        idx = parentIdx;
      }
    }
    console.log(this.values);
    // console.log('[ 55, 39, 41, 18, 27, 12, 33 ]');
  }

  removeMax() {
    let max = this.values[0];
    let end = this.values.pop();

    // if values is not empty then add the last one and call sinkDown to place in the right position
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    // while idx < length find children 
    while(idx < length) {
      let leftChildIdx = 2 * idx +1;
      let rightChildIdx = 2 * idx +2;
      let leftVal, rightVal;
      let swap = null;

      // if it's not out of bound then assign values & compare if(val> ele) swap
      if(leftChildIdx < length) {
        leftVal = this.values[leftChildIdx];
        // if leftVal > element then swap using the idx
        if(leftVal > element) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length) {
        rightVal = this.values[rightChildIdx];
        // if leftVal > element then swap using the idx
        if( 
            (swap === null && rightVal > element) ||
            (swap !== null && rightVal > leftVal)
          ) {
          swap = rightChildIdx;
        }
      }

      // if swap didn't change then break
      if(swap === null) break;
      // else swap the idx to the swapVal and vice versa & update the idx = swap to continue checking until we done
      else {
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

}

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
// console.log(heap.values) //output=> [ 55, 39, 41, 18, 27, 12, 33 ]

// then removeMax
heap.removeMax();
// console.log(heap.values); //=> [ 41, 39, 33, 18, 27, 12 ]
heap.removeMax();
console.log(heap.values);
heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();
console.log(heap.values);//=>[]


