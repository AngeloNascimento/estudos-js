var agora = new Date();
var hora = agora.getHours();//pega a hora atual

if(hora < 12 ){
    console.log(`São exatamente ${hora} horas, tenha uma bom dia!`);
}else if(hora  <= 18 ){
    console.log(`São exatamente ${hora} horas, tenha uma boa tarde!`);
}else{
    console.log(`São exatamente ${hora} horas, tenha uma boa noite!`);
}
