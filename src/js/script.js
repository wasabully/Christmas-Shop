const burgerIcon = document.querySelector('.burger-icon');
const menuContent = document.querySelector('.burger-menu-content');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.burger-menu-content a');
const sliderPrev = document.querySelector('.control-btn-prev');
const sliderNext = document.querySelector('.control-btn-next');
const sliderGallery = document.querySelector('.slider-gallery');
const slides = document.querySelectorAll('.gallery-item');
const slideCount = slides.length;

burgerIcon.addEventListener('click', () => {
	menuContent.classList.add('active');
});

menuClose.addEventListener('click', () => {
	menuContent.classList.remove('active');
});

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuContent.classList.remove('active');
	});
});

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
