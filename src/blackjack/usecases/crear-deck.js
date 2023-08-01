import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo:['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo:['A','J','Q','K']
 * @returns {Array} regresa un nuevo deck barajado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length===0) throw new Error('Palos de carta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length===0) throw new Error('Figuras y as es obligatorio como un arreglo de string');

    let deck = [];
    console.log(tiposDeCarta);
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}