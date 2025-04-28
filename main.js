


// const btns = document.querySelectorAll('.button');


// let firstNumber = '';
// let operation = '';
// let secondNumber = '';

// console.log(btns);

// btns.forEach((btn)=>{
//     btn.addEventListener('click',(event)=>{
//         console.log('clicked')
//         console.log(event)  //typeof event, target,
//         console.log(event.target)
//         console.log(event.target.innerText); // what the element contains
//         pressBtn(event.target.innerText);
//     })
    
// })

// function pressBtn(buttonTitle){
//     if(buttonTitle === "+" || 
//         buttonTitle === "-" || 
//         buttonTitle === "/" || 
//         buttonTitle === "*"
//     ){
//         if(firstNumber.length > 0){
//             operation = buttonTitle
//             display()
//         }
//     }else if(buttonTitle === '1' || 
//             buttonTitle === '2' || 
//             buttonTitle === '3' || 
//             buttonTitle === '4' || 
//             buttonTitle === '5' || 
//             buttonTitle === '6' || 
//             buttonTitle === '7' || 
//             buttonTitle === '8' || 
//             buttonTitle === '9'){
//         if(firstNumber.length > 0  && operation.length > 0){ //if we have a first num and operator, concat the second num
//             secondNumber += buttonTitle
//             display()
//         }else if(operation.length === 0) //if no operator, concat first num
//             firstNumber += buttonTitle
//             display()
//     }
// }

// function display(){
//     const display = document.querySelector('#display');
//     display.innerText = firstNumber + operation + secondNumber;

// }

// console.log(eval("20+5"));


// // switch statements

// switch(buttonTitle){
//     case "+": 
//     case "-":
//     case "/":
//     case "x":{
//         //logic goes here 
//         if(firstNumber.length > 0){
//             operation = buttonTitle
//             display();
//         }
//         //return or break 
//         break;
//     }
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9': {

//     }
    
//     case ".": {

//     }

//     case "c": {

//     }

// }

const btns = document.querySelectorAll('.button');
const displayElement = document.querySelector('#display');

let firstNumber = '';
let operation = '';
let secondNumber = '';

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        pressBtn(event.target.innerText);
    });
});

function pressBtn(buttonTitle) {
    switch(buttonTitle) {
        case "+":
        case "-":
        case "/":
        case "x": {
            if (firstNumber.length > 0 && secondNumber.length === 0) {
                operation = buttonTitle;
                updateScreen();
            } else if (firstNumber.length > 0 && secondNumber.length > 0) {
                calcResult();
                operation = buttonTitle;
                updateScreen();
            }
            break;
        }
        case "=": {
            if (firstNumber && operation && secondNumber) {
                calcResult();
                updateScreen();
            }
            break;
        }
        case "C": {
            clearScreen();
            break;
        }
        case ".": {
            if (operation === '') {
                if (!firstNumber.includes('.')) {
                    firstNumber += '.';
                    updateScreen();
                }
            } else {
                if (!secondNumber.includes('.')) {
                    secondNumber += '.';
                    updateScreen();
                }
            }
            break;
        }
        default: { // Handle number presses
            if (!isNaN(buttonTitle)) {
                if (operation === '') {
                    firstNumber += buttonTitle;
                } else {
                    secondNumber += buttonTitle;
                }
                updateScreen();
            }
        }
    }
}

function calcResult() {
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "x") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    }

    firstNumber = result.toString();
    operation = '';
    secondNumber = '';
}

function clearScreen() {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    updateScreen();
}

function updateScreen() {
    displayElement.innerText = firstNumber + operation + secondNumber;
}
