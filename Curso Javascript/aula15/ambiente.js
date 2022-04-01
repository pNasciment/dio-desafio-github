let num = [5,8,4]
num[3]=6
num.push(7) //adiciona valor no final

console.log(`Nosso vetor é o (${num})`)
console.log(`O vetor tem ${num.length} elementos`)

num.sort() //ordena o vetor por ordem crescente
console.log(`Nosso vetor ordenado é o (${num})`)

//Percurso em Vetores
/*
for(let c = 0; c<num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
*/

//So funciona para arrays e objetos
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let val = num.indexOf(8)
console.log(val)

if (val==-1){
    console.log("Valor não encontrado")
}else {
    console.log(`a Posição do valor é ${val}`)
}