const timer = document.getElementById("timer");
let sec = 0;
let min = 0;
let hour = 0;
let timerStarted = false;

function start() {
    timerStarted = true;
    startTimer();
}

function startTimer() {
    if(timerStarted){
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);

    sec = sec + 1;
    if(sec == 60){
        min = min + 1;
        sec = 0;
    }
    if(min == 60){
        hour = hour + 1;
        min = 0;
        sec = 0;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (hour < 10){
        hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + min + ":" + sec;

    setTimeout(startTimer,1000); 
}   
}

function stop() {
    timerStarted = false;
}

function reset() {
    timerStarted = false;
    timer.innerHTML = "00" + ":" + "00" + ":" + "00";
}
