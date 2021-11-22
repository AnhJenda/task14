var hotItems = document.querySelectorAll('li.hot'); // Store the Node list in array
if(hotItems.length > 0){ // if it contains items
    for (var i = 0; i < hotItems.length; i++){
        hotItems[i] = 'cool';
    }
}