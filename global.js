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

  function nextQuestion() { 

      begin.style.display = "none";

      (function(){
          var ul = document.createElement('ul');
          ul.setAttribute('id','choiceList');


          document.getElementById('choices').appendChild(ul);
          quiz[currentQuestion]['choices'].forEach(showChoices);

          function showChoices(element, index, arr) {
              var li = document.createElement('li');
              li.setAttribute('class','question');

              ul.appendChild(li);

              t = document.createTextNode(element);

              li.innerHTML=li.innerHTML + element;
          }
      })();    

      var question = document.getElementById("question");

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

    if (answer == quiz[0]["correct"]) {
      questionResult.innerHTML = ("That is correct!");
      score ++;
      console.log(score);
    } else {
      questionResult.innerHTML = ("Sorry. " + quiz[currentQuestion]["correct"] + " is the answer!");
    }

    answerField.style.display = "none";

  });

  nextButton.addEventListener("click", function() { 
    currentQuestion ++;
  nextQuestion();  
  });

 
};  