var endingTimer;
var timerBeginTime;
var timeSetToTimer;
var timeOver = false;
var timerIsRunning = false;

function setup() {
	createCanvas(640, 480);
	background(100);
	textSize(24);
	textAlign(CENTER);
}

function draw() {
	background(250);

	/// Subtract the time we STARTED the timer from our current clock time.
	var timeElapsed = millis() - timerBeginTime;
	/// Subtract the time ELAPSED from how long the timer SHOULD RUN
	/// and round it for our display.
	var timeRemainingRounded = Math.ceil((timeSetToTimer - timeElapsed) * 0.001);

	if (timerIsRunning) {
	/// Main behavior based on if the timer is finished.
	if (timeOver != true) {
		text("Time remaining: " + timeRemainingRounded, width/2, height/2);
	}
	else {
		text("GAME OVER!", width/2, height/2);
	}
	}
	else {
		text("Press 's' to start the timer,\npress 't' to add 5 seconds to the timer.", width/2, height/2);
	}

}

function keyPressed() {

	if (key == "s" || key == "S") {
		console.log("Starting timer...");
		timerIsRunning = true;

		/// Set our "begin time" to the current clock time
		timerBeginTime = millis();
		/// We will have a 10 second timer
		timeSetToTimer = 10000;
		/// Create our actual Timeout timer
		endingTimer = setTimeout(endTimer, timeSetToTimer);

	}

	if (key == "t" || key == "T") {
		console.log("Adding time...");
		addTime();
	}

}

function addTime() {

	/// We will add 5 seconds
	var timeToAdd = 5000;
	/// Get how long the timer has been running
	var timeElapsed = millis() - timerBeginTime;
	/// Subtract the time we HAVE run from the total time we SHOULD run,
	/// then add our additional five seconds.
	var newTime = (timeSetToTimer - timeElapsed) + timeToAdd;
	timeSetToTimer = newTime;
	/// Update our "begin time" to the current clock time
	timerBeginTime = millis();
	/// Clear the existing timer
	clearTimeout(endingTimer);
	/// Set our new timer with the correct duration.
	endingTimer = setTimeout(endTimer, timeSetToTimer);

}

function endTimer() {
	/// Our game is over, flip the boolean.
	timeOver = true;
}
