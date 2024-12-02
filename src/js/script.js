const burgerIcon = document.querySelector('.burger-icon');
const menuContent = document.querySelector('.burger-menu-content');
const menuClose = document.querySelector('.menu-close');

burgerIcon.addEventListener('click', () => {
	menuContent.classList.add('active');
});

menuClose.addEventListener('click', () => {
	menuContent.classList.remove('active');
});
