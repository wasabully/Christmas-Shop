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
