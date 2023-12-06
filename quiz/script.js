const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

/**
 * Step 1: Create a quizData object!
 * quizData have 3 properties: question, options, and correctAnswer.
 */
const quizData = [
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question:
            "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {
    const question = quizData[index];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if(selectedOption === correctAnswer){
        correct++;
        alert("Correct!");
    }
    else{
        alert("Incorrect. The correct answer is:" + correctAnswer);
    }

    currentQuestionIndex++;
    // move on to next question
    if (currentQuestionIndex < quizData.length){
        showQuestion(currentQuestionIndex++);
    }
    else{
        questionElement.textContent = `Quiz complete! You scored ${correct} out of ${quizData.length}!`
        optionsElement.innerHTML = ""
    }

}

// Start the quiz
showQuestion(currentQuestionIndex);