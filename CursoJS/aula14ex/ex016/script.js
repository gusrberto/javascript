function contar() {
    var txtNumI = document.querySelector('#txtNumI');
    var txtNumF = document.querySelector('#txtNumF');
    var txtPasso = document.querySelector('#txtPasso');
    var res = document.querySelector('#resolucao');

    if (txtNumI.value.length == 0 || txtNumF.value.length == 0 || txtPasso.value.length == 0) {
        res.innerHTML = `Impossível contar! Preencha todos os campos.`;
    } else {
        res.innerHTML = `Contando: `
        var numI = Number(txtNumI.value);
        var numF = Number(txtNumF.value);
        var passo = Number(txtPasso.value);
        if (passo <= 0 || passo > numF) {
            window.alert('Passo inválido! Considerando PASSO 1');
            passo = 1;
        }
        if (numI < numF) {
            // Contagem crescente
            for (var x = numI; x <= numF; x += passo) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
        } else {
            // Contagem decrescente
            for (var x = numI; x >= numF; x -= passo) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449)
            }
        }
        res.innerHTML += String.fromCodePoint(0x1F3C1);
    }   
}