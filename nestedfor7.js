const prompt = require('prompt-sync')({ sigint: true });
let jumlah = 0
let teks = ''
for (let i = 1; i <= 5; i+= 2) {
    teks += i + ' '
    teks += i == 5 ? '= ': '+ '
    jumlah += i
}
console.log(teks + jumlah)