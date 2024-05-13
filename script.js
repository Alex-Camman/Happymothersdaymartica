const openButton = document.querySelector('.open-button');
const card = document.querySelector('.card');
const flowers = document.querySelectorAll('.flower');
const confettiContainer = document.getElementById('confetti-container');

function openCard() {
  card.classList.toggle('open'); // Toggle open/closed class
  if (card.classList.contains('open')) {
    showConfetti(); // Show confetti on open
  }
}

function showConfetti() {
  // Add confetti library code here (e.g., confetti.js)
  // You'll need to include the library in your HTML
  confettiContainer.classList.add('show'); // Add class to display confetti
  setTimeout(() => {
    confettiContainer.classList.remove('show');
  }, 3000); // Hide confetti after 3 seconds
}

function revealMessage(flower) {
  const message = flower.dataset.message;
  alert(message); // Replace with a more visual message reveal (e.g., popup)
}

flowers.forEach(flower => flower.addEventListener('click', () => revealMessage(flower)));

openButton.addEventListener('click', openCard);
