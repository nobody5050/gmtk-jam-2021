Config.history.maxStates = 1;
Config.history.controls = false;

function appendCallContent() {
  var paragraph = document.getElementById("call-content");
  var items = ["hi", "hello", "sup"];
  var item = items[Math.floor(Math.random() * items.length)];
  paragraph.innerHTML += item + "<br />";
}
