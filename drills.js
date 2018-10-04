'use strict';
const LinkedList = require ('./buildLinkedList');
const linkedList = new LinkedList();

function main() {   
  let SLL = new LinkedList(); 
  SLL.insertFirst('Apollo');
  console.log(SLL);
}
main();