var element = document.getElementsByClassName('hot');

if(element.length > 2){ // if 3 or more are found
    var el = element[2]; // Select the third one from the Nodelist
    el.className = 'cool'; // Change the value of its class attribute
}