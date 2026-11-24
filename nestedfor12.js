const prompt = require('prompt-sync')({ sigint: true });
for (let i = 5; i >= 1; i--) {
    let hasil = ''

    for (let j = 1; j <= i; j++) {
        hasil += '*'
    }
console.log(hasil)
}