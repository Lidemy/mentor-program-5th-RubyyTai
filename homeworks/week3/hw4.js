var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
    let str = lines[0]
    if ( reverse (str) === str) {
        console.log('True')
    } else {
        console.log('False')
    }
}

function reverse(str) {
    let result = ''
    for (let i = str.length -1; i>=0; i--) {
        result += str[i]
    }
    return result
}