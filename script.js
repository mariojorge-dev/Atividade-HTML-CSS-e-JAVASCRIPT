const questions = [
    {
        question: "Qual das seguintes linguagens é usada para estruturar o conteúdo de uma página da web?",
        correctAnswer: "HTML",
        answers: ["HTML", "CSS", "JavaScript", "XML", "C++"]
    },
    {
        question: "Qual linguagem é usada para estilizar a aparência de uma página da web?",
        correctAnswer: "CSS",
        answers: ["HTML", "Java", "JavaScript", "Folha de Estilo em Cascatas", "CSS"]
    },
    {
        question: "Qual linguagem é usada para tornar uma página da web interativa?",
        correctAnswer: "JavaScript",
        answers: ["HTML", "Python", "JavaScript", "COOKIE", "Folha de Estilo em Cascatas"]
    },
    {
        question: "O que significa a sigla 'CSS'?",
        correctAnswer: "Folha de Estilo em Cascatas",
        answers: ["HTML", " Linguagem de criação de scripts ou uma linguagem interpretada", "Folha de Estilo em Cascatas", "Linguagem de Marcação de Hipertexto", "Simplificar a seleção de fontes e aplicação de cores em páginas HTML"]
    },
    {
        question: "O que é uma closure no JavaScript?",
        correctAnswer: "São variáveis ou funções que fazem parte do escopo de uma função, possuem acesso limitado ao escopo da função a que pertencem.",
        answers: ["Uma closure é um termo técnico para descrever o momento em que você fecha o navegador sem salvar seu trabalho.", "Uma closure no JavaScript é um tipo de botão que fecha automaticamente quando você clica nele.", "Uma closure é um tipo especial de variável que só pode ser usada em loops for.", "Uma closure é uma função que só pode ser chamada às segundas-feiras.", "São variáveis ou funções que fazem parte do escopo de uma função, possuem acesso limitado ao escopo da função a que pertencem."]
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answersContainer = document.getElementById("answers-container");

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreElement.textContent = `Pontuação: ${score}`;
}

function loadQuestion() {
    if (currentQuestion === questions.length) {
        alert(`Quiz concluído! Sua pontuação é ${score}/${questions.length}`);
        resetQuiz(); // Chama a função para reiniciar o quiz
    }

    questionElement.textContent = questions[currentQuestion].question;
    answersContainer.innerHTML = "";
    questions[currentQuestion].answers.forEach(answer => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = answer;
        const label = document.createElement("label");
        label.textContent = answer;
        answersContainer.appendChild(input);
        answersContainer.appendChild(label);
        answersContainer.appendChild(document.createElement("br"));
    });
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
        resetQuiz(); // Chama a função para reiniciar o quiz
    }

    scoreElement.textContent = `Pontuação: ${score}`;
    selectedAnswer.checked = false;
}

resetQuiz(); // Inicia o quiz quando a página é carregada