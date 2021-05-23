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
    let n = lines[0]
    manySrats(n)
 }

 function manySrats(n){
     for(let i=0; i<n; i++) {
            let result = '*'.repeat( i+1 )
                console.log(result)
     }
 }

