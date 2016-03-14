function Question(){
  this.question = "";
  this.options = {};
  this.answer = "";
}

var q1 = new Question();
  q1.question = "What is the name for a group of flamingos?"
  q1.options = {
    a: "Flock",
    b: "Flamboyance",
    c: "Pink Out", 
    d: "Gaggle"
  }
  q1.answer = "a"

var q2 = new Question();
  q2.question = "Which ocean claimed the Titanic?"
  q2.options = {
    a: "The Arctic",
    b: "The East Indian",
    c: "The South Pacific",
    d: "The North Atlantic",
  }
  q2.answer = "d"

var q3 = new Question();
  q3.question = "How many paintings did vanGogh sell during his lifetime?"
  q3.optons = {
    a: 2,
    b: 27,
    c: 1,
    d: 397
  }
  q3.answer = "c"

var q4 = new Question();
  q4.question = "Which direction does the Great Pyramid of Giza face?"
  q4.options = {
    a: "North",
    b: "South",
    c: "East",
    d: "West"
  }
  q4.answer = "a"











window.onload = function(){
  
  var quizFunction = function(){

  var score = 0

  alert("Get ready to be quizzed!");

  if (q1 == a1){
    score++;
  }

  if (q2 == a2){
    score++;
  }

  if (q3 == a3){
    score++;
  }

  if (q4 == a4){
    score++;
  }

  var average = score/4
  alert("You answered " + average.toFixed(2) + "% of the questions correctly!");

  };


  var start_quiz = document.getElementById("begin_button");
  start_quiz.addEventListener("click", quizFunction);
};





// what is the name for a flock of flamingos
// what is the only mammal that lays eggs
// what controls the ocean tides        