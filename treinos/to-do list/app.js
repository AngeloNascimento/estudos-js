let tarefas = [];

function adicionaLista(){
    let entrada = document.getElementById('txtentrada').value.trim().trimEnd();//input de texto
    if(entrada !== ''){
        tarefas.push(entrada);
        listarTarefas();//adiciona os itens na tela
        limpaInput()
        console.log(tarefas);
    }else{
        alert('adicione uma tarefa!');
    }
}
function listarTarefas(){
    let tarefasListadas = document.getElementById('exibeLista');
    tarefasListadas.innerHTML = '';
    for(let i = 0; i < tarefas.length; i++){
        let itemListado = document.createElement('li');//cria o elemento li para ordenar os itens   
        
        
        const novoCheckbox = document.createElement('input');
        novoCheckbox.type = 'checkbox';//define o tipo como checkbox
        novoCheckbox.value = 'novo_item';//define o valor a ser enviado
        novoCheckbox.id = 'check_' + Date.now(); 
        
        //cria nova label para o checkbox
        const novaLabel = document.createElement('label');
        novaLabel.htmlFor = novoCheckbox.id;//associa a label ao checkbox
        novaLabel.textContent = ` - ${tarefas[i]}`;

        //Cria um elemento de lista (<li>) para conter o checkbox e a label
        itemListado.appendChild(novoCheckbox); // Adiciona o checkbox ao <li>
        itemListado.appendChild(novaLabel);    // Adiciona a label ao <li></li>

       // itemListado.textContent = tarefas[i];
        tarefasListadas.appendChild(itemListado);

        //evento ao clicar no checkbox
        novoCheckbox.addEventListener('change', function(){
            if(this.checked){//remove o item quando o checkbox for marcado
                tarefas.splice(i, 1);
                listarTarefas();
                               
            }
        })
    }
    
    
    
}
function limpaInput(){
    entrada = document.querySelector('input');
    entrada.value = ''; //modifica o valor do input para limpo
}
/*function checkBox(){
    //cria novo checkbox
    const novoCheckbox = document.createElement('input');
    novoCheckbox.type = 'checkbox';//define o tipo como checkbox
    novoCheckbox.value = 'novo_item';//define o valor a ser enviado
    novoCheckbox.id = 'check_' + Date.now();

    //cria nova label para o checkbox
    const novaLabel = document.createElement('label');
    novaLabel.htmlFor = novoCheckbox.id;//associa a label ao checkbox
    novaLabel.textContent = '';//

    //Cria um elemento de lista (<li>) para conter o checkbox e a label
    const novoItem = document.createElement('li');
    novoItem.appendChild(novoCheckbox); // Adiciona o checkbox ao <li>
    novoItem.appendChild(novaLabel);    // Adiciona a label ao <li></li>

    // Adiciona o novo <li> à lista <ul>
    lista.appendChild(novoItem);

    // Opcional: Adicionar um evento de clique ao novo checkbox
    novoCheckbox.addEventListener('click', function() {
        if (this.checked) {
            console.log(`Checkbox "${this.value}" marcado.`);
        } else {
            console.log(`Checkbox "${this.value}" desmarcado.`);
        }
    });
}

*/

//parou na parte de adicionar um checkbox ao item adicionado