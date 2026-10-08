const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Login recebido! O sistema de autenticação será conectado posteriormente.");

});