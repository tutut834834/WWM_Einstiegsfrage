const QUESTIONS = [...QUESTION_BANK]; // genau 10 Fragen in questions.js
let index = 0;
let score = 0;

let quizStart = 0;
let questionStart = 0;
let times = [];

const titleEl = document.getElementById("questionTitle");
const hintEl = document.getElementById("questionHint");
const contentEl = document.getElementById("content");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const LETTERS = ["A", "B", "C", "D"];

// Speichert pro Frage: Auswahl je Item (0..3) => "A"/"B"/"C"/"D" oder null
let picks = [];

function startQuiz() {
  index = 0;
  score = 0;
  times = [];
  quizStart = Date.now();
  loadQuestion();
}

function loadQuestion() {
  questionStart = Date.now();
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = "Next";

  const q = QUESTIONS[index];
  titleEl.textContent = q.title;
  hintEl.textContent = q.hint || "";
  contentEl.innerHTML = "";

  // Reset picks (4 items)
  picks = new Array(q.items.length).fill(null);

  q.items.forEach((item, rowIndex) => {
    const row = document.createElement("div");
    row.className = "order-row";

    const label = document.createElement("div");
    label.className = "order-item";
    label.textContent = item;

    const grid = document.createElement("div");
    grid.className = "letter-grid";

    LETTERS.forEach(letter => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "letter-btn";
      btn.textContent = letter;

      btn.addEventListener("click", () => onPickLetter(rowIndex, letter));

      grid.appendChild(btn);
    });

    row.appendChild(label);
    row.appendChild(grid);
    contentEl.appendChild(row);
  });

  nextBtn.onclick = () => checkAndNext(q);
  updateMeta();
  refreshUI(); // initial
}

function onPickLetter(rowIndex, letter) {
  // Wenn Buchstabe schon in anderer Zeile genutzt: blockieren
  const usedBy = picks.findIndex((p, i) => p === letter && i !== rowIndex);
  if (usedBy !== -1) {
    feedbackEl.textContent = `❗ ${letter} ist schon vergeben. Wähle einen anderen Buchstaben.`;
    return;
  }

  // Toggle: nochmal klicken löscht
  if (picks[rowIndex] === letter) {
    picks[rowIndex] = null;
  } else {
    picks[rowIndex] = letter;
  }

  feedbackEl.textContent = "";
  refreshUI();
}

function refreshUI() {
  // Buttons in jeder Zeile updaten
  const rows = contentEl.querySelectorAll(".order-row");

  // welche Buchstaben sind vergeben?
  const used = new Set(picks.filter(Boolean));

  rows.forEach((row, rowIndex) => {
    const buttons = row.querySelectorAll(".letter-btn");
    buttons.forEach(btn => {
      const letter = btn.textContent;

      // selected?
      btn.classList.toggle("selected", picks[rowIndex] === letter);

      // disabled, wenn woanders vergeben
      const isUsedElsewhere = used.has(letter) && picks[rowIndex] !== letter;
      btn.classList.toggle("disabled", isUsedElsewhere);
      btn.disabled = isUsedElsewhere;
    });
  });

  // Next erst aktiv, wenn alle 4 gewählt sind
  const complete = picks.every(p => p !== null);
  nextBtn.disabled = !complete;
}

function checkAndNext(q) {
  // Zeit stoppen
  const end = Date.now();
  times.push((end - questionStart) / 1000);

  // picks -> Reihenfolge bestimmen: A=1, B=2, C=3, D=4
  // Wir sortieren die Items nach Letter-Reihenfolge A..D
  const pairs = q.items.map((item, i) => ({
    item,
    letter: picks[i]
  }));

  pairs.sort((a, b) => LETTERS.indexOf(a.letter) - LETTERS.indexOf(b.letter));
  const userOrder = pairs.map(x => x.item);

  if (JSON.stringify(userOrder) === JSON.stringify(q.correctOrder)) {
    score++;
    feedbackEl.textContent = "✅ Richtig!";
  } else {
    feedbackEl.textContent = "❌ Falsch\nRichtig: " + q.correctOrder.join(" → ");
  }

  // Button auf Next/Fertig
  nextBtn.disabled = false;
  nextBtn.textContent = index === QUESTIONS.length - 1 ? "Finish" : "Next";

  index++;
  updateMeta();

  if (index < QUESTIONS.length) {
    nextBtn.onclick = loadQuestion;
  } else {
    nextBtn.onclick = finishQuiz;
  }
}

function finishQuiz() {
  const total = times.reduce((a, b) => a + b, 0);
  const avg = total / times.length;

  titleEl.textContent = "🏁 Fertig";
  contentEl.innerHTML = "";
  hintEl.textContent = "";

  feedbackEl.textContent =
    `Score: ${score} / ${QUESTIONS.length}\n` +
    `Gesamtzeit: ${total.toFixed(1)} s\n` +
    `Durchschnitt: ${avg.toFixed(1)} s pro Frage`;

  nextBtn.disabled = true;
}

function updateMeta() {
  document.getElementById("progress").textContent =
    `${Math.min(index + 1, QUESTIONS.length)} / ${QUESTIONS.length}`;
  document.getElementById("score").textContent = `Score: ${score}`;
}

startQuiz();
