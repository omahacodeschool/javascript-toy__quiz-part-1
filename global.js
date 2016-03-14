window.onload = function(){

  var click_it = document.getElementById("begin_button");

  click_it.addEventListener("click", function() {
    alert("begin the game")
    var score = 0;
    var questions = 0;

    var userAns1 = prompt("What is the capital of Nebraska? a) Lincoln b) Omaha c) Bellevue d) Grand Island");
    questions += 1
    if (userAns1 != "a") {
      alert("Wrong!")
    }
    else {
      alert("Correct!")
      score += 1
    };

    var userAns2 = prompt("Which country won the 2014 World Cup?  a) Spain b)Germany c) Italy d) Brazil");
    questions += 1
    if (userAns2 != "b") {
      alert("Wrong")
    }
    else {
      alert("Correct!")
      score += 1
    };

    var userAns3 = prompt("Which club won the 2012 UEFA Champions League? a)Bayern Munich b) Barcelona c) Chelsea d) Borussia Dortmund");
    questions += 1
    if (userAns3 != "c") {
      alert("Wrong")
    }
    else {
      alert("Correct!")
      score += 1
    };

    alert("You got " + score + " out of " + questions + " correct for a score of " + ((score/questions) * 100) + "%");



  });



};