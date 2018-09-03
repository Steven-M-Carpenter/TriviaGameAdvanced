/****************************************************************************************************
/* Declare questions and answers
/****************************************************************************************************/

var q0 = {
    question: "How many miles to the Sun?",
    ans0: "93 million",
    ans1: "1 light years",
    ans2: "45,000",
    ans3: "2 light years",
    correct: "ans0",
    ansInp: "Q0Answers",
    video: "<iframe src=\"https://giphy.com/embed/fjxOHrF1tmiafDI5rh\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q1 = {
    question: "What is Barbie's middle and last name?",
    ans0: "Flower Petal",
    ans1: "Millicent Roberts",
    ans2: "Leigh Jones",
    ans3: "Rachel Jones",
    correct: "ans1",
    ansInp: "Q1Answers",
    video: "<iframe src=\"https://giphy.com/embed/pSw6gndy7TFSg\" width=\"480\" height=\"360\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q2 = {
    question: "What is the longest river in the world?",
    ans0: "The Amazon",
    ans1: "The Nile",
    ans2: "The Mississippi",
    ans3: "The Rhine",
    correct: "ans0",
    ansInp: "Q2Answers",
    video: "<iframe src=\"https://giphy.com/embed/xPi7mXmEKQHFC\" width=\"480\" height=\"360\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q3 = {
    question: "The Medellin Cartel spent how much on rubber bands each month to hold their cash?",
    ans0: "$500",
    ans1: "$2,500",
    ans2: "$15,000",
    ans3: "$50,000",
    correct: "ans1",
    ansInp: "Q3Answers",
    video: "<iframe src=\"https://giphy.com/embed/HhWG41ntlV6UM\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q4 = {
    question: "Which city is farthest west?",
    ans0: "Santa Barbara, California",
    ans1: "Los Angeles, California",
    ans2: "Las Vegas, Nevada",
    ans3: "Reno, Nevada",
    correct: "ans3",
    ansInp: "Q4Answers",
    video: "<iframe src=\"https://giphy.com/embed/rXLPrqcuDCwkE\" width=\"480\" height=\"361\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q5 = {
    question: "What's the original name for Kool-Aid?",
    ans0: "Oh Yeah!",
    ans1: "Fruit Smack",
    ans2: "Go-Go Juice",
    ans3: "Kool-Kids",
    correct: "ans1",
    ansInp: "Q5Answers",
    video: "<iframe src=\"https://giphy.com/embed/ZCUNomMdWXd2E\" width=\"480\" height=\"372\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q6 = {
    question: "The story Green Eggs and Ham uses only how many unique words.",
    ans0: "50",
    ans1: "100",
    ans2: "150",
    ans3: "200",
    correct: "ans0",
    ansInp: "Q6Answers",
    video: "<iframe src=\"https://giphy.com/embed/p3Wl6y9bTgyYw\" width=\"480\" height=\"320\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q7 = {
    question: "According to Toyota, what is the plural of Prius.",
    ans0: "Priuses",
    ans1: "Priums",
    ans2: "Prias",
    ans3: "Prii",
    correct: "ans3",
    ansInp: "Q7Answers",
    video: "<iframe src=\"https://giphy.com/embed/uuUPYKUYhZXqw\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q8 = {
    question: "What is the real character name of \"Shaggy\" from the Scooby Doo cartoon.",
    ans0: "Rusty West",
    ans1: "Archibal Hamm",
    ans2: "Norville Rogers",
    ans3: "Adam Shaglin",
    correct: "ans2",
    ansInp: "Q8Answers",
    video: "<iframe src=\"https://giphy.com/embed/3o7WIpK9bDKFzrI4w0\" width=\"480\" height=\"414\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
};

var q9 = {
    question: "Which was the first planet discovered by telescope?",
    ans0: "Saturn",
    ans1: "Jupiter",
    ans2: "Uranus",
    ans3: "Mars",
    correct: "ans2",
    ansInp: "Q9Answers",
    video: "<iframe src=\"https://giphy.com/embed/xxrE5TlRSVQHe\" width=\"480\" height=\"382\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>",
    // video: "<iframe src=\"https://giphy.com/embed/xxrE5TlRSVQHe\" width=\"480\" height=\"382\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/xxrE5TlRSVQHe\">via GIPHY</a></p>"
};

/****************************************************************************************************
/* Set global variables
/****************************************************************************************************/

var questionTimer = "";
var timerCount = 15;
var qCount = -1;
var isCorrect = false;
var cadence = 5;
var gameTimer = "";
var qIndex = "";
var totalCorrect = 0;
var totalWrong = 0;
var totalNoAns = 0;
var questionArray = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];

/****************************************************************************************************
/* Define the functions used in the game
/****************************************************************************************************/

function splashWelcome() {
    var slWelcomeScreen = `
    <div class="container">
        <div class="row pt-5 pb-5">
            <p class=col-lg-5></p>
                <button id="StartButton" type="button" class="col-lg-2 btn btn-success my-5 align-center">Start</button>
            <p class=col-lg-5></p>
        </div>
    </div>
    `

    $('#ButtonSpace').html(slWelcomeScreen);
}

function splashResults() {
    var slResultsScreen = `
    <div class="container mb-5 border-top border-dark">
        <div class="row">
            <section id="ShowResults" class="col-lg-12 pl-0">
                <h2 id="ResultTitle" class="col-lg-12 mt-3 mb-3 text-center">Your Results</h2>
            </section>
        </div>
        <div class="row">
            <section id="CorrectArea" class="col-lg-12 pl-0">
                <h3 id="TotalCorrect" class="col-lg-12 mt-3 mb-3 text-center">Correct Answers:  ${totalCorrect}</h3>
            </section>
        </div>
        <div class="row">
            <section id="WrongArea" class="col-lg-12 pl-0">
                <h3 id="TotalWrong" class="col-lg-12 mt-3 mb-3 text-center">Incorrect Answers:  ${totalWrong}</h3>
            </section>
        </div>
        <div class="row">
            <section id="UnAnsweredArea" class="col-lg-12 pl-0">
                <h3 id="TotalUnanswered" class="col-lg-12 mt-3 mb-3 pb-5 text-center">No Response:  ${totalNoAns}</h3>
            </section>
        </div>
    `


    // var htmlCode = '<div class="row"><section id="ShowResults" class="col-lg-12 pl-0"><h2 id="ResultTitle" class="col-lg-12 mt-3 mb-3 text-center">Your Results</h2></section></div><div class="row"><section id="CorrectArea" class="col-lg-12 pl-0"><h3 id="TotalCorrect" class="col-lg-12 mt-3 mb-3 text-center">Correct Answers:  ' + totalCorrect + '</h3></section></div><div class="row"><section id="WrongArea" class="col-lg-12 pl-0"><h3 id="TotalWrong" class="col-lg-12 mt-3 mb-3 text-center">Incorrect Answers:  ' + totalWrong + '</h3></section></div><div class="row"><section id="UnAnsweredArea" class="col-lg-12 pl-0"><h3 id="TotalUnanswered" class="col-lg-12 mt-3 mb-3 text-center">No Response:  ' + totalNoAns + '</h3></section></div>';
    $('#GameBody').html(slResultsScreen);
}

function splashTimer() {
    cadence = 15000;
    var slTimerScreen = `
        <div class="container">
            <div class="row">
                <span id="GameTimer" class="col-lg-12 pb-3 text-center border-bottom border-succes">
                    Time Remaining: 
                </span>
            </div>
        </div>
    `
    $('#TimerSpace').html(slTimerScreen);


}

function splashCorrectAns() {
    qIndex = questionArray[qCount];
    correctAns = qIndex.correct;
    answerText = qIndex[correctAns];
    btnGrp = qIndex.ansInp;
    cadence = 5;
    videoString = qIndex.video;


    var selValue = $('input[name = "' + btnGrp + '"]:checked').val();
    if (selValue === correctAns) {
        totalCorrect++;
        isCorrect = true;
    }
    else if (selValue === undefined) {
        totalNoAns++;
        isCorrect = false;
    }
    else {
        totalWrong++;
        isCorrect = false;
    }

    var slCATimerClear = `
        <div class="container">
            <div class="row">
                <span id="GameTimer" class="col-lg-12 pb-3 text-center border-top border-white">
                
                </span>
            </div>
        </div>
    `
    $('#TimerSpace').html(slCATimerClear);

    var slCAButtonClear = `
    <div class="container mb-5 border-top border-dark">
        <div class="row">
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
    `
    $('#ButtonSpace').html(slCAButtonClear);


    if (isCorrect === false) {
        var slCADisplay = `
        <div class="container border-top border-dark">
            <div class="row pl-4">
                <section id="CorrectResp" class="CorPrompt col-lg-12 pl-0 pb-5 pt-5 text-center">
                    ${videoString}
                    <br>
                    <br>
                    <p class="LeadIn">Sorry!  The correct answer is:  </p>
                    <span class="answerText">  ${answerText}</span>
                    <br>
                </section>
            </div>
        </div>        `
    }
    else {
        var slCADisplay = `
        <div class="container border-top border-dark">
            <div class="row pl-4">
                <section id="CorrectResp" class="CorPrompt col-lg-12 pl-0 pb-5 pt-5 text-center">
                    ${videoString}
                    <br>
                    <br>
                    <p class="LeadIn">That's correct!  You got it!</p>
                    <span class="answerText">  ${answerText}</span>
                    <br>
                </section>
            </div>
        </div>        `
    }

    // <img src="./assets/images/Q${qCount}.jpg" alt="image">

    $('#QandASpace').html(slCADisplay);

    advanceTimer = setInterval(function () {
        cadence--;
        // console.log("cadence = " + cadence);
        if (cadence < 1) {
            clearInterval(advanceTimer);
            if (qCount >= (questionArray.length - 1)) {
                splashResults();
            }
            else {
                nextQuestion();
            }
        }
    }, 1000);
}

function splashQA() {
    qIndex = questionArray[qCount];
    questionValue = qIndex.question;
    ans0Value = qIndex.ans0;
    ans1Value = qIndex.ans1;
    ans2Value = qIndex.ans2;
    ans3Value = qIndex.ans3;

    var slQADisplay = `
    <div class="container border-top border-dark">
        <div class="row pl-4">
            <section id="Question${qCount}" class="QuestText col-lg-12 pl-0 pb-5 pt-3 text-center">
                ${questionValue}
            </section>
        </div>
        <div class="row pl-4 pb-5 pt-2 justify-content-center">
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="inputQ${qCount}R0" name="Q${qCount}Answers" class="custom-control-input" value="ans0">
                <label id="Q${qCount}Radio0" class="answerOption custom-control-label" for="inputQ${qCount}R0">${ans0Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline text-center">
                <input type="radio" id="inputQ${qCount}R1" name="Q${qCount}Answers" class="custom-control-input" value="ans1">
                <label id="Q${qCount}Radio1" class="answerOption custom-control-label" for="inputQ${qCount}R1">${ans1Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline text-center">
                <input type="radio" id="inputQ${qCount}R2" name="Q${qCount}Answers" class="custom-control-input" value="ans2">
                <label id="Q${qCount}Radio2" class="answerOption custom-control-label" for="inputQ${qCount}R2">${ans2Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline text-center">
                <input type="radio" id="inputQ${qCount}R3" name="Q${qCount}Answers" class="custom-control-input" value="ans3">
                <label id="Q${qCount}Radio3" class="answerOption custom-control-label" for="inputQ${qCount}R3">${ans3Value}</label>
            </div>
    </div>
    `
    $('#QandASpace').html(slQADisplay);

    var slSubmitDisplay = `
    <div class="container mb-5 border-top border-dark">
        <div class="row">
            <p class="col-lg-5"></p>
                <button id="SubmitButton" class="col-lg-2 btn btn-success btn-lg mt-5 mb-5 center=block" type="button">Submit</button>
            <p class="col-lg-5"></p>
        </div>
    </div>
    `
    $('#ButtonSpace').html(slSubmitDisplay);

}

function startCountDown() {
    gameTimer = setInterval(function () {
        timerCount--;
        // console.log("timerCount = " + timerCount);
        var minutes = Math.floor(timerCount / 60);
        var seconds = timerCount - minutes * 60;
        seconds = ("0" + seconds).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        // console.log("timerCount = " + timerCount + "    minutes = " + minutes + "     seconds = " + seconds);
        $('#GameTimer').html("Time Remaining:  " + minutes + ":" + seconds);
        if (timerCount === 0) {
            clearInterval(gameTimer);
            splashCorrectAns();
        }
    }, 1000);
}

function nextQuestion() {
    qCount++;
    timerCount = 10;
    splashQA();
    splashTimer();
    startCountDown();
    $("#SubmitButton").on("click", function () {
        clearInterval(gameTimer);
        splashCorrectAns();
    });
}

/****************************************************************************************************
/* Game play
/****************************************************************************************************/

$(document).ready(function () {

    splashWelcome();

    $("#StartButton").on("click", function () {
        nextQuestion();
    });

});
