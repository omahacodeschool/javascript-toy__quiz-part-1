window.onload = function(){
  console.log("loading");

  // Declaring two variables I was having trouble with being undefined. Clean this up later.
  userGuess = "";
  i = 0;

  // This bit of code sets up the 'Start Quiz' button, and assigns `runQuiz()` as its 'click' action.
  startButton = document.getElementById("start_button");
  startButton.addEventListener("click", runQuiz());

  // Developer's note: If adding to, or subtracting from, the number of questions, you will need to set the `allQuestionsArray` at the bottom of the `getQuestions()` function to include or not include those questions.

  // Additional note: console.log(`function_name`) is used inside of each function, for debugging purposes.

  // Function is called when button is triggered. This will run through all of the questions, and give the final score. 
  function runQuiz(){
    console.log("runQuiz");
    //set score to zero
    userScore = 0;

    //get all questions
    getQuestions();

    //run all questions (Note: this function also calls the `createPrompt()`, `assessGuess()`, `alertCorrectWrongNull()`, and 'setScore()` functions)
    runAllQuestions();

    //get the final score
    getFinalScore();

  };

    // Function sets each question to an array containing 6 strings, each element of which is to be referenced by index.
    // See example below:
    // array[0] = The question 
    // array[1] = Guess A
    // array[2] = Guess B
    // array[3] = Guess C
    // array[4] = Guess D
    // array[5] = The answer ("A", "B", "C", or "D")
    //
    // Also sets the array `allQuestionsArray` to contain all the questions supplied above. For now, this is done manually.
  function getQuestions(){
    console.log("getQuestions");

    question1 = ["How many cats are too many?", "1", "2", "3", "No quantity of cats will ever completely fill my heart to cat-capacity", "D"];

    question2 = ["What color is patience?", "Blue", "Green", "Puce", "Orange", "B"];

    question3 = ["Do androids dream of electric sheep?", "Always", "Yes", "Most Likely", "Mercer demands actual, living dream-sheep.", "D"];

    question4 = ["What is love?", "Coffee", "Kindness", "Agony", "Worship", "A"];

    allQuestionsArray = [question1, question2, question3, question4];

  };

  // Function increments variable `i` in oreder to go through each question and prepare variables for the question, possible guesses, and the correct answer. 
  // Function also calls other functions to create prompts, assess the user's guesses, send 'correct/wrong answer' alerts and set the score.
  function runAllQuestions(){
    console.log("runAllQuestions");
    
    while (i < allQuestionsArray.length){
      
      currentQuestion = allQuestionsArray[i][0]; 
      currentGuess1 = allQuestionsArray[i][1];
      currentGuess2 = allQuestionsArray[i][2];
      currentGuess3 = allQuestionsArray[i][3];
      currentGuess4 = allQuestionsArray[i][4];
      currentAnswer = allQuestionsArray[i][5];

      createPrompt();

      assessGuess();

      alertCorrectWrongNull();

      setScore();
      
      i++
    };    

  };

  // Function 
  function createPrompt(){
    console.log("createPrompt");
    
    userGuess = prompt(currentQuestion + "...       A= " + currentGuess1 + "...       B: " + currentGuess2 + "...       C: " + currentGuess3 + "...       D: " + currentGuess4);
    
  };

  // Function
  function assessGuess(){
    console.log("assessGuess");

    if(userGuess == currentAnswer){

      rightAnswer = true;
      wrongAnswer = false;
      nullAnswer = false;

    }

    else{

      if(userGuess == null){

        rightAnswer = false;
        wrongAnswer = false;
        nullAnswer = true;
      }
      
      if(userGuess == ""){

        rightAnswer = false;
        wrongAnswer = false;
        nullAnswer = true;
      }

        else{

          rightAnswer = false;
          wrongAnswer = true;
          nullAnswer = false;

        };
    };  
  };

  // Function
  function alertCorrectWrongNull(){
    console.log("alertCorrectWrongNull");

    if(rightAnswer == true){
      alert("Correct!");
    };

    if(wrongAnswer == true){
      alert("Wrong Answer!");
    };

    if(nullAnswer == true){
      alert("Please try again.");
      runAllQuestions();
    };

  };

  // Function
  function setScore(){
    console.log("setScore");

    if(rightAnswer == true){
      userScore++;
      };
  };

  // Function
  function getFinalScore(){
    console.log("getFinalScore");
    finalScore =  (userScore / allQuestionsArray.length) * 100;
    alert("Your Score is: " + finalScore + " %");
  };

};

