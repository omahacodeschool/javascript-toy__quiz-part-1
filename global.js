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

  var begin = document.getElementById("begin_button");
  var quiz = document.getElementById("quiz");

  begin.addEventListener("click", function() {
    quiz.style.display = "block";
    begin.style.display = "none";
  });

};
