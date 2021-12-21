let ubicacion=window.pageYOffset
let $nav = document.querySelector('header')//seleccionamos el nav de index

window.addEventListener('scroll',function(){
    let ubicacionActual = window.pageYOffset
    console.log(ubicacionActual);

    if(ubicacion >= ubicacionActual){
        $nav.style.top='0px'
    }
        else{
            $nav.style.top='-80px'
        }

    ubicacion=ubicacionActual
})
