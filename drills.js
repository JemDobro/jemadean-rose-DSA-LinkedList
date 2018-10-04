'use strict';
const LinkedList = require ('./buildLinkedList');
const linkedList = new LinkedList();

function main() {   
  let SLL = new LinkedList(); 

  SLL.insertFirst('Apollo'); //starting at 0 or 1? start at 1 
  SLL.insertLast('Boomer'); 
  SLL.insertLast('Helo');   //insert Kat before Helo 
  SLL.insertLast('Husker');  //insert item at position 2 
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  

  //remove squirrel from list 
  // SLL.remove('squirrel');

  //Implement a function called insertBefore() 
  //in the class that inserts a new node before a given node containing a key
  // SLL.insertBefore('Starbuck', 'newItem'); 
  // SLL.insertAfter('Boomer', 'itemAfter');

  // SLL.insertAt(2, 'INSERTING AT');
  // SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAt(3, 'Kat');

  console.log(JSON.stringify(SLL));
  
}

main();