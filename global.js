var questions = []
questions[0] = "What is the capital of Nebraska?"
questions[1] = "Which team won Superbowl XX?"
questions[2] = "Which club won the UEFA Champions League in 2012?"

var choices = []
choices[0] = ["a) Omaha", "b) Lincoln", "c) Bellevue", "d) Grand Island"]
choices[1] = ["a) Chicago Bears", "b) New England Patriots", "c) Miami Dolphins", "d) New York Giants"]
choices[2] = ["a) Barcelona", "b) Bayern Munich", "c) Chelsea", "d) Manchester United"]

var answers = []
answers[0] = "b"
answers[1] = "a"
answers[2] = "c"

window.onload = function(){



  document.getElementById("question").innerHTML = "Empty for now. We'll use JavaScript to put question text into this.";
  document.getElementById("choices").innerHTML = "Empty for now. We'll use JavaScript to put choices text into this.";
  document.getElementById("question_result").innerHTML = "Empty for now. We'll use JavaScript to put each question's result into this.";
  document.getElementById("total_result").innerHTML = "Empty for now. We'll use JavaScript to put the quiz's final result into this.";

};