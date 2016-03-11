window.onload = function(){
  //first just make ONE question that displays properly
  function fischer_yates_shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }
  var question1 = "How great is pizza?";
  var answer = "SUPER GREAT";
  var notanswers = ["great","fine","i've never had pizza"];
  notanswers.push(answer)
  fischer_yates_shuffle(notanswers)
  var choices = document.querySelectorAll(".choices li");
  var next = document.getElementById("next");
  next.addEventListener("click", function() {
    document.getElementById("question").innerHTML = question1;
    for (var i = choices.length - 1; i >= 0; i--) {
      choices[i].innerHTML = notanswers[i]
    }
  });
};