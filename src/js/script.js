const burgerIcon = document.querySelector('.burger-icon');
const menuContent = document.querySelector('.burger-menu-content');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.burger-menu-content a');

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
