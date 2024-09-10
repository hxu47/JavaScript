/*
The h1 should start with the text "Enter Your Username".
Whenever an input event is fired on the <input> element, update the <h1> so that it displays "Welcome, " plus the current value from the text input.
If the <input> goes back to being empty, update the <h1> so that it once again says "Enter Your Username".
*/
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e){
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    }
    else {
        h1.innerText = 'Welcome, ' + input.value; 
    }

})