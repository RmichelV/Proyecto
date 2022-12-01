
document.addEventListener("DOMContentLoaded", function(event) {

    const ham = document.querySelector('.ham');

    const enlaces = document.querySelector('.enlaces-menu');
    
    function tog(){
        enlaces.classList.toggle('activado');
        barras.forEach(child =>{
            child.classList.toggle('animado')
        })
    }
    ham.addEventListener('click', tog);
    const barras = document.querySelectorAll('.ham span');

    window.addEventListener("scroll",function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky",this.window.scrollY>100)
    })

});