  //when begin button is clicked start_quiz function is ran
  //start quiz function runs the following functions:
  //a loop through each question
  //a function to compare users answer to correct answer
  //a function to increase the score of the user if their answer is correct


function set_Question(){
  this.question = "";
  this.options = "";
  this.answer = "";
};

var q1 = new set_Question();
  q1.question = "What is the name for a group of flamingos?";
  q1.options = "a: Flock <br> b: Flamboyance <br> c: Pink Out <br> d: Gaggle";
  q1.answer = "b";

var q2 = new set_Question();
  q2.question = "Which ocean claimed the Titanic?";
  q2.options = "a: The Arctic <br> b: The East Indian <br> c: The South Pacific<br> d: The North Atlantic";
  q2.answer = "d";

var q3 = new set_Question();
  q3.question = "How many paintings did vanGogh sell during his lifetime?";
  q3.options = "a: 27 <br> b: 789 <br> c: 1 <br> d: 2";
  q3.answer = "c";

var q4 = new set_Question();
  q4.question = "Which direction does the Great Pyramid of Giza face?";
  q4.options = "a: North <br> b: South <br> c: East <br> d: West";
  q4.answer = "a";

var quizQuestions = [q1, q2, q3, q4];

//This method averages the score into a percentage
function averageScore(score){
  var avg = score/quizQuestions.length;
  var avgPercent = avg.toFixed(2);
  alert("You scored an average of " + avgPercent + " %!");
};



// This method starts the quiz, which displays a question with it's options
function quizFunction(){
  div_question = document.getElementById("question");
  div_question.innerHTML = q1.question;

  div_choices = document.getElementById("choices");
  div_choices.innerHTML = q1.options;
};


//This method checks to see if the users answer is a match to the correct answer
function checkAnswer(submitted_answer){
  div_result = document.getElementById("question_result");
  
  if (submitted_answer == q1.answer){
    div_result.innerHTML = "Correct";
  }else{
    div_result.innerHTML = "Incorrect";
  }
  
};

window.onload = function(){

  //define variable for method that gets the begin button
  //add event listener to begin button that starts the quiz
  var start_quiz = document.getElementById("begin_button");
  start_quiz.addEventListener("click", quizFunction);
  
  //define variable for method that gets the submitter button
  //add event listener to begin answer check when submit button is clicked
  //get users answer
  //pass in value of user's answer for check answer method
  
  var submitted = document.getElementById("submitter");
  submitted.addEventListener("click", function(){
    var submitted_answer = document.getElementById("answer").value
    
    div_result = document.getElementById("question_result");

    if(submitted_answer == q1.answer){
      div_result.innerHTML = "Correct";
    }else{
      div_result.innerHTML = "Incorrect"
    }

  });
  

};




