const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
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

function toggleMenu() {
    var x = document.querySelector(".navbar");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive"); // Hapus kelas 'responsive' jika sudah ada
    } else {
        x.classList.add("responsive"); // Tambahkan kelas 'responsive' jika belum ada
    }
}

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
        // Reset layout to two columns on larger screens
        customIndex = 0;
        slidesWrapper.style.transform = `translateX(0)`;
    } else {
        // Maintain position of slides on small screens
        updateSlidePosition();
    }
}

// Event listener for screen resizing
window.addEventListener('resize', resetSliderLayout);

// Call function to set the correct layout when the page first loads
window.addEventListener('load', resetSliderLayout);