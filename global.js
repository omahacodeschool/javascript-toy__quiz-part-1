window.onload = function(){
  alert("Foo");

//Seems like the right thing to do to put the questions and answers in some kind of a hash. 
//There is no hash in javascript as far as I can tell. There is an object but I don't know if I can iterate through an object. So an array? Try both? Wish I was smarter about these things.
//Maybe what I need is for the prompt to ask the "key" part of the object and they get it right if the "guess" matches the "value" part of the object. What the hell am I talking about. 

//So when a person starts the quiz by pushing the preset button, I need to have the questions come up one at a time. I need the following pieces of information: The questions, the choices, the correct answers, the user's guess, something that says they got it right or got it wrong, a counter for correct answers, a statement that says they got X right out of Y, and a percentage they got right. 
//I could put the questions and choices and correct answers in a hash but there's no such thing. There is a javascript object.  



//var qBank = [q0, q1, q2, q3]



//var q3 = {
//  //index: 3
//  question: "How do we know what we know?",
//  choiceA: "a. This is the correct answer.",
//  choiceB: "b. We just do.",
//  choiceC: "c. We don't really.",
//  answer: "a"
//}

var answer = ["c", "b", "c" ,"a"]

var question = ["What is the meaning of life?", "What do we talk about when we talk about love?", "Where is the remote?", "How do we know what we know?"]

var choices = [
  "a. Karma b. Life is a cereal. c. THIS IS THE CORRECT ANSWER. d. The species must survive long enough to code instructions for how to recreate itself and send the instructions to a parallel universe.",
  "a. Hormones. b. THIS IS THE CORRECT ANSWER. c. Ourselves. d. Ask your mother.",
  "a. Between the couch cushions. b. Cat is sleeping on it. c. THIS IS THE CORRECT ANSWER. d. The remote knows where it is but we are lost.",
  "a. THIS IS THE CORRECT ANSWER. b. We just do. c. We don't really. d. We Google." ]   
  
var score = 0

for (var index = 0; index < question.length; index+=1) {
   var userGuess = prompt(question[index] + choices[index]);
   if (userGuess === answer[index]) {
  
    alert("Correct! Well done!");
    score +=1;
}//close the if  
  else {
   alert("Sorry, the correct answer is " + answer[index] + " . ");
  } //close the else
}//close the for loop

    alert("You completed the quiz with " + score + " answers out of" + question.length)


};//end of window.onload curly bracket




 //var userName = document.getElementById("full_name");
  
//will I need this?  userName.addEventListener("keyup", function() {

//var qbank = ["What is the meaning of life?", "What do we talk about when we talk about love?", "Where is the remote?", "How much is too much?"];


//var questions = 

  //var greeting = document.getElementById("greeting");

 // greeting.innerHTML = ("Hail Citizen " + userName.value + " well met!");

 // });//closing curly bracket for the addEventListener open bracket
//};//closing curly bracket for window.onload.





//## Phase 1

//(As you read the instructions below, consider that this phase alone should probably have at least 6-10 commit messages for its features.)

//### User Story

//1. Your user loads the **index.html** page, which contains a button to begin the game.
//2. They are presented with a `prompt()` asking them a multiple choice question.
//3. Upon answer, they see an `alert()` telling them whether they answered correctly or incorrectly. They click "Okay" to move on.
//4. Steps 2-3 repeat until there are no more questions.
//5. Once they have answered all questions, they see an `alert()` telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. **You answered 7 of 10 questions correctly, good for 70.0%**
//### Clarifying the Assignment

//1. Questions should be multiple choice. You'll have the stem (question), 4 answer choices, and only one of those answers should be correct. Every question should follow this format.
//2. Don't worry about putting any content on the page -- we'll worry about DOM manipulation later.
//3. Your game should contain at least 3 questions.

//Build this however you can--don't worry about optimizing, refactoring, best practices, etc. Just think through the steps and implement whatever solution you can come up with.

//This game can be built using a loop, which iterates over a collection of questions. But it does not have to use a loop. If you're struggling with the looping aspect of this game, try building it _without_ one.

//It's true that you'll end up writing more lines of code, and you might be aware of the repetition (and violation of DRY), but--as the instructions above say--build this however you can.