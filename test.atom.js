function trickQuestion() {
    document.getElementById("p1").innerHTML = "Have you seen it yet?";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
    /*activates Buttons Yes and No*/
}

function yes() {
    document.getElementById("p1").innerHTML = "Then you must be ready for a challenge.";
    document.getElementById("h1").innerHTML = "TEST YOUR CLICK SPEED!";
    document.getElementById("p0").innerHTML = "With this game you can test your averge click speed in clicks per second.";
    document.getElementById("button4").style.display = "block";
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "block";
    /*activates the game*/
}

function no() {
    document.getElementById("p1").innerHTML = "Then you must be blind.";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button5").style.display = "Block";
  if (function3()) {
    function6();
  }
    /*back to Original Page*/
}
var goalScore = 100;
var score = 0;
var startTime;
var timerStarted = false;

function theGame() {
  if (score < 1) {
    timerStarted = true;
    var date = new Date();
    date = date.getTime()/100;
    startTime = date;
    ad();
   }
  if (timerStarted) {
    score++;
    document.getElementById("button4").innerHTML = "your score is: " + score;
    if (score >= goalScore) {
      timerStarted = false;
      var date = new Date();
      document.getElementById("p2").innerHTML =  "10 Clicks per " + (date.getTime()/100 - startTime)/goalScore + "s";
    }

  }



      /*the game itself*/
}

function back2Start() {
  document.getElementById("p1").innerHTML = "Btw look what I can do";
  document.getElementById("button5").style.display = "none";
  /*ok Button*/
}

function ad() {
  document.getElementById("p3").style.display = "block";
  /*advertises philip.stachura.me*/
}
