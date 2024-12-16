// main carousel start
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');

let currentIndex = 0;

// Create dots for each slide
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    carouselDots.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots .dot');

const updateDots = () => {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

const goToSlide = (index) => {
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
// main carousel end

// owl carousel start
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,                // Infinite loop
        margin: 10,                // Space between items
        nav: true,                 // Show next/prev buttons
        responsive: {
            0: {
                items: 1          // 1 item on small screens
            },
            600: {
                items: 3          // 3 items on medium screens
            },
            1000: {
                items: 5          // 5 items on larger screens
            }
        }
    });
});
// owl carousel end