//var txtNumI = document.querySelector('#txtNumI');
//var txtNumF = document.querySelector('#txtNumF');
//var txtPasso = document.querySelector('#txtPasso');
//var res = document.querySelector('#resolucao');

txtNumI.value = 10;
txtNumF.value = 5;
txtPasso.value = 1;

if (txtNumI.value.length == 0 || txtNumF.value.length == 0 || txtPasso.value.length == 0) {
    console.log(``) = ``;
} else if (txtPasso.value == 0 && txtNumI.value <= txtNumF.value) {
    window.alert('Passo inválido! Considerando PASSO 1');
    console.log(``) = `Contando:<br>`
    for(var x = Number(txtNumI.value); x <= Number(txtNumF.value); x += 1) {
        console.log(``) += ` ${x} `;
        console.log(``) += String.fromCodePoint(0x1F449);
    }
    console.log(``) += String.fromCodePoint(0x1F3C1);
} else if (txtPasso.value == 0 && txtNumI.value > txtNumF.value) {    
    window.alert('Passo inválido! Considerando PASSO 1');
    console.log(``) = `Contando:<br>`
    for(var x = Number(txtNumI.value); x >= Number(txtNumF.value); x -= 1) {
        console.log(``) += ` ${x} `;
        console.log(``) += String.fromCodePoint(0x1F449);
    }
    console.log(``) += String.fromCodePoint(0x1F3C1);
} else if (txtNumI.value > txtNumF.value) {
    console.log(``) = `Contando:<br>`
    for(var x = Number(txtNumI.value); x >= Number(txtNumF.value); x -= Number(txtPasso.value)) {
        console.log(``) += ` ${x} `;
        console.log(``) += String.fromCodePoint(0x1F449);
    }
    console.log(``) += String.fromCodePoint(0x1F3C1);
} else {
    console.log(``) = `Contando:<br>`
    for(var x = Number(txtNumI.value); x <= Number(txtNumF.value); x += Number(txtPasso.value)) {
        console.log(``) += ` ${x} `;
        console.log(``) += String.fromCodePoint(0x1F449);
    }
    console.log(``) += String.fromCodePoint(0x1F3C1);
}