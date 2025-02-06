// EMAIL FUNCTIONALITY

function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  const serviceID = 'service_frmz7yr';

  const templateID = 'template_wrgaoep';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Message sent successfully');
    })
    .catch((err) => console.log(err));
}

// CLOSE/OPEN MENU
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

