function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtAno');
    var res = document.querySelector('#resultado');
    var img = document.createElement('img')

    img.setAttribute('id', 'foto');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('Informações incorretas, verifique os dados e tente novamente!');
    } else {
        var formSex = document.getElementsByName('sexo');
        var idade = ano - Number(formAno.value);
        var genero = '';
        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.src = 'imagens/foto-bebe-m.png';
            } else if (idade <= 21) {
                // Jovem
                img.src = 'imagens/foto-jovem-m.png';
            } else if (idade <= 50) {
                // Adulto
                img.src = 'imagens/foto-adulto-m.png';
            } else {
                // Idoso
                img.src = 'imagens/foto-idoso-m.png';
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.src = 'imagens/foto-bebe-f.png';
            } else if (idade <= 21) {
                // Jovem
                img.src = 'imagens/foto-jovem-f.png';
            } else if (idade <= 50) {
                // Adulto
                img.src = 'imagens/foto-adulto-f.png';
            } else {
                // Idoso
                img.src = 'imagens/foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `${genero} de ${idade} anos!`;
        res.appendChild(img);
    }
}