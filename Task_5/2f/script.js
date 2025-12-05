// 1. Create the <a> element
const link = document.createElement('a');

// 2. Set the attributes
link.href = "https://www.google.com";
link.textContent = "Go to Google";
link.target = "_blank"; // Open in new tab
link.title = "Visit Google Search";

// 3. Append the element to the DOM
const container = document.getElementById('linkContainer');
container.appendChild(link);

// Optional: Log to console
console.log("Link created:", link);
