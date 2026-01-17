const LETTERS = ["A", "B", "C", "D"];
const QUESTIONS = QUESTION_BANK;

let index = 0;
let score = 0;
let picks = [];

const titleEl = document.getElementById("questionTitle");
const contentEl = document.getElementById("content");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function start() {
  index = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = "Next";

  const q = QUESTIONS[index];
  titleEl.textContent = q.title;
  contentEl.innerHTML = "";
  picks = new Array(q.items.length).fill(null);

  q.items.forEach((item, row) => {
    const block = document.createElement("div");
    block.className = "order-row";

    const label = document.createElement("div");
    label.className = "order-item";
    label.textContent = item;

    const grid = document.createElement("div");
    grid.className = "answer-grid";

    LETTERS.forEach(letter => {
      const btn = document.createElement("div");
      btn.className = "answer-btn";
      btn.innerHTML = `<span class="letter">${letter}</span>`;
      btn.onclick = () => choose(row, letter);
      grid.appendChild(btn);
    });

    block.appendChild(label);
    block.appendChild(grid);
    contentEl.appendChild(block);
  });

  updateMeta();
}

function choose(row, letter) {
  if (picks.includes(letter) && picks[row] !== letter) return;

  picks[row] = picks[row] === letter ? null : letter;
  refresh();
}

function refresh() {
  const used = new Set(picks.filter(Boolean));
  const rows = document.querySelectorAll(".order-row");

  rows.forEach((row, r) => {
    row.querySelectorAll(".answer-btn").forEach(btn => {
      const l = btn.querySelector(".letter").textContent;
      btn.classList.toggle("selected", picks[r] === l);
      const dis = used.has(l) && picks[r] !== l;
      btn.classList.toggle("disabled", dis);
    });
  });

  nextBtn.disabled = !picks.every(p => p !== null);
  nextBtn.onclick = check;
}

function check() {
  const q = QUESTIONS[index];

  const order = q.items
    .map((item, i) => ({ item, l: picks[i] }))
    .sort((a,b) => LETTERS.indexOf(a.l) - LETTERS.indexOf(b.l))
    .map(x => x.item);

  if (JSON.stringify(order) === JSON.stringify(q.correctOrder)) {
    score++;
    feedbackEl.textContent = "✅ Richtig";
  } else {
    feedbackEl.textContent =
      "❌ Falsch\nRichtig: " + q.correctOrder.join(" → ");
  }

  index++;
  nextBtn.textContent = "Finish";
  nextBtn.onclick = () => {};
  updateMeta();
}

function updateMeta() {
  document.getElementById("progress").textContent =
    `${Math.min(index+1, QUESTIONS.length)} / ${QUESTIONS.length}`;
  document.getElementById("score").textContent = `Score: ${score}`;
}

start();
