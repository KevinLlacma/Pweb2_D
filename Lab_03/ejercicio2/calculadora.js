document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('.boton');
    const pilaOperaciones = document.getElementById('pila-operaciones');
    let operacionesPila = [];

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const valor = boton.textContent;

            if (valor === '=') {
                try {
                    const resultado = eval(pantalla.value);
                    operacionesPila.push(`${pantalla.value} = ${resultado}`);
                    pantalla.value = resultado;
                    actualizarPila();
                } catch (e) {
                    pantalla.value = 'Error';
                }
            } else if (valor === 'C') {
                pantalla.value = '';
            } else {
                pantalla.value += valor;
            }
        });
    });

    function actualizarPila() {
        pilaOperaciones.innerHTML = '<h3>Historial de Operaciones:</h3>';
        operacionesPila.forEach(operacion => {
            const operacionElement = document.createElement('div');
            operacionElement.textContent = operacion;
            pilaOperaciones.appendChild(operacionElement);
        });
    }
});
