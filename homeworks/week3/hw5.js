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
   for (let i = 1; i < lines.length; i++) {
    const [a,b,k] = lines[i].split(' ')
       console.log(compareNumber(a,b,k))
    }
}

function compareNumber(a,b,k) {
    if ( a === b ) {
        return 'DRAW'
    }
    if ( k === '-1') {
        const temp = a
        a = b
        b = temp
      }
    if ( a.length > b.length ) {
        return 'A'
    } 
    if ( b.length > a.length ) {
        return 'B'
    }
    if ( a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                continue
              }
            if (a[i] > b[i]) {
                return 'A'
              } else {
                return 'B'
              }
            }
          }
        }