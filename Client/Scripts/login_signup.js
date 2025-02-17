let s_nameEl = document.getElementById("s-name");
let s_emailEl = document.getElementById("s-email");
let s_passEl = document.getElementById("s-pass");
const signInform = document.getElementById("signUp_form");

signInform.addEventListener("submit", (event) => {
  event.preventDefault();
  const payload = {
    name: s_nameEl.value,
    email: s_emailEl.value,
    password: s_passEl.value,
  };
  // console.log(payload)
  fetch("https://vlink-auth-server.onrender.com/user/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.msg == "Registration Succesfull") {
        swal.fire({
          icon: "success",
          title: "Registration Succesful!",
          text: "You are now successfully Registerd.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
        window.location.href = "./login_signup.html";
      } else if (
        res.msg ===
        "Weak password. Passwords must be at least 8 characters long and contain at least one letter, one number, and may include special characters like !@#$%^&*()_+."
      ) {
        swal.fire({
          icon: "warning",
          title: "Weak password.",
          text: "Passwords must be at least 8 characters. Must contain at least 1 letter, 1 number and 1 special character.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      } else if (res.msg === "Login Directly") {
        swal.fire({
          icon: "warning",
          title: "Login Directly",
          text: "You are already registerd.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      } else {
        swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials. Please try again.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      }
      SrefreshForm();
    })
    .catch((err) => console.log(err));
});

function SrefreshForm() {
  signInform.reset();
}

let l_emailEl = document.getElementById("l-email");
let l_passEl = document.getElementById("l-pass");
let loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const payload = {
    email: l_emailEl.value,
    password: l_passEl.value,
  };
  // console.log(payload)
  fetch("https://vlink-auth-server.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      //console.log(res)
      localStorage.setItem("token", res.token);
      let user = res.user;
      localStorage.setItem("userInfo", JSON.stringify(user.name));
      if (res.msg == "login success") {
        swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You are now logged in.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
        window.location.href = "../plans.html";
      } else {
        swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials. Please try again.",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      }
    })
    .catch((err) => console.log(err));
});
