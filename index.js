const header = document.querySelector("header");
const inputContainer = document.getElementById("main__input-continer");
const mainHeader = document.getElementById("header__main-header");
const warningHeader = document.getElementById("header__warning-header");
const result = document.getElementById("result");
const resultWin = document.getElementById("win");
const resultLost = document.getElementById("lost");
const borderDownSpan = document.querySelectorAll(".border-down");
const borderUpSpan = document.querySelectorAll(".border-up");
const rightSpan = document.getElementById("right");
const guessInput = document.querySelector("input[type=number");
const checkButton = document.querySelector("input[type=button");
const countSpan = document.getElementById("count");
const answerSpan = document.querySelectorAll(".picked-number");
const initialPageImg = document.getElementById("first-page-img");
const restartButton = document.getElementById("restart-button")

let pickedNumber = 0;
let borderDown = 1;
let borderUp = 100;
let count = 0;
let right = 7 - count;
function pickANumber() {
  return Math.round(Math.random() * 100);
}

window.addEventListener("load", () => {
  result.style.display = "none";
  pickedNumber = pickANumber();
  borderDown = 1;
  borderUp = 100;
  count = 1;
  borderDownSpan.forEach((e) => (e.innerHTML = borderDown));
  borderUpSpan.forEach((e) => (e.innerHTML = borderUp));
  rightSpan.innerHTML = right;
});

const toLoad = () => {
  result.style.display = "none";
  header.style.display ="flex";
  inputContainer.style.display = "block";
  pickedNumber = pickANumber();
  borderDown = 1;
  borderUp = 100;
  count = 0;
  right= 7;
  borderDownSpan.forEach((e) => (e.innerHTML = borderDown));
  borderUpSpan.forEach((e) => (e.innerHTML = borderUp));
  rightSpan.innerHTML = right;
};

const clickButtonFunc = () => {
  initialPageImg.src = "./images/thinkingMan1.png";
  answerSpan.forEach((e) => (e.innerHTML = pickedNumber));
  if (pickedNumber == guessInput.value) {
    header.style.display = "none";
    inputContainer.style.display = "none";
    result.style.display = "flex";
    resultLost.style.display = "none";
    resultWin.style.display = "block";
    countSpan.innerHTML = count;
  } else if (guessInput.value > borderUp || guessInput < borderDown) {
    mainHeader.style.display = "none";
    warningHeader.style.display = "block";
  } else if (pickedNumber > guessInput.value && count != 7){
      count++;
      right--;
      borderDownSpan.forEach((e) => (e.innerHTML = guessInput.value));
      rightSpan.innerHTML = right;
  } else if (pickedNumber < guessInput.value && count != 7){
    count++;
    right--;
    borderUpSpan.forEach((e) => (e.innerHTML = guessInput.value));
    rightSpan.innerHTML = right;
} else{
    header.style.display = "none";
    inputContainer.style.display = "none";
    result.style.display = "flex";
    resultWin.style.display = "none";
    resultLost.style.display = "block";

}
};

checkButton.addEventListener("click", clickButtonFunc);
guessInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
    clickButtonFunc();
    }
  });
  restartButton.addEventListener("click", toLoad)
