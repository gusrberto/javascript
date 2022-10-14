function contar() {    
    var txtNumI = document.querySelector('#txtNumI');
    var txtNumF = document.querySelector('#txtNumF');
    var txtPasso = document.querySelector('#txtPasso');
    var res = document.querySelector('#resolucao');

    if (txtNumI.value.length == 0 || txtNumF.value.length == 0 || txtPasso.value.length == 0) {
        res.innerHTML = `Impossível contar!`;
    } else { 
        if (txtPasso.value == 0 && txtNumI.value >= txtNumF.value) {
        window.alert('Passo inválido! Considerando PASSO 1');
        res.innerHTML = `Contando:<br>`
            for(var x = Number(txtNumI.value); x <= Number(txtNumF.value); x += 1) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
        res.innerHTML += String.fromCodePoint(0x1F3C1);
        } else if (txtPasso.value == 0 && txtNumI.value < txtNumF.value) {    
            window.alert('Passo inválido! Considerando PASSO 1');
            res.innerHTML = `Contando:<br>`
            for(var x = Number(txtNumI.value); x >= Number(txtNumF.value); x -= 1) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
            res.innerHTML += String.fromCodePoint(0x1F3C1);
        } else if (txtNumI.value < txtNumF.value) {
            res.innerHTML = `Contando:<br>`
            for(var x = Number(txtNumI.value); x >= Number(txtNumF.value); x -= Number(txtPasso.value)) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
            res.innerHTML += String.fromCodePoint(0x1F3C1);
        } else {
            res.innerHTML = `Contando:<br>`
            for(var x = Number(txtNumI.value); x <= Number(txtNumF.value); x += Number(txtPasso.value)) {
                res.innerHTML += ` ${x} `;
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
            res.innerHTML += String.fromCodePoint(0x1F3C1);
        }
    }
}    