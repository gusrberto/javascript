function fatorial(n) {
    let soma = 1;
    for (x = n; x > 1; x--) {
        soma *= x;
    }
    return soma;
}

console.log(fatorial(0));
