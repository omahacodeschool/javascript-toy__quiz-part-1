window.onload = function() {

//ojbect for questions, choices, and correct answers?

   var quiz = [
    {
        "question" : "Q1: How many hobbits were in 'The Fellowship' in The Lord of the Rings Trilogy?",
        "choices" : [
                                "A. One",
                                "B. Two",
                                "C. Three",
                                "D. Four"
                            ],
        "correct" : "D",
    },
    {
        "question" : "Q2: What is the hobbit Pippin's last name?",
        "choices" : [
                                "A. Brandybuck",
                                "B. Took",
                                "C. Baggins",
                                "D.Gamgee"
                            ],
        "correct" : "B",
    },
    {
        "question" : "Q3: What is the name of the person in the fellowship who tries to take the ring from Frodo?",
        "choices" : [
                                "A. Gandalf",
                                "B. Farimir",
                                "C. Borimir",
                                "D. Strider"
                            ],
        "correct" : "C",
    },
    {
        "question" : "Q4: What does the creature Gollum call The One Ring?",
        "choices" : [
                                "A. My Precious",
                                "B. My Treasure",
                                "C. My Ring",
                                "D. My Love"
                            ],
        "correct" : "A",    
    },

  ];


  var currentQuestion = 0,
     score = 0,
     chose;

  var submitter = document.getElementById('submitter');
  var nextButton = document.getElementById("nextButton");
  var begin = document.getElementById("beginButton");
  var answerField = document.getElementById("answer");
  var question = document.getElementById("question");    
  var totalResult = document.getElementById("totalResult");

  function nextQuestion() { 

    begin.style.display = "none";

    var node = document.getElementById('choices');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }

      (function(){
        var ul = document.createElement('ul');
        ul.setAttribute('id','choiceList');


        document.getElementById('choices').appendChild(ul);
        quiz[currentQuestion]['choices'].forEach(showChoices);

        function showChoices(element, index, arr) {

            var li = document.createElement('li');

            ul.appendChild(li);
            li.innerHTML = li.innerHTML + element;

        }
      })();

      question.innerHTML = (quiz[currentQuestion]['question']);

      submitter.style.display = "block";

      answerField.style.display = "block";    

    };

  // user clicks begin button to start quiz.  
  begin.addEventListener("click", function() {
  nextQuestion();

  });

  // user submits answer

  submitter.addEventListener("click", function() {

    nextButton.style.display = "block";
    submitter.style.display = "none";

    var answer = document.getElementById("answer").value;
    answer = answer.toUpperCase();

    var questionResult = document.getElementById("questionResult"); 
    questionResult.style.display = "block";

    if (answer == quiz[currentQuestion]["correct"]) {
      questionResult.innerHTML = ("That is correct!");
      score ++;
    } else {
      questionResult.innerHTML = ("Sorry. " + quiz[currentQuestion]["correct"] + " is the answer!");
    }

    answerField.style.display = "none";

    totalResult.innerHTML = "Your score is " + score + " out of " + quiz.length + "." ;

    if (currentQuestion === (quiz.length - 1)){
      nextButton.style.display = "none";
      var scorePercentage = (score / (quiz.length) * 100);
      scorePercentage = scorePercentage.toFixed(2) + "%";
      totalResult.innerHTML = "Your score is " + score + " out of " + quiz.length + ". (That's a " + scorePercentage + "!)";
      var node = document.getElementById('choices');
      while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
      question.style.display = "none";
      questionResult.style.display = "none";
    }      

    };

  });

  nextButton.addEventListener("click", function() { 
  nextButton.style.display = "none";
  currentQuestion ++;
  nextQuestion();  
  questionResult.style.display = "none";
  answerField.value = "";
  });


 
};  