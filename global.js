window.onload = function(){
  
  var startButton = document.getElementById("begin_button");

  beginGame = function(){
    questionOne = prompt("What color are oranges? Blue? Green? Orange? Yellow?");
    if (questionOne.toLowerCase() === "orange"){
      alert("You are correct!")
    }
    else{
      alert("WRONG!")
    };
    questionTwo = prompt("Who ran the first marathon? Kyle Sandage? Steve Prefontaine? Pheidippides? Usain Bolt?");
    if (questionTwo.toLowerCase() === "pheidippides"){
      alert("You are correct!")
    }
    else{
      alert("WRONG!")
    };
  };
  startButton.addEventListener("click", beginGame);
};