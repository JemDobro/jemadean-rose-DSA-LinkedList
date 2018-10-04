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
  // SLL.insertAt(3, 'Kat');
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.remove('Tauhida');

  // console.log(JSON.stringify(SLL));

  //need a while loop to look at each item in the list
  //for each item, console.log(value)
  function display(lnkdlst) {
    let currNode = lnkdlst.head;
    while(currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  //size: returns the size of the linked list.
  function size(lnkdlst) {
    let currNode = lnkdlst.head;
    let count = 0;
    while(currNode !== null) {
      currNode = currNode.next; //loop through the list and increment the count 
      count++;
    }
    console.log(count);
  }

  function isEmpty(lnkdlst) {
    if(lnkdlst.head === null) {
      console.log('List is empty');
    }
    else {
      console.log('List is not empty');
    } 
  }

  //findPrevious: finds the node before the item you are looking for
  function previous(lnkdlst, item) {
    let currNode = lnkdlst.head;
    let previousNode = lnkdlst.head;
    if(!lnkdlst.head) {
      return null;
    }
    while(currNode !== item && currNode !== null) {
      if(currNode.next === null) {
        return null;
      }
      previousNode = currNode;
      currNode = currNode.next; 
    }
    //currNode === item 
   
    console.log(currNode); 
    return currNode;  
    
  }
 
  // display(SLL);
  // size(SLL);
  isEmpty(SLL);
  previous(SLL, 'Boomer');
  
}

main();

