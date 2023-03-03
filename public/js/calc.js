function addNumbers() {
	// Get the values of the input elements
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);

	// Add the two numbers together
	let sum = num1 + num2;

	// Display the result in the paragraph element
	document.getElementById("result").textContent = "Result = " + sum;
}

function subtractNumbers() {
	// Get the values of the input elements
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);

	// Add the two numbers together
	let difference = num1 - num2;

	// Display the result in the paragraph element
	document.getElementById("result").textContent = "Result = " + difference;
}

function multiplyNumbers() {
	// Get the values of the input elements
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);

	// Add the two numbers together
	let product = num1 * num2;

	// Display the result in the paragraph element
	document.getElementById("result").textContent = "Result = " + product;
}

function divideNumbers() {
	// Get the values of the input elements
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);

	// Add the two numbers together
	let quotient = num1 / num2;

	// Display the result in the paragraph element
	document.getElementById("result").textContent =
		"Result = " + quotient.toFixed(2);
}

function clearScreen() {
	document.getElementById("result").textContent = "";
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
}
