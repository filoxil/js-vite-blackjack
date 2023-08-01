/**
 * 
 * @param {<String>} carta 
 * @returns {<Integer>} Devuelve el valor de la carta en número
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}