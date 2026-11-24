const prompt = require('prompt-sync')({ sigint: true });
let teks = ''
for (let i = 1; i<=5;i++) {
    for (let j = 1;j<=5-i;j++){
        teks += ' '
    }
    for (let k = 1;k<=(2*i) - 1; k++) {
        teks += '*'
    }
teks += '\n'
}
console.log(teks)