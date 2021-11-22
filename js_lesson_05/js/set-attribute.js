var firstItem = document.getElementById('one'); // get first item
firstItem.className = 'complete'; // change its class attribute

var fouthItem = document.getElementsByTagName('li').item(3); // get fouth item
// Note: the following should say fouthItem (not el2)
fouthItem.setAttribute('class', 'cool'); // add an attribute for it