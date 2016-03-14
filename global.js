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


function checkAnswer(submitted_answer, current_question_answer){

      if (submitted_answer == current_question_answer) { 
      return "CORRECT!";
      
      }
      else if (submitted_answer != current_question_answer) {

      return "INCORRECT!";
    }
      

      };

function submit(){


      var answer = document.querySelector('input[name="option"]:checked').id;

      current_question_answer = Quiz[i].answer;
      var result_output = document.getElementById("question_result");
      var result = checkAnswer(answer, current_question_answer);
      result_output.innerHTML = result;
      i++;
      if (result == "CORRECT!"){
      score++;
      }
      if (i >= (Quiz.length)){
        var total_result = document.getElementById("total_result");
        total_result.innerHTML = "You got " + score + " out of " + (Quiz.length) + " correct.";
      }
    };

function showOption(option_key, text){

    var radio = document.createElement("input");
      radio.type = "radio";
      radio.id = option_key;
      radio.name = "option";
    var label = document.createElement("label");
      label.for = radio.id;
      label.innerHTML = text;
      label.appendChild(radio);
    var option_item = document.createElement("li");
      option_item.appendChild(label);
      return option_item;
  };


function showQuestion(){
    var current_question = document.getElementById("question");
    var result_output = document.getElementById("question_result");
    result_output.innerHTML = "";
    if (i >= (Quiz.length - 1)) {
       var next = document.getElementById("next");
       next.style.display = "none";
    }


   
    current_question.innerHTML = Quiz[i].question;

    var options_list = document.createElement("OL");
      options_list.type = "A";
      options_list.id = ((i + 1) + "options");


    var x;
  for (x in Quiz[i].options) {
   var option = showOption(x, Quiz[i].options[x]);
    options_list.appendChild(option);
  }
    var choices = document.getElementById("choices");

      choices.innerHTML = "";

      choices.appendChild(options_list);

  
    
    };




window.onload = function(){

  var click_me = document.getElementById("begin_button");

  
  click_me.addEventListener("click", function(begin_button) {
    showQuestion(begin_button);
    begin_button.target.style.display = "none";
  });  

    var submitter = document.getElementById("submitter");
    submitter.addEventListener("click", submit);
    

    var next = document.getElementById("next");
  
      next.addEventListener("click", showQuestion);
    
    
    

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
