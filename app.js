
var zero =document.getElementById('zero');

var number = "0";

function plus() {
var running_number = number++
    zero.innerText =running_number;
    if (running_number < 9) {
        zero.innerText = "0" + number;
    } else {
        zero.innerText =number;

    }
}



function minus() {
var running_number = --number
    zero.innerText =running_number;

    if (running_number <= 9) {
        zero.innerText = "0" + number;
    } else {
        zero.innerText =number;

    }
}


function reset() {
    zero.innerText = '00';
}