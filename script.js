function showLogin() {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("loginSection").style.display = "flex";
}

document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuario" && password === "contrasena") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("mainPage").style.display = "flex";
    } else {
        document.getElementById("loginError").innerText = "Usuario o contraseña incorrectos";
    }
});

function showPage(pageId) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById(pageId).style.display = "flex";
}

function goBack() {
    document.querySelectorAll('.page').forEach(page => page.style.display = "none");
    document.getElementById("mainPage").style.display = "flex";
}

document.getElementById("sendMessageButton").addEventListener("click", function () {
    const message = document.getElementById("chatInput").value;
    const chatMessages = document.getElementById("chatMessages");

    if (message) {
        const userMessage = document.createElement("div");
        userMessage.textContent = "Tú: " + message;
        chatMessages.appendChild(userMessage);

        const responseMessage = document.createElement("div");
        responseMessage.textContent = "Psicólogo: Gracias por tu mensaje. Estoy aquí para ayudarte.";
        chatMessages.appendChild(responseMessage);

        document.getElementById("chatInput").value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
