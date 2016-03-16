window.onload = function(){
  

  questionList = ["What's my favorite pet to have?", "Who is my favorite band?", "What's my favorite beverage?", "What is my favorite thing to do in a band?"]

  choiceList = ["1. Cat\n 2. Dog\n 3. Ferret\n 4. Mouse", "1. My Chemical Romance\n 2. 30 Seconds to Mars\n 3. Motley Crue\n 4. Nirvana", "1. Snapple\n 2. 7uP\n 3. Fresca\n 4. Mountain Dew", "1. Guitar\n 2. Sing\n 3. Bass\n 4. Drums"];

  count = 0

  score = 0

  answerList = ["1", "1", "3", "2"];

  var questions = document.getElementById("questions");
  questions.innerText = (questionList[0]);
  var choices = document.getElementById("choices");
  choices.innerText = (choiceList[0]); 
  var question_result = document.getElementById("question_result");
  question_result.innerText = (answerList[0]);  

  var next = document.getElementById("next");

  next.addEventListener("click", function(){
    
    var questions = document.getElementById("questions");
    questions.innerText = (questionList[count]);
    var choices = document.getElementById("choices");
    choices.innerText = (choiceList[count]); 
  });

  var button = document.getElementById("submitter");

  button.addEventListener("click", function(){
    var guess = document.getElementById("answer").value;
    
    if (guess == answerList[count]) {
      alert("That's Correct!"); score++;
    } else {
      alert("That is incorrect!"); 
    }
    
    count++;

    if(count == questionList.length) {
        alert("Thanks for playing! You got " + score + " out of " + count + " right!");
    }
  });
};