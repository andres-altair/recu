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

// Ampliar imagen y ocultar las demás usando el atributo hidden
const imagenes = document.querySelectorAll('.img-fluid');
const btnRegresar = document.getElementById('btn-regresar');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        if (this.classList.contains('ampliada')) {
            this.classList.remove('ampliada');
            imagenes.forEach(img => img.hidden = false);
            btnRegresar.hidden = true;
        } else {
            this.classList.add('ampliada');
            imagenes.forEach(img => {
                if (img !== this) {
                    img.hidden = true;
                }
            });
            btnRegresar.hidden = false;
            const rect = this.getBoundingClientRect();
            btnRegresar.style.position = 'absolute';
            btnRegresar.style.top = `${window.scrollY + rect.bottom + 10}px`; // Posiciona debajo de la imagen
            btnRegresar.style.left = `${window.scrollX + rect.left}px`;
        }
    });
});

btnRegresar.addEventListener('click', () => {
    imagenes.forEach(img => {
        img.classList.remove('ampliada');
        img.hidden = false;
    });
    btnRegresar.hidden = true;
});
