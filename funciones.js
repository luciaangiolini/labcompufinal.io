function obtener(){
    var nivel = document.getElementById("nivel").value;
    var num = document.getElementById("edad").value;
    var retorno;
    if(isNaN(num)){
        alert("Llenar el campo 'Edad' con números");
        return;
    }
    if(nivel=="secundario"){
        retorno = "¡CONSEJO! --> Preparate para un emocionante viaje de autodescubrimiento y crecimiento, mantené una mente abierta, aprovechá cada oportunidad y confiá en vos mismo/a para enfrentar los desafíos universitarios que se vienen.";
    }
    if(nivel=="universidad"){
        retorno = "¡CONSEJO! --> Equilibra el estudio con el cuidado de tu bienestar físico y emocional, busca apoyo en tu red de compañeros y profesores, y nunca dudes en explorar nuevas oportunidades de aprendizaje y crecimiento durante esta emocionante etapa universitaria";
    }
    if(nivel=="egresado"){
        retorno = "¡CONSEJO! --> Felicitaciones por tu logro como egresado, recuerda que el aprendizaje continúa más allá de la universidad; sigue cultivando tus habilidades, mantén la curiosidad y la pasión por tu campo, y aprovecha tus conocimientos para hacer una diferencia en el mundo que te rodea";
    }
    document.getElementById("retorno").innerHTML=retorno;
    
}
function borrar(){
    document.getElementById("nombre").value=" ";
    document.getElementById("apellido").value=" ";
    document.getElementById("edad").value=" ";
}

  function verificar(){
    var opcion1=document.getElementById("nunca").checked;
    var opcion2=document.getElementById("1").checked;
    var opcion3=document.getElementById("2").checked;
    var opcion4=document.getElementById("3").checked;
    var opcion5=document.getElementById("4").checked;
    if(opcion1){
        alert("Oh! :( Tal vez podrías buscar alguna actividad de tu agrado que pueda distraerte de tanto estudio, ya sea social o individual. ¡Nunca viene mal divertirse un rato!");
    }
    if(opcion2){
        alert("Que bueno que puedas distraerte alguna vez en el mes! Tu lo manejarás, pero un poco más de salidas recreativas no te vendría mal!");
    }
    if(opcion3){
        alert("Parece que has encontrado el equilibrio perfecto! Secretito... Esa es la clave del mejor rendimiento");
    }
    if(opcion4){
        alert("Tu parte recreativa parece estar bien activa, mantente así! No pierdas el ritmo académico, vas genial");
    }
    if(opcion5){
        alert("Tú sabes cómo llevar bien tu organización y tu vida académica. Si sientes que el tiempo para el estudio no es suficiente, puedes reducir las salidas mensuales y probar! Es cuestión de organización, suerte con ello!");
    }
  }

  function borrar1(){
    document.getElementById("nunca").checked=false;
    document.getElementById("1").checked=false;
    document.getElementById("2").checked=false;
    document.getElementById("3").checked=false;
    document.getElementById("4").checked=false;

}