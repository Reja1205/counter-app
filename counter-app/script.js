const counterTag = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");
const minusBtn = document.getElementById("minusBtn");

let counter = 0;

function updateCounter(value) {
  counter = counter + value;
  counterTag.textContent = counter;

  if (counter >= 10) {
    plusBtn.setAttribute("disabled", true);
  } else {
    plusBtn.removeAttribute("disabled", false);
  }
  if (counter <= 0) {
    minusBtn.setAttribute("disabled", true);
  } else {
    minusBtn.removeAttribute("disabled", false);
  }
}

plusBtn.addEventListener("click", () => {
  updateCounter(1);
});

minusBtn.addEventListener("click", () => {
  updateCounter(-1);
});

resetBtn.addEventListener("click", () => {
  counterTag.textContent = "0";
  minusBtn.removeAttribute("disabled", false);
  plusBtn.removeAttribute("disabled", false);
});
