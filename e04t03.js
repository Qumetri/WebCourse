const initializeApplicaiton = () => {
    document.getElementById('add').addEventListener('click', () => {
        const newMessage = document.getElementById('newmessage').value;
        if (newMessage && newMessage.length > 0) {
            const newParagraphNode = document.createElement('p');
            const newTextNode = document.createTextNode(newMessage);
            newParagraphNode.appendChild(newTextNode);
            const messageArea = document.getElementById('allmessages');
            messageArea.appendChild(newParagraphNode);
            document.getElementById('newmessage').value = '';
        }
    })

};

window.addEventListener('load', () => {
    initializeApplicaiton();
});