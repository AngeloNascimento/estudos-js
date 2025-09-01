let num1 //= parseFloat(prompt('digite o primeiro numero: '));
let num2 //= parseFloat(prompt('digite o segundo numero: '));
let result = num1 + num2;
let resultSub = num1 - num2;
let resultDiv = num1 / num2;
let restDiv = num1 % num2;
let resultMulti = num1 * num2;


function calcular(){
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    document.getElementById('resultado').innerText = result;

}

/*=== faz a comparação se são identicos*/

/*document.writeln(`Resultado soma: ${result}<br>`);
document.writeln(`Resultado subtração: ${resultSub}<br>`);
document.writeln(`Resultado divisão: ${resultDiv}<br>`);
document.writeln(`Resltado resto da dvivisão: ${restDiv}<br>`);
document.writeln(`Resultado multiplicação: ${resultMulti}<br>`);

for(i = 0; i < result; i++){
    document.writeln(`, ${i}`);
}*/



