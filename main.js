// vars for selection
const clearButt = document.querySelector('.clear');
const equalButt = document.querySelector('.equal');
const multiButt = document.querySelector('.multi');
const divButt = document.querySelector('.div');
const subButt = document.querySelector('.sub');
const addButt = document.querySelector('.add');
const input = document.querySelector('.input');
const dot = document.querySelector('.dot');

// vars for numbers
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');


// vars for operations
let operand1 = '';
let operand2 = '';
let operator = '';

// functions for non number buttons
function clear() {
  input.textContent = '';
  operand1 = '';
  operand2 = '';
  operator = '';
}

function div() {
    operator = '/';
    input.textContent = `${parseFloat(operand1)} /`;
}

function sub() {
    operator = '-';
    input.textContent = `${parseFloat(operand1)} -`;
}

function add() {
    operator = '+';
    input.textContent = `${parseFloat(operand1)} +`;
}

function multi() {
    operator = '*';
    input.textContent = `${parseFloat(operand1)} *`;
}

function equal() {
    if (operator === '+') {
      input.textContent = parseFloat(parseFloat(operand1) + parseFloat(operand2));
    } else if (operator === '-') {
      input.textContent = parseFloat(parseFloat(operand1) - parseFloat(operand2));
    } else if (operator === '*') {
      input.textContent = parseFloat(parseFloat(operand1) * parseFloat(operand2));
    } else {
      input.textContent = parseFloat(parseFloat(operand1) / parseFloat(operand2));
    }
}

function dotMeLikeAHurricane() {
  if (operand2 === '') {
    operand1 += '.';
    input.textContent = `${operand1}`;
  } else {
    operand2 += '.'
    input.textContent = `${operand1} ${operator} ${operand2}`;
  }
}

// function for numbers
function numPicker (number) {
  if (operator === '') {
  input.textContent =  `${(operand1 += number)}`;
  } else {
  input.textContent = `${operand1} ${operator} ${(operand2 += number)}`
  }
}





// event listeners for numbers
one.addEventListener('click', function(){
    numPicker(1);
}, false);
two.addEventListener('click', function(){
    numPicker(2);
}, false);
three.addEventListener('click', function(){
    numPicker(3);
}, false);
four.addEventListener('click', function(){
    numPicker(4);
}, false);
five.addEventListener('click', function(){
    numPicker(5);
}, false);
six.addEventListener('click', function(){
    numPicker(6);
}, false);
seven.addEventListener('click', function(){
    numPicker(7);
}, false);
eight.addEventListener('click', function(){
    numPicker(8);
}, false);
nine.addEventListener('click', function(){
    numPicker(9);
}, false);
zero.addEventListener('click', function(){
    numPicker(0);
}, false);



// event listeners for non numbers
equalButt.addEventListener('click', equal);
clearButt.addEventListener('click', clear);
multiButt.addEventListener('click', multi);
divButt.addEventListener('click', div);
subButt.addEventListener('click', sub);
addButt.addEventListener('click', add);
dot.addEventListener('click', dotMeLikeAHurricane);
