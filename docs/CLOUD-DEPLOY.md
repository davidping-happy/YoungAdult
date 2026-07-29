# 社青牧區：API + 管理後台雲端部署（Render）

> **重要：** `churchsheep-admin.onrender.com` 是「成二牧區」。  
> 「社青牧區」必須用本 repo（YoungAdult）另外建立 Blueprint，網址才會是 `youngadult-admin.onrender.com`。

本機 `localhost` 與通道在電腦關機／休眠後會失效。把 **API** 與 **管理後台** 放到 Render 後，關機仍可使用。

| 項目 | 本機 | 雲端（Render） |
|------|------|----------------|
| 電腦可否關機 | 不行 | 可以 |
| 會友 App | 需通道 | 連固定 API |
| 同工後台 | http://localhost:3001 | https://youngadult-admin.onrender.com |
| 費用（入門） | 免費 | Render 免費方案 |

---

## 一、第一次部署（現在請做這段）

GitHub 程式已就緒：https://github.com/davidping-happy/YoungAdult

1. 打開 <https://dashboard.render.com> → 右上角 **New** → **Blueprint**
2. 連線 GitHub，選 repo：**`davidping-happy/YoungAdult`**（不要選 sheep / churchsheep）
3. Branch：`main`；Blueprint 檔：`render.yaml`
4. 填兩個必填環境變數：
   - `SEED_ADMIN_PASSWORD`：管理員登入密碼（自己設，請記住）
   - `FIELD_ENCRYPTION_KEY`：64 字元 hex，可用 PowerShell 產生：

```powershell
python -c "import secrets; print(secrets.token_hex(32))"
```

5. 按 **Apply**／Deploy  
   會建立：`youngadult-db`、`youngadult-api`、`youngadult-admin`
6. 兩個 Web 都變成 **Live** 後開啟：

```
https://youngadult-admin.onrender.com
https://youngadult-admin.onrender.com/prayer
```

登入：`admin@church.local` ／ 你剛設的 `SEED_ADMIN_PASSWORD`  
側欄應顯示 **社青牧區**（不是成二）。

> 第一次開啟可能要等 30～60 秒（免費方案休眠喚醒）。  
> 若免費額度不足，可先在 Render 把成二的 free 服務 **Suspend**，再開社青。

---

## 二、之後更新程式碼

1. 打開 Render → **Blueprints** → **youngadult**（或你命名的 Blueprint）
2. **Manual Sync** 套用最新 `render.yaml`，或等 Git auto-deploy
3. 確認 CORS 含：

```
http://localhost:3001,http://127.0.0.1:3001,http://localhost:8081,http://127.0.0.1:8081,https://youngadult-admin.onrender.com
```

---

## 三、常用連結

| 用途 | 網址 |
|------|------|
| API 健康檢查 | https://youngadult-api.onrender.com/api/health |
| 雲端後台 | https://youngadult-admin.onrender.com |
| 代禱審核 | https://youngadult-admin.onrender.com/prayer |
| Android APK | 見 Expo Builds／HOW-TO-USE |

---

## 四、免費方案限制

約 15 分鐘無人使用會休眠，下一個請求較慢。長期正式使用可再升級付費方案。

---

## 五、檢查清單

- [ ] `youngadult-api` Live
- [ ] `youngadult-admin` Live
- [ ] 能登入代禱審核
- [ ] 電腦關機後，雲端後台與 App 仍可用
