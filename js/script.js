const password = document.querySelector(".password")
const passwordConfirm = document.querySelector(".password-confirm")
const passwords = document.querySelectorAll(".passwords")
const passwordContainer = document.querySelector(".password-container")

let noticeToUser = null;

function validatePasswords(){
    let passwordValue = password.value
    let passwordConfirmValue = passwordConfirm.value

    if(passwordValue !== passwordConfirmValue){
        password.style.border = "1px solid red";
        password.style.borderRadius = "5px";
        passwordConfirm.style.border = "1px solid red";
        passwordConfirm.style.borderRadius = "5px";


        if (!noticeToUser) {
            noticeToUser = document.createElement("p");
            noticeToUser.textContent = "*Passwords do not match";
            noticeToUser.style.color = "red";
            noticeToUser.style.fontSize = "0.75rem";
            noticeToUser.classList.add("notice-to-user")
            passwordContainer.appendChild(noticeToUser);
        }

    } else{
        password.style.border = "";
        password.style.borderRadius = "";
        passwordConfirm.style.border = "";
        passwordConfirm.style.borderRadius = "";

        if (noticeToUser && noticeToUser.parentNode) {
            noticeToUser.parentNode.removeChild(noticeToUser);
            noticeToUser = null;
        }
    
    }
}


passwords.forEach(p => {
    p.addEventListener("focus", validatePasswords);
})