let form = document.querySelector('.booking-form');

let fClassQuantity = 0;
let eClassQuantity = 0;
let subTotal = 0;

//Listen to quantity increase and decrease button click
//Using Event Delegation
form.addEventListener('click', event => {
    let btn = event.target.id;
    if(btn === 'fClassIncreaseBtn'){
        fClassQuantity = changeQuantity('fClassInput', true);
    }
    else if(btn === 'fClassDecreaseBtn'){
        fClassQuantity = changeQuantity('fClassInput', false);
    }
    else if(btn === 'eClassIncreaseBtn'){
        eClassQuantity = changeQuantity('eClassInput', true);
    }
    else if(btn === 'eClassDecreaseBtn'){
        eClassQuantity = changeQuantity('eClassInput', false);
    }
    //subtotal
    subTotal = fClassQuantity * 150 + eClassQuantity * 100;
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
    let total = document.querySelector('#total').innerText = '$' + Number(subTotal + subTotal * 0.1);
}


//Listen to Submit button click
let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    //No ticket? Animation
    let fClassInput = document.querySelector('#fClassInput');
    let eClassInput = document.querySelector('#eClassInput');
    if(subTotal < 100){
        return;
    }
    //Confirm
    confirmation();
});


//Confirmation modal
function confirmation() {
    let confirm = document.querySelector('#confirmation');
    confirm.style.top = '0px';
    confirm.style.opacity = '1';

    document.querySelector('.confirm_info').innerHTML = 'Are you sure to book <br> <b>' + fClassQuantity + ' First class Ticket(s)</b> and <b>' + eClassQuantity + ' Economy Ticket(s)</b> for <b>' + total.innerText + '</b>?';
    let closeBtn = document.querySelectorAll('.close');
    window.onclick = function(event) {
        if (event.target == confirm || 
            event.target == closeBtn[0] || 
            event.target == closeBtn[1] || 
            event.target == closeBtn[2]) {
                confirm.style.top = '';
                confirm.style.opacity = '';
        }
    }
}