#!/usr/bin/env python3
# refresh-data.py — 拉取 GitHub 实时数据,刷新 src/data.jsx 与 components.jsx 中的统计快照。
# 只改数字快照(星标 / 贡献 / 仓库数 / 语言分布),不碰文案与结构。
import json, re, subprocess, sys, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OWNER = "can4hou6joeng4"
FLEET = ["boss-agent-cli", "Harbor", "Beacon", "Atlas", "Semaphore",
         "Trawl", "Tide", "Buoy", "Landfall", "Homeport"]
LANG_BUCKETS = ["Swift", "Python", "TypeScript", "JavaScript", "Go", "HTML", "Vue"]

def gh(*args, inp=None):
    r = subprocess.run(["gh"] + list(args), capture_output=True, text=True, input=inp)
    if r.returncode != 0:
        sys.exit(f"gh {' '.join(args[:2])} failed: {r.stderr.strip()[:300]}")
    return r.stdout

stars, lang_bytes = {}, {}
for repo in FLEET:
    d = json.loads(gh("api", f"repos/{OWNER}/{repo}"))
    stars[repo] = d["stargazers_count"]
    langs = json.loads(gh("api", f"repos/{OWNER}/{repo}/languages"))
    for k, v in langs.items():
        lang_bytes[k if k in LANG_BUCKETS else "Other"] = lang_bytes.get(k if k in LANG_BUCKETS else "Other", 0) + v

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
data = re.sub(r'(stars: ")[^"]*(",)', rf"\g<1>{fmt(stars['boss-agent-cli'])}\g<2>", data, count=1)
for repo in FLEET:
    data = re.sub(rf'(id: "{repo}", emoji: [^\n]*stars: )\d+', rf"\g<1>{stars[repo]}", data)
data = re.sub(r'value: "[^"]*", icon: "star"', f'value: "{fmt(total_stars)}", icon: "star"', data)
data = re.sub(r'value: "[^"]*", icon: "pulse"', f'value: "{fmt(contributions)}", icon: "pulse"', data)
data = re.sub(r'value: "[^"]*", icon: "box"', f'value: "{own_repos}", icon: "box"', data)
items_src = "\n".join(f'      {{ name: "{k}", pct: {v} }},' for k, v in items)
data = re.sub(r"(langMix: \{[\s\S]*?items: \[\n)[\s\S]*?(    \],)", rf"\g<1>{items_src}\n\g<2>", data)
(ROOT / "src/data.jsx").write_text(data)

comp_path = ROOT / "src/components.jsx"
comp = comp_path.read_text()
comp_new = re.sub(r"★ [\d.,]+k?", f"★ {short(stars['boss-agent-cli'])}", comp)
comp_path.write_text(comp_new)

changed = data != orig or comp_new != comp
print(f"stars={fmt(total_stars)} contrib={fmt(contributions)} repos={own_repos} "
      f"flagship={fmt(stars['boss-agent-cli'])} langs={items}")
print("CHANGED" if changed else "UNCHANGED")
