/*
-CRIAAR VARIAAVEL PARA PEGAR A HORA DO DIA
-CRIAR FUNÇÃO PARA QUE AO MUDAR O HORARIO DO DIA MUDAR A IMAGEM E O TEMA
-EXIBIR A HORA EM TEMPO REAL DE ACORDO COM O SISTEMA
-
*/
let horaAtual = new Date();
let hora = horaAtual.getHours();
let imagem = document.getElementById('img');
let mensagem = document.getElementById('msg');
let fundo = document.getElementById('principal')


if (hora < 12){
    mensagem.innerText = `São extamente ${hora} horas`;
    fundo.style.background = 'aqua';
}else if(hora <= 18){
    mensagem.innerText = `São extamente ${hora} horas`;
    fundo.style.background = '#d84d78';
    imagem.src = 'img/tarde.jpeg';
    
}else{
    mensagem.innerText = `São extamente ${hora} horas`;
    fundo.style.background = '#515151';
    imagem.src = 'img/noite.jpeg';
}


