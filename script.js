function flip() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');

    const btnSecondary = document.querySelector('.button-card--secondary');
    if (card.classList.contains('flipped')) {
        btnSecondary.style.transform = 'translate(-130px, 20px)';
    } else {
        btnSecondary.style.transform = '';
    }
}