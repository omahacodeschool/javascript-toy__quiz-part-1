window.onload = function(){

  var button = document.getElementById("begin_button")
  var answer1 = "4"
  var answer2 = "3"
  var answer3 = "3"
  var count = 0

  button.addEventListener("click", function(){

    // var question = document.getElementsByClassName("question");

    // for (var i = 0; i < question.length; i++) {
    //   question[i]
    // }

    var q1 = prompt("At this very moment, which do I prefer?\n 1. red\n 2. blue\n 3. green\n 4. orange", "Type the number of your answer here");
    if (q1 != answer1){
      alert("Sorry. You answer was incorrect."); 
    } else {
      alert("That's right!"); count++;
    }
    var q2 = prompt("Which would I rather do?\n 1. sleep\n 2. eat\n 3. talk\n 4. walk", "Type the number of your answer here");
    if (q2 != answer2){
      alert("Sorry. You answer was incorrect.");
    } else {
      alert("That's right!"); count++;
    }
    var q3 = prompt("Which sound do I perfer?\n 1. alarm\n 2. birds chirping\n 3. laughing\n 4. the crunch of snow", "Type the number of your answer here");
    if (q3 != answer3){
      alert("Sorry. You answer was incorrect.");
    } else {
      alert("That's right!"); count++;
    }
    
    if (count == 1){
      alert("You answered 1 of 3 correctly");
    }
    if (count == 2){
      alert("You answered 2 of 3 correctly");
    }
    if (count == 3){
      alert("You answered 3 of 3 correctly");
    }
  });
};