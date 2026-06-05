const quizData = [
  {
    question: "What is the name of the protein that protects a phage's DNA?",
    choices: ["Phage Sheild", "Capsid", "Nucleus", "Head Fiber"],
    correct: "Capsid",
  },
  {
    question: "In what year was the phage discovered?",
    choices: [
      "1920",
      "1817",
      "1492",
      "1915",
    ],
    correct: "1915",
  },
  {
    question: "Which infection cycle results in lysis?",
    choices: [
      "The Lytic Cycle",
      "The Lysogenic Cycle",
      "The Water Cycle",
      "The Lactic Cycle",
    ],
    correct: "The Lytic Cycle",
  },
  {
    question: "Which part of the phage detects host cells?",
    choices: ["Tail Fibers", "Baseplate", "Collar", "Capsid"],
    correct: "Tail Fibers",
  },
   {
    question: "What is the name of a bacterium that is resistant to antibiotics?",
    choices: ["Mega Bacterium", "Retrovirus", "Antimicrobial", "Prokaryote"],
    correct: "Antimicrobial",
  },
   {
    question: "Who discovered the phage?",
    choices: ["Fredrick Twort", "Fredrick Douglas", "Alexander Fleming", "Issac Newton"],
    correct: "Fredrick Twort",
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 180;
let timer;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const timeEl = document.getElementById("timer");
const restartBtn = document.getElementById("restartBtn");
const quizContainer = document.getElementById("quiz");

function startQuiz() {
  showQuestion();
  startTimer();
  nextBtn.style.display = "none";
  resultEl.classList.add("hidden");
}

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  choicesEl.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(btn, q.correct));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const selected = button.textContent;

  Array.from(choicesEl.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.borderColor = "#008222";
      btn.style.backgroundColor = "#008222"
    }
    if (btn.textContent === selected && selected !== correctAnswer) {
      btn.style.borderColor = "#820004";
      btn.style.backgroundColor = "#820004"
    }
  });

  if (selected === correctAnswer) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    endQuiz();
  }
}

function startTimer() {
  timeEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  quizContainer.classList.add("hidden");
  resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  resultEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  timeLeft = 180;
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  timeEl.textContent = timeLeft;
  startQuiz();
});

// Start on page load
startQuiz();