document.getElementById('openWindowBtn').addEventListener('click', function () {

    const windowFeatures = "width=600,height=400,left=200,top=200,resizable=yes,scrollbars=yes";

    const newWindow = window.open("", "_blank", windowFeatures);

    if (newWindow) {
        newWindow.document.write(`
            <html>
                <head>
                    <title>New Window</title>
                    <style>
                        body { font-family: sans-serif; padding: 20px; text-align: center; }
                        button { padding: 10px 20px; cursor: pointer; }
                    </style>
                </head>
                <body>
                    <h2>Hello! I am a new window.</h2>
                    <p>I was opened with specific dimensions and position.</p>
                    <button onclick="window.close()">Close Me</button>
                </body>
            </html>
        `);
    } else {
        alert("Pop-up blocked! Please allow pop-ups for this site.");
    }
});
