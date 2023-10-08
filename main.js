function add(a,b) { return a+b }

function subtract(a,b) { return a-b }

function multiply(a,b) { return a*b }

function divide(a,b) { return a/b }

var number1 = 0;
var number2 = 0;
var operator = '';
var bottomDisplay = '';
var topDisplay = 0;

function operate(a,b,operator){
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
            break;
        case '÷':
            return divide(a,b);
            break;
    
        default:
            break;
    }
}

function keyListener(id, display) {
    let element = document.getElementById(id)
    element.addEventListener('click', (e) => {
        if (id != 'equal' || id != 'delete' || id != 'clear')  {
                displayBottomRow(display);
        }
        if (id == 'equal') {
                separateOperators();
                bottomDisplay = '';
                displayBottomRow('');
                }
        if (id == 'delete'){
                bottomDisplay = '';
                operator = '';
                displayBottomRow('');
        }
        if (id == 'clear'){
                bottomDisplay = '';
                topDisplay = 0;
                number1 = '';
                number2 = '';
                operator = '';
                displayBottomRow('');
                displayTopRow('');
        }
    });
}

function separateOperators(){
    while (bottomDisplay.length > 2){

    // Get the 1st number
    if (number1 == ''){
    number1 = bottomDisplay.substring(0, bottomDisplay.indexOf(" "));
    } else {number1 = topDisplay;}

    // Get the operator
    operator = bottomDisplay.substring(bottomDisplay.indexOf(" ") +1, bottomDisplay.indexOf(" ") + 2);
    bottomDisplay = bottomDisplay.substring(bottomDisplay.indexOf(" ") + 3, bottomDisplay.length);
    
    // Get the 2nd number
     number2 = bottomDisplay.substring(0, bottomDisplay.indexOf(" "));
    bottomDisplay = bottomDisplay.substring(bottomDisplay.indexOf(" "), bottomDisplay.length - 1);

    
    displayTopRow(operate(parseInt(number1), parseInt(number2), operator));
    } 
}

function displayBottomRow(a){
    let element = document.getElementById("bottom-row");
    bottomDisplay += a;
    element.innerHTML = bottomDisplay;
}

function displayTopRow(a) {
    let element = document.getElementById("top-row");
    topDisplay = a;
    element.innerHTML = topDisplay;
}

keyListener(7, 7);
keyListener(8, 8);
keyListener(9, 9);
keyListener('divide', ' ÷ ');
keyListener(4, 4);
keyListener(5, 5);
keyListener(6, 6);
keyListener('multiply', ' x ');
keyListener(1, 1);
keyListener(2, 2);
keyListener(3, 3);
keyListener('subtract', ' - ');
keyListener('dot', ' . ');
keyListener(0, 0);
keyListener('equal', ' = ');
keyListener('add', ' + ');
keyListener('clear', '');
keyListener('delete','');
