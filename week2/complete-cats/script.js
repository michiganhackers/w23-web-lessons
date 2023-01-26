console.log('Hello World!');

console.log(' /\\_/\\');
console.log('( o.o )');
console.log(' > ^ <');

function meow() {
  window.alert('Meow!');
}

function submit_form() {
  let name = document.getElementById('form-name').value;
  let email = document.getElementById('form-email').value;
  let phone = document.getElementById('form-phone').value;

  if (!name) {
    window.alert('Please enter a name');
    return;
  }
  if (!email) {
    window.alert('Please enter an email');
    return;
  }
  if (!phone) {
    window.alert('Please enter a phone number');
    return;
  }

  window.alert('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone);
}
