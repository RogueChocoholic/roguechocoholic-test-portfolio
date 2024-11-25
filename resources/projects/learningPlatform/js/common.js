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
