// Store preference
function savePreference(color) {
    localStorage.setItem('buttonColor', color);
}

// Retrieve preference and apply it
function applyPreference() {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
        document.querySelector('button').style.backgroundColor = savedColor;
    }
}

// Example usage: Change button color and store preference
document.querySelector('button').addEventListener('click', function() {
    const newColor = this.style.backgroundColor === 'rgb(41, 128, 185)' ? '#e74c3c' : '#2980b9';
    this.style.backgroundColor = newColor;
    savePreference(newColor);
});

applyPreference();

document.querySelector('button').addEventListener('click', function() {
    this.classList.add('bounce-effect');
    setTimeout(() => this.classList.remove('bounce-effect'), 1000);
});

