var element = document.getElementsByTagName('li'); // find <li> element

if(element.length > 0) { // if 1 or more are found
    var el = element[0];// Select the first one using array syntax
    el.className = 'cool';// Change the value of its class attribute
}