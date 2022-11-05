const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input:first-child");
const loginH1 = document.querySelector("#hello-user h1");

function login(event){
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    loginH1.innerText = `Hello! ${userName}`;
    loginForm.classList.add("hidden");

}

const savedName = localStorage.getItem("userName");

if(savedName === null){
    loginForm.addEventListener("submit", login);
}else{
    loginForm.classList.add("hidden");
    loginH1.innerText = `Hello! ${savedName}`;
}

