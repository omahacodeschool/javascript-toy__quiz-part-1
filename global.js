window.onload = function(){
  //alert("Welcome!");

function runQuiz(){

//set score to zero
userScore = 0

//get questions
getQuestions()

//run all questions
runAllQuestions()

//get final score
getFinalScore()

}


function getQuestions(){

  // Sets each question to an array containing 6 strings, each element of which is to be referenced by index:
  // array[0] = The question 
  // array[1] = Guess A
  // array[2] = Guess B
  // array[3] = Guess C
  // array[4] = Guess D
  // array[5] = The answer (A, B, C, or D)

  var question1 = ["How many cats are too many?", "1", "2", "3", "No quantity of cats will completely fill my heart to cat-capacity", "D"]

  var question2 = ["What color is patience?", "Blue", "Green", "Puce", "Orange", "B"]

  var question3 = ["Do androids dream of electric sheep?", "Always", "Yes", "Most Likely", "Mercer demands actual, living dream-sheep.", "D"]

  var question4 = ["What is love?", "Coffee", "Kindness", "Agony", "Worship", "A"]
}

function runAllQuestions(){
  
  
  currentQuestion
  runQuestion()
  setScore()
}

function runQuestion(){


}

function setScore(){


}

function getFinalScore(){


}

startButton = getElementById("start_button")
startButton.addEventListener("click", runQuiz())



};

