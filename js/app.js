
const cotizador = new Cotizador();
const ui = new Interfaz();
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
   const monedaSelect = document.getElementById('moneda');
   const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
   const criptoSelect = document.getElementById('criptomoneda');
   const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value;
   if(!monedaSeleccionada || !criptoSeleccionada){
      ui.mostrarMensaje('Ambos campos son obligatorios','deep-orange darken-4 card-panel');
   }else {
     cotizador.obtenerValores(monedaSeleccionada,criptoSeleccionada)
     .then(data=>{
         ui.mostrarResultado(data.resultado[0], monedaSeleccionada.toLowerCase());
       
     })}
})
