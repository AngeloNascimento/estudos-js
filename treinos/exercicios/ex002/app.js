function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
       window.alert('verifique os dados e tente novamente!');
    }else{
        let fsex = document.getElementsByName('radsex')//parou aqui minuto 12 do video
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');//cria uma nova tag atraves do js
        img.setAttribute('id', 'foto');//define os atributos da nova tag


        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 18 ){
                img.src = 'img/criancamenino.jpg';
            }else if(idade < 25){
                img.src = 'img/homemjovem.jpg';            
            }else if(idade > 60){
                img.src = 'img/homemidoso.jpg';
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 || idade <= 18 ){
                img.src = 'img/criancamenina.jpg';
            }else if(idade < 25){
                img.src = 'img/mulherjovem.jpg';
            }else if(idade > 60){
                img.src = 'img/mulheridosa.jpg';
            }
        }
        img.style.width = '200px'
        res.style.textAlign = 'center';
        res.innerHTML = `detectamos ${genero} com ${idade} anos: `;
        res.appendChild(img);//adicioona o elemento na pagina
    }
}