
document.addEventListener("DOMContentLoaded", function() {
	
	"use strict";

	var display = document.getElementById("display");

	// Assign each button the click event handler addToDisplay
	var displayBtns = document.getElementsByClassName("btn");

	Array.prototype.forEach.call(displayBtns, function addListener(element) {
		element.addEventListener("click", addToDisplay);
	});

	// Adds the clicked button's symbol to the display
	function addToDisplay() {
		display.innerHTML += this.innerHTML;
	}

	// Evaluates the displayed equation
	document.getElementById("eq-btn").addEventListener("click", function evaluate() {
		var equation = display.innerHTML;
		// Test if the input is a valid equation
		if (/^[\d\[\(]+[\d\+\-\*\/\[\]\(\)\%\.]+[\d\]\)]+$/.test(equation)) {
			// Temporary fix, eval() concatenates numbers between brackets
			equation = equation.replace(/\[/g, "(");
			equation = equation.replace(/\]/g, ")");
			display.innerHTML = eval(equation);
		}
		// Do nothing if there is only one number
		else if (/^\d+$/.test(equation)) {
			return;
		}
		// Reject invalid inputs
		else {
			display.innerHTML = "Error";
			setTimeout(function(){display.innerHTML="";}, 1000);
		}
	});

	// Clears the display
	document.getElementById("ac-btn").addEventListener("click", function allClear() {
		display.innerHTML = "";
	});

	// Functions as a backspace
	document.getElementById("clr-btn").addEventListener("click", function clear() {
		display.innerHTML = display.innerHTML.slice(0, -1);
	});

});
