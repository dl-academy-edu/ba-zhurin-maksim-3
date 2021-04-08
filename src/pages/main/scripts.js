
        const wrapper = document.querySelector(".slider__wrapper");
        const innerWrapper = document.querySelector(".slider__inner-wrapper");
        const pagination = document.querySelector(".slider__pagination");
        const buttonBack = document.querySelector(".slider__button_back");
        const buttonNext = document.querySelector(".slider__button_next");
        const slides = document.querySelectorAll(".slider__slide");

        let slideWidth = 0;

        let maxSlideIndex = innerWrapper.childElementCount - 1;
        let timerId = null;

        let activeSlide = 0;
        setButtonState(buttonBack);

        let dots = [];

        initDots();

        function initSlideWidth(){
            slideWidth = wrapper.offsetWidth;
            for (let slide of slides) {
                slide.style.width = `${slideWidth}px`;
            }
        }

        initSlideWidth();

        function setButtonState(button, state = false) {
            if(state){
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled','');
            }
        }

        function setActiveSlide(index, widthAnimation = true) {
            if (index < 0 || index > maxSlideIndex) {
                return;
            }
            clearTimeout(timerId);
            if(widthAnimation){
                innerWrapper.style.transition = 'transform 500ms';
                timerId = setTimeout(() => {
                    innerWrapper.style.transition = '';
                }, 500);
            }
            setButtonState(buttonNext, true);
            setButtonState(buttonBack, true);
            if (index === 0){
                setButtonState(buttonBack);
            }
            if(index === maxSlideIndex){
                setButtonState (buttonNext);
            }
            innerWrapper.style.transform = `translateX(${index * slideWidth * (-1)}px)`;
            dots[activeSlide].classList.remove('slider_dot_active');
            activeSlide = index;
            dots[activeSlide].classList.add('slider_dot_active');
        }

        buttonNext.addEventListener ('click', function(){
            setActiveSlide(activeSlide + 1);
        });

        buttonBack.addEventListener ('click', function(){
            setActiveSlide(activeSlide -1);
        });

        window.addEventListener('resize', function(){
            initSlideWidth();
            setActiveSlide(activeSlide, false);
        });

function initDots() {
    pagination.innerHTML = '';
    for (let i = 0; i < maxSlideIndex + 1; i++){
        let dot = document.createElement('button');
        dot.classList.add('slider_dot');
        if (i === activeSlide){
            dot.classList.add('slider_dot_active');
        }
        dots.push(dot);
        dot.addEventListener('click', function(){
            setActiveSlide(i);
        })
        pagination.insertAdjacentElement('beforeend',dot);
    }
}

//FORM 
var html = document.querySelector("html");
var signinButtonClose = document.querySelector(".sign__button-close");
var registerButtonClose = document.querySelector(".register__button-close");
var signinButtonOpen = document.querySelector(".header__list_link-sign");
var registerButtonOpen = document.querySelector(".header__list_link-register");

signinButtonOpen.addEventListener("click", function(){
    html.classList.add("sign-open");
    body.classList.add("lock");
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