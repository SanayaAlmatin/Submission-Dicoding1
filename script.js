// Script untuk darkmode/lightmode
const checkbox = document.getElementById('checkbox');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    checkbox.checked = true;
} else {
    document.body.classList.remove('dark');
    checkbox.checked = false;
}

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

//Script untuk slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperCards = new Swiper('.mySwiperCards', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
});


//Script untuk responsive navbar
function toggleMenu() {
    var x = document.querySelector(".navbar");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

//Script untuk custom slider
let customIndex = 0;

function moveCustomSlide(direction) {
    const slides = document.querySelectorAll('.custom-slide');
    const totalSlides = slides.length;

    customIndex += direction;

    if (customIndex >= totalSlides) {
        customIndex = 0;
    } else if (customIndex < 0) {
        customIndex = totalSlides - 1;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelectorAll('.custom-slide');
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.custom-slides-wrapper').style.transform = `translateX(-${customIndex * slideWidth}px)`;
}

function resetSliderLayout() {
    const screenWidth = window.innerWidth;
    const slidesWrapper = document.querySelector('.custom-slides-wrapper');

    if (screenWidth > 768) {
        customIndex = 0;
        slidesWrapper.style.transform = `translateX(0)`;
    } else {
        updateSlidePosition();
    }
}

window.addEventListener('resize', resetSliderLayout);
window.addEventListener('load', resetSliderLayout);