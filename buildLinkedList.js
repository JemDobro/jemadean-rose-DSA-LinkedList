'use strict';

const _Node = require ('/.buildNode');

class LinkedList {
  constructor() {
    this.head=null;  //head indicates beginning of list & always contains first node.  Null is empty list.
  }

  //Inserting at beginning of list
  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  //Inserting at end of list
  insertLast(item) {
    if(this.head === null){ 
      this.insertFirst(item); //check to see if list empty, if yes, use insertFirst
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){ 
        tempNode = tempNode.next; //start at beginning and loop through all nodes checking to see if they have a next value (ptr to next node) until you get to the one that does not--this is the last node
      }
      tempNode.next = new _Node(item, null); //set the last item to point to the new item
    }
  }

  //Retrieving values 
  find(item) {
    let currNode = this.head; //start at the head
    if (!this.head){
      return null; //if list is empty, return null
    }
    while(currNode.value !== item) { //loop through list until null is returned or value is found
      if (currNode.next === null) { //means you got to end of list and value was not found
        return null;
      }
      else {
        currNode = currNode.next;  //otherwise keep looking
      }
    }
    return currNode; //found it
  }

  //Removing values
  remove(item){
    if (!this.head){ //if list is empty, return null
      return null;
    }
    if(this.head.value === item){ 
      this.head = this.head.next; 
      return; //if the item is at the beginning of the list, change the first item to the item the current first item points to and get out
    }
    let currNode = this.head; //start at the head
    let previousNode = this.head; //keep track of previous
    while ((currNode !== null) && (currNode.value !== item)) {  //loop through looking for node where item matches value--if currNode has a value and that value is not the item,
      previousNode = currNode; //save the previous node
      currNode = currNode.next; //now currNode is the new one you are looking at 
    }
    if(currNode === null){
      console.log('Item not found');
      return; //if you get to an empty node, you are at the end of the list, return a not found msg
    }
    previousNode.next = currNode.next; //item was found, change the previous nodes ptr to equal the ptr of the item you are removing--this removes the item you were looking for, and keeps the links intact through list
  }  //this covers deleting from beginning of list and middle of list, and end of list (previousNode.next will just be equal to node now as it is the new end)
}