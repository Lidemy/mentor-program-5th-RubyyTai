function join(arr, concatStr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += arr[i]
      if (i < arr.length -1) str += concatStr
    }
    return str

    function repeat(str, times) {
        let repeatStr = ''
        for (let i = 0; i < times; i++) {
          repeatStr += str
        }
        return repeatStr
      }
      

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
