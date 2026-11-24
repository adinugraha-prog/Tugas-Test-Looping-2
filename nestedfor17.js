const prompt = require('prompt-sync')({ sigint: true });
let huruf = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < 5; i++) {
    let hasil = ''
    for (let j = 1; j <= 5; j++) {
        hasil += huruf[i]
    }
    console.log(hasil)
}
