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
    let temp = lines[0].split(' ')
    let n = Number(temp[0])
    let m = Number(temp[1])
    for (let i=n; i<=m; i++){
        if (isNarcissistic(i)){
            console.log(i)
        }
    }
 }
 
//回傳數字幾位數
 function digitsCount(n) {
     if ( n === 0) return 1
     let result = 0
     while ( n !== 0) {
         n = Math.floor(n/10)
         result ++
    }
    return result
 }

 //取出各個數字
 function isNarcissistic(n) {
     let m = n
     let digits = digitsCount(m) 
     let sum = 0
     while ( m !== 0) {
        let num = m % 10   // 1234除以10=123...4
         sum += num ** digits
         m = Math.floor( m/10 )
     }

     if ( sum === n) {
         return true
     } else {
         return false
     }
 }