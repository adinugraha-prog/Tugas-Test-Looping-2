const prompt = require('prompt-sync')({ sigint: true });
let n = Number(prompt('Masukkan jumlah perkalian : '))

for (let i = 0; i <= n;i++) {
    let pola = ''
    for (let j = 0; j <= n; j++) {
        if (i == 0 && j == 0)
            pola += '*\t'
        else if (i == 0)
            pola += j + '\t'
        else if (j == 0)
            pola += i + '\t'
        else
            pola += (i * j) + '\t'

    }
    console.log(pola)
}