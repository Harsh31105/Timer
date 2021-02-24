var sec = document.getElementById("sec");
var timer;

// Interval of Timer

function MisterInterval() {
    sec = document.getElementById("sec");
    timer = setInterval(() => {
        if (sec.value > 0) {
            sec.value--;
        }
        document.getElementById("display-screen").innerHTML = sec.value;

        if (sec.value == 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function startTimer() {
    MisterInterval();
    document.getElementById('start').disabled = true;
}

function pauseTimer() {
    clearInterval(timer);
    document.getElementById('start').disabled = false;
}