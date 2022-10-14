let amigo = {
    nome: 'João',
    sexo: 'Masculino',
    peso: 75.6,
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(2);
console.log(`${amigo.nome} do sexo ${amigo.sexo} pesa ${amigo.peso}kg`);