# Make an textbox and an "Add" button 
This is a simple web application that allows users to add content to a <p> tag using a textbox and an "Add" button.
The goal of the task was to create a web page with a textbox and an "Add" button. When the user enters text in the textbox and clicks the "Add" button, the entered text should be appended to a <p> tag. Multiple content entries should be added one below another within the <p> tag.

#HTML
The HTML code creates a simple webpage with a text input, a button, and a div to hold the paragraphs.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add-Button</title>

</head>
<body>
<div>
    <input type="text" id="text" placeholder="Enter text">
    <button id="addButton">Add</button>
    <div id="para"></div>
</div>
    <script src="index.js"></script>
</body>
</html>

#Javascript
The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked.

const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const contentparagraph = document.getElementById("content");

Button.addEventListener('click', () => {
        const newText = text.value;
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newText;
        paragraph.appendChild(newParagraph);
        text.value = '';
});
