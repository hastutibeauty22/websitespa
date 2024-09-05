document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('rotating-image');
    const images = [
        'Image/SPA Body.png',
        'Image/SPA Body 2.png',
        'Image/SPA Body 3.png'
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        image.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000); // Ubah gambar setiap 2000 milidetik (2 detik)
});
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides-container');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 25}%)`; /* Adjust based on slide width */
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initial call to show the first slide
showSlide(currentSlide);

