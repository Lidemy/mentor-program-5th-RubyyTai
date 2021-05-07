## 交作業流程
<br>
<br>

* 交作業流程
1. 連結到 GitHub classroom 連結：https://classroom.github.com/a/yNNrtNyW， 點選接受邀請後，會自動產生新的 repository。
   
   註：新的 repository 會顯示在 Lidemy/mentor-program-5th-RubyyTai(個人專屬的帳號)
2. 點選功能鍵 code，複製 code 裡面的連結，下載並連到自己電腦上（本地）的資料夾。
```
    git clone + "複製的網址" 
    cd 本地資料夾
```
 3. 開啟新的 branch，依據 week 1 、 week 2...命名（以下依 week 1 舉例）
    
    註：寫作業時，要習慣新開一個 branch
```
    git branch week1
```
4. 切換到所在的 branch (week1)，也可以再次檢查 branch 是否存在
``` 
    git checkout week1
```
> 註：綜合上述 3. 及 4. ，同時新開一個 branch 及切換到該 branch 的指令為：
```
    git checkout -b week1
```

5. 在自己電腦上的檔案寫完作業儲存後，更新 git hw 1 - hw 5 的版本並新增 commit
```
    git commit -am+"commit 敘述文字"
```
6. 將完成的作業推到 GitHub
   
   註： origin指的就是遠端 （GitHub）
```
    git push origin week1
```
7. 檢查 GitHub 上，是否有成功新增 week 1 的 branch
8. 確認 Pull requests 是否有提示訊息『 week 1  had recent pushes less than a minute ago』 的訊息 （ Pull requests： 是否想把 week 1 merge 進去 master）
9. 點選 『 click compare & pull request 』
10. 複製本次 PR 的 url 
11. 到學習系統的課程總覽，點選繳交作業，並貼上前面複製之 PR request
12. 可以到作業列表確認作業是否有繳交成功
-------
* 改完作業後的流程
1. 助教改完作業後，Lidemy/mentor-program-5th-RubyyTai 的 Pull requests 的狀態會從 open 變成 merged ( 代表這個 branch 正式合併到 master) 
2. 到本地的 terminal，將位置切換到 master
```
   git checkout master
```
3. 同步 git hub 和本地的檔案版本
```
   git pull origin master
```
4. 刪除本地的 branch
```
   git branch -d week1
```