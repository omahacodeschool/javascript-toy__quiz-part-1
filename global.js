window.onload = function(){
  //first just make ONE question that displays properly

  var question1 = "How great is pizza?";
  var answer = "SUPER GREAT";
  var notanswers = ["great","fine","i've never had pizza"];
  notanswers.push(answer)
  var choices = document.querySelectorAll(".choices li");
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    //document.getElementById("question").innerHTML = question1;
    for (var i = choices.length - 1; i >= 0; i--) {
      choices[i].innerHTML = notanswers[i]
      //can you loop through multiple arrays??
    }
  });
};