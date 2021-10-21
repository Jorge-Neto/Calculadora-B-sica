actual = 0;
previous = 0;
operation = '';
hasResults = false;

inputResult = document.getElementById('result');
lastValue = document.getElementById('lastValue');

function setZero() {
  if (previous != 0) {
    inputResult.value = '0';
  } else {
    inputResult.value = '';
  }
}

function clearInput() {
  inputResult.value = '';
  lastValue.innerHTML = '&nbsp';
  previous, (actual = 0);
  operation = '';
}

function setResult() {
  if (inputResult.value != '' && operation != '') {
  actual = parseFloat(inputResult.value);
  lastValue.innerHTML += ' ' + actual + ' =';

  calculate()

  hasResults = true;
  operation = '';
  previous = 0;
  actual = 0;
  }

  
}

function calculate() {
  if (operation == '+') {
    actual = previous + actual;
    inputResult.value = actual;
  } else if (operation == '-') {
    actual = previous - actual;
    inputResult.value = actual;
  } else if (operation == '*') {
    actual = previous * actual;
    inputResult.value = actual;
  } else if (operation == '/') {
    actual = previous / actual;
    inputResult.value = actual;
  }
}

function setOperation(op) {
  if (inputResult.value != '' && inputResult.value != null) {
    operation = op;
    previous = parseFloat(inputResult.value);
    lastValue.innerHTML = previous + ' ' + operation;
    inputResult.value = '';
  } else if (inputResult.value == '' && op === '-') {
    operation = op;
    previous = 0;
    lastValue.innerHTML = previous + ' ' + operation;
    inputResult.value = '';
  }

}

function verifyInput(value) {
  if (hasResults === true) {
    inputResult.value = '';
    hasResults = false;
  }
  setNumber(value);
}

function setNumber(number) {
  inputResult.value += number;
}

function backspaceFunction() {
  let aux1 = inputResult.value;
  let aux2 = aux1.substring(0, aux1.length - 1);
  inputResult.value = aux2;
}