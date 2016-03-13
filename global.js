window.onload = function(){
  
  var startButton = document.getElementById("begin_button");
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
    }
    // questionThree = function(){
    //   responseThree = prompt("What is the capitol of Kansas? Wichita? Manhattan? Lawrence? Kansas City?");
    //   if (responseThree.toLowerCase() === "wichita"){
    //     alert("You are correct!");
    //     correctAnswers += 1;
    //   }
    //   else{
    //     alert("WRONG!");
    //   }
    // },
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
    }
  ];

  beginGame = function(){
    for(var i = 0; i < allQuestions.length; i++) {
      allQuestions[i]();
    };
    nextQuestion = function(){
      i++;
    };
  };



  // var score = (correctAnswers / allQuestions.length) * 100;
  // alert("You answered " + correctAnswers + " out of " + 
  //   allQuestions.length + ".");
  // alert("You scored " + score.toFixed(2) + "% on this exam.");
  // };

  submitAnswer = function(){
    for(var i = 0; i < allAnswers.length; i++) {
      allAnswers[i]();
    };
  };

  submitButton.addEventListener("click", submitAnswer);
  startButton.addEventListener("click", beginGame); 
  nextButton.addEventListener("click", nextQuestion);

};






