const prompt = require('prompt-sync')({ sigint: true });
for (let i = 1; i <= 5; i++) {
    let hasil = ''

    for (let j = 1; j <= 5; j++){
        hasil += j + ' '
    }
console.log(hasil)
}
