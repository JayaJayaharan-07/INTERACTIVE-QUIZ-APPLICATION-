const questions = [
    {
        question: "1.what does HTML stands for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
        answer: 1
    },
    {
        question: "2.which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        answer: 1
    },
    {
        question: "3.which css property is used to change the text color of an element?",
        options:["font-color", "text-color", "color", "background-color"],
        answer: 2
    },
    {
        question: "4.what is the current syntax to link an external javascript file in HTML? ",
        options:["<script src='Script.js'>", "<script link='script.js'>", "<javascript src='script.js'>", "<link src='script.js'>"],
        answer: 0
    },
    {
        question: " 5. Which JavaScript method is used to write content into an HTML element?",
        options:["document.write()","document.innerHTML()","document.getElementById().innerText","document.getElementById().innerHTML"],
        answer: 3
    },
    {
        question: "6. Which of the following is NOT a valid CSS position property?",
        options:["<script src='Script.js'>", "<script link='script.js'>", "<javascript src='script.js'>", "<link src='script.js'>"],
        answer: 2
    },
    {
        question: "7. Which attribute is used in HTML to make a text input field mandatory?",
        options:["validate", "required", "mandatory", "must"],
        answer: 1
    },
    {
        question: "8. What does the 'flex' in CSS Flexbox stand for?" ,
        options:["flexible box", "flexing box", "flex-based layout", "float layout"],
        answer: 0
    },
    {
        question: "9. Which of these is a JavaScript framework?",
        options:["laravel", "flask", "react", "django"],
        answer: 2
    },
    {
        question: " 10. What is the default value of the position property in CSS?",
        options:["relative", "fixed", "static", "absolute"],
        answer: 2
    },
    
];

let currentQuestionIndex = 0;
let score = 0

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option");
    const question = questions[currentQuestionIndex];

questionElement.textContent = question.question;
optionButtons.forEach((button, index) => {
    button.textContent = question.options[index];
    button.disabled = false;
    button.classList.remove("correct", "wrong");
});

document.getElementById("next-btn").style.display = "inline";
document.getElementById("retake-btn").style.display = "none";

}

function selectAnswer(selectedOptionIndex) {
    const question = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option");

    if (selectedOptionIndex === question.answer) {
        score++;
        optionButtons[selectedOptionIndex].classList.add("correct");
    } else {
        optionButtons[selectedOptionIndex].classList.add("wrong");
        optionButtons[question.answer].classList.add("correct");
    }

    document.getElementById("score").textContent = `score: ${score}`;
    optionButtons.forEach(button => button.disabled = true);
}


function nextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").textContent = "quiz complete!";
    document.querySelector(".options").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").textContent = `Final Score: ${score}/${questions.length}`;
    document.getElementById("retake-btn").style.display = "inline";
}

function retakeQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = `score: ${score}`;
    document.querySelector(".options").style.display = "grid";
    displayQuestion();
}






window.onload = displayQuestion;
