let startedGame = false;
let gameTimer = setInterval(startGame, 1000);
let highScores = [];

const startMenu = function(){
    $(".start-btn").addClass('hide');
    questionIndex = 0;
    timer = 30;
    startedGame = true;
    $("#question-container").removeClass("hide");
    switchQuestion();
    startGame();
}
$(".start-btn").on('click', startMenu)

$(".question-btn").each(function(){
    $(this).on('click',function(event){
        var buttonId = event.target.textContent
        var correctAnswer = correctAnswers[questionIndex]
        questionIndex++
        if(buttonId === correctAnswer){
            console.log(questionIndex);
            timer = timer + 5;
            console.log("Correct")
        } else {
            timer = timer - 5
            console.log("INCorrect")
        }
        switchQuestion();
    })
})

function startGame(){
    if(startedGame){
    timer--
    $(".timerText").text(timer);
    }
    if(timer === 0 || timer < 0){
        timer = 0;
        gameOver();
    }
}

function gameOver(){
    $("#question-container").addClass('hide');
    $("#gameover").removeClass('hide');
    clearInterval(gameTimer);
}

$(".restart").on('click', startMenu)