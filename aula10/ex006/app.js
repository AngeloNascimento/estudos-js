var area = document.getElementById('area');
function clique(){
    area.innerText = 'clicou';
    area.style.background = 'red';/*fazendo alterações no estilo da pagina*/
}
function mouse(){
    area.innerText = 'entrou';
}
function mouseSai(){
    area.innerText = 'saiu';
    area.style.background = 'aquamarine'
}