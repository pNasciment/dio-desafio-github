function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value <= 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem' 
            if (idade > 0 && idade <=10){
                //criança
                img.setAttribute('src', 'bebeMasc.png')
            }else if (idade<21){
                img.setAttribute('src', 'jovemMasc.png')
                //jovem
            }else if (idade<65){
                img.setAttribute('src', 'adultoMasc.png')
                //adulto
            }else {
                img.setAttribute('src', 'idosoMasc.png')
                //idoso
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <=10){
                img.setAttribute('src', 'bebeFem.png')
                //criança
            }else if (idade<21){
                img.setAttribute('src', 'jovemFem.png')
                //jovem
            }else if (idade<65){
                img.setAttribute('src', 'adultoFem.png')
                //adulto
            }else {
                img.setAttribute('src', 'idosoFem.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

        
    }


}