const inputEl = document.querySelector('#validation-input');

const onInputBlur = () => {
  const validLength = Number(inputEl.dataset.length);
  const inputLength = inputEl.value.length;

  if (inputLength === validLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
