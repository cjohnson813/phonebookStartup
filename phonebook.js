// function that converts an object into a URL query string format
// not used in this script
function queryObjectToString(query) {
	// get properties in query object
	// for {message:"Hi I am sending an AJAX request", name: "Cam"};
	// properties will be ["message", "name" ]
	let properties = Object.keys(query);/
	// create a string int in format "property=value" for each
	// array will be ...
	let arrOfQueryStrings = properties.map(prop => prop+"="+query[prop]);
	// combine strings in arrOfQueryStrings with '&'
	// return value will be 'message=Hi I am sending an AJAX request', name="Cam"
	return(arrOfQueryStrings.join('&'));
}
// onClick event handler for sendAJAX button
document.getElementById("search").addEventListener("click",sendAJAX);

// get interface elements for use
let textBox = document.getElementById("sname");
let resultsDiv = document.getElementById("resultsP");

// function that checks if textbox is empty && decides which AJAX request to send
function sendAJAX() {
	if (!textBox.value)
		sendDisplayAJAX();
	else
		sendSearchAJAX(textBox.value);
}
