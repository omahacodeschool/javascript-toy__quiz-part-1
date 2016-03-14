window.onload = function(){
  var click_it = document.getElementById('begin_button');
  var quiz = document.getElementById('quiz');
  var question = document.getElementById('question');
  var choices = document.getElementById('choices');
  var answer = document.getElementById('answer');
  var questionResult = document.getElementById('questionResult');
  var total = document.getElementById('totalResult');
  var submitter = document.getElementById('submitter'); 
  var next = document.getElementById('next');
  
  var score = 0

  var question1 = new Object();
    question1["question"] = "Who is the Green Bay Packers all time rushing leader?";
    question1["choices"] = ["Ahman Green", "Jim Taylor", "John Brockington", "Edgar Bennet"];
    question1["answer"] = "Ahman Green";
  var question2 = new Object();
    question2["question"] = "Who is the Green Bay Packers all time passing leader?";
    question2["choices"] = ["Brett Favre", "Aaron Rodgers", "Lynn Dickie", "Bart Starr"];
    question2["answer"] = "Brett Favre";
  var question3 = new Object();
    question3["question"] = "Who is the Green Bay Packers all time recieving leader?";
    question3["choices"] = ["Sterling Sharpe", "Donald Driver", "Jordy Nelson", "Max McGee"];
    question3["answer"] = "Donald Driver";

var arrayOfQuestions = [];
  arrayOfQuestions.push(question1);
  arrayOfQuestions.push(question2);
  arrayOfQuestions.push(question3);

  var oneQuestion = 0;


  click_it.addEventListener("click", function() {
    click_it.style.display = "none";
    question.innerHTML = arrayOfQuestions[oneQuestion]["question"];

    choices.innerHTML = arrayOfQuestions[oneQuestion]["choices"];
    answer.value = "";

    quiz.style.display = "block";
    submitter.style.display = "block";
    total.innerHTML = "Your score is now " + score;

  });

  submitter.addEventListener("click", function() {
    var params = answer.value;
    
    questionResult.style.display = "block";
    
    if (params == arrayOfQuestions[oneQuestion]["answer"]) {
      score++;
      questionResult.innerHTML = ("Correct!");
      total.innerHTML = "Your score is now " + score ;
    } else {
      questionResult.innerHTML = ("Nope.");
    }

    submitter.style.display = "none";
    next.style.display = "block";

    if (oneQuestion >= arrayOfQuestions.length - 1) {
      total.innerHTML = score; //the finalscore
      next.style.display = "none";
    }
  });

  next.addEventListener("click", function() {
      submitter.style.display = "block";
      next.style.display = "none";
      quiz.style.display = "block";
      questionResult.style.display = "none";
      oneQuestion++
      question.innerHTML = arrayOfQuestions[oneQuestion]["question"];

      choices.innerHTML = arrayOfQuestions[oneQuestion]["choices"];
      
      answer.value = "";
      total.innerHTML = "You have " + score;

    }); 

};