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
    for (let i=1; i<lines.length; i++) {
        console.log(isPrime(Number(lines[i])))
        }
    }
    

function isPrime(n) {
    if (n===1) {
        return 'Composite'
    }
    for(let i=2; i<n; i++) {
        if(n % i === 0) {
            return 'Composite'
           }
        }
        return 'Prime'
     }