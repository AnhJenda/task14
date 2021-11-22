// select the starting point and finds its sibling
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// change the values of the sibling's class attribute
prevItem = 'complete';
nextItem = 'cool';