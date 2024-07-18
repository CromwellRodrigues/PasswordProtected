console.log("Password  Protected function");
console.log("myPassword1!");

window.onload = function () {
	const password = "myPassword1!";

	const secret = "My favourite color is #000080!";

	// Part E - Functions

	// Declare a function that will prompt the user for input
	// - a password in our case.
	// In this function, we want to:
	// Store that password in a variable within the function
	// Check whether the password matches the correct password (same as above):
	// If it does, return true from the function.
	// If it doesn't, let them try again.
	// If they fail three times in a row,
	// do not allow them any more tries,
	// and return false from the function.
	// console.log thw secret information
	// (same as above) only if the function returned true.

	function authenticateUser() {
		let attempts = 0;

		while (attempts < 3) {
			let userInput = prompt("Please enter the password");

			if (userInput === password) {
				console.log(userInput);
				// alert(secret);
				return true;
			} else {
				attempts += 1;
				console.log(`You have ${3 - attempts} attempts left`);
				console.log("attempts : " + attempts);
				if (attempts === 3) {
					userInput = alert("invalid input");
					return false;
				}
			}
		}
	}

	let isLoggedIn = authenticateUser();

	if (isLoggedIn) {
		alert(secret);
	}
};
// Part F - The End
// Split up the functionality into more functions; each function should only do one thing.
// Let the user know how many attempts they have left.
