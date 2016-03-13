window.onload = function(){
  var buttonz = document.getElementById('buttonz');
  var questions = document.getElementsByClassName('question');
  var currentQuestion = 1;
  var totalQuestions = questions.length;

  buttonz.addEventListener("click", function changeButtonz() {
    for (var i = 0; i < questions.length; i++) {
     if (questions[i].id == "question" + currentQuestion) {
        questions[i].style.display = "block";
        buttonz.value = "Submit"
      } else {
        questions[i].style.display = "none";
      }
    }
  });

};