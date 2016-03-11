window.onload = function(){
  //first just make ONE question that displays properly
  var question1 = "How great is pizza?";
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    document.getElementById("question").innerHTML = question1;
  });
};