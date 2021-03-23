function firstFunction() {
  document.getElementById("button1").style.backgroundColor = "#379bff";
  document.getElementById("button2").style.backgroundColor = "#212529";
  document.getElementById("box1").style.display = ("block");
  document.getElementById("box2").style.display = ("none");
}
function secondFunction() {
  document.getElementById("button1").style.backgroundColor = "#212529";
  document.getElementById("button2").style.backgroundColor = "#379bff";
  document.getElementById("box1").style.display = ("none");
  document.getElementById("box2").style.display = ("block");
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
function authorDialog() {
  var today = new Date();
  alert("Morgan har skapat denna sida, året är " + today.getFullYear());
}
function textChange() {
  document.getElementById("rubrik").innerHTML = "Morgan Teräs";
  document.getElementById("text").style.backgroundColor = "#00FFEE";
}
function pictureChange() {
  if (document.getElementById("picture").src == "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg") {
    document.getElementById("picture").src = "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png";
  }
  else {
    document.getElementById("picture").src = "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg";
  }
}
function writeText() {
  var fnamn = document.getElementById("fnamn").value;

  var text = "Hej, " + fnamn + "!";
  document.getElementById("demo").innerHTML = text;
}
function calculate() {
  var tal1 = parseFloat(document.getElementById("tal1").value);
  var tal2 = parseFloat(document.getElementById("tal2").value);
  var text;
  if (document.getElementById("type").value == "+") {
    text = parseFloat(tal1 + tal2);
  }
  else if (document.getElementById("type").value == "-") {
    text = parseFloat(tal1 - tal2);
  }
  else if (document.getElementById("type").value == "*") {
    text = parseFloat(tal1 * tal2);
  }
  else if (document.getElementById("type").value == "/") {
    text = parseFloat(tal1 / tal2);
  }

  document.getElementById("tal3").value = text;
}
function changeType() {
  if (document.getElementById("type").value == "+") {
    document.getElementById("type").value = "-";
  }
  else if (document.getElementById("type").value == "-") {
    document.getElementById("type").value = "*";
  }
  else if (document.getElementById("type").value == "*") {
    document.getElementById("type").value = "/";
  }
  else if (document.getElementById("type").value == "/") {
    document.getElementById("type").value = "+";
  }
}