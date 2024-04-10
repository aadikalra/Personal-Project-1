// Function for calculating the Hypotenuse/C² when you have a and b square
function hypotenuse(a, b, result) {
  let Hypotenuse = Math.pow(a, 2) + Math.pow(b, 2);
  Hypotenuse = Math.sqrt(Hypotenuse);
  if (result === "radical" || result === "Radical" || result === "rad"|| result === "Rad") {
    console.log(`In radical form it is √${Hypotenuse*Hypotenuse}.`)
  } else if (result === "normal") {
    console.log(`C² is ${Hypotenuse}.`)
  } else if (result === "rounded" || result === "Round" || result === "Rounded" || result === "round") {
    console.log(`Rounded to the nearest tenth it is ${Hypotenuse.toFixed(1)}.`)
  } else {
    console.log(`Rounded to the nearest tenth it is ${Hypotenuse.toFixed(1)}.`)
  }
}
// Function for calculating the Other Side of a triangle/B² when you have one side and the Hypotenuse
function otherSide(a, c) {
  let Hypotenuse = Math.pow(c, 2) - Math.pow(a, 2);
  Hypotenuse = Math.sqrt(Hypotenuse);
  console.log(`B² is ${Hypotenuse}, and rounded to the nearest tenth it is ${Hypotenuse.toFixed(1)}`)
}

// Function for calculating the volume of a sphere
function sphereVolume(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be a positive number');
  }

  if (radius == "formula") {
    return "V = 4/3 π r³";
  }
  const pi = Math.PI;
  const volume = (4 / 3) * pi * Math.pow(radius, 3);

  console.log(`The volume of the sphere is ${volume}.

  Rounded to the nearest hundredth it is ${volume.toFixed(2)}`)
}

const colorGrid = document.querySelector('.color-grid');
const colorValues = document.querySelectorAll('.color-values span');
const generateBtn = document.getElementById('generate-new');

function generateColors() {
  for (let i = 0; i < colorGrid.children.length; i++) {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    colorGrid.children[i].style.backgroundColor = color;
    colorGrid.children[i].dataset.color = color;
    colorValues[i].textContent = color;
  }
}

generateColors();

colorGrid.addEventListener('click', (event) => {
  const clickedColor = event.target.dataset.color;
  navigator.clipboard.writeText(clickedColor)
    .then(() => {
      console.log('Color copied to clipboard');
      event.target.classList.add('copied');
      setTimeout(() => event.target.classList.remove('copied'), 1000);
    })
    .catch(err => {
      console.error('Failed to copy color:', err);
    });
});

generateBtn.addEventListener('click', generateColors);

// For the "Why didn't you sign up" prompt
let no = document.querySelector("#no");
no.onclick = function () {
  prompt("Why don't you want to sign up?", "It was a mistake");
}

// File displaying code
const fileInput = document.getElementById('file');
const selectedFileSpan = document.getElementById('selected-file');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', (event) => {
  const fileName = event.target.value.split('\\').pop(); // Extract filename
  selectedFileSpan.textContent = `Selected: ${fileName}`;

  const file = event.target.files[0]; // Get the first selected file

  // Check if the selected file is an image
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.src = e.target.result; // Set image source to data URL
    imagePreview.style.display = 'block'; // Display the image preview
  };
  reader.readAsDataURL(file);
});


// For the Ans Page (after Form submit)
const form = document.getElementById('myForm');
const answerDisplay = document.getElementById('answer-display');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Access form data
  const formData = new FormData(form);

  // Build answer display content
  let answerHtml = '<h2>Your Answers:</h2>';
  for (const [key, value] of formData.entries()) {
    answerHtml += `<p><b>${key}:</b> ${value}</p>`;
  }

  // Display answers in the designated div
  answerDisplay.innerHTML = answerHtml;
  answerDisplay.style.display = 'block'; // Show the answers display

  // Hide the form after successful submission
  form.style.display = 'none'; // Set the form's display to 'none'
});













// Guessing Game
let input = document.getElementById("typeMe");
let gameAns = document.getElementById("gameAns");
let gameBig = document.getElementById("gameBig");
let responses = ["Nah", "Nope", "Try again", "Not quite", "Keep trying", "Nice try", "Almost there", "Not quite", "Try again later", "Not this time", "Give it another shot", "Not quite right", "Better luck next time", "No, but nice effort", "Try again tomorrow", "You're getting closer", "Not today", "Keep going", "No way", "Not yet","Ahh, so close!", "Nuh uh uh"];

input.addEventListener("keydown", function (event) {
  if (event.code !== "ShiftLeft") {
    gameAns.innerHTML = responses[Math.floor(Math.random() * 22)];
  } else if (event.code === "ShiftLeft") {
    gameAns.innerHTML = "You <b>Won</b>!!!"
    gameAns.style.fontSize = "100px";
    gameAns.style.color = "cadetblue";
    input.style.display = "none"
    gameBig.style.display = "none"
    document.querySelector(".fancy").style.display = "none";
    setTimeout(() => {
      simonGame.style.display = "none";
      homepage.style.display = "block";
      signUpForm.style.display = "none";
      guessingGame.style.display = "none";
      randomColorPicker.style.display = "none";
      todoApp.style.display = "none";
    }, 6000);
  }
})

// Todo App
let inputField = document.getElementById("input-for-todoApp");
let todoList = document.getElementById("todo-list");
let addTaskButton = document.getElementById("add-task-btn");

function addTask() {
  let newTask = inputField.value.trim();
  if (newTask) {
    let listItem = document.createElement("li");
    listItem.textContent = newTask;
    todoList.appendChild(listItem);
    inputField.value = "";
  }
}

addTaskButton.addEventListener("click", addTask);
addTaskButton.addEventListener("keydown", function () {
  let newTask = inputField.value.trim();
  if (newTask) {
    let listItem = document.createElement("li");
    listItem.textContent = newTask;
    todoList.appendChild(listItem);
    inputField.value = "";
  }
});

// Add event listener to the input field instead of the button
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Keep the event listener on the button for click interaction
addTaskButton.addEventListener("click", addTask);

// Simon Game
let gameSeq = [];
let userSeq = [];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("#h2-for-simonGame");
let resetBtn = document.getElementById("reset-btn");

simonGame.addEventListener("click",function() {
    if (started == false) {
        console.log("Game Started!!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(event) {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(() => {levelUp();}, 1000);
            resetBtn.style.display = "none";
        }
    } else {
        h2.innerHTML = `<span style="color: red;">Game Over!</span> Your score was <b>${level}</b>`;
        resetBtn.style.display = "block";
        resetBtn.addEventListener("click", reset);
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    resetBtn.style.display = "none";
}

// Rounding App
function roundDecimal() {
  const input = document.getElementById("decimalInput");
  const value = parseFloat(input.value);
  const roundedValue = Math.round(value * 10) / 10;
  document.getElementById("result").textContent =
    `Rounded to tenths: ${roundedValue}`;

  // Copy the rounded value to the clipboard
  const tempInput = document.createElement("input");
  tempInput.value = roundedValue;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  input.value = "";
}
document
  .getElementById("decimalInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      roundDecimal();
    }
  });


// All stuff for navagation-top
document.addEventListener('DOMContentLoaded', function() {
  // List Items on the Header
  let signUpFormLi = document.getElementById("signUpFormLi");
  let randomColorPickerLi = document.getElementById("randomColorPickerLi");
  let guessingGameLi = document.getElementById("guessingGameLi");
  let homepageh1 = document.getElementById("homepageh1");
  let todoAppLi = document.getElementById("todoAppLi");
  let simonGameLi = document.getElementById("simonGameLi");
  let RoundingAppLi = document.getElementById("RoundingAppLi");

  // Actual displaying thingies
  let randomColorPicker = document.getElementById("randomColorPicker");
  let guessingGame = document.getElementById("guessingGame");
  let signUpForm = document.getElementById("signUpForm");
  let homepage = document.getElementById("homepage");
  let todoApp = document.getElementById("todoApp");
  let simonGame = document.getElementById("simonGame");
  let RoundingApp = document.getElementById("RoundingApp");

  function home() {
    simonGame.style.display = "none";
    homepage.style.display = "block";
    signUpForm.style.display = "none";
    guessingGame.style.display = "none";
    randomColorPicker.style.display = "none";
    todoApp.style.display = "none";
    RoundingApp.style.display = "none";
    }

  // Home Page
  homepageh1.addEventListener("click", function() {
    home();
  });

  // ToDo App
  todoAppLi.addEventListener("click", function() {
    simonGame.style.display = "none";
    todoApp.style.display = "block";
    homepage.style.display = "none";
    signUpForm.style.display = "none";
    guessingGame.style.display = "none";
    randomColorPicker.style.display = "none";
    RoundingApp.style.display = "none";
  });

  // Sign Up Form
  signUpFormLi.addEventListener("click", function() {
    simonGame.style.display = "none";
    signUpForm.style.display = "block";
    guessingGame.style.display = "none";
    randomColorPicker.style.display = "none";
    homepage.style.display = "none";
    todoApp.style.display = "none";
    RoundingApp.style.display = "none";
  });

  // Random Color Picker
  randomColorPickerLi.addEventListener("click", function() {
    simonGame.style.display = "none";
    randomColorPicker.style.display = "block";
    guessingGame.style.display = "none";
    signUpForm.style.display = "none"
    homepage.style.display = "none";
    todoApp.style.display = "none";
    RoundingApp.style.display = "none";
  });

  // Guessing Game
  guessingGameLi.addEventListener("click", function() {
    simonGame.style.display = "none";
    randomColorPicker.style.display = "none";
    guessingGame.style.display = "block";
    signUpForm.style.display = "none"
    homepage.style.display = "none";
    todoApp.style.display = "none";
    RoundingApp.style.display = "none";
  });

  // Simon Game ------- TBD
  simonGameLi.addEventListener("click", function() {
    simonGame.style.display = "block";
    randomColorPicker.style.display = "none";
    guessingGame.style.display = "none";
    signUpForm.style.display = "none"
    homepage.style.display = "none";
    todoApp.style.display = "none";
    RoundingApp.style.display = "none";
  });

  // Rounding App
  RoundingAppLi.addEventListener("click", function() {
    simonGame.style.display = "none";
    todoApp.style.display = "none";
    homepage.style.display = "none";
    signUpForm.style.display = "none";
    guessingGame.style.display = "none";
    randomColorPicker.style.display = "none";
    RoundingApp.style.display = "block";
  });
});
