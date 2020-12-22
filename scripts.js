// global variable to store setInterval on screen
let countdown; 


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
    console.log(seconds);
}