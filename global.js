window.onload = function(){
  
  var startButton = document.getElementById("begin_button");

  var allQuestions = [
    questionOne = function(){
      responseOne = prompt("What color are oranges? Blue? Green? Orange? Yellow?");
      if (responseOne.toLowerCase() === "orange"){
        alert("You are correct!");
      }
      else{
        alert("WRONG!");
      }
    },
    questionTwo = function(){
      responseTwo = prompt("Who ran the first marathon? Kyle Sandage? Steve Prefontaine? Pheidippides? Usain Bolt?");
      if (responseTwo.toLowerCase() === "pheidippides"){
        alert("You are correct!");
      }
      else{
        alert("WRONG!");
      }
    },
    questionThree = function(){
      responseThree = prompt("What is the capitol of Kansas? Wichita? Manhattan? Lawrence? Kansas City?");
      if (responseThree.toLowerCase() === "wichita"){
        alert("You are correct!");
      }
      else{
        alert("WRONG!");
      }
    },
  ];

  beginGame = function(){
    for(var i = 0; i < allQuestions.length; i++) {
      allQuestions[i]();
    };
  };
  startButton.addEventListener("click", beginGame);
};






