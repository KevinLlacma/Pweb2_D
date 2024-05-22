document.addEventListener('DOMContentLoaded', function() {
    const tecladoContainer = document.getElementById('teclado-container');
    const inputDisplay = document.getElementById('input-display');
    const numeros = Array.from({ length: 10 }, (_, i) => i); // Crea un arreglo con números del 0 al 9

    // Función para barajar el arreglo de números
    function barajar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Función para crear el teclado numérico aleatorio
    function crearTeclado() {
        barajar(numeros);
        tecladoContainer.innerHTML = '';
        numeros.forEach(numero => {
            const tecla = document.createElement('div');
            tecla.className = 'tecla';
            tecla.textContent = numero;
            tecla.addEventListener('click', () => {
                inputDisplay.value += numero;
            });
            tecladoContainer.appendChild(tecla);
        });
    }

    // Inicializar el teclado
    crearTeclado();
});
