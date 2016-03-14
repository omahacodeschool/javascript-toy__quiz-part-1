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
  q1.options = "a: Flock\nb: Flamboyance\nc: Pink Out\nd: Gaggle";
  q1.answer = "b";

var q2 = new set_Question();
  q2.question = "Which ocean claimed the Titanic?";
  q2.options = "a: The Arctic\nb: The East Indian\nc: The South Pacific\nd: The North Atlantic";
  q2.answer = "d";

var q3 = new set_Question();
  q3.question = "How many paintings did vanGogh sell during his lifetime?";
  q3.options = "a: 27\nb: 789\nc: 1\nd: 2";
  q3.answer = "c";

var q4 = new set_Question();
  q4.question = "Which direction does the Great Pyramid of Giza face?";
  q4.options = "a: North\nb: South\nc: East\nd: West";
  q4.answer = "a";

var quizQuestions = [q1, q2, q3, q4]




//This method averages the score into a percentage
function averageScore(score){
  var avg = score/quizQuestions.length
  var avgPercent = avg.toFixed(2)
  alert("You scored an average of " + avgPercent + " %!")
};



// This method runs the quiz
function quizFunction(){
  var score = 0;
  submitted = prompt((quizQuestions[0].question) + "\n" + (quizQuestions[0].options), "answer goes here");

    if (submitted == quizQuestions[0].answer){
      alert("Correct");
      score++;
    }else{
      alert("Incorrect");
    }

  submitted = prompt((quizQuestions[1].question) + "\n" + (quizQuestions[1].options), "answer goes here");

    if (submitted == quizQuestions[1].answer){
      alert("Correct");
      score++;
    }else{
      alert("Incorrect");
    }


  submitted = prompt((quizQuestions[2].question) + "\n" + (quizQuestions[2].options), "answer goes here");

    if (submitted == quizQuestions[2].answer){
      alert("Correct");
      score++;
    }else{
      alert("Incorrect");
    }


  submitted = prompt((quizQuestions[3].question) + "\n" + (quizQuestions[3].options), "answer goes here");

    if (submitted == quizQuestions[3].answer){
      alert("Correct");
      score++;
    }else{
      alert("Incorrect");
    }


    averageScore(score)

};







window.onload = function(){
  // debugger;

  var start_quiz = document.getElementById("begin_button");
  start_quiz.addEventListener("click", quizFunction);
    
};