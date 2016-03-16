window.onload = function() {

  var questionsArray = [
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
    document.getElementById("submitter").style.display = "inline";
  });

  var submitButton = document.getElementById("submitter");
  submitButton.addEventListener("click", function () {
    // need to add a function that does something with the user's answer.
    if questions[currentQuestion].nil? {
      document.getElementById("question_result").innerHTML
      // need if/else function to grade the answer
      document.getElementById("total_result").innerHTML("So far you've gotten " + score + " out of " + currentQuestion + " correct.");
      document.getElementById("next").style.display = "block";
    }
    else {
      // show the total result and quiz over.
      document.getElementById("total_result").innerHTML("Congratulations, you got " + score + " out of " + questionsArray.length + " correct for an overall score of " + (score/questionsArray.length * 100) + "%")
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