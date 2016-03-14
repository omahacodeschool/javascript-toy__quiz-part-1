  //when begin button is clicked start_quiz function is ran
  //start quiz function runs the following functions:
  //a loop through each question
  //a function to compare users answer to correct answer
  //a function to increase the score of the user if their answer is correct


function set_Question(){
  this.question = "";
  this.options = {};
  this.answer = "";
}

var q1 = new set_Question();
  q1.question = "What is the name for a group of flamingos?";
  q1.options = {
    a: "Flock",
    b: "Flamboyance",
    c: "Pink Out", 
    d: "Gaggle"
  };
  q1.answer = "a";

var q2 = new set_Question();
  q2.question = "Which ocean claimed the Titanic?";
  q2.options = {
    a: "The Arctic",
    b: "The East Indian",
    c: "The South Pacific",
    d: "The North Atlantic",
  };
  q2.answer = "d";

var q3 = new set_Question();
  q3.question = "How many paintings did vanGogh sell during his lifetime?";
  q3.optons = {
    a: 2,
    b: 27,
    c: 1,
    d: 397
  };
  q3.answer = "c";

var q4 = new set_Question();
  q4.question = "Which direction does the Great Pyramid of Giza face?";
  q4.options = {
    a: "North",
    b: "South",
    c: "East",
    d: "West"
  };
  q4.answer = "a";

var quizQuestions = [q1, q2, q3, q4]


//This method check a users answer agaist the correct one and assigns points appropriately
function checkAnswer(submitted_answer, current_questions_answer){
  if (submitted_answer == current_questions_answer){
    alert("Thats correct!")
    score++
  }else{
    alert("Thats incorrect.")
  }
} 

//This method averages the score into a percentage
function averageScore(score, questions_array){
  var avg = score/quizQuestions.length
  var avgPercent = avg.toFixed(2)
}


// for/in loop that works for one questions options
for (var choice in q1.options){
console.log("These are Q1's options. " + choice + ":" + q1.options[choice] );
  }




// This method runs the quiz
function quizFunction(questions_array){
  for (i = 0; i < quizQuestions.length; i++)

    // for/in loop pushes options to empty string for one question
    var options_string = ""

    for (var letter in quizQuestions[i].options){
      options_string += letter; 
      options_string += ": ";
      options_string += quizQuestions[i].options[letter];
      options_string += "\n";
    }


    prompt((quizQuestions[i].question) + "\n" + "options go here", "answer goes here")
}







window.onload = function(){
  // debugger;

  var start_quiz = document.getElementById("begin_button");
  start_quiz.addEventListener("click", quizFunction(quizQuestions));
    
};