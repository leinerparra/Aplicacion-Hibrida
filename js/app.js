const añadir = document.getElementById('añadir');
const modal_container = document.getElementById('modal_container');
const Close = document.getElementById('Close');

open.addEventListener('click', () => {
    modal_container.classList.add('show')
    alert('prueba');

});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')

});