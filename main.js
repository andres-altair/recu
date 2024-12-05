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