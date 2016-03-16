// An Array containing Hashes. Each Hash has the question content
// and also the answers (as a Hash, where the keys are the answer
// choices and their values are whether that answer is correct.)
window.onload = function(){

  var questions = [
    {
      "content": "What was the first city to be illuminated with electric street lamps in 1882?",
      "answers": {
        "Tokyo": false,
        "London": false,
        "New York City": true,
        "Buenos Aires": false
      }
    },

    {
      "content": "What part of a rat's body can detect a bitter taste?",
      "answers": {
        "Feet": false,
        "Stomach": true,
        "Tongue": false,
        "Nose": false
      }
    }
  ];

  var beginButton = document.getElementById("begin_button");
  var submitButton = document.getElementById("submitter")
  var score = 0
  var currentQuestion = 0

  beginButton.addEventListener("click", function(){
    beginButton.innerHTML = "Next question"

    // in Javascript, hashes are called objects...
    currentQuestionObject = questions[currentQuestion]
    
    if (currentQuestionObject["content"] === undefined) {
      document.getElementById("total_result").innerHTML = "Game over. Final score: " + score;
    }
    else {
    document.getElementById("questions").innerHTML = currentQuestionObject["content"]
    document.getElementById("choices").innerHTML = Object.keys(currentQuestionObject["answers"])
    };
  });

  submitButton.addEventListener("click", function(){
    // See what they typed into 'answer'

    // Check if that answer is correct.
      // If correct, do things.
      // If not correct, do other things.

    currentQuestionObject = questions[currentQuestion]

    // Get user's guess.
    var userAnswer = document.getElementById("answer").value

    // Check if that answer is set to 'true' in the answers hash.
    if (currentQuestionObject["answers"][userAnswer] === true) {
      document.getElementById("question_result").innerHTML = "Correct!"
      score++
    }
    else {
      document.getElementById("question_result").innerHTML = "Wrong!"
    };

    currentQuestion++

    // Update the total_result area.
    document.getElementById("total_result").innerHTML = "So far, " + score + " question(s) correct.";
  });
};