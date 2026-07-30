# 社青牧區 App — 測試下載連結

API：https://youngadult-api.onrender.com/api  
後台：https://youngadult-admin.onrender.com  
Expo 專案：https://expo.dev/accounts/davidping/projects/youngadult

---

## Android（下載 APK 安裝）

**請用這個連結（可傳 LINE，較不易卡住）：**

https://github.com/davidping-happy/YoungAdult/releases/download/v1.1.0-preview/youngadult-1.1.0.apk

Release 頁：https://github.com/davidping-happy/YoungAdult/releases/tag/v1.1.0-preview

1. 用 **Chrome** 打開連結（不要在 LINE 內建瀏覽器下載）
2. 下載完成後，到手機 **檔案／下載** 資料夾點 `youngadult-1.1.0.apk` 安裝
3. 若畫面卡在「下載中…」但已顯示 76MB／76MB：點 **取消**，改到「下載」資料夾找檔案開啟即可
4. 允許「未知來源」後安裝 **社青牧區**

（Expo 原始連結常被 LINE 擋、且易卡在 100%，請改用上方 GitHub 連結。）

---

## iPhone（Expo Go，免付費 Apple 開發者帳號）

iPhone **不能裝 APK**。請用 Expo Go：

1. App Store 安裝 **Expo Go**（需與本專案相同 SDK 54）
2. 用 iPhone 相機／Safari 打開更新頁，點 **Open with Expo Go**：

https://expo.dev/accounts/davidping/projects/youngadult/updates/1928e6a2-0674-447f-a9c9-87a782eceabd

或專案首頁：  
https://expo.dev/accounts/davidping/projects/youngadult  
→ Updates → `preview` 分支 → Open in Expo Go

3. 看到「社青牧區」登入畫面即可測試

> 若之後要「獨立 App／TestFlight」（不用 Expo Go），需 Apple Developer 年費，再跑 `npm run ios:build`。

---

## 給測試者的短訊範本

```
【社青牧區 App 測試】

Android（請用 Chrome 開，不要用 LINE 內建瀏覽器）：
→ https://github.com/davidping-happy/YoungAdult/releases/download/v1.1.0-preview/youngadult-1.1.0.apk
下載完到「檔案／下載」點 APK 安裝

iPhone：先裝 App Store「Expo Go」，再開
→ https://expo.dev/accounts/davidping/projects/youngadult/updates/1928e6a2-0674-447f-a9c9-87a782eceabd
   點 Open with Expo Go

註冊密碼至少 10 個字。
第一次較慢是雲端喚醒（約 30～60 秒）。
```

---

## 本機重新出包／更新

```powershell
cd c:\Users\User\Desktop\youngadult\apps\mobile
# Android APK
npm run apk
npm run apk:status

# iPhone／Android Expo Go 熱更新（不用重裝）
npm run update:preview
```
