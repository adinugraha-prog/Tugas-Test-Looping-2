const prompt = require('prompt-sync')({ sigint: true });
let teks = ''
let jumlah = 0
for (let i = 2; i <= 10; i+= 2) {
    teks += i + ' '
    teks += i == 10 ? '= ': '+ '
    jumlah += i
}
console.log(teks + jumlah)