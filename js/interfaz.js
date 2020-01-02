class Interfaz {
    constructor(){
        this.onInit();
    }
    onInit(){
        this.construirSelect();
    }
    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(monedas=> {
            const arregloMonedas = monedas.monedas;
            const select = document.getElementById('criptomoneda');
            arregloMonedas.forEach(moneda=> {
               const option = document.createElement('option');
                option.value = moneda.id;
                option.appendChild(document.createTextNode(moneda.name));
                select.appendChild(option);
            });
        });
    }
    mostrarMensaje(mensaje,clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },3000)
    
    }

mostrarResultado(resultado,moneda) {
    
    const resultadoAnterior = document.querySelector('#resultado > div');
    if(resultadoAnterior) {
        resultadoAnterior.remove();
    }
    this.mostrarSpinner();
const etiquetaMoneda = `price_${moneda}`;
const valor = resultado[etiquetaMoneda];
const monedaUpper = moneda.toUpperCase();
const hora = new Date(resultado.last_updated * 1000);
let template = '';
template += `
<div class="card grey darken-3">
<div class="card-content white-text">
<span class="card-title">Cotizacion:</span>
<p> El precio de ${resultado.name} es de: </p>
<p> ${monedaUpper} /. ${valor} </p>
<hr/>
<p> Ranking de criptomonedas : ${resultado.rank}</p>
<p> Última Hora : ${resultado.percent_change_1h}</p>
<p> Último Día : ${resultado.percent_change_24h}</p>
<p> Última Semana : ${resultado.percent_change_7d}</p>
<p> Actualizacion : ${hora}</p>
</div>
</div>
`;
setTimeout(()=>{
    document.getElementById('resultado').innerHTML = template;
    document.querySelector('.spinner img').remove();
},2000)

}
    mostrarSpinner() {
    const spinnerGIF = document.createElement('img');
    spinnerGIF.src= 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spinnerGIF);
}
    }
