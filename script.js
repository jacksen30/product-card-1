document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const btnSecondary = document.querySelector('.button-card--secondary');
    let isFlipped = false;

    function flip() {
        alert("Flip function was called.");
        console.log("Flip function called.");

        isFlipped = !isFlipped; // Toggle flip state

        if (isFlipped) {
            card.style.transform = "rotateY(180deg)";
            btnSecondary.style.transform = 'translate(-130px, 20px)';
            btnSecondary.style.zIndex = "2";
        } else {
            card.style.transform = "";
            btnSecondary.style.transform = '';
            btnSecondary.style.zIndex = "0";
        }

        // Trigger a reflow to ensure transformations take effect
        card.style.display = 'none';
        card.offsetHeight;
        card.style.display = '';
    }

    btnSecondary.addEventListener('touchend', flip);
    btnSecondary.addEventListener('click', flip);
});


