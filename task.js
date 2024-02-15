let secondsLeft = 59;

function countdown() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = secondsLeft;
    secondsLeft--;

    if (secondsLeft < 0) {
        alert("Вы победили в конкурсе!");
    } else {
        setTimeout(countdown, 1000);
    }
}

countdown();