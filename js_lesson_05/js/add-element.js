// Create a new element and store it to a variable
var newEl = document.createElement('li');

// Create a text node and store it to a variable
var newText = document.createTextNode('quinoa');

// attack  the new text node to the new element
newEl.appendChil(newText);

// find the position where the new element should be added
var position = document.getElementsByClassName('ul')[0];

// insert the new element into its position
position.appendChild(newEl);