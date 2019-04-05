var myQuestions = [
    {
        question: "Your Mom is angry that you stayed out after midnight.You say:",
        answers: {
            a: "Sorry, Mother",
            b: "Bag your Face",
            c: "Don't have a Cow",
        },
        correctAns: "c"
    },
    {
        question: "You've just be given an unattractive top to wear. You're not wearing it and say:",
        answers: {
            a: "It's not my style",
            b: "Gag me with a spoon",
            c: "Butter",
        },
        correctAns: "c"
    },
    {
        question: "You've just be given an attractive top to wear. You're please and say:",
        answers: {
            a: "It's gnarly",
            b: "It's nice",
            c: "It's grody",
        },
        correctAns: "a"
    },
    {
        question: "Your brother throws the remote at you hitting you in the head. You say:",
        answers: {
            a: "What's your Damage?",
            b: "Good Throw",
            c: "Butter",
        },
        correctAns: "a"
    },
    {
        question: "You are excited to go out. You say:",
        answers: {
            a: "I'm chill!",
            b: "I'm grody to the max!",
            c: "I'm stoked!",
        },
        correctAns: "c"
    },
    {
        question: "You are given a compliment -- that might be:",
        answers: {
            a: "Bag your Face",
            b: "You be illin'",
            c: "You're looking Choice",
        },
        correctAns: "c"
    },
    {
        question: "You are given an insult -- that might be:",
        answers: {
            a: "Da Bomb",
            b: "Poser",
            c: "The Baddest",
        },
        correctAns: "b"
    },
    {
        question: "Time to go. You say:",
        answers: {
            a: "Gotta Bounce",
            b: "Word up",
            c: "Auf Wiedersehen",
        },
        correctAns: "a"
    },
]

var score = 0;

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');


var number = 91;
var intervalId;



function buildQuiz() {
    //place to store the HTML output
    var output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //store the list of answer choices
            var answers = [];
            //and for each available answer
            for (letter in currentQuestion.answers) {
                //add an HTML radio button
                answers.push(
                    `<label id="ansButton">
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}:   
                      ${currentQuestion.answers[letter]}</label>`
                );
            }

            //add this question and its answers to the input
            output.push(
                `<h3 class="question"> ${currentQuestion.question} </h3>
                    <h4 class="answers"> ${answers.join('')} </h4>
                    <br>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}


function showResults() {
    //gather answer containers from quiz

    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        //find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question' + questionNumber + ']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if answer is correct
        if (userAnswer === currentQuestion.correctAns) {
            numCorrect++;
        }


    })
    resultsContainer.innerHTML = `<h2>You got ${numCorrect} out of ${myQuestions.length}.</h2>`;

}

function rightOrDweeb(){
    if (numCorrect>5){
        alert ("You're RIGHTEOUS!!")
    }
    else{
        alert ("Dweeb!!")
    }
}



// display quiz right away
buildQuiz();

$("#main-que").hide();

$("#results").hide();

  $("#start").click(function(){
    $("#main-que").show();
      });

startButton.addEventListener('click', runClock);

function runClock() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").text("Timer: " + number + " seconds");

    if (number === 0) {
        stop();
        alert("Time Up!");
        showResults;
    }
}

function stop() {
    clearInterval(intervalId);
}


// on submit, show results
submitButton.addEventListener('click', showResults);
$("#submit").click(function(){
    $("#results").show();
  });
