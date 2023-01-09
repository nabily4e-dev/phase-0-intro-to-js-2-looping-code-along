function writeCards(names, event) {
	// Create an empty array to hold the messages
	const messages = [];

	// Iterate through the names array
	for (let index = 0; index < names.length; index++) {
		// create a message for each name using string interpolation
		const message = `Thank you, ${names[index]}, for the wonderful ${event} gift!`;

		// add the message the messages array
		messages.push(message);

		debugger;
	}

	// return the message array
	return messages;
}

// example function call
console.log(writeCards(["Mahmud", "Sami", "Ali"], "birthday"));

// write a count down function
function countDown(number) {
	// use a while loop to count down from the given number to 0
	while (number >= 0) {
		console.log(number--);
	}
}

// example function call
countDown(3);
