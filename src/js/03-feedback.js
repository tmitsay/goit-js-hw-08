import throttle from 'lodash.throttle';

const CURRENT_VALUE_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(CURRENT_VALUE_FORM)) || {};
const { email, message } = form.elements;

filledOutForm();

form.addEventListener('input', throttle(onClickInput, 500));
form.addEventListener('submit', onSubmitForm);

function onClickInput(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(CURRENT_VALUE_FORM, JSON.stringify(formData));

  // console.log(formData);
}

function filledOutForm() {
  const saveMessage = JSON.parse(localStorage.getItem(CURRENT_VALUE_FORM));

  // console.log(saveMessage);

  if (saveMessage) {
    email.value = saveMessage.email || '';
    message.value = saveMessage.message || '';
  }
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log({ email: email.value, message: message.value });

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please! Fill in all fields of the form');
  }

  event.currentTarget.reset();
  localStorage.removeItem(CURRENT_VALUE_FORM);
  formData = {};
}

// console.log(form.elements);
