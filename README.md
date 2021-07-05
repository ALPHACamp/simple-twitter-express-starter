# Simple Twitter

https://arcane-taiga-93784.herokuapp.com/signin

測試帳號，歡迎登入體驗
- 帳號 user1@example.com
- 密碼 12345678

## 專案目錄
- [專案簡介](#專案簡介)
- [專案規格](#專案規格)
- [專案設定](#專案設定)
- [個人心得](#個人心得)
- [協作者群](#協作者群)


## 專案簡介
此專案是在Alpha Camp四週後，首次多人協作的里程碑。

### 開發目標
- 3人協作，以Scrum作敏捷流程，互相code review 
- 兩週web應用程式開發，使用Node.js 
- 應用Express.js開發RESTful API 
- MySQL串接資料庫與實現資料關連 - 學習自動化測試

### 合作方式
- 導入敏捷流程Scrum
- 將專案管理使用trello
    - 版上依開發時程拆分六個sprint
    - 每個sprint至少有3張ticket
    - 每個人各自認想做的領ticket
- ticket完成，PR給專案管理者
- 各自code review 自由給評論
- 每個sprint結束日
    - 開standing meeting提問
    - 列出下個sprint的ticket與進度

### 介面設計
![](https://i.imgur.com/1IZIoZC.jpg)
<br/>
<br/>
<br/>

## 專案規格
這個網站有兩種使用角色
- 一般使用者(須登入)
- 網站管理員

### 使用者故事
#### 註冊/登入/登出
- [x] 除了註冊和登入頁，使用者一定要登入才能使用網站
- [x] 註冊時，使用者可以創建帳號，並設定名稱、信箱與密碼
- [x] 註冊時，使用者的名稱和 email 不能重覆，若有重覆會跳出錯誤

#### 前台
- [x] 使用者能瀏覽所有的推播 (tweet)
- [x] 使用者能在首頁看見跟隨者 (followers) 數量排列前 10 的使用者推薦名單
- [x] 點擊其他使用者的名稱時，能瀏覽該使用者的個人資料及推播
- [x] 使用者能新增推播
    - [x] 推播字數限制在 140 以內，且不能為空白
    - [x] 若不符合規定，會跳回同一頁並顯示錯誤訊息
- [x] 使用者能回覆別人的推播
    - [x] 回覆文字不能為空白
    - [x] 若不符合規定，會跳回同一頁並顯示錯誤訊息
- [x] 使用者可以追蹤/取消追蹤其他使用者 (不能追蹤自己)
- [x] 使用者能對別人的推播按 Like/Unlike
- [x] 任何登入使用者都可以瀏覽特定使用者的以下資料：
    - [x] Tweets：排序依日期，最新的在前
    - [x] Following：該使用者的關注清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面
    - [x] Follower：該使用者的跟隨者清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面
    - [x] Like：該使用者 like 過的推播清單，排序依 like 紀錄成立的時間，愈新的在愈前面
- [x] 使用者能編輯自己的名稱、介紹和大頭照

#### 後台
管理者登入網站後，能夠經由瀏覽列進入後台頁面 (只有管理員能看見後台入口)
在後台介面：

- [x] 管理者可以瀏覽全站的推播清單
    - [x] 可以直接在清單上快覽推播回覆內容前 50 個字
    - [x] 可以在清單上刪除使用者的推播
- [x] 管理者可以瀏覽站內所有的使用者清單，清單的資訊包括
    - [x] 使用者社群活躍數據，包括推播數量、關注人數、跟隨者人數、推播被 like 的數量)
    - [x] 清單預設按推播文數排序


## 專案設定

### 複製/下載專案
首先複製/下載專案(clone)本專案到你的本機環境

$ git clone https://github.com/smallpaes/simple-twitter-vue.git
 
### 專案初始化
1. 進入專案資料夾

    $ cd simple-twitter-vue

2. 以npm指令安裝所有專案用過的Packages

    $ npm install

### 啟動本專案

在package.json已設定好腳本指令

1. 部屬使用(正式執行主程式)

    $ npm start

2. 開發使用(每次code更新就自動刷新主程式)
    
    $ npm dev

3. 跑所有測試(跑單次測試可用 $ mocha /test/folder_name/file_name.spec.js)
    
    $ npm test

## 個人心得

| 問題 | 解方 | 
| -------- | -------- | 
| PR後常的衝突產生   | 工作分離、git-flow  | 
| 命名問題   | 統一中文與格式參考  |
| 開發卡關   | zoom分享畫面、組員參與除錯  |

[AC期中心得分享](https://medium.com/@fan01856472/whats-next-%E6%B1%82%E8%81%B7-%E4%B8%8D%E6%B1%82%E8%81%B7-88eb08af0175)


## 協作者群
[Ignatius Fan](https://github.com/IgnacioFan)
- 專案進度管理
- 協作開發
- mocha測試

[文傑](https://github.com/Luwengier)
- 協作開發
- UI/UX測試

[Kirwen](https://github.com/KerwinJhong)
- 協作開發
- 專案部屬