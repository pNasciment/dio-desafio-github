function contar (){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        res.innerHTML='Impossivel contar'
        //alert(`[ERRO] Faltam dados! ${ini.value.length} ${fim.value.lenght} ${passo.value.lenght}`)
        
    }else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            alert('Passo Invalido! Considerando Passo 1')
            p=1
        }

        if (i<f ){
            //contagem crescente
            for (let c = i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}	`
            }
            res.innerHTML += `\u{1f3c1}`
        }else {
            //contagem regressiva
            for (let c = i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}	`
            }
            res.innerHTML += `\u{1f3c1}`
        }

        
    }
    
    

}

/*var res = document.getElementById('res')
    var cont = `inicio`
    for (var i=ini; i<=fim; i+=passo){
        cont = `${cont}${i}, prox`
    }
    alert (cont)
    res.innerHTML = `Contando: ${cont}` */