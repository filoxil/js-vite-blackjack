import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos
 * @param {HTMLelement} puntosHTML  
 * @param {Array<String>} deck 
 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML ,deck =[]) => {

    if (!puntosMinimos) throw new Error ('Puntos mínimos son necesarios');
    if (!deck) throw new Error ('la baraja es necesaria');
    if (!puntosHTML) throw new Error ('la baraja es necesaria');

    let puntosComputadora = 0;
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}