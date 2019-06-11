var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/glasses-pepe.png') {
		myImage.setAttribute ('src', 'images/the-monster-front.jpg');
	} else {
		myImage.setAttribute ('src', 'images/eulogy-ep-front.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}