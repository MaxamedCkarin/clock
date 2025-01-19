//clock
//variables
const hourHand = document.getElementById('hour')
const MinuteHand = document.getElementById('minute')
const SecondHand = document.getElementById('second')

//functions clock

function setTime() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60 
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    wareegSamee(SecondHand, secondRatio)
    wareegSamee(MinuteHand, minuteRatio)
    wareegSamee(hourHand, hourRatio)
}

function wareegSamee(element, rotaionRatio) {
    element.style.setProperty('--wareeg', rotaionRatio * 360);
}

setTime();
setInterval(setTime, 1000);




//buttons
//variables
const btnOne = document.getElementById('button1');
const btnTwo = document.getElementById('button2');
const btnThree = document.getElementById('button3');
const btnFour = document.getElementById('button4');
const clock = document.querySelector('.clock');
const buttons = document.querySelectorAll('.button');

//changing node list to an array-->
const buttonsAray = Array.from(buttons);

const colors = ['#fad490', '#f19292', '#edf0f2', '#ffff00',];

//Eventlistenners
buttonsAray[0].addEventListener('click', changeToOrange);
buttonsAray[1].addEventListener('click', changeToRed);
buttonsAray[2].addEventListener('click', changeToGray);
buttonsAray[3].addEventListener('click', changeToYellow);

function changeToOrange(){
    clock.style.background = colors[0];
}
function changeToRed(){
    clock.style.background = colors[1];
}
function changeToGray(){
    clock.style.background = colors[2];
}
function changeToYellow(){
    clock.style.background = colors[3];
}

//fuctions