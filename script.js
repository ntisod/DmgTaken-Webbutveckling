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

function changeChoices() {
  var items;

  if (document.getElementById("software").checked == true) {
    items = ["", "Engelska 7", "Idrott och hälsa 2", "Entreprenörskap", "Modersmål", "Digitalt skapande 2", "Fysik 2", "Matematik 4"];
  }
  else if (document.getElementById("engineering").checked == true) {
    items = ["", "Engelska 7", "Idrott och hälsa 2", "Entreprenörskap", "Modersmål", "Digitalt skapande 1", "Webbserverprogrammering 1", "Matematik 5"];
  }

  var str = ""
  for (var item of items) {
    str += "<option>" + item + "</option>"
  } 
  document.getElementById("choice1").innerHTML = str;
  document.getElementById("choice2").innerHTML = str;
  document.getElementById("choice3").innerHTML = str;
}

function addText() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var choice1 = document.getElementById("choice1").value;
  var choice2 = document.getElementById("choice2").value;
  var choice3 = document.getElementById("choice3").value;
  var individual;
  if (document.getElementById("software").checked == true) {
    individual = "Software";
  }
  else if (document.getElementById("engineering").checked == true) {
    individual = "Engineering"
  }
  var text = document.getElementById("text").innerHTML;
  text = text + "\n \nNamn: " + fname + " " + lname + "\nEmail: " + email + "\nInriktning: " + individual + "\nFörsta val: " + choice1 + "\nAndra val: " + choice2 + "\nReserv val: " + choice3 + "\n-----------------------------------";
  document.getElementById("text").innerHTML = text;
  document.getElementById("fname").value = null;
  document.getElementById("lname").value = null;
  document.getElementById("email").value = null;
  document.getElementById("choice1").value = null;
  document.getElementById("choice2").value = null;
  getElementById("choice3").value = null;
}