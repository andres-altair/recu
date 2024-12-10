// funciones.js

export function crearFilaDesdeFormulario(nombre, email, horariosSeleccionados, comentario) {
    // Crear una nueva fila
    const nuevaFila = document.createElement('tr');

    // Crear celdas (td) y añadirlas a la fila
    const idCelda = document.createElement('td');
    idCelda.textContent = Date.now(); // ID generado con la fecha actual
    nuevaFila.appendChild(idCelda);

    const nombreCelda = document.createElement('td');
    nombreCelda.textContent = nombre;
    nuevaFila.appendChild(nombreCelda);

    const emailCelda = document.createElement('td');
    emailCelda.textContent = email;
    nuevaFila.appendChild(emailCelda);

    const horariosCelda = document.createElement('td');
    horariosCelda.textContent = horariosSeleccionados.join(', ');
    nuevaFila.appendChild(horariosCelda);

    const comentarioCelda = document.createElement('td');
    comentarioCelda.textContent = comentario ? 'Sí' : 'No';
    nuevaFila.appendChild(comentarioCelda);

    return nuevaFila; // Retorna la nueva fila creada
}

