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

const countdownDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
	const now = new Date().getTime();
	const timeLeft = countdownDate - now;

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.querySelector('.countdown-item:nth-child(1) .number').textContent =
		days.toString().padStart(2, '0');
	document.querySelector('.countdown-item:nth-child(2) .number').textContent =
		hours.toString().padStart(2, '0');
	document.querySelector('.countdown-item:nth-child(3) .number').textContent =
		minutes.toString().padStart(2, '0');
	document.querySelector('.countdown-item:nth-child(4) .number').textContent =
		seconds.toString().padStart(2, '0');

	if (timeLeft < 0) {
		clearInterval(countdownInterval);
		document.querySelector('.countdown').innerHTML = 'Happy New Year!';
	}
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
