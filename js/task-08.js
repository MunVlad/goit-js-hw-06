const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  console.log({ elements: { email, password } });

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    form.reset();
  }
}

