'use strict';

//This takes a linked list, and starting at the beginning, looks at the value of the first node, and then, starting one node forward, checks the remaining nodes forward looking for a matching value(looking for duplicate values).  If a matching value is found, it skips over it to check the remaining values.  Once it has completed that for the first node, it will move to the second node, then the thid, etc until the end of the list.  Runtime is polynomial O(n^2).

function WhatDoesThisProgramDo(lst){  
  let current = lst.head;  
  while(current !== null){  
    let newNode = current;   
    while (newNode.next !== null) {  
      if (newNode.next.value === current.value) { 
        newNode.next = newNode.next.next;   
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}