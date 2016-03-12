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

  // Quiz();
  // var questions = new Quiz();
  //   questions.questionOne = "Nebraska";
  //   questions.questionTwo = "Missouri";
  //   questions.questionThree = "Illinois";
  //   questions.questionFour = "Colorado";
  //   questions.questionFive = "Michigan";

  // var answers = new Quiz();
  //   answers.answerOne = "Lincoln";
  //   answers.answerTwo = "Jefferson City";
  //   answers.answerThree = "Springfield";
  //   answers.answerFour = "Denver";
  //   answers.answerFive = "Lansing";






window.onload = function(){
  var click_me = document.getElementById("begin_button");
  
  click_me.addEventListener("click", function(){

    alert("hi for now.");
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

// var text;
// var favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//     case "Martini":
//         text = "Excellent choice! Martini is good for your soul.";
//         break;
//     case "Daiquiri":
//         text = "Daiquiri is my favorite too!";
//         break;
//     case "Cosmopolitan":
//         text = "Really? Are you sure the Cosmopolitan is your favorite?";
//         break;
//     default:
//         text = "I have never heard of that one..";
//         break;
// }