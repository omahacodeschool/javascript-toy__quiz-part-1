window.onload = function(){

  //Variables 
  count = 1;
  score = 0;
  question_list = ["Question 1", "Question 2", "Question 3"];
  choice_list = ["1. A\n 2. B\n", "1. C\n 2. D\n", "1. E\n 2. F\n"];
  answer_list = ["1", "2", "3"];

  //Beginning question
  var questions = document.getElementById("questions");
  questions.innerText = (question_list[0]);
  var choices = document.getElementById("choices");
  choices.innerText = (choice_list[0]);

  //Next button
  var next = document.getElementById("next")

  next.addEventListener("click", function(){
  
    var questions = document.getElementById("questions");
    questions.innerText = (question_list[count]);
    var choices = document.getElementById("choices");
    choices.innerText = (choice_list[count]); count++;
  });

  //Submission form
  var button = document.getElementById("submitter");

  button.addEventListener("click", function(){
    var answer = document.forms["submission"]["answer"].value;
    if (answer == answer_list[0]) {
     score++; 
    }
  });



};

 
   //Submission form
  // var button = document.getElementById("submitter");

  // button.addEventListener("click", function(){
  //   var answers = document.form("answer").submit("text");
    
  //   if (answers == correct answer ) {
  //     results.innerText = "correct";
  //   }
  // });

// //Count Loop
  // var results = document.getElementById("question_result");
  // for (var c = 0; c < results.length; i++) {
  //  if (results[c] == "correct"); count++;
  // }
  
 
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
