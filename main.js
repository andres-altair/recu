// main.js

import { crearFilaDesdeFormulario } from './funciones.js';

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const horariosSeleccionados = [];
    
    // Obtener los horarios seleccionados
    if (document.getElementById('horarioMañana').checked) {
        horariosSeleccionados.push('Mañana');
    }
    if (document.getElementById('horarioTarde').checked) {
        horariosSeleccionados.push('Tarde');
    }
    
    const comentario = document.getElementById('comentario').checked;

    // Crear la nueva fila usando la función de funciones.js
    const nuevaFila = crearFilaDesdeFormulario(nombre, email, horariosSeleccionados, comentario);

    // Agregar la nueva fila a la tabla
    const tablaBody = document.querySelector('#tabla tbody');
    tablaBody.appendChild(nuevaFila);

    // Limpiar el formulario
    this.reset();
});













import { crearImagen } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    mostrarMensaje('¡Hola! Bienvenido a mi proyecto.');

    // Array de imágenes (asegúrate de que los nombres coincidan con los archivos en la carpeta)
    const imagenes = [
        'imagenes/monitor.jsp',
        'imagenes/pc.jsp',
        'imagenes/raton.jpg',
        'imagenes/teclado.jpg'
        // Agrega más imágenes según sea necesario
    ];

    const galeria = document.getElementById('galeria');

    // Crear elementos de imagen y agregarlos a la galería
    imagenes.forEach(imagen => {
        const col = document.createElement('div');
        col.className = 'col-4 mb-3'; // Cambia el tamaño de la columna según sea necesario

        const img = crearImagen(imagen); // Llama a la función para crear la imagen
        col.appendChild(img);
        galeria.appendChild(col);
    });
});


