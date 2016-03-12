window.onload = function() {

//ojbect for questions, choices, and correcct answers? Messy.
   var quiz = {
    firstQuestion: "How many hobbits were in 'The Fellowship' in The Lord of the Rings Trilogy?", 
    secondQuestion: "What is the hobbit Pippin's last name?",
    thirdQuestion: "What is the name of the person in the fellowship who tries to take the ring from Frodo?",
    fourthQuestion: "What does the creature Gollum call the ring?",
    firstQuestionChoices: "A. One <br> B. Two <br> C. Three <br> D. Four",
    secondQuestionChoices: "A. Brandybuck <br> B. Took <br> C. Baggins <br> D.Gamgee",
    thirdQuestionChoices: "A. Gandalf <br> B. Farimir <br> C. Borimir <br> D.Strider",
    fourthQuestionChoices: "A. My Precious <br> B. My Treasure <br> C. My Ring <br> D. My Love",
    firstCorrectAnswer: "D",
    secondCorrectAnswer: "B",
    thirdCorrectAnswer: "C",
    fourthCorrectAnswer: "C" 
  };  

  var submitter = document.getElementById('submitter');


  // user clicks begin button sto start quiz.
  var begin = document.getElementById("beginButton");

  var answerField = document.getElementById("answer");


  begin.addEventListener("click", function() {

    begin.style.display = "none";

    var question = document.getElementById("question");

    question.innerHTML = (quiz.firstQuestion);

    var choices = document.getElementById("choices");

    choices.innerHTML = (quiz.firstQuestionChoices);

    submitter.style.display = "block";

    answerField.style.display = "block";    

  });

  // user submits answer

  submitter.addEventListener("click", function() {

    submitter.style.display = "none";

    var answer = document.getElementById("answer").value;
    answer = answer.toUpperCase();

    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";

    var questionResult = document.getElementById("questionResult"); 

    if (answer == quiz.firstCorrectAnswer) {
      questionResult.innerHTML = ("That is correct!");
    } else {
      questionResult.innerHTML = ("Sorry. " + quiz.firstCorrectAnswer + " is the answer!");
    }

    answerField.style.display = "none";

  });

  submitter.addEventListener("click", function() { 
    

  });   
 
};  