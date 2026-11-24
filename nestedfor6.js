const prompt = require('prompt-sync')({ sigint: true });
let i = 1
let jumlah = 0
do {
    console.log(i)
    jumlah += i
    i++
} while (i <= 5)
console.log('-- +')
console.log(jumlah)