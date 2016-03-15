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

  var score = 0

  button.addEventListener("click", function(){
    current_question = questions[0]

    alert(current_question["content"])
    alert(Object.keys("answers"))

    // Get user's guess.
    var user_answer = prompt();

    // Check if that answer is set to 'true' in the answers hash.
    if ["answers"][user_answer] === true{
      alert("Correct!");
      score++;
    }
    else {
      alert("Wrong!"); 
    }
  });
};
