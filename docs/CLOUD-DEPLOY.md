# 社青牧區：API + 管理後台雲端部署（Render + Neon）

> **重要：** `churchsheep-admin.onrender.com` 是「成二牧區」。  
> 「社青牧區」網址是 `youngadult-admin.onrender.com`。  
> **兩邊都要在線：** 成二繼續用 Render 免費 DB；社青改用 **Neon 免費 Postgres**（Render 帳號只能有 1 個 free DB）。

| 項目 | 成二牧區 | 社青牧區 |
|------|----------|----------|
| GitHub | sheep / churchsheep | YoungAdult |
| API | churchsheep-api.onrender.com | youngadult-api.onrender.com |
| 後台 | churchsheep-admin.onrender.com | youngadult-admin.onrender.com |
| 資料庫 | Render `churchsheep-db`（免費） | **Neon**（免費） |

---

## 一、先建立 Neon 資料庫（社青專用）

1. 打開 <https://console.neon.tech> 註冊／登入（可用 GitHub）
2. **New Project**
   - Name：`youngadult`
   - Region：選離台灣近的（如 Singapore / Sydney）
3. 建立後到 **Dashboard** → **Connection string**
4. 選 **URI**，複製字串（應類似）：

```
postgresql://USER:PASSWORD@ep-xxxx.region.aws.neon.tech/neondb?sslmode=require
```

> 必須含 `sslmode=require`。這串就是等下要貼到 Render 的 `DATABASE_URL`。

---

## 二、部署社青到 Render（不要再建 Render 資料庫）

程式已推上：https://github.com/davidping-happy/YoungAdult  
`render.yaml` **已移除** `youngadult-db`，只建立兩個 Web：`youngadult-api`、`youngadult-admin`。

1. Render → Blueprint **YoungAdult** → **Manual sync**（抓最新 commit）
2. 確認變更只有：**Create web service youngadult-api**、**youngadult-admin**（不應再出現 Create database）
3. **Approve** 前／後，在環境變數填：

| 變數 | 值 |
|------|-----|
| `DATABASE_URL` | 剛從 Neon 複製的連線字串 |
| `SEED_ADMIN_PASSWORD` | 管理員密碼（請自己記住） |
| `FIELD_ENCRYPTION_KEY` | 64 字元 hex（見下方） |

產生 `FIELD_ENCRYPTION_KEY`：

```powershell
python -c "import secrets; print(secrets.token_hex(32))"
```

4. 等兩個 Web 都 **Live** 後開啟：

```
https://youngadult-admin.onrender.com
https://youngadult-admin.onrender.com/prayer
```

登入：`admin@church.local` ／ 你設的 `SEED_ADMIN_PASSWORD`  
側欄應顯示 **社青牧區**。

成二維持：

```
https://churchsheep-admin.onrender.com
```

兩邊可同時使用，不必 Suspend `churchsheep-db`。

---

## 三、之後更新程式碼

1. Render → Blueprints → YoungAdult → **Manual Sync**（或等 auto-deploy）
2. 確認 `CORS_ORIGINS` 含：

```
http://localhost:3001,http://127.0.0.1:3001,http://localhost:8081,http://127.0.0.1:8081,https://youngadult-admin.onrender.com
```

---

## 四、常用連結

| 用途 | 網址 |
|------|------|
| 社青 API 健康檢查 | https://youngadult-api.onrender.com/api/health |
| 社青雲端後台 | https://youngadult-admin.onrender.com |
| 社青代禱審核 | https://youngadult-admin.onrender.com/prayer |
| 成二雲端後台 | https://churchsheep-admin.onrender.com |

---

## 五、免費方案注意

- Render **Web** 免費服務約 15 分鐘無人使用會休眠，第一次開啟可能要等 30～60 秒（兩邊都一樣）。
- 真正「從不休眠」需 Render 付費方案；本文件的「兩邊都在線」指：**關機後仍可用固定網址開啟兩邊**，不必二選一關服務。

---

## 六、檢查清單

- [ ] Neon 專案 `youngadult` 已建立，`DATABASE_URL` 已貼到 `youngadult-api`
- [ ] Blueprint 不再建立 `youngadult-db`
- [ ] `youngadult-api` Live
- [ ] `youngadult-admin` Live
- [ ] 社青後台顯示「社青牧區」
- [ ] 成二後台仍可開（`churchsheep-db` 未 Suspend）
