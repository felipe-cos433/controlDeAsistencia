function controlDeAsistencia() {
    let cantidadParticipantes = parseInt(prompt("Ingrese la cantidad de participantes:"));
    let horaIngreso = prompt("Ingrese la hora de ingreso (formato 24 horas - HH:MM):");
    
    let totalAsistentes = 0;
    let totalTarde = 0;
    
    // Ciclo para registrar la asistencia de cada participante
    for (let i = 1; i <= cantidadParticipantes; i++) {
        // Ingresar datos del participante
        let nombre = prompt(`Ingrese el nombre del participante ${i}:`);
        let horaLlegada = prompt(`Ingrese la hora de llegada de ${nombre} (formato 24 horas - HH:MM):`);
        
        // Verificar si llegó tarde
        let esTarde = verificarTardanza(horaLlegada, horaIngreso);
        let puntaje = calcularPuntaje(esTarde);

        // Mostrar el estado del participante
        console.log(`${nombre} llegó a las ${horaLlegada} y tiene un puntaje de ${puntaje}%.`);
        
        // Contar total de asistentes y cuántos llegaron tarde
        totalAsistentes++;
        if (esTarde) {
            totalTarde++;
        }
    }
    
    // Mostrar resumen final
    mostrarResumen(totalAsistentes, totalTarde);
}

// Función para verificar si un participante llegó tarde
function verificarTardanza(horaLlegada, horaIngreso) {
    if (horaLlegada > horaIngreso) {
        return true;
    } else {
        return false;
    }
}

// Función para calcular el puntaje del participante
function calcularPuntaje(esTarde) {
    if (esTarde) {
        return 50; // Penalización del 50%
    } else {
        return 100; // Puntual, recibe el 100%
    }
}

// Función para mostrar el resumen de la asistencia
function mostrarResumen(totalAsistentes, totalTarde) {
    console.log("Resumen de la asistencia:");
    console.log("Total de asistentes: " + totalAsistentes);
    console.log("Participantes que llegaron tarde: " + totalTarde);
    console.log("Participantes puntuales: " + (totalAsistentes - totalTarde));
}

// Llamar a la función principal
controlDeAsistencia();
