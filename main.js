// Variáveis
screen1 = document.querySelector(".screen1");
screen2 = document.querySelector(".screen2");
btnTry = document.querySelector("#btnTry");
btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnterClick);

function handleEnterClick(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick();
  }
}

// Funções
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`;
  }

  if(inputNumber.value >= 0 && inputNumber.value <= 10){
    xAttempts++;
  } else {
    alert("Tem que ser um número entre 0 e 10");
  }
  
  inputNumber.value = "";

}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1;

  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

