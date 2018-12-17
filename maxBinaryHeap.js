/*
Heap: is type of tree that can have 2 children but there is not order between left/right is just that root is largest. Left children are filled out first.

  types:
    - Max: 
        parents nodes are always hihgers than child nodes
Rules:
parents > childs notes 

    Example:
           100
        19    36
      17  3  25  1
    2   7

    - Min:
        parents nodes are always smaller than child nodes
 
Rules:
parents < childs notes 

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
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
//output=> [ 55, 39, 41, 18, 27, 12, 33 ]


