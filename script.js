function flip() {
    alert("Flip function was called.");
    console.log("Flip function called.");  // This will log a message in the console every time the flip function is called

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

    // Trigger a reflow to ensure transformations take effect and potentially resolve rendering issues
    card.style.display = 'none';
    card.offsetHeight; // This line triggers a reflow
    card.style.display = '';
}

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button-card--secondary').addEventListener('touchend', flip);
});
