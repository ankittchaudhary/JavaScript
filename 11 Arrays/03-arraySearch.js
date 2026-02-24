//The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"))    //0 as it returns the first index of the element
console.log(fruits.indexOf("Mango"))    //3
console.log(fruits.indexOf("Banana"))   //-1 as it is not present in the array

//array.indexOf(item, start)
//item	Required. The item to search for.
//start	Optional. The position to start the search. Default is 0.
const numbers = [2, 5, 9, 2];
console.log(numbers.indexOf(2))      //0
console.log(numbers.indexOf(2, 1))   //3 as it starts searching from index 1 and finds the next occurrence of 2 at index 3

//lastIndexOf() method returns the last index of a specified value in an array, or -1 if it is not found. The array is searched backwards, starting at fromIndex.
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"))   //3 as it returns the last index of the element
console.log(animals.lastIndexOf("Tiger"))  //1
console.log(animals.lastIndexOf("Monkey")) //-1 as it is not present in the array