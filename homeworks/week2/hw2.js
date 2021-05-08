function capitalize(str) {
let ans = str[0].toUpperCase()
    for ( let i = 1; i < str.length; i++){
        ans += str[i]
    }
    return ans
}

console.log(capitalize('hello'));
