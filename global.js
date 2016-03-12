window.onload = function() {

  // user clicks begin button sto start quiz.
  var begin = document.getElementById("begin_button");

  begin.addEventListener("click", function() {

    var question = document.getElementById("question");

    question.innerHTML = ("How many hobbits were in 'The Fellowship' in The Lord of the Rings Trilogy?");

    var choices = document.getElementById("choices");

    var firstQuestionChoices = ("A. One <br> B. Two <br> C. Three <br> D. Four");

    choices.innerHTML = (firstQuestionChoices);

  });

  // user submits answer
  var submitted = document.getElementById('submitter');

  submitted.addEventListener("click", function() {

    var answer = document.getElementById("answer").value;
    answer = answer.toUpperCase();

    var correctAnswer = "D";

    var questionResult = document.getElementById("questionResult");


    if (answer == correctAnswer) {
      questionResult.innerHTML = ("That is correct!");
    } else {
      questionResult.innerHTML = ("Sorry. " + correctAnswer + " is the answer!");
    }

  });
 
};  