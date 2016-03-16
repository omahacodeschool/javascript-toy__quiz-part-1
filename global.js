window.onload = function() {

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

  var beginButton = document.getElementById("begin");
  var question = document.getElementById("question");
  var choices = document.getElementById("choices");
  var answerBox = document.getElementById("answer");
 
  beginButton.addEventListener("click", function() {
    question.style.display = "block";
    choices.style.display = "block";
    answerBox.style.display = "inline";
    beginButton.style.display = "none";
  });

  var score = 0;
  var currentQuestion = 0

  question.innerHTML = "Here's the question";
  choices.innerHTML = "Here are some questions";

  answerBox.addEventListener("keyup", function () {
    var submitButton = document.getElementById("submitter");
    submitButton.style.display = "inline";
  });

  var submitButton = document.getElementById("submitter");
  submitButton.addEventListener("click", function () {
    // need to add a function that does something with the user's answer.
    if questions[currentQuestion].nil? {
      var questionResult = getElementById("question_result");
      questionResult.style.display = "block";
      var nextButton = getElementById("next");
      nextButton.style.display = "block";
    }
    else {
      // show the total result and quiz over.
    }

  });

  var nextButton = getElementById("next");
  nextButton.addEventListener("click", function () {
    currentQuestion++;
    var submitButton = document.getElementById("submitter");
    submitButton.style.display = "none";
    var questionResult = getElementById("question_result");
    questionResult.style.display = "none";
  });

};