/*
The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
  // code block to be executed
}

The condition is evaluated before executing the code block. If the condition is true, the code block is executed. If the condition is false, the loop ends.

*/
i = 0;
while (i < 10) {
  console.log(i);
  
  if (i === 5) {
    break;  //break statement is used to exit the loop when i is 5   //exits the loop when i is 5 so 5 will not be printed
  }
  i++;
}
