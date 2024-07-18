JS 102: Password Protected
We are going to use our newfound JavaScript knowledge to make a secret only available to people who know the correct password.

We will use:

variables
if statements
loops
functions
Use the following values exactly for the correct password and secret:

Correct password	myPassword1!
Secret	My favourite colour is #000080!
Our Plan
Store the correct password (see above) in a variable

Store the secret information (see above) in a variable

Create a variable to keep track of how many times the user has entered an incorrect password

Prompt the user for input (ask them to enter the correct password)

Check whether the correct password matches the user's input:

If it does, reveal the secret information using an alert and then stop here.
Otherwise, increment their number of incorrect passwords by one.
If their number of incorrect passwords is 3 or more, do not let them try again as they've run out of attempts.
Otherwise go back to step 4 and let them try again.
Part A - Getting set up
In this repository, create an HTML file called index.html and a JS file in which to complete the following steps.
Have the HTML load the JS file.
Within the JS file, store the correct password ("myPassword1!") in a variable as a string and the secret information ("My favourite colour is #000080!") in another variable as a string.
🧪 To check that this step is working, console.log the variables you've created and make sure they contain the correct values. You can also temporarily add a console.log("Hello from JS file"); at the top of your JS file and then check if that log appears in the console (open dev tools) when you open the HTML file in a browser. If it doesn't, the JS file may not be linked correctly.

Part B - Getting user input
We will be using the built in prompt function to "prompt" the user for an input:
// Just an example. Should pop up an input box in the browser saying "Please enter the password."
// If we wanted to change the message, we'd change the text between the parentheses.
prompt("Please enter the password.");
We hand in what we want the prompt to say as an argument, and prompt returns us what the user entered. At the moment we are not doing anything with the return value of prompt (in other words, what the user entered). Change this it so that we save the user's input in a variable.
🧪 To check that this step is working, load the page in a browser and make sure a prompt appears. You can also temporarily console.log the variable you have made to see if it contains what you typed into the prompt.

Part C - Checking the user's input
Now that we have the user's input stored in a variable, we can compare it against the correct password. If it is correct, we should then display an alert (using the built in alert function) which reveals the secret information.
// Just an example. Should pop up an alert in the browser saying "The sky is blue"
// If we wanted to change the displayed message, we'd change the string between the parentheses.
alert("The sky is blue");
To check the user's input is equal to the correct password, we can use === as an equality operator.
// Just an example involving made up variables a and b. The below evaluates to a boolean (true/false) based on whether the variables a and b are equal.
a === b;
Use an if statement to alert your message only when the password is correct.
🧪 To check that this step is working, load the page in a browser, type in the correct password and make sure an alert pops up and reveals the secret information. Then refresh the page, type in an incorrect password and make sure no alert pops up.

Part D - Letting the user try again!
We now want to let the user try again if the password they entered was incorrect, but we should only give them 3 attempts in total. We can have the code loop around the part where we ask for the password using a loop.
// Just an example.
while (condition) {
  // ask the user for the password
  // give secret and stop the loop if correct
}
We only want the loop to repeat if the count of previous guesses is less than three. This means that we will need to keep track of the number of attempts.

👉 Declare a variable at the top of your code called attempts with the value of 0. We will add one to this variable each time the user makes an incorrect guess.

👉 Use the variable attempts in the condition of the loop. We want the while loop to run as long as attempts are less than 3.

👉 If the user enters the wrong password, we want to add 1 to the attempts variable. If they are correct, we want to stop looping.

🧪 To check that this step is working, load the page in a browser, type in the correct password and make sure an alert pops up and reveals the secret information. Once you've dismissed the alert, you shouldn't be prompted again to enter a password (in other words, the loop should stop when you enter the correct password). Then refresh the page, type in an incorrect password and make sure no alert pops up. You should be able to enter an incorrect password two more times.

Part E - Functions
New Plan
Declare a function that will prompt the user for input - a password in our case. In this function, we want to:
Store that password in a variable within the function
Check whether the password matches the correct password (same as above):
If it does, return true from the function.
If it doesn't, let them try again.
If they fail three times in a row, do not allow them any more tries, and return false from the function.
console.log thw secret information (same as above) only if the function returned true.
👉 Refactor the code you have written into a function called authenticateUser. Have that function return true if the user logged in successfully with the correct password and false if they got the password wrong more than three times. You can put most of the code you have already written in the previous steps into the function, but don't reveal the secret yet. The function should be used like this:

function authenticateUser() {
  // prompt for password and handle login attempts here
}
// get answer here
let isLoggedIn = authenticateUser();

// you should reveal the secret after the function is called using the boolean isLoggedIn
Part F - The End
Well done! You've successfully implemented a password checking system.

Next steps...

Split up the functionality into more functions; each function should only do one thing.
Let the user know how many attempts they have left.
Delete the code (or parts of it) and practice remembering what you did and writing it out again, this will really help embed your new skills.
Let your imagination run wild, and make something else using the same logic.