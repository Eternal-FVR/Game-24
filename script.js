let difficulty = "easy";
let mode = "normal";

let username = "";

let streak = 0;
let score = 0;
let solved = 0;

let numbers = [];

let currentSolution = "";
let timer;
let timeLeft = 60;
let totalTime = 60;

let speedTime = 30;

const circle = document.querySelector(".progress");

/* INIT */
window.onload = () => {

  username = "Player";

  document.getElementById("userNameDisplay").innerText = username;

  document.querySelector(".timerWrap").style.display = "none";

  setupCircle();
  updateStats();
};

function setupCircle() {
  const r = 60;
  const circumference = 2 * Math.PI * r;

  circle.style.strokeDasharray = circumference;
}

/* SETTINGS */

function toggleSettings() {
  document.getElementById("settingsPanel")
    .classList.toggle("open");
}

function saveUser() {

  const input =
    document.getElementById("username").value.trim();

  if (input) {
    username = input;
  }

  document.getElementById("userNameDisplay")
    .innerText = username;
}

/* MODES */

function setMode(m) {

  if (m === "speed") {

    let choice = prompt(
      "Choose Speed Time:\n15\n30\n45",
      "30"
    );

    choice = Number(choice);

    if (
      choice !== 15 &&
      choice !== 30 &&
      choice !== 45
    ) {
      choice = 30;
    }

    speedTime = choice;
  }

  mode = m;

  streak = 0;
  score = 0;
  solved = 0;

  updateStats();

  alert(
    m.toUpperCase() +
    " MODE ACTIVATED"
  );
}

/* STATS */

function updateStats() {

  document.getElementById("streakBox").innerText =
    "🔥 Streak: " + streak;

  document.getElementById("scoreBox").innerText =
    "🏆 Score: " + score;
}

/* START GAME */

function startGame(level) {

  difficulty = level;

  document.body.classList.remove("hide-header");

  document.getElementById("homeScreen")
    .classList.remove("active");

  document.getElementById("gameScreen")
    .classList.add("active");

  document.querySelector(".timerWrap")
    .style.display = "block";

  startTimer();

  generateNumbers();
}

/* BACK HOME */

function backHome() {

  document.body.classList.remove("hide-header");

  clearInterval(timer);

  document.querySelector(".timerWrap")
    .style.display = "none";

  document.getElementById("gameScreen")
    .classList.remove("active");

  document.getElementById("homeScreen")
    .classList.add("active");

  streak = 0;
  score = 0;
  solved = 0;

  updateStats();
}

/* TIMER */

function startTimer() {

  clearInterval(timer);

  if (mode === "speed") {

    totalTime = speedTime;

  } else if (mode === "competitive") {

    totalTime = 45;

  } else {

    totalTime =
      difficulty === "easy"
        ? 60
        : difficulty === "medium"
        ? 45
        : 30;
  }

  timeLeft = totalTime;

  document.getElementById("timerText")
    .innerText = timeLeft;

  updateCircle();

  timer = setInterval(() => {

    timeLeft--;

    document.getElementById("timerText")
      .innerText = timeLeft;

    updateCircle();

    if (timeLeft <= 0) {

      clearInterval(timer);

      let msg = "⏰ TIME UP!\n\n";

      if (mode === "competitive") {

        const best =
          Number(
            localStorage.getItem(
              "bestCompetitive"
            )
          ) || 0;

        if (solved > best) {

          localStorage.setItem(
            "bestCompetitive",
            solved
          );
        }

        msg +=
          "Solved: " +
          solved +
          "\nBest: " +
          Math.max(best, solved);

      } else {

        msg +=
          "Solved: " + solved;
      }

      document.getElementById("solution")
        .innerText = msg;

      setTimeout(() => {

        backHome();

      }, 7000);
    }

  }, 1000);
}

function updateCircle() {

  const r = 60;

  const circumference =
    2 * Math.PI * r;

  circle.style.strokeDashoffset =
    circumference *
    (1 - timeLeft / totalTime);
}

/* GENERATE */

function generateNumbers() {

  do {

    numbers = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 9) + 1
    );

    currentSolution = solve24(
      numbers.map(n => ({
        value: n,
        expr: n.toString()
      }))
    );

  } while (!currentSolution);

  document.getElementById("numbers").innerText =
    numbers.join(" ");

  document.getElementById("solution").innerText = "";
}
function solve24(arr) {

  const EPS = 0.0001;

  if (arr.length === 1) {

    if (Math.abs(arr[0].value - 24) < EPS) {
      return arr[0].expr;
    }

    return null;
  }

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

      if (i === j) continue;

      const remaining = [];

      for (let k = 0; k < arr.length; k++) {

        if (k !== i && k !== j) {
          remaining.push(arr[k]);
        }
      }

      const a = arr[i];
      const b = arr[j];

      const possibilities = [

        {
          value: a.value + b.value,
          expr: `(${a.expr}+${b.expr})`
        },

        {
          value: a.value - b.value,
          expr: `(${a.expr}-${b.expr})`
        },

        {
          value: a.value * b.value,
          expr: `(${a.expr}*${b.expr})`
        }
      ];

      if (Math.abs(b.value) > EPS) {

        possibilities.push({
          value: a.value / b.value,
          expr: `(${a.expr}/${b.expr})`
        });
      }

      for (const p of possibilities) {

        const result = solve24([
          ...remaining,
          p
        ]);

        if (result) {
          return result;
        }
      }
    }
  }

  return null;
}
/* CHECK */

function checkAnswer() {

  const input =
    document.getElementById("answerInput")
      .value;

  try {

    const result =
      Function(
        "return (" + input + ")"
      )();

    if (
      Math.abs(result - 24) < 0.0001 &&
      input.trim() !== "24"
    )
    {

      streak++;
      solved++;

      if (mode === "competitive") {

        score += 20;

      } else {

        score += 10;
      }

      document.getElementById("solution")
        .innerText =
        "✅ Correct!";

      generateNumbers();

    } else {

      streak = 0;

      if (
        mode === "competitive"
      ) {

        score -= 10;
      }

      document.getElementById("solution")
        .innerText =
        "❌ Not Correct";
    }

    updateStats();

  } catch {

    document.getElementById("solution")
      .innerText =
      "Invalid Expression";
  }
}

/* SKIP */

function skip() {

  generateNumbers();
}

document.addEventListener("keydown", e => {

  if (e.code === "Space") {

    e.preventDefault();

    document.getElementById("solution").innerText =
      "Solution: " + currentSolution;
  }
});

function showHowToPlay() {

  document.body.classList.add("hide-header");

  document.getElementById("homeScreen")
    .classList.remove("active");

  document.getElementById("gameScreen")
    .classList.remove("active");

  document.getElementById("howToPlayScreen")
    .classList.add("active");
  
}

function backFromHowToPlay() {

  document.body.classList.remove("hide-header");

  document.getElementById("howToPlayScreen")
    .classList.remove("active");

  document.getElementById("homeScreen")
    .classList.add("active");

}

