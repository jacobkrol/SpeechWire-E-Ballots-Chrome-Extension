
let buttons = document.getElementsByTagName("button");
console.log("running");

for(var i=0; i<buttons.length; i++) { 
	if(buttons[i].innerText.toUpperCase() == "DISCARD") { 
		console.log("removed");
		buttons[i].style.display = "none"; 
	} 
}