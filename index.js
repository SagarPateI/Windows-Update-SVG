const box = document.getElementById('box');
const text = document.getElementById('text');


document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const boxX = parseFloat(box.getAttribute('x'));
    const boxY = parseFloat(box.getAttribute('y'));

    console.log(boxX);
    console.log(boxY);

    const dx = boxX - mouseX; // arbitrary adjustments
    const dy = boxY - mouseY;

    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
        const newX = boxX + dx / dist * 10;
        const newY = boxY + dy / dist * 10;
        box.setAttribute('x', newX);
        box.setAttribute('y', newY);

        // Keep the text inside the box
        const textX = newX + box.getAttribute('width') / 2;
        const textY = newY + box.getAttribute('height') / 2;
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
    }
});

// Add a click event listener to the button
button.addEventListener("click", function () {
    // Reset the position of the button to the center of the screen
    button.style.left = "50%";
    button.style.top = "50%";
    // button.style.transform = 'translate(56%, 74%)';
});