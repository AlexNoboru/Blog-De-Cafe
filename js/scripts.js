//querySelector
const heading = document.querySelector('.header__texto h2'); // Retorna  0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll
const enlace = document.querySelectorAll('.navegacion a'); // Retorna 0 o varios Elementos
enlace[0].textContent = 'Nuevo Texto para Enlace';
enlace[0].classList.add('nuevas-clase');
enlace[0].classList.remove('navegacion__enlace');

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevo_enlace = document.createElement('A');

// Agregar el href
nuevo_enlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevo_enlace.textContent = 'Un Nuevo Enlace';

// Agregar la clase
nuevo_enlace.classList.add('navegacion__enlace');

// Agregar al documento con appendChild
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevo_enlace);

console.log(nuevo_enlace);

// Eventos

console.log(1);


window.addEventListener('load',function () { // load espera a que el Js y los archivos que dependen
// del HTML estén listos
    console.log(2);
})

document.addEventListener('DOMContentLoaded', function () { // Solo espera por el HTML, pero no espera
// CSS o imagemes
    console.log(4);
})

console.log(5);

window.onscroll = function(evento){
    console.log(evento);
}

// Seleccionar elementos y asociar a eventos
// const btn_enviar = document.querySelector('.boton--primario');
// btn_enviar.addEventListener('click',function (evento) {
//     console.log(evento);
//     evento.preventDefault();

//     //Validar un formulario


//     console.log('enviando formulario');
// });

// El Evento de Submit


// Eventos de los inputs y Textarea
const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leer_texto);
email.addEventListener('input',leer_texto);
mensaje.addEventListener('input',leer_texto);
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validar el formulario

    const {nombre, email, mensaje} = datos; // Destruction
    if (nombre === '' || email === '' || mensaje === '') {
        mostrar_alerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecución del codigo
    }

    //Enviar el formulario
    mostrar_alerta('El mensaje se envio correctamente');

})

function leer_texto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}


function mostrar_alerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparezcan despues de 5 seg.
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
