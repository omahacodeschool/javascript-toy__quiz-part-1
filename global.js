window.onload = function(){
  
  var submitButton = document.getElementById("submitter");
  var nextButton = document.getElementById("next");

  var correctAnswers = 0;

  var allQuestions = [
    questionOne = function(){
      document.getElementById("quiz").innerHTML = "What color are oranges?";
      document.getElementById("choices").innerHTML = "Blue, Red, Pink,Orange";
    },
    questionTwo = function(){
      document.getElementById("quiz").innerHTML = 
        "Who ran the first marathon?";
      document.getElementById("choices").innerHTML = "Kyle Sandage? Steve Prefontaine? Pheidippides? Usain Bolt?";  
    },
    questionThree = function(){
      document.getElementById("quiz").innerHTML = "What is the capitol of Kansas?";
      document.getElementById("choices").innerHTML = "Wichita? Manhattan? Lawrence? Kansas City?";
    }
  ];

  var allAnswers = [
    answerOne = function(){
      responseOne = document.getElementById("answer").value;
      if (responseOne.toLowerCase() === "orange"){
        document.getElementById("question_result").innerHTML = "Correct!";
        correctAnswers += 1;
      }
      else{
        document.getElementById("question_result").innerHTML = "Wrong!";
      };  
    },
    answerTwo = function(){
      responseTwo = document.getElementById("answer").value;
      if (responseTwo.toLowerCase() === "pheidippides"){
        document.getElementById("question_result").innerHTML = "Correct!";
        correctAnswers += 1;
      }
      else{
        document.getElementById("question_result").innerHTML = "Wrong!";
      };
    },
    answerThree = function(){
      responseThree = document.getElementById("answer").value;
      if (responseThree.toLowerCase() === "wichita"){
        document.getElementById("question_result").innerHTML = "Correct!";
        correctAnswers += 1;
      }
      else{
        document.getElementById("question_result").innerHTML = "Wrong!";
      };
    }
  ];

  var i = 0
  allQuestions[i]();

  nextQuestion = function(){
    i++
    if(i < allQuestions.length){
      allQuestions[i]();
      document.getElementById("answer").value = ""
      document.getElementById("question_result").innerHTML = ""
    }
    else{
      alert("Game Over");
    };
    if(i == allQuestions.length){
    score()
    };
  };

  score = function(){
    var score = (correctAnswers / allQuestions.length) * 100;
    document.getElementById("total_results").innerHTML = "You answered " + correctAnswers + " out of " + allQuestions.length +" correctly. " + "You scored " + score.toFixed(2) + "% on this exam.";
  };

  submitAnswer = function(){
    if(i < allQuestions.length){
      allAnswers[i]();

    };
  };

  submitButton.addEventListener("click", submitAnswer); 
  nextButton.addEventListener("click", nextQuestion);

};






