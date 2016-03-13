window.onload = function(){
  console.log("loading")
  alert("Welcome!");

  // If adding to, or subtracting from, the number of questions, you will need to set the allQuestionsArray at the bottom of the getQuestions function to include or not include those question arrays.

  function runQuiz(){
    console.log("runQuiz")
    //set score to zero
    var userScore = 0

    //get questions
    getQuestions()

    //run all questions
    runAllQuestions()

    //get final score
    getFinalScore()

  }


  function getQuestions(){
    console.log("getQuestions")
    // Sets each question to an array containing 6 strings, each element of which is to be referenced by index:
    // array[0] = The question 
    // array[1] = Guess A
    // array[2] = Guess B
    // array[3] = Guess C
    // array[4] = Guess D
    // array[5] = The answer (A, B, C, or D)
    

    var question1 = ["How many cats are too many?", "1", "2", "3", "No quantity of cats will ever completely fill my heart to cat-capacity", "D"]

    var question2 = ["What color is patience?", "Blue", "Green", "Puce", "Orange", "B"]

    var question3 = ["Do androids dream of electric sheep?", "Always", "Yes", "Most Likely", "Mercer demands actual, living dream-sheep.", "D"]

    var question4 = ["What is love?", "Coffee", "Kindness", "Agony", "Worship", "A"]

    // Set the array `allQuestionsArray` to contain all the questions supplied above. For now, this is done manually.
    allQuestionsArray = [question1, question2, question3, question4]

  }


  function runAllQuestions(){
    console.log("runAllQuestions")
    var i = 0

    while (i < allQuestionsArray.length){
      
      var currentQuestion = allQuestionsArray[i][0] 
      var currentGuess1 = allQuestionsArray[i][1]
      var currentGuess2 = allQuestionsArray[i][2]
      var currentGuess3 = allQuestionsArray[i][3]
      var currentGuess4 = allQuestionsArray[i][4]
      var currentAnswer = allQuestionsArray[i][5]
      
      i++
      console.log("createPrompt")
    var userGuess = prompt(currentQuestion, currentGuess1, currentGuess2, currentGuess3, currentGuess4)
      createPrompt()

      assessGuess()

      setScore()
    
    }

  }


  function createPrompt(){
    debugger;
    
  }

  function assessGuess(){
    console.log("assessGuess")
    if(userGuess == currentAnswer){
      rightAnswer = "true"
    }
  }

  function setScore(){
    console.log("setScore")
  if(rightAnswer = "true"){
    userScore++
    }
  }

  function getFinalScore(){
    console.log("getFinalScore")
  }

  var startButton = document.getElementById("start_button")
  startButton.addEventListener("click", runQuiz())

};

