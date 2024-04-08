function formatoNumero() {
    let input = document.getElementById('numeroInput');
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
        } else {
        }
        numeroFormateado = entero[i] + numeroFormateado;
        contador++;
    }

    // Asignar el valor formateado al input
    input.value = numeroFormateado + decimal;
}
