function verifyEmailFE(id, position) {
  var errorNofity;
  if (position == 1) {
    errorNofity = document.getElementById("loginErrorMsg");
  } else {
    errorNofity = document.getElementById("signUpErrorMsg");
  }
  var field = document.getElementById(id);

  const parent = field.closest(".wrap-input-2");
  const span = parent.querySelector(".focus-border");
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Correct
  //   const emailRegex =
  //     /^(?=.{1,64}@)[A-Za-z0-9+_-]+(.[A-Za-z0-9+_-]+)*@[^-][A-Za-z0-9+-]+(.[A-Za-z0-9+-]+)*(.[A-Za-z]{2,})$/;

  if (field && span) {
    if (emailRegex.test(field.value)) {
      span.style.backgroundColor = "#6c5dd3";
      errorNofity.classList.remove("text-danger");
      errorNofity.innerText = "Click the eye to view password.";
    } else {
      span.style.backgroundColor = "red";
      errorNofity.classList.add("text-danger");
      errorNofity.innerText = "Email address invalid.";
    }
  }
}
function verifyPwFE(id, position) {
  var errorNofity = document.getElementById("pwErrorMsg");
  var field = document.getElementById(id);
  const parent = field.closest(".wrap-input-2");
  const span = parent.querySelector(".focus-border");

  var pw;
  const pwRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$])(?!.*[`/'"\\]).{8,32}$/; // Correct
  if (position == 1) {
    if (field && span) {
      if (field.value.length < 8) {
        span.style.backgroundColor = "red";
        errorNofity.classList.add("text-danger");
        errorNofity.innerText = "Password must contain at least 8 characters.";
      } else if (!pwRegex.test(field.value)) {
        span.style.backgroundColor = "red";
        errorNofity.classList.add("text-danger");
        errorNofity.innerText = "Invalid password.";
      } else {
        span.style.backgroundColor = "#6c5dd3";
        errorNofity.classList.remove("text-danger");
        errorNofity.innerText =
          "Password must contain at least one of the following; (A-Z), (a-z), (0-9), (@,#,$).";
      }
    }
  }

  if (position == 2) {
    pw = document.getElementById("signupPassword").value;
    if (pwRegex.test(pw)) {
      if (field.value != pw) {
        span.style.backgroundColor = "red";
        errorNofity.classList.add("text-danger");
        errorNofity.innerText = "Passwords do not match.";
      } else {
        span.style.backgroundColor = "#6c5dd3";
        errorNofity.classList.replace("text-danger", "text-success");
        errorNofity.innerText = "Good to Go.";
      }
    }
  }
}
