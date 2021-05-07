## 跟你朋友介紹 Git


菜哥，先跟你說說 git 呢！ 它可以紀錄檔案的更改的過程，讓我們可以清楚了解每個版本的差異，還可以把檔案回復成過去儲存過的版本，另外，還支援本地、遠端版本控制喔！那這邊大概的跟你介紹一下 git 的指令及用法吧！

## git 基本功能及用法
```
1.  git init --->初始化
```
git 會知道我們要對這個檔案下版本控制，接下來就可以下更多的 git 指令來作更多的事。

  註：要脫離/結束 git 的版控 --->下 rm -r.git

```
2. git status --->看現在 git 版本控制的狀態
```
註 1 ：可以隨時使用這個指令來檢視 git 的狀態。

註 2 ：如果出現 『Not a git repository in…』 的訊息，表示忘記作 git init 這個動作。

註 3 ：如果有檔案被改過，就會跳出提示訊息告訴你有檔案被改過囉，是要回到原本的檔案（ git checkout)，還是要把改過的檔案加入版本控制 (git add)。

```
3. git add --->把檔案加進版本控制
```
git add + 檔案名稱 --->把單一檔案加進版本控制

git add.--->把所有在資料夾下的檔案都加入版本控制

註 1： git 會把檔案分成兩個區塊，第一個區塊是『 untracked 』，在這個區塊的檔案代表不被版本所控制；第二個區塊就是 『staged』，表示這個檔案有被修改過，但還沒正式變成新版本。

註 2：使用 git rm --cached 檔案名稱，可以把在 staged 的檔案移到 untracked。
```
4. git commit --->新建一個版本
```
git commit -m +"輸入版本有關的敘述"

註 1： git commit 一定要有 message ，不然無法新建一個版本。

註 2： git commit -am +"輸入版本有關的敘述"，同時執行了 git add 和 git commit 兩個動作，但是只會把修改過的檔案加入到 staged ，如果是新的檔案就不會加入，所以要記得每次有新的檔案，都要先使用 git add 。
```
5. git log --->查看歷史紀錄
```
可以看到這個版本的編號、 commit 的訊息及 commit 的時間等資訊。

註： git log --oneline：歷史紀錄會以簡短的訊息呈現。
```
6. git checkout --->回到某一個版本
```
git checkout + 版本名稱

註：如果要回到最新版本可以使用 git checkout master
```
7. 檔案.gitignore --->要忽略掉的檔案
```
註：要忽略的檔案也要記得加入 git 作版控，別人才會知道哪些檔案是被忽略掉的 。
<br>
<br>
<br>

## branch的概念及指令
概念：可以平行作開發＆修 bug，最後可以把兩個版本合併在一起。

常用指令：
* git branch -v ：可以確認 branch 的狀況＆現在的位置
* git branch +branch 名稱：建立一個新的 branch
* git branch -d +branch 名稱：刪除特定的 branch
* git checkout +branch 名稱：切換到特定的 branch
* git merge +branch 名稱：把特定 branch 合併『進來』
   
    註：
merge 遇到 conflict 時，會跳出『CONFLICT(content)： Merge conflict in 檔案名稱』，這時候可以下 git status 的指令，會顯示 Unmerged 的檔案名稱，需要人工修改檔案內容。
<br>
<br>
<br>

## 與 git hub 平台同步方式：
* 把本地的檔案同步傳到 git hub：git push origin +branch 名稱

* 把 git hub 最新的版本拉到本地：git pull origin master
<br>
<br>
<br>

## 特殊情況
* 修改 commit 的方式：git commit --amend
  
  註：已經 commit 而且又 push 了，基本上就沒救了。
* 取消 commit 的方式：git reset HEAD^ 
  
  註 1：git reset HEAD^ --soft:僅移除commit變成新版未 commit，內容仍是新版的。
  註 2：git reset HEAD^ --hard:回到上一版版本，內容及狀態皆是上一版。
* 修改 branch 名稱的方式： git branch -m + branch名稱
  
  註：改 branch 名稱前，要先切換到該 branch 的位置。
* 如果在 git hub 上，要怎麼抓取看到不錯的 repository ： 點選 clone or download 的功能鍵，可以直接 download zip，也可以複製網址 （ clone with SSH )，在 terminal 上，下 git clone ＋" 剛剛複製的網址" 的指令即可。