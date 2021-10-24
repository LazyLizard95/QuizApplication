const firstQuestion = {
    prompt: "Which of the following is NOT a loop?",
    answers: ["For", "While", "Do-While", "For-While"],
    correctAnswer: "For-While"
};
const secondQuestion = {
    prompt: "The function Date.now() will do which of following: ",
    answers: ["Return the current date and time", "Return the current date but not time", "Return the current time in millieseconds elapsed since January 1, 1970", "Return the current time in seconds elapsed since January 1, 1970"],
    correctAnswer: "Return the current time in millieseconds elapsed since January 1, 1970"
};
const thirdQuestion = {
    prompt: "What HTML element is used to enable JavaScript?",
    answers: ["<innerHTML>", "<href = 'script.js'>", "<script>", "<script.js>"],
    correctAnswer: "<script>"
};
const fourthQuestion = {
    prompt: "What will the following code display? ('b' + 'a' + + 'a' + 'a')",
    answers: ["baNaNa", "baaa", 'Undefined', 'ba ++ aa'],
    correctAnswer: "baNaNa"
};
const fifthQuestion = {
    prompt: "What is a recursive loop?",
    answers: ["A loop with a sailor mouth", "A loop that repeatedly makes calls to iself", "A loop that doesn't function properly", "Rescursion loops do not exist"],
    correctAnswer: "A loop that repeatedly makes calls to iself"
};

let correctAnswers = [firstQuestion.correctAnswer, secondQuestion.correctAnswer, thirdQuestion.correctAnswer, fourthQuestion.correctAnswer, fifthQuestion.correctAnswer];


function switchQuestion() {
    switch (questionIndex) {
        case 0: {
            $("#question").text(firstQuestion.prompt);
            $("#questionText1").text(firstQuestion.answers[0])
            $("#questionText2").text(firstQuestion.answers[1])
            $("#questionText3").text(firstQuestion.answers[2])
            $("#questionText4").text(firstQuestion.answers[3])
            break;
        }
        case 1: {
            $("#question").text(secondQuestion.prompt);
            $("#questionText1").text(secondQuestion.answers[0])
            $("#questionText2").text(secondQuestion.answers[1])
            $("#questionText3").text(secondQuestion.answers[2])
            $("#questionText4").text(secondQuestion.answers[3])
            break;
        }
        case 2: {
            $("#question").text(thirdQuestion.prompt);
            $("#questionText1").text(thirdQuestion.answers[0])
            $("#questionText2").text(thirdQuestion.answers[1])
            $("#questionText3").text(thirdQuestion.answers[2])
            $("#questionText4").text(thirdQuestion.answers[3])
            break;

        }
        case 3: {
            $("#question").text(fourthQuestion.prompt);
            $("#questionText1").text(fourthQuestion.answers[0])
            $("#questionText2").text(fourthQuestion.answers[1])
            $("#questionText3").text(fourthQuestion.answers[2])
            $("#questionText4").text(fourthQuestion.answers[3])
            break;

        }
        case 4: {
            $("#question").text(fifthQuestion.prompt);
            $("#questionText1").text(fifthQuestion.answers[0])
            $("#questionText2").text(fifthQuestion.answers[1])
            $("#questionText3").text(fifthQuestion.answers[2])
            $("#questionText4").text(fifthQuestion.answers[3])
            break;

        }

        default: gameOver();
    }
}

    // const sixthQuestion = {
//     prompt: "",
//     answers =[],
//     correctAnswer = answers[]
// }

// const seventhQuestion = {
//     prompt: "",
//     answers =[],
//     correctAnswer = answers[]
// }

// const eigthQuestion = {
//     prompt: "",
//     answers =[],
//     correctAnswer = answers[]
// }

// const ninthQuestion = {
//     prompt: "",
//     answers =[],
//     correctAnswer = answers[]
// }

// const tenthQuestion = {
//     prompt: "",
//     answers =[],
//     correctAnswer = answers[]
// }


//need array of questions
//triggered by start quiz
//go through index of array as each ques is answered
//for loop w/ .length

