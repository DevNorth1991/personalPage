/* creamos las variables a usar */

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;
//capturamos el evento click 


btnMenu.addEventListener('click', () => { //uso de arrows function caracteristic de ecmascript 6

    /* alert("funciona"); */



    /*reeeplazaremos una clase de bootstrap directamente desde nuestro js */



    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    /* creamos un condicional */

    if (activador) {

        menu.style.display = "flex";
        menu.style.top = "2em";
        activador = false;


    } else {
        menu.style.display = "none";
        activador = true;
    }

})












/*lo que haremos sera agregarle la clase activo a cada uno de los items del menu */



let enlaces = document.querySelectorAll('.list li a');

/*utilizaremos un bucle for each que es el mas adecuado para recorrer arreglos*/
//sumado a unas arrow function
enlaces.forEach((Element) => {

    Element.addEventListener('click', (event) => {


        enlaces.forEach((link) => {

            //remuevo la clase
            link.classList.remove('activo');

        });
        //fijamos la clase 
        event.target.classList.add('activo');

    })
})



//efecto scroll en nuestros elementos 
//con el fin de mostrar y ocultar el menu 
//pageYOffset devuelve el valor en pixeles del scroll
let scrollPos = window.pageYOffset;

window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;


    if (scrollPos > currentScrollPos) {


        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    } else {

        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";

    }

    scrollPos = currentScrollPos;
}