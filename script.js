let daysText = document.getElementById("days");
let hoursText = document.getElementById("hours");
let minutesText = document.getElementById("minutes");
let secondsText = document.getElementById("seconds");

let count = 1209600000;

let counter = setInterval(timer, 1000);

function timer() {
    let days = Math.floor(count / (1000 * 60 * 60 * 24));
    let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((count % (1000 * 60)) / 1000);

    (minutes < 10) ? minutes = "0" + minutes: minutes;
    (seconds < 10) ? seconds = "0" + seconds: seconds;
    (hours < 10) ? hours = "0" + hours: hours;
    (days < 10) ? days = "0" + days: days;
    
    daysText.innerText = days;
    hoursText.innerText = hours;
    minutesText.innerText = minutes;
    secondsText.innerText = seconds;

    count = count - 1000;
}