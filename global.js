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
  var quiz = document.getElementById("quiz");
  var answerBox = document.getElementById("answer");
 
  beginButton.addEventListener("click", function() {
    question.style.display = "block";
    choices.style.display = "block";
    answerBox.style.display = "block";
    beginButton.style.display = "none";
  });

  var score = 0;
  var currentQuestion = 0



};