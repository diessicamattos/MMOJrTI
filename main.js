
let trilho = document.getElementById('trilho')
let main = document.querySelector('main')
let header = document.querySelector('header')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    main.classList.toggle('dark')
    header.classList.toggle('dark')

    
});





