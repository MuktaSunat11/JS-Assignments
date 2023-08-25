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