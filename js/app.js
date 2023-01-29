'use strict';

const increaseButton = document.querySelector('#increase-button');
const decreaseButton = document.querySelector('#decrease-button');
const resetButton =  document.querySelector('#reset-button');
const value =  document.querySelector('#counter-value');


const increase = () => {
    
    value.textContent = Number(value.textContent) + 1;
    if(value.textContent > 0) {
        value.style.color = '#23B123';   
    }else if(Number(value.textContent) === 0) {
        value.style.color = 'white';   
    }
    
};

const decrease = () => {
    
    value.textContent = Number(value.textContent) - 1;
    if(value.textContent < 0) {
        value.style.color = 'red';   
    } else if(Number(value.textContent) === 0) {
        value.style.color = 'white';   
    }
   
      
};
const reset = () => {
    value.textContent = 0;
    value.style.color = '#fff';
};




increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click',reset);