const output = document.getElementById('namebox');

document.addEventListener('keydown', (event) => {
    if (event.key.length === 1) {
        output.textContent += event.key;
    } else if (event.key === 'Backspace') {
        output.textContent = output.textContent.slice(0, -1);
    }
});
