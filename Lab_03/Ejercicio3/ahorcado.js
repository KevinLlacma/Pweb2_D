document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const hiddenWordElement = document.getElementById('hidden-word');
    const letterButtonsElement = document.getElementById('letter-buttons');

    const palabras = ['PAUCARPATA', 'SABANDIA', 'CHARACATO', 'HUNTER', 'CAYMA', 'MIRAFLORES', 'SOCABAYA', 'UCHUMAYO'];
    let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    let palabraOculta = Array(palabraSeleccionada.length).fill('_');
    let intentos = 0;
    const maxIntentos = 6;

    function dibujarAhorcado(intentos) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;

        // Base
        if (intentos > 0) {
            ctx.beginPath();
            ctx.moveTo(10, 190);
            ctx.lineTo(190, 190);
            ctx.stroke();
        }
        // Poste vertical
        if (intentos > 1) {
            ctx.beginPath();
            ctx.moveTo(50, 190);
            ctx.lineTo(50, 10);
            ctx.stroke();
        }
        // Poste horizontal
        if (intentos > 2) {
            ctx.beginPath();
            ctx.moveTo(50, 10);
            ctx.lineTo(150, 10);
            ctx.stroke();
        }
        // Cuerda
        if (intentos > 3) {
            ctx.beginPath();
            ctx.moveTo(150, 10);
            ctx.lineTo(150, 30);
            ctx.stroke();
        }
        // Cabeza
        if (intentos > 4) {
            ctx.beginPath();
            ctx.arc(150, 50, 20, 0, Math.PI * 2);
            ctx.stroke();
        }
        // Cuerpo
        if (intentos > 5) {
            ctx.beginPath();
            ctx.moveTo(150, 70);
            ctx.lineTo(150, 130);
            ctx.stroke();
        }
        // Brazos y piernas
        if (intentos > 6) {
            ctx.beginPath();
            ctx.moveTo(150, 90);
            ctx.lineTo(130, 110);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 90);
            ctx.lineTo(170, 110);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 130);
            ctx.lineTo(130, 170);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 130);
            ctx.lineTo(170, 170);
            ctx.stroke();
        }
    }

    function actualizarPalabraOculta() {
        hiddenWordElement.textContent = palabraOculta.join(' ');
    }

    function crearBotonesLetras() {
        for (let i = 65; i <= 90; i++) {
            const letra = String.fromCharCode(i);
            const boton = document.createElement('button');
            boton.textContent = letra;
            boton.addEventListener('click', () => manejarAdivinanza(letra));
            letterButtonsElement.appendChild(boton);
        }
    }

    function manejarAdivinanza(letra) {
        let acierto = false;
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            if (palabraSeleccionada[i] === letra) {
                palabraOculta[i] = letra;
                acierto = true;
            }
        }

        if (!acierto) {
            intentos++;
            dibujarAhorcado(intentos);
        }

        actualizarPalabraOculta();
        verificarJuegoTerminado();
    }

    function verificarJuegoTerminado() {
        if (palabraOculta.join('') === palabraSeleccionada) {
            alert('¡Felicidades! Has adivinado la palabra.');
        } else if (intentos >= maxIntentos) {
            alert('Has perdido. La palabra era: ' + palabraSeleccionada);
        }
    }

    actualizarPalabraOculta();
    crearBotonesLetras();
});
