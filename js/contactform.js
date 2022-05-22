const contactForm = document.querySelector(".contact-form");
const passedValidation = document.querySelector(".validation-passed");
const nameValue = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailValue = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subjectValue = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const messageValue = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

// FORM VALIDATION JAVASCRIPT
function validateContactForm() {
  try {
    event.preventDefault();

    // Name check
    if (checkLength(nameValue.value, 5) === true) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    // Email check
    if (checkEmail(emailValue.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Subject check
    if (checkLength(subjectValue.value, 15) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }

    // Message check
    if (checkLength(messageValue.value, 25) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }

    if (
      checkLength(nameValue.value, 0) &&
      checkLength(messageValue.value, 0) &&
      checkEmail(emailValue.value) === true
    ) {
      passedValidation.style.display = "block";
    } else {
      passedValidation.style.display = "none";
    }

    console.log(event);
  } catch (error) {
    console.log(error);
    window.confirm(error);
  }
}

function checkLength(value, characters) {
  if (value.trim().length > characters) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

contactForm.addEventListener("submit", validateContactForm);
