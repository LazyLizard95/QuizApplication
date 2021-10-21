let score = 0;
let timer = 30;
let startedGame = false;
let gameTimer = setInterval(startGame, 1000);



$(".start-btn").on('click', function(){
    $(".start-btn").addClass('hide');
    startedGame = true;
    $("#question-container").removeClass("hide");
    
    
    
    nextQuestion();
    startGame();
})

function nextQuestion(){
    $("#question").text(questions[0].question);// put in for loop with answer and question
}

function startGame(){
    if(startedGame){
    timer--
    console.log(timer);
    $(".timerText").text(timer);
    }
    if(timer === 0){
        clearInterval(gameTimer);
        console.log("gameover")
    }
}
