document.querySelector("#signupForm").addEventListener("submit", function (e) {
  var signUpArray = JSON.parse(localStorage.getItem("signUpData")) || [];

  e.preventDefault();

  var name = signupForm.name.value;
  var phoneNumber = signupForm.number.value;
  if (phoneNumber.length < 10) {
    document.querySelector("#numError").innerHTML =
      "Enter a valid phone number";
    document.querySelector("#numError").style.color = "red";
  }
  var email = signupForm.emaill.value;
  var password = signupForm.password.value;

  var signupObj = {
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
  };

  signUpArray.push(signupObj);

  localStorage.setItem("signUpData", JSON.stringify(signUpArray));

  // document
  // .querySelector("#submbtn")
  // .addEventListener("click", function (e) {
  if (name === "" || phoneNumber === "" || email === "" || password === "") {
    return false;
  } else {
    window.location.href = "login.html";
  }
  // });
});
