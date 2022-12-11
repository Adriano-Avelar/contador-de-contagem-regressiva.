const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
 const lancamento = "12 Dec 2022"
 function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60)% 24;
    const finalMinutos = Math.floor(segTotal / 60 )% 60;
    const finalSegundos = Math.floor(segTotal)% 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatotempo(finalHoras)
    minuto.innerHTML = formatotempo(finalMinutos)
    segundo.innerHTML = formatotempo(finalSegundos)


 }
 
 function formatotempo(tempo){
   return tempo < 10? `0${tempo}`:tempo;
 }
  
 countDown();
 setInterval(countDown,1000)