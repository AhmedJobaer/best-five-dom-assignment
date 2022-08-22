
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
        const playerList = document.getElementById('player-list');
        playerList.innerText = count;
    }
    else {
        alert("You already added 5 player. Can not added more than 5 player!")
    }
}

function getInputValueById(elementId) {
    const inputElement = document.getElementById(elementId);
    const inputElementString = inputElement.value;
    const inputValue = parseFloat(inputElementString);
    return inputValue;
}

function getElementInputById(elementId) {
    const elementInput = document.getElementById(elementId);
    const elementInputString = elementInput.innerText;
    const elementValue = parseFloat(elementInputString);
    return elementValue;
}

document.getElementById('players-cost-btn').addEventListener('click', function () {
    const perPlayeCost = getInputValueById('per-player-cost');
    console.log(perPlayeCost);
    const playerTotal = getElementInputById('player-list')
    const totalPlayerCost = perPlayeCost * playerTotal;

    const playerExpences = document.getElementById('playerExpences');
    playerExpences.innerText = totalPlayerCost;

    console.log(totalPlayerCost);
})

document.getElementById('total-expences-btn').addEventListener('click', function () {
    const managerExpences = getInputValueById('manager-expences')
    const coachExpences = getInputValueById('coach-expences')
    const playersExpences = getElementInputById('playerExpences')
    const totalExpences = managerExpences + coachExpences + playersExpences;

    const totalCost = document.getElementById('total-expences');
    totalCost.innerText = totalExpences;


    console.log(totalExpences);
})
