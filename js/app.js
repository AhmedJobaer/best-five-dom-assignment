


let count = 0;
function addToCart(element) {

    if (count < 5) {
        const playerName = element.parentNode.children[0].innerText;
        count++;
        const cart = document.getElementById('cart-list');
        const list = document.createElement('li');
        list.innerText = count + '. ' + playerName;
        list.style.marginBottom = '10px';
        cart.appendChild(list);
    }
    else {
        alert("You can not added more than 5 player!")
    }

    return count;

}

