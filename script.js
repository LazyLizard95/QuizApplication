let startedGame = false;
let timer = 30;
highScoreArray = [];
const startMenu = function () {
    $(".start-btn").addClass('hide');
    gameTimer = setInterval(startGame, 1000);
    questionIndex = 0;
    timer = 30;
    startedGame = true;
    $("#question-container").removeClass("hide");
    switchQuestion();
    startGame();
}
$(".start-btn").on('click', startMenu)
$(".question-btn").each(function () { //question handling
    $(this).on('click', function (event) {
        var buttonId = event.target.textContent //checks what was clicked
        var correctAnswer = correctAnswers[questionIndex]
        questionIndex++
        if (buttonId === correctAnswer) { //checks what was clicked and compares with correctAnswer array
            timer = timer + 5;
            $("#response").text("Correct!")
        } else {
            timer = timer - 5;
            $("#response").text("Incorrect!")
        }
        switchQuestion(); //re run the switch statement on questionKey.js
    })
})
function startGame() { //timer function
    if (startedGame) {
        timer--
        $(".timerText").text(timer);
    }
    if (timer === 0 || timer < 0) {
        timer = 0; //prevent negative numbers
        gameOver();
        return;
    }
    $("#gameover").addClass('hide');
    $("#submit").removeClass('hide');
    $("#leaderboard").addClass('hide');
}
function gameOver() {
    $("#question-container").addClass('hide');
    $("#gameover").removeClass('hide');
    startedGame = false;
    clearInterval(gameTimer);
}
$(".restart").on('click', function () {
    $(".start-btn").removeClass('hide');
    $("#gameover").addClass('hide');
})
$(".submitHighScore").on('click', function () {
    playerName = $(".userInput").value;
    localStorage.setItem("playerName", highScoreArray);
    alert("Your highScore has been submitted! Thank-you!");
    $("#submit").addClass('hide');
})
$(".viewHighScore").on('click', function () {
    $("#leaderboard").removeClass('hide');
    grabStorage();

})

function grabStorage() {
    localStorage.getItem("highScoreArray");
}
