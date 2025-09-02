/*
-CRIAAR VARIAAVEL PARA PEGAR A HORA DO DIA
-CRIAR FUNÇÃO PARA QUE AO MUDAR O HORARIO DO DIA MUDAR A IMAGEM E O TEMA
-EXIBIR A HORA EM TEMPO REAL DE ACORDO COM O SISTEMA
-
*/
function carregar(){
    let horaAtual = new Date();
    let hora = horaAtual.getHours();
    let imagem = document.getElementById('img');
    let mensagem = document.getElementById('msg');
    let fundo = document.getElementById('principal')
    mensagem.innerText = `São extamente ${hora} horas`;

    if (hora < 12){        
        fundo.style.background = 'aqua';
        
    }else if(hora <= 18){        
        fundo.style.background = '#d84d78';
        imagem.src = 'img/tarde.jpeg';
        
    }else{
        fundo.style.background = '#515151';
        imagem.src = 'img/noite.jpeg';
    }

}



