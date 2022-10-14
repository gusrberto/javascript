let valores = [  ];
let selTab = document.querySelector('#selTabela');
let res = document.querySelector('#resultado');
let i = 0;

selTab.innerHTML = '';

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    let txtNum = document.querySelector('#txtNum');
    
    res.innerHTML = '';

    if (isNumero(txtNum.value) && !inLista(txtNum.value, valores)) {
        let num = Number(txtNum.value);
        let item  = document.createElement('option');

        i = valores.length;
        valores[i] = num;

        item.text = `Valor ${valores[i]} adicionado.`
        selTab.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    txtNum.value = '';
    txtNum.focus();
}

function finalizar() {
    let soma = 0;
    
    res.innerHTML = '';
    
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        valores.sort(function(a,b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });
        for (let x = 0; x <= i; x++) {
            soma += valores[x];
        }
        res.innerHTML += `Ao todo, temos ${i+1} números cadastrados.`;
        res.innerHTML += `<br><br>O maior valor informado foi ${valores[i]}.`;
        res.innerHTML += `<br><br>O menor valor informado foi ${valores[0]}.`;
        res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<br><br>A média dos valores digitados é ${soma/(i+1)}.`    
    } 
}