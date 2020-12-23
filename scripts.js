// global variable to store setInterval on screen
let countdown; 
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
// Timer Buttons
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // when new timer starts, this clears any existing timers 
    clearInterval(countdown);
    
    // get the current time to know when timer starts
    const now = Date.now();
    // how long to run it for (when it stops)
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    // show the end time of a break. (then) is the display time
    displayEndTime(then)
    
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
    // Displaying time - minutes and seconds remaiing
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    // displays the time in the title tab
    document.title = display;
    timerDisplay.textContent = display;
}

// Show timer ending time
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    // gets the hour
    const hour = end.getHours();
    // get the minutes
    const minutes = end.getMinutes();
    // shows when to be back (hour > 12 ? hour - 12 : hour) makes it a 12 hr clock
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// function to start the times from the boxes
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    // displays the countdown
    timer(seconds);
}

// Event listener for click on buttons that then starts the timer countdown
buttons.forEach(button => button.addEventListener('click', startTimer));