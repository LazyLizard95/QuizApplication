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

function nextQuestion(){
    $(".btn").on('click',function(){
        if(correctAnswer){
            questionIndex++
            console.log(questionIndex);
            timer + 5
            score + 10
            console.log("it works")
        } else {
            questionIndex++
            timer - 5

        }
    })
        
        
}

function startGame(){
    if(startedGame){
    timer--
    $(".timerText").text(timer);
    }
    if(timer === 0){
        clearInterval(gameTimer);
        console.log("gameover")
    }
}

console.log(firstQuestion.prompt)