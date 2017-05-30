function pushStateCall() {
  console.log("calling pushState");
  var stateObj = {foo: "dummy"};
  history.pushState(stateObj, "new page", "empty_landing_page.html");
}

var hashChange = {
  counter: 0,
  originalHref: window.location.href,
  changeLocationHash: function () {
	console.log("counter " + hashChange.counter);
    console.log("Changing the location.hash");
    window.location.hash = "changed" + hashChange.counter ++;
  },
  changeLocationHref: function () {
    console.log("Changing the location.href to override hash");
    window.location.href = hashChange.originalHref +
      '#changed' + hashChange.counter ++;
  }
};

function replaceStateCall() {
  console.log("replacing state");
  var stateObj = {foo: "dummy"};
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