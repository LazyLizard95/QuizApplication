let startedGame = false;
let timer = 30;
let highScores = [];

const startMenu = function(){
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

$(".question-btn").each(function(){
    $(this).on('click',function(event){
        var buttonId = event.target.textContent
        var correctAnswer = correctAnswers[questionIndex]
        questionIndex++
        if(buttonId === correctAnswer){
            console.log(questionIndex);
            timer = timer + 5;
            } else {
            timer = timer - 5;
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
    $("#gameover").addClass('hide');
    $("#submit").removeClass('hide');
}

function gameOver(){
    $("#question-container").addClass('hide');
    $("#gameover").removeClass('hide');
    clearInterval(gameTimer);
}

$(".restart").on('click', function(){
    $(".start-btn").removeClass('hide');
    $("#gameover").addClass('hide');
})
$(".submitHighScore").on('click', function(){
    console.log(questionIndex);
    highScores = `${$(".userInput").value} ${timer}`;
    alert("Your highScore has been submitted! Thank-you!");
    $("#submit").addClass('hide');
})
