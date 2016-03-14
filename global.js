window.onload = function(){

  var click_it = document.getElementById("begin_button");

  click_it.addEventListener("click", function() {
    alert("begin the game")

    var userAns1 = prompt("What is the capital of Nebraska? a) Lincoln b) Omaha c) Bellevue d) Grand Island");
    if (userAns1 != "a") {
      alert("Wrong!")
      var q1 = 0
    }
    else {
      alert("Correct!")
      var q1 = 1
    };

    var userAns2 = prompt("Which country won the 2014 World Cup?  a) Spain b)Germany c) Italy d) Brazil");
    if (userAns2 != "b") {
      alert("Wrong")
      var q2 = 0
    }
    else {
      alert("Correct!")
      var q2 = 1
    };

    var userAns3 = prompt("Which club won the 2012 UEFA Champions League? a)Bayern Munich b) Barcelona c) Chelsea d) Borussia Dortmund");
    if (userAns3 != "c") {
      alert("Wrong")
      var q3 = 0
    }
    else {
      alert("Correct!")
      var q3 = 1
    };

    var correct = [q1, q2, q3].sum


  });



};