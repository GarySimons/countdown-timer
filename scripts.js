// global variable to store setInterval on screen
let countdown; 
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    // get the current time to know when timer starts
    const now = Date.now();
    // how long to run it for (when it stops)
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    // set it to run every second
    countdown = setInterval(() => {
        // how much time left on clock. Math.round rounds the numbers to whole
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check to see if we should stop it if secondsLeft is less than 0
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    // variable for minutes. Math.floor rounds down the number so you get whole minutes
    const minutes = Math.floor(seconds / 60);
    // How many seconds left seconds devided by 60
    const remainderSeconds = seconds % 60;
    // Displaying time - miutes and seconds remaiing
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    // displays the time in the title tab
    document.title = display;
    timerDisplay.textContent = display;
}