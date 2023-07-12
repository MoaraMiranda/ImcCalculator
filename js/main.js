import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateBMC, notANumber } from "./utils.js";

/******************************
Variables
******************************/

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

/******************************
Events
******************************/

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

/******************************
Functions
******************************/

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateBMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Your BMC is ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
