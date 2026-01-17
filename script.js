const QUESTIONS = [...QUESTION_BANK]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);

let index = 0;
let times = [];
let startTime = 0;

const qEl = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const progress = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function load() {
  const q = QUESTIONS[index];
  qEl.textContent = q.question;
  progress.textContent = `Frage ${index + 1} / ${QUESTIONS.length}`;
  startTime = Date.now();

  answers.forEach((btn, i) => {
    btn.textContent = `${String.fromCharCode(65+i)} – ${q.answers[i]}`;
    btn.onclick = () => answer(i);
  });
}

function answer(i) {
  const t = (Date.now() - startTime) / 1000;
  times.push(t);

  index++;
  if (index < QUESTIONS.length) {
    load();
  } else {
    finish();
  }
}

function finish() {
  const avg = times.reduce((a,b)=>a+b,0) / times.length;
  let rating =
    avg <= 6 ? "🟢 sehr stark" :
    avg <= 15 ? "🟡 solide" :
    "🔴 ausbaufähig";

  qEl.textContent = "Fertig";
  document.querySelector(".answers").innerHTML = "";
  progress.textContent = "";

  resultEl.textContent =
    `Durchschnittszeit: ${avg.toFixed(1)} Sekunden\nBewertung: ${rating}`;
}

load();
