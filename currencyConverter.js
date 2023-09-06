const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cambio = 0.85;

console.log('Conversor de moneda');
console.log('Tipo de cambio de dolares a euros: ', cambio);

read.question('Ingrese la cantidad en dólares: ', (cantDolares)=>{
    const dolares = parseFloat(cantDolares);
    if (isNaN(dolares)){
        console.log('Valor incorrecto');
    } else {
        const cantEuros = dolares * cambio;
        console.log('\n',dolares,'dólares equivale a ', cantEuros, 'euros');
    }
    read.close();
});



