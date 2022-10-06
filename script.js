////////////////////////////////////////
///// variables
const main = document.querySelector(`.main`);
const form = document.querySelector(`.singup--form`);
const inputFirstName = document.querySelector(`.input--first_name`);
const inputLastName = document.querySelector(`.input--last_name`);
const inputEmail = document.querySelector(`.input--email`);
const inputPassword = document.querySelector(`.input--password`);
const popup = document.querySelector(`.popup`);
const overlay = document.querySelector(`.overlay`);

const signupBtn = document.querySelector(`.signup--btn`);
const popupCloseBtn = document.querySelector(`.popup--close_btn`);

const inputContainers = document.querySelectorAll(`.input-container`);
const allInput = document.querySelectorAll(`.input`);
const warnings = document.querySelectorAll(`.warning`);

////////////////////////////////////////
///// conditions
const isRequired = value => (value === `` ? false : true);
const isEmailValid = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const isPasswordSecure = password => {
  const re = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})`
  );
  return re.test(password);
};

////////////////////////////////////////
///// functions
const showError = (input, message) => {
  const inputContainer = input.parentElement;
  const errorMessage = inputContainer.querySelector(`small`);
  errorMessage.textContent = message;

  input.nextElementSibling.classList.remove(`hidden`);
};

const showSuccess = input => {
  const inputContainer = input.parentElement;
  const errorMessage = inputContainer.querySelector(`small`);
  errorMessage.textContent = ``;

  input.nextElementSibling.classList.add(`hidden`);
};

const checkFirstName = () => {
  let valid = false;
  const firstName = inputFirstName.value.trim();

  if (!isRequired(firstName)) {
    showError(inputFirstName, `First Name cannot be empty`);
    inputFirstName.classList.add(`red-border`);
  } else {
    showSuccess(inputFirstName);
    inputFirstName.classList.remove(`red-border`);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;
  const lastName = inputLastName.value.trim();

  if (!isRequired(lastName)) {
    showError(inputLastName, `Last Name cannot be empty`);
    inputLastName.classList.add(`red-border`);
  } else {
    showSuccess(inputLastName);
    inputLastName.classList.remove(`red-border`);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = inputEmail.value.trim();

  if (!isRequired(email)) {
    showError(inputEmail, `Email Address cannot be empty`);
    inputEmail.classList.add(`red-border`);
  } else if (!isEmailValid(email)) {
    showError(inputEmail, `Looks like this is not an email`);
    inputEmail.classList.add(`red-letter`);
    inputEmail.classList.add(`red-border`);
  } else {
    showSuccess(inputEmail);
    inputEmail.classList.remove(`red-letter`);
    inputEmail.classList.remove(`red-border`);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = inputPassword.value.trim();

  if (!isRequired(password)) {
    showError(inputPassword, `Password cannot be empty`);
    inputPassword.classList.add(`red-border`);
  } else if (!isPasswordSecure(password)) {
    showError(
      inputPassword,
      `Must be at least 8 characters including at least 1 lowercase and 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)`
    );
    inputPassword.classList.add(`red-letter`);
    inputPassword.classList.add(`red-border`);
    inputPassword.parentElement.lastChild.classList.add(`password-error`);
  } else {
    showSuccess(inputPassword);
    inputPassword.classList.remove(`red-letter`);
    inputPassword.classList.remove(`red-border`);
    valid = true;
  }

  return valid;
};

////////////////////////////////////////
///// event handlers

// Add divs and classes
inputContainers.forEach(c => {
  c.insertAdjacentHTML(
    `beforeend`,
    `<div class="warning hidden">!</div><small class="small"></small>`
  );
});

// Click signup btn
signupBtn.addEventListener(`click`, function () {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();
  if (checkFirstName() && checkLastName() && checkEmail() && checkPassword()) {
    allInput.forEach(input => (input.value = ``));
    overlay.classList.remove(`disappear`);
    popup.classList.remove(`disappear`);
  }
});

// Instant feedback before clicking btn
allInput.forEach(input => {
  input.addEventListener(`input`, function (e) {
    switch (e.target.id) {
      case "first-name":
        checkFirstName();
        break;
      case "last-name":
        checkLastName();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
    }
  });
});

// Popup Close
popupCloseBtn.addEventListener(`click`, function () {
  overlay.classList.add(`disappear`);
  popup.classList.add(`disappear`);
});

document.addEventListener(`keydown`, function (e) {
  signupBtn.blur();
  if (
    e.key === `Escape` &&
    !overlay.classList.contains(`disappear`) &&
    !popup.classList.contains(`disappear`)
  ) {
    overlay.classList.add(`disappear`);
    popup.classList.add(`disappear`);
  }
});

overlay.addEventListener(`click`, function (e) {
  overlay.classList.add(`disappear`);
  popup.classList.add(`disappear`);
});
