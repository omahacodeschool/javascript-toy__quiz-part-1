//Your user loads the index.html page, which contains a button to begin the game.
// They are presented with a prompt() asking them a multiple choice question.
// Upon answer, they see an alert() telling them whether they answered correctly or incorrectly. They click "Okay" to move on.
// Steps 2-3 repeat until there are no more questions.
// Once they have answered all questions, they see an alert() telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. You answered 7 of 10 questions correctly, good for 70.0%

// var hashQuizQuestions = {
//     questionOne: "Nebraska",
//     questionTwo: "Missouri",
//     questionThree: "Illinois",
//     questionFour: "Colorado",
//     questionFive: "Michigan"
//   };


// var hashQuizAnswers = {
//     answerOne: "Lincoln",
//     answerTwo: "Jefferson City",
//     answerThree: "Springfield",
//     answerFour: "Denver",
//     answerFive: "Lansing"
//   };


function Question () {
    this.question = "";
    this.options = {};
    this.answer = "";
}

  var questionOne = new Question();
    questionOne.question = "What is the capital of Nebraska?";
    questionOne.options = {
      a: "Lincoln",
      b: "Kearney",
      c: "Denver"
    }
    questionOne.answer = "a";

var questionTwo = new Question();
    questionTwo.question = "What is the capital of Missouri?";
    questionTwo.options = {
      a: "Columbia",
      b: "Jefferson City",
      c: "St. Louis"
    }
    questionTwo.answer = "b";

var questionThree = new Question();
    questionThree.question = "What is the capital of Illinois?";
    questionThree.options = {
      a: "Chicago",
      b: "Champaign",
      c: "Springfield"
    }
    questionThree.answer = "c";






window.onload = function(){
  var click_me = document.getElementById("begin_button");
  
  click_me.addEventListener("click", function(){

    alert("Start the quiz!");
    alert(questionOne.question);
    var answer = prompt("a " + questionOne.options["a"] + " b " + questionOne.options["b"] + " c " + questionOne.options["c"]);
    if (answer == questionOne.answer) { 
      alert("That's correct!");
      }
    else if (answer != questionOne.answer) {

      alert("That's incorrect.");
    }
    }
    );

//1) What is the capital of Nebraska?
//a) Lincoln b) Kearney c) Denver
//2) What is the capital of Missouri?
//a) Columbia b) Jefferson City c) St. Louis
//3) What is the capital of Illinois?
//a) Chicago b) Champaign c) Springfield
//4) What is the capital of Colorado?
//a) Denver b) Colorado Springs c) Boulder
//5) What is the capital of Michigan?
//a) a)Ann Arbor b)Detroit c) Lansing


  
};
