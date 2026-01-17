const QUESTIONS = QUESTION_BANK;
const LETTERS = ["A", "B", "C", "D"];

let index = 0;
let score = 0;
let times = [];
let questionStart = 0;
let picks = [];

const titleEl = document.getElementById("questionTitle");
const contentEl = document.getElementById("content");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function start() {
  index = 0;
  score = 0;
  times = [];
  loadQuestion();
}

function loadQuestion() {
  questionStart = Date.now();
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = "Next";

  const q = QUESTIONS[index];
  titleEl.textContent = q.title;
  contentEl.innerHTML = "";

  picks = new Array(4).fill(null);

  q.items.forEach((item, row) => {
    const r = document.createElement("div");
    r.className = "order-row";

    const label = document.createElement("div");
    label.className = "order-item";
    label.textContent = item;

    const grid = document.createElement("div");
    grid.className = "letter-grid";

    LETTERS.forEach(letter => {
      const b = document.createElement("button");
      b.className = "letter-btn";
      b.textContent = letter;
      b.onclick = () => selectLetter(row, letter);
      grid.appendChild(b);
    });

    r.appendChild(label);
    r.appendChild(grid);
    contentEl.appendChild(r);
  });

  updateMeta();
}

function selectLetter(row, letter) {
  const usedElsewhere = picks.includes(letter) && picks[row] !== letter;
  if (usedElsewhere) return;

  picks[row] = picks[row] === letter ? null : letter;
  refreshButtons();
}

function refreshButtons() {
  const used = new Set(picks.filter(Boolean));
  const rows = document.querySelectorAll(".order-row");

  rows.forEach((row, r) => {
    row.querySelectorAll(".letter-btn").forEach(btn => {
      const l = btn.textContent;
      btn.classList.toggle("selected", picks[r] === l);
      const disabled = used.has(l) && picks[r] !== l;
      btn.classList.toggle("disabled", disabled);
      btn.disabled = disabled;
    });
  });

  nextBtn.disabled = !picks.every(p => p !== null);
  nextBtn.onclick = checkAnswer;
}

function checkAnswer() {
  times.push((Date.now() - questionStart) / 1000);

  const q = QUESTIONS[index];
  const order = q.items
    .map((item, i) => ({ item, l: picks[i] }))
    .sort((a,b) => LETTERS.indexOf(a.l) - LETTERS.indexOf(b.l))
    .map(x => x.item);

  if (JSON.stringify(order) === JSON.stringify(q.correctOrder)) {
    score++;
    feedbackEl.textContent = "✅ Richtig";
  } else {
    feedbackEl.textContent = "❌ Falsch\nRichtig: " + q.correctOrder.join(" → ");
  }

  index++;
  updateMeta();

  nextBtn.textContent = index === QUESTIONS.length ? "Finish" : "Next";
  nextBtn.onclick = index === QUESTIONS.length ? finish : loadQuestion;
}

function finish() {
  const total = times.reduce((a,b)=>a+b,0);
  const avg = total / times.length;

  titleEl.textContent = "🏁 Fertig";
  contentEl.innerHTML = "";
  feedbackEl.textContent =
    `Score: ${score} / ${QUESTIONS.length}\n` +
    `Gesamtzeit: ${total.toFixed(1)} s\n` +
    `Durchschnitt: ${avg.toFixed(1)} s`;
}

function updateMeta() {
  document.getElementById("progress").textContent =
    `${Math.min(index+1, QUESTIONS.length)} / ${QUESTIONS.length}`;
  document.getElementById("score").textContent = `Score: ${score}`;
}

start();
