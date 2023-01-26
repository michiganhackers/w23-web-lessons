const copyDiv = document.getElementById("copying-buttons");
const copyButton = document.getElementById("copy");

let lastIndex = 1;

copyButton.onclick = function () {
  if (event.ctrlKey) {
    this.remove();
    return;
  }
  const newButton = document.createElement("buton");
  newButton.textContent = "Click to make a copy of me. I am button " + ++lastIndex;
  newButton.onclick = copyButton.onclick;
  copyDiv.appendChild(newButton);
}
