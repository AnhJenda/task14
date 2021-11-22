var firstItem = document.getElementById('one'); // find first list item
var showTextContent = firstItem.textContent; // get value of the textContent
var showInnerText = firstItem.innerText; // get value of the innerText

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';