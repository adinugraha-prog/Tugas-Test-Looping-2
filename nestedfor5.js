const prompt = require('prompt-sync')({ sigint: true });
let teks = ''
let jumlah = 0
for (let i = 1; i <= 5; i++) {
    teks += i + ' '
    teks += i == 5 ? '= ': '+ '
    jumlah += i
}
    console.log(teks + jumlah)