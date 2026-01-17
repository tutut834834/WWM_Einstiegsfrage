const QUESTIONS = [...QUESTION_BANK];
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

  const q = QUESTIONS[index];
  titleEl.textContent = q.title;
  hintEl.textContent = q.hint;
  contentEl.innerHTML = "";

  q.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "order-row";

    const label = document.createElement("span");
    label.textContent = item;

    const select = document.createElement("select");
    select.innerHTML = `
      <option value="">Pos</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    `;

    row.appendChild(label);
    row.appendChild(select);
    contentEl.appendChild(row);
  });

  nextBtn.onclick = () => checkAnswer(q);
  updateMeta();
}

function checkAnswer(q) {
  const selects = contentEl.querySelectorAll("select");
  const values = [...selects].map(s => s.value);

  if (values.includes("")) {
    feedbackEl.textContent = "Fill all positions.";
    return;
  }

  const set = new Set(values);
  if (set.size !== 4) {
    feedbackEl.textContent = "Each position only once.";
    return;
  }

  const end = Date.now();
  times.push((end - questionStart) / 1000);

  const ordered = q.items
    .map((item, i) => ({ item, pos: values[i] }))
    .sort((a,b) => a.pos - b.pos)
    .map(x => x.item);

  if (JSON.stringify(ordered) === JSON.stringify(q.correctOrder)) {
    score++;
    feedbackEl.textContent = "✅ Correct";
  } else {
    feedbackEl.textContent = "❌ Wrong\nCorrect: " + q.correctOrder.join(" → ");
  }

  nextBtn.disabled = false;
  nextBtn.textContent = index === QUESTIONS.length - 1 ? "Finish" : "Next";

  index++;
  if (index < QUESTIONS.length) {
    nextBtn.onclick = loadQuestion;
  } else {
    nextBtn.onclick = finishQuiz;
  }
}

function finishQuiz() {
  const total = times.reduce((a,b)=>a+b,0);
  const avg = total / times.length;

  titleEl.textContent = "🏁 Finished";
  contentEl.innerHTML = "";
  hintEl.textContent = "";

  feedbackEl.textContent =
    `Score: ${score} / ${QUESTIONS.length}\n` +
    `Total time: ${total.toFixed(1)} s\n` +
    `Average per question: ${avg.toFixed(1)} s`;
}

function updateMeta() {
  document.getElementById("progress").textContent =
    `${index + 1} / ${QUESTIONS.length}`;
  document.getElementById("score").textContent =
    `Score: ${score}`;
}

startQuiz();
