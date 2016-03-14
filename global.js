window.onload = function(){
 
  var button = document.getElementById("begin_button");
  var firstQuestionAns = "New York City"
  var secondQuestionAns = "Stomach"
  var thirdQuestionAns = "Lake Ontario"
  var fourthQuestionAns = "Thirty Helens"
  var correctAns = 0

  button.addEventListener("click", function(){

    var question = document.getElementsByClassName("question");
    var answer = document.getElementsByClassName("answer");

    for (var i = 0; i < question.length; i++) {
      prompt(question[i]);

    if (question === answer){ 
      alert("That's correct! Click OK to continue."); correctAns++;
    };
    else alert("Sorry, that's incorrect. Click OK to continue.");
    };

    if (correctAns == 0){
      alert("You answered 0 out of 4 correctly!");
    }
    if (correctAns == 1){
      alert("You answered 1 out of 4 correctly!");
    }
    if (correctAns == 2){
      alert("You answered 2 out of 4 correctly!");
    }
    if (correctAns == 3){
      alert("You answered 3 out of 4 correctly!");
    }
    if (correctAns == 4){
      alert("You answered 4 out of 4 correctly!");
    }
  });
};