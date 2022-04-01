function parimp (n){
    if (n%2==0){
        return 'par'
    }else {
        return 'ímpar'
    }
}

let res = parimp(4)
console.log(res)
console.log(parimp(223))
console.log(`O numero 22 é ${parimp(22)}`)