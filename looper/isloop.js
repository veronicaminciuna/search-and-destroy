'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let slow = linkedlist.head
    let fast = linkedlist.head
    if(linkedlist.head !== null) {
        while(slow !== null && fast !== null && fast.next !==null) {
            slow = slow.next 
            fast = fast.next.next 
            if( slow === null || fast === null) {
                return false
                }
            if (slow == fast) return true;
        } 
    } 
    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop