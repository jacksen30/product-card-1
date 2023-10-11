document.addEventListener('DOMContentLoaded', (event) => {
    let isFlipped = false;

    const card = document.querySelector('.card');
    const btnPrimary = document.querySelector('.button-card--primary');
    const btnSecondary = document.querySelector('.button-card--secondary');

    const flip = () => {
        isFlipped = !isFlipped;

        if (isFlipped) {
            card.style.transform = 'rotateY(180deg)';
            btnSecondary.style.transform = 'translate(-130px, 20px)';
            btnSecondary.style.zIndex = '2';
        } else {
            card.style.transform = '';
            btnSecondary.style.transform = '';
            btnSecondary.style.zIndex = '0';
        }

        // Update the z-index for .front after the flip
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
        } else {
            card.classList.add('flipped');
        }
    };

    btnPrimary.addEventListener('click', flip);
    btnSecondary.addEventListener('click', flip);
});
