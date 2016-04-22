## __Instructions__

Build a quiz game using JavaScript and HTML.  Use JavaScript to interact with HTML elements via the "DOM".  What we are doing is DOM manipulation.

## __User Experience__

1. The user loads the index.html page, which contains a button to begin the game.
2. They are presented with a multiple choice question.
3. Upon answer, they see a result telling them whether they answered correctly or incorrectly. 
4. They click "Next Question" to move on. (Except for the last question).
5. Steps 2-4 repeat until there are no more questions.
6. Once they have answered all questions, they are able to view their results, telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. You answered 7 of 10 questions correctly, good for 70.0%

>I'll disregard optimizing, refactoring, or any sort of coding best practices for now, we just want a minimum viable product.

## __1. Build our initial files__

Pretty easy here.  All we need are an HTML file, which I'll name  ```index.html``` and a JavaScript file, which I'll name ```global.js```

We'll set up the ```index.html``` like this:

```html
<!doctype html>
<html>
<head>
  <title>Quiz Game Part 1</title>

  <script type="text/javascript" src="global.js"></script>
</head>
<body>

<h1>Quiz Game</h1>

</body>
</html>
```

## __2. HTML framwork__

I'll go with this basic framework in the ```<body>```:

```html

<button id="begin">Begin the Quiz</button>

<div id="quiz" style="display: none;">
  <div id="question">
    <!-- Use JavaScript to put a question here -->
  </div>
  <div id="choices">
    <!-- Use JavaScript to put choices here -->
  </div>

<!-- Would rather do radio buttons vs text field -->
  <input type="text" id="answer">
  <button id="submit">Submit</button>
</div>

<div id="question_result">
  <!-- Use JavaScript to put each questions' result here -->
</div>

<!-- The button the user clicks after they see that a question is right or wrong. -->
<!-- This button will load the next question except when all questions have been asked. -->
<button id="next">Next Question</button>

<div id="total_result">
<!-- Use JavaScript to put the final result here -->
</div>
```

>I'd prefer radio buttons, but we'll maybe do that later.

>By later, how about right now.  I found this quiz

## __3. JavaScript__



