const formLogInRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const resultObject = {};
    resultObject.email = email.value;
    resultObject.password = password.value;
    console.log(resultObject);
    event.currentTarget.reset();
  }
};

formLogInRef.addEventListener("submit", handleSubmit);
