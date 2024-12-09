const sliderPrev = document.querySelector('.control-btn-prev');
const sliderNext = document.querySelector('.control-btn-next');
const sliderGallery = document.querySelector('.slider-gallery');
const slides = document.querySelectorAll('.gallery-item');
const slideCount = slides.length;

let sliderIndex = 0;

function updateSlider() {
	const slideWidth = slides[0].clientWidth;
	const sliderOffset = -sliderIndex * slideWidth;
	sliderGallery.style.transform = `translateX(${sliderOffset}px)`;
}

sliderNext.addEventListener('click', () => {
	sliderIndex = (sliderIndex + 1) % slideCount;
	updateSlider();
});

sliderPrev.addEventListener('click', () => {
	sliderIndex = (sliderIndex - 1 + slideCount) % slideCount;
	updateSlider();
});

updateSlider();
