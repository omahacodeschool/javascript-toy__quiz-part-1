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
  });

  // We are calling the argument 'banana'.
  // But the function should take the Counter we are defining above.

  function LoadQuestion(banana){
    QuestionElement.innerHTML = QuestionsArray[banana]["q"];
    ChoicesElement.innerHTML = QuestionsArray[banana]["a"];\
    AnswerBox.
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

  function HideQuestionResult(){
    QuestionResultElement.style.display = "none";
  };

  function NextQuestion(){
    Counter++
    HideNextButton();
    HideQuestionResult();
    // ResetAnswerBox();   
    LoadQuestion(Counter);
    CheckQuestion(Counter);
  };