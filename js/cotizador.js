class Cotizador {
// obtiene todo el JSON con las criptomonedas
    async obtenerMonedasAPI () {
// fetch a la api
const urlObtenerMonedas = await fetch
    ('https://api.coinmarketcap.com/v1/ticker/').catch(error=>console.log('no se ha podido establecer conexion con el servicio'))
// Respuesta en json de las monedas
const monedas = await urlObtenerMonedas.json();
return { monedas}
}
async obtenerValores(moneda,cripto) {
const urlObtenerValores = await fetch
    (`https://api.coinmarketcap.com/v1/ticker/${cripto}/?convert=${moneda}`);
    const resultado = await urlObtenerValores.json();
    return {resultado}
}
}