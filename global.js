window.onload = function(){
  var questOneAnswer = "cat"
  
  var click_it = document.getElementById("begin_button");
  
  click_it.addEventListener("click", function(){

    var alert_to_show = alert("Welcome to the Quiz!");

    var questOne = prompt("Question 1! What's the best pet to have? Dog, Cat, Ferret, or Mouse?");
    if (questOne === questOneAnswer){ 
      alert("Correct! Press OK to continue to question 2.");
      
    };
    if (questOne != questOneAnswer){
      alert("That's incorrect. Please click OK to continue to question 2.");
    };
      
  });
};