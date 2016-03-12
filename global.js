window.onload = function(){
  
  var startButton = document.getElementById("begin_button");
  var submitButton = document.getElementById("submitter")

  var correctAnswers = 0;

  var allQuestions = [
    questionOne = function(){
      document.getElementById("quiz").innerHTML = "What color are oranges?";
      document.getElementById("choices").innerHTML = "Blue, Red, Pink,Orange";

    }
    // questionTwo = function(){
    //   responseTwo = prompt("Who ran the first marathon? Kyle Sandage? Steve Prefontaine? Pheidippides? Usain Bolt?");
    //   if (responseTwo.toLowerCase() === "pheidippides"){
    //     alert("You are correct!");
    //     correctAnswers += 1;
    //   }
    //   else{
    //     alert("WRONG!");
    //   }
    // },
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

  beginGame = function(){
    for(var i = 0; i < allQuestions.length; i++) {
      allQuestions[i]();
    };
  };

  // var score = (correctAnswers / allQuestions.length) * 100;
  // alert("You answered " + correctAnswers + " out of " + 
  //   allQuestions.length + ".");
  // alert("You scored " + score.toFixed(2) + "% on this exam.");
  // };

  submitAnswer = function(){
    responseOne = document.getElementById("answer").value;
   if (responseOne.toLowerCase() === "orange"){
      document.getElementById("question_result").innerHTML = "Correct!";
      correctAnswers += 1;
    }
    else{
      document.getElementById("question_result").innerHTML = "Wrong!";
    }
  };

  submitButton.addEventListener("click", submitAnswer);
  startButton.addEventListener("click", beginGame); 

};






