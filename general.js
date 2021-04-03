//Variable

//Menú
const menu = document.querySelector('#movil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnMenu');

//Galeria
const imagenes = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('#exit');
const boxImage = document.querySelector('#boxImage');
const imagenLightbox = document.querySelector('#imagenLightbox');
const nombreImagen = document.querySelector('#nombre');

//Eventos

//Menú
btnMenu.addEventListener('click', mostrarMenu);
btnSalir.addEventListener('click', ocultarMenu); 

//Galeria
imagenes.forEach( imagen =>{
    imagen.addEventListener('click', seleccionarImagen);
})

btnExit.addEventListener('click', ocultarLightbox);
document.addEventListener('keydown', filtrarTecla);
document.addEventListener('click', filtrarElemento);

//Funciones

//Menú
function mostrarMenu(){
    menu.style.left = '0';
    degradado.style.display = 'block'; 
}

function ocultarMenu(){
    menu.style.left = '-80%'

}

//Galeria
function seleccionarImagen(e){
    const imagen = e.target.children[0];
    const src = imagen.getAttribute('src');
    const nombre = imagen.getAttribute('nombre');
    mostrarLightbox(src, nombre);
}

function filtrarTecla(e){
    e.keyCode === 27 && ocultarLightbox();
}

function filtrarElemento(e){
    e.target.id === 'lightbox' && ocultarLightbox();
}

function mostrarLightbox (src, nombre){
    lightbox.style.display = 'flex';
    setTimeout(()=>{
        lightbox.style.opacity = '1';
    }, 10);

    setTimeout(()=>{
        boxImage.style.opacity = '1';
    },250);

    imagenLightbox.setAttribute('src', src);
    nombreImagen.textContent = `${nombre};`
}

function ocultarLightbox(){
    boxImage.style.opacity = '0';
    setTimeout(()=>{
        lightbox.style.opacity = '0';
    }, 250);

    setTimeout(()=>{
        lightbox.style.display = 'none';
    }, 500);
}