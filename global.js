window.onload = function(){
  console.log("loading")
  userGuess = ""
  i = 0
  // If adding to, or subtracting from, the number of questions, you will need to set the allQuestionsArray at the bottom of the getQuestions function to include or not include those question arrays.

  function runQuiz(){
    console.log("runQuiz")
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
    console.log("getQuestions")
    // Sets each question to an array containing 6 strings, each element of which is to be referenced by index.
    // See example below:
    // array[0] = The question 
    // array[1] = Guess A
    // array[2] = Guess B
    // array[3] = Guess C
    // array[4] = Guess D
    // array[5] = The answer ("A", "B", "C", or "D")
    

    question1 = ["How many cats are too many?", "1", "2", "3", "No quantity of cats will ever completely fill my heart to cat-capacity", "D"]

    question2 = ["What color is patience?", "Blue", "Green", "Puce", "Orange", "B"]

    question3 = ["Do androids dream of electric sheep?", "Always", "Yes", "Most Likely", "Mercer demands actual, living dream-sheep.", "D"]

    question4 = ["What is love?", "Coffee", "Kindness", "Agony", "Worship", "A"]

    // Set the array `allQuestionsArray` to contain all the questions supplied above. For now, this is done manually.
    allQuestionsArray = [question1, question2, question3, question4]

  }


  function runAllQuestions(){
    console.log("runAllQuestions")
    
    while (i < allQuestionsArray.length){
      
      currentQuestion = allQuestionsArray[i][0] 
      currentGuess1 = allQuestionsArray[i][1]
      currentGuess2 = allQuestionsArray[i][2]
      currentGuess3 = allQuestionsArray[i][3]
      currentGuess4 = allQuestionsArray[i][4]
      currentAnswer = allQuestionsArray[i][5]

      createPrompt()

      assessGuess()

      alertCorrectWrongNull()

      setScore()
      
      i++}    

  }


  function createPrompt(){
    console.log("createPrompt")
    
    userGuess = prompt(currentQuestion + "...       A= " + currentGuess1 + "...       B: " + currentGuess2 + "...       C: " + currentGuess3 + "...       D: " + currentGuess4)
    
  }

  function assessGuess(){
    console.log("assessGuess")

    if(userGuess == currentAnswer){

      rightAnswer = true
      wrongAnswer = false
      nullAnswer = false

    }

    else{

      if(userGuess == null){

        rightAnswer = false
        wrongAnswer = false
        nullAnswer = true
      }
      
      if(userGuess == ""){

        rightAnswer = false
        wrongAnswer = false
        nullAnswer = true
      }

        else{

          rightAnswer = false
          wrongAnswer = true
          nullAnswer = false

        }
    }  
  }

  function alertCorrectWrongNull(){
    console.log("alertCorrectWrongNull")

    if(rightAnswer == true){
      alert("Correct!")
    }

    if(wrongAnswer == true){
      alert("Wrong Answer!")
    }

    if(nullAnswer == true){
      alert("Please try again.")
      runAllQuestions()
    }

  }

  function setScore(){
    console.log("setScore")
  if(rightAnswer == true){
    userScore++
    }
  }

  function getFinalScore(){
    console.log("getFinalScore")
    finalScore =  (userScore / allQuestionsArray.length) * 100
    alert("Your Score is: " + finalScore + " %")
  }

  // This bit of code sets up the 'Start Quiz' button, and assigns as an action `runQuiz()`.
  startButton = document.getElementById("start_button")
  startButton.addEventListener("click", runQuiz())

};

