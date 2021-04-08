var html = document.querySelector("html");
var signinButtonClose = document.querySelector(".sign__button-close");
var registerButtonClose = document.querySelector(".register__button-close");
var signinButtonOpen = document.querySelector(".header__list_link-sign");
var registerButtonOpen = document.querySelector(".header__list_link-register");

signinButtonOpen.addEventListener("click", function(){
    html.classList.add("sign-open");
    popupButtonClose.focus();
});

registerButtonOpen.addEventListener("click", function(){
    html.classList.add("register-open");
    popupButtonClose.focus();
});

signinButtonClose.addEventListener("click", function(){
    html.classList.remove("sign-open");
});

registerButtonClose.addEventListener("click", function(){
    html.classList.remove("register-open");
});
console.log(signinButtonOpen);