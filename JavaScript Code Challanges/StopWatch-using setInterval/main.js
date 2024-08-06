const timer = document.getElementById("container");
let sec = 0;
let min = 0;
let hour = 0;
let timeStarted = false;
let setIntervalTimer;

function start() {
   timeStarted = true;
   setIntervalTimer = setInterval(startTimer,1000);
}

function startTimer() {
    if(timeStarted){
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour)
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hour++
        min = 0;
        sec = 0;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hour < 10){
        hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + min + ":" + sec;
}
}

function stop() {
    timeStarted = false;
    clearInterval(setIntervalTimer);
}
function reset() {
    sec = 0;
    min = 0;
    hour = 0;
    timeStarted = false;
    setIntervalTimer = null;
    timer.innerHTML = "00" + ":" + "00" + ":" + "00";
}