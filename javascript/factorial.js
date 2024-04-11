var userInput = Prompt("Enter a number:");
var number = parseInt(userInput);
var factorial = 1;
for (var i = 2; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);