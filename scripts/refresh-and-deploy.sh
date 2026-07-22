#!/bin/bash
# refresh-and-deploy.sh — 定时任务入口:刷新数据快照,有变化才构建、部署、提交推送。
# launchd 环境无 shell 配置,PATH 与代理在此固定(代理变更需同步改这里)。
set -euo pipefail
export PATH="/Users/bobochang/.nvm/versions/node/v24.15.0/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
export HTTP_PROXY="http://127.0.0.1:7897" HTTPS_PROXY="http://127.0.0.1:7897"

cd "$(dirname "$0")/.."
echo "=== $(date '+%F %T') refresh start ==="

python3 scripts/refresh-data.py

if git diff --quiet -- src/; then
  echo "no data change, skip deploy"
  exit 0
fi

./build.sh
wrangler deploy
git add src/ dist/
git -c user.name=bobochang -c user.email=bobochang990914@gmail.com \
  commit -m "chore(data): refresh stats snapshot $(date +%F)"
git push origin main
echo "=== $(date '+%F %T') refresh deployed ==="
