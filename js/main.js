"use strict";

const imgs = ['01.webp','02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
let itemsContent = '';

//Riempimento html
for (let i = 0 ; i < imgs.length; i++){
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML = slider.innerHTML + itemsContent;
document.querySelector('.item').classList.add('show');