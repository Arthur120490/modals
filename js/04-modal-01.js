// Находим нужные элементы: кнопка модалки, модалка , кнопка закрытия

const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');
 
// Прослушиваем клик на кнопке открытия и октрываем модалку

button.addEventListener('click', function() {

modal.classList.remove('hidden');
})

// Прослушиваем клик на кнопке Закрытия, и Закрываем модалку 

buttonClose.addEventListener('click', function () {
    modal.classList.add('hidden');
        
});

modal.addEventListener('click', function () {
    modal.classList.add('hidden');
});

modal.querySelector('.modal-window').addEventListener('click', function(e){
console.log(e);
e.stopPropagation();
})





