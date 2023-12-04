const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterEl = document.querySelector(".counter");
const counterTitle = document.querySelector(".counter__title");

// decrementing:

decreaseButtonEl.addEventListener("click", function () {
  // current value of the counter
  const currentValue = counterValueEl.textContent;

  // convert value to number

  const currentValueAsNumber = +currentValue;

  // decrement by 1

  let newValue = currentValue - 1;

  // check if new value is less tha 0

  if (newValue < 0) {
    // if statement is valid, force to be 0
    newValue = 0;
  }

  // update counter value with the new value

  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  decreaseButtonEl.blur();
});

// incrementing:

function incrementCounter() {
  // get current value
  const currentValue = counterValueEl.textContent;

  // covert value

  const currentValueAsNumber = +currentValue;

  // increment by 1

  let newValue = currentValueAsNumber + 1;

  // setting limitation

  if (newValue > 5) {
    newValue = 5;
    // inform user about limitation
    counterEl.classList.add("counter--limit");
    // updating counter title
    counterTitle.innerHTML = "You're reached the <b>limit!</b>";
    // disabled increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with the new value

  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  increaseButtonEl.blur();
}

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);

// reset:

resetButtonEl.addEventListener("click", function () {
  // set counter to zero
  counterValueEl.textContent = 0;

  //reset background-color

  counterEl.classList.remove("counter--limit");

  // reset counter title
  counterTitle.textContent = "Fancy Counter";

  // enable increase and decrease buttons

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) button
  resetButtonEl.blur();
});
