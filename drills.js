'use strict';
const LinkedList = require ('./buildLinkedList');
const linkedList = new LinkedList();

function main() {   
  let SLL = new LinkedList(); 
  SLL.insertFirst('Apollo');
  

  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  //remove squirrel from list 
  // SLL.remove('squirrel');

  //Implement a function called insertBefore() 
  //in the class that inserts a new node before a given node containing a key
  // SLL.insertBefore('Starbuck', 'newItem'); 
  SLL.insertAfter('Boomer', 'itemAfter');

  console.log(JSON.stringify(SLL));
  
}

main();