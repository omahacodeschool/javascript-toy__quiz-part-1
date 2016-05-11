window.onload = function(){

  var QuestionsArray = [
  {
    q: "Where was the capital of Nebraska on March 1st, 1867?",
    a: ["a) Lincoln", "b) Omaha", "c) Bellevue", "d) Lancaster"],
    correct: "d"
  }, {
    q: "Which club won the 2012 UEFA Champions League?",
    a: ["a) Bayern Munich", "b) Borussia Dortmund", "c) Chelsea", "d) Barcelona"],
    correct: "c"
  }, {
    q: "Which team is widely considered the best in NFL history?",
    a: ["a) 2007 Patriots", "b) 1972 Dolphins", "c) 1985 Bears", "d) 1984 49ers"],
    correct: "c"
  }, {
    q: "Which club won the 2015-2016 Barclays Premier League Championship?",
    a: ["a) Leicester", "b) Arsenal", "c) Chelsea", "d) Tottenham"],
    correct: "a"
  }
  ];


  var BeginButton = document.getElementById("begin");
  var QuizElement = document.getElementById("quiz");
  var QuestionElement = document.getElementById("question");
  var ChoicesElement = document.getElementById("choices");
  var AnswerBox = document.getElementById("answer");
  var SubmitButton = document.getElementById("submit");
  var QuestionResultElement = document.getElementById("question_result");
  var NextButton = document.getElementById("next");
  var TotalResultElement = document.getElementById("total_result");

  var Counter = 0;

  BeginButton.addEventListener("click", function(){
    BeginButton.style.display = "none";
    QuizElement.style.display = "block";
    LoadQuestion(Counter);
    CheckQuestion(Counter);

    // Loop through questions and results
    
      // If not final question
        // Display the question
        // Display the possible answers
        // Get the value of the answer
        // Evaluate the answer
          // If correct dispay 'correct' String
          // Else display 'incorrect' String
          // Display 'Next Question' button
      // Else final question
        // Display the question
        // Display the possible answers
        // Get the value of the answer
        // Evaluate the answer
          // If correct display 'correct' String
          // Else display 'incorrect' String
          // Display 'See Final Result' button
        // Display 'final result' String
  });

  // We are calling the argument 'banana'.
  // But the function should take the Counter we are defining above.

  function LoadQuestion(banana){
    QuestionElement.innerHTML = QuestionsArray[banana]["q"];
    ChoicesElement.innerHTML = QuestionsArray[banana]["a"];
  };

  function CheckQuestion(banana){
    AnswerBox.addEventListener("keyup", function(){
      SubmitButton.style.display = "inline";
    });
    SubmitButton.addEventListener("click", function(){
      var Answer = document.getElementById("answer").value;
      SubmitButton.style.display = "none";
      if (Answer == QuestionsArray[banana]["correct"]){
        QuestionResultElement.innerHTML = "You are Correct!"
      } else {
        QuestionResultElement.innerHTML = "Wrong"
      };
      ShowNextButton();
      NextButton.addEventListener("click", NextQuestion);
    });
  };

  function ShowNextButton(){
    NextButton.style.display = "inline";
    NextButton.innerHTML = "Next";
  };

  function HideNextButton(){
    NextButton.style.display = "none";
  };

  function ResetAnswerBox(){
    AnswerBox.innerHTML = "";
  };

  function HideQuestionResult(){
    QuestionResultElement.style.display = "none";
  };

  function NextQuestion(){
    Counter++
    HideNextButton();
    HideQuestionResult();
    ResetAnswerBox();   
    LoadQuestion(Counter);
    CheckQuestion(Counter);
  };


  // function GameLoop(){
  //   for (i = 0; i < (QuestionsArray.length); i++) {
  //     console.log("I is " + i);
  //     QuestionElement.innerHTML = QuestionsArray[i]["q"];
  //     ChoicesElement.innerHTML = QuestionsArray[i]["a"];
  //     AnswerBox.addEventListener("keyup", function(){
  //       SubmitButton.style.display = "inline";
  //     });
  //     SubmitButton.addEventListener("click", function(){
  //       var Answer = document.getElementById("answer").value;
  //       SubmitButton.style.display = "none";
  //       if (Answer == QuestionsArray[i]["correct"]){
  //         QuestionResultElement.innerHTML = "You are Correct!";
  //       } else {
  //         QuestionResultElement.innerHTML = "Wrong"
  //       };
  //       NextButton.style.display = "inline";
  //       NextButton.innerHTML = "Next";
  //     });
  //   };
  // };
};


















// window.onload = function() {

//   var questionsArray = [
//     {
//       "content": "Where was the capital of Nebraska on March 1st, 1867?",
//       "answers": {
//         "a) Lancaster": true,
//         "b) Omaha": false,
//         "c) Bellevue": false,
//         "d) Lincoln": false
//       }
//     },

//     {
//       "content": "Which team won the 1986 Superbowl?",
//       "answers": {
//         "a) San Francisco 49ers": false,
//         "b) New York Giants": false,
//         "c) Chicago Bears": true,
//         "d) New England Patriots": false
//       }
//     },

//     {
//       "content": "Which club won the 2012 UEFA Champions League?",
//       "answers": {
//         "a) Bayern Munich": false,
//         "b) Barcelona": false,
//         "c) Chelsea": true,
//         "d) Real Madrid": false
//       }
//     }
//   ];

//   var beginButton = document.getElementById("begin");
//   var question = document.getElementById("question");
//   var choices = document.getElementById("choices");
//   var answerBox = document.getElementById("answer");
//   var submitButton = document.getElementById("submitter");
//   var questionResult = document.getElementById("question_result");
//   var nextButton = document.getElementById("next");
//   var totalResult = document.getElementById("total_result");
 
//   // Runs when user clicks on the 'begin the quiz' button.
//   // Hides self.
//   // Never runs again.
//   beginButton.addEventListener("click", function() {
//     question.style.display = "block";
//     choices.style.display = "block";
//     answerBox.style.display = "inline";
//     beginButton.style.display = "none";
//   });

//   var score = 0;
//   var currentQuestion = 0

//   question.innerHTML = questionsArray[0]["content"];
//   choices.innerHTML = Object.keys(questionsArray[0]["answers"]);

//   // Brings up the 'submit' button once a user types something in the text form.
//   answerBox.addEventListener("keyup", function () {
//     submitButton.style.display = "inline";
//   });

//   // Runs when user clicks on 'submit' button.
//   submitButton.addEventListener ("click", function () {
//     // if/else to determine if the user answered the questions correctly.
//     questionResult.style.display = "block";
//     nextButton.style.display = "block";
//   });

//   // Only displayed if questions remain.
//   // Loads the next question.
//   // Clears the text form.
//   // Hides the 'submit' button.
//   // Hides questionResults.
//   // Hides self.
//   nextButton.addEventListener ("click", function () {
//     answerBox.value = "";
//     currentQuestion++;
//     submitButton.style.display = "none";
//     questionResult.style.display = "none";
//     nextButton.style.display = "none";
//   });

// };