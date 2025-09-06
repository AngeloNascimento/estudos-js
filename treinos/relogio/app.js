

setInterval(function relogio(){//setInterval faz a função ser executada a cada intervalo de tempo
    
        const horaAtual = new Date();
        const hora = String(horaAtual.getHours()).padStart(2, '00');
        const minutos = String(horaAtual.getMinutes()).padStart(2, '00');
        const segundos = String(horaAtual.getSeconds()).padStart(2, '00');
        var exibeHora = document.getElementById('exibHora');
        var principal = document.getElementById('principal');
        var imagem = document.getElementById('img');


        if(hora < 12){//muda a cor do background de acordo com a hora do dia
                principal.style.background = '#65c7d7';
                
        }else if(hora < 19){
                principal.style.background = '#c88374';
                imagem.src = 'img/tarde.jpg';
        }else if(hora < 23){
                principal.style.background = '#7390c9';
                imagem.src = 'img/noite.jpg';
        }        
             
        console.log(exibeHora);
        exibeHora.innerHTML = `${hora}:${minutos}:${segundos}`;          
}, 1000);

function data(){
        const dataAtual = new Date();
        const dia =String(dataAtual.getDate()).padStart(2, '0');
        const mes =String(dataAtual.getMonth()+1).padStart(2, '0');
        const ano = dataAtual.getFullYear();
        var exibeData = document.getElementById('exibData');
        exibeData.innerHTML = `${dia}/${mes}/${ano}`;          
        console.log(`${ano}`);        
}

//forma mais adequada para carregar as funções ao carregar a pagina 
document.addEventListener("DOMContentLoaded", function(){
        data();
        relogio();
})
 
