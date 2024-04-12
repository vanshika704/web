var userInput = prompt("enter array :");
var array = userInput.split(",").map(function(item) {
  return parseInt(item);
});
for(var i =0; i<=array.length;i++){
  if(array[i]%2===0){
    console.log("The even numbers are: ", array[i]);
  }
}