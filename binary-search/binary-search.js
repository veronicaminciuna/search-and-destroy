'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//find the midpoint of the array
	let middle = Math.floor(array.length/2)
	//divide array into left and right sub arrays
	let leftArray = array.slice(0, middle)
	let rightArray = array.slice(middle, array.length)

	//if the array only has one element and it's not equal to target, return false
	if (array.length ===1 && array[0] !== target) {
		return false
	} 

	if (array[middle]===target) {
		return true
	} else if (array[middle]<target) {
		return binarySearch(rightArray, target)
	} else if (array[middle]>target) {
		return binarySearch(leftArray, target)
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch