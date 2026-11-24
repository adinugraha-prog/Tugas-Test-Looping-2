const prompt = require('prompt-sync')({ sigint: true });
let teks = ''
let teks2 = ''
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5 - i; j++) {
        teks += ' '
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
        teks += '*'
    }
teks += '\n'
}

for (let l = 4; l >= 1; l--) {

    for (let m = 1; m <= 5 - l; m++) {
        teks2 += ' '
    }
    for (let n = 1; n <= (2 * l) - 1; n++) {
        teks2 += '*'
    }
teks2 += '\n'
}
console.log(teks + teks2)