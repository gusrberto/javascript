var horaAtual = new Date()
var hora = horaAtual.getHours()
if (hora == 0) {
    console.log('Agora é meia noite.')
} else if (hora == 1) {
    console.log('Agora é 1 hora.')
} else {
    console.log(`Agora são ${hora} horas.`)
}

if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora > 0 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 0 && hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
