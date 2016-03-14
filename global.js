// Command to halt this page loading until the index page has fully loaded
window.onload = function(){
// Setting variale 'click_it' to the 'begin_button' element in the index page
  var click_it    = document.getElementById("begin_button");
// Setting variable 'question_arr' to an Array of Hashes for questions and answer options
  var questionArr = [{"Which is the superior 80's sequel?": "qOne", 
                    "Aliens": "correct", "The Road Warrior": "B", 
                      "The Empire Strikers Back": "C", "Evil Dead II": "D"},  
                    {"What is the best color?": "qTwo", "Red": "A",
                      "Blue": "B", "Yellow": "C", "Green": "correct"}, 
                    {"Which direction?": "qThree", "East": "A", "West": "B", "North": "correct", "South": "D"}, 
                    {"What is the correct answer?": "qFour", "A": "A", 
                      "B": "correct", "C": "C", "D": "D"}
                    ];
// Function found online to call Hash key by their value
  Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
        if( this[ prop ] === value )
          return prop;
      }
    }
  }
// Adding an event listener to button element 'click_it'
  click_it.addEventListener("click", function(){
// Defining variable for number of correct answers
    var winCount = 0;
// 'for' loop set to last the length of 'questionArr'
    for (var i = 0; i < questionArr.length; i++) {
// Setting variable to collect user answers collected by the prompt
// Prompt presents the keys of each Hash element in 'questionArr'     
      var UserAnswer = prompt(Object.keys(questionArr[i]));
// Conditional checking user answer vs correct answer
      if (UserAnswer === questionArr[i].getKeyByValue("correct")) {
// Alert for correct answer
        alert("Correct! " + UserAnswer + " is right!")
// Add 1 to correct answer count
        winCount++
// Log correct answer
        console.log("Correct: " + UserAnswer);
      } else {
// Alert for incorrect answer
        alert("Try again...")
// Log incorrect answer while showing the correct answer
        console.log("Incorrect: " + UserAnswer + " (correct: " + questionArr[i].getKeyByValue("correct") + ")");
      }
    }
// Alert showing the user their correct answer percentage
        alert("You've answered " + ((winCount / 4) * 100) + "% correctly!")
// Log recording the correct answer ratio
        console.log("Win Ratio: " + winCount + ":" + 4);
  });
};