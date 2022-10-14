let num = [ 2, 2, 1, 1, 20, 7, 3 ];
console.log(`O vetor tem ${num.length} posições`);
console.log(`${num}`);
num.sort(function(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})
console.log(num);

let ind = 0;

console.log(`${i}`);
