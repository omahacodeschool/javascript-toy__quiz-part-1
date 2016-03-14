var currentQuestion = 0;
var scoreCount = 0;

function determineScore(e) {
  var correctNotification = document.getElementById('correct');
  var wrongtNotification = document.getElementById('wrong');
  var submitButton = document.getElementById('submitButton');
  var nextButton = document.getElementById('nextButton');


  correctNotification.style.display = "none";
  nextButton.style.display = "block";
  submitButton.style.display = "none";

  var radios = document.forms[0].elements["questionChoices" + currentQuestion];

   var userSelection;
    for (var i=0, len=radios.length; i<len; i++) {    
      if ( radios[i].checked ) {
        userSelection = radios[i].value;
      }
    }

    if (userSelection == 2) {
      correctNotification.style.display = "block";
      scoreCount += 1
    } else if (userSelection == null) {
      wrongtNotification.style.display = "block";
    } else { 
      wrongtNotification.style.display = "block";
    }
    e.preventDefault();
 } 

window.onload = function(){
  var allQuestions = document.getElementById('questions');
  var startButton = document.getElementById('startButton');
  var nextButton = document.getElementById('nextButton');
  var restartButton = document.getElementById('restartButton');
  var correctNotification = document.getElementById('correct');
  var wrongtNotification = document.getElementById('wrong');
  var questions = document.getElementsByClassName('question');
  var scoreCountNotice = document.getElementById('scoreCountNotice');
  var gameEnded = document.getElementById('gameEnded');
  var totalQuestions = questions.length;

  function quizLoop() {
    correctNotification.style.display = "none";
    wrongtNotification.style.display = "none";
    for (var i = 0; i < questions.length; i++) {
      if (i == currentQuestion) {
        questions[i].style.display = "block";
        submitButton.style.display = "block";
      } else {
        questions[i].style.display = "none";
      }
    }
  };

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    quizLoop()

  });

  nextButton.addEventListener("click", function() {
    currentQuestion += 1

    if (currentQuestion >= totalQuestions) {
      allQuestions.style.display = "none";
      scoreCountNotice.innerHTML = `WINS: ${scoreCount} OUT OF TOTAL GAMES: ${totalQuestions}.`
      gameEnded.style.display = "block";
      restartButton.style.display = "block";

    } else {
        console.log('next');
        scoreCountNotice.innerHTML = `WINS: ${scoreCount} - REMAINING QUESTIONS: ${totalQuestions - currentQuestion}`
        nextButton.style.display = "none";
        quizLoop()
    }
  });

  restartButton.addEventListener("click", function() {
    location.reload();
  });
};

