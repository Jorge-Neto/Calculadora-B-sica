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
  lastValue.innerHTML = ' ';
  previous, (actual = 0);
  operation = '';
}

function setResult() {
  actual = parseFloat(inputResult.value);
  lastValue.innerHTML += ' ' + actual + ' =';

  verifyOperation()

  hasResults = true;
  previous = 0;
  actual = 0;
}

function verifyOperation() {
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
  }

}

function verifyResults(value) {
  if (hasResults === true) {
    inputResult.value = '';
    hasResults = false;
  }
  setNumber(value);
}

function setNumber(number) {
  inputResult.value += number;
}

