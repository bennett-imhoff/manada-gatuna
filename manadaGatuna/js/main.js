let iconosCierre = document.querySelectorAll('.fa-times');

iconosCierre.forEach((icono)=>{
    icono.addEventListener('click', function(){
        let contenido = document.querySelector('.contenido');

        contenido.classList.remove('animate__animated');
        contenido.classList.remove('animate__fadeInDown');
        contenido.classList.add('animate__animated');
        contenido.classList.add('animate__fadeOutUp')

        setTimeout(function(){
            location.href="/";
        }, 600);
    });
});