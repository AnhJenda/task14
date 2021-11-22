var itemTwo = document.getElementById('two'); // get second list item
var elText = itemTwo.firstChild.nodeValue; // get its text contents
elText = elText.replace('pine nuts', 'kale'); // change the pine nuts to kale
itemTwo.firstChild.nodeValue = elText;// update the list item