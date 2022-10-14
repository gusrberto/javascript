var horaAtual = new Date()
var hora = horaAtual.getHours()
var horario = document.getElementById('relogio')
var bg = document.getElementById('background')
var img = document.createElement("img")

horario.innerHTML = `<br>Agora são ${hora} horas.<br>`

if (hora > 12 && hora <= 18) {
    bg.style.backgroundColor = '#b46744'
    img.src = "imagens/tarde.jpg"
    horario.appendChild(img)
    img.setAttribute("style", "border-radius:50%; padding-top:20px")
} else if (hora >= 19 || hora < 7) {
    bg.style.backgroundColor = '#303030'
    img.src = "imagens/noite.jpg"
    horario.appendChild(img)
    img.setAttribute("style", "border-radius:50%; padding-top:20px")
} else {
    bg.style.backgroundColor = '#c0a95e'
    img.src = "imagens/manha.jpg"
    horario.appendChild(img)
    img.setAttribute("style", "border-radius:50%; padding-top:20px")
}