// An Array containing Hashes. Each Hash has the question content
// and also the answers (as a Hash, where the keys are the answer
// choices and their values are whether that answer is correct.)
var questions = [
  {
    "content": "Where was the capital of Nebraska on March 1st, 1867?",
    "answers": {
      "a) Lancaster": true,
      "b) Omaha": false,
      "c) Bellevue": false,
      "d) Lincoln": false
    }
  },

  {
    "content": "Which team won the 1986 Superbowl?",
    "answers": {
      "a) San Francisco 49ers": false,
      "b) New York Giants": false,
      "c) Chicago Bears": true,
      "d) New England Patriots": false
    }
  },

  {
    "content": "Which club won the 2012 UEFA Champions League?",
    "answers": {
      "a) Bayern Munich": false,
      "b) Barcelona": false,
      "c) Chelsea": true,
      "d) Real Madrid": false
    }
  }

];

window.onload = function() {

  var beginButton = document.getElementById("begin");
  var quiz = document.getElementById("quiz");
  var questions = document.getElementById("question");
  var choices = document.getElementById("choices");
  var answerField = document.getElementById("answer");
  var submitButton = document.getElementById("submitter")
  var questionResult = document.getElementById("question_result");
  var nextButton = document.getElementById("next")
  var totalResult = document.getElementById("total_result");

  beginButton.addEventListener("click", function() {
    quiz.style.display = "block";
    begin.style.display = "none";
  });

  var score = 0;
  var currentQuestion = 0

  // Display question, starting with currentQuestion[0]

  // Display multiple choice answers starting with currentQuestion[0]

  // Get the answer String

  // if answer is true 
    // message in question_result "Correct!"
    // score +=1
  // else
    // message in question_result "Wrong!"



};