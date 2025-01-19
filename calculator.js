//variables
const allNumbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const equalButton = document.querySelector('.equal');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');

let sign = '';
let result = null;
let outputOne = '';
let outputTwo = '';
let dot = false;

allNumbers.forEach(Number => {
    Number.addEventListener('click', showNumber);
});

//show numbers
function showNumber(e){
    if(e.target.innerText === '.'&& !dot){
        dot = true;
    } else if(e.target.innerText === '.' && dot){
        return;
    }
    outputTwo = outputTwo + e.target.innerText;
    display2.innerText = outputTwo
}

//dislay result on the screen
symbols.forEach(symbol => {
    symbol.addEventListener('click', showResult)
})


//show result
function showResult(e){
    if(!outputTwo) result
    dot = false;
    const signName = e.target.innerText;

    if(outputOne && outputTwo && sign){
        checkCalCulation();
    } else {
        result = parseFloat(outputTwo);
    }
    clearMainDisplay(signName);
    sign = signName;
}
//check calCulation
function checkCalCulation(){
    if(sign === '×'){
        result = parseFloat(result) * parseFloat(outputTwo);
    }else if(sign === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    }else if(sign === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    }else if(sign === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    }else if(sign === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    }
}

//clear display
function clearMainDisplay(name = ''){
    outputOne += outputTwo + ' ' + name + ' ';
    display1.innerText = outputOne;
    display2.innerText = '';
    display3.innerText = result;
    outputTwo = '';
}

equalButton.addEventListener('click', Calculate)

function Calculate(){
    if(!outputOne || !outputTwo){
        return;
    } else{

        checkCalCulation();
        clearMainDisplay();
        display2.innerText = result;
        outputTwo = result;
        display3.innerText = '';
        outputOne = '';
    }
}

//cButton and ceButton
cButton.addEventListener('click', deleteAll);
ceButton.addEventListener('click', deleteLastinput);

function deleteAll(){
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
    outputOne = ''
    outputTwo = ''
    result = '';
}

function deleteLastinput(){
    display2.innerText = '';
    outputTwo = '';
}