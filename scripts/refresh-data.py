#!/usr/bin/env python3
# refresh-data.py — 拉取 GitHub 实时数据,刷新 src/data.jsx 与 components.jsx 中的统计快照。
# 只改数字快照(星标 / 贡献 / 仓库数 / 语言分布),不碰文案与结构。
import json, os, re, subprocess, sys, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OWNER = "can4hou6joeng4"
FLAGSHIP = "boss-agent-cli"
PROJECTS = [FLAGSHIP, "Beacon", "Watch", "Semaphore", "Trawl", "Tide", "Buoy", "Landfall"]
LANG_BUCKETS = ["Swift", "Python", "TypeScript", "JavaScript", "Go", "HTML", "Vue"]

def gh(*args, inp=None, allow_not_found=False):
    r = subprocess.run(["gh"] + list(args), capture_output=True, text=True, input=inp)
    if r.returncode != 0:
        detail = r.stderr.strip()
        if allow_not_found and "HTTP 404" in detail:
            return None
        sys.exit(f"gh {' '.join(args[:2])} failed: {detail[:300]}")
    return r.stdout

def warn(message):
    prefix = "::warning::" if os.environ.get("GITHUB_ACTIONS") == "true" else "warning: "
    print(f"{prefix}{message}", file=sys.stderr)

stars, lang_bytes, available_projects, skipped_projects = {}, {}, [], []
for repo in PROJECTS:
    raw = gh("api", f"repos/{OWNER}/{repo}", allow_not_found=True)
    if raw is None:
        skipped_projects.append(repo)
        warn(f"跳过 {OWNER}/{repo}:仓库不存在或当前令牌不可访问(HTTP 404)")
        continue
    d = json.loads(raw)
    stars[repo] = d["stargazers_count"]
    available_projects.append(repo)
    raw_langs = gh("api", f"repos/{OWNER}/{repo}/languages", allow_not_found=True)
    if raw_langs is None:
        warn(f"跳过 {OWNER}/{repo} 的语言统计:接口返回 HTTP 404")
        langs = {}
    else:
        langs = json.loads(raw_langs)
    for k, v in langs.items():
        lang_bytes[k if k in LANG_BUCKETS else "Other"] = lang_bytes.get(k if k in LANG_BUCKETS else "Other", 0) + v

if FLAGSHIP not in stars:
    sys.exit(f"重点项目 {OWNER}/{FLAGSHIP} 不可用,无法生成主页快照")

total_stars = sum(stars.values())
# 仓库数只算自建，排除 fork(与站点「自建仓库」口径一致)
own_repos = len(gh("api", "--paginate", f"users/{OWNER}/repos?per_page=100",
                   "--jq", ".[] | select(.fork == false) | .name").split())
contrib = json.loads(gh("api", "graphql", "-f", "query=query{user(login:\"%s\"){contributionsCollection{contributionCalendar{totalContributions}}}}" % OWNER))
contributions = contrib["data"]["user"]["contributionsCollection"]["contributionCalendar"]["totalContributions"]

# 语言占比:整数百分比,余数补给最大项,<1% 并入 Other,Other 恒排最后
total_bytes = sum(lang_bytes.values()) or 1
pcts = {k: round(v * 100 / total_bytes) for k, v in lang_bytes.items()}
drift = 100 - sum(pcts.values())
if pcts:
    pcts[max(pcts, key=pcts.get)] += drift
other = pcts.pop("Other", 0) + sum(v for k, v in pcts.items() if v < 1)
items = sorted(((k, v) for k, v in pcts.items() if v >= 1), key=lambda x: -x[1])
if other > 0:
    items.append(("Other", other))

def fmt(n): return f"{n:,}"
def short(n): return f"{n/1000:.1f}k" if n >= 1000 else str(n)
today = datetime.date.today().isoformat()

data = (ROOT / "src/data.jsx").read_text()
orig = data
data = re.sub(r"数据快照日期：\d{4}-\d{2}-\d{2}", f"数据快照日期：{today}", data)
data = re.sub(r'(stars: ")[^"]*(",)', rf"\g<1>{fmt(stars[FLAGSHIP])}\g<2>", data, count=1)
for repo in available_projects:
    data = re.sub(rf'(id: "{repo}", emoji: [^\n]*stars: )\d+', rf"\g<1>{stars[repo]}", data)
data = re.sub(r'value: "[^"]*", icon: "star"', f'value: "{fmt(total_stars)}", icon: "star"', data)
data = re.sub(r'value: "[^"]*", icon: "pulse"', f'value: "{fmt(contributions)}", icon: "pulse"', data)
data = re.sub(r'value: "[^"]*", icon: "box"', f'value: "{own_repos}", icon: "box"', data)
items_src = "\n".join(f'      {{ name: "{k}", pct: {v} }},' for k, v in items)
data = re.sub(r"(langMix: \{[\s\S]*?items: \[\n)[\s\S]*?(    \],)", rf"\g<1>{items_src}\n\g<2>", data)
(ROOT / "src/data.jsx").write_text(data)

comp_path = ROOT / "src/components.jsx"
comp = comp_path.read_text()
comp_new = re.sub(r"★ [\d.,]+k?", f"★ {short(stars[FLAGSHIP])}", comp)
comp_path.write_text(comp_new)

changed = data != orig or comp_new != comp
print(f"stars={fmt(total_stars)} contrib={fmt(contributions)} repos={own_repos} "
      f"flagship={fmt(stars[FLAGSHIP])} langs={items}")
print("CHANGED" if changed else "UNCHANGED")
if skipped_projects:
    print(f"SKIPPED repos={','.join(skipped_projects)}")

# 设了 REFRESH_SUMMARY_JSON 才写结构化摘要(含刷新前的旧值,供通知算增减)。
# 未设时行为与从前完全一致,手动跑不受影响。
summary_path = os.environ.get("REFRESH_SUMMARY_JSON")
if summary_path:
    def was(pattern):
        m = re.search(pattern, orig)  # orig 是改写前的原文
        return m.group(1) if m else None
    summary = {
        "changed": changed,
        "date": today,
        "stats": [
            {"key": "stars_total",   "old": was(r'value: "([^"]*)", icon: "star"'),  "new": fmt(total_stars)},
            {"key": "flagship",      "old": was(r'stars: "([^"]*)",'),               "new": fmt(stars[FLAGSHIP])},
            {"key": "contributions", "old": was(r'value: "([^"]*)", icon: "pulse"'), "new": fmt(contributions)},
            {"key": "repos",         "old": was(r'value: "([^"]*)", icon: "box"'),   "new": str(own_repos)},
        ],
        "langs": [{"name": k, "pct": v} for k, v in items],
        "skipped_repos": skipped_projects,
    }
    Path(summary_path).write_text(json.dumps(summary, ensure_ascii=False, indent=2))
