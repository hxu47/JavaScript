const form = document.querySelector("#form");
const list = document.querySelector('#list');
const productInput = document.querySelector('#product');
const qtyInput = document.querySelector('#qty');

form.addEventListener('submit', function(e){
    // When the form is submitted, prevent the default behavior
    e.preventDefault();
    
    // grab the quantity input value and the product input value
    const product = productInput.value;
    const qty = qtyInput.value;
    
    // Create a new <li> element.  
    const newLI = document.createElement("LI"); 

    // Set the text on the new <li> to include the quantity and product name from the form.
    newLI.innerText = `${qty} ${product}`;
    
    // Append the new <li> to the <ul> on the page
    list.append(newLI);
    
    // Reset the inputs
    productInput.value = '';
    qtyInput.value = '';
})

