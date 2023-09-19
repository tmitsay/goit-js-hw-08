import throttle from 'lodash.throttle';

const CURRENT_VALUE_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(CURRENT_VALUE_FORM)) || {};
const { email, message } = form.elements;

form.addEventListener('input', throttle(onClickInput, 500));
form.addEventListener('submit', onSubmitForm);

filledOutForm();

function onClickInput(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(CURRENT_VALUE_FORM, JSON.stringify(formData));

  // console.log(formData);
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log({ email: email.value, message: message.value });

  event.currentTarget.reset();
  localStorage.removeItem(CURRENT_VALUE_FORM);
}

function filledOutForm() {
  if (formData) {
    email.value = formData.value || '';
    message.value = formData.value || '';
  }
}

// console.log(form.elements);
