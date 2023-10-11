function flip() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');

    const btnSecondary = document.querySelector('.button-card--secondary');
    if (card.classList.contains('flipped')) {
        btnSecondary.style.transform = 'translate(-130px, 20px)';
        btnSecondary.style.zIndex = "2";
    } else {
        btnSecondary.style.transform = '';
        btnSecondary.style.zIndex = "0";
    }
}

document.querySelector('.button-card--secondary').addEventListener('click', flip);
