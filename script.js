const QUESTIONS = [...QUESTION_BANK].sort(() => Math.random() - 0.5).slice(0, 4);
const LETTERS = ["A", "B", "C", "D"];

let index = 0;
let times = [];
let startMs = 0;
let seq = [];
let locked = false;

const qEl = document.getElementById("question");
const btns = document.querySelectorAll(".answer");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const inputSeqEl = document.getElementById("inputSeq");
const instantEl = document.getElementById("instant");
const resultEl = document.getElementById("result");

let tick;

function loadQuestion() {
  locked = false;
  seq = [];
  inputSeqEl.textContent = "—";
  instantEl.textContent = "";
  instantEl.className = "";

  const q = QUESTIONS[index];
  qEl.textContent = q.question;
  progressEl.textContent = `Frage ${index + 1} / ${QUESTIONS.length}`;

  startMs = Date.now();
  clearInterval(tick);
  tick = setInterval(() => {
    timerEl.textContent =
      `Zeit: ${((Date.now() - startMs) / 1000).toFixed(1)}s`;
  }, 100);

  btns.forEach((b, i) => {
    b.disabled = false;
    b.classList.remove("picked");
    b.textContent = `${LETTERS[i]} – ${q.answers[i]}`;
    b.onclick = () => pick(i);
  });
}

function pick(i) {
  if (locked) return;
  if (seq.includes(i)) return;

  seq.push(i);
  btns[i].classList.add("picked");
  inputSeqEl.textContent = seq.map(i => LETTERS[i]).join(" ");

  if (seq.length === 4) finishQuestion();
}

function finishQuestion() {
  locked = true;
  clearInterval(tick);

  const t = (Date.now() - startMs) / 1000;
  times.push(t);
  timerEl.textContent = `Zeit: ${t.toFixed(1)}s`;

  btns.forEach(b => (b.disabled = true));

  const q = QUESTIONS[index];
  const userOrder = seq.map(i => q.answers[i]);

  const correct = JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);

  const correctLetters = q.correctOrder.map(
    a => LETTERS[q.answers.indexOf(a)]
  );

  instantEl.className = correct ? "good" : "bad";
  instantEl.textContent = correct
    ? `✅ Richtig!\nRichtig: ${correctLetters.join(" ")}`
    : `❌ Falsch!\nDein: ${seq.map(i=>LETTERS[i]).join(" ")}\nRichtig: ${correctLetters.join(" ")}`;

  setTimeout(() => {
    index++;
    index < QUESTIONS.length ? loadQuestion() : finishQuiz();
  }, 2000);
}

function finishQuiz() {
  qEl.textContent = "Fertig ✅";
  progressEl.textContent = "";
  timerEl.textContent = "";
  btns.forEach(b => (b.style.display = "none"));

  const avg = times.reduce((a,b)=>a+b,0) / times.length;
  const rating =
    avg <= 6 ? "🟢 sehr stark" :
    avg <= 15 ? "🟡 solide" :
    "🔴 ausbaufähig";

  resultEl.textContent =
    `Durchschnittszeit: ${avg.toFixed(1)} Sekunden\nBewertung: ${rating}`;
}

loadQuestion();


