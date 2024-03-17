function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');

        if(buttonElement.innerHTML==='Subscribe'){
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add('is-subscribed');
        }
        else{
            buttonElement.innerHTML = 'Subscribe';
            buttonElement.classList.remove('is-subscribed');
        }
}

function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value); //this gives us a sring type value... to perform calculations we first need tp first convert it into number using Number function
    if(cost<40){                   
        cost += 10;
    }

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`
    

}

function handleCostKeyDown(event){
    if(event.key === 'Enter'){
        calculateTotal();
    }
}