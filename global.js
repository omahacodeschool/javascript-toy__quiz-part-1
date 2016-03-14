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

var score = 0;
var i = 0;



    //   submitter.onclick = function(){

    //   var answer = document.getElementById("answer").value;
    //   checkAnswer(answer, current_answer);
    //   i++;
    // }
function checkAnswer(submitted_answer, current_question_answer){

      if (submitted_answer == current_question_answer) { 
      return "CORRECT!";
      
      }
      else if (submitted_answer != current_question_answer) {

      return "INCORRECT!";
    }
      

      };

function submit(current_question_index, current_score){

      var answer = document.getElementById("answer").value;
      current_question_answer = Quiz[current_question_index].answer;
      var result_output = document.getElementById("question_result");
      var result = checkAnswer(answer, current_question_answer);
      result_output.innerHTML = result;
      i++;
      if (result == "CORRECT!"){
      score++;
      }
    };

function showQuestion(i){
    var current_question = document.getElementById("question");
    var current_choices = document.getElementById("choices");
    var result_output = document.getElementById("question_result");
    result_output.innerHTML = "";
    //var i = 0;


   
    current_question.innerHTML = Quiz[i].question;

    //alert(Quiz[i].question);
    current_choices.innerHTML = "a " + Quiz[i].options["a"] + "<br />" + " b " + Quiz[i].options["b"] + "<br />" + " c " + Quiz[i].options["c"] + "<br />" + " d " + Quiz[i].options["d"];
    
    };




window.onload = function(){
  var click_me = document.getElementById("begin_button");

  
  click_me.addEventListener("click", function(){ showQuestion(i); });

  // {
  //   var score = 0
  //   var current_question = document.getElementById("question");
  //   var current_choices = document.getElementById("choices");
  //   //var i = 0;


   
  //   current_question.innerHTML = Quiz[i].question;

  //   //alert(Quiz[i].question);
  //   current_choices.innerHTML = "a " + Quiz[i].options["a"] + "<br />" + " b " + Quiz[i].options["b"] + "<br />" + " c " + Quiz[i].options["c"] + "<br />" + " d " + Quiz[i].options["d"];
    
  //   }
  

    var submitter = document.getElementById("submitter");
    submitter.addEventListener("click", function() { submit(i, score); });
      //var i = 0
    //   var answer = document.getElementById("answer").value;
    //   var current_questions_answer = Quiz[i].answer;
    //   var result = document.getElementById("question_result");
    //   if (answer == current_questions_answer){
    //     result.innerHTML = "CORRECT!"
    //   }
    //   else if (answer !== current_questions_answer){
    //     result.innerHTML = "INCORRECT!"
    //   }
    // });

    var next = document.getElementById("next");
    
    next.addEventListener("click", function() { showQuestion(i); });
  
    // if (i < Quiz.length){
    //   next.removeEventListener("click", )
    // }
    // else {next.style.display="none";}


   
      





    //
    //Make this an ordered list that and loop through the options instead of listing them all out.
    //var answer = prompt("a " + Quiz[i].options["a"] + " b " + Quiz[i].options["b"] + " c " + Quiz[i].options["c"] + " d " + Quiz[i].options["d"]);
    //alert("You got " + score + " out of " + Quiz.length + " correct.");
    
    

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
