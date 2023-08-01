/**
 * Esto me permite pedir carta como jugador
 * @param {Array<String>} deck es una arreglo de String
 * @returns {String} dos letras con las que se identifica la carta
 */
export const pedirCarta = ( deck)  => {

    if (!deck || deck.length === 0 ) {
        throw new Error( 'No hay cartas en el deck' );
    }
    const carta = deck.pop();
    return carta;
}