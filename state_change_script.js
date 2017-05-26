function PushStateCall() {
console.log("calling pushState");
var stateObj = { foo: "dummy" };
history.pushState(stateObj, "new page", "empty_landing_page.html");
}
function HashChange() {
}
HashChange.counter = 0;
HashChange.originalHref = window.location.href;
HashChange.usingLocationHash = function () {
  window.location.hash = "changed" + HashChange.counter;
   HashChange.counter ++;
} 
HashChange.usingLocationHref = function () {
	window.location.href = HashChange.originalHref + '#changed' + HashChange.counter;
	HashChange.counter ++;
}
function replaceStateCall() {
	console.log("replacing state");
	var stateObj = {foo:"dummy"};
	history.replaceState(stateObj, "new page", "empty_landing_page.html");
}
function locationHrefChange() {
	console.log("chaning href location");
	window.location.href = "empty_landing_page.html";
}
function locationReplaceCall() {
	console.log("replace location");
	window.location.replace("empty_landing_page.html");
}
function locationAssignCall() {
	console.log("assign location");
	window.location.assign("empty_landing_page.html");
}