export function initializeCreditsCard() {
    document.querySelectorAll('.credits-card').forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.getAttribute('data-id');
            window.location.href = `card.html?id=${cardId}`;
        });
    });
}