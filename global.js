// broadly scoped variables that track the user's current question via a numerical value
// As well as the user's score (how many questions he/she got right).
var currentQuestion = 0;
var scoreCount = 0;

// Function triggered by form submit to process user's question choice 
function determineScore(e) {

  //var correctNotification: Variable <P> tag with "correct" notifcation
  //var wrongNotification: Variable <P> tag with "wrong" notifcation 
  //var submitButton: Variable storing the submit button 
  // var nextButton: variable storing next Button. Button triggers onclick action to get next question in Collection
  var correctNotification = document.getElementById('correct');
  var wrongtNotification = document.getElementById('wrong');
  var submitButton = document.getElementById('submitButton');
  var nextButton = document.getElementById('nextButton');


  correctNotification.style.display = "none"; //Hides notifcation when fuction is called
  nextButton.style.display = "block"; // displays button when function is called
  submitButton.style.display = "none"; // hides button when fuction is called.

  // Variable stores collection of radio buttons for question 
  var radios = document.forms[0].elements["questionChoices" + currentQuestion];

  // Empty variable that will  eventually store the user's radio selection
   var userSelection;

   //Loop checks each element in radios collection. Stores the radio button with the checked attribute in var userSelection;
    for (var i=0, len=radios.length; i<len; i++) {    
      if ( radios[i].checked ) {
        userSelection = radios[i].value;
      }
    }

    // Condtional statment used to determine if user selection is correct or false.
    //
    //If userSelection is 2, correct notifcation is displayed. scoreCount is increased by 1
    if (userSelection == 2) { // 2 = true 1 = false
      correctNotification.style.display = "block";
      scoreCount += 1 

    // if choice is not selected or has a value of 1, "wrong" notifcation is displayed
    } else { 
      wrongtNotification.style.display = "block";
    }

    // prevents page from reloading once form submission method is complete
    e.preventDefault();
 } 

// When DOM loaded, all subsequent script information is generated
window.onload = function(){
  var allQuestions = document.getElementById('questions'); //master div for most in-game elements
  var startButton = document.getElementById('startButton'); 
  var nextButton = document.getElementById('nextButton'); 
  var restartButton = document.getElementById('restartButton');
  var correctNotification = document.getElementById('correct');
  var wrongtNotification = document.getElementById('wrong');
  var questions = document.getElementsByClassName('question'); //collection of each instance of question class
  var scoreCountNotice = document.getElementById('scoreCountNotice'); //variable storing div that will be used to display number of questions answered correctly, number of remaining games, and eventually total number of games played
  var gameEnded = document.getElementById('gameEnded'); //variable storing game over notifcation
  var totalQuestions = questions.length; // variable storing record of how many question instances are in questions varibale

  //Fuction loops through questions collection. 
  function quizLoop() {
    correctNotification.style.display = "none";
    wrongtNotification.style.display = "none";
    for (var i = 0; i < questions.length; i++) {
      if (i == currentQuestion) { //action triggers if element index matches the current question variable value
        questions[i].style.display = "block"; //shows instance question and choices
        submitButton.style.display = "block"; //shows submit button
      } else {
        //hides questions if index doesn't match currentQuestion. important to hide previous questions and upcomming questions
        questions[i].style.display = "none"; 
      }
    }
  };

 //event listener that triggers when startButton is clicked.
 //Hides startButton and calls quizLoop() function.
  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    quizLoop()

  });

  //event listener that is triggered when next button is clicked
  nextButton.addEventListener("click", function() {
    currentQuestion += 1 // increases value of currentQuestion to get now question

    //triggers when user has interacted with all questions in the collection
    if (currentQuestion >= totalQuestions) {
      allQuestions.style.display = "none"; //hides all items in parent question div
      scoreCountNotice.innerHTML = `WINS: ${scoreCount} OUT OF TOTAL GAMES: ${totalQuestions}.` //updates scoreCountNotice with end-game stats.
      gameEnded.style.display = "block"; // displays end game message
      restartButton.style.display = "block"; //dispalys restart button that will refresh page so that user can play again.

    //triggers if user has not interacted with all questions
    } else {
        console.log('next');
        //updates scoreCountNotice with current game stat information
        scoreCountNotice.innerHTML = `WINS: ${scoreCount} - REMAINING QUESTIONS: ${totalQuestions - currentQuestion}`
        nextButton.style.display = "none"; // hides next button
        quizLoop() // calls quiz loop function
    }
  });

  //event triggers when restartButton is clicked. Only visible when user is out of questions. WIll reload the page so that user can play again.
  restartButton.addEventListener("click", function() {
    location.reload();
  });
};

