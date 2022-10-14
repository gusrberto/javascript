// RECURSIVIDADE
// n! = n * (n-1)!

function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));


// 5 * fat(4) ==> 5 * 4 * fat(3) ==> 5 * 4 * 3 * fat(2) ==> 5 * 4 * 3 * 2 * fat(1) ==> 5 * 4 * 3 * 2 * 1;