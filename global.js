# An Array containing Hashes. Each Hash has the question content
# and also the answers (as a Hash, where the keys are the answer
# choices and their values are whether that answer is correct.)
questions = [
  {
    "content" => "What was the first city to be illuminated with electric street lamps in 1882?",
    "answers" => {
      "Tokyo" => false,
      "London" => false,
      "New York City" => true,
      "Buenos Aires" => false
    }
  },

  {
    "content" => "Another question...",
    "answers" => {
      "Some wrong answer" => false,
      "Another wrong answer" => false,
      "The correct answer" => true,
      "Yet another wrong answer" => false
    }
  }
]

score = 0

questions.each do |q|
  puts q["content"] # Display question text
  puts q["answers"].keys # Display answers for user to choose from

  # Get user's guess.
  user_answer = gets.chomp

  # Check if that answer is set to 'true' in the answers hash.
  if q["answers"][user_answer] == true
    puts "Correct!"
    score += 1
  else
    puts "Wrong!"
  end
end

puts "Total score: #{score}"