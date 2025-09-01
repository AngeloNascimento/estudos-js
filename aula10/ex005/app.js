function somar(){
    var txt1 = document.getElementById('num1');//pega o valor do input
    var txt2 = document.getElementById('num2');
    var resultado = document.getElementById('resultado')
    var num1 = Number(txt1.value);//pega o valor vindo do txt e converte para number;
    var num2 = Number(txt2.value);
    var result = num1 + num2;
    resultado.innerHTML = result





}