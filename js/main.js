"use strict";

const imgs = ['01.webp','02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
let itemsContent = '';

//Riempimento html
for (let i = 0 ; i < imgs.length; i++){
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML = slider.innerHTML + itemsContent;
//aggiunta classe ad item
document.querySelector('.item').classList.add('show');

// Events
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
// Lista di elementi con classe item
const allClassItems = document.querySelectorAll('.item');
console.log(allClassItems)