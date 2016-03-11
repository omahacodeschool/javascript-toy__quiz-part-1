window.onload = function(){

  var questions = document.getElementById("questions");
  questions.innerText = "What is my name?";
  var choices = document.getElementById("choices");
  choices.innerText = "1. Derek\n 2. Mark\n 3. Sarah\n 4. Dottie\n";

  var button = document.getElementById("submitter");
  var results = document.getElementById("question_result");

  button.addEventListener("click", function(){
    var answers = document.forms["answer"].submit("text");
    results.innerText = (answers);
  });
    
};




  // var button = document.getElementById("begin_button")
  // var count = 0

  // button.addEventListener("click", function(){

  //   var question = document.getElementsByClassName("question");
  //   var correct_answer = document.getElementsByClassName("answers");

  //   for (var i = 0; i < question.length; i++) {
  //     var guess = prompt(question[i]);

  //     for (var a = 0; a < correct_answer.length; a++)
  //       var answer = correct_answer[a];
        
  //       if (guess != correct_answer){
  //       alert("Sorry. You answer was incorrect."); 
  //       } else {
  //       alert("That's right!"); count++;
  //     }
  //   } 

    
  //   if (count == 0){
  //     alert("You answered nothing correctly");
  //   }
  //   if (count == 1){
  //     alert("You answered 1 of 3 correctly");
  //   }
  //   if (count == 2){
  //     alert("You answered 2 of 3 correctly");
  //   }
  //   if (count == 3){
  //     alert("You answered 3 of 3 correctly");
  //   }
  // });
