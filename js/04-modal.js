// Находим нужные элементы: кнопка модалки, модалка , кнопка закрытия

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх" по цепочке его родителейц
        modal.querySelector('[.modal-window').addEventListener('click', function (e) {
            e.stopPropagation();

        });
    })
    
})
// Кнопки - Закрыть Модалку

modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
const modal = this.closest('[data-modal]');
modal.classList.add('hidden');

    })
})


//закрытие Модалок по фейду

allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');

    });
});

//const modal = document.querySelector('[data-modal]');
//const buttonClose = document.querySelector('[data-modal-close]');
 
// Прослушиваем клик на кнопке открытия и октрываем модалку

//button.addEventListener('click', function() {

//modal.classList.remove('hidden');
//})

// Прослушиваем клик на кнопке Закрытия, и Закрываем модалку 

//buttonClose.addEventListener('click', function () {
    //modal.classList.add('hidden');
        
//});

//modal.addEventListener('click', function () {
    //modal.classList.add('hidden');
//});

//modal.querySelector('.modal-window').addEventListener('click', function(e){
//console.log(e);
//e.stopPropagation();
//})


