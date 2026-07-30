# 社青牧區 App — 測試下載連結

API：https://youngadult-api.onrender.com/api  
後台：https://youngadult-admin.onrender.com  
Expo 專案：https://expo.dev/accounts/davidping/projects/youngadult

---

## Android（下載 APK 安裝）

直接下載（連雲端 API）：

https://expo.dev/artifacts/eas/VdNraeEf1eyr1HmLwATbJPqvlCXVZXnDhkUmYjLVh8Q.apk

建置紀錄：  
https://expo.dev/accounts/davidping/projects/youngadult/builds/3bd77129-a17a-4b4e-966b-288983091c16

1. 手機下載 APK → 允許「未知來源」→ 安裝 **社青牧區**
2. 註冊（密碼至少 10 字）或登入

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

Android：下載 APK 安裝（允許未知來源）
→ https://expo.dev/artifacts/eas/VdNraeEf1eyr1HmLwATbJPqvlCXVZXnDhkUmYjLVh8Q.apk

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
