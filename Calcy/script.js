let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
  currentExpression += value;
  display.value = currentExpression;
}
// '5+12'
function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function calculate() {
  try {
    currentExpression = eval(currentExpression).toString();
    display.value = currentExpression;
  } catch (error) {
    display.value = 'Error';
  }
}
