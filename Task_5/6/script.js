// Task 5 - 6
// LocalStorage Example

const inputField = document.getElementById('savedText');
const statusMessage = document.getElementById('statusMessage');

// c. The application reads the value from the local storage when the window is loaded.
window.addEventListener('load', function () {
    const savedValue = localStorage.getItem('mySavedText');
    if (savedValue) {
        inputField.value = savedValue;
        showStatus('Value loaded from LocalStorage!');
    }
});

// b. On blur-event the application writes the contents on that input in the local storage.
inputField.addEventListener('blur', function () {
    const currentValue = inputField.value;
    localStorage.setItem('mySavedText', currentValue);
    showStatus('Value saved to LocalStorage!');
});

function showStatus(message) {
    statusMessage.textContent = message;
    statusMessage.style.opacity = '1';
    setTimeout(() => {
        statusMessage.style.opacity = '0';
    }, 2000);
}
