// Declare the selectors and store them
// in variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

// Function to return value of the input
function inputLength() {
	return input.value.length;
}

// Function for creating a new list item 
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// create buttons dor adding and deleting items
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	button1.innerHTML = "Done";
	button2.innerHTML = "Delete";
	li.appendChild(button1);
	li.appendChild(button2);

	// Remove an item
	button2.addEventListener("click", function () {
		li.parentNode.removeChild(li);
	});

	// To toggle the strike for the done button
	button1.addEventListener("click", function() {
		li.classList.toggle("done");
	});
	ul.appendChild(li);
	input.value= "";
}

// For the existing li items
Array.from(items).forEach(function (item){
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	button1.innerHTML = "Done";
	button2.innerHTML = "Delete";
	item.appendChild(button1);
	item.appendChild(button2);

	// remove an item
	button2.addEventListener("click", function () {
		item.parentNode.removeChild(item);
	});

	button1.addEventListener("click", function () {
		item.classList.toggle("done");
	});
});

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 ) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);