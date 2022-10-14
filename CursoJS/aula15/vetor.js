let valores = [ 7, 4, 9, 1, 2 ];


/*
for(let num = 0; num < valores.length; num++) {
    console.log(`O ${num+1}º elemento tem o valor ${valores[num]}`);
}
*/

for (let num in valores) {
    console.log(`O ${Number(num)+1}º elemento tem o valor ${valores[num]}`);
}

console.log(`A posição do número 9 é a ${valores.indexOf(9)+1}º`);