const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
 
    alert("Test");
    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    }
})

loginForm.submit();