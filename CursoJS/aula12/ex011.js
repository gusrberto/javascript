var idade = 18
console.log(`Você tem ${idade} anos`)
if (idade >= 18 && idade < 70) {
    console.log('Voto obrigatório')
} else if (idade < 16) {
    console.log('Não vota')
} else {
    console.log('Voto facultativo')
}