console.log("Hello World!");

console.log(" /\\_/\\");
console.log("( o.o )");
console.log(" > ^ <");

let catPicture = document.getElementById("cat-picture");

catPicture.onclick = function meow() {
  window.alert("Meow!");
}

let formName = document.getElementById("form-name");
let formEmail = document.getElementById("form-email");
let formPhone = document.getElementById("form-phone");
let formButton = document.getElementById("form-button");

formButton.onclick = function submit_form() {
  let name = formName.value;
  let email = formEmail.value;
  let phone = formPhone.value;

  if (!name) {
    window.alert("Please enter a name");
    return;
  }
  if (!email) {
    window.alert("Please enter an email");
    return;
  }
  if (!phone) {
    window.alert("Please enter a phone number");
    return;
  }

  window.alert("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone);
}
