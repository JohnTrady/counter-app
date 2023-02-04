'use strict';

let count = 0;
const value =  document.querySelector('#counter-value');
const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        const classBtn = e.currentTarget.classList;
      if(classBtn.contains('increase-button')) {
        count++;
      } else if (classBtn.contains('decrease-button')) {
         count--;
      } else {
         count = 0;
      }
      if(count > 0) {
         value.style.color = '#23B123';
      } else  if (count < 0) {
        value.style.color = 'red';
      }  else {
        value.style.color = '#FFFFFF';
      }
      value.textContent = count;
    });
});