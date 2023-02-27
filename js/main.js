"use strict";

const imgs = ['01.webp','02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
const tumbnail = document.querySelector('.tumbnail');
let itemsContent = '';
let tumbContent = '';

//Riempimento html
for (let i = 0 ; i < imgs.length; i++){
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
    tumbContent += `<div class="tumb-item"><img src="img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML = slider.innerHTML + itemsContent;
tumbnail.innerHTML = tumbnail.innerHTML + tumbContent;
//aggiunta classe ad item
document.querySelector('.item').classList.add('show');
document.querySelector('.tumb-item').classList.add('selected');

// Lista di elementi con classe item
const allClassItems = document.querySelectorAll('.item');
const allClassTumb = document.querySelectorAll('.tumb-item');

// Events
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let active = 0;
// tanto next
next.addEventListener('click', 
    function() {
        if(active < imgs.length - 1){
            allClassItems[active].classList.remove('show');
            allClassTumb[active].classList.remove('selected');
            active++;
            allClassItems[active].classList.add('show');
            allClassTumb[active].classList.add('selected');
        } else{
            allClassItems[active].classList.remove('show');
            allClassTumb[active].classList.remove('selected');
            active = 0;
            allClassItems[active].classList.add('show');
            allClassTumb[active].classList.add('selected');
        }
}
)
// tanto prev
prev.addEventListener('click', 
    function() {
        if(active > 0){
            allClassItems[active].classList.remove('show');
            allClassTumb[active].classList.remove('selected');
            active--;
            allClassItems[active].classList.add('show');
            allClassTumb[active].classList.add('selected');
        } else {
            allClassItems[active].classList.remove('show');
            allClassTumb[active].classList.remove('selected');
            active = (allClassItems.length - 1);
            allClassItems[active].classList.add('show');
            allClassTumb[active].classList.add('selected');
        }
}
)