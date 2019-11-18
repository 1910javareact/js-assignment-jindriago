/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  
let temp;

		for(let i = 0; i < numArray.length - 1; i++) {
			for(let j = 1; j < numArray.length - i; j++) {
				if(numArray[j - 1] > numArray[j]) {
					 temp = numArray[j];
                     numArray[j] = numArray[j - 1];
                     numArray[j - 1] = temp;
				}
			}
		} return numArray;
	} console.log(bubbleSort([112,4,10,31,52]));
    