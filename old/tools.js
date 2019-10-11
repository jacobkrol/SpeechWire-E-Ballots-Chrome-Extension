
document.addEventListener('DOMContentLoaded', function () {
	  //document.getElementById("text-up").addEventListener('click', text_up);
	  //document.getElementById("text-down").addEventListener('click', text_down);
	  document.getElementById("hide").addEventListener('click', hide_discard);
	  document.getElementById("show").addEventListener('click', show_discard);
	  document.getElementById("alert").addEventListener('click', alert_discard);
	  document.getElementById("read").addEventListener('click',read);
});

function hide_discard() {
	let buttons = document.getElementsByTagName("button");
	console.log("running");

	for(var i=0; i<buttons.length; i++) { 
		if(buttons[i].innerText.toUpperCase() == "DISCARD") { 
			console.log("hide_discard() success");
			buttons[i].style.display = "none"; 
		} 
	}
}

function show_discard() {
	let buttons = document.getElementsByTagName("button");
	console.log("running");

	for(var i=0; i<buttons.length; i++) { 
		if(buttons[i].innerText.toUpperCase() == "DISCARD") { 
			console.log("show_discard() success");
			buttons[i].style.display = "inline-block";
		} 
	}
}

function alert_discard() {
	let buttons = document.getElementsByTagName("button");
	console.log("running");

	for(var i=0; i<buttons.length; i++) { 
		if(buttons[i].innerText.toUpperCase() == "DISCARD") { 
			console.log("alert_discard() success");
			buttons[i].style.display = "inline-block";
			buttons[i].onclick = function () {
				var response = confirm("Are you sure you want to discard this competitor's comments?");
				console.log(response);
				if(response) {
					document.getElementById("comments").value = "";
				}
			}
		} 
	}
}

alert_discard();

/*
function text_up() {
	let box = document.getElementsByTagName("textarea")[0].style['fontSize'];
	if( box == "" ) {
		box = 12;
	} else {
		box += 4;
	}
	console.log("text_up() success");
}

function text_down() {
	let box = document.getElementsByTagName("textarea")[0].style['fontSize'];
	if( box == "" ) {
		box = 12;
	} else {
		box -= 4;
	}
	console.log("text_down() success");
}

function read_text() {
	return document.getElementsByTagName('p')[0];
}

function read() {
	
	chrome.tabs.executeScript({
		code: '(' + read_text() + ')();' //argument here is a string but function.toString() returns function's code
		}, (results) => {
			//Here we have just the innerHTML and not DOM structure
			console.log('Popup script:')
			console.log(results[0]);
		}
	);

}

*/