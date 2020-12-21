function timer(seconds) {
    // get the current time to know when timer starts
    const now = Date.now();
    // how long to run it for
    const then = now + seconds * 1000;
    consolelogo({now, then});

}