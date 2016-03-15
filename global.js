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
    beginButton.innerHTML("Next question")

    currentQuestion = questions[currentQuestion]

    document.getElementById("questions").innerHTML = currentQuestion["content"]
    document.getElementById("choices").innerHTML = currentQuestion["answers"].keys
  });

  beginButton.addEventListener("click", function(){
    // See what they typed into 'answer'

    // Check if that answer is correct.
      // If correct, do things.
      // If not correct, do other things.

    // Get user's guess.
    userAnswer = document.getElementById("answer").value

    // Check if that answer is set to 'true' in the answers hash.
    if currentQuestion["answers"][userAnswer] === true {
      document.getElementById("question_result").innerHTML = "Correct!"
      score++
    }
    else {
      document.getElementById("question_result").innerHTML = "Wrong!"
    };

    currentQuestion++

    if questions[currentQuestion] === null {
      document.getElementById("total_result").innerHTML("Game over. Final score: " + score);
    }
    else {
      // Update the total_result area.
      document.getElementById("total_result").innerHTML("So far, " + score + " questions correct.");
    };
  });
};