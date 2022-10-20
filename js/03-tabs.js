// Нашли все заголовки ТАбов по data АТРИБУТУ
const tabHeaders = document.querySelectorAll('[data-tab]');
// нашли все контент боксы
const contentBoxes= document.querySelectorAll('[data-tab-content]');

//console.log(tabHeaders);

tabHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
       
        console.log('this.dataset.tab');

      // const contentBox = document.querySelector('#' + this.dataset.tab);
   // console.log(contentBox);

// 1. скрыть все content box 

contentBoxes.forEach(function (item) {
item.classList.add('hidden');
})

// 2. Выбрать нужный content box и показать его

const contentBox = document.querySelector('#' + this.dataset.tab);
contentBox.classList.remove('hidden');

    })
})
    

