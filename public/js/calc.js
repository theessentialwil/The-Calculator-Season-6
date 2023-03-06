function addNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const sum = num1 + num2;

  // Display the result in the paragraph element
  document.getElementById('result').value = `${num1}+${num2} = ${sum}`;
}

function subtractNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const difference = num1 - num2;

  // Display the result in the paragraph element
  document.getElementById('result').value = `${num1}-${num2} = ${difference}`;
}

function multiplyNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const product = num1 * num2;

  // Display the result in the paragraph element
  document.getElementById('result').value = `${num1}*${num2} = ${product}`;
}

function divideNumbers() {
  // Get the values of the input elements
  const num1 = parseInt(document.getElementById('num1').value, 10);
  const num2 = parseInt(document.getElementById('num2').value, 10);

  // Add the two numbers together
  const quotient = num1 / num2;

  // Display the result in the paragraph element
  document.getElementById('result').value = `${num1}/${num2} = ${quotient}`;
}

function clearScreen() {
  document.getElementById('result').textContent = '';
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
}

// export default {
//   addNumbers,
//   subtractNumbers,
//   multiplyNumbers,
//   divideNumbers,
//   clearScreen,
// };
