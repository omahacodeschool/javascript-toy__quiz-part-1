window.onload = function(){
  var click_it = document.getElementById('begin_button');
  click_it.addEventListener("click", function() {

  var score = 0
  var answer1 = prompt("Who is the Green Bay Packers all time rushing leader? Choose either Ahman Green, Jim Taylor, or John Brockington?");
  if (answer1 === "Ahman Green"){
    alert("You are correct!");
    score ++;
  }
  else{
    alert("Ahman Green is the all-time Packers rushing leader with 8,322 yards!")
  }
  var answer2 = prompt("Who is the Green Bay Packers all time passing leader? Choose either Brett Favre, Aaron Rodgers, or Bart Starr?");
  if (answer2 === "Brett Favre"){
    alert("You are correct!");
    score ++;
  }
  else{
    alert("Brett Favre is the all-time Packers passing leader with 61,655 yards!")
  }
  var answer3 = prompt("Who is the Green Bay Packers all time recieving leader? Choose either Sterling Sharpe, Donald Driver, or Max McGee?");
  if (answer3 === "Donald Driver"){
    alert("You are correct!");
    score ++;
  }
  else{
    alert("Donald Driver is the all-time Packers passing leader with 10,137 yards!");
  }
  alert("You have scored " + score + "out of 3.")

})
};

