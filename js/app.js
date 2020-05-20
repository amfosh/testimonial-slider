const buttonJohnPrev = document.querySelector('.btn.btn-john.btn-previous');
const buttonJohnNext = document.querySelector('.btn.btn-john.btn-next');
const buttonTanyaPrev = document.querySelector('.btn.btn-tanya.btn-previous');
const buttonTanyaNext = document.querySelector('.btn.btn-tanya.btn-next');
const slideTanya = document.querySelector('#tanya');
const slideJohn = document.querySelector('#john');

buttonTanyaPrev.addEventListener('click', () => {
    
    if (slideTanya.classList.length > 1) {
        slideTanya.classList.remove(slideTanya.classList.item(1));
    }
    slideTanya.classList.add('animate-slide-right-out');
    setTimeout(() => {slideTanya.style.display = "none"}, 500 );

    setTimeout(() => {slideJohn.style.display = "flex"}, 500 );
    slideJohn.classList.add('animate-slide-right-in');
}); 

buttonJohnNext.addEventListener('click', () => {
    
    if (slideJohn.classList.length > 1) {
        slideJohn.classList.remove(slideJohn.classList.item(1));
    }
    slideJohn.classList.add('animate-slide-right-out');
    setTimeout(() => {slideJohn.style.display = "none"}, 500 );

    setTimeout(() => {slideTanya.style.display = "flex"}, 500 );
    slideTanya.classList.add('animate-slide-right-in');
}); 