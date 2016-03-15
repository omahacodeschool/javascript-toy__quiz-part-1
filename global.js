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

var begin = document.getElementById("begin_button");
var quiz = document.getElementById("quiz");

begin.addEventListener("click", function() {
  quiz.style.display = "block";
  begin.style.display = "none";
});

var score = 0
var current_question = 0


// begin_button.when_clicked do
//   begin_button.innerHTML("Next question")

//   current_question = questions[current_question]

//   document.getElementById("question").innerHTML = current_question["content"]
//   document.getElementById("choices").innerHTML = current_question["answers"].keys
// end

// submitter.when_clicked do
//   // See what they typed into 'answer'

//   // Check if that answer is correct.
//     # If correct, do things.
//     # If not correct, do other things.

//   // Get user's guess.
//   user_answer = document.getElementById("answer").value

//   // Check if that answer is set to 'true' in the answers hash.
//   if current_question["answers"][user_answer] == true
//     document.getElementById("question_result").innerHTML = "Correct!"
//     score += 1
//   else
//     document.getElementById("question_result").innerHTML = "Wrong!"
//   end

//   current_question += 1

//   if questions[current_question].nil?
//     document.getElementById("total_result").innerHTML("Game over. Final score: " + score);
//   else
//     // Update the total_result area.
//     document.getElementById("total_result").innerHTML("So far, " + score + " questions correct.");
//   end
// end