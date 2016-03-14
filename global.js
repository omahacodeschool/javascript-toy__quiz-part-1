window.onload = function(){
  alert("Foo");

  var quizFunction = function(){

  var score = 0

  alert("Get ready to be quizzed!");

  var question_1 = prompt("What is the name for a group of flamingos?\nA. Flock\nB. Flamboyance\nC. Pink Out\nD. Gaggle", "I pick answer...");
  var q1AnswerKey = "B";

  var question_2 = prompt("Which Ocean claimed the Titanic?\nA. The Arctic\nB. The East Indian\nC. The South Pacific\nD. The North Atlantic", "I pick answer...");
  var q2AnswerKey = "D";

  var question_3 = prompt("How many paintings did vanGogh sell during his lifetime?\nA. 322\nB. 12\nC. 1\nD. 2", "I pick answer...");
  var q3AnswerKey = "D";

  var question_4 = prompt("Which direction does the Great Pyramid of Giza face?\nA. North\nB. South\nC. East\nD. West", "I pick answer...");
  var q4AnswerKey = "A";
    

  if (question_1 == q1AnswerKey){
    score++;
  }

  if (question_2 == q2AnswerKey){
    score++;
  }

  if (question_3 == q3AnswerKey){
    score++;
  }

  if (question_4 == q4AnswerKey){
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