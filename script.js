console.log("Password Protection");
// Within the JS file, store the correct password ("myPassword1!")
// in a variable as a string and
// the secret information ("My favourite colour is #000080!")
// in another variable as a string.
console.log("Part A - Getting set up");
let correctPassword = "myPassword1!";

let secret = "My favourite colour is #000080!";

// To check that this step is working,
// console.log the variables you've created
// and make sure they contain the correct values.

console.log(correctPassword);
console.log(secret);

console.log("*".repeat(20));

console.log("Part B - Getting user input");

// We will be using the built in prompt function
// to "prompt" the user for an input:
// save the user's input in a variable.

// let userInput = prompt("Please enter the password: ");
// console.log(userInput);

console.log("*".repeat(20));

console.log("Part C - Checking the user's input");

// Now that we have the user's input stored in a variable,
//  we can compare it against the correct password.
//  If it is correct,
//  we should then display an alert
//  (using the built in alert function)
//  which reveals the secret information.

// if (userInput === correctPassword) {
// 	alert("Correct password 🔑");
// }
console.log("*".repeat(20));

console.log("Part D - Letting the user try again!");

// We now want to let the user try again
//  if the password they entered was incorrect,
//  but we should only give them 3 attempts in total.
//  We can have the code loop around
//  the part where we ask for the password using a loop.

// We only want the loop to repeat
// if the count of previous guesses is less than three.
// This means that we will need to
// keep track of the number of attempts.

// Declare a variable at the top of your code
// called attempts with the value of 0.
// We will add one to this variable each time
// the user makes an incorrect guess.

let attempts = 0;

while (attempts < 3) {
	let userInput = prompt("Please enter the password: ");
	console.log(userInput);

	if (userInput === correctPassword) {
		alert("Correct password 🔑");
		break;
	} else {
		attempts += 1;
		console.log("attempts: " + attempts);
		if (attempts === 3) {
			alert("Invalid password");
		}
	}
}
