window.onload = function(){
  var a1 = "B", 
      a2 = "D", 
      a3 = "D",
      a4 = "A";

  var quizFunction = function(){

  var score = 0

  alert("Get ready to be quizzed!");

  var q1 = prompt("What is the name for a group of flamingos?\nA. Flock\nB. Flamboyance\nC. Pink Out\nD. Gaggle", "I pick answer..."),

    q2 = prompt("Which Ocean claimed the Titanic?\nA. The Arctic\nB. The East Indian\nC. The South Pacific\nD. The North Atlantic", "I pick answer..."),

    q3 = prompt("How many paintings did vanGogh sell during his lifetime?\nA. 322\nB. 12\nC. 1\nD. 2", "I pick answer..."),

    q4 = prompt("Which direction does the Great Pyramid of Giza face?\nA. North\nB. South\nC. East\nD. West", "I pick answer...");
    

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