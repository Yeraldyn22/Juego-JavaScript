//JUEGO PIEDRA PAPEL Y TIJERA EN JAVASCRIPT


let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function jugadaAleatoria() {
    let opciones = [piedra, papel, tijera];
    let numeroAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[numeroAleatorio];
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "empate";
    } else if (
        (jugador === piedra && computadora === tijera) ||
        (jugador === papel && computadora === piedra) ||
        (jugador === tijera && computadora === papel)
    ) {
        return "¡Ganaste el juego! 🎉";
    } else {
        return "Perdiste perdiste el juego😢";
    }
}

function jugar() {
    let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

    if (![piedra, papel, tijera].includes(jugador)) {
        alert("Opción no válida. Intenta de nuevo.");
        return jugar(); // Vuelve a ejecutar la función si la entrada no es válida
    }

    let computadora = jugadaAleatoria();
    alert(`Tú elegiste: ${jugador}`);
    alert(`La computadora eligió: ${computadora}`);

    let resultado = determinarGanador(jugador, computadora);

    if (resultado === "empate") {
        alert("¡Empate! Vamos a jugar de nuevo.");
        return jugar(); // Si hay empate, se repite el juego.
    }

    alert(resultado);
}

jugar();

