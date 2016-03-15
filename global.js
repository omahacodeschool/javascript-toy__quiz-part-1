window.onload = function(){
  
  var hashQA = {
      "Exposure to sunlight helps a person improve his/her health because:": 
      "the unltraviolet rays convert skin oil into Vitamin D",

      "The ozone layer restricts:":
      "Ultraviolet radiation", 

      "Eugenics is the study of:":
      "altering human beings by changing their genetic components"

  };

  var button = document.getElementById("begin_button");

  button.addEventListener("click", function() {
    for(var i in hashQA) {
      var answer = prompt(i);
        if (answer === "a") {
          alert("Correct!");
        }else{
          alert("Incorrect...");
        }
  
    }
  });

};