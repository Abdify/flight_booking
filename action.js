
let form = document.querySelector('.booking-form');

document.onload = document.querySelector('#fClassInput').value = 0;

let subTotal = 0;
form.addEventListener('click', event => {
    let btn = event.target.id;
    if(btn === 'fClassIncreaseBtn'){
        subTotal += 150;
        changeQuantity('fClassInput', true);
    }
    else if(btn === 'fClassDecreaseBtn'){
        subTotal -= 150;
        changeQuantity('fClassInput', false);
    }
    else if(btn === 'eClassIncreaseBtn'){
        subTotal += 100;
        changeQuantity('eClassInput', true);
    }
    else if(btn === 'eClassDecreaseBtn'){
        subTotal -= 100;
        changeQuantity('eClassInput', false);
    }
    
    updateTotal(subTotal);
});

function changeQuantity(ticketType, willIncrease){
    let Input = document.getElementById(ticketType);
    let quantity = Number(Input.value);
    willIncrease ? quantity += 1 : quantity > 0 ? quantity-= 1: {};
    Input.value = quantity;
    return quantity;
}

function updateTotal(subTotal){
    document.querySelector('#subTotal').innerText = '$' + subTotal;
    document.querySelector('#tax').innerText = '$' + subTotal * 0.1;
    document.querySelector('#total').innerText = '$' + Number(subTotal + subTotal * 0.1);
}