function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelectortById('div#res');
    if(fano.value.length == 0 || fano.value > ano){
       window.alert('verifique os dados e tente novamente!');
    }else{
        let fsex = document.getElementsByName('radsex')[1]//parou aqui minuto 12 do video
    }
}