// swipe-cards.js

// Select all cards
const cards = document.querySelectorAll('.card');
let currentCard = 0; // Track the index of the current card

// Function to handle swipe actions
function handleSwipe(card, direction) {
    if (direction === 'left') {
        card.classList.add('swipe-left');
    } else if (direction === 'right') {
        card.classList.add('swipe-right');
    }

    // Move to the next card after swipe
    card.addEventListener('transitionend', () => {
        card.style.display = 'none';
        currentCard++;
        if (currentCard < cards.length) {
            cards[currentCard].style.display = 'block'; // Show the next card
        }
    });
}

// Add swipe event listeners to each card
cards.forEach((card) => {
    let startX = 0;
    let currentX = 0;

    card.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        card.style.transition = 'none'; // Disable transition for dragging
    });

    card.addEventListener('mousemove', (e) => {
        if (startX) {
            currentX = e.clientX - startX;
            card.style.transform = `translateX(${currentX}px) rotate(${currentX / 10}deg)`;
        }
    });

    card.addEventListener('mouseup', () => {
        card.style.transition = 'transform 0.5s'; // Re-enable transition

        if (currentX > 100) {
            handleSwipe(card, 'right'); // Right swipe detected
        } else if (currentX < -100) {
            handleSwipe(card, 'left'); // Left swipe detected
        } else {
            card.style.transform = 'translateX(0px) rotate(0deg)'; // Reset position if no swipe
        }

        startX = 0; // Reset swipe tracking
        currentX = 0;
    });

    // Optional: touch support for mobile
    card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        card.style.transition = 'none';
    });

    card.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX / 10}deg)`;
    });

    card.addEventListener('touchend', () => {
        card.style.transition = 'transform 0.5s';

        if (currentX > 100) {
            handleSwipe(card, 'right');
        } else if (currentX < -100) {
            handleSwipe(card, 'left');
        } else {
            card.style.transform = 'translateX(0px) rotate(0deg)';
        }

        startX = 0;
        currentX = 0;
    });
});
