var velocidade;

function calcular(){
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtv.value);

    res.innerHTML = `sua velocidade atual é de ${vel} km/h`;

    if(vel > 60){
        res.innerHTML += '<p> multado</p>';
    }else{
        res.innerHTML += 'dentro do limite'
    }
    res.innerHTML += '<p>dirija sempre com cuidado</p>';

    txtv.value = '';
}