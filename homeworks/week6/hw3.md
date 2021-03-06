## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<br>

1. `<bgsound />`：用来設置網頁播放的背景音樂，音樂文件格式可以是 midi、wav、mp3 等。不過 IE 以外的瀏覽器可能不能播放。<br>
   用法：`<bgsound src="./music.mp3" loop="5" />` <br>
   備註：src 為音樂檔來源；loop 為音樂循環次數

2. `<hr />`：分隔線。<br>
   用法：`<hr size="5" width="100" />`

3. `<mark></mark>`：用來凸顯一段文字。<br>
   用法：`<p>這裡是<mark>很重要</mark>的內容</p>`
<br>
<br>
<br>

## 請問什麼是盒模型（box modal）
從 CSS 的角度來看網頁物件的話，所有網頁的物件都像是一個一個被盒子包裝起來後，擺放在頁面上；這些盒子指的就是 box model，物件由內到外，依序組成的元素包含：
<br>

* content：物件本身的內容。
* padding：負責調整元素內所有內容與元素自身的邊界間距，屬於元素內部的邊界調整。
* boder：元素最外層的邊界，即元素外框設定。
* margin：負責調整元素與元素之間的邊界間距，屬於元素外部的邊界調整。
<br>
<br>
<br>

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline：
  1. 元素的顯示型態被設定為行內元素，不會影響其他元素。
  2. 「無法」指定 width 和 height，尺寸非固定會受 padding 值的影響。
  3. 元素「不會自動換行配置」，只要沒有使用 br 元素強制換行，會在同一列一直顯示至空間不足才會換到下一行。
  4. 預設為此屬性的是文字類型元素：span、a、strong、small …等
* block：
  1. 元素的顯示型態被設定為區塊元素。
  2. 調什麼都可以。
  3. 元素會由上而下「自動換行配置」。
  4. 預設為此屬性的是區塊類型元素：div、ul、dl、p、h1~h6 …等。
* inline-block：
  1. 與 inline 一樣不會自動換行，但卻是以 block 元素盒子的方式顯示，為行內區塊。
  2. 元素「不會自動換行配置」，只要沒有使用 br 元素強制換行，會在同一列一直顯示至空間不足才會換到下一行。
  3. 預設為此屬性的類型元素有：img、input、select、button …等。
<br>
<br>
<br>

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static：
  1. 預設定位。
  2. 照著瀏覽器預設的配置自動排版在頁面上。
  3. 設定top, left, bottom, right 不會有任何作用。

* relative：
  1. 相對定位。
  2. 以「自己原本顯示的位置為基準位置」來指定上下左右的偏移，而且區塊原本的空間仍會保留不會消失。
  3. 這個屬性值大多會用在以下兩種狀況：<br>
    (1) 設定絕對配置( position: absolute )的基準元素時。<br>
    (2) 希望元素偏移重疊 or 指定圖層上下順序且同時保留原本的空間時。

* absolute：
  1. 絕對定位。
  2. 可以脫離原本預設的版面配置，重新以「基準元素」為起點，可以自由指定配置位置；而原本應該顯示這個區塊的位置，由於這個區塊移到新的圖層(便利貼)了，後續的元素會自動遞補上去。
   
* fixed：
  1. 固定定位。
  2. position: fixed 和 position: absolute 一樣，都是以絕對位置配置元素區塊，不同的是，fixed 是以整個視窗( body 元素)為基準，就算拉動捲軸，區塊仍然會顯示在同一個位置。


