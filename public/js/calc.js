function addNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  // Add the two numbers together
  const sum = num1 + num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `${num1}+${num2} = ${sum}`;

  document.getElementById('operand').textContent = '+';
}

function subtractNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  // Add the two numbers together
  const difference = num1 - num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `${num1}-${num2} = ${difference}`;

  document.getElementById('operand').textContent = '-';
}

function multiplyNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  // Add the two numbers together
  const product = num1 * num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `${num1}*${num2} = ${product}`;

  document.getElementById('operand').textContent = '*';
}

function divideNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  // Add the two numbers together
  const quotient = num1 / num2;

  // Display the result in the paragraph element
  document.getElementById('result').textContent = `${num1}/${num2} = ${quotient.toFixed(2)}`;

  document.getElementById('operand').textContent = '/';
}

function clearScreen() {
  document.getElementById('result').textContent = '';
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operand').textContent = '';
}
