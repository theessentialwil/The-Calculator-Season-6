function addNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const sum = num1 + num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `Result = ${sum}`;
}

function subtractNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const difference = num1 - num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `Result = ${difference}`;
}

function multiplyNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const product = num1 * num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `Result = ${product}`;
}

function divideNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const quotient = num1 / num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `Result = ${quotient.toFixed(2)}`;
}

module.exports = {
  addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,
};
