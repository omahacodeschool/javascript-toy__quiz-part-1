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
  var submitButton = document.getElementById("submitter");
  var questionResult = document.getElementById("question_result");
  var nextButton = document.getElementById("next");
  var totalResult = document.getElementById("total_result");
 
  // Runs when user clicks on the 'begin the quiz' button.
  // Never runs again.
  beginButton.addEventListener("click", function() {
    question.style.display = "block";
    choices.style.display = "block";
    answerBox.style.display = "inline";
    beginButton.style.display = "none";
  });

  var score = 0;
  var currentQuestion = 0

  question.innerHTML = questionsArray[0]["content"];
  choices.innerHTML = questionsArray[0]["answers"];

  // Brings up the 'submit' button once a user types something in the text form.
  answerBox.addEventListener("keyup", function () {
    submitButton.style.display = "inline";
  });

  // Runs when user clicks on 'submit' button.
  submitButton.addEventListener ("click", function () {
    // if/else to determine if the user answered the questions correctly.
    questionResult.style.display = "block";
    nextButton.style.display = "block";
  });

  // Only displayed if questions remain.
  // Loads the next question.
  // Clears the text form.
  // Hides the 'submit' button.
  nextButton.addEventListener ("click", function () {
    function resetAnswerBox() {
      answerBox.reset();
    };
    currentQuestion++;
    submitButton.style.display = "none";
  });

};