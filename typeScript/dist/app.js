"use strict";
const button = document.querySelector('button');
// a comment
function clickHandler(message) {
    console.log('Clicked!' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "Hi"));
}
