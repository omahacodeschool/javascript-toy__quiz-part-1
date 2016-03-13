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
      c: "Denver",
      d: "York"
    }
    questionOne.answer = "a";

var questionTwo = new Question();
    questionTwo.question = "What is the capital of Missouri?";
    questionTwo.options = {
      a: "Columbia",
      b: "Jefferson City",
      c: "St. Louis",
      d: "St. Charles"
    }
    questionTwo.answer = "b";

var questionThree = new Question();
    questionThree.question = "What is the capital of Illinois?";
    questionThree.options = {
      a: "Chicago",
      b: "Champaign",
      c: "Springfield",
      d: "Macomb"
    }
    questionThree.answer = "c";

var Quiz = [questionOne, questionTwo, questionThree]; 






window.onload = function(){
  var click_me = document.getElementById("begin_button");
  
  click_me.addEventListener("click", function(){
    var score = 0

    for(i = 0; i < Quiz.length; i++){
    
    var current_question = document.getElementById("question");
    current_question.innerHTML = Quiz[i].question;

    //alert(Quiz[i].question);
    var current_choices = document.getElementById("choices");
    current_choices.innerHTML = "a " + Quiz[i].options["a"] + "<br />" + " b " + Quiz[i].options["b"] + "<br />" + " c " + Quiz[i].options["c"] + "<br />" + " d " + Quiz[i].options["d"];
    var current_answer = Quiz[i].answer;
    
    var submitter = document.getElementById("submitter");

    submitter.onclick = function (current_answer){

      var answer = document.getElementById("answer").value;
      debugger;
      if (answer == current_answer) { 
      alert("That's correct!");
      score++;
      }
      else if (answer != Quiz[i].answer) {

      alert("That's incorrect.");
    }
      

      };




    //
    //Make this an ordered list that and loop through the options instead of listing them all out.
    //var answer = prompt("a " + Quiz[i].options["a"] + " b " + Quiz[i].options["b"] + " c " + Quiz[i].options["c"] + " d " + Quiz[i].options["d"]);
    }
    //alert("You got " + score + " out of " + Quiz.length + " correct.");
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
