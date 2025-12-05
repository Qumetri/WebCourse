const messageInput = document.getElementById('messageInput');
const addMessageBtn = document.getElementById('addMessageBtn');
const clearMessagesBtn = document.getElementById('clearMessagesBtn');
const messagesContainer = document.getElementById('messagesContainer');

// Function to check input and toggle button state
function checkInput() {
    if (messageInput.value.trim() !== "") {
        addMessageBtn.disabled = false;
    } else {
        addMessageBtn.disabled = true;
    }
}

// Listen for input events to enable/disable the button
messageInput.addEventListener('input', checkInput);

// Add message functionality
addMessageBtn.addEventListener('click', function () {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const newMessage = document.createElement('p');
        newMessage.textContent = messageText;
        newMessage.className = 'message-item';
        messagesContainer.appendChild(newMessage);

        // Clear input and disable button
        messageInput.value = "";
        addMessageBtn.disabled = true;
    }
});

// Clear messages functionality
clearMessagesBtn.addEventListener('click', function () {
    // Check if there are messages to clear
    if (messagesContainer.children.length === 0) {
        alert("No messages to clear.");
        return;
    }

    const confirmClear = confirm("Are you sure you want to clear all messages?");
    if (confirmClear) {
        messagesContainer.innerHTML = "";
    }
});
