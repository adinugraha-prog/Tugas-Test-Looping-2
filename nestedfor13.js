const prompt = require('prompt-sync')({ sigint: true });
for (let i = 1; i <= 5; i++) {
    let hasil = ''

    for (let j = 1; j <= i; j++) {
        hasil += '*'
    }
console.log(hasil)
}
for (let k = 4; k >= 1; k--) {
    let jasil = ''

    for (let l = 1; l <= k; l++) {
        jasil += '*'
    }
console.log(jasil)
}