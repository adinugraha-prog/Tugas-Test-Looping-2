const prompt = require('prompt-sync')({ sigint: true });
let n = Number(prompt('Masukkan nilai : '))
for (let i = 1; i<=10;i++)
    console.log(`${n} x ${i} = ${n * i}`)