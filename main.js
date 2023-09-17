function add(a,b) { return a+b }

function subtract(a,b) { return a-b }

function multiply(a,b) { return a*b }

function divide(a,b) { return a/b }

var number1;
var number2;
var operator;
var bottomDisplay = '';

function operate(a,b,operator){
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    
        default:
            break;
    }
}

function keyListener(id, display) {
    let element = document.getElementById(id)
    element.addEventListener('click', (e) => {
        displayBottomRow(display)
    });
}

function displayBottomRow(a){
    let element = document.getElementById("bottom-row");
    bottomDisplay += a;
    element.innerHTML = bottomDisplay;
}

keyListener(7, 7);
keyListener(8, 8);
keyListener(9, 9);
keyListener('divide', '÷');
keyListener(4, 4);
keyListener(5, 5);
keyListener(6, 6);
keyListener('multiply', 'x');
keyListener(1, 1);
keyListener(2, 2);
keyListener(3, 3);
keyListener('subtract', '-');
keyListener('dot', '.');
keyListener(0, 0);
keyListener('equal', '=');
keyListener('add', '+');
