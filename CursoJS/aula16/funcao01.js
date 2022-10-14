function verifica(n) {
    if (n % 2 == 0) {
        return `Par`;
    } else {
        return `Ímpar`;
    }
}

let x = verifica(3);
console.log(`${x}`);

console.log(verifica(194));