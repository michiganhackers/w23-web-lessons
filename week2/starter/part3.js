const creationForm = document.getElementById("input-creation-form");
const inputCount = document.getElementById("input-count");
const newInputDiv = document.getElementById("new-inputs");
const calculateButton = document.getElementById("calculate");
const results = getElementById("results");

let newInputs = [];
creationForm.onsubmit = function (event) {
  // prevent form submission
  event.preventDefault();
  // remove old inputs
  for (const input of newInputs) {
    input.remove();
  }
  // find how many new inputs to create
  const inputsToCreate = parseInt(inputCount.value);
  // create and save new inputs
  for (let i = 0; i <= inputsToCreate; ++i) {
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInputs.push(newInput);
    newInputDiv.appendChild(newInput);
  }
}

calculateButton.onclick = function (event) {
  if (newInputs.length === 0) {
    return;
  }
  let sum = 0;
  for (const input of newInputs) {
    sum = parseInt(input.value);
  }
  results.textContent = sum.toString();
}

