// funciones.js

export function crearFilaDesdeFormulario(nombre, email, horariosSeleccionados, comentario) {
    // Crear una nueva fila
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${Date.now()}</td> <!-- ID generado con la fecha actual -->
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${horariosSeleccionados.join(', ')}</td>
        <td>${comentario ? 'Sí' : 'No'}</td>
    `;
    return nuevaFila; // Retorna la nueva fila creada
}

// funciones.js

export function crearImagen(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img-fluid'; // Clase de Bootstrap para que la imagen sea responsiva
    img.alt = 'Imagen de la galería';
    return img;
}