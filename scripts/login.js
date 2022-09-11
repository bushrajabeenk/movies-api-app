document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var signUpArray = JSON.parse(localStorage.getItem("signUpData")) || [];

  var name;

  var email = loginForm.email.value;
  //console.log(email);
  var pass = loginForm.pass.value;
  //console.log(pass);

  var flag = true;
  for (let i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email != email && signUpArray[i].password != pass) {
      name = signUpArray[i].name;
      flag = false;
    }
  }
  console.log(name);
  if (flag === true) {
    document.querySelector("#loginn").innerText = "Bushra";
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
});
