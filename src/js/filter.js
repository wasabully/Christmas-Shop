const filterButtons = document.querySelectorAll('.filter-button');

const cards = document.querySelectorAll('.card-gifts');

filterButtons.forEach((button) => {
	button.addEventListener('click', function (event) {
		event.preventDefault();

		const category = button.getAttribute('data-category');

		filterButtons.forEach((b) => b.classList.remove('active'));
		button.classList.add('active');

		cards.forEach((card) => {
			if (category === 'all' || card.classList.contains(category)) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		});
	});
});
