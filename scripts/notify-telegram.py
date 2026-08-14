#!/usr/bin/env python3
# notify-telegram.py — 把数据刷新结果播报到 Telegram。
#
# 环境变量:
#   TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID   必需,缺任一则静默跳过(退出 0)
#   TELEGRAM_MESSAGE_THREAD_ID              可选,群组话题 ID
#   STATUS                                  success | failure
#   FAILED_STEP                             失败步骤名(失败时用)
#   RUN_URL                                 Actions 运行链接
#   REFRESH_SUMMARY_JSON                    refresh-data.py 产出的摘要路径
#
# 本地预览:python3 scripts/notify-telegram.py --dry-run
import json, os, sys, unicodedata, urllib.parse, urllib.request

SITE = "https://bobochang.cn"
LABELS = {
    "stars_total": "累计星标",
    "flagship": "旗舰星标",
    "contributions": "年度贡献",
    "repos": "自建仓库",
}


def width(s):
    """按终端显示宽度算:CJK 与全角字符占 2 列。"""
    return sum(2 if unicodedata.east_asian_width(c) in "WF" else 1 for c in s)


def rjust(s, n):
    return " " * max(0, n - width(s)) + s


def ljust(s, n):
    return s + " " * max(0, n - width(s))


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def to_int(s):
    try:
        return int(str(s).replace(",", "").strip())
    except (ValueError, AttributeError):
        return None


def delta(old, new):
    """▲n / ▼n / —(无变化或旧值不可用)"""
    o, n = to_int(old), to_int(new)
    if o is None or n is None or o == n:
        return "—"
    return f"▲{n - o:,}" if n > o else f"▼{o - n:,}"


def build_success(summary):
    stats = summary.get("stats", [])
    rows = []
    for st in stats:
        label = LABELS.get(st["key"], st["key"])
        rows.append((label, str(st.get("new", "")), delta(st.get("old"), st.get("new"))))

    # 三列各取最宽者对齐,数字右对齐更像仪表盘
    w_label = max((width(r[0]) for r in rows), default=0)
    w_value = max((width(r[1]) for r in rows), default=0)
    table = "\n".join(
        f"{ljust(l, w_label)}   {rjust(v, w_value)}   {d}" for l, v, d in rows
    )

    langs = summary.get("langs", [])[:3]
    lang_line = " · ".join(f"{x['name']} {x['pct']}%" for x in langs)

    parts = [
        "🧭 <b>母港 · 数据快照已更新</b>",
        "",
        f"<pre>{esc(table)}</pre>",
    ]
    if lang_line:
        parts += ["", f"🗺 主航线 · {esc(lang_line)}"]
    parts += ["", f'⚓ 已部署 · <a href="{SITE}">bobochang.cn</a>']
    if os.environ.get("RUN_URL"):
        parts[-1] += f' · <a href="{esc(os.environ["RUN_URL"])}">运行日志</a>'
    return "\n".join(parts)


def build_failure():
    step = os.environ.get("FAILED_STEP", "").strip()
    parts = ["⚠️ <b>母港 · 数据刷新失败</b>", ""]
    parts.append(f"失败于「{esc(step)}」" if step else "任务未能跑完。")
    parts.append("线上站点未受影响,下周一 09:30 会自动重试。")
    if os.environ.get("RUN_URL"):
        parts += ["", f'🔧 <a href="{esc(os.environ["RUN_URL"])}">查看运行日志</a>']
    return "\n".join(parts)


def main():
    dry = "--dry-run" in sys.argv
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    chat = os.environ.get("TELEGRAM_CHAT_ID", "").strip()
    if not dry and (not token or not chat):
        print("未配置 Telegram secrets,跳过播报")
        return 0

    if os.environ.get("STATUS", "success") == "success":
        path = os.environ.get("REFRESH_SUMMARY_JSON", "")
        summary = {}
        if path and os.path.exists(path):
            summary = json.loads(open(path, encoding="utf-8").read())
        text = build_success(summary)
    else:
        text = build_failure()

    if dry:
        print(text)
        return 0

    payload = {
        "chat_id": chat,
        "text": text,
        "parse_mode": "HTML",
        "disable_web_page_preview": "true",
    }
    thread = os.environ.get("TELEGRAM_MESSAGE_THREAD_ID", "").strip()
    if thread:
        payload["message_thread_id"] = thread

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=urllib.parse.urlencode(payload).encode(),
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            body = json.loads(r.read())
            print("telegram ok:", body.get("ok"))
    except Exception as e:  # 播报失败不应改变任务结论
        detail = getattr(e, "read", lambda: b"")()
        print(f"telegram 发送失败: {e} {detail[:300]}", file=sys.stderr)
        return 0
    return 0


if __name__ == "__main__":
    sys.exit(main())
