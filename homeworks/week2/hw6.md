``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

# 執行流程

## 第一個區塊迴圈
* 執行第一行<br>
陣列（arr)裡面共有 6 個數字，分別是 3, 5, 8, 13, 22, 35<br>
* 執行第二行<br>
設定 i=0，檢查 i 是否小於陣列的長度 arr.length（0<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行<br>
檢查 arr[0]的數字是否<=0（3>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 1，i 檢查 i 是否小於陣列的長度 arr.length（1<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行 <br>
檢查 arr[1]的數字是否<=0（5>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 2，i 檢查 i 是否小於陣列的長度 arr.length（2<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行 <br>
檢查 arr[2]的數字是否<=0（8>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 3，i 檢查 i 是否小於陣列的長度 arr.length（3<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行 <br>
檢查 arr[3]的數字是否<=0（13>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 4，i 檢查 i 是否小於陣列的長度 arr.length（4<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行 <br>
檢查 arr[4]的數字是否<=0（22>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 5，i 檢查 i 是否小於陣列的長度 arr.length（5<6)，檢查結果是 true，執行下一行<br>
* 續執行第三行 <br>
檢查 arr[5]的數字是否<=0（35>0)，所以是 false，結束迴圈<br>
* 回到第二行<br>
執行 i++，i 會變成 6，i 檢查 i 是否小於陣列的長度 arr.length（6<6)，檢查結果是 false，所以不繼續執行，第一個區塊的迴圈結束，往第 2 個區塊執行。<br>

## 第二個區塊迴圈
* 執行第五行<br>
設定 i=2，檢查 i 是否小於陣列的長度 arr.length（2<6)，檢查結果是 true，執行下一行<br>
* 續執行第六行<br>
檢查 arr[2] !== arr[1] + arr[0] (8 == (5 + 3))，檢查結果為 false，結束迴圈<br>
* 回到第五行
執行 i++，i 會變成 3，檢查 i 是否小於陣列的長度 arr.length（3<6)，檢查結果是 true，執行下一行
* 續執行第六行<br>
檢查 arr[3] !== arr[2] + arr[1] (13 == (8 + 5))，檢查結果為 false，結束迴圈<br>
* 回到第五行
執行 i++，i 會變成 4，檢查 i 是否小於陣列的長度 arr.length（4<6)，檢查結果是 true，執行下一行
* 續執行第六行<br>
檢查 arr[4] !== arr[3] + arr[2] (22 !== (8 + 13))，檢查結果為 true，結束迴圈<br>
* 回到第五行
執行 i++，i 會變成 4，檢查 i 是否小於陣列的長度 arr.length（4<6)，檢查結果是 true，回傳 "invalid"，終止函式 isValid 運算。

