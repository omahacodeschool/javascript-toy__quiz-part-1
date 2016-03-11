window.onload = function(){

  var button = document.getElementById("begin_button")
  var answer1 = "4"
  var answer2 = "3"
  var answer3 = "3"
  var count = 0

  button.addEventListener("click", function(){

    var question = document.getElementsByClassName("question");

    for (var i = 0; i < question.length; i++) {
      prompt(question[i]);
      if (q1 != answer1){
      alert("Sorry. You answer was incorrect."); 
      } else {
      alert("That's right!"); count++;
    } 

    
    if (count == 0){
      alert("You answered nothing correctly");
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