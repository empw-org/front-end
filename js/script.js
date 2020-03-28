const apiBaseURL = '';

async function submitContactUsForm(e) {
  e.preventDefault();
  const { name, email, message } = e.target.children;
  const body = {
    name: name.value,
    email: email.value,
    message: message.value,
    from: 'WEB'
  };

  console.log(body);
  await fetch(apiBaseURL, {
    method: 'POST',
    body
  });
  return false;
}

document
  .getElementById('contact-us-form')
  .addEventListener('submit', submitContactUsForm);
