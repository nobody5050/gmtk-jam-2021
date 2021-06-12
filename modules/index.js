Config.history.maxStates = 1;
Config.history.controls = false;

currentConnected = 0;

function appendCallContent() {
  var paragraph = document.getElementById("call-content");
  var items = ["hi", "hello", "sup"];
  var item = items[Math.floor(Math.random() * items.length)];
  paragraph.innerHTML += item + "<br />";
}

function connect(number) {
  currentConnected = [number]
  document.getElementsByClassName("connected").innerHTML = "Not Connected";
  document.getElementsByClassName("connected").className = "disconnected";
  document.getElementById([number]).className = "connected";
  document.getElementsByClassName("connected").innerHTML = "Connected";
}

while true {
  
}
