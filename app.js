//// Formatear números ////

function formatoNumero() {
    let input = document.getElementById('numeroInput');
    let cursorPos = input.selectionStart; // Obtener la posición del cursor antes de modificar el valor
    let numero = input.value.replace(/[^0-9,.]/g, ''); // Eliminar cualquier carácter que no sea número, ".", o ","

    // Eliminar puntos para el formateo, manteniendo la coma si existe
    numero = numero.replace(/\./g, '');

    // Verificar si hay una coma como separador decimal
    let partes = numero.split(',');
    let entero = partes[0];
    let decimal = partes.length > 1 ? ',' + partes[1].slice(0, 2) : '';

    // Formatear el número entero
    let numeroFormateado = '';
    let contador = 0;
    for (let i = entero.length - 1; i >= 0; i--) {
        if (contador === 3) {
            numeroFormateado = '.' + numeroFormateado;
            contador = 0;
        }
        numeroFormateado = entero[i] + numeroFormateado;
        contador++;
    }

    // Asignar el valor formateado al input
    input.value = numeroFormateado + decimal;

    // Ajustar la posición del cursor si es necesario
    if (cursorPos !== input.value.length + 1) {
        input.setSelectionRange(input.value.length + 1, input.value.length + 1);
    }
}


//// Cursor dentro del input siempre al final ////

let input = document.getElementById('numeroInput');
let cursorPosition = input.selectionStart;

input.addEventListener('click', function () {
    // Posicionar el cursor al final del input
    input.setSelectionRange(input.value.length + 1, input.value.length + 1);
});

input.addEventListener('keydown', function () {
    // Almacenar la posición actual del cursor antes de que se mueva
    cursorPosition = input.selectionStart;
});

input.addEventListener('keyup', function () {
    // Obtener la posición actual del cursor después de que se mueva
    let currentCursorPosition = input.selectionStart;

    // Verificar si la posición del cursor es distinta
    if (currentCursorPosition !== cursorPosition) {
        // Si la posición del cursor cambió, posicionar el cursor al final del input
        input.setSelectionRange(input.value.length + 1, input.value.length + 1);

        // Actualizar la última posición del cursor
        cursorPosition = input.selectionStart;
    }
});
