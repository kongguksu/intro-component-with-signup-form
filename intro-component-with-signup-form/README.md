# Frontend Mentor - Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I used classes that I can add and remove from elements to use in JavaScript.

```css
/***** ADD/REMOVE CLASSES *****/
.hidden {
  opacity: 0;
}

.warning {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: var(--primary-red);
  border: none;
  border-radius: 100px;

  padding: 0.8rem;
}

.small {
  position: absolute;
  bottom: -20%;
  right: 1%;

  font-family: inherit;
  font-size: 0.6rem;
  font-weight: 500;
  font-style: italic;
  color: var(--primary-red);
}

.red-letter {
  color: var(--primary-red);
}

.password-error {
  bottom: -26%;

  font-size: 0.4rem;
  text-align: right;

  padding-left: 2rem;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: auto;
  background-color: #8077b7;
  border-radius: 8px;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.2);

  padding: 6rem 1.5rem 6.5rem 1.5rem;
  z-index: 1000;
}

.disappear {
  display: none;
}

.red-border {
  border: 2px solid var(--primary-red);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
}
```

```js
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
```

### Continued development

I felt the need to learn more about regex. I got help from some online resources to create conditions for the validation of input field values.

```js
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
```

### Useful resources

- [Example resource 1](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - Javascript Form Validation

## Author

- Frontend Mentor - [@kongguksu](https://www.frontendmentor.io/profile/kongguksu)
- Twitter - [@codingsooj](https://www.twitter.com/codingsooj)
