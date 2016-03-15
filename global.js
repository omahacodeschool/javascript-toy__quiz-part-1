window.onload = function(){

  var correctAnswer = 0;
  var question = document.getElementById("question");
  var choices = document.getElementById("choices");
  var answer = document.getElementById("answer");
  var question_result = document.getElementById("question_result");
  var next = document.getElementById("next");
  var total_result = document.getElementById("total_result");

  var questionHash = new Object();
    questionHash["question"] = "As I was going to St. Ives, <br> I met a man with seven wives, <br> Each wife had seven sacks, <br> Each sack had seven cats, <br> Each cat had seven kits: <br> Kits, cats, sacks, and wives, <br> How many were there going to St. Ives?";
    questionHash["choices"] = ["1, 2402, 343, or 2401"];
    questionHash["going"] = "1";

  var button = document.getElementById('begin_button');
  button.addEventListener("click", function() {

    var quiz = document.getElementById('quiz');
    question.innerHTML = questionHash["question"]
    choices.innerHTML = questionHash["choices"]
    quiz.style.display = "block";

    answer.addEventListener("onsubmit", function() {
      if (answer.value === questionHash["going"]) {
        correctAnswer++
        question_result.innerHTML = "That's correct!"
      }
      else {
        question_result.innerHTML = "Sorry, that's incorrect Better luck with the next one."
      };
      });
    }
  });  
};


  // var correctAnswer = 0
  // var numberOfQuestions = 3
  // var button = document.getElementById("begin_button");

  // button.addEventListener("click", function(){

  //   var questionOne = prompt("What weighs more? \n A)A feather \n B)An elephant \n C)The moon \n D)Nothing");

  //     if (questionOne == "c"){
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, better luck with the next one.");
  //     };

  //   var questionTwo = prompt("What weighs less? \n A)A bowling ball \n B)A neutron star \n C)A puppy \n D)Your conscience");

  //     if (questionTwo == "c") {
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, better luck with the next one.");
  //     };

  //   var questionThree = prompt("What weighs on you more? \n A)The atmosphere \n B)Debt \n C)Guilt \n D)Responsibility");

  //     if (questionTwo == "c") {
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, well, there are other quizzes.");
  //     };

  //     var percentageCorrect = ((correctAnswer/numberOfQuestions) * 100);

  //     alert("you got " + correctAnswer + " out of " + numberOfQuestions + " correct!  That's good for " + percentageCorrect + "%!");

  //   });
