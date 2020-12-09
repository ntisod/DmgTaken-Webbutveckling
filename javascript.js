function firstFunction() {
  document.getElementById("button1").style.backgroundColor = "#4285F4";
  document.getElementById("button2").style.backgroundColor = "#212529";
	document.getElementById("button3").style.backgroundColor = "#212529";
	document.getElementById("button4").style.backgroundColor = "#212529";
  document.getElementById("box1").style.display = ("block");
  document.getElementById("box2").style.display = ("none");
	document.getElementById("box3").style.display = ("none");
	document.getElementById("box4").style.display = ("none");
}
function secondFunction() {
  document.getElementById("button1").style.backgroundColor = "#212529";
  document.getElementById("button2").style.backgroundColor = "#4285F4";
	document.getElementById("button3").style.backgroundColor = "#212529";
	document.getElementById("button4").style.backgroundColor = "#212529";
  document.getElementById("box1").style.display = ("none");
  document.getElementById("box2").style.display = ("block");
	document.getElementById("box3").style.display = ("none");
	document.getElementById("box4").style.display = ("none");
}
function thirdFunction() {
  document.getElementById("button1").style.backgroundColor = "#212529";
  document.getElementById("button2").style.backgroundColor = "#212529";
	document.getElementById("button3").style.backgroundColor = "#4285F4";
	document.getElementById("button4").style.backgroundColor = "#212529";
  document.getElementById("box1").style.display = ("none");
  document.getElementById("box2").style.display = ("none");
	document.getElementById("box3").style.display = ("block");
	document.getElementById("box4").style.display = ("none");
}
function fourthFunction() {
  document.getElementById("button1").style.backgroundColor = "#212529";
  document.getElementById("button2").style.backgroundColor = "#212529";
  document.getElementById("button3").style.backgroundColor = "#212529";
  document.getElementById("button4").style.backgroundColor = "#4285F4";
  document.getElementById("box1").style.display = ("none");
  document.getElementById("box2").style.display = ("none");
  document.getElementById("box3").style.display = ("none");
  document.getElementById("box4").style.display = ("block");
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timetxt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}