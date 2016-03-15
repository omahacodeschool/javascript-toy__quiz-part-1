var questions = []
questions[0] = "What is the capital of Nebraska?"
questions[1] = "Which team won Superbowl XX?"
questions[2] = "Which club won the UEFA Champions League in 2012?"

var choices = []
choices[0] = ["a) Omaha ", "b) Lincoln ", "c) Bellevue ", "d) Grand Island"]
choices[1] = ["a) Chicago Bears ", "b) New England Patriots ", "c) Miami Dolphins ", "d) New York Giants"]
choices[2] = "a) Barcelona  b) Bayern Munich  c) Chelsea  d) Manchester United"

var answers = []
answers[0] = "b"
answers[1] = "a"
answers[2] = "c"

window.onload = function(){

  for (var i = 0; i < questions.length; i++) {
  document.getElementById("question").innerHTML = questions[i];
  document.getElementById("choices").innerHTML = choices[i];
  var submit_answer = document.getElementById("submitter");
  }


  // document.getElementById("question").innerHTML = "Empty for now. We'll use JavaScript to put question text into this.";
  // document.getElementById("choices").innerHTML = "Empty for now. We'll use JavaScript to put choices text into this.";
  // document.getElementById("question_result").innerHTML = "Empty for now. We'll use JavaScript to put each question's result into this.";
  // document.getElementById("total_result").innerHTML = "Empty for now. We'll use JavaScript to put the quiz's final result into this.";

  // var click_it = document.getElementById("begin_button");

  // click_it.addEventListener("click", function() {
  //   alert("begin the game")
  //   var score = 0;
  //   var questions = 0;

  //   var userAns1 = prompt("What is the capital of Nebraska? a) Lincoln b) Omaha c) Bellevue d) Grand Island");
  //   questions += 1
  //   if (userAns1 != "a") {
  //     alert("Wrong!")
  //   }
  //   else {
  //     alert("Correct!")
  //     score += 1
  //   };

  //   var userAns2 = prompt("Which country won the 2014 World Cup?  a) Spain b)Germany c) Italy d) Brazil");
  //   questions += 1
  //   if (userAns2 != "b") {
  //     alert("Wrong")
  //   }
  //   else {
  //     alert("Correct!")
  //     score += 1
  //   };

  //   var userAns3 = prompt("Which club won the 2012 UEFA Champions League? a)Bayern Munich b) Barcelona c) Chelsea d) Borussia Dortmund");
  //   questions += 1
  //   if (userAns3 != "c") {
  //     alert("Wrong")
  //   }
  //   else {
  //     alert("Correct!")
  //     score += 1
  //   };

  //   alert("You got " + score + " out of " + questions + " correct for a score of " + ((score/questions) * 100) + "%");

  // });

};