window.onload = function(){
  console.log("loading");
  alert("WELCOME")

  // Declaring two variables I was having trouble with being undefined. Clean this up later.
  userGuess = "";
  i = 0;


  // This bit of code sets up the various needed elements of the DOM.
  startButton = document.getElementById("start_button");
  quiz_html = document.getElementById("quiz_div")
  curr_question_html = document.getElementById("question_div")
  curr_guesses_html = document.getElementById("guesses_div")
  user_input_field = document.getElementById("user_input")
  submit_button = document.getElementById("submit_button")
  submit_button.addEventListener("click", alert("Clicked!"))
  hideQuiz()

  debugger;

  // Developer's note: If adding to, or subtracting from, the number of questions, you will need to set the `allQuestionsArray` at the bottom of the `getQuestions()` function to include or not include those questions.

  // Additional note: console.log(`function_name`) is used inside of each function, for debugging purposes.

  // Function is called when button is triggered. This will run through all of the questions, and give the final score. 
  startButton.addEventListener("click", function (){
    console.log("runQuiz");

    hideStartButton = document.getElementById("start_button")
    hideStartButton.style.display="none"

    //set score to zero
    userScore = 0;

    //show the quiz div
    showQuiz()

    //get all questions
    getQuestions();

    //run all questions (Note: this function also calls the `createPrompt()`, `assessGuess()`, `alertCorrectWrongNull()`, and 'setScore()` functions)
    runAllQuestions();

    //hide input field and button, to prepare page for final score display.
    hideQuiz()

    //get the final score
    getFinalScore();

  });

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

  // Function creates the prompt for a user's answer, by populating the alert with the question's elements.
  function createPrompt(){
    console.log("createPrompt");

    /*   startButton = document.getElementById("start_button_div");
  curr_question_html = document.getElementById("question_div")
  curr_guesses_html = document.getElementById("guesses_div")
  user_input_field = document.getElementById("user_input")
  submit_button = document.getElementById("submit_button") */
    
    curr_question_html.innerHTML = (currentQuestion + '<br>' + '<br>')
    curr_guesses_html.innerHTML = ('A: ' + currentGuess1 + '<br>' + 'B: ' + currentGuess2 + '<br>' + 'C: ' + currentGuess3 + '<br>' + 'D: ' + currentGuess4)


    // userGuess = prompt(currentQuestion + "...       A= " + currentGuess1 + "...       B: " + currentGuess2 + "...       C: " + currentGuess3 + "...       D: " + currentGuess4);
  
  };

  // Function sets boolean values for each result, eg: right & wrong. 
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

  // Function reads boolean values set in previous function and creates the corresponding alert.
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

  // Function increments the `userScore` value by 1 if the user's answer is correct.
  function setScore(){
    console.log("setScore");

    if(rightAnswer == true){
      userScore++;
      };
  };


  //Function hides quiz fields, input field and submit button
  function hideQuiz(){
    hide_quiz_div = document.getElementById("quiz_div")
    hide_quiz_div.style.display="none"
  };

  //Function shows quiz fields, input field and submit button
  function showQuiz(){
    show_quiz_div = document.getElementById("quiz_div")
    show_quiz_div.style.display="inline"
  };



  // Function calculates the final score in percentage-form.
  function getFinalScore(){
    console.log("getFinalScore");
    finalScore =  (userScore / allQuestionsArray.length) * 100;
    alert("Your Score is: " + finalScore + " %");
  };
debugger;

};

