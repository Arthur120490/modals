const button = document.querySelector('#button');
const content = document.querySelector('#content');



button.addEventListener('click', function () {
    console.log('Click!!!');
   // content.classList.toggle('content-hidden'); 
    
    if (content.classList.toggle('content-hidden')) {
button.textContent = "Открыть блок";

    } else {
        button.textContent = "Закрыть блок";
    }



});

