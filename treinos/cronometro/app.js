function contar(){

}let houveClique = false;

// Adiciona um ouvinte para o botão
document.getElementById('meuBotao').addEventListener('click', function() {
  houveClique = true;
  alert("Botão clicado! O laço irá terminar."); // Opcional: mostra mensagem de que o laço vai terminar
});

while (!houveClique) {
  // O código dentro deste laço continuará a executar
  // enquanto houveClique for false (ou seja, não houve clique)
  console.log("Esperando o clique...");
  // Você pode adicionar um pequeno atraso ou outra lógica aqui
  // para evitar que o laço consuma 100% do processamento do navegador
}

console.log("Laço encerrado porque houve clique.");
