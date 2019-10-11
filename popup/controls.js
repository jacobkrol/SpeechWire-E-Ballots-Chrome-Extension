document.addEventListener('DOMContentLoaded', function () {
	  document.getElementById("text-up").addEventListener('click', text_up);
	  document.getElementById("text-down").addEventListener('click', text_down);
	  document.getElementById("hide").addEventListener('click', hide_discard);
	  document.getElementById("show").addEventListener('click', show_discard);
	  document.getElementById("alert").addEventListener('click', alert_discard);
	  document.getElementById("notif").addEventListener('click', alert_notif);
});

var params = {
		active: true,
		currentWindow: true
}

function hide_discard() {
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "hide");
	}
}

function show_discard() {
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "show");
	}
}

function alert_discard() {
	document.getElementById("notif").innerHTML = "This feature is coming soon!<br>(Click this text to dismiss)";
}

function alert_notif() {
	document.getElementById("notif").innerHTML = "";
}

function text_up() {
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "larger");
	}
}

function text_down() {
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "smaller");
	}
}

function diagnostic() {
	chrome.tabs.query(params, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "diagnostic");
	});
}