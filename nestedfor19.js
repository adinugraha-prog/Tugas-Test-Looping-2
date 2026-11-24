const prompt = require('prompt-sync')({ sigint: true });
let b = Number(prompt('Masukkan banyak nilai : '))
let jumlah = 0
for(let i = 1; i <= b; i++) {
    let nilai = Number(prompt('Masukkan nilai ke ' + i + ' : '))
    jumlah += nilai
}
let rata2 = jumlah / b
console.log(`
Jumlah nilai : ${jumlah}
Rata-rata : ${rata2}`)