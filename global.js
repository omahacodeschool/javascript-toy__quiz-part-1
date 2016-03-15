

window.onload = function(){
  //var beginButton = document.getElementById("begin_button");
 // document.getElementById("question").innerHTML = (questions[0]);
 // document.getElementById("choice").innerHTML = (choices[0]);
 //  })
//  alert("Foo");

//So when a person starts the quiz by pushing the preset button, I need to have the questions come up one at a time. I need the following pieces of information: The questions, the choices, the correct answers, the user's guess, something that says they got it right or got it wrong, a counter for correct answers, a statement that says they got X right out of Y, and a percentage they got right. 

//Seems like the right thing to do to put the questions and answers in some kind of a hash. 
//There is no hash in javascript as far as I can tell. There is an object but I don't know if I can iterate through an object. So an array? Try both? Wish I was smarter about these things.
//Maybe what I need is for the prompt to ask the "key" part of the object and they get it right if the "guess" matches the "value" part of the object. What the hell am I talking about. 

  var questionResults = ["c", "b", "c" ,"a"]

  var questions = ["What is the meaning of life?", "What do we talk about when we talk about love?", "Where is the remote?", "How do we know what we know?"]

  var choices = [
    "a. Karma b. Life is a cereal. c. THIS IS THE CORRECT ANSWER. d. The species must survive long enough to code instructions for how to recreate itself and send the instructions to a parallel universe.",
    "a. Hormones. b. THIS IS THE CORRECT ANSWER. c. Ourselves. d. Ask your mother.",
    "a. Between the couch cushions. b. Cat is sleeping on it. c. THIS IS THE CORRECT ANSWER. d. The remote knows where it is but we are lost.",
    "a. THIS IS THE CORRECT ANSWER. b. We just do. c. We don't really. d. We Google." ]   


 
  var index = 0;
  var score = 0;

  function load_question_and_choices() {
    document.getElementById("question").innerHTML = (questions[index]);
    document.getElementById("choice").innerHTML = (choices[index]);
    guess.value = "";
  };//close load_question_and_choices function 

 var beginButton = document.getElementById("begin_button");
 beginButton.addEventListener("click", load_question_and_choices);

  var question = document.getElementById("question");
  // question.innerHTML = (questions[index]);

  var choice = document.getElementById("choice");
  // choice.innerHTML = (choices[index]);

  var guess = document.getElementById("answer");

  //Lines 41-42 of your JavaScript are setting the inner HTML to questionResults at index = 0 on page load. That action is not being tied to an event listener.

  //var questionResult = document.getElementById("question_result")
  //questionResult.innerHTML = (questionResults[index]);

//get the submitter button from its location in "submitter" div, 
//add event listener, WHY IS THIS A CLICK? THE USER is supposed TO INPUT AN ANSWER. KEYUP?

  var submitterButton = document.getElementById("submitter");

  submitterButton.addEventListener("click", function() {
    var questionResult = document.getElementById("question_result")
      questionResult.innerHTML = (questionResults[index]);
    
    if (guess.value == questionResults[index]) {
      //alert("Correct! Well done!");
      questionResult.innerHTML = ("Correct! Well done!"); 
      score+=1;

    } //close the if
    else {
      //alert("Sorry, the correct answer is " + questionResults[index] + " . ");
      questionResult.innerHTML = ("Sorry, the correct answer is " + questionResults[index] + " . ");
    } //close the else

    index+=1; 
    var nextButton = document.getElementById("next"); 
    nextButton.addEventListener("click", load_question_and_choices); 

    var percentRight = ((score / questions.length)*100);   
    var finalScore = document.getElementById("total_result"); 
    finalScore.innerHTML = ("You completed the quiz with " + score + " answers out of " + questions.length + " , or " + percentRight + "%.") 
  });//close the function at submitter button?
  


};//close window onload??

//



//THIS COMMENTED OUT SECTION IS THE FUNCTIONING ENGINE FOR PHASE 1. 
//  var score = 0

//  for (var index = 0; index < question.length; index+=1) {
//     var userGuess = prompt(question[index] + choices[index]);
//     if (userGuess === answer[index]) {
    
//      alert("Correct! Well done!");
//      score +=1;
//      var percentRight = ((score / question.length)*100);
 //   }//close the if  
//    else {
//     alert("Sorry, the correct answer is " + answer[index] + " . ");
//    } //close the else
//  }//close the for loop

//      alert("You completed the quiz with " + score + " answers out of " + question.length + " , or " + percentRight + "%.")


//end of window.onload curly bracket


//-----------------------------EXPERIMENTS BELOW

//so what I think I want to do is get the "question" id on the html page and change the content that is in the <p> tag from the content that is there now to question 1. Question 1 is actually the question at index position 0 in the question array. 

//I started making a function because it seemed like I would want repeatable code for showing the user each question and the choices.




