// Seleccionamos los elementos que vamos a necesitar
const boton = document.querySelector('.boton');

// Esta es la función que el botón llama al hacer click
function cambiarTema() {
    document.body.classList.toggle('dark');


// Cambiamos el texto del botón según el tema actual
const esModoOscuro = document.body.classList.contains('dark');

if (esModoOscuro) {
    boton.textContent = '☀️ Modo claro';

} else {
    boton.textContent = '🌙 Modo oscuro';
}

}
