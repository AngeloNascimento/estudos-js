/*DOM = Document Object Model*/
/*Arvore DOM:
    window -> location
              document -> html -> head
                                  body  
              history
*/
/*
    pode ser selecionado por: 
    Marca(tag) -> getElementByTagName()
    ID
    Nome
    Classe
    Seletor
*/
let p1 = document.getElementsByTagName('p')[0];//seleciona a primeira tag p;
let p2 = document.getElementById('msg');//pegando valores atraves do ID;
let p3 = document.getElementsByName('msg');//pega os valores pelo nome;
let p4 = document.getElementsByClassName('msg');//pega os valores pelo nome da classe;
let p5 = document.querySelector('div#msg');//pega os valores atraves da sintaxe do css


document.writeln('o resultado ' + p2.innerText);/*innerHTML pega toda a informação do paragrafo */