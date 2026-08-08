/**
 * å°?apps/mobile ?¯å‡º?ºé??‹ç¶²?ï??¾åˆ° public/appï¼ˆiPhone Safari æ¸¬è©¦?¨ï???
 * ??Renderï¼æœ¬æ©Ÿæ–¼ next build ?åŸ·è¡Œã€?
 * ?ˆé¢?‡æ?äºŒç‰§?€?Œæ­¥ï¼ˆä??™ç¤¾?’å??Œï?APIï¼‰ã€?
 */
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const adminRoot = path.resolve(__dirname, '..');
const mobileRoot = path.resolve(adminRoot, '../mobile');
const distDir = path.join(mobileRoot, 'dist');
const outDir = path.join(adminRoot, 'public', 'app');

const apiBase =
  process.env.EXPO_PUBLIC_API_BASE ||
  process.env.NEXT_PUBLIC_API_BASE ||
  'https://youngadult-api.onrender.com/api';

function run(cmd, args, cwd, env = {}) {
  const result = spawnSync(cmd, args, {
    cwd,
    env: { ...process.env, ...env },
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(mobileRoot)) {
  console.error('?¾ä???apps/mobileï¼Œç•¥?ç¶²?ç?åµŒå…¥');
  process.exit(1);
}

console.log('å®‰è? mobile ä¾è³´??);
run('npm', ['install', '--legacy-peer-deps', '--include=dev'], mobileRoot);

console.log(`?¯å‡º Expo Webï¼ˆAPI=${apiBase}, base=/appï¼‰â€¦`);
run('npx', ['expo', 'export', '--platform', 'web'], mobileRoot, {
  EXPO_PUBLIC_API_BASE: apiBase,
  EXPO_WEB_BASE_URL: '/app',
  CI: '1',
});

if (!existsSync(distDir)) {
  console.error('expo export ?ªç”¢??dist/');
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(distDir, outDir, { recursive: true });
console.log(`å·²å¯«??${outDir}`);
