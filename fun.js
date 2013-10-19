/* 
 * Fun/Tomfoolery/Serious Package
 * - By: Jonathan Chiu
 * - Date: 10/11/2013
 * 
 * - Handles the loading of most of the content on the page
*/

window.onload = function() {
	$('#container').delay(50).fadeIn('slow'); // On page load, fade in the main content of the page with a slight delay
}

/**
 * Button IDs
 */
var funButton = document.getElementById("fun-button"); // Get the ID of 'The Fun Button'
var stopButton = document.getElementById("stop-button"); // Get the ID of 'The Stop Button'
var aboutButton = document.getElementById("about-button"); // Get the ID of 'The About Button'
var linksButton = document.getElementById("links-button"); // Get the ID of 'The Links Button'

var dancingMan = document.getElementById("dancing-man"); // Get the ID of the div containing the Rick Roll
var aboutDiv = document.getElementById("about"); // Get the ID of the about div
var linksDiv = document.getElementById("links"); // Get the ID of the links div

var defaultBackgroundColor = "#347235"; // The original background color on page load
var timerId; // Instantiate the ID of setTimeout to randomly change bg color on interval


// Let's do some fun stuff
function generateRandomRGB() {
	var randomRed = Math.floor(Math.random() * 255); // Generate a random red value bounded by [0,255]
	var randomGreen = Math.floor(Math.random() * 255); // Generate a random green value bounded by [0,255]
	var randomBlue = Math.floor(Math.random() * 255); // Generate a random blue value bounded by [0,255]
	var rgbArray = [randomRed, randomGreen, randomBlue]; // Add the colors to an array for the join() method
	document.body.style.backgroundColor = 
		'rgb(' + rgbArray.join() +')'; // Change the background color by passing an rgb(randomRed,randomGreen,randomBlue) color as a string
	timerId = setTimeout(generateRandomRGB, 530);
};

function showRick() {
	aboutDiv.style.display = "none"; // Hide the about div and show Rick Astley dancing
	$('#dancing-man').fadeIn('slow');
	dancingMan.style.display = "block"; // Un-hide the hidden div containing the Rick Roll
};

function showAbout() {
	document.body.style.backgroundColor = defaultBackgroundColor; // Reset the background color to what it originally was
	clearTimeout(timerId); // Stop the random generating bg color
	dancingMan.style.display = "none";
	linksDiv.style.display = "none";
	$('#about').fadeIn('slow'); // jQuery command to create a fade in effect for the about div
	aboutDiv.style.display = "block"; // Unhide the about div
};

function showLinks() {
	document.body.style.backgroundColor = defaultBackgroundColor; // Reset the background color to what it originally was
	clearTimeout(timerId); // Stop the random generating bg color
	dancingMan.style.display = "none";
	aboutDiv.style.display = "none";
	$('#links').fadeIn('slow');
	linksDiv.style.display = "block";
}

// Reset
function reset() {
	/*
	aboutDiv.style.display = "none"; // Hide the about div
	linksDiv.style.display = "none";
	dancingMan.style.display = "none";
	*/
	$('#about').fadeOut('slow');
	linksDiv.style.display = "none";
	$('#dancing-man').fadeOut('slow');

	document.body.style.backgroundColor = defaultBackgroundColor; // Reset the background color to what it originally was
	clearTimeout(timerId); // Stop the random generating bg color
};

function main() {
	reset();
	showRick(); // Let the Rick times roll
	generateRandomRGB(); // Generate random rgb value
};

	funButton.onclick = main;
	stopButton.onclick = reset; // When 'The Stop Button' is clicked, the site returns to its original state
	aboutButton.onclick = showAbout;
	linksButton.onclick = showLinks;