var userInput = prompt("Enter an array of numbers separated by commas:");
var array = userInput.split(",").map(function(item) {
  return parseInt(item);
});

var largestNumber = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] > largestNumber) {
    largestNumber = array[i];
  }
}

console.log("The largest number in the array is: " + largestNumber);