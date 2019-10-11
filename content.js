chrome.runtime.onMessage.addListener(gotMessage);

var buttons = document.getElementsByTagName("button"),
	inputs = document.getElementsByTagName("input"),
	origDisplay,
	target;

window.onload = function() {
	for(each of buttons) {
		if(each.innerText.toUpperCase() === "DISCARD") {
			origDisplay = each.style.display;
			target = each;
		}
	}
	for(each of inputs) {
		if(each.innerText.toUpperCase() === "DISCARD") {
			origDisplay = each.style.display;
			target = each;
		}
	}
}

function gotMessage(message, sender, sendResponse) {
	switch(message) {
		case "hide":
			target.style.display = "none";
			break;
		case "show":
			each.style.display = origDisplay;
			break;
		case "alert":
			//alert("This feature is coming soon!");
			break;
		case "larger":
			var box = document.getElementsByTagName("textarea")[0];
			if(box.style.fontSize == "") {
				box.style.fontSize = 14;
			} else {
				box.style.fontSize = Number(box.style.fontSize.slice(0,-2))+2;
			}
			break;
		case "smaller":
			var box = document.getElementsByTagName("textarea")[0];
			if(box.style.fontSize == "") {
				box.style.fontSize = 10;
			} else if(Number(box.style.fontSize.slice(0,-2)) > 2) {
				box.style.fontSize = Number(box.style.fontSize.slice(0,-2))-2;
			}
			break;
		case "diagnostic":
			console.log("---- Diagnostic Test Results ----");
			var error = false;
			if(!document.getElementsByTagName("textarea")[0]) {
				console.log("ERROR: comment box not found");
				error = true;
			}
			if(!target) {
				console.log("ERROR: discard element not found");
				error = true;
			}
			if(!error) {
				console.log("no errors found");
			}
			break;
		default:
			console.log("no matching action found");
			break;
	}
}

function diagnostic() {
	console.log("---- Diagnostic Test Results ----");
	var error = false;
	if(!document.getElementsByTagName("textarea")[0]) {
		console.log("ERROR: comment box not found");
		error = true;
	}
	if(!target) {
		console.log("ERROR: discard element not found");
		error = true;
	}
	if(!error) {
		console.log("no errors found");
	}
	console.log("---- Diagnostic Test Complete ----");
}
