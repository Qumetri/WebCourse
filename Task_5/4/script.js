document.getElementById('addMessageBtn').addEventListener('click', function () {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messagesContainer');

    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const newMessage = document.createElement('p');
        newMessage.textContent = messageText;

        // Add a class for styling
        newMessage.className = 'message-item';

        messagesContainer.appendChild(newMessage);

        messageInput.value = "";
    } else {
        alert("Please enter a message before adding.");
    }
});
