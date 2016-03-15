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

  begin_button.when_clicked do
  current_question = questions[0]

  puts current_question["content"]
  puts current_question["answers"].keys

  # Get user's guess.
  user_answer = gets.chomp

  # Check if that answer is set to 'true' in the answers hash.
  if current_question["answers"][user_answer] == true
    puts "Correct!"
    score += 1
  else
    puts "Wrong!"
  end
end