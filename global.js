window.onload = function(){
  alert("Foo");





//Seems like the right thing to do to put the questions and answers in some kind of a hash. 
//There is no hash in javascript as far as I can tell. There is an object but I don't know if I can iterate through an object. So an array? Try both? Wish I was smarter about these things.
//Maybe what I need is for the prompt to ask the "key" part of the object and they get it right if the "guess" matches the "value" part of the object. What the hell am I talking about. 

for (var index = 0; index < qbank.length; index+=1) {
    prompt(qbank[index]);



    if (guess === correctAnswer) {
      alert("Correct! Well done!");
  }//close for if
else {
      alert("Sorry, the correct answer is " + password + " . ");
  } //close for else
}//close for for loop





};//end of window.onload curly bracket

var first = "$100"
var second = "$200"
var third = "$300"
var last = "$400"


//var guess = prompt("Guess the password: ")



//Thousand dollar pyramid
guess1 = prompt("Here is your " " + " first + " question. " + q1);
guess2 = prompt("Here is your " " + " second + " question. " + q2);
guess3 = prompt("Here is your " " + " third + " question. " + q3);
guess4 = prompt("Here is your " " + " last + "question. " + q4);

alert("Your answer")


//I dont' think this is it. var qanda1 = {
// question: "meaning of life",
// answer: c
//}



 //var userName = document.getElementById("full_name");
  
//will I need this?  userName.addEventListener("keyup", function() {

//var qbank = ["What is the meaning of life?", "What do we talk about when we talk about love?", "Where is the remote?", "How much is too much?"];

var qbank = [q0, q1, q2, q3]

var q0 = {
  index: 0
  question: "What is the meaning of life?"
  choiceA: "a. Nothing."
  choiceB: "b. Life is a cereal."
  choiceC: "c. This is the correct answer."
  choiceD: "d. The greatest gift from a generous god."
  answer: "c"
}

var q1 = {
  index: 1
  question: "What do we talk about when we talk about love?"
  choiceA: "a. Hormones."
  choiceB: "b. This is the correct answer."
  choiceC: "c. Ourselves."
  choiceD: "d. The greatest gift from a generous god."
  answer: "b"
}

var q2 = {
  index: 2
  question: "What is the meaning of life?"
  choiceA: "a. Nothing."
  choiceB: "b. Life is a cereal."
  choiceC: "c. This is the correct answer."
  choiceD: "d. The greatest gift from a generous god."
  answer: "c"
}

var q3 = {
  index: 3
  question: "How do we know what we know?"
  choiceA: "a. This is the correct answer."
  choiceB: "b. We just do."
  choiceC: "c. We don't really."
  choiceD: "d. We Google."
  answer: "a"
}

//var q1 = "What is the meaning of life?"
//var q3 = "Where is the remote?"
//var q4 = "On a scale of 1 to 10, why do we use scales of 1 to 10?"

//var questions = 

  //var greeting = document.getElementById("greeting");

 // greeting.innerHTML = ("Hail Citizen " + userName.value + " well met!");

  });//closing curly bracket for the addEventListener open bracket
};//closing curly bracket for window.onload.





//## Phase 1

(As you read the instructions below, consider that this phase alone should probably have at least 6-10 commit messages for its features.)

### User Story

1. Your user loads the **index.html** page, which contains a button to begin the game.
2. They are presented with a `prompt()` asking them a multiple choice question.
3. Upon answer, they see an `alert()` telling them whether they answered correctly or incorrectly. They click "Okay" to move on.
4. Steps 2-3 repeat until there are no more questions.
5. Once they have answered all questions, they see an `alert()` telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. **You answered 7 of 10 questions correctly, good for 70.0%**
-------------------------------------------------------------
### Clarifying the Assignment

1. Questions should be multiple choice. You'll have the stem (question), 4 answer choices, and only one of those answers should be correct. Every question should follow this format.
2. Don't worry about putting any content on the page -- we'll worry about DOM manipulation later.
3. Your game should contain at least 3 questions.

Build this however you can--don't worry about optimizing, refactoring, best practices, etc. Just think through the steps and implement whatever solution you can come up with.

This game can be built using a loop, which iterates over a collection of questions. But it does not have to use a loop. If you're struggling with the looping aspect of this game, try building it _without_ one.

It's true that you'll end up writing more lines of code, and you might be aware of the repetition (and violation of DRY), but--as the instructions above say--build this however you can.