function gerar() {
    let txtNum = document.querySelector('#txtNum');
    let selTab = document.querySelector('#selTabuada');
    
    if (txtNum.value.length == 0) {
        window.alert('[Erro] Preencha os campos para continuar!')
    } else {
        selTab.innerHTML = '';
        let num = Number(txtNum.value);
        for (let x = 1; x <= 10; x++) {
            let item = document.createElement('option');
            item.text = `${num} x ${x} = ${num*x}`;
            item.value = `tab${x}`;
            selTab.appendChild(item);
        }
    }
}