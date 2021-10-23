let score = 0;
let timer = 30;
let startedGame = false;
let gameTimer = setInterval(startGame, 1000);



$(".start-btn").on('click', function(){
    $(".start-btn").addClass('hide');
    let timer = 30;
    startedGame = true;
    $("#question-container").removeClass("hide");
    
    
    
    nextQuestion();
    startGame();
})

function nextQuestion(correctAnswer){
    $(".btn").on('click',function(correctAnswer){
        buttonId = this.id;
        console.log(buttonId);
        if(buttonId === correctAnswer){
            questionIndex++
            console.log(questionIndex);
            timer = timer + 5;
            score = score + 10;
            console.log("it works")
        } else {
            questionIndex++
            timer = timer - 5

        }
    })
}

function startGame(){
    if(startedGame){
    timer--
    $(".timerText").text(timer);
    }
    if(timer === 0 || timer < 0){
        clearInterval(gameTimer);
        console.log("gameover")
    }
}

console.log(correctAnswer)
console.log(firstQuestion.prompt)