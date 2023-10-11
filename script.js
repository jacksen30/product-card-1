function flip() {
    alert("Flip function was called.");
    console.log("Flip function called.");

    const card = document.querySelector('.card');
    const btnSecondary = document.querySelector('.button-card--secondary');

    if (card.style.transform === "rotateY(180deg)") {
        card.style.transform = '';
        btnSecondary.style.transform = '';
        btnSecondary.style.zIndex = "0";
    } else {
        card.style.transform = "rotateY(180deg)";
        btnSecondary.style.transform = 'translate(-130px, 20px)';
        btnSecondary.style.zIndex = "2";
    }

    // Trigger a reflow to ensure transformations take effect and potentially resolve rendering issues
    card.style.display = 'none';
    card.offsetHeight;
    card.style.display = '';
}

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button-card--secondary').addEventListener('touchend', flip);
});

