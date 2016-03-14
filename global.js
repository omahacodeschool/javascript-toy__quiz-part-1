window.onload = function(){

  //Variables 
  count = 0;
  score = 0;
  question_list = ["What is my favorite color?", "What's my lucky number?", "Which sounds best to me"];
  choice_list = ["1. Orange\n 2. Blue\n 3. Yellow\n 4. Green", "1. 1\n 2. 33\n 3. 100\n 4. 23", "1. Laughing\n 2. Thunderstorm\n 3. Crunch of snow\n 4. Guitar"];
  answer_list = ["1", "2", "3"];

  //Beginning question
  var questions = document.getElementById("questions");
  questions.innerText = (question_list[0]);
  var choices = document.getElementById("choices");
  choices.innerText = (choice_list[0]); 
  var question_result = document.getElementById("question_result");
  question_result.innerText = (answer_list[0]);  

  //Next button
  var next = document.getElementById("next");

  next.addEventListener("click", function(){
    
    var questions = document.getElementById("questions");
    questions.innerText = (question_list[count]);
    var choices = document.getElementById("choices");
    choices.innerText = (choice_list[count]); 
  });

  //Submit button
  var button = document.getElementById("submitter");

  button.addEventListener("click", function(){
    var guess = document.getElementById("answer").value;
    
    if (guess == answer_list[count]) {
      alert("Correct!"); score++;
    } else {
      alert("incorrect"); 
    }
    
    count++;

    if(count == question_list.length) {
        alert("Thanks for playing! You got " + score + " out of " + count + " right!");
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
