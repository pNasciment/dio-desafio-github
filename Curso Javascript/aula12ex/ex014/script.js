function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        msg2.innerHTML = `<strong>Bom Dia!</strong>`
        img.src = 'fotomanha.png'
        document.body.style.background = '#fde36f'
    }else if (hora >=12 && hora < 18){
        msg2.innerHTML = `<strong>Boa Tarde!</strong>`
        img.src = 'fototarde.png'
        document.body.style.background = '#cfb182'
        //boa tarde
    }else{
        msg2.innerHTML = `<strong>Boa Noite!</strong>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#264b82'
        //boa noite
    }
}