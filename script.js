const questions = [
    {
        question: "Qual das seguintes linguagens é usada para estruturar o conteúdo de uma página da web?",
        correctAnswer: "HTML"
    },
    {
        question: "Qual linguagem é usada para estilizar a aparência de uma página da web?",
        correctAnswer: "CSS"
    },
    {
        question: "Qual linguagem é usada para tornar uma página da web interativa?",
        correctAnswer: "JavaScript"
    },
    {
        question: "O que significa a sigla 'CSS'?",
        correctAnswer: "Folha de Estilo em Cascatas"
    },
    {
        question: "O que é uma closure no JavaScript?",
        correctAnswer: "Closures são variáveis ou funções que fazem parte do escopo de uma função, possuem acesso limitado ao escopo da função a que pertencem."
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Por favor, selecione uma resposta.");
        return;
    }

    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz concluído! Sua pontuação é ${score}/${questions.length}`);
        currentQuestion = 0;
        score = 0;
    }

    scoreElement.textContent = `Pontuação: ${score}`;
    selectedAnswer.checked = false;
}

loadQuestion();
