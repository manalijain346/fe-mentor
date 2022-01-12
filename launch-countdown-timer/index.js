var daysLabel = document.getElementById("days");
var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");

var Countdown = new Date(`Feb 15,2022, 00:00:00`).getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = Countdown - now;
    if (timeLeft <= 0) {
        clearInterval(x);
        console.log('CountDown Finished');
        return;
    }
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    var seconds = Math.floor((timeLeft / 1000) % 60);

    days = days < 10 ? "0" + days : days
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    daysLabel.innerHTML = days
    hoursLabel.innerHTML = hours
    minutesLabel.innerHTML = minutes
    secondsLabel.innerHTML = seconds

    
}, )