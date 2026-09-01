var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PowerBasesPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/core.ts
function parseNumber(raw) {
  const s = raw.trim();
  if (!s) return null;
  if (/\d{4}-\d{2}-\d{2}/.test(s)) return null;
  const compact = s.replace(/[,\s]/g, "").replace(/^[^0-9+\-.]+/, "");
  const m = compact.match(/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?/);
  if (!m) return null;
  const n = Number(m[0]);
  return Number.isFinite(n) ? n : null;
}
function aggregate(values, op) {
  if (op === "none") return null;
  if (op === "filled") return values.filter((v) => v.trim() !== "").length;
  if (op === "empty") return values.filter((v) => v.trim() === "").length;
  const nums = values.map(parseNumber).filter((n) => n != null);
  if (!nums.length) return null;
  if (op === "sum") return nums.reduce((a, b) => a + b, 0);
  if (op === "avg") return nums.reduce((a, b) => a + b, 0) / nums.length;
  if (op === "min") return Math.min(...nums);
  return Math.max(...nums);
}
function formatNum(n) {
  const r = Math.round(n * 100) / 100;
  if (Number.isInteger(r)) return String(r);
  return String(r.toFixed(2)).replace(/0$/, "");
}
function colorIndex(key, paletteSize) {
  let h = 5381;
  for (let i = 0; i < key.length; i++) h = (h << 5) + h + key.charCodeAt(i) >>> 0;
  return paletteSize > 0 ? h % paletteSize : 0;
}
function dateKeyOf(raw) {
  const m = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  const mo = +m[2];
  const d = +m[3];
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}
function monthGrid(year, month0, weekStartsMonday) {
  const first = new Date(year, month0, 1);
  let lead = first.getDay() - (weekStartsMonday ? 1 : 0);
  if (lead < 0) lead += 7;
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(year, month0, 1 - lead + i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    cells.push({ key, day: d.getDate(), inMonth: d.getMonth() === month0 });
  }
  return cells;
}
function boardColumns(values, saved) {
  const live = [];
  const seen = /* @__PURE__ */ new Set();
  for (const v of values) {
    if (v == null || v === "") continue;
    if (!seen.has(v)) {
      seen.add(v);
      live.push(v);
    }
  }
  const out = [];
  for (const s of saved) if (seen.has(s) && !out.includes(s)) out.push(s);
  for (const v of live) if (!out.includes(v)) out.push(v);
  return out;
}
function scalePos(n, min, max) {
  if (!(max > min)) return null;
  return (n - min) / (max - min);
}
function inferKind(raw) {
  if (typeof raw === "boolean") return "checkbox";
  if (typeof raw === "number") return "number";
  if (Array.isArray(raw)) return "list";
  if (typeof raw === "string") {
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(raw)) return "datetime";
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return "date";
  }
  return "text";
}
function textToList(s) {
  return s.split(",").map((p) => p.trim()).filter((p) => p !== "");
}
function coerceForKind(kind, s) {
  const t = s.trim();
  if (t === "") return void 0;
  if (kind === "number") {
    const n = Number(t);
    return Number.isFinite(n) ? n : t;
  }
  if (kind === "list") {
    const arr = textToList(t);
    return arr.length ? arr : void 0;
  }
  return t;
}
function rankBetween(prev, next) {
  if (prev == null && next == null) return 1e3;
  if (prev == null) return next - 100;
  if (next == null) return prev + 100;
  if (!(next > prev) || next - prev < 1e-6) return null;
  return prev + (next - prev) / 2;
}
function renumber(count) {
  return Array.from({ length: count }, (_, i) => (i + 1) * 100);
}
function orderByRank(items, rankOf) {
  const ranked = items.filter((t) => rankOf(t) != null);
  ranked.sort((a, b) => rankOf(a) - rankOf(b));
  return [...ranked, ...items.filter((t) => rankOf(t) == null)];
}
var pad2 = (n) => String(n).padStart(2, "0");
function expandToken(v, now) {
  const date = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  if (v === "{today}") return date;
  if (v === "{now}") return `${date}T${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
  return v;
}
function parseRuleValue(v) {
  const t = v.trim();
  if (t === "") return void 0;
  if (t === "true") return true;
  if (t === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t);
  return t;
}
function dayNum(key) {
  const y = +key.slice(0, 4);
  const m = +key.slice(5, 7) - 1;
  const d = +key.slice(8, 10);
  return Math.round(Date.UTC(y, m, d) / 864e5);
}
function keyOfDayNum(n) {
  const d = new Date(n * 864e5);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}
function addDays(key, days) {
  return keyOfDayNum(dayNum(key) + days);
}
function dayDiff(a, b) {
  return dayNum(b) - dayNum(a);
}
function dayOfWeek(key) {
  return (dayNum(key) + 4) % 7;
}
function weekDays(key, mondayStart) {
  const dow = dayOfWeek(key);
  const offset = mondayStart ? (dow + 6) % 7 : dow;
  const first = addDays(key, -offset);
  return Array.from({ length: 7 }, (_, i) => addDays(first, i));
}
function timeMinutes(raw) {
  const m = raw.match(/T(\d{2}):(\d{2})/);
  if (!m) return null;
  const h = +m[1];
  const min = +m[2];
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}
function monthSpans(from, to) {
  const out = [];
  if (dayDiff(from, to) < 0) return out;
  let y = +from.slice(0, 4);
  let m0 = +from.slice(5, 7) - 1;
  const endY = +to.slice(0, 4);
  const endM = +to.slice(5, 7) - 1;
  for (; ; ) {
    const first = `${y}-${String(m0 + 1).padStart(2, "0")}-01`;
    const daysInMonth = Math.round((Date.UTC(y, m0 + 1, 1) - Date.UTC(y, m0, 1)) / 864e5);
    const last = addDays(first, daysInMonth - 1);
    const clipStart = dayDiff(from, first) < 0 ? from : first;
    const clipEnd = dayDiff(last, to) > 0 ? last : to;
    out.push({ y, m0, days: dayDiff(clipStart, clipEnd) + 1 });
    if (y === endY && m0 === endM) break;
    m0++;
    if (m0 > 11) {
      m0 = 0;
      y++;
    }
  }
  return out;
}
function timelineRange(keys, today, pad = 7) {
  if (!keys.length) return { from: addDays(today, -30), to: addDays(today, 60) };
  let min = keys[0];
  let max = keys[0];
  for (const k of keys) {
    if (dayDiff(min, k) < 0) min = k;
    if (dayDiff(max, k) > 0) max = k;
  }
  if (dayDiff(min, today) < 0) min = today;
  if (dayDiff(max, today) > 0) max = today;
  let from = addDays(min, -pad);
  let to = addDays(max, pad);
  if (dayDiff(from, to) > 1100) {
    from = addDays(today, -365);
    to = addDays(today, 735);
  }
  return { from, to };
}
function replaceDateKey(raw, newKey) {
  const old = dateKeyOf(raw);
  return old ? raw.replace(old, newKey) : newKey;
}
function linkTargets(raw) {
  const items = Array.isArray(raw) ? raw : raw == null ? [] : [raw];
  const out = [];
  for (const it of items) {
    const s = String(it).trim();
    if (!s) continue;
    const m = s.match(/^\[\[([^\]]+)\]\]$/);
    const inner = (m ? m[1] : s).split(/[|#]/)[0].trim();
    if (inner) out.push(inner);
  }
  return out;
}
function capturePrev(fm, keys) {
  const prev = {};
  for (const k of keys) {
    const v = fm[k];
    prev[k] = Array.isArray(v) ? [...v] : v;
  }
  return prev;
}
function starterBaseYaml(folderPath) {
  const esc = folderPath.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return [
    "filters:",
    "  and:",
    `    - file.inFolder("${esc}")`,
    '    - file.ext == "md"',
    "views:",
    "  - type: powerbases-board",
    "    name: Board",
    "    pbGroup: note.status",
    "    rankProp: note.pb-order",
    "  - type: powerbases-table",
    "    name: Table",
    "  - type: powerbases-calendar",
    "    name: Calendar",
    "    dateProp: note.start",
    "  - type: powerbases-timeline",
    "    name: Timeline",
    "    startProp: note.start",
    "    endProp: note.end",
    "    colorProp: note.status",
    ""
  ].join("\n");
}
function blankBaseYaml(folderPath, withName = true) {
  const esc = folderPath.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return [
    "filters:",
    "  and:",
    `    - file.inFolder("${esc}")`,
    '    - file.ext == "md"',
    "views:",
    "  - type: powerbases-table",
    "    name: Table",
    ...withName ? ["    order:", "      - file.name"] : ["    pbHideName: true", "    order: []"],
    ""
  ].join("\n");
}
function matchesQuery(parts, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = parts.join("  ").toLowerCase();
  return q.split(/\s+/).every((tok) => hay.includes(tok));
}
function groupAggregate(labels, values, op, emptyLabel = "(empty)") {
  const order = [];
  const buckets = /* @__PURE__ */ new Map();
  const counts = /* @__PURE__ */ new Map();
  for (let i = 0; i < labels.length; i++) {
    const key = labels[i] == null || labels[i] === "" ? emptyLabel : labels[i];
    if (!buckets.has(key)) {
      buckets.set(key, []);
      counts.set(key, 0);
      order.push(key);
    }
    buckets.get(key).push(values[i] ?? "");
    counts.set(key, counts.get(key) + 1);
  }
  const out = [];
  for (const key of order) {
    if (op === "count") {
      out.push({ label: key, value: counts.get(key) });
      continue;
    }
    const n = aggregate(buckets.get(key), op);
    if (n != null) out.push({ label: key, value: n });
  }
  return out;
}
function niceCeil(max) {
  if (!(max > 0)) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(max)));
  for (const m of [1, 2, 2.5, 5, 10]) {
    if (m * pow >= max - 1e-9) return m * pow;
  }
  return 10 * pow;
}
function axisTicks(max, target = 4) {
  const ceil = niceCeil(max);
  const step = niceCeil(ceil / Math.max(1, target));
  const out = [];
  for (let v = 0; v <= ceil + 1e-9; v += step) out.push(Math.round(v * 1e3) / 1e3);
  return out;
}
function donutSegments(values) {
  const total = values.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  if (total <= 0) return [];
  const out = [];
  let acc = 0;
  for (const v of values) {
    const frac = (v > 0 ? v : 0) / total;
    out.push({ frac, offset: acc });
    acc += frac;
  }
  return out;
}
function arcPoint(cx, cy, r, frac) {
  const a = frac * 2 * Math.PI - Math.PI / 2;
  return [Math.round((cx + r * Math.cos(a)) * 100) / 100, Math.round((cy + r * Math.sin(a)) * 100) / 100];
}
function progressPct(raw) {
  const n = typeof raw === "number" ? raw : raw == null ? null : parseNumber(String(raw));
  if (n == null || !Number.isFinite(n)) return null;
  const pct = n > 0 && n <= 1 ? n * 100 : n;
  return Math.max(0, Math.min(100, pct));
}
function rollup(op, targetCount, values) {
  if (op === "count") return String(targetCount);
  const strs = values.filter((v) => v != null).map((v) => String(v));
  if (op === "filled") return String(strs.filter((s) => s.trim() !== "").length);
  if (op === "list") {
    const distinct = [...new Set(strs.filter((s) => s.trim() !== ""))];
    const shown = distinct.slice(0, 6).join(", ");
    return distinct.length > 6 ? `${shown} +${distinct.length - 6}` : shown;
  }
  const n = aggregate(strs, op);
  return n == null ? "" : formatNum(n);
}
var PB_FIELD_TYPES = ["url", "email", "phone", "person", "place", "id", "button", "verification", "image", "files"];
function externalHref(raw) {
  const s = raw.trim();
  if (!s) return "";
  if (/^[a-z][a-z0-9+.-]*:/i.test(s)) return s;
  return "https://" + s;
}
function mailtoHref(raw) {
  const s = raw.trim();
  return s ? /^mailto:/i.test(s) ? s : "mailto:" + s : "";
}
function telHref(raw) {
  const s = raw.trim();
  if (!s) return "";
  const plus = s.startsWith("+") ? "+" : "";
  const digits = s.replace(/[^\d]/g, "");
  return digits ? "tel:" + plus + digits : "";
}
function mapsUrl(raw) {
  const s = raw.trim();
  return s ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s) : "";
}
function parseLinkValue(raw) {
  const s = (raw ?? "").trim();
  const m = s.match(/^\[([^\]]*)\]\((.+)\)$/s);
  if (m) return { caption: m[1].trim(), address: m[2].trim() };
  return { caption: "", address: s };
}
function formatLinkValue(address, caption) {
  const a = (address ?? "").trim();
  const c = (caption ?? "").trim().replace(/[[\]]/g, "");
  if (!a) return "";
  return c ? `[${c}](${a})` : a;
}
function scopeFolder(filters) {
  if (typeof filters === "string") {
    const m = filters.match(/file\.inFolder\("(.*?)"\)/);
    return m ? m[1] : null;
  }
  if (Array.isArray(filters)) {
    for (const f of filters) {
      const r = scopeFolder(f);
      if (r != null) return r;
    }
    return null;
  }
  if (filters && typeof filters === "object") {
    for (const v of Object.values(filters)) {
      const r = scopeFolder(v);
      if (r != null) return r;
    }
  }
  return null;
}
function parseDateInput(s, style = "us") {
  const t = (s ?? "").trim();
  if (!t) return null;
  let y, mo, d;
  let hh, mm, ap;
  let m = t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{1,2}):(\d{2})\s*([ap]m)?)?$/i);
  if (m) {
    y = +m[1];
    mo = +m[2];
    d = +m[3];
    hh = m[4];
    mm = m[5];
    ap = m[6];
  } else {
    m = t.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:\s+(\d{1,2}):(\d{2})\s*([ap]m)?)?$/i);
    if (!m) return null;
    const a = +m[1];
    const b = +m[2];
    y = +m[3];
    mo = style === "eu" ? b : a;
    d = style === "eu" ? a : b;
    if (mo > 12 && d <= 12) {
      const swap = mo;
      mo = d;
      d = swap;
    }
    hh = m[4];
    mm = m[5];
    ap = m[6];
  }
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  const key = `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  if (hh == null || mm == null) return key;
  let h = +hh;
  if (ap) {
    const pm = ap.toLowerCase() === "pm";
    if (h === 12) h = pm ? 12 : 0;
    else if (pm) h += 12;
  }
  if (h > 23 || +mm > 59) return null;
  return `${key}T${String(h).padStart(2, "0")}:${mm}`;
}
function fileLinkParts(value) {
  const s = (value ?? "").trim();
  const m = s.match(/^\[\[(.+?)\]\]$/);
  const inner = m ? m[1] : s;
  const link = inner.split("|")[0].trim();
  const alias = m ? inner.split("|")[1]?.trim() : void 0;
  const name = alias || link.split(/[\\/]/).pop() || link;
  return { link, name };
}
function hasPhoneFormat(fmt) {
  return !!fmt && fmt.style !== "raw";
}
function formatPhoneValue(raw, fmt) {
  const s = (raw ?? "").trim();
  if (!s || !hasPhoneFormat(fmt)) return s;
  const hasPlus = s.startsWith("+");
  const digits = s.replace(/\D/g, "");
  let national = "";
  let cc = "";
  if (digits.length === 10 && !hasPlus) {
    national = digits;
  } else if (digits.length === 11 && digits.startsWith("1")) {
    cc = "1";
    national = digits.slice(1);
  } else {
    return s;
  }
  const a = national.slice(0, 3);
  const b = national.slice(3, 6);
  const c = national.slice(6, 10);
  let body;
  switch (fmt.style) {
    case "hyphens":
      body = `${a}-${b}-${c}`;
      break;
    case "spaces":
      body = `${a} ${b} ${c}`;
      break;
    case "dots":
      body = `${a}.${b}.${c}`;
      break;
    case "parens":
      body = `(${a}) ${b}-${c}`;
      break;
    default:
      return s;
  }
  if (!cc) return body;
  const prefix = hasPlus ? "+1" : "1";
  const sep = fmt.style === "hyphens" ? "-" : fmt.style === "dots" ? "." : " ";
  return prefix + sep + body;
}
function looksLikeEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}
function looksLikeUrl(s) {
  return /^(https?:\/\/|www\.)\S+$/i.test(s.trim());
}
function personNames(raw) {
  const items = Array.isArray(raw) ? raw : raw == null || raw === "" ? [] : [raw];
  const out = [];
  for (const it of items) {
    const s = String(it).trim();
    if (!s) continue;
    const m = s.match(/^\[\[([^\]]+)\]\]$/);
    const inner = m ? m[1] : s;
    const [target, alias] = inner.split("|");
    let name = (alias ?? target).split("#")[0].trim();
    if (alias == null) name = name.split("/").pop().trim();
    if (name) out.push(name);
  }
  return out;
}
function nextId(existing, prefix) {
  let max = 0;
  let pad = 0;
  for (const raw of existing) {
    const s = String(raw).trim();
    if (!s) continue;
    if (prefix && !s.startsWith(prefix)) continue;
    const m = s.slice(prefix.length).match(/(\d+)\s*$/);
    if (!m) continue;
    const n = parseInt(m[1], 10);
    if (n > max) max = n;
    if (m[1].length > pad) pad = m[1].length;
  }
  const body = String(max + 1);
  return prefix + (pad > body.length ? body.padStart(pad, "0") : body);
}
function verifyState(value, expiry, today) {
  const v = String(value ?? "").trim().toLowerCase();
  let state = v === "verified" || v === "true" ? "verified" : v === "expired" ? "expired" : "unverified";
  if (state === "verified" && expiry) {
    const k = dateKeyOf(expiry);
    if (k && dayDiff(today, k) < 0) state = "expired";
  }
  return state;
}
function parseCsv(text, delim = ",") {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else quoted = false;
      } else cell += c;
    } else if (c === '"') {
      quoted = true;
    } else if (c === delim) {
      row.push(cell);
      cell = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      rows.push(row);
      row = [];
    } else cell += c;
  }
  if (cell !== "" || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0].trim() === ""));
}
function toCsv(rows) {
  const field = (s) => /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  return rows.map((r) => r.map(field).join(",")).join("\r\n") + "\r\n";
}
function csvValue(kind, s) {
  const t = s.trim();
  if (t === "") return void 0;
  if (kind === "checkbox") return /^(true|yes)$/i.test(t);
  if (kind === "number") {
    const n = Number(t.replace(/,/g, ""));
    return Number.isFinite(n) ? n : t;
  }
  return t;
}
function inferColumnKind(samples) {
  const vals = samples.map((s) => s.trim()).filter((s) => s !== "");
  if (!vals.length) return "text";
  const all = (re) => vals.every((v) => re.test(v));
  if (all(/^(true|false|yes|no)$/i)) return "checkbox";
  if (all(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)) return "datetime";
  if (all(/^\d{4}-\d{2}-\d{2}$/)) return "date";
  if (all(/^-?\d{1,3}(,\d{3})+(\.\d+)?$|^-?\d+(\.\d+)?$/)) return "number";
  return "text";
}
function inferFieldType(header, samples) {
  const h = header.toLowerCase();
  const vals = samples.map((s) => s.trim()).filter(Boolean);
  const most = (pred) => vals.length > 0 && vals.filter(pred).length >= Math.ceil(vals.length * 0.7);
  if (/\bemail\b|e-mail/.test(h) || most(looksLikeEmail)) return "email";
  if (/\burl\b|website|homepage|link/.test(h) || most(looksLikeUrl)) return "url";
  if (/\bphone\b|mobile|telephone|\bfax\b|\btel\b/.test(h)) return "phone";
  if (/address|location|\bcity\b|\bplace\b/.test(h)) return "place";
  if (/assignee|\bowner\b|person|contact|manager|reporter/.test(h)) return "person";
  return null;
}
function sanitizeKey(header, n) {
  const s = header.replace(/[\r\n]+/g, " ").replace(/[:#[\]{}",]/g, "").replace(/\s+/g, " ").trim();
  return s || "col" + n;
}
function safeName(name, fallback = "Untitled") {
  const s = name.replace(/[\\/:*?"<>|#^[\]]/g, "").replace(/\s+/g, " ").trim();
  return s || fallback;
}
function safeFormulaName(name) {
  const s = name.trim().replace(/[^A-Za-z0-9_]+/g, "_").replace(/^_+|_+$/g, "");
  if (!s) return "";
  return /^[0-9]/.test(s) ? "f_" + s : s;
}
var CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "\u20AC", name: "Euro" },
  { code: "GBP", symbol: "\xA3", name: "British Pound" },
  { code: "JPY", symbol: "\xA5", name: "Japanese Yen" },
  { code: "CNY", symbol: "CN\xA5", name: "Chinese Yuan" },
  { code: "PHP", symbol: "\u20B1", name: "Philippine Peso" },
  { code: "INR", symbol: "\u20B9", name: "Indian Rupee" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "CHF ", name: "Swiss Franc" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "KRW", symbol: "\u20A9", name: "South Korean Won" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "MXN", symbol: "Mex$", name: "Mexican Peso" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "SEK", symbol: "kr ", name: "Swedish Krona" },
  { code: "NOK", symbol: "kr ", name: "Norwegian Krone" },
  { code: "DKK", symbol: "kr ", name: "Danish Krone" },
  { code: "PLN", symbol: "z\u0142 ", name: "Polish Zloty" },
  { code: "RUB", symbol: "\u20BD", name: "Russian Ruble" },
  { code: "TRY", symbol: "\u20BA", name: "Turkish Lira" },
  { code: "THB", symbol: "\u0E3F", name: "Thai Baht" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "TWD", symbol: "NT$", name: "Taiwan Dollar" },
  { code: "VND", symbol: "\u20AB", name: "Vietnamese Dong" },
  { code: "AED", symbol: "AED ", name: "UAE Dirham" },
  { code: "SAR", symbol: "SAR ", name: "Saudi Riyal" },
  { code: "ILS", symbol: "\u20AA", name: "Israeli Shekel" }
];
function currencySymbol(code) {
  if (!code) return "";
  return CURRENCIES.find((c) => c.code === code)?.symbol ?? "";
}
function hasNumberFormat(fmt) {
  if (!fmt) return false;
  return fmt.decimals != null || !!fmt.thousands || !!fmt.prefix || !!fmt.suffix || !!fmt.currency || fmt.display != null && fmt.display !== "plain";
}
function isMeter(fmt) {
  if (!fmt) return false;
  return fmt.display === "bar" || fmt.display === "ring" || fmt.display === "stars" || fmt.display === "dots" || fmt.display === "traffic";
}
function meterFraction(n, max) {
  if (!(max > 0)) return 0;
  return Math.max(0, Math.min(1, n / max));
}
function starCount(n, count) {
  return Math.max(0, Math.min(count, Math.round(n)));
}
function formatPercent(n, max, decimals = 0) {
  const pct = max > 0 ? n / max * 100 : 0;
  return pct.toFixed(decimals) + "%";
}
function trafficState(n, low, high) {
  if (n < low) return "red";
  if (n < high) return "amber";
  return "green";
}
function formatNumberValue(n, fmt) {
  const neg = n < 0;
  const abs = Math.abs(n);
  let body = fmt.decimals != null ? abs.toFixed(fmt.decimals) : String(abs);
  if (fmt.thousands) {
    const dot = body.indexOf(".");
    const int = dot < 0 ? body : body.slice(0, dot);
    const frac = dot < 0 ? "" : body.slice(dot);
    body = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + frac;
  }
  const prefix = fmt.prefix ?? currencySymbol(fmt.currency);
  return (neg ? "-" : "") + prefix + body + (fmt.suffix ?? "");
}
var MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function relativeDay(diff) {
  if (diff === 0) return "today";
  if (diff === 1) return "tomorrow";
  if (diff === -1) return "yesterday";
  return diff > 0 ? `in ${diff} days` : `${-diff} days ago`;
}
function formatTime(mins, mode) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (mode === "24h") return `${pad2(h)}:${pad2(m)}`;
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 || 12;
  return `${h12}:${pad2(m)} ${ampm}`;
}
function formatDateValue(raw, fmt, todayKey2) {
  const key = dateKeyOf(raw);
  if (!key) return raw;
  const y = +key.slice(0, 4);
  const mo = +key.slice(5, 7);
  const d = +key.slice(8, 10);
  const preset = fmt.preset ?? "iso";
  let out;
  if (preset === "relative" && todayKey2) out = relativeDay(dayDiff(todayKey2, key));
  else if (preset === "us") out = `${pad2(mo)}/${pad2(d)}/${y}`;
  else if (preset === "eu") out = `${pad2(d)}/${pad2(mo)}/${y}`;
  else if (preset === "medium") out = `${MONTHS_SHORT[mo - 1]} ${d}, ${y}`;
  else if (preset === "long") out = `${MONTHS_LONG[mo - 1]} ${d}, ${y}`;
  else out = key;
  const mins = timeMinutes(raw);
  if (fmt.time && fmt.time !== "none" && mins != null) out += " " + formatTime(mins, fmt.time);
  return out;
}
function hasDateFormat(fmt) {
  return !!fmt && (fmt.preset != null || fmt.time != null && fmt.time !== "none");
}
var EvalError = class extends Error {
};
function tokenizeFormula(src) {
  const out = [];
  const ops2 = ["<=", ">=", "==", "!=", "&&", "||"];
  const ops1 = "()[],.+-*/%<>!";
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (c === '"' || c === "'") {
      let s = "";
      i++;
      while (i < src.length && src[i] !== c) {
        if (src[i] === "\\" && i + 1 < src.length) {
          s += src[i + 1];
          i += 2;
        } else s += src[i++];
      }
      if (i >= src.length) throw new EvalError("unterminated string");
      i++;
      out.push({ t: "str", v: s });
      continue;
    }
    if (/[0-9]/.test(c) || c === "." && /[0-9]/.test(src[i + 1] ?? "")) {
      let n = "";
      while (i < src.length && /[0-9.]/.test(src[i])) n += src[i++];
      out.push({ t: "num", v: n });
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let id = "";
      while (i < src.length && /[A-Za-z0-9_]/.test(src[i])) id += src[i++];
      out.push({ t: "id", v: id });
      continue;
    }
    const two = src.slice(i, i + 2);
    if (ops2.includes(two)) {
      out.push({ t: "op", v: two });
      i += 2;
      continue;
    }
    if (ops1.includes(c)) {
      out.push({ t: "op", v: c });
      i++;
      continue;
    }
    throw new EvalError(`unexpected "${c}"`);
  }
  return out;
}
var BIN_BP = { "||": 1, "&&": 2, "==": 3, "!=": 3, "<": 4, "<=": 4, ">": 4, ">=": 4, "+": 5, "-": 5, "*": 6, "/": 6, "%": 6 };
var FormulaParser = class {
  constructor(toks) {
    this.toks = toks;
    this.i = 0;
  }
  peek() {
    return this.toks[this.i];
  }
  next() {
    const t = this.toks[this.i++];
    if (!t) throw new EvalError("unexpected end of formula");
    return t;
  }
  eatOp(v) {
    const t = this.next();
    if (t.t !== "op" || t.v !== v) throw new EvalError(`expected "${v}"`);
  }
  parse() {
    const n = this.expr(0);
    if (this.peek()) throw new EvalError("unexpected trailing input");
    return n;
  }
  expr(bp) {
    let left = this.prefix();
    for (; ; ) {
      const t = this.peek();
      if (!t || t.t !== "op") break;
      const lbp = BIN_BP[t.v];
      if (!lbp || lbp <= bp) break;
      this.next();
      left = { k: "bin", op: t.v, left, right: this.expr(lbp) };
    }
    return left;
  }
  prefix() {
    const t = this.peek();
    if (t && t.t === "op" && (t.v === "-" || t.v === "!")) {
      this.next();
      return { k: "un", op: t.v, operand: this.prefix() };
    }
    return this.postfix(this.primary());
  }
  postfix(node) {
    for (; ; ) {
      const t = this.peek();
      if (!t || t.t !== "op") break;
      if (t.v === ".") {
        this.next();
        const id = this.next();
        if (id.t !== "id") throw new EvalError("expected a name after .");
        if (this.peek()?.v === "(") node = { k: "method", obj: node, name: id.v, args: this.args() };
        else node = { k: "member", obj: node, name: id.v };
      } else if (t.v === "[") {
        this.next();
        const index = this.expr(0);
        this.eatOp("]");
        node = { k: "index", obj: node, index };
      } else break;
    }
    return node;
  }
  primary() {
    const t = this.next();
    if (t.t === "num") return { k: "num", v: Number(t.v) };
    if (t.t === "str") return { k: "str", v: t.v };
    if (t.t === "id") {
      if (t.v === "true") return { k: "bool", v: true };
      if (t.v === "false") return { k: "bool", v: false };
      if (this.peek()?.v === "(") return { k: "call", name: t.v, args: this.args() };
      return { k: "id", name: t.v };
    }
    if (t.t === "op" && t.v === "(") {
      const e = this.expr(0);
      this.eatOp(")");
      return e;
    }
    throw new EvalError(`unexpected "${t.v}"`);
  }
  args() {
    this.eatOp("(");
    const args = [];
    if (this.peek()?.v !== ")") {
      args.push(this.expr(0));
      while (this.peek()?.v === ",") {
        this.next();
        args.push(this.expr(0));
      }
    }
    this.eatOp(")");
    return args;
  }
};
var isNum = (v) => typeof v === "number" && !Number.isNaN(v);
function toNum(v) {
  if (typeof v === "number") return v;
  if (typeof v === "boolean") return v ? 1 : 0;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v.replace(/,/g, ""));
    if (!Number.isNaN(n)) return n;
  }
  throw new EvalError("expected a number");
}
var truthy = (v) => !(v === null || v === false || v === 0 || v === "" || typeof v === "number" && Number.isNaN(v));
function rawToValue(raw) {
  if (raw == null) return null;
  if (typeof raw === "number" || typeof raw === "boolean" || typeof raw === "string") return raw;
  if (Array.isArray(raw)) return raw.map((x) => String(x)).join(", ");
  return String(raw);
}
var FN1 = {
  abs: (n) => Math.abs(n),
  ceil: (n) => Math.ceil(n),
  floor: (n) => Math.floor(n),
  round: (n, d = 0) => {
    const f = Math.pow(10, d);
    return Math.round(n * f) / f;
  },
  toFixed: (n, d = 0) => n.toFixed(d),
  number: (n) => n
};
function callFn(name, args) {
  if (name in FN1) {
    if (!args.length) throw new EvalError(`${name}() needs a value`);
    const d = args.length > 1 ? toNum(args[1]) : void 0;
    return FN1[name](toNum(args[0]), d);
  }
  if (name === "min" || name === "max") {
    if (!args.length) throw new EvalError(`${name}() needs values`);
    const ns = args.map(toNum);
    return name === "min" ? Math.min(...ns) : Math.max(...ns);
  }
  if (name === "concat") return args.map((a) => a == null ? "" : String(a)).join("");
  if (name === "length") {
    const a = args[0];
    return typeof a === "string" ? a.length : a == null ? 0 : String(a).length;
  }
  if (name === "lower") return String(args[0] ?? "").toLowerCase();
  if (name === "upper") return String(args[0] ?? "").toUpperCase();
  if (name === "trim") return String(args[0] ?? "").trim();
  if (name === "contains") return String(args[0] ?? "").includes(String(args[1] ?? ""));
  throw new EvalError(`unknown function "${name}"`);
}
function ev(node, ctx) {
  switch (node.k) {
    case "num":
      return node.v;
    case "str":
      return node.v;
    case "bool":
      return node.v;
    case "id":
      if (node.name === "note" || node.name === "formula" || node.name === "file") return null;
      return rawToValue(ctx.row[node.name]);
    case "member": {
      if (node.obj.k === "id") {
        if (node.obj.name === "note") return rawToValue(ctx.row[node.name]);
        if (node.obj.name === "formula") return evalFormulaRef(node.name, ctx);
        if (node.obj.name === "file") return ctx.fileCtx?.[node.name] ?? null;
      }
      return null;
    }
    case "index": {
      const key = ev(node.index, ctx);
      if (node.obj.k === "id" && node.obj.name === "note") return rawToValue(ctx.row[String(key)]);
      if (node.obj.k === "id" && node.obj.name === "formula") return evalFormulaRef(String(key), ctx);
      return null;
    }
    case "call": {
      if (node.name === "if") {
        if (node.args.length < 2) throw new EvalError("if() needs a condition and a value");
        return truthy(ev(node.args[0], ctx)) ? ev(node.args[1], ctx) : node.args[2] ? ev(node.args[2], ctx) : null;
      }
      return callFn(node.name, node.args.map((a) => ev(a, ctx)));
    }
    case "method":
      return callFn(node.name, [ev(node.obj, ctx), ...node.args.map((a) => ev(a, ctx))]);
    case "un": {
      if (node.op === "!") return !truthy(ev(node.operand, ctx));
      return -toNum(ev(node.operand, ctx));
    }
    case "bin":
      return evBin(node, ctx);
  }
}
function evBin(node, ctx) {
  const op = node.op;
  if (op === "&&") return truthy(ev(node.left, ctx)) && truthy(ev(node.right, ctx));
  if (op === "||") return truthy(ev(node.left, ctx)) || truthy(ev(node.right, ctx));
  const l = ev(node.left, ctx);
  const r = ev(node.right, ctx);
  if (op === "+") return isNum(l) && isNum(r) ? l + r : (l == null ? "" : String(l)) + (r == null ? "" : String(r));
  if (op === "-") return toNum(l) - toNum(r);
  if (op === "*") return toNum(l) * toNum(r);
  if (op === "/") return toNum(l) / toNum(r);
  if (op === "%") return toNum(l) % toNum(r);
  if (op === "==") return isNum(l) && isNum(r) ? l === r : String(l) === String(r);
  if (op === "!=") return isNum(l) && isNum(r) ? l !== r : String(l) !== String(r);
  const cmp = isNum(l) && isNum(r) ? l - r : String(l).localeCompare(String(r));
  if (op === "<") return cmp < 0;
  if (op === "<=") return cmp <= 0;
  if (op === ">") return cmp > 0;
  return cmp >= 0;
}
function evalFormulaRef(name, ctx) {
  const expr = ctx.formulas[name];
  if (expr == null) throw new EvalError(`unknown formula "${name}"`);
  if (ctx.depth > 20) throw new EvalError("formula references are too deep");
  const ast = new FormulaParser(tokenizeFormula(expr)).parse();
  return ev(ast, { ...ctx, depth: ctx.depth + 1 });
}
function evalFormula(expr, row, formulas = {}, fileCtx) {
  if (!expr.trim()) return { ok: false, error: "empty formula" };
  try {
    const ast = new FormulaParser(tokenizeFormula(expr)).parse();
    return { ok: true, value: ev(ast, { row, formulas, fileCtx, depth: 0 }) };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "invalid formula" };
  }
}
function buildBaseYaml(folderPath, views) {
  const esc = folderPath.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const lines = ["filters:", "  and:", `    - file.inFolder("${esc}")`, '    - file.ext == "md"', "views:"];
  for (const v of views) {
    lines.push(`  - type: ${v.type}`, `    name: ${v.name}`);
    for (const [k, val] of Object.entries(v.options ?? {})) lines.push(`    ${k}: ${val}`);
    if (v.order && v.order.length) {
      lines.push("    order:");
      for (const o of v.order) lines.push(`      - ${o}`);
    }
  }
  lines.push("");
  return lines.join("\n");
}
function mergeForSave(ours, baseline, disk) {
  const out = { ...ours };
  if (!disk) return out;
  for (const k of Object.keys(ours)) {
    if (!(k in disk)) continue;
    const o = ours[k];
    const b = baseline[k];
    const d = disk[k];
    if (isRecord(o) && isRecord(b) && isRecord(d)) {
      out[k] = mergeEntries(o, b, d);
      continue;
    }
    const changedByUs = JSON.stringify(o) !== JSON.stringify(b);
    if (!changedByUs) out[k] = d;
  }
  return out;
}
function isRecord(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
function mergeEntries(ours, baseline, disk) {
  const out = {};
  for (const k of Object.keys(disk)) {
    const removedByUs = k in baseline && !(k in ours);
    if (!removedByUs) out[k] = disk[k];
  }
  for (const k of Object.keys(ours)) {
    const changedByUs = JSON.stringify(ours[k]) !== JSON.stringify(baseline[k]);
    if (changedByUs || !(k in disk)) out[k] = ours[k];
  }
  return out;
}

// src/main.ts
var pluginNoticesEnabled = () => true;
var Notice = class extends import_obsidian.Notice {
  constructor(message, duration) {
    super(message, duration);
    if (!pluginNoticesEnabled()) this.hide();
  }
};
var PB_TYPE_LABEL = {
  url: "URL",
  email: "Email",
  phone: "Phone",
  person: "Person",
  place: "Place",
  id: "ID",
  button: "Button",
  verification: "Verification",
  image: "Image",
  files: "Files"
};
var PB_TYPE_ICON = {
  url: "link",
  email: "at-sign",
  phone: "phone",
  person: "user",
  place: "map-pin",
  id: "hash",
  button: "mouse-pointer-click",
  verification: "badge-check",
  image: "image",
  files: "paperclip"
};
var VERIFY_ICON = { unverified: "circle-dashed", verified: "badge-check", expired: "badge-alert" };
var VERIFY_LABEL = { unverified: "Unverified", verified: "Verified", expired: "Expired" };
var IMG_EXTS = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "gif", "webp", "avif", "svg", "bmp"]);
var todayKey = () => {
  const d = /* @__PURE__ */ new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
var localDateString = (ms) => {
  const d = new Date(ms);
  const p2 = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}T${p2(d.getHours())}:${p2(d.getMinutes())}`;
};
var FILTER_OPS = [
  { op: "contains", label: "contains", needsValue: true },
  { op: "notcontains", label: "does not contain", needsValue: true },
  { op: "is", label: "is", needsValue: true },
  { op: "isnot", label: "is not", needsValue: true },
  { op: "gt", label: "greater than", needsValue: true },
  { op: "lt", label: "less than", needsValue: true },
  { op: "notempty", label: "is not empty", needsValue: false },
  { op: "empty", label: "is empty", needsValue: false }
];
function parseJson(raw) {
  if (raw == null) return null;
  if (typeof raw === "object") return raw;
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  return null;
}
function frontmatterOf(app, file) {
  const fm = app.metadataCache.getFileCache(file)?.frontmatter;
  return fm;
}
function markDestructive(b) {
  const btn = b;
  if (btn.setDestructive) btn.setDestructive();
  else btn.setWarning();
  return b;
}
function onEventAsync(el, event, run) {
  el.addEventListener(event, () => {
    void run().catch((e) => {
      new Notice("Power Bases: " + (e instanceof Error ? e.message : String(e)), 8e3);
    });
  });
}
function matchesColumnFilter(s, op, value) {
  const v = s.toLowerCase();
  const q = value.toLowerCase();
  switch (op) {
    case "contains":
      return v.includes(q);
    case "notcontains":
      return !v.includes(q);
    case "is":
      return v === q;
    case "isnot":
      return v !== q;
    case "empty":
      return s.trim() === "";
    case "notempty":
      return s.trim() !== "";
    case "gt": {
      const a = parseNumber(s);
      const b = parseNumber(value);
      return a != null && b != null && a > b;
    }
    case "lt": {
      const a = parseNumber(s);
      const b = parseNumber(value);
      return a != null && b != null && a < b;
    }
    default:
      return true;
  }
}
function renderMeter(host, n, colMax, nf) {
  const hue = nf.color || "var(--interactive-accent)";
  const wrap = host.createDiv({ cls: "pb-meter" });
  const d = nf.display;
  if (d === "bar" || d === "ring") {
    const frac = meterFraction(n, nf.max ?? colMax);
    if (d === "ring") {
      const ring = wrap.createDiv({ cls: "pb-ring" });
      ring.style.setProperty("--pb-c", hue);
      ring.style.setProperty("--pb-f", frac.toFixed(3));
    } else {
      const fill = wrap.createDiv({ cls: "pb-bar-track" }).createDiv({ cls: "pb-bar-fill" });
      fill.style.width = (frac * 100).toFixed(1) + "%";
      fill.style.background = hue;
    }
  } else if (d === "stars" || d === "dots") {
    const count = nf.max ?? 5;
    const on = starCount(n, count);
    const box = wrap.createSpan({ cls: d === "stars" ? "pb-stars" : "pb-dots" });
    for (let i = 0; i < count; i++) {
      const pip = box.createSpan({ cls: "pb-pip" });
      pip.setText(d === "stars" ? i < on ? "\u2605" : "\u2606" : i < on ? "\u25CF" : "\u25CB");
      if (i < on) pip.style.color = hue;
    }
  } else if (d === "traffic") {
    const low = nf.low ?? colMax / 3;
    const high = nf.high ?? colMax * 2 / 3;
    wrap.createSpan({ cls: "pb-traffic pb-traffic-" + trafficState(n, low, high) });
  }
  if (nf.showNumber !== false) wrap.createSpan({ cls: "pb-meter-num", text: formatNumberValue(n, nf) });
}
var gestureLock = false;
function attachPointerGesture(el, opts) {
  let suppressClick = false;
  el.addEventListener(
    "click",
    (ce) => {
      if (suppressClick) {
        suppressClick = false;
        ce.stopPropagation();
        ce.preventDefault();
        return;
      }
      opts.onClick?.(ce);
    },
    { capture: true }
  );
  el.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || gestureLock) return;
    gestureLock = true;
    const touch = e.pointerType === "touch";
    const sx = e.clientX;
    const sy = e.clientY;
    let armed = !touch;
    let started = false;
    let ghost = null;
    const holdTimer = touch ? window.setTimeout(() => {
      armed = true;
      el.addClass("pb-lift");
    }, 400) : null;
    const blockTouch = (te) => te.preventDefault();
    const blockCtx = (ce) => {
      ce.preventDefault();
      ce.stopPropagation();
    };
    const start = () => {
      started = true;
      suppressClick = true;
      document.body.addClass("pb-dragging");
      document.addEventListener("touchmove", blockTouch, { passive: false });
      document.addEventListener("contextmenu", blockCtx, { capture: true });
      if (opts.ghostText) ghost = document.body.createDiv({ cls: "pb-ghost", text: opts.ghostText });
      opts.onStart?.();
    };
    const teardown = (cancelled) => {
      gestureLock = false;
      if (holdTimer != null) window.clearTimeout(holdTimer);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onPointerCancel);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("touchmove", blockTouch);
      document.removeEventListener("contextmenu", blockCtx, { capture: true });
      window.removeEventListener("blur", onBlur);
      document.body.removeClass("pb-dragging");
      el.removeClass("pb-lift");
      ghost?.remove();
      if (cancelled && started) opts.onCancel();
    };
    const onBlur = () => teardown(true);
    const onMove = (ev2) => {
      const dist = Math.abs(ev2.clientX - sx) + Math.abs(ev2.clientY - sy);
      if (!started) {
        if (!armed) {
          if (touch && dist > 8) teardown(false);
          return;
        }
        if (dist > 6) start();
        if (!started) return;
      }
      ev2.preventDefault();
      if (ghost) {
        ghost.style.left = ev2.clientX + 12 + "px";
        ghost.style.top = ev2.clientY + 10 + "px";
      }
      opts.onMove(ev2.clientX - sx, ev2.clientY - sy, ev2.clientX, ev2.clientY);
    };
    const onUp = (ev2) => {
      const wasStarted = started;
      const holdTap = !started && armed && touch;
      teardown(false);
      if (wasStarted) {
        suppressClick = true;
        opts.onDrop(ev2.clientX - sx, ev2.clientY - sy, ev2.clientX, ev2.clientY);
      } else if (holdTap && opts.onHoldTap) {
        suppressClick = true;
        opts.onHoldTap(ev2.clientX, ev2.clientY);
      }
    };
    const onPointerCancel = () => teardown(true);
    const onKey = (ev2) => {
      if (ev2.key === "Escape") teardown(true);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onPointerCancel);
    document.addEventListener("keydown", onKey);
    window.addEventListener("blur", onBlur);
  });
}
var NAMED_PALETTE = [
  ["Blue", "#0063B1"],
  ["Blue Mist", "#2D7D9A"],
  ["Cyan", "#00B7C3"],
  ["Teal", "#038387"],
  ["Green", "#107C10"],
  ["Apple", "#498205"],
  ["Lemon Lime", "#8CBD18"],
  ["Yellow", "#FFB900"],
  ["Orange", "#F7630C"],
  ["Red Chalk", "#DA3B01"],
  ["Red", "#E81123"],
  ["Magenta", "#E3008C"],
  ["Purple", "#744DA9"],
  ["Purple Mist", "#8E8CD8"],
  ["Tan", "#986F0B"],
  ["Silver", "#7A7574"]
];
var PALETTE = NAMED_PALETTE.map(([, hex]) => hex);
var frontmatterKey = (prop) => prop.split(".").slice(1).join(".");
var AGG_SYMBOL = { sum: "\u03A3", avg: "Avg", min: "Min", max: "Max", filled: "\u2713" };
var DEFAULT_SETTINGS = {
  valueColors: {},
  fields: {},
  formats: {},
  dateFormats: {},
  phoneFormats: {},
  kinds: {},
  placeAutocomplete: true,
  basesFolder: "",
  myName: "",
  stampEdits: false,
  showNotifications: true
};
var PowerBasesSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
    /** Both survive the re-render a color reset triggers, so the tab and search
     *  box do not jump back to the top. */
    this.activeTab = "general";
    this.query = "";
    this.helpEl = null;
    this.helpAnchor = null;
    this.helpPinned = false;
    this.helpCleanup = null;
  }
  hide() {
    this.closeHelp();
  }
  closeHelp() {
    this.helpCleanup?.();
    this.helpCleanup = null;
    this.helpEl?.remove();
    this.helpEl = null;
    this.helpAnchor = null;
    this.helpPinned = false;
  }
  /** A soft theme-colored help card, not the native black tooltip: opens on
   *  hover, a click pins it, Esc or a click away or a scroll closes it. */
  openHelp(icon, text, pin) {
    if (this.helpAnchor === icon && this.helpEl) {
      if (pin) this.helpPinned = true;
      return;
    }
    this.closeHelp();
    const el = document.body.createDiv({ cls: "pb-help-pop", text });
    this.helpEl = el;
    this.helpAnchor = icon;
    this.helpPinned = pin;
    const r = icon.getBoundingClientRect();
    el.style.left = Math.max(8, Math.min(r.left - 12, window.innerWidth - el.offsetWidth - 8)) + "px";
    const below = r.bottom + 8;
    el.style.top = (below + el.offsetHeight > window.innerHeight - 8 ? r.top - el.offsetHeight - 8 : below) + "px";
    const onDown = (e) => {
      if (e.target instanceof Node && (el.contains(e.target) || icon.contains(e.target))) return;
      this.closeHelp();
    };
    const onKey = (e) => {
      if (e.key === "Escape") this.closeHelp();
    };
    const onScroll = () => this.closeHelp();
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("keydown", onKey, true);
    document.addEventListener("scroll", onScroll, true);
    this.helpCleanup = () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("keydown", onKey, true);
      document.removeEventListener("scroll", onScroll, true);
    };
  }
  /** Redraw when the rows themselves change, which resetting a value color
   *  does. Obsidian 1.13 rebuilds the tab from getSettingDefinitions(); older
   *  builds have only the fallback renderer. */
  refresh() {
    this.closeHelp();
    const tab = this;
    if (tab.update) tab.update();
    else this.renderFallback();
  }
  /** A small help icon after the name; no aria-label, or Obsidian's native
   *  black tooltip doubles up with the popover. */
  addHelp(st, text) {
    const ic = st.nameEl.createSpan({ cls: "pb-setting-help" });
    (0, import_obsidian.setIcon)(ic, "help-circle");
    ic.addEventListener("mouseenter", () => this.openHelp(ic, text, false));
    ic.addEventListener("mouseleave", () => {
      if (!this.helpPinned && this.helpAnchor === ic) this.closeHelp();
    });
    ic.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.helpPinned && this.helpAnchor === ic) this.closeHelp();
      else this.openHelp(ic, text, true);
    });
  }
  /** Obsidian 1.13 and up builds the tab from these and never calls display():
   *  one native page per tab, standing in for the tab bar the fallback draws
   *  for older builds. A tab holding more than one section becomes a page of
   *  headed groups, which is what the headings were doing by hand.
   *
   *  Every row renders itself rather than declaring a `control`. A declarative
   *  control writes through Obsidian's generic setControlValue, which would
   *  bypass persistSettings and overwrite whatever another device changed. */
  getSettingDefinitions() {
    const pages = this.buildPages();
    const rowsOf = new Map(pages.map((p) => [p.label, p.groups.flatMap((g) => g.rows)]));
    return [
      {
        name: "",
        searchable: false,
        // it is a masthead, not a setting
        render: (st) => {
          st.settingEl.empty();
          this.renderAbout(st.settingEl);
        }
      },
      {
        type: "group",
        search: {
          placeholder: "Search settings...",
          // the entries here are whole tabs, so a tab stays up when anything
          // inside it matches. Obsidian's own search box, top left, reaches
          // the individual settings.
          match: (def, query) => {
            const q = query.trim().toLowerCase();
            if (!q) return true;
            const has = (v) => (v ?? "").toLowerCase().includes(q);
            return (rowsOf.get(def.name) ?? []).some(
              (r) => has(r.name) || has(r.desc) || (r.aliases ?? []).some(has)
            );
          }
        },
        items: pages.map(
          (p) => ({
            type: "page",
            name: p.label,
            // a lone unnamed section is the page itself, so it stays flat
            items: p.groups.length === 1 && !p.groups[0].heading ? p.groups[0].rows.map((r) => this.toDefinition(r, p.label)) : p.groups.map((g) => ({
              type: "group",
              heading: g.heading,
              items: g.rows.map((r) => this.toDefinition(r, p.label))
            }))
          })
        )
      }
    ];
  }
  /** One row as a definition Obsidian can draw. The name and description are
   *  its to render and it rebuilds both on a redraw, so a row only hands back
   *  what it hung on the row element itself. */
  toDefinition(r, page) {
    return {
      name: r.name,
      desc: r.desc,
      // searching the tab name still finds its rows, the way a heading match
      // opened the whole section in the tab bar
      aliases: [...r.aliases ?? [], page],
      render: (st) => {
        const teardown = r.build?.(st);
        if (r.help) this.addHelp(st, r.help);
        return teardown;
      }
    };
  }
  /** What this plugin is and which build is running, above the section list.
   *  Read off the manifest so it cannot drift from the released version. */
  renderAbout(el) {
    el.addClass("pb-about");
    const head = el.createDiv({ cls: "pb-about-head" });
    head.createSpan({ cls: "pb-about-name", text: this.plugin.manifest.name });
    head.createSpan({ cls: "pb-about-version", text: "v" + this.plugin.manifest.version });
    el.createDiv({ cls: "pb-about-desc", text: this.plugin.manifest.description });
    const support = el.createDiv({ cls: "pb-about-support" });
    support.createEl("a", { text: "Buy me a coffee", href: "https://buymeacoffee.com/powerplugins" });
    support.createSpan({
      text: `. One page covers every Power Plugin, so mention ${this.plugin.manifest.name} in the note, and say what would make it better while you are there. A good deal of what is in these plugins started as someone's note.`
    });
  }
  /** The pre-1.13 renderer: every section on one page, with a tab bar and a
   *  search box of our own because there was no declarative API to hand the
   *  work to. Obsidian 1.13 and up ignores this and renders the definitions
   *  above instead, so the two only ever differ in how they draw, never in
   *  what they draw. */
  display() {
    this.renderFallback();
  }
  renderFallback() {
    const root = this.containerEl;
    root.empty();
    this.closeHelp();
    const pages = this.buildPages();
    if (!pages.some((p) => p.id === this.activeTab)) this.activeTab = pages[0].id;
    this.renderAbout(root.createDiv({ cls: "pb-about-standalone" }));
    const searchWrap = root.createDiv({ cls: "pb-settings-search" });
    const searchInput = searchWrap.createEl("input", { cls: "pb-settings-search-input" });
    searchInput.type = "search";
    searchInput.placeholder = "Search settings...";
    searchInput.value = this.query;
    const tabBar = root.createDiv({ cls: "pb-settings-tabs" });
    const body = root.createDiv({ cls: "pb-settings-body" });
    for (const p of pages) {
      for (const g of p.groups) {
        const sec = body.createDiv({ cls: "pb-settings-section" });
        sec.dataset.tab = p.id;
        sec.dataset.name = (g.heading ?? p.label).toLowerCase();
        new import_obsidian.Setting(sec).setName(g.heading ?? p.label).setHeading();
        for (const r of g.rows) {
          const st = new import_obsidian.Setting(sec).setName(r.name);
          if (r.desc) st.setDesc(r.desc);
          if (r.aliases?.length) st.settingEl.dataset.pbAlias = r.aliases.join(" ").toLowerCase();
          r.build?.(st);
          if (r.help) this.addHelp(st, r.help);
        }
      }
    }
    const setVisible = (el, v) => el.style.display = v ? "" : "none";
    const applyView = () => {
      const q = this.query.trim().toLowerCase();
      setVisible(tabBar, !q);
      for (const sec of Array.from(body.children)) {
        const items = Array.from(sec.querySelectorAll(":scope > .setting-item:not(.setting-item-heading)"));
        if (!q) {
          for (const it of items) setVisible(it, true);
          setVisible(sec, sec.dataset.tab === this.activeTab);
          continue;
        }
        const nameHit = (sec.dataset.name ?? "").includes(q);
        let anyHit = false;
        for (const it of items) {
          const name = it.querySelector(".setting-item-name")?.textContent?.toLowerCase() ?? "";
          const desc = it.querySelector(".setting-item-description")?.textContent?.toLowerCase() ?? "";
          const hit = nameHit || name.includes(q) || desc.includes(q) || (it.dataset.pbAlias ?? "").includes(q);
          setVisible(it, hit);
          if (hit) anyHit = true;
        }
        setVisible(sec, anyHit);
      }
    };
    for (const p of pages) {
      const btn = tabBar.createEl("button", { text: p.label, cls: "pb-settings-tab" });
      btn.toggleClass("is-active", p.id === this.activeTab);
      btn.onclick = () => {
        if (this.activeTab === p.id) return;
        this.activeTab = p.id;
        for (const other of Array.from(tabBar.children)) other.toggleClass("is-active", other === btn);
        applyView();
      };
    }
    searchInput.addEventListener("input", () => {
      this.query = searchInput.value;
      applyView();
    });
    applyView();
  }
  /** Every row of the settings tab, in order, as plain data: the one source
   *  both renderers draw from, so they cannot drift apart. Built fresh on each
   *  render because the color list is live state. */
  buildPages() {
    const s = this.plugin.settings;
    const save = () => void this.plugin.persistSettings();
    const notifications = [
      {
        name: "Show notifications",
        desc: "Show popup notices from Power Bases. Turn off to keep Obsidian clear, especially on phones.",
        help: "When off, Power Bases suppresses every popup notice, including progress, success, warning, and error notices.",
        build: (st) => {
          st.addToggle((t) => t.setValue(s.showNotifications).onChange((v) => (s.showNotifications = v, save())));
        }
      }
    ];
    const newBases = [
      {
        name: "Folder for embedded bases",
        desc: "Where /base drops the .base file inside a note.",
        help: "Empty uses your Obsidian attachment location. Point it at a folder like _resources/bases to keep embedded bases out of the way. Bases created from a folder's right-click menu ignore this and stay in the folder you clicked.",
        build: (st) => {
          st.addText(
            (t) => t.setPlaceholder("attachment location").setValue(s.basesFolder).onChange((v) => {
              s.basesFolder = v;
              save();
            })
          );
        }
      }
    ];
    const identity = [
      {
        name: "Your name",
        desc: "Who this vault's edits belong to.",
        help: "Written into created-by and edited-by when the stamp below is on. On a shared or synced vault, this is how a row records who touched it.",
        build: (st) => {
          st.addText(
            (t) => t.setPlaceholder("Your name or initials").setValue(s.myName).onChange((v) => {
              s.myName = v;
              save();
            })
          );
        }
      },
      {
        name: "Stamp changes with your name",
        desc: "Record created and edited, and by whom, on rows.",
        help: "Every change through a Power view writes edited and edited-by onto the row; rows Power Bases creates (a lane's + New page, calendar double-clicks, CSV rows, templates) also get created and created-by. Add those as columns for Notion's Created by and Last edited by. Edits made outside Power Bases are not tracked, and the stamps ride the same undo as the change.",
        build: (st) => {
          st.addToggle(
            (t) => t.setValue(s.stampEdits).onChange((v) => {
              s.stampEdits = v;
              save();
            })
          );
        }
      }
    ];
    const placeFields = [
      {
        name: "Address autocomplete",
        desc: "Suggest addresses in Place cells, using OpenStreetMap.",
        help: "As you type in a Place cell, this sends the text to OpenStreetMap (Nominatim) to suggest real addresses. Turn it off to keep Place fully offline: free text plus a Google Maps link. The address is stored as plain text either way.",
        build: (st) => {
          st.addToggle(
            (t) => t.setValue(s.placeAutocomplete).onChange((v) => {
              s.placeAutocomplete = v;
              save();
            })
          );
        }
      }
    ];
    const colorGroups = [
      {
        rows: [
          {
            name: "",
            aliases: ["value colors", "clear all value colors"],
            build: (st) => {
              const host = st.settingEl;
              host.empty();
              host.addClass("pb-colors-host");
              const keys = Object.keys(s.valueColors);
              if (!keys.length) {
                host.createEl("p", {
                  cls: "pb-modal-desc",
                  text: "None yet. Right-click a board lane header or a colored table cell to pick a color; your choices are shared across every view and listed here."
                });
                return;
              }
              for (const fmKey of keys.sort()) {
                new import_obsidian.Setting(host).setName(fmKey).setHeading();
                for (const [value, hex] of Object.entries(s.valueColors[fmKey])) {
                  const row = new import_obsidian.Setting(host).setName(value);
                  const dot = row.nameEl.createSpan({ cls: "pb-set-dot" });
                  dot.style.background = hex;
                  row.nameEl.prepend(dot);
                  row.addButton(
                    (b) => b.setIcon("rotate-ccw").setTooltip("Reset to automatic").onClick(async () => {
                      await this.plugin.setValueColor(fmKey, value, null);
                      this.plugin.repaintAll();
                      this.refresh();
                    })
                  );
                }
              }
              const clear = new import_obsidian.Setting(host).setName("Clear all value colors");
              this.addHelp(clear, "Forget every hand-picked value color across the whole vault; values fall back to their automatic hashed hues. Cannot be undone.");
              clear.addButton(
                (b) => markDestructive(b).setButtonText("Clear all").onClick(() => {
                  s.valueColors = {};
                  save();
                  this.plugin.repaintAll();
                  this.refresh();
                })
              );
            }
          }
        ]
      }
    ];
    return [
      {
        id: "general",
        label: "General",
        groups: [
          { heading: "Notifications", rows: notifications },
          { heading: "New bases", rows: newBases },
          { heading: "Identity", rows: identity }
        ]
      },
      { id: "fields", label: "Fields", groups: [{ heading: "Place fields", rows: placeFields }] },
      { id: "colors", label: "Colors", groups: colorGroups }
    ];
  }
};
function fillValueColorMenu(menu, plugin, fmKey, value, onDone) {
  const current = plugin.settings.valueColors[fmKey]?.[value] ?? null;
  for (const [name, hex] of NAMED_PALETTE) {
    menu.addItem((item) => {
      const title = createFragment((frag) => {
        const dot = frag.createSpan();
        dot.setText("\u25CF ");
        dot.style.color = hex;
        frag.appendText(name + (current === hex ? " \u2713" : ""));
      });
      item.setTitle(title).onClick(async () => {
        await plugin.setValueColor(fmKey, value, hex);
        onDone();
      });
    });
  }
  menu.addItem(
    (item) => item.setTitle("Automatic" + (current == null ? " \u2713" : "")).setIcon("rotate-ccw").onClick(async () => {
      await plugin.setValueColor(fmKey, value, null);
      onDone();
    })
  );
}
var PowerBasesPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    /** The settings as they last stood on disk, read or written by us. Whatever
     *  differs from this in memory is OUR change, and only those keys may
     *  overwrite a synced data.json; see persistSettings(). */
    this.baseline = DEFAULT_SETTINGS;
    /** Every mounted Power Bases view, so a settings change can repaint them. */
    this.liveViews = /* @__PURE__ */ new Set();
    /** The last view the user touched, for copy/paste of view config. */
    this.lastActiveView = null;
    /** Copied view config, kept in memory across bases within the session. */
    this.configClip = null;
    this.journal = [];
  }
  /** The option keys that define a view's look, per type. Table and board
   *  include per-column keys derived from the visible order. */
  viewConfigKeys(view) {
    const order = view.config.getOrder();
    switch (view.type) {
      case "powerbases-board":
        return ["pbGroup", "pbRows", "rankProp", "showEmpty", "pbAggProp", "pbAggOp", "cardProps", "pb-colOrder", "pb-rules", "pb-wip", "pb-templates"];
      case "powerbases-table":
        return [
          "pbRankProp",
          "pbRank",
          ...order.flatMap((p) => ["agg:" + p, "color:" + p]),
          ...[1, 2, 3].flatMap((n) => [`ru${n}:link`, `ru${n}:target`, `ru${n}:op`, `ru${n}:dir`])
        ];
      case "powerbases-calendar":
        return ["dateProp", "calMode", "weekStart"];
      case "powerbases-timeline":
        return ["startProp", "endProp", "colorProp", "milestoneProp", "progressProp", "depProp", "zoom"];
      case "powerbases-chart":
        return ["chartType", "groupProp", "chartAgg", "valueProp", "sortValue"];
      case "powerbases-gallery":
        return ["imageProp", "cardSize", "fitCover"];
      default:
        return [];
    }
  }
  copyViewConfig() {
    const v = this.lastActiveView;
    if (!v || !this.liveViews.has(v)) {
      new Notice("Power Bases: click a Power view first, then copy its setup.");
      return;
    }
    const values = {};
    for (const k of this.viewConfigKeys(v)) {
      const val = v.config.get(k);
      if (val !== void 0 && val !== null) values[k] = val;
    }
    this.configClip = { type: v.type, values };
    new Notice(`Power Bases: copied this ${v.config.name || "view"} setup. Open another and paste.`);
  }
  pasteViewConfig() {
    const v = this.lastActiveView;
    if (!v || !this.liveViews.has(v)) {
      new Notice("Power Bases: click the Power view to paste into first.");
      return;
    }
    if (!this.configClip) {
      new Notice("Power Bases: nothing copied yet.");
      return;
    }
    if (this.configClip.type !== v.type) {
      new Notice("Power Bases: that setup was copied from a different view type.");
      return;
    }
    const keys = new Set(this.viewConfigKeys(v));
    for (const k of keys) v.config.set(k, this.configClip.values[k] ?? null);
    v.onDataUpdated();
    new Notice("Power Bases: setup pasted.");
  }
  /** Repaint every open Power Bases view (after a value-color change). */
  repaintAll() {
    for (const v of this.liveViews) {
      try {
        v.onDataUpdated();
      } catch {
      }
    }
  }
  /** The hue for a value: the user's chosen color when one is stored for
   *  this frontmatter key, else a stable hash into the palette. */
  hueFor(fmKey, value) {
    if (fmKey) {
      const chosen = this.settings.valueColors[fmKey]?.[value];
      if (chosen) return chosen;
    }
    return PALETTE[colorIndex(value, PALETTE.length)];
  }
  async setValueColor(fmKey, value, hex) {
    const m = this.settings.valueColors;
    if (hex) (m[fmKey] ?? (m[fmKey] = {}))[value] = hex;
    else if (m[fmKey]) {
      delete m[fmKey][value];
      if (!Object.keys(m[fmKey]).length) delete m[fmKey];
    }
    await this.persistSettings();
  }
  /* ----- Power-Base field types (global by frontmatter key) ----- */
  fieldType(fmKey) {
    return this.settings.fields[fmKey]?.type ?? null;
  }
  fieldConfig(fmKey) {
    return this.settings.fields[fmKey] ?? null;
  }
  async setFieldType(fmKey, type) {
    if (type) {
      const cur = this.settings.fields[fmKey];
      this.settings.fields[fmKey] = cur ? { ...cur, type } : { type };
    } else {
      delete this.settings.fields[fmKey];
    }
    await this.persistSettings();
    this.refreshAll();
  }
  async saveFieldConfig(fmKey, cfg) {
    this.settings.fields[fmKey] = cfg;
    await this.persistSettings();
    this.refreshAll();
  }
  /* ----- number + date formats (global by property id) ----- */
  numberFormat(propId) {
    return this.settings.formats[propId] ?? null;
  }
  dateFormat(propId) {
    return this.settings.dateFormats[propId] ?? null;
  }
  phoneFormat(propId) {
    return this.settings.phoneFormats[propId] ?? null;
  }
  /** Apply (or clear) one number format across a set of columns, as one save. */
  async applyNumberFormat(propIds, fmt) {
    for (const id of propIds) {
      if (fmt && hasNumberFormat(fmt)) this.settings.formats[id] = fmt;
      else delete this.settings.formats[id];
    }
    await this.persistSettings();
    this.refreshAll();
  }
  /** Apply (or clear) one date format across a set of columns, as one save. */
  async applyDateFormat(propIds, fmt) {
    for (const id of propIds) {
      if (fmt && hasDateFormat(fmt)) this.settings.dateFormats[id] = fmt;
      else delete this.settings.dateFormats[id];
    }
    await this.persistSettings();
    this.refreshAll();
  }
  /** Apply (or clear) one phone display style across a set of columns, as one save. */
  async applyPhoneFormat(propIds, fmt) {
    for (const id of propIds) {
      if (fmt && hasPhoneFormat(fmt)) this.settings.phoneFormats[id] = fmt;
      else delete this.settings.phoneFormats[id];
    }
    await this.persistSettings();
    this.refreshAll();
  }
  /** Carry a column's saved state (field type, formats, value colors) over to
   *  its new name when a column is renamed. */
  async renameSettings(oldName, newName, oldId, newId) {
    const move = (m, a, b) => {
      if (m[a] !== void 0) {
        m[b] = m[a];
        delete m[a];
      }
    };
    move(this.settings.fields, oldName, newName);
    move(this.settings.valueColors, oldName, newName);
    move(this.settings.kinds, oldName, newName);
    move(this.settings.formats, oldId, newId);
    move(this.settings.dateFormats, oldId, newId);
    move(this.settings.phoneFormats, oldId, newId);
    await this.persistSettings();
  }
  /** Repaint every open Power view (after a type or config change). */
  refreshAll() {
    for (const v of this.liveViews) v.onDataUpdated();
  }
  /** The editor kind chosen when a column was added (Power-Base's own record,
   *  so it works even when Obsidian's undocumented type registry does not). */
  storedKind(fmKey) {
    return this.settings.kinds[fmKey] ?? null;
  }
  async setStoredKind(fmKey, kind) {
    if (kind) this.settings.kinds[fmKey] = kind;
    else delete this.settings.kinds[fmKey];
    await this.persistSettings();
  }
  /** Obsidian's assigned property type, when the (undocumented) registry is
   *  around; used only when a note lacks the property so raw inference fails. */
  assignedKind(fmKey) {
    const mtm = this.app.metadataTypeManager;
    const t = mtm?.getAssignedType?.(fmKey);
    if (t === "number") return "number";
    if (t === "checkbox") return "checkbox";
    if (t === "date") return "date";
    if (t === "datetime") return "datetime";
    if (t === "multitext" || t === "tags" || t === "aliases") return "list";
    return t ? "text" : null;
  }
  async loadSettings() {
    const saved = await this.loadData();
    const next = Object.assign({}, DEFAULT_SETTINGS, saved);
    if (this.settings && this.settings !== DEFAULT_SETTINGS) Object.assign(this.settings, next);
    else this.settings = next;
    this.baseline = structuredClone(this.settings);
  }
  /**
   * The one write path, and it merges rather than overwrites.
   *
   * data.json is synced, so this file belongs to every device at once. Writing
   * memory wholesale reverts whatever another device changed since this one last
   * read it, and a setting nothing rewrites afterwards never comes back from
   * that. Re-read, and carry only what WE changed.
   *
   * Every settings write goes through here. Eleven of them wrote the whole
   * object straight out before, the most of any of these plugins, which is
   * eleven chances to revert another device. Three outlived the first sweep
   * (the settings tab, CSV import, and template generate), so if you are
   * adding a write: grep saveData( before believing this line.
   */
  async persistSettings() {
    const disk = await this.loadData();
    Object.assign(this.settings, mergeForSave(this.settings, this.baseline, disk));
    await this.saveData(this.settings);
    this.baseline = structuredClone(this.settings);
  }
  /** Obsidian calls this when Sync lands another device's write. Adopting it
   *  keeps this device from holding a stale snapshot it would later write back. */
  async onExternalSettingsChange() {
    await this.loadSettings();
  }
  async onload() {
    await this.loadSettings();
    pluginNoticesEnabled = () => this.settings.showNotifications;
    const ws = this.app.workspace;
    ws.registerHoverLinkSource?.("powerbases", { display: "Power Bases", defaultMod: true });
    this.register(() => ws.unregisterHoverLinkSource?.("powerbases"));
    if (typeof this.registerBasesView !== "function") {
      new Notice("Power Bases needs Obsidian 1.10 or newer (the Bases views API).", 1e4);
      return;
    }
    const results = [
      this.registerBasesView("powerbases-board", {
        name: "Power Board",
        icon: "square-kanban",
        factory: (controller, containerEl) => new PowerBoardView(this, controller, containerEl),
        options: () => [
          {
            // NOT "groupBy": that key is reserved in Bases view entries
            // (the built-in grouping object) and a string there makes
            // the whole .base file unparseable
            type: "property",
            key: "pbGroup",
            displayName: "Group by",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "pbRows",
            displayName: "Swimlane rows (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "rankProp",
            displayName: "Manual order property",
            filter: (p) => p.startsWith("note.")
          },
          { type: "toggle", key: "showEmpty", displayName: "Show a lane for missing values", default: true },
          {
            type: "property",
            key: "pbAggProp",
            displayName: "Lane totals property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "dropdown",
            key: "pbAggOp",
            displayName: "Lane totals aggregate",
            default: "sum",
            options: { sum: "Sum", avg: "Average", min: "Min", max: "Max", filled: "Filled" }
          },
          {
            type: "dropdown",
            key: "cardProps",
            displayName: "Properties per card",
            default: "3",
            options: { "0": "None", "1": "1", "2": "2", "3": "3", "4": "4", "6": "6" }
          }
        ]
      }),
      this.registerBasesView("powerbases-calendar", {
        name: "Calendar",
        icon: "calendar-days",
        factory: (controller, containerEl) => new PowerCalendarView(this, controller, containerEl),
        options: () => [
          {
            type: "property",
            key: "dateProp",
            displayName: "Date property",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "dropdown",
            key: "calMode",
            displayName: "Show",
            default: "month",
            options: { month: "Month", week: "Week" }
          },
          {
            type: "dropdown",
            key: "weekStart",
            displayName: "Week starts on",
            default: "monday",
            options: { monday: "Monday", sunday: "Sunday" }
          }
        ]
      }),
      this.registerBasesView("powerbases-table", {
        name: "Power Table",
        icon: "sigma",
        factory: (controller, containerEl) => new PowerTableView(this, controller, containerEl),
        options: (config) => {
          const per = (prefix, opts) => config.getOrder().map((p) => ({
            type: "dropdown",
            key: prefix + p,
            displayName: config.getDisplayName(p),
            default: "none",
            options: opts
          }));
          const rollupSlot = (n) => ({
            type: "group",
            displayName: "Rollup " + n,
            items: [
              {
                type: "property",
                key: `ru${n}:link`,
                displayName: "Link property",
                filter: (p) => p.startsWith("note.")
              },
              {
                type: "property",
                key: `ru${n}:target`,
                displayName: "Property on linked notes",
                filter: (p) => p.startsWith("note.")
              },
              {
                type: "dropdown",
                key: `ru${n}:op`,
                displayName: "Aggregate",
                default: "count",
                options: {
                  count: "Count links",
                  sum: "Sum",
                  avg: "Average",
                  min: "Min",
                  max: "Max",
                  filled: "Filled",
                  list: "List values"
                }
              },
              {
                type: "dropdown",
                key: `ru${n}:dir`,
                displayName: "Direction",
                default: "from",
                options: { from: "Links on this page", to: "Pages linking here" }
              }
            ]
          });
          return [
            {
              type: "property",
              key: "pbRankProp",
              displayName: "Manual order property",
              filter: (p) => p.startsWith("note.")
            },
            {
              type: "group",
              displayName: "Summary row",
              items: per("agg:", {
                none: "None",
                sum: "Sum",
                avg: "Average",
                min: "Min",
                max: "Max",
                filled: "Filled",
                empty: "Empty"
              })
            },
            {
              type: "group",
              displayName: "Column colors",
              items: per("color:", { none: "None", value: "By value", scale: "Number scale" })
            },
            rollupSlot(1),
            rollupSlot(2),
            rollupSlot(3)
          ];
        }
      }),
      this.registerBasesView("powerbases-timeline", {
        name: "Power Timeline",
        icon: "calendar-range",
        factory: (controller, containerEl) => new PowerTimelineView(this, controller, containerEl),
        options: () => [
          {
            type: "property",
            key: "startProp",
            displayName: "Start date property",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "endProp",
            displayName: "End date property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "colorProp",
            displayName: "Color bars by (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "milestoneProp",
            displayName: "Milestone property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "progressProp",
            displayName: "Progress property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "property",
            key: "depProp",
            displayName: "Depends-on property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "dropdown",
            key: "zoom",
            displayName: "Zoom",
            default: "week",
            options: { day: "Days", week: "Weeks", month: "Months" }
          }
        ]
      }),
      this.registerBasesView("powerbases-chart", {
        name: "Power Chart",
        icon: "chart-column",
        factory: (controller, containerEl) => new PowerChartView(this, controller, containerEl),
        options: () => [
          {
            type: "dropdown",
            key: "chartType",
            displayName: "Chart",
            default: "bar",
            options: { bar: "Bar", line: "Line", donut: "Donut" }
          },
          {
            type: "property",
            key: "groupProp",
            displayName: "Group by",
            filter: (p) => p.startsWith("note.") || p === "file.name"
          },
          {
            type: "dropdown",
            key: "chartAgg",
            displayName: "Measure",
            default: "count",
            options: { count: "Count", sum: "Sum", avg: "Average", min: "Min", max: "Max" }
          },
          {
            type: "property",
            key: "valueProp",
            displayName: "Measure property (for sum/avg/...)",
            filter: (p) => p.startsWith("note.")
          },
          { type: "toggle", key: "sortValue", displayName: "Sort bars by value", default: false }
        ]
      }),
      this.registerBasesView("powerbases-gallery", {
        name: "Power Gallery",
        icon: "layout-grid",
        factory: (controller, containerEl) => new PowerGalleryView(this, controller, containerEl),
        options: () => [
          {
            type: "property",
            key: "imageProp",
            displayName: "Image property (optional)",
            filter: (p) => p.startsWith("note.")
          },
          {
            type: "dropdown",
            key: "cardSize",
            displayName: "Card size",
            default: "medium",
            options: { small: "Small", medium: "Medium", large: "Large" }
          },
          { type: "toggle", key: "fitCover", displayName: "Crop covers to fill", default: true }
        ]
      })
    ];
    if (results.some((ok) => !ok)) {
      new Notice("Power Bases: turn on the Bases core plugin to use the new views.", 1e4);
    }
    this.addCommand({
      id: "undo-last-change",
      icon: "undo-2",
      name: "Undo last change",
      callback: () => void this.undoLast()
    });
    this.addCommand({
      id: "new-base-here",
      icon: "database",
      name: "New Power base for the current note's folder",
      callback: () => {
        const f = this.app.workspace.getActiveFile();
        void this.createStarterBase(f?.parent ?? this.app.vault.getRoot());
      }
    });
    this.addCommand({
      id: "new-blank-base-here",
      icon: "database",
      name: "New blank base for the current note's folder",
      callback: () => {
        const f = this.app.workspace.getActiveFile();
        void this.createBlankBase(f?.parent ?? this.app.vault.getRoot());
      }
    });
    this.addCommand({
      id: "insert-base-embed",
      icon: "table",
      name: "Insert new base here (embed)",
      editorCallback: (editor) => void this.insertBaseEmbed(editor)
    });
    this.addCommand({
      id: "delete-this-base",
      icon: "trash-2",
      name: "Delete this base file (to trash)",
      callback: () => void this.deleteActiveBase()
    });
    this.addCommand({
      id: "export-table-csv",
      icon: "download",
      name: "Export this table as CSV",
      callback: () => {
        const v = this.lastActiveView;
        if (v instanceof PowerTableView) void v.exportCsv();
        else new Notice("Power Bases: click into a Power Table first, then run this again.");
      }
    });
    this.addCommand({
      id: "new-base-from-template",
      icon: "file-plus-2",
      name: "New base from a template",
      callback: () => {
        const f = this.app.workspace.getActiveFile();
        new TemplateModal(this.app, this, f?.parent ?? this.app.vault.getRoot()).open();
      }
    });
    this.addCommand({
      id: "import-csv",
      icon: "upload",
      name: "Import a CSV as a new base",
      callback: () => {
        const f = this.app.workspace.getActiveFile();
        new CsvImportModal(this.app, this, f?.parent ?? this.app.vault.getRoot()).open();
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof import_obsidian.TFolder)) return;
        menu.addItem(
          (item) => item.setTitle("New Power base here").setIcon("layout-dashboard").onClick(() => void this.createStarterBase(file))
        );
        menu.addItem(
          (item) => item.setTitle("New blank base here").setIcon("table").onClick(() => void this.createBlankBase(file))
        );
        menu.addItem(
          (item) => item.setTitle("New base from template here").setIcon("layout-template").onClick(() => new TemplateModal(this.app, this, file).open())
        );
        menu.addItem(
          (item) => item.setTitle("Import CSV here").setIcon("download").onClick(() => new CsvImportModal(this.app, this, file).open())
        );
      })
    );
    this.addCommand({ id: "copy-view-config", icon: "copy", name: "Copy this view's setup", callback: () => this.copyViewConfig() });
    this.addCommand({ id: "paste-view-config", icon: "clipboard-paste", name: "Paste view setup here", callback: () => this.pasteViewConfig() });
    this.addSettingTab(new PowerBasesSettingTab(this));
  }
  /* ----- one write path, one undo journal ----- */
  /** The edited/edited-by assignments when identity stamping is on, else null. */
  editStamps() {
    const name = this.settings.myName.trim();
    if (!this.settings.stampEdits || !name) return null;
    return { "edited-by": name, edited: localDateString(Date.now()) };
  }
  /** Stamp created/created-by onto a page the plugin creates (values already
   *  in the frontmatter win, e.g. a CSV column or template of the same name). */
  stampCreate(fm) {
    const s = this.editStamps();
    if (!s) return;
    if (fm["created-by"] === void 0) fm["created-by"] = s["edited-by"];
    if (fm["created"] === void 0) fm["created"] = s.edited;
  }
  /** Apply property assignments to a set of files as ONE undoable change.
   *  Previous values are captured inside the same frontmatter transaction;
   *  a toast offers Undo, and the command palette can undo the last 30.
   *  With identity stamping on, every write also carries edited/edited-by
   *  (an explicit assignment of those keys wins); undo restores the stamps'
   *  prior values too, since they ride the same capture. */
  async writeBatch(label, writes) {
    const stamps = this.editStamps();
    const changes = [];
    for (const w of writes) {
      if (!Object.keys(w.assignments).length) continue;
      const assignments = stamps ? { ...stamps, ...w.assignments } : w.assignments;
      await this.app.fileManager.processFrontMatter(w.file, (fm) => {
        changes.push({ path: w.file.path, prev: capturePrev(fm, Object.keys(assignments)) });
        for (const [k, v] of Object.entries(assignments)) {
          if (v === void 0) delete fm[k];
          else fm[k] = v;
        }
      });
    }
    if (!changes.length) return;
    this.journal.push({ label, changes });
    if (this.journal.length > 30) this.journal.shift();
    this.undoToast(label);
  }
  undoToast(label) {
    let btn;
    const frag = createFragment((f) => {
      f.appendText(label + "  ");
      btn = f.createEl("a", { cls: "pb-undo-link", text: "Undo" });
    });
    const notice = new Notice(frag, 6e3);
    btn.addEventListener("click", () => {
      notice.hide();
      void this.undoLast();
    });
  }
  async undoLast() {
    const entry = this.journal.pop();
    if (!entry) {
      new Notice("Power Bases: nothing to undo.");
      return;
    }
    for (const c of entry.changes) {
      const f = this.app.vault.getAbstractFileByPath(c.path);
      if (!(f instanceof import_obsidian.TFile)) continue;
      await this.app.fileManager.processFrontMatter(f, (fm) => {
        for (const [k, v] of Object.entries(c.prev)) {
          if (v === void 0) delete fm[k];
          else fm[k] = v;
        }
      });
    }
    new Notice("Undone: " + entry.label);
  }
  /**
   * The main-area tab already showing this path, if there is one.
   *
   * Asked through `getViewState()` rather than `leaf.view.file`, because every
   * tab you are not standing in is deferred since 1.7.2: its view is a stand-in
   * that holds no file, and reaching for one to ask would load every tab in the
   * window. The view state carries the path whether the view is real or not.
   *
   * Main-area leaves only. A note showing in a sidebar is not a tab, and a note
   * deliberately popped out into a window of its own should not have a click in
   * a base pulling focus to another window behind your back.
   */
  openLeafFor(path) {
    const hits = [];
    this.app.workspace.iterateRootLeaves((leaf) => {
      const open = leaf.getViewState().state?.file;
      if (typeof open === "string" && open === path) hits.push(leaf);
    });
    return hits[0] ?? null;
  }
  /**
   * Step to the tab already holding this path, if there is one.
   *
   * The open itself is left to the caller, so an `openLinkText` that follows
   * lands in the tab this just made active. That is how a file-link cell keeps
   * Obsidian's own subpath handling and still stops short of a second copy.
   */
  async focusOpenTab(path) {
    const open = this.openLeafFor(path);
    if (!open) return;
    await this.app.workspace.revealLeaf(open);
    this.app.workspace.setActiveLeaf(open, { focus: true });
  }
  /**
   * Show a note: step to the tab already holding it, or open it where you are.
   *
   * `getLeaf(false)` means "the tab I am standing in" and knows nothing about
   * the tab the note is already open in, so opening a row from a base while
   * standing anywhere else hands you a second copy of it: two scroll positions,
   * two undo histories, and edits landing in whichever one you looked at last.
   * A row should navigate to its note, not clone it. Ctrl/Cmd still asks for a
   * new tab on purpose, and that request is honored.
   */
  async showNote(f) {
    const open = this.openLeafFor(f.path);
    if (open) {
      await this.app.workspace.revealLeaf(open);
      this.app.workspace.setActiveLeaf(open, { focus: true });
      return open;
    }
    const leaf = this.app.workspace.getLeaf(false);
    await leaf.openFile(f);
    return leaf;
  }
  /** A ready-made base beside the folder's notes: the fixture, for real. */
  async createStarterBase(folder) {
    const prefix = folder.path === "/" ? "" : folder.path + "/";
    let name = (folder.path === "/" ? this.app.vault.getName() : folder.name) + " Base";
    for (let i = 2; this.app.vault.getAbstractFileByPath(prefix + name + ".base"); i++) {
      name = folder.name + " Base " + i;
    }
    const f = await this.app.vault.create(prefix + name + ".base", starterBaseYaml(folder.path === "/" ? "" : folder.path));
    await this.app.workspace.getLeaf(false).openFile(f);
    new Notice("Power Bases: board, table, calendar, and timeline ready. Adjust the properties to your notes.");
  }
  /** Trash the base file behind a view: the X on an embedded base, the
   *  command on the last Power view clicked, or the open .base tab. Only the
   *  definition file goes; the rows are notes and stay. From an embed, the
   *  note's embed line is removed too, so no dead placeholder is left. */
  async deleteActiveBase(view) {
    const v = view ?? this.lastActiveView;
    const active = this.app.workspace.getActiveFile();
    const file = v?.baseFile() ?? (active?.extension === "base" ? active : null);
    if (!file) {
      new Notice("Power Bases: click into the base you want deleted, then run this again.");
      return;
    }
    const embed = v?.embedInfo() ?? null;
    new ConfirmModal(this.app, {
      title: `Delete "${file.name}"?`,
      body: "Only the base file goes to the trash: its views, filters, and formulas. The notes shown as rows are untouched." + (embed ? ` The embed line in "${embed.host.basename}" is removed too.` : ""),
      confirmText: "Delete",
      onConfirm: () => {
        void (async () => {
          if (embed) {
            const needle = `![[${embed.src}]]`;
            await this.app.vault.process(embed.host, (data) => {
              const out = [];
              for (const l of data.split("\n")) {
                if (!l.includes(needle)) {
                  out.push(l);
                  continue;
                }
                const rest = l.replace(needle, "");
                if (rest.trim()) out.push(rest);
              }
              return out.join("\n");
            });
          }
          await this.app.fileManager.trashFile(file);
          new Notice(`Power Bases: "${file.name}" moved to trash.`);
        })();
      }
    }).open();
  }
  /** A blank base beside the folder's notes: one Power Table with just the
   *  name column, ready to build from scratch with + Column. */
  async createBlankBase(folder, open = true) {
    const prefix = folder.path === "/" ? "" : folder.path + "/";
    const stem = folder.path === "/" ? this.app.vault.getName() : folder.name;
    let name = stem + " Base";
    for (let i = 2; this.app.vault.getAbstractFileByPath(prefix + name + ".base"); i++) {
      name = stem + " Base " + i;
    }
    const f = await this.app.vault.create(prefix + name + ".base", blankBaseYaml(folder.path === "/" ? "" : folder.path));
    if (open) {
      await this.app.workspace.getLeaf(false).openFile(f);
      new Notice("Power Bases: blank base ready. Use + Column to build it.");
    }
    return f;
  }
  /** From inside a note: create a blank base and embed it at the cursor, so
   *  building a database never leaves the page. The .base file (a small YAML
   *  definition, the rows stay in notes) is named after the note and stored
   *  at the user's attachment location, like a pasted image; its SCOPE stays
   *  the note's folder, where the rows live. Starts with zero columns.
   *  Reachable from Power Editor's slash menu or the core Slash commands. */
  async insertBaseEmbed(editor) {
    const host = this.app.workspace.getActiveFile();
    const baseName = (host ? host.basename : "Untitled") + " Base";
    const cfgFolder = this.settings.basesFolder.trim().replace(/^\/+|\/+$/g, "");
    let path;
    if (cfgFolder) {
      await this.ensureFolder(cfgFolder);
      path = this.uniquePath(cfgFolder, baseName, ".base");
    } else {
      path = await this.app.fileManager.getAvailablePathForAttachment(baseName + ".base", host?.path ?? "");
      const parent = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
      await this.ensureFolder(parent);
    }
    const rowsFolder = path.slice(0, -".base".length);
    await this.ensureFolder(rowsFolder);
    const f = await this.app.vault.create(path, blankBaseYaml(rowsFolder, false));
    const link = this.app.metadataCache.fileToLinktext(f, host?.path ?? "");
    editor.replaceSelection(`![[${link}]]`);
    new Notice(`Power Bases: "${f.basename}" embedded. Use + Column to build it.`);
  }
  /* ----- shared creation helpers (CSV import, templates) ----- */
  /** Create a folder if it is missing (single level; parent must exist). */
  async ensureFolder(path) {
    if (path && !this.app.vault.getAbstractFileByPath(path)) {
      await this.app.vault.createFolder(path).catch(() => {
      });
    }
  }
  /** A non-colliding vault path for a new file. `folder` "" means the root. */
  uniquePath(folder, base, ext) {
    const prefix = folder ? folder + "/" : "";
    let name = base;
    for (let i = 2; this.app.vault.getAbstractFileByPath(prefix + name + ext); i++) name = base + " " + i;
    return prefix + name + ext;
  }
  /** Create a note with frontmatter (and optional body). */
  async createNote(folder, base, fm, body = "") {
    const f = await this.app.vault.create(this.uniquePath(folder, base, ".md"), body);
    if (Object.keys(fm).length || this.editStamps()) {
      await this.app.fileManager.processFrontMatter(f, (o) => {
        for (const [k, v] of Object.entries(fm)) o[k] = v;
        this.stampCreate(o);
      });
    }
    return f;
  }
  /** Create a .base file from YAML and open it. */
  async createBaseFile(folder, base, yaml) {
    const f = await this.app.vault.create(this.uniquePath(folder, base, ".base"), yaml);
    await this.app.workspace.getLeaf(false).openFile(f);
    return f;
  }
};
var PBView = class extends import_obsidian.BasesView {
  constructor(plugin, controller, containerEl) {
    super(controller);
    this.plugin = plugin;
    /** Type-to-filter text, persisted across repaints within the view. */
    this.query = "";
    /** Live chunk observers; disconnected and rebuilt each paint. */
    this.observers = [];
    this.rootEl = containerEl.createDiv({ cls: "pb-root" });
    this.plugin.liveViews.add(this);
    this.plugin.lastActiveView = this;
    this.rootEl.addEventListener("pointerdown", () => this.plugin.lastActiveView = this, { capture: true });
  }
  /** The .base file behind this view. Open in its own tab it is the active
   *  file. Embedded in a note, the view's DOM sits inside the embed wrapper,
   *  whose src attribute carries the base's link (with the right base even
   *  when a note embeds several), resolved against the host note. The
   *  controller's file is probed first in case a future API exposes it. An
   *  inline ```base code block has no file of its own, so this returns null
   *  there and file-backed editing stays off. */
  /** When this view lives inside a note's embed: the host note and the
   *  embed's exact link text (for removing the line on delete). */
  embedInfo() {
    const src = this.rootEl.closest(".internal-embed")?.getAttribute("src");
    const host = this.app.workspace.getActiveFile();
    return src && host && host.extension === "md" ? { host, src } : null;
  }
  baseFile() {
    const probe = this.controller?.file;
    if (probe instanceof import_obsidian.TFile && probe.extension === "base") return probe;
    const active = this.app.workspace.getActiveFile();
    if (active && active.extension === "base") return active;
    const src = this.rootEl.closest(".internal-embed")?.getAttribute("src");
    if (src) {
      const f = this.app.metadataCache.getFirstLinkpathDest(src.split("#")[0].trim(), active?.path ?? "");
      if (f instanceof import_obsidian.TFile && f.extension === "base") return f;
    }
    return null;
  }
  /** Stop every chunk observer from the previous paint. Call at the top of
   *  onDataUpdated before rebuilding. */
  resetChunkers() {
    for (const o of this.observers) o.disconnect();
    this.observers = [];
  }
  /** Render `items` into `host` in batches, extending as a sentinel nears
   *  the bottom of `scrollEl`. Keeps a 5,000-row folder from building every
   *  node up front, the Power-family promise at vault scale. */
  chunk(host, scrollEl, items, renderOne, size = 140, sentinelTag = "div") {
    let shown = 0;
    let sentinel = null;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) step();
      },
      { root: scrollEl, rootMargin: "320px" }
    );
    this.observers.push(io);
    const mkSentinel = () => sentinelTag === "tr" ? host.createEl("tr", { cls: "pb-sentinel" }).createEl("td", { cls: "pb-sentinel" }) : host.createDiv({ cls: "pb-sentinel" });
    const step = () => {
      if (sentinel) {
        io.unobserve(sentinel);
        (sentinelTag === "tr" ? sentinel.parentElement ?? sentinel : sentinel).remove();
        sentinel = null;
      }
      const end = Math.min(items.length, shown + size);
      for (; shown < end; shown++) renderOne(items[shown], shown);
      if (shown < items.length) {
        sentinel = mkSentinel();
        io.observe(sentinel);
      }
    };
    step();
  }
  /** A search box that drives this.query and repaints; returns the input so
   *  callers can autofocus. Placed in a header row. */
  filterBox(host, placeholder = "Filter\u2026") {
    const wrap = host.createDiv({ cls: "pb-filterbox" });
    (0, import_obsidian.setIcon)(wrap.createSpan({ cls: "pb-filterbox-icon" }), "search");
    const input = wrap.createEl("input", { attr: { type: "text", placeholder, spellcheck: "false" } });
    input.value = this.query;
    let t = null;
    input.addEventListener("input", () => {
      if (t != null) window.clearTimeout(t);
      t = window.setTimeout(() => {
        this.query = input.value;
        this.onDataUpdated();
      }, 120);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.query) {
        this.query = "";
        this.onDataUpdated();
        e.preventDefault();
      }
    });
    if (this.query) {
      const clear = wrap.createSpan({ cls: "pb-filterbox-clear" });
      (0, import_obsidian.setIcon)(clear, "x");
      clear.addEventListener("click", () => {
        this.query = "";
        this.onDataUpdated();
      });
    }
    return input;
  }
  /** The entries after applying the type-to-filter, matched over the name
   *  plus every visible property's text. */
  filtered(entries) {
    if (!this.query.trim()) return entries;
    const props = this.config.getOrder();
    return entries.filter(
      (en) => matchesQuery([en.file.basename, ...props.map((p) => this.text(en, p))], this.query)
    );
  }
  /** Make an element keyboard-openable: focusable, Enter/Space opens the file. */
  openable(el, file) {
    el.setAttribute("tabindex", "0");
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (e.ctrlKey || e.metaKey) void this.app.workspace.getLeaf(true).openFile(file);
        else void this.plugin.showNote(file);
      }
    });
  }
  /** Native page preview on hover (Ctrl by default, per Page preview settings). */
  hoverable(el, file) {
    el.addEventListener("mouseover", (ev2) => {
      this.app.workspace.trigger("hover-link", {
        event: ev2,
        source: "powerbases",
        hoverParent: this,
        targetEl: el,
        linktext: file.path,
        sourcePath: file.path
      });
    });
  }
  onunload() {
    this.plugin.liveViews.delete(this);
    this.resetChunkers();
    this.rootEl.remove();
  }
  /** Ctrl/Cmd asks for a new tab and gets one. A plain open goes to the note
   *  wherever it already is, rather than making a second copy of it here. */
  open(file, ev2) {
    if (ev2.ctrlKey || ev2.metaKey) void this.app.workspace.getLeaf(true).openFile(file);
    else void this.plugin.showNote(file);
  }
  /** The rendered text of a property for an entry ("" when absent). Missing
   *  properties arrive as NullValue, whose toString is the STRING "null"; a
   *  typed-but-empty property (e.g. a fresh checkbox/list column) can render as
   *  a null-ish Value that slips past the instanceof check, so blank "null" too. */
  text(en, prop) {
    if (prop === "file.name") return en.file.basename;
    const v = en.getValue(prop);
    if (v == null || v instanceof import_obsidian.NullValue) return "";
    const s = v.toString();
    return s === "null" ? "" : s;
  }
  hint(msg) {
    this.rootEl.createDiv({ cls: "pb-hint", text: msg });
  }
};
var PowerBoardView = class extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-board";
    /** Render context the drop and menu handlers read (refreshed each paint). */
    this.ctx = null;
    /** Visual cell contents from the last paint, keyed by cellKey(row, lane);
     *  the flat board uses row = undefined. */
    this.laneLists = /* @__PURE__ */ new Map();
    this.laneOf = /* @__PURE__ */ new Map();
    this.rowOf = /* @__PURE__ */ new Map();
    /** Alt+click selection for bulk moves; pruned to live entries each paint. */
    this.selected = /* @__PURE__ */ new Set();
    /** Batch writes (lane renumbers) defer repaints so lanes do not flicker. */
    this.writing = false;
    this.pendingUpdate = false;
  }
  onDataUpdated() {
    if (this.writing) {
      this.pendingUpdate = true;
      return;
    }
    this.resetChunkers();
    const root = this.rootEl;
    root.empty();
    root.className = "pb-root pb-board";
    const groupBy = this.config.getAsPropertyId("pbGroup");
    if (!groupBy) {
      this.hint("Pick a Group by property in the view options to lay out the board.");
      return;
    }
    const fmKey = frontmatterKey(groupBy);
    const head = root.createDiv({ cls: "pb-view-head pb-board-head" });
    this.filterBox(head, "Filter cards\u2026");
    const entries = this.filtered(this.data.data);
    const values = entries.map((en) => {
      const s = this.text(en, groupBy);
      return s === "" ? null : s;
    });
    const savedRaw = this.config.get("pb-colOrder");
    const cols = boardColumns(values, Array.isArray(savedRaw) ? savedRaw : []);
    const showEmpty = this.config.get("showEmpty") !== false;
    const rowBy = this.config.getAsPropertyId("pbRows");
    const rowByProp = rowBy && rowBy !== groupBy ? rowBy : null;
    const rowKey = rowByProp ? frontmatterKey(rowByProp) : null;
    const cardProps = parseInt(String(this.config.get("cardProps") ?? "3"), 10) || 0;
    const shown = this.config.getOrder().filter((p) => p !== groupBy && p !== "file.name" && p !== rowByProp).slice(0, cardProps);
    const lanes = cols.map((c) => ({ key: c, label: c }));
    if (showEmpty) lanes.push({ key: null, label: "No " + this.config.getDisplayName(groupBy) });
    const rankProp = this.config.getAsPropertyId("rankProp");
    const rankKey = rankProp && rankProp !== groupBy ? frontmatterKey(rankProp) : null;
    this.ctx = {
      fmKey,
      rankKey,
      rowKey,
      lanes,
      rules: this.asRules(this.config.get("pb-rules")),
      wip: this.asWip(this.config.get("pb-wip"))
    };
    this.laneLists.clear();
    this.laneOf.clear();
    this.rowOf.clear();
    if (this.selected.size) {
      const live = new Set(entries.map((en) => en.file.path));
      this.selected = new Set([...this.selected].filter((p) => live.has(p)));
    }
    const aggPropId = this.config.getAsPropertyId("pbAggProp");
    const aggOpRaw = String(this.config.get("pbAggOp") ?? "sum");
    const laneAgg = aggPropId ? { prop: aggPropId, op: ["sum", "avg", "min", "max", "filled"].includes(aggOpRaw) ? aggOpRaw : "sum" } : null;
    const laneHue = (key) => key == null ? "var(--background-modifier-border)" : this.plugin.hueFor(fmKey, key);
    const laneAggChip = (host, laneEntries) => {
      if (!laneAgg) return;
      const n = aggregate(
        laneEntries.map((en) => this.text(en, laneAgg.prop)),
        laneAgg.op
      );
      if (n != null) host.createSpan({ cls: "pb-lane-agg", text: (AGG_SYMBOL[laneAgg.op] ?? "") + " " + formatNum(n) });
    };
    if (rowByProp && rowKey) {
      this.renderSwim(root, { entries, values, lanes, rowByProp, rowKey, rankKey, shown, laneAggChip, laneHue, showEmpty });
      return;
    }
    const folded = this.foldedSet();
    const board = root.createDiv({ cls: "pb-lanes" });
    for (const lane of lanes) {
      const laneId = lane.key ?? "\0";
      const laneEl = board.createDiv({ cls: "pb-lane", attr: { "data-lane": lane.key ?? "" } });
      if (lane.key == null) laneEl.setAttr("data-noval", "1");
      let laneEntries = entries.filter((_, i) => values[i] === lane.key);
      if (rankKey) laneEntries = orderByRank(laneEntries, (en) => this.rawRank(en, rankKey));
      this.laneLists.set(this.cellKey(void 0, lane.key), laneEntries);
      for (const en of laneEntries) this.laneOf.set(en.file.path, lane.key);
      const wip = lane.key != null ? this.ctx.wip[lane.key] : void 0;
      const hue = laneHue(lane.key);
      if (folded.has(laneId)) {
        laneEl.addClass("pb-lane-folded");
        const fh = laneEl.createDiv({ cls: "pb-lane-foldhead" });
        const dot2 = fh.createSpan({ cls: "pb-dot" });
        dot2.style.background = hue;
        fh.createSpan({ cls: "pb-lane-foldname", text: `${lane.label}  \xB7  ${laneEntries.length}` });
        laneEl.setAttr("aria-label", "Expand " + lane.label);
        laneEl.addEventListener("click", () => this.toggleFold(laneId));
        continue;
      }
      const head2 = laneEl.createDiv({ cls: "pb-lane-head" });
      const dot = head2.createSpan({ cls: "pb-dot" });
      dot.style.background = hue;
      head2.createSpan({ cls: "pb-lane-name", text: lane.label });
      const count = head2.createSpan({
        cls: "pb-lane-count",
        text: wip ? `${laneEntries.length} / ${wip}` : String(laneEntries.length)
      });
      if (wip && laneEntries.length > wip) count.addClass("pb-over");
      laneAggChip(head2, laneEntries);
      const foldBtn = head2.createEl("button", { cls: "pb-lane-fold", attr: { "aria-label": "Collapse lane" } });
      (0, import_obsidian.setIcon)(foldBtn, "chevrons-left");
      foldBtn.addEventListener("click", (ev2) => {
        ev2.stopPropagation();
        this.toggleFold(laneId);
      });
      if (lane.key != null) {
        head2.addEventListener("contextmenu", (ev2) => {
          ev2.preventDefault();
          this.openLaneMenu(lane.key, ev2.clientX, ev2.clientY);
        });
        this.attachLaneDrag(head2, lane.key);
      }
      const body = laneEl.createDiv({ cls: "pb-lane-body" });
      this.chunk(body, body, laneEntries, (en) => this.buildCard(body, en, shown, lane.key), 80);
      const add = laneEl.createDiv({ cls: "pb-lane-add", text: "+ New page" });
      add.addEventListener("click", () => void this.newPageInLane(lane.key));
    }
  }
  cellKey(row, lane) {
    return (row === void 0 ? "*" : row ?? "\x07") + "\x07" + (lane ?? "\x07");
  }
  /** One card, identical in flat lanes and swim cells. */
  buildCard(body, en, shown, lane) {
    const card = body.createDiv({ cls: "pb-card", attr: { "data-path": en.file.path } });
    if (this.selected.has(en.file.path)) card.addClass("pb-selected");
    card.createDiv({ cls: "pb-card-title", text: en.file.basename });
    for (const p of shown) {
      const s = this.text(en, p);
      if (!s) continue;
      const row = card.createDiv({ cls: "pb-card-prop" });
      row.createSpan({ cls: "pb-card-key", text: this.config.getDisplayName(p) });
      row.createSpan({ cls: "pb-card-val", text: s });
    }
    this.hoverable(card, en.file);
    card.addEventListener("contextmenu", (ev2) => {
      ev2.preventDefault();
      this.openCardMenu(en, lane, ev2.clientX, ev2.clientY);
    });
    this.attachCardDrag(card, en, lane);
  }
  /** Two-axis board: columns from the group property, swimlane rows from a
   *  second one. A sticky header carries the lane heads once; each row is a
   *  band plus one cell per column, and drops write BOTH properties. Lane
   *  folding stays a flat-board feature. */
  renderSwim(root, o) {
    const rowVals = o.entries.map((en) => {
      const s = this.text(en, o.rowByProp);
      return s === "" ? null : s;
    });
    const rows = boardColumns(rowVals, []).map((r) => ({ key: r, label: r }));
    if (o.showEmpty || rowVals.some((v) => v == null)) {
      rows.push({ key: null, label: "No " + this.config.getDisplayName(o.rowByProp) });
    }
    const wrap = root.createDiv({ cls: "pb-lanes pb-swim" });
    const heads = wrap.createDiv({ cls: "pb-swim-heads" });
    for (const lane of o.lanes) {
      const hc = heads.createDiv({ cls: "pb-swim-headcell", attr: { "data-lane": lane.key ?? "" } });
      if (lane.key == null) hc.setAttr("data-noval", "1");
      const dot = hc.createSpan({ cls: "pb-dot" });
      dot.style.background = o.laneHue(lane.key);
      hc.createSpan({ cls: "pb-lane-name", text: lane.label });
      const colEntries = o.entries.filter((_, i) => o.values[i] === lane.key);
      const wip = lane.key != null ? this.ctx.wip[lane.key] : void 0;
      const count = hc.createSpan({
        cls: "pb-lane-count",
        text: wip ? `${colEntries.length} / ${wip}` : String(colEntries.length)
      });
      if (wip && colEntries.length > wip) count.addClass("pb-over");
      o.laneAggChip(hc, colEntries);
      if (lane.key != null) {
        hc.addEventListener("contextmenu", (ev2) => {
          ev2.preventDefault();
          this.openLaneMenu(lane.key, ev2.clientX, ev2.clientY);
        });
        this.attachLaneDrag(hc, lane.key);
      }
    }
    for (const row of rows) {
      const idxs = o.entries.map((_, i) => i).filter((i) => rowVals[i] === row.key);
      const band = wrap.createDiv({ cls: "pb-swim-band" });
      band.createSpan({ cls: "pb-swim-bandname", text: row.label });
      band.createSpan({ cls: "pb-lane-count", text: String(idxs.length) });
      const rowEl = wrap.createDiv({ cls: "pb-swim-row" });
      for (const lane of o.lanes) {
        const cell = rowEl.createDiv({
          cls: "pb-lane pb-swim-cell",
          attr: { "data-lane": lane.key ?? "", "data-row": row.key ?? "" }
        });
        if (lane.key == null) cell.setAttr("data-noval", "1");
        if (row.key == null) cell.setAttr("data-norow", "1");
        let cellEntries = idxs.filter((i) => o.values[i] === lane.key).map((i) => o.entries[i]);
        if (o.rankKey) cellEntries = orderByRank(cellEntries, (en) => this.rawRank(en, o.rankKey));
        this.laneLists.set(this.cellKey(row.key, lane.key), cellEntries);
        for (const en of cellEntries) {
          this.laneOf.set(en.file.path, lane.key);
          this.rowOf.set(en.file.path, row.key);
        }
        const body = cell.createDiv({ cls: "pb-lane-body" });
        for (const en of cellEntries) this.buildCard(body, en, o.shown, lane.key);
        const add = cell.createDiv({
          cls: "pb-lane-add pb-swim-add",
          text: "+",
          attr: { "aria-label": "New page here" }
        });
        add.addEventListener("click", () => void this.newPageInLane(lane.key, o.rowKey, row.key));
      }
    }
  }
  /* ----- lane config (rules, WIP) ----- */
  asRules(raw) {
    return raw && typeof raw === "object" ? raw : {};
  }
  asWip(raw) {
    return raw && typeof raw === "object" ? raw : {};
  }
  getRules(lane) {
    return { ...this.asRules(this.config.get("pb-rules"))[lane] ?? {} };
  }
  getWip(lane) {
    const n = this.asWip(this.config.get("pb-wip"))[lane];
    return typeof n === "number" && n > 0 ? n : null;
  }
  getTemplates() {
    const raw = this.config.get("pb-templates");
    return raw && typeof raw === "object" ? raw : {};
  }
  saveLaneSettings(lane, wip, rules, template) {
    const allRules = this.asRules(this.config.get("pb-rules"));
    if (Object.keys(rules).length) allRules[lane] = rules;
    else delete allRules[lane];
    this.config.set("pb-rules", Object.keys(allRules).length ? allRules : null);
    const allWip = this.asWip(this.config.get("pb-wip"));
    if (wip) allWip[lane] = wip;
    else delete allWip[lane];
    this.config.set("pb-wip", Object.keys(allWip).length ? allWip : null);
    const allTpl = { ...this.getTemplates() };
    if (template) allTpl[lane] = template;
    else delete allTpl[lane];
    this.config.set("pb-templates", Object.keys(allTpl).length ? allTpl : null);
    this.onDataUpdated();
  }
  /** Where template-created pages land: the base file's folder when the
   *  controller exposes it, else the active file's folder. */
  targetFolder() {
    const probe = this.controller?.file;
    if (probe instanceof import_obsidian.TFile && probe.parent) return probe.parent;
    return this.app.workspace.getActiveFile()?.parent ?? this.app.vault.getRoot();
  }
  /** New page for a lane: with a lane template the page starts as a copy of
   *  the template note (frontmatter merged after), else the standard Bases
   *  create; either way the lane value and rules are pre-filled. */
  async newPageInLane(lane, rowKey, rowVal) {
    const assignments = this.laneAssignments(lane, null);
    if (rowKey && rowVal != null) assignments[rowKey] = rowVal;
    const apply = (fm) => {
      for (const [k, v] of Object.entries(assignments)) {
        if (v === void 0) delete fm[k];
        else fm[k] = v;
      }
      this.plugin.stampCreate(fm);
    };
    const tplPath = lane != null ? this.getTemplates()[lane] : void 0;
    const tpl = tplPath ? this.app.vault.getAbstractFileByPath(tplPath) : null;
    if (!(tpl instanceof import_obsidian.TFile)) {
      if (tplPath) new Notice("Power Bases: template note not found: " + tplPath);
      await this.createFileForView(void 0, apply);
      return;
    }
    const content = await this.app.vault.read(tpl);
    const folder = this.targetFolder();
    const prefix = folder.path === "/" ? "" : folder.path + "/";
    let name = "Untitled";
    for (let i = 1; this.app.vault.getAbstractFileByPath(prefix + name + ".md"); i++) name = `Untitled ${i}`;
    const nf = await this.app.vault.create(prefix + name + ".md", content);
    await this.app.fileManager.processFrontMatter(nf, apply);
    await this.app.workspace.getLeaf(false).openFile(nf);
  }
  /** Note-property names available for rule rows. */
  notePropNames() {
    return this.allProperties.filter((p) => p.startsWith("note.")).map((p) => frontmatterKey(p));
  }
  /** Everything entering `lane` should get: the group value plus the lane's
   *  rules (tokens expanded, typed). `fromLane` skips rules on reorders. */
  laneAssignments(lane, fromLane) {
    const ctx = this.ctx;
    const out = {};
    if (lane === fromLane) return out;
    out[ctx.fmKey] = lane ?? void 0;
    if (lane != null) {
      const now = /* @__PURE__ */ new Date();
      for (const [k, v] of Object.entries(ctx.rules[lane] ?? {})) {
        if (k === ctx.fmKey || k === ctx.rankKey) continue;
        out[k] = parseRuleValue(expandToken(String(v), now));
      }
    }
    return out;
  }
  /* ----- drops, ranks, menus ----- */
  rawRank(en, rankKey) {
    const r = frontmatterOf(this.app, en.file)?.[rankKey];
    return typeof r === "number" ? r : null;
  }
  /** Apply a drop or Move-to: lane value, swimlane row value, lane rules,
   *  and (when a manual order property is set) a fractional rank; an
   *  exhausted or missing gap renumbers the cell in its new visual order.
   *  Everything lands as ONE undoable batch. */
  async applyCardDrop(path, lane, beforePath, row) {
    const ctx = this.ctx;
    if (!ctx) return;
    const f = this.app.vault.getAbstractFileByPath(path);
    if (!(f instanceof import_obsidian.TFile)) return;
    const fromLane = this.laneOf.get(path) ?? null;
    const assignments = this.laneAssignments(lane, fromLane);
    if (ctx.rowKey && row !== void 0 && row !== (this.rowOf.get(path) ?? null)) {
      assignments[ctx.rowKey] = row ?? void 0;
    }
    const laneChanged = lane !== fromLane;
    const label = laneChanged ? `Moved "${f.basename}" to ${lane ?? "No value"}` : Object.keys(assignments).length ? `Updated "${f.basename}"` : `Reordered "${f.basename}"`;
    const list = (this.laneLists.get(this.cellKey(row, lane)) ?? []).filter((en) => en.file.path !== path);
    let at = beforePath == null ? list.length : list.findIndex((en) => en.file.path === beforePath);
    if (at < 0) at = list.length;
    this.writing = true;
    try {
      if (ctx.rankKey) {
        const prevEn = at > 0 ? list[at - 1] : null;
        const nextEn = at < list.length ? list[at] : null;
        const prevRank = prevEn ? this.rawRank(prevEn, ctx.rankKey) : null;
        const nextRank = nextEn ? this.rawRank(nextEn, ctx.rankKey) : null;
        const gapKnown = !(prevEn && prevRank == null) && !(nextEn && nextRank == null);
        const r = gapKnown ? rankBetween(prevRank, nextRank) : null;
        if (r != null) {
          assignments[ctx.rankKey] = r;
          await this.plugin.writeBatch(label, [{ file: f, assignments }]);
        } else {
          const files = [...list.slice(0, at).map((en) => en.file), f, ...list.slice(at).map((en) => en.file)];
          const ranks = renumber(files.length);
          await this.plugin.writeBatch(
            label,
            files.map((file, i) => ({
              file,
              assignments: file.path === path ? { ...assignments, [ctx.rankKey]: ranks[i] } : { [ctx.rankKey]: ranks[i] }
            }))
          );
        }
      } else if (Object.keys(assignments).length) {
        await this.plugin.writeBatch(label, [{ file: f, assignments }]);
      }
    } finally {
      this.writing = false;
      if (this.pendingUpdate) {
        this.pendingUpdate = false;
        this.onDataUpdated();
      }
    }
  }
  openCardMenu(en, lane, x, y) {
    const ctx = this.ctx;
    if (!ctx) return;
    const menu = new import_obsidian.Menu();
    const bulk = this.selected.size > 1 && this.selected.has(en.file.path);
    for (const other of ctx.lanes) {
      if (other.key === lane) continue;
      menu.addItem(
        (i) => i.setTitle((bulk ? `Move ${this.selected.size} selected to ` : "Move to ") + other.label).setIcon("arrow-right").onClick(
          () => bulk ? void this.applyCardDropMulti([...this.selected], other.key) : void this.applyCardDrop(en.file.path, other.key, null)
        )
      );
    }
    if (this.selected.size) {
      menu.addItem(
        (i) => i.setTitle("Clear selection").setIcon("x").onClick(() => {
          this.selected.clear();
          this.onDataUpdated();
        })
      );
    }
    menu.addSeparator();
    this.app.workspace.trigger("file-menu", menu, en.file, "powerbases-board");
    menu.showAtPosition({ x, y });
  }
  /** Cards ride the shared pointer engine: drag between or within lanes,
   *  hold-and-release for the menu on touch, plain click to open. */
  attachCardDrag(card, en, lane) {
    let line = null;
    let hoverLane = null;
    let target = null;
    const cleanup = () => {
      card.removeClass("pb-drag-src");
      line?.remove();
      line = null;
      hoverLane?.removeClass("pb-drop");
      hoverLane = null;
    };
    attachPointerGesture(card, {
      ghostText: en.file.basename,
      onStart: () => {
        target = null;
        card.addClass("pb-drag-src");
        line = document.body.createDiv({ cls: "pb-dropline" });
      },
      onMove: (_dx, _dy, x, y) => {
        target = null;
        line?.removeClass("is-shown");
        hoverLane?.removeClass("pb-drop");
        hoverLane = null;
        const el = document.elementFromPoint(x, y);
        if (!el?.closest) return;
        const laneEl = el.closest(".pb-lane");
        if (!laneEl || !this.rootEl.contains(laneEl)) return;
        const laneKey = laneEl.getAttribute("data-noval") === "1" ? null : laneEl.getAttribute("data-lane");
        const rowKey = !laneEl.hasAttribute("data-row") ? void 0 : laneEl.getAttribute("data-norow") === "1" ? null : laneEl.getAttribute("data-row");
        hoverLane = laneEl;
        laneEl.addClass("pb-drop");
        if (laneEl.hasClass("pb-lane-folded")) {
          target = { lane: laneKey, row: rowKey, before: null };
          return;
        }
        const overCard = el.closest(".pb-card");
        const show = (rect, atTop) => {
          if (!line) return;
          line.addClass("is-shown");
          line.style.left = rect.left + "px";
          line.style.width = rect.width + "px";
          line.style.top = (atTop ? rect.top : rect.bottom) - 1 + "px";
        };
        if (overCard && overCard !== card) {
          const rect = overCard.getBoundingClientRect();
          const before = y - rect.top < rect.height / 2;
          const beforePath = before ? overCard.getAttribute("data-path") : overCard.nextElementSibling?.getAttribute?.("data-path") ?? null;
          target = { lane: laneKey, row: rowKey, before: beforePath };
          show(rect, before);
          return;
        }
        if (overCard === card) return;
        target = { lane: laneKey, row: rowKey, before: null };
        const cards = laneEl.querySelectorAll(".pb-card");
        const last = cards[cards.length - 1];
        if (last && last !== card) show(last.getBoundingClientRect(), false);
      },
      onDrop: () => {
        const drop = target;
        cleanup();
        if (!drop) return;
        if (this.selected.size > 1 && this.selected.has(en.file.path)) {
          void this.applyCardDropMulti([...this.selected], drop.lane, drop.row);
        } else {
          void this.applyCardDrop(en.file.path, drop.lane, drop.before, drop.row);
        }
      },
      onCancel: () => cleanup(),
      onHoldTap: (x, y) => this.openCardMenu(en, lane, x, y),
      onClick: (ev2) => {
        if (ev2.altKey) {
          if (this.selected.has(en.file.path)) this.selected.delete(en.file.path);
          else this.selected.add(en.file.path);
          card.toggleClass("pb-selected", this.selected.has(en.file.path));
          return;
        }
        this.open(en.file, ev2);
      }
    });
  }
  /** Bulk drop or Move-to: every selected page gets the lane (and row) with
   *  its rules, appended in selection order, as ONE undoable batch. */
  async applyCardDropMulti(paths, lane, row) {
    const ctx = this.ctx;
    if (!ctx) return;
    const writes = [];
    const list = this.laneLists.get(this.cellKey(row, lane)) ?? [];
    let lastRank = 0;
    if (ctx.rankKey) {
      for (const en of list) {
        const r = this.rawRank(en, ctx.rankKey);
        if (r != null && r > lastRank) lastRank = r;
      }
    }
    let i = 0;
    for (const p of paths) {
      const f = this.app.vault.getAbstractFileByPath(p);
      if (!(f instanceof import_obsidian.TFile)) continue;
      const assignments = this.laneAssignments(lane, this.laneOf.get(p) ?? null);
      if (ctx.rowKey && row !== void 0 && row !== (this.rowOf.get(p) ?? null)) {
        assignments[ctx.rowKey] = row ?? void 0;
      }
      if (ctx.rankKey) assignments[ctx.rankKey] = lastRank + 100 * ++i;
      if (Object.keys(assignments).length) writes.push({ file: f, assignments });
    }
    this.selected.clear();
    if (!writes.length) return;
    this.writing = true;
    try {
      await this.plugin.writeBatch(`Moved ${writes.length} pages to ${lane ?? "No value"}`, writes);
    } finally {
      this.writing = false;
      if (this.pendingUpdate) {
        this.pendingUpdate = false;
        this.onDataUpdated();
      }
    }
  }
  /** Lane headers drag horizontally to reorder the board; the saved order
   *  lives in pb-colOrder, which boardColumns has honored since 0.1.0. */
  attachLaneDrag(head, key) {
    let vline = null;
    let targetBefore;
    const cleanup = () => {
      vline?.remove();
      vline = null;
    };
    attachPointerGesture(head, {
      ghostText: key,
      onStart: () => {
        targetBefore = void 0;
        vline = document.body.createDiv({ cls: "pb-droplane" });
      },
      onMove: (_dx, _dy, x, y) => {
        targetBefore = void 0;
        vline?.removeClass("is-shown");
        const el = document.elementFromPoint(x, y);
        const overLane = el?.closest?.(".pb-lane, .pb-swim-headcell");
        if (!overLane || !this.rootEl.contains(overLane)) return;
        if (overLane.getAttribute("data-noval") === "1") return;
        const overKey = overLane.getAttribute("data-lane");
        if (overKey === key || overKey == null) return;
        const rect = overLane.getBoundingClientRect();
        const before = x - rect.left < rect.width / 2;
        if (before) targetBefore = overKey;
        else {
          const next = overLane.nextElementSibling;
          targetBefore = next && next.getAttribute("data-noval") !== "1" ? next.getAttribute("data-lane") : null;
        }
        if (vline) {
          vline.addClass("is-shown");
          vline.style.left = (before ? rect.left : rect.right) - 1 + "px";
          vline.style.top = rect.top + "px";
          vline.style.height = rect.height + "px";
        }
      },
      onDrop: () => {
        const t = targetBefore;
        cleanup();
        if (t === void 0) return;
        const cols = (this.ctx?.lanes ?? []).map((l) => l.key).filter((k) => k != null);
        const rest = cols.filter((c) => c !== key);
        let idx = t == null ? rest.length : rest.indexOf(t);
        if (idx < 0) idx = rest.length;
        this.config.set("pb-colOrder", [...rest.slice(0, idx), key, ...rest.slice(idx)]);
        this.onDataUpdated();
      },
      onCancel: () => cleanup(),
      onHoldTap: (x, y) => this.openLaneMenu(key, x, y)
    });
  }
  openLaneMenu(key, x, y) {
    const ctx = this.ctx;
    if (!ctx) return;
    const menu = new import_obsidian.Menu();
    fillValueColorMenu(menu, this.plugin, ctx.fmKey, key, () => this.onDataUpdated());
    menu.addSeparator();
    menu.addItem(
      (i) => i.setTitle("Lane settings\u2026").setIcon("settings-2").onClick(() => new LaneSettingsModal(this.app, this, key).open())
    );
    menu.showAtPosition({ x, y });
  }
  foldedSet() {
    const raw = this.config.get("pb-folded");
    return new Set(Array.isArray(raw) ? raw : []);
  }
  toggleFold(id) {
    const s = this.foldedSet();
    if (s.has(id)) s.delete(id);
    else s.add(id);
    this.config.set("pb-folded", s.size ? [...s] : null);
    this.onDataUpdated();
  }
};
var LaneSettingsModal = class extends import_obsidian.Modal {
  constructor(app, view, lane) {
    super(app);
    this.view = view;
    this.lane = lane;
    this.rows = [];
  }
  onOpen() {
    this.titleEl.setText(`Lane settings: ${this.lane}`);
    const c = this.contentEl;
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: "Rules run when a page enters this lane. Values may use {today} or {now}; an empty value removes the property."
    });
    const wipRow = c.createDiv({ cls: "pb-rule-row" });
    wipRow.createSpan({ cls: "pb-rule-label", text: "WIP limit" });
    this.wipInput = wipRow.createEl("input", { attr: { type: "number", min: "0", placeholder: "none" } });
    const wip = this.view.getWip(this.lane);
    if (wip) this.wipInput.value = String(wip);
    const tplRow = c.createDiv({ cls: "pb-rule-row" });
    tplRow.createSpan({ cls: "pb-rule-label", text: "Template" });
    const tplId = "pb-tpl-" + Math.floor(Math.random() * 1e9);
    const tplList = c.createEl("datalist", { attr: { id: tplId } });
    for (const f of this.view.app.vault.getMarkdownFiles()) {
      if (f.path.toLowerCase().includes("template")) tplList.createEl("option", { attr: { value: f.path } });
    }
    this.tplInput = tplRow.createEl("input", {
      attr: { type: "text", placeholder: "Templates/Task.md (for + New page)", list: tplId }
    });
    this.tplInput.value = this.view.getTemplates()[this.lane] ?? "";
    c.createEl("p", { cls: "pb-rule-head", text: "Set properties on entry" });
    const rowsEl = c.createDiv();
    const dlId = "pb-props-" + Math.floor(Math.random() * 1e9);
    const dl = c.createEl("datalist", { attr: { id: dlId } });
    for (const name of this.view.notePropNames()) dl.createEl("option", { attr: { value: name } });
    const addRow = (prop = "", val = "") => {
      const row = rowsEl.createDiv({ cls: "pb-rule-row" });
      const p = row.createEl("input", { attr: { type: "text", placeholder: "property", list: dlId } });
      p.value = prop;
      const v = row.createEl("input", { cls: "pb-rule-val", attr: { type: "text", placeholder: "value, {today}, {now}" } });
      v.value = val;
      const x = row.createEl("button", { cls: "pb-rule-x", attr: { "aria-label": "Remove rule" } });
      (0, import_obsidian.setIcon)(x, "x");
      const entry = { prop: p, val: v };
      this.rows.push(entry);
      x.addEventListener("click", () => {
        this.rows.remove(entry);
        row.remove();
      });
    };
    for (const [k, v] of Object.entries(this.view.getRules(this.lane))) addRow(k, v);
    if (!this.rows.length) addRow();
    const add = c.createEl("button", { cls: "pb-rule-add", text: "+ Add rule" });
    add.addEventListener("click", () => addRow());
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const save = btns.createEl("button", { text: "Save", cls: "mod-cta" });
    save.addEventListener("click", () => {
      const rules = {};
      for (const r of this.rows) {
        const k = r.prop.value.trim();
        if (k) rules[k] = r.val.value;
      }
      const w = parseInt(this.wipInput.value, 10);
      const tpl = this.tplInput.value.trim();
      this.view.saveLaneSettings(this.lane, Number.isFinite(w) && w > 0 ? w : null, rules, tpl || null);
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var FieldConfigModal = class extends import_obsidian.Modal {
  constructor(app, plugin, fmKey, type, propKeys) {
    super(app);
    this.plugin = plugin;
    this.fmKey = fmKey;
    this.type = type;
    this.propKeys = propKeys;
    this.rows = [];
  }
  onOpen() {
    const cfg = this.plugin.fieldConfig(this.fmKey) ?? { type: this.type };
    this.titleEl.setText(`${PB_TYPE_LABEL[this.type]} field: ${this.fmKey}`);
    const c = this.contentEl;
    const propsId = "pb-fc-props-" + Math.floor(Math.random() * 1e9);
    const dl = c.createEl("datalist", { attr: { id: propsId } });
    for (const k of this.propKeys) dl.createEl("option", { attr: { value: k } });
    if (this.type === "id") {
      c.createEl("p", {
        cls: "pb-modal-desc",
        text: "IDs are assigned in order: the prefix followed by the next number. Click Generate in an empty cell to fill one."
      });
      const row = c.createDiv({ cls: "pb-rule-row" });
      row.createSpan({ cls: "pb-rule-label", text: "Prefix" });
      this.prefixInput = row.createEl("input", { attr: { type: "text", placeholder: "e.g. TASK-" } });
      this.prefixInput.value = cfg.prefix ?? "";
    } else if (this.type === "verification") {
      c.createEl("p", {
        cls: "pb-modal-desc",
        text: "Click a cell's badge to set Verified, Unverified, or Expired. Optionally name a date property, and a verified row past that date reads as Expired."
      });
      const row = c.createDiv({ cls: "pb-rule-row" });
      row.createSpan({ cls: "pb-rule-label", text: "Expiry date property" });
      this.expiryInput = row.createEl("input", { attr: { type: "text", placeholder: "(optional) e.g. reviewBy", list: propsId } });
      this.expiryInput.value = cfg.verifyExpiryProp ?? "";
    } else if (this.type === "button") {
      c.createEl("p", {
        cls: "pb-modal-desc",
        text: "A button writes properties to its row and can open a link. Values may use {today} or {now}; an empty value removes the property."
      });
      const labelRow = c.createDiv({ cls: "pb-rule-row" });
      labelRow.createSpan({ cls: "pb-rule-label", text: "Label" });
      this.labelInput = labelRow.createEl("input", { attr: { type: "text", placeholder: "Button text" } });
      this.labelInput.value = cfg.buttonLabel ?? "";
      c.createEl("p", { cls: "pb-rule-head", text: "Set properties on click" });
      const rowsEl = c.createDiv();
      const addRow = (prop = "", val = "") => {
        const row = rowsEl.createDiv({ cls: "pb-rule-row" });
        const p = row.createEl("input", { attr: { type: "text", placeholder: "property", list: propsId } });
        p.value = prop;
        const v = row.createEl("input", { cls: "pb-rule-val", attr: { type: "text", placeholder: "value, {today}, {now}" } });
        v.value = val;
        const x = row.createEl("button", { cls: "pb-rule-x", attr: { "aria-label": "Remove" } });
        (0, import_obsidian.setIcon)(x, "x");
        const entry = { prop: p, val: v };
        this.rows.push(entry);
        x.addEventListener("click", () => {
          this.rows.remove(entry);
          row.remove();
        });
      };
      for (const [k, v] of Object.entries(cfg.buttonSets ?? {})) addRow(k, v);
      if (!this.rows.length) addRow();
      c.createEl("button", { cls: "pb-rule-add", text: "+ Add property" }).addEventListener("click", () => addRow());
      const linkRow = c.createDiv({ cls: "pb-rule-row" });
      linkRow.createSpan({ cls: "pb-rule-label", text: "Open link" });
      this.linkInput = linkRow.createEl("input", { attr: { type: "text", placeholder: "(optional) URL or note.property", list: propsId } });
      this.linkInput.value = cfg.buttonLink ?? "";
    }
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    btns.createEl("button", { text: "Save", cls: "mod-cta" }).addEventListener("click", () => void this.save());
  }
  async save() {
    const cfg = { type: this.type };
    if (this.type === "id") {
      cfg.prefix = this.prefixInput.value.trim() || void 0;
    } else if (this.type === "verification") {
      cfg.verifyExpiryProp = this.expiryInput.value.trim() || void 0;
    } else if (this.type === "button") {
      cfg.buttonLabel = this.labelInput.value.trim() || void 0;
      const sets = {};
      for (const r of this.rows) {
        const k = r.prop.value.trim();
        if (k) sets[k] = r.val.value;
      }
      cfg.buttonSets = Object.keys(sets).length ? sets : void 0;
      cfg.buttonLink = this.linkInput.value.trim() || void 0;
    }
    await this.plugin.saveFieldConfig(this.fmKey, cfg);
    this.close();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var CsvImportModal = class extends import_obsidian.Modal {
  constructor(app, plugin, folder) {
    super(app);
    this.plugin = plugin;
    this.folder = folder;
    this.parsed = null;
    this.fileName = "Imported";
  }
  onOpen() {
    this.titleEl.setText("Import CSV as a base");
    const c = this.contentEl;
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: "Each row becomes a note and the first row names the columns. A ready-made base opens when the import finishes."
    });
    const fileRow = c.createDiv({ cls: "pb-rule-row" });
    fileRow.createSpan({ cls: "pb-rule-label", text: "CSV file" });
    const file = fileRow.createEl("input", { attr: { type: "file", accept: ".csv,text/csv" } });
    file.addEventListener("change", () => {
      const f = file.files?.[0];
      if (!f) return;
      this.fileName = f.name.replace(/\.csv$/i, "");
      const reader = new FileReader();
      reader.onload = () => this.onText(String(reader.result ?? ""));
      reader.readAsText(f);
    });
    const folderRow = c.createDiv({ cls: "pb-rule-row" });
    folderRow.createSpan({ cls: "pb-rule-label", text: "Into folder" });
    this.folderInput = folderRow.createEl("input", { attr: { type: "text", placeholder: "vault root" } });
    this.folderInput.value = this.folder.path === "/" ? "" : this.folder.path;
    this.previewEl = c.createDiv({ cls: "pb-csv-preview" });
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    this.importBtn = btns.createEl("button", { text: "Import", cls: "mod-cta" });
    this.importBtn.disabled = true;
    this.importBtn.addEventListener("click", () => void this.run());
  }
  onText(text) {
    const rows = parseCsv(text);
    if (rows.length < 2) {
      this.previewEl.setText("That file has a header but no data rows.");
      this.parsed = null;
      this.importBtn.disabled = true;
      return;
    }
    this.parsed = rows;
    const headers = rows[0];
    const body = rows.slice(1);
    this.previewEl.empty();
    this.previewEl.createEl("p", { cls: "pb-modal-desc", text: `${body.length} rows, ${headers.length} columns:` });
    const list = this.previewEl.createEl("ul", { cls: "pb-csv-cols" });
    headers.forEach((h, i) => {
      const samples = body.slice(0, 30).map((r) => r[i] ?? "");
      const ft = inferFieldType(h, samples);
      const li = list.createEl("li");
      li.createSpan({ cls: "pb-csv-col", text: sanitizeKey(h, i + 1) });
      li.createSpan({ cls: "pb-csv-kind", text: ft ? PB_TYPE_LABEL[ft] : inferColumnKind(samples) });
    });
    this.importBtn.disabled = false;
  }
  async run() {
    if (!this.parsed) return;
    this.importBtn.disabled = true;
    this.importBtn.setText("Importing\u2026");
    try {
      const rows = this.parsed;
      const rawHeaders = rows[0];
      const headers = rawHeaders.map((h, i) => sanitizeKey(h, i + 1));
      const body = rows.slice(1);
      const kinds = headers.map((_, i) => inferColumnKind(body.slice(0, 50).map((r) => r[i] ?? "")));
      const fieldTypes = rawHeaders.map((h, i) => inferFieldType(h, body.slice(0, 50).map((r) => r[i] ?? "")));
      let titleIdx = headers.findIndex((h) => /^(name|title|subject|task)$/i.test(h));
      if (titleIdx < 0) titleIdx = 0;
      const parent = this.folderInput.value.trim();
      const folderPath = parent ? parent + "/" + safeName(this.fileName) : safeName(this.fileName);
      await this.plugin.ensureFolder(folderPath);
      let made = 0;
      for (const r of body) {
        const fm = {};
        headers.forEach((key, i) => {
          if (i === titleIdx) return;
          const v = csvValue(kinds[i], r[i] ?? "");
          if (v !== void 0) fm[key] = v;
        });
        await this.plugin.createNote(folderPath, safeName(r[titleIdx] ?? "", "Row " + (made + 1)), fm);
        made++;
      }
      let typed = false;
      headers.forEach((key, i) => {
        if (i === titleIdx || !fieldTypes[i]) return;
        const cur = this.plugin.settings.fields[key];
        this.plugin.settings.fields[key] = cur ? { ...cur, type: fieldTypes[i] } : { type: fieldTypes[i] };
        typed = true;
      });
      if (typed) await this.plugin.persistSettings();
      const order = ["file.name", ...headers.filter((_, i) => i !== titleIdx).map((k) => "note." + k)];
      const views = [{ type: "powerbases-table", name: "Table", order }];
      const dateIdx = kinds.findIndex((k) => k === "date" || k === "datetime");
      if (dateIdx >= 0) views.push({ type: "powerbases-calendar", name: "Calendar", options: { dateProp: "note." + headers[dateIdx] } });
      const groupIdx = headers.findIndex((_, i) => i !== titleIdx && kinds[i] === "text" && !fieldTypes[i]);
      if (groupIdx >= 0) views.push({ type: "powerbases-board", name: "Board", options: { pbGroup: "note." + headers[groupIdx] } });
      const yaml = buildBaseYaml(folderPath, views);
      this.close();
      await this.plugin.createBaseFile(folderPath, safeName(this.fileName) + " Base", yaml);
      this.plugin.refreshAll();
      new Notice(`Power Bases: imported ${made} notes into ${folderPath}.`);
    } catch (e) {
      new Notice("Power Bases: CSV import failed. " + e.message);
      this.importBtn.disabled = false;
      this.importBtn.setText("Import");
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
function pbTemplates() {
  const t = todayKey();
  const d = (n) => addDays(t, n);
  return [
    {
      id: "tasks",
      name: "Tasks Tracker",
      icon: "check-circle",
      desc: "Status, priority, due date, and an assignee. Board, Table, and Calendar.",
      folder: "Tasks",
      fields: { assignee: "person", ticket: "id" },
      views: [
        { type: "powerbases-board", name: "Board", options: { pbGroup: "note.status", rankProp: "note.pb-order" } },
        { type: "powerbases-table", name: "Table", order: ["file.name", "note.ticket", "note.status", "note.priority", "note.assignee", "note.due"] },
        { type: "powerbases-calendar", name: "Calendar", options: { dateProp: "note.due" } }
      ],
      seeds: [
        { name: "Draft the Q3 brief", fm: { status: "In progress", priority: "High", assignee: "Alex", due: d(3), ticket: "TASK-1" } },
        { name: "Review vendor quotes", fm: { status: "Backlog", priority: "Medium", assignee: "Sam", due: d(9), ticket: "TASK-2" } },
        { name: "Publish release notes", fm: { status: "Done", priority: "Low", assignee: "Alex", due: d(-2), ticket: "TASK-3" } }
      ]
    },
    {
      id: "roadmap",
      name: "Project Roadmap",
      icon: "milestone",
      desc: "Phases on a timeline with owner and progress. Timeline, Board, and Table.",
      folder: "Roadmap",
      fields: { owner: "person" },
      views: [
        {
          type: "powerbases-timeline",
          name: "Timeline",
          options: { startProp: "note.start", endProp: "note.end", colorProp: "note.status", progressProp: "note.progress", milestoneProp: "note.milestone" }
        },
        { type: "powerbases-board", name: "Board", options: { pbGroup: "note.status" } },
        { type: "powerbases-table", name: "Table", order: ["file.name", "note.status", "note.owner", "note.start", "note.end", "note.progress"] }
      ],
      seeds: [
        { name: "Discovery", fm: { status: "Done", owner: "Priya", start: d(-20), end: d(-6), progress: 100 } },
        { name: "Build", fm: { status: "In progress", owner: "Jordan", start: d(-5), end: d(20), progress: 40 } },
        { name: "Launch", fm: { status: "Planned", owner: "Priya", start: d(21), end: d(28), progress: 0, milestone: true } }
      ]
    },
    {
      id: "features",
      name: "Feature Requests",
      icon: "lightbulb",
      desc: "Votes, requester, status, and a link. Board, Table, and a Chart.",
      folder: "Feature Requests",
      fields: { requester: "person", link: "url" },
      views: [
        { type: "powerbases-board", name: "Board", options: { pbGroup: "note.status" } },
        { type: "powerbases-table", name: "Table", order: ["file.name", "note.status", "note.votes", "note.requester", "note.link"] },
        { type: "powerbases-chart", name: "Chart", options: { chartType: "bar", groupProp: "note.status", chartAgg: "count" } }
      ],
      seeds: [
        { name: "Dark mode for exports", fm: { status: "Under review", votes: 42, requester: "Robin", link: "https://example.com/req/1" } },
        { name: "Bulk edit rows", fm: { status: "Planned", votes: 88, requester: "Casey", link: "https://example.com/req/2" } },
        { name: "Mobile widgets", fm: { status: "Shipped", votes: 17, requester: "Robin", link: "https://example.com/req/3" } }
      ]
    },
    {
      id: "contacts",
      name: "Contacts",
      icon: "contact",
      desc: "An address book showing off Email, Phone, URL, Person, and Place.",
      folder: "Contacts",
      fields: { email: "email", phone: "phone", website: "url", owner: "person", address: "place" },
      views: [
        { type: "powerbases-table", name: "Table", order: ["file.name", "note.company", "note.email", "note.phone", "note.website", "note.owner", "note.address"] },
        { type: "powerbases-board", name: "By company", options: { pbGroup: "note.company" } }
      ],
      seeds: [
        { name: "Dana Reyes", fm: { company: "Acme Co", email: "dana@acme.com", phone: "+1 555 0100", website: "acme.com", owner: "Sam", address: "1 Market St, San Francisco" } },
        { name: "Lee Park", fm: { company: "Globex", email: "lee@globex.io", phone: "+1 555 0142", website: "globex.io", owner: "Alex", address: "500 5th Ave, New York" } }
      ]
    }
  ];
}
var TemplateModal = class extends import_obsidian.Modal {
  constructor(app, plugin, folder) {
    super(app);
    this.plugin = plugin;
    this.folder = folder;
  }
  onOpen() {
    this.titleEl.setText("New base from a template");
    const c = this.contentEl;
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: "Each template creates a folder with a few example notes and a ready base. The field types are set for you."
    });
    const list = c.createDiv({ cls: "pb-tpl-list" });
    for (const tpl of pbTemplates()) {
      const card = list.createDiv({ cls: "pb-tpl-card" });
      (0, import_obsidian.setIcon)(card.createSpan({ cls: "pb-tpl-ic" }), tpl.icon);
      const body = card.createDiv({ cls: "pb-tpl-body" });
      body.createDiv({ cls: "pb-tpl-name", text: tpl.name });
      body.createDiv({ cls: "pb-tpl-desc", text: tpl.desc });
      card.setAttribute("tabindex", "0");
      card.addEventListener("click", () => void this.generate(tpl));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter") void this.generate(tpl);
      });
    }
    c.createDiv({ cls: "pb-modal-btns" }).createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
  }
  async generate(tpl) {
    const parent = this.folder.path === "/" ? "" : this.folder.path;
    const folderPath = parent ? parent + "/" + tpl.folder : tpl.folder;
    try {
      await this.plugin.ensureFolder(folderPath);
      for (const seed of tpl.seeds) await this.plugin.createNote(folderPath, seed.name, seed.fm);
      for (const [k, ft] of Object.entries(tpl.fields)) {
        const cur = this.plugin.settings.fields[k];
        this.plugin.settings.fields[k] = cur ? { ...cur, type: ft } : { type: ft };
      }
      await this.plugin.persistSettings();
      const yaml = buildBaseYaml(folderPath, tpl.views);
      this.close();
      await this.plugin.createBaseFile(folderPath, tpl.name, yaml);
      this.plugin.refreshAll();
      new Notice(`Power Bases: ${tpl.name} ready in ${folderPath}.`);
    } catch (e) {
      new Notice("Power Bases: template failed. " + e.message);
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
async function readBaseConfig(app, file) {
  const parsed = (0, import_obsidian.parseYaml)(await app.vault.read(file));
  return parsed && typeof parsed === "object" ? parsed : {};
}
async function updateBaseConfig(app, file, change) {
  await app.vault.process(file, (data) => {
    const parsed = (0, import_obsidian.parseYaml)(data);
    const cfg = parsed && typeof parsed === "object" ? parsed : {};
    change(cfg);
    return (0, import_obsidian.stringifyYaml)(cfg);
  });
}
async function writeFormula(app, file, name, expr, viewName, viewType, currentOrder) {
  await updateBaseConfig(app, file, (cfg) => {
    const formulas = cfg.formulas ?? {};
    formulas[name] = expr;
    cfg.formulas = formulas;
    const id = "formula." + name;
    if (Array.isArray(cfg.views)) {
      const v = cfg.views.find((x) => x?.type === viewType && x?.name === viewName);
      if (v) {
        const order = Array.isArray(v.order) ? v.order.slice() : currentOrder.slice();
        if (!order.includes(id)) order.push(id);
        v.order = order;
      }
    }
  });
}
async function removeFormula(app, file, name) {
  await updateBaseConfig(app, file, (cfg) => {
    if (cfg.formulas && typeof cfg.formulas === "object") delete cfg.formulas[name];
    const id = "formula." + name;
    if (Array.isArray(cfg.views)) {
      for (const v of cfg.views) {
        if (Array.isArray(v.order)) v.order = v.order.filter((o) => o !== id);
      }
    }
  });
}
async function addViewColumn(app, file, propId, viewName, viewType, currentOrder, viewOpts, at) {
  await updateBaseConfig(app, file, (cfg) => {
    if (Array.isArray(cfg.views)) {
      const v = cfg.views.find((x) => x?.type === viewType && x?.name === viewName);
      if (v) {
        const order = Array.isArray(v.order) ? v.order.slice() : currentOrder.slice();
        if (!order.includes(propId)) {
          if (typeof at === "number") order.splice(Math.max(0, Math.min(order.length, at)), 0, propId);
          else order.push(propId);
        }
        v.order = order;
        if (viewOpts) for (const [k, val] of Object.entries(viewOpts)) v[k] = val;
      }
    }
  });
}
async function renamePropertyInBase(app, file, oldId, newId, isFormula, oldName, newName) {
  await updateBaseConfig(app, file, (cfg) => {
    if (isFormula && cfg.formulas && typeof cfg.formulas === "object") {
      const f = cfg.formulas;
      if (f[oldName] !== void 0) {
        f[newName] = f[oldName];
        delete f[oldName];
      }
    }
    if (Array.isArray(cfg.views)) {
      for (const v of cfg.views) {
        if (Array.isArray(v.order)) v.order = v.order.map((o) => o === oldId ? newId : o);
        for (const k of Object.keys(v)) {
          const colon = k.indexOf(":");
          if (colon > 0 && k.slice(colon + 1) === oldId) {
            v[k.slice(0, colon + 1) + newId] = v[k];
            delete v[k];
          }
        }
      }
    }
  });
}
async function writeViewOrder(app, file, viewName, viewType, order) {
  await updateBaseConfig(app, file, (cfg) => {
    if (Array.isArray(cfg.views)) {
      const v = cfg.views.find((x) => x?.type === viewType && x?.name === viewName);
      if (v) v.order = order;
    }
  });
}
var FORMULA_FUNCTIONS = [
  { sig: 'note["Property"]', desc: "A note's property (brackets allow spaces).", insert: 'note["Property"]' },
  { sig: "formula.other", desc: "Reuse another formula in this base.", insert: "formula.other" },
  { sig: "a + b   a - b   a * b   a / b", desc: "Arithmetic; + also joins text.", insert: "" },
  { sig: "round(x, digits)", desc: "Round to a number of decimals.", insert: "round(x, 2)" },
  { sig: "x.toFixed(digits)", desc: "Fixed-decimal text, e.g. 9.50.", insert: ".toFixed(2)" },
  { sig: "abs, ceil, floor (x)", desc: "Absolute value, round up, round down.", insert: "" },
  { sig: "min(a, b, ...)   max(a, b, ...)", desc: "Smallest or largest value.", insert: "" },
  { sig: "if(cond, a, b)", desc: "a when cond is true, else b.", insert: "if(, , )" },
  { sig: "concat(a, b, ...)", desc: "Join values into one text.", insert: "concat(, )" },
  { sig: "contains(text, part)", desc: "True when text holds part.", insert: "contains(, )" },
  { sig: "lower, upper, trim (text)", desc: "Lowercase, uppercase, trim spaces.", insert: "" },
  { sig: "length(x)", desc: "Character count.", insert: "" }
];
var FormulaModal = class extends import_obsidian.Modal {
  constructor(app, plugin, view, baseFile, editKey) {
    super(app);
    this.plugin = plugin;
    this.view = view;
    this.baseFile = baseFile;
    this.editKey = editKey;
    this.formulas = {};
    this.entries = view.sampleEntries();
  }
  onOpen() {
    this.titleEl.setText(this.editKey ? `Edit formula: ${this.editKey}` : "Add formula column");
    const c = this.contentEl;
    c.addClass("pb-formula-modal");
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: "Formulas are Obsidian Bases formulas, saved in this base. The preview is a quick check; Bases computes the real column."
    });
    const nameRow = c.createDiv({ cls: "pb-rule-row" });
    nameRow.createSpan({ cls: "pb-rule-label", text: "Name" });
    this.nameInput = nameRow.createEl("input", { attr: { type: "text", placeholder: "e.g. mo_rent" } });
    this.nameInput.value = this.editKey ?? "";
    if (this.editKey) this.nameInput.disabled = true;
    c.createEl("p", { cls: "pb-rule-head", text: "Formula" });
    this.exprInput = c.createEl("textarea", { cls: "pb-formula-expr", attr: { rows: "3", placeholder: 'note["Rent"] * note["SQM"]' } });
    this.exprInput.addEventListener("input", () => this.updatePreview());
    const prevRow = c.createDiv({ cls: "pb-formula-prevrow" });
    prevRow.createSpan({ cls: "pb-rule-label", text: "Preview" });
    this.rowSelect = prevRow.createEl("select", { cls: ["pb-formula-rowsel", "dropdown"] });
    if (!this.entries.length) this.rowSelect.createEl("option", { text: "no rows" });
    this.entries.forEach((en, i) => this.rowSelect.createEl("option", { attr: { value: String(i) }, text: en.file.basename }));
    this.rowSelect.addEventListener("change", () => this.updatePreview());
    this.previewEl = c.createDiv({ cls: "pb-formula-preview" });
    const ref = c.createEl("details", { cls: "pb-formula-ref" });
    ref.createEl("summary", { text: "Function reference" });
    for (const f of FORMULA_FUNCTIONS) {
      const item = ref.createDiv({ cls: "pb-fn" });
      const sig = item.createEl("code", { cls: "pb-fn-sig", text: f.sig });
      item.createSpan({ cls: "pb-fn-desc", text: f.desc });
      if (f.insert) sig.addEventListener("click", () => this.insert(f.insert));
      else sig.addClass("pb-fn-flat");
    }
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    if (this.editKey) {
      const del = btns.createEl("button", { cls: "pb-fn-del", text: "Delete" });
      del.addEventListener("click", () => void this.remove());
    }
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    btns.createEl("button", { text: "Save", cls: "mod-cta" }).addEventListener("click", () => void this.save());
    this.updatePreview();
    void this.loadFormulas();
  }
  /** Read the base's existing formulas so `formula.x` refs preview and an edit
   *  prefills the expression. */
  async loadFormulas() {
    try {
      const cfg = await readBaseConfig(this.app, this.baseFile);
      this.formulas = cfg.formulas ?? {};
    } catch {
      this.formulas = {};
    }
    if (this.editKey && !this.exprInput.value) this.exprInput.value = this.formulas[this.editKey] ?? "";
    this.updatePreview();
  }
  currentRow() {
    const en = this.entries[Number(this.rowSelect.value) || 0];
    return { fm: en ? frontmatterOf(this.app, en.file) ?? {} : {}, en };
  }
  updatePreview() {
    const expr = this.exprInput.value;
    this.previewEl.empty();
    if (!expr.trim()) {
      this.previewEl.createSpan({ cls: "pb-formula-empty", text: "Type a formula to preview it." });
      return;
    }
    const { fm, en } = this.currentRow();
    const fileCtx = en ? { name: en.file.basename, ext: en.file.extension, path: en.file.path } : void 0;
    const res = evalFormula(expr, fm, this.formulas, fileCtx);
    if (res.ok) {
      this.previewEl.createSpan({ cls: "pb-formula-val", text: res.value === null ? "(empty)" : String(res.value) });
      if (res.value !== null) this.previewEl.createSpan({ cls: "pb-formula-type", text: typeof res.value });
    } else {
      this.previewEl.createSpan({ cls: "pb-formula-err", text: "Preview unavailable here; Bases will still compute it once saved." });
    }
  }
  insert(text) {
    const el = this.exprInput;
    const s = el.selectionStart ?? el.value.length;
    const e = el.selectionEnd ?? el.value.length;
    el.value = el.value.slice(0, s) + text + el.value.slice(e);
    el.focus();
    el.selectionStart = el.selectionEnd = s + text.length;
    this.updatePreview();
  }
  async save() {
    const name = safeFormulaName(this.editKey ?? this.nameInput.value);
    const expr = this.exprInput.value.trim();
    if (!name) {
      new Notice("Power Bases: give the formula a name.");
      return;
    }
    if (!expr) {
      new Notice("Power Bases: enter a formula.");
      return;
    }
    this.close();
    try {
      await writeFormula(this.app, this.baseFile, name, expr, this.view.viewName(), this.view.type, this.view.currentOrder());
      this.plugin.refreshAll();
      new Notice(`Power Bases: formula "${name}" saved.`);
    } catch (e) {
      new Notice("Power Bases: could not save formula. " + e.message);
    }
  }
  async remove() {
    if (!this.editKey) return;
    this.close();
    try {
      await removeFormula(this.app, this.baseFile, this.editKey);
      this.plugin.refreshAll();
      new Notice(`Power Bases: deleted formula "${this.editKey}".`);
    } catch (e) {
      new Notice("Power Bases: could not delete formula. " + e.message);
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
function applyToChecklist(c, others) {
  if (!others.length) return () => [];
  c.createEl("p", { cls: "pb-rule-head", text: "Also apply to" });
  const wrap = c.createDiv({ cls: "pb-fmt-cols" });
  const checked = /* @__PURE__ */ new Set();
  for (const col of others) {
    const lab = wrap.createEl("label", { cls: "pb-fmt-col" });
    const cb = lab.createEl("input", { cls: "pb-check", attr: { type: "checkbox" } });
    cb.addEventListener("change", () => {
      if (cb.checked) checked.add(col.propId);
      else checked.delete(col.propId);
    });
    lab.createSpan({ text: col.label });
  }
  return () => [...checked];
}
var NumberFormatModal = class extends import_obsidian.Modal {
  constructor(app, plugin, propId, others = []) {
    super(app);
    this.plugin = plugin;
    this.propId = propId;
    this.others = others;
    this.fmt = { ...plugin.numberFormat(propId) ?? {} };
  }
  onOpen() {
    this.titleEl.setText("Number format");
    const c = this.contentEl;
    c.addClass("pb-numfmt-modal");
    c.addClass("pb-fmt");
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: `How numbers show in the "${this.propId.replace(/^(note|formula)\./, "")}" column.`
    });
    const show = (el, on) => el.style.display = on ? "" : "none";
    const showRow = c.createDiv({ cls: "pb-rule-row" });
    showRow.createSpan({ cls: "pb-rule-label", text: "Show as" });
    const showSel = showRow.createEl("select", { cls: "dropdown" });
    for (const [val, label] of [
      ["plain", "Plain number"],
      ["bar", "Bar"],
      ["ring", "Ring"],
      ["stars", "Stars"],
      ["dots", "Dots"],
      ["percent", "Percent"],
      ["traffic", "Traffic light"]
    ])
      showSel.createEl("option", { attr: { value: val }, text: label });
    showSel.value = this.fmt.display ?? "plain";
    const colorRow = c.createDiv({ cls: "pb-rule-row" });
    colorRow.createSpan({ cls: "pb-rule-label", text: "Color" });
    const swatches = colorRow.createDiv({ cls: "pb-swatches" });
    const swatchEls = [];
    const paintSwatches = () => swatchEls.forEach((s) => s.el.toggleClass("is-sel", (this.fmt.color ?? "") === s.hex));
    const addSwatch = (hex, title) => {
      const b = swatches.createEl("button", { cls: "pb-swatch" + (hex ? "" : " pb-swatch-default"), attr: { "aria-label": title } });
      if (hex) b.style.background = hex;
      b.addEventListener("click", () => {
        this.fmt.color = hex || void 0;
        paintSwatches();
        this.preview();
      });
      swatchEls.push({ hex, el: b });
    };
    addSwatch("", "Default");
    for (const [name, hex] of NAMED_PALETTE) addSwatch(hex, name);
    paintSwatches();
    const snRow = c.createDiv({ cls: "pb-rule-row" });
    snRow.createSpan({ cls: "pb-rule-label", text: "Show number" });
    const sn = snRow.createEl("input", { cls: "pb-check", attr: { type: "checkbox" } });
    sn.checked = this.fmt.showNumber !== false;
    sn.addEventListener("change", () => {
      this.fmt.showNumber = sn.checked;
      this.preview();
    });
    snRow.createSpan({ cls: "pb-rule-hint", text: "show the value beside the visual" });
    const maxRow = c.createDiv({ cls: "pb-rule-row" });
    const maxLabel = maxRow.createSpan({ cls: "pb-rule-label", text: "Out of" });
    const maxIn = maxRow.createEl("input", { attr: { type: "number", min: "1", placeholder: "column max" } });
    if (this.fmt.max != null) maxIn.value = String(this.fmt.max);
    maxIn.addEventListener("input", () => {
      const v = maxIn.value.trim();
      this.fmt.max = v === "" ? null : Number(v);
      this.preview();
    });
    const lowRow = c.createDiv({ cls: "pb-rule-row" });
    lowRow.createSpan({ cls: "pb-rule-label", text: "Red below" });
    const lowIn = lowRow.createEl("input", { attr: { type: "number", placeholder: "\u2153 of max" } });
    if (this.fmt.low != null) lowIn.value = String(this.fmt.low);
    lowIn.addEventListener("input", () => {
      const v = lowIn.value.trim();
      this.fmt.low = v === "" ? null : Number(v);
      this.preview();
    });
    const highRow = c.createDiv({ cls: "pb-rule-row" });
    highRow.createSpan({ cls: "pb-rule-label", text: "Green at" });
    const highIn = highRow.createEl("input", { attr: { type: "number", placeholder: "\u2154 of max" } });
    if (this.fmt.high != null) highIn.value = String(this.fmt.high);
    highIn.addEventListener("input", () => {
      const v = highIn.value.trim();
      this.fmt.high = v === "" ? null : Number(v);
      this.preview();
    });
    const decRow = c.createDiv({ cls: "pb-rule-row" });
    decRow.createSpan({ cls: "pb-rule-label", text: "Decimals" });
    const spin = decRow.createDiv({ cls: "pb-spin" });
    const dec = spin.createEl("input", { attr: { type: "text", inputmode: "numeric", placeholder: "as-is" } });
    if (this.fmt.decimals != null) dec.value = String(this.fmt.decimals);
    dec.addEventListener("input", () => {
      const v = dec.value.trim();
      this.fmt.decimals = v === "" ? null : Math.max(0, Math.min(8, parseInt(v, 10) || 0));
      this.preview();
    });
    const setDec = (n) => {
      this.fmt.decimals = n;
      dec.value = n == null ? "" : String(n);
      this.preview();
    };
    const step = (d) => {
      const cur2 = this.fmt.decimals;
      if (d > 0) setDec(cur2 == null ? 0 : Math.min(8, cur2 + 1));
      else setDec(cur2 == null || cur2 === 0 ? null : cur2 - 1);
    };
    const spinBtns = spin.createDiv({ cls: "pb-spin-btns" });
    const upB = spinBtns.createEl("button", { cls: "pb-spin-b", attr: { "aria-label": "More decimals" } });
    (0, import_obsidian.setIcon)(upB, "chevron-up");
    upB.addEventListener("click", () => step(1));
    const dnB = spinBtns.createEl("button", { cls: "pb-spin-b", attr: { "aria-label": "Fewer decimals" } });
    (0, import_obsidian.setIcon)(dnB, "chevron-down");
    dnB.addEventListener("click", () => step(-1));
    dec.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        step(-1);
      }
    });
    const thRow = c.createDiv({ cls: "pb-rule-row" });
    thRow.createSpan({ cls: "pb-rule-label", text: "Thousands" });
    const th = thRow.createEl("input", { cls: "pb-check", attr: { type: "checkbox" } });
    th.checked = !!this.fmt.thousands;
    th.addEventListener("change", () => {
      this.fmt.thousands = th.checked;
      this.preview();
    });
    thRow.createSpan({ cls: "pb-rule-hint", text: "group with commas (1,234,567)" });
    const preRow = c.createDiv({ cls: "pb-rule-row" });
    preRow.createSpan({ cls: "pb-rule-label", text: "Prefix" });
    const pre = preRow.createEl("input", { attr: { type: "text", placeholder: "e.g. unit or symbol" } });
    pre.value = this.fmt.prefix ?? "";
    pre.addEventListener("input", () => {
      this.fmt.prefix = pre.value || void 0;
      this.preview();
    });
    const sufRow = c.createDiv({ cls: "pb-rule-row" });
    sufRow.createSpan({ cls: "pb-rule-label", text: "Suffix" });
    const suf = sufRow.createEl("input", { attr: { type: "text", placeholder: "e.g. % or /mo" } });
    suf.value = this.fmt.suffix ?? "";
    suf.addEventListener("input", () => {
      this.fmt.suffix = suf.value || void 0;
      this.preview();
    });
    const curRow = c.createDiv({ cls: "pb-rule-row" });
    curRow.createSpan({ cls: "pb-rule-label", text: "Currency" });
    const cur = curRow.createEl("select", { cls: "dropdown" });
    cur.createEl("option", { attr: { value: "" }, text: "None" });
    for (const cc of CURRENCIES) cur.createEl("option", { attr: { value: cc.code }, text: `${cc.name} (${cc.symbol.trim()})` });
    cur.value = this.fmt.currency ?? "";
    cur.addEventListener("change", () => {
      this.fmt.currency = cur.value || void 0;
      if (this.fmt.currency) {
        this.fmt.thousands = true;
        th.checked = true;
        if (this.fmt.decimals == null) {
          this.fmt.decimals = 2;
          dec.value = "2";
        }
      }
      this.preview();
    });
    const sync = () => {
      const d = this.fmt.display ?? "plain";
      const visual = d === "bar" || d === "ring" || d === "stars" || d === "dots";
      show(colorRow, visual);
      show(snRow, visual || d === "traffic");
      show(maxRow, visual || d === "percent");
      show(lowRow, d === "traffic");
      show(highRow, d === "traffic");
      maxLabel.setText(d === "stars" ? "Stars" : d === "dots" ? "Dots" : "Out of");
      maxIn.placeholder = d === "stars" || d === "dots" ? "5" : "column max";
    };
    showSel.addEventListener("change", () => {
      this.fmt.display = showSel.value === "plain" ? void 0 : showSel.value;
      sync();
      this.preview();
    });
    const prevRow = c.createDiv({ cls: "pb-formula-prevrow" });
    prevRow.createSpan({ cls: "pb-rule-label", text: "Preview" });
    this.previewEl = prevRow.createDiv({ cls: "pb-numfmt-preview" });
    const getApplyTo = applyToChecklist(c, this.others);
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    const rm = btns.createEl("button", { cls: "pb-fn-del", text: "Remove" });
    onEventAsync(rm, "click", async () => {
      await this.plugin.applyNumberFormat([this.propId, ...getApplyTo()], null);
      this.close();
    });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const save = btns.createEl("button", { text: "Save", cls: "mod-cta" });
    onEventAsync(save, "click", async () => {
      await this.plugin.applyNumberFormat([this.propId, ...getApplyTo()], this.fmt);
      this.close();
    });
    sync();
    this.preview();
  }
  /** Render the current format at a representative value, so bars fill, stars
   *  light up, and text formats update as the controls change. */
  preview() {
    const fmt = this.fmt;
    const d = fmt.display ?? "plain";
    this.previewEl.empty();
    if (d === "plain") {
      this.previewEl.createSpan({ cls: "pb-formula-val", text: hasNumberFormat(fmt) ? formatNumberValue(1234567891e-3, fmt) : "1234567.891 (plain)" });
    } else if (d === "percent") {
      this.previewEl.createSpan({ cls: "pb-formula-val", text: formatPercent(65, fmt.max ?? 100, fmt.decimals ?? 0) });
    } else if (d === "stars" || d === "dots") {
      const count = fmt.max ?? 5;
      renderMeter(this.previewEl, Math.max(1, Math.round(count * 0.6)), count, fmt);
    } else {
      const max = fmt.max ?? 100;
      renderMeter(this.previewEl, 0.65 * max, max, fmt);
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
var DateFormatModal = class extends import_obsidian.Modal {
  constructor(app, plugin, propId, others = []) {
    super(app);
    this.plugin = plugin;
    this.propId = propId;
    this.others = others;
    this.fmt = { ...plugin.dateFormat(propId) ?? {} };
  }
  onOpen() {
    this.titleEl.setText("Date format");
    const c = this.contentEl;
    c.addClass("pb-fmt");
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: `How dates show in the "${this.propId.replace(/^(note|formula|file)\./, "")}" column.`
    });
    const styleRow = c.createDiv({ cls: "pb-rule-row" });
    styleRow.createSpan({ cls: "pb-rule-label", text: "Style" });
    const style = styleRow.createEl("select", { cls: "dropdown" });
    const PRESETS = [
      ["iso", "2026-07-12"],
      ["us", "07/12/2026"],
      ["eu", "12/07/2026"],
      ["medium", "Jul 12, 2026"],
      ["long", "July 12, 2026"],
      ["relative", "Relative (2 days ago)"]
    ];
    for (const [val, label] of PRESETS) style.createEl("option", { attr: { value: val }, text: label });
    style.value = this.fmt.preset ?? "iso";
    style.addEventListener("change", () => {
      this.fmt.preset = style.value;
      this.sample();
    });
    const timeRow = c.createDiv({ cls: "pb-rule-row" });
    timeRow.createSpan({ cls: "pb-rule-label", text: "Time" });
    const time = timeRow.createEl("select", { cls: "dropdown" });
    for (const [val, label] of [
      ["none", "No time"],
      ["24h", "24-hour (13:05)"],
      ["12h", "12-hour (1:05 PM)"]
    ])
      time.createEl("option", { attr: { value: val }, text: label });
    time.value = this.fmt.time ?? "none";
    time.addEventListener("change", () => {
      this.fmt.time = time.value;
      this.sample();
    });
    const sampRow = c.createDiv({ cls: "pb-formula-prevrow" });
    sampRow.createSpan({ cls: "pb-rule-label", text: "Sample" });
    this.sampleEl = sampRow.createSpan({ cls: "pb-formula-val" });
    this.sample();
    const getApplyTo = applyToChecklist(c, this.others);
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    const rm = btns.createEl("button", { cls: "pb-fn-del", text: "Remove" });
    onEventAsync(rm, "click", async () => {
      await this.plugin.applyDateFormat([this.propId, ...getApplyTo()], null);
      this.close();
    });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const save = btns.createEl("button", { text: "Save", cls: "mod-cta" });
    onEventAsync(save, "click", async () => {
      await this.plugin.applyDateFormat([this.propId, ...getApplyTo()], this.fmt);
      this.close();
    });
  }
  sample() {
    this.sampleEl.setText(formatDateValue("2026-07-12T13:05", this.fmt, todayKey()));
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PhoneFormatModal = class extends import_obsidian.Modal {
  constructor(app, plugin, propId, others = []) {
    super(app);
    this.plugin = plugin;
    this.propId = propId;
    this.others = others;
    this.fmt = { style: plugin.phoneFormat(propId)?.style ?? "raw" };
  }
  onOpen() {
    this.titleEl.setText("Phone format");
    const c = this.contentEl;
    c.addClass("pb-fmt");
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: `How numbers show in the "${this.propId.replace(/^note\./, "")}" column. The grouped styles apply to 10-digit US and Canadian numbers; a number with any country code other than +1 shows exactly as typed, so international numbers keep their own spacing.`
    });
    const styleRow = c.createDiv({ cls: "pb-rule-row" });
    styleRow.createSpan({ cls: "pb-rule-label", text: "Style" });
    const style = styleRow.createEl("select", { cls: "dropdown" });
    const STYLES = [
      ["raw", "As typed (free text)"],
      ["hyphens", "Hyphens: 800-555-1212"],
      ["parens", "Parentheses: (800) 555-1212"],
      ["spaces", "Spaces: 800 555 1212"],
      ["dots", "Dots: 800.555.1212"]
    ];
    for (const [val, label] of STYLES) style.createEl("option", { attr: { value: val }, text: label });
    style.value = this.fmt.style;
    style.addEventListener("change", () => {
      this.fmt.style = style.value;
      this.sample();
    });
    const sampRow = c.createDiv({ cls: "pb-formula-prevrow" });
    sampRow.createSpan({ cls: "pb-rule-label", text: "Sample" });
    this.sampleEl = sampRow.createSpan({ cls: "pb-formula-val" });
    this.sample();
    const getApplyTo = applyToChecklist(c, this.others);
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    const rm = btns.createEl("button", { cls: "pb-fn-del", text: "Remove" });
    onEventAsync(rm, "click", async () => {
      await this.plugin.applyPhoneFormat([this.propId, ...getApplyTo()], null);
      this.close();
    });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const save = btns.createEl("button", { text: "Save", cls: "mod-cta" });
    onEventAsync(save, "click", async () => {
      await this.plugin.applyPhoneFormat([this.propId, ...getApplyTo()], this.fmt);
      this.close();
    });
  }
  sample() {
    this.sampleEl.setText(formatPhoneValue("8005551212", this.fmt));
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ConfirmModal = class extends import_obsidian.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    this.titleEl.setText(this.opts.title);
    this.contentEl.createEl("p", { cls: "pb-modal-desc", text: this.opts.body });
    const btns = this.contentEl.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const ok = btns.createEl("button", { text: this.opts.confirmText ?? "Delete", cls: "mod-warning" });
    ok.addEventListener("click", () => {
      this.close();
      this.opts.onConfirm();
    });
    window.setTimeout(() => ok.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var SetPropertyModal = class extends import_obsidian.Modal {
  constructor(app, view, files) {
    super(app);
    this.view = view;
    this.files = files;
  }
  onOpen() {
    this.titleEl.setText(`Set a property on ${this.files.length} row${this.files.length === 1 ? "" : "s"}`);
    const c = this.contentEl;
    c.addClass("pb-fmt");
    const cols = this.view.noteColumns();
    if (!cols.length) {
      c.createEl("p", { cls: "pb-modal-desc", text: "This view has no property columns to set." });
      return;
    }
    const colRow = c.createDiv({ cls: "pb-rule-row" });
    colRow.createSpan({ cls: "pb-rule-label", text: "Column" });
    const sel = colRow.createEl("select", { cls: "dropdown" });
    for (const o of cols) sel.createEl("option", { attr: { value: o.key }, text: o.label });
    const valRow = c.createDiv({ cls: "pb-rule-row" });
    valRow.createSpan({ cls: "pb-rule-label", text: "Value" });
    const val = valRow.createEl("input", { attr: { type: "text", placeholder: "blank clears the property" } });
    c.createEl("p", {
      cls: "pb-modal-desc",
      text: "Checkboxes take true or false, lists take comma-separated values, dates take 2026-07-16 style input. Applied as one undoable change."
    });
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    const go = btns.createEl("button", { text: "Apply", cls: "mod-cta" });
    go.addEventListener("click", () => {
      this.close();
      void this.view.bulkSet(this.files, sel.value, val.value);
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PromptModal = class extends import_obsidian.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    this.titleEl.setText(this.opts.title);
    const inp = this.contentEl.createEl("input", { cls: "pb-prompt-input", attr: { type: "text" } });
    inp.value = this.opts.initial ?? "";
    const submit = () => {
      this.close();
      this.opts.onSubmit(inp.value);
    };
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    });
    const btns = this.contentEl.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    btns.createEl("button", { text: "Save", cls: "mod-cta" }).addEventListener("click", submit);
    window.setTimeout(() => {
      inp.focus();
      inp.select();
    }, 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ColumnFilterModal = class extends import_obsidian.Modal {
  constructor(app, colLabel, current, onSave) {
    super(app);
    this.colLabel = colLabel;
    this.onSave = onSave;
    this.op = current?.op ?? "contains";
    this.value = current?.value ?? "";
  }
  onOpen() {
    this.titleEl.setText(`Filter: ${this.colLabel}`);
    const c = this.contentEl;
    c.createEl("p", { cls: "pb-modal-desc", text: "Show only rows where this column meets the condition." });
    const opRow = c.createDiv({ cls: "pb-rule-row" });
    opRow.createSpan({ cls: "pb-rule-label", text: "Condition" });
    const opSel = opRow.createEl("select", { cls: "dropdown" });
    for (const o of FILTER_OPS) opSel.createEl("option", { attr: { value: o.op }, text: o.label });
    opSel.value = this.op;
    const valRow = c.createDiv({ cls: "pb-rule-row" });
    valRow.createSpan({ cls: "pb-rule-label", text: "Value" });
    const valIn = valRow.createEl("input", { attr: { type: "text", placeholder: "value" } });
    valIn.value = this.value;
    valIn.addEventListener("input", () => this.value = valIn.value);
    const sync = () => {
      const needs = FILTER_OPS.find((o) => o.op === opSel.value)?.needsValue ?? true;
      valRow.style.display = needs ? "" : "none";
    };
    opSel.addEventListener("change", () => {
      this.op = opSel.value;
      sync();
    });
    sync();
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { cls: "pb-fn-del", text: "Remove" }).addEventListener("click", () => {
      this.close();
      this.onSave(null);
    });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    btns.createEl("button", { text: "Apply", cls: "mod-cta" }).addEventListener("click", () => {
      this.close();
      this.onSave({ op: this.op, value: this.value });
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var AddColumnModal = class extends import_obsidian.Modal {
  constructor(app, onAdd) {
    super(app);
    this.onAdd = onAdd;
    this.name = "";
    this.type = "text";
  }
  onOpen() {
    this.titleEl.setText("Add column");
    this.modalEl.addClass("pb-addcol-modal");
    const c = this.contentEl;
    c.addClass("pb-addcol");
    c.createEl("p", { cls: "pb-modal-desc", text: "Adds a property column to this view. Click a cell to fill in values." });
    const nameRow = c.createDiv({ cls: "pb-rule-row" });
    nameRow.createSpan({ cls: "pb-rule-label", text: "Name" });
    const nameIn = nameRow.createEl("input", { attr: { type: "text", placeholder: "e.g. Insurance" } });
    nameIn.addEventListener("input", () => this.name = nameIn.value);
    const typeRow = c.createDiv({ cls: "pb-rule-row" });
    typeRow.createSpan({ cls: "pb-rule-label", text: "Type" });
    const typeSel = typeRow.createEl("select", { cls: "dropdown" });
    const group = (label, opts) => {
      const og = typeSel.createEl("optgroup", { attr: { label } });
      for (const [val, text] of opts) og.createEl("option", { attr: { value: val }, text });
    };
    group("Basic", [
      ["text", "Text"],
      ["number", "Number"],
      ["date", "Date"],
      ["datetime", "Date & time"],
      ["checkbox", "Checkbox"],
      ["list", "List"]
    ]);
    group("File", [
      ["ctime", "Created time"],
      ["mtime", "Last edited time"]
    ]);
    group("Rich", [
      ["url", "URL"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["person", "Person"],
      ["place", "Place"],
      ["id", "ID"],
      ["button", "Button"],
      ["verification", "Verification"],
      ["image", "Image"],
      ["files", "Files"]
    ]);
    group("Advanced", [
      ["select", "Select"],
      ["status", "Status"],
      ["formula", "Formula"]
    ]);
    typeSel.value = this.type;
    typeSel.addEventListener("change", () => {
      this.type = typeSel.value;
      const fileProp = this.type === "ctime" || this.type === "mtime";
      nameIn.disabled = fileProp;
      nameIn.placeholder = fileProp ? "built-in file property" : "e.g. Insurance";
    });
    const submit = () => {
      if (this.type !== "formula" && this.type !== "ctime" && this.type !== "mtime" && !this.name.trim()) {
        new Notice("Power Bases: name the column first.");
        return;
      }
      this.close();
      this.onAdd(this.name, this.type);
    };
    nameIn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
    });
    const btns = c.createDiv({ cls: "pb-modal-btns" });
    btns.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    btns.createEl("button", { text: "Add", cls: "mod-cta" }).addEventListener("click", submit);
    window.setTimeout(() => nameIn.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PowerCalendarView = class _PowerCalendarView extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-calendar";
    this.hoverDayEl = null;
  }
  onDataUpdated() {
    const root = this.rootEl;
    root.empty();
    root.className = "pb-root pb-cal";
    const dateProp = this.config.getAsPropertyId("dateProp");
    if (!dateProp) {
      this.hint("Pick a Date property in the view options to place pages on the calendar.");
      return;
    }
    const fmKey = frontmatterKey(dateProp);
    const mondayStart = String(this.config.get("weekStart") ?? "monday") !== "sunday";
    const byDay = /* @__PURE__ */ new Map();
    for (const en of this.data.data) {
      const key = dateKeyOf(this.text(en, dateProp));
      if (!key) continue;
      const arr = byDay.get(key);
      if (arr) arr.push(en);
      else byDay.set(key, [en]);
    }
    if (String(this.config.get("calMode") ?? "month") === "week") this.renderWeek(root, dateProp, fmKey, mondayStart, byDay);
    else this.renderMonth(root, fmKey, mondayStart, byDay);
  }
  static todayKey() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }
  /** A draggable, openable day chip shared by month and week. */
  dayChip(host, en, fromKey, fmKey, label) {
    const chip = host.createDiv({ cls: "pb-chip", attr: { title: en.file.basename } });
    chip.createSpan({ cls: "pb-chip-dot" }).style.background = this.plugin.hueFor(null, en.file.parent?.name ?? "");
    chip.createSpan({ cls: "pb-chip-name", text: label ?? en.file.basename });
    this.hoverable(chip, en.file);
    attachPointerGesture(chip, {
      ghostText: en.file.basename,
      onStart: () => chip.addClass("pb-drag-src"),
      onMove: (_dx, _dy, x, y) => this.highlightDay(x, y),
      onDrop: (_dx, _dy, x, y) => {
        chip.removeClass("pb-drag-src");
        const key = this.dayKeyAt(x, y);
        this.clearDayHighlight();
        if (key && key !== fromKey) {
          const raw = frontmatterOf(this.app, en.file)?.[fmKey];
          const next = typeof raw === "string" ? replaceDateKey(raw, key) : key;
          void this.plugin.writeBatch(`Rescheduled "${en.file.basename}" to ${key}`, [
            { file: en.file, assignments: { [fmKey]: next } }
          ]);
        }
      },
      onCancel: () => {
        chip.removeClass("pb-drag-src");
        this.clearDayHighlight();
      },
      onClick: (ev2) => {
        ev2.stopPropagation();
        this.open(en.file, ev2);
      }
    });
  }
  navBtn(head, icon, label, fn) {
    const b = head.createEl("button", { cls: "pb-cal-btn", attr: { "aria-label": label } });
    if (icon) (0, import_obsidian.setIcon)(b, icon);
    else b.setText(label);
    b.addEventListener("click", fn);
  }
  renderMonth(root, fmKey, mondayStart, byDay) {
    const now = /* @__PURE__ */ new Date();
    let ym = String(this.config.get("pb-month") ?? "");
    if (!/^\d{4}-\d{2}$/.test(ym)) ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const year = +ym.slice(0, 4);
    const month0 = +ym.slice(5, 7) - 1;
    const setMonth = (y, m) => {
      this.config.set("pb-month", `${y}-${String(m + 1).padStart(2, "0")}`);
      this.onDataUpdated();
    };
    const head = root.createDiv({ cls: "pb-cal-head" });
    this.navBtn(
      head,
      "chevron-left",
      "Previous month",
      () => month0 === 0 ? setMonth(year - 1, 11) : setMonth(year, month0 - 1)
    );
    head.createSpan({
      cls: "pb-cal-title",
      text: new Date(year, month0, 1).toLocaleDateString(void 0, { month: "long", year: "numeric" })
    });
    this.navBtn(head, "chevron-right", "Next month", () => month0 === 11 ? setMonth(year + 1, 0) : setMonth(year, month0 + 1));
    this.navBtn(head, "", "Today", () => setMonth(now.getFullYear(), now.getMonth()));
    const daysRow = root.createDiv({ cls: "pb-cal-days" });
    for (let i = 0; i < 7; i++) {
      const d = new Date(2026, 0, 4 + (mondayStart ? 1 : 0) + i);
      daysRow.createSpan({ text: d.toLocaleDateString(void 0, { weekday: "short" }) });
    }
    const todayKey2 = _PowerCalendarView.todayKey();
    const grid = root.createDiv({ cls: "pb-cal-grid" });
    for (const cell of monthGrid(year, month0, mondayStart)) {
      const c = grid.createDiv({
        cls: "pb-day" + (cell.inMonth ? "" : " pb-out") + (cell.key === todayKey2 ? " pb-today" : ""),
        attr: { "data-key": cell.key }
      });
      c.createDiv({ cls: "pb-day-num", text: String(cell.day) });
      const list = c.createDiv({ cls: "pb-day-list" });
      for (const en of byDay.get(cell.key) ?? []) this.dayChip(list, en, cell.key, fmKey);
      c.addEventListener("dblclick", () => {
        void this.createFileForView(void 0, (fm) => {
          fm[fmKey] = cell.key;
          this.plugin.stampCreate(fm);
        });
      });
    }
  }
  /** Week view: seven day columns over an hour grid. Timed pages sit at
   *  their hour; all-day pages (a date with no time) ride a strip on top. */
  renderWeek(root, dateProp, fmKey, mondayStart, byDay) {
    const todayKey2 = _PowerCalendarView.todayKey();
    let anchor = String(this.config.get("pb-week") ?? "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(anchor)) anchor = todayKey2;
    const days = weekDays(anchor, mondayStart);
    const setAnchor = (key) => {
      this.config.set("pb-week", key);
      this.onDataUpdated();
    };
    const head = root.createDiv({ cls: "pb-cal-head" });
    this.navBtn(head, "chevron-left", "Previous week", () => setAnchor(addDays(anchor, -7)));
    head.createSpan({
      cls: "pb-cal-title",
      text: (/* @__PURE__ */ new Date(days[0] + "T00:00")).toLocaleDateString(void 0, { month: "short", day: "numeric" }) + ", " + (/* @__PURE__ */ new Date(days[6] + "T00:00")).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" })
    });
    this.navBtn(head, "chevron-right", "Next week", () => setAnchor(addDays(anchor, 7)));
    this.navBtn(head, "", "Today", () => setAnchor(todayKey2));
    const HOUR_H = 34;
    const START_H = 7;
    const wk = root.createDiv({ cls: "pb-week" });
    const cols = wk.createDiv({ cls: "pb-week-cols" });
    cols.createDiv({ cls: "pb-week-gutter-head" });
    for (const key of days) {
      const d = /* @__PURE__ */ new Date(key + "T00:00");
      const h = cols.createDiv({ cls: "pb-week-colhead" + (key === todayKey2 ? " pb-today" : ""), attr: { "data-key": key } });
      h.createSpan({ cls: "pb-week-dow", text: d.toLocaleDateString(void 0, { weekday: "short" }) });
      h.createSpan({ cls: "pb-week-dnum", text: String(d.getDate()) });
      const allday = (byDay.get(key) ?? []).filter((en) => timeMinutes(this.text(en, dateProp)) == null);
      if (allday.length) {
        const strip = h.createDiv({ cls: "pb-week-allday" });
        for (const en of allday) this.dayChip(strip, en, key, fmKey);
      }
    }
    const scroll = wk.createDiv({ cls: "pb-week-scroll" });
    const gridEl = scroll.createDiv({ cls: "pb-week-grid" });
    gridEl.style.setProperty("--pb-hour", HOUR_H + "px");
    const gutter = gridEl.createDiv({ cls: "pb-week-gutter" });
    for (let hr = 0; hr < 24; hr++) {
      const lab = gutter.createDiv({ cls: "pb-week-hour" });
      lab.setText(hr === 0 ? "" : `${(hr + 11) % 12 + 1} ${hr < 12 ? "AM" : "PM"}`);
    }
    for (const key of days) {
      const col = gridEl.createDiv({ cls: "pb-week-col" + (key === todayKey2 ? " pb-today" : ""), attr: { "data-key": key } });
      for (let hr = 0; hr < 24; hr++) {
        const slot = col.createDiv({ cls: "pb-week-slot", attr: { "data-hour": String(hr) } });
        slot.addEventListener("dblclick", () => {
          void this.createFileForView(void 0, (fm) => {
            fm[fmKey] = `${key}T${String(hr).padStart(2, "0")}:00`;
            this.plugin.stampCreate(fm);
          });
        });
      }
      const timed = (byDay.get(key) ?? []).map((en) => ({ en, min: timeMinutes(this.text(en, dateProp)) })).filter((x) => x.min != null).sort((a, b) => a.min - b.min);
      for (const { en, min } of timed) {
        const ev2 = col.createDiv({ cls: "pb-week-event", attr: { title: en.file.basename } });
        ev2.style.top = min / 60 * HOUR_H + "px";
        ev2.style.setProperty("--pb-bar", this.plugin.hueFor(null, en.file.parent?.name ?? ""));
        ev2.createSpan({ cls: "pb-week-evtime", text: `${(Math.floor(min / 60) + 11) % 12 + 1}:${String(min % 60).padStart(2, "0")}` });
        ev2.createSpan({ cls: "pb-week-evname", text: en.file.basename });
        this.hoverable(ev2, en.file);
        ev2.addEventListener("click", (e) => this.open(en.file, e));
      }
    }
    scroll.scrollTop = START_H * HOUR_H;
  }
  highlightDay(x, y) {
    this.clearDayHighlight();
    const el = document.elementFromPoint(x, y)?.closest?.(".pb-day");
    if (el && this.rootEl.contains(el)) {
      el.addClass("pb-day-target");
      this.hoverDayEl = el;
    }
  }
  dayKeyAt(x, y) {
    const el = document.elementFromPoint(x, y)?.closest?.(".pb-day");
    return el && this.rootEl.contains(el) ? el.getAttribute("data-key") : null;
  }
  clearDayHighlight() {
    this.hoverDayEl?.removeClass("pb-day-target");
    this.hoverDayEl = null;
  }
};
var AGG_LABEL = { sum: "\u03A3", avg: "Avg", min: "Min", max: "Max", filled: "Filled", empty: "Empty" };
var PowerTableView = class extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-table";
    /** Collapsed toolbar-group labels (session only). */
    this.collapsed = /* @__PURE__ */ new Set();
    /** While a cell editor is open, data updates wait so typing survives. */
    this.editing = false;
    this.pendingUpdate = false;
    /** Set while a header drag reorders a column, so the click that follows does
     *  not also fire a rename. */
    this.draggedHeader = false;
    /** A fresh row, created quietly: the note is written without being opened
     *  (Bases' own creator opens a pane, which yanks focus out of the table),
     *  and the repaint that brings the row in drops straight into its editor. */
    this.pendingRowEdit = null;
    this.selected = /* @__PURE__ */ new Set();
    this.lastEntries = [];
    this.lastCols = [];
    this.selBar = null;
    this.lastSelPath = null;
  }
  onDataUpdated() {
    if (this.editing) {
      this.pendingUpdate = true;
      return;
    }
    this.resetChunkers();
    const root = this.rootEl;
    root.empty();
    root.className = "pb-root pb-tablewrap";
    const head = root.createDiv({ cls: "pb-view-head pb-table-head" });
    this.filterBox(head, "Filter rows\u2026");
    const order = this.config.getOrder();
    const hideName = this.config.get("pbHideName") === true;
    const cols = hideName ? order.filter((p) => p !== "file.name") : order.includes("file.name") ? order : ["file.name", ...order];
    this.lastCols = cols;
    let entries = this.applyColumnFilters(this.filtered(this.data.data));
    const sortCfg = this.sortConfig();
    if (sortCfg) entries = this.sortEntries(entries, sortCfg);
    const rankKey = this.resolveRankKey(sortCfg);
    if (rankKey) entries = orderByRank(entries, (en) => this.rawRankOf(en, rankKey));
    const rowsDraggable = !sortCfg;
    this.lastEntries = entries;
    this.selected = new Set([...this.selected].filter((p) => entries.some((en) => en.file.path === p)));
    const addColBtn = head.createEl("button", { cls: "pb-fx-add", attr: { "aria-label": "Add a column" } });
    (0, import_obsidian.setIcon)(addColBtn.createSpan(), "plus");
    addColBtn.createSpan({ text: "Column" });
    addColBtn.addEventListener("click", () => this.openAddColumn());
    const fxBtn = head.createEl("button", { cls: "pb-fx-add", attr: { "aria-label": "Add a formula column" } });
    (0, import_obsidian.setIcon)(fxBtn.createSpan(), "sigma");
    fxBtn.createSpan({ text: "Formula" });
    fxBtn.addEventListener("click", () => this.openFormulaModal());
    head.createSpan({ cls: "pb-view-count", text: `${entries.length}` });
    if (this.rootEl.closest(".internal-embed")) {
      this.decorateEmbed();
      window.setTimeout(() => this.decorateEmbed(), 0);
    }
    this.selBar = root.createDiv({ cls: "pb-selbar" });
    this.selBar.createSpan({ cls: "pb-selbar-count" });
    const sbBtn = (label, icon, cb, danger = false) => {
      const b = this.selBar.createEl("button", { cls: "pb-selbar-btn" + (danger ? " is-danger" : "") });
      (0, import_obsidian.setIcon)(b.createSpan(), icon);
      b.createSpan({ text: label });
      b.addEventListener("click", cb);
    };
    sbBtn("Set property", "pencil", () => new SetPropertyModal(this.app, this, this.selectedFiles()).open());
    sbBtn("Duplicate", "copy", () => void this.duplicateRows(this.selectedFiles()));
    sbBtn("Delete", "trash-2", () => this.deleteRows(this.selectedFiles()), true);
    const sbClr = this.selBar.createEl("button", { cls: "pb-selbar-btn", attr: { "aria-label": "Clear selection" } });
    (0, import_obsidian.setIcon)(sbClr, "x");
    sbClr.addEventListener("click", () => {
      this.selected.clear();
      this.updateSelUi();
    });
    const allow = this.query.trim() || this.columnFilters().length ? new Set(entries.map((en) => en.file.path)) : null;
    const aggOf = (p) => {
      const v = String(this.config.get("agg:" + p) ?? "none");
      return ["sum", "avg", "min", "max", "filled", "empty"].includes(v) ? v : "none";
    };
    const colorOf = (p) => String(this.config.get("color:" + p) ?? "none");
    const anyAgg = cols.some((p) => aggOf(p) !== "none");
    const RU_LABEL = { count: "#", sum: "\u03A3", avg: "Avg", min: "Min", max: "Max", filled: "Filled", list: "" };
    const rollups = [];
    for (const n of [1, 2, 3]) {
      const link = this.config.getAsPropertyId(`ru${n}:link`);
      if (!link) continue;
      const target = this.config.getAsPropertyId(`ru${n}:target`);
      const opRaw = String(this.config.get(`ru${n}:op`) ?? "count");
      const op = ["count", "sum", "avg", "min", "max", "filled", "list"].includes(opRaw) ? opRaw : "count";
      if (op !== "count" && !target) continue;
      const dir = String(this.config.get(`ru${n}:dir`) ?? "from") === "to" ? "to" : "from";
      const label = (dir === "to" ? "\u21D0 " : "") + (op === "count" ? "# " + this.config.getDisplayName(link) : (RU_LABEL[op] ? RU_LABEL[op] + " " : "") + this.config.getDisplayName(target));
      rollups.push({ linkKey: frontmatterKey(link), targetKey: target ? frontmatterKey(target) : "", op, dir, label });
    }
    const reverseMaps = /* @__PURE__ */ new Map();
    for (let i = 0; i < rollups.length; i++) {
      const r = rollups[i];
      if (r.dir !== "to") continue;
      const map = /* @__PURE__ */ new Map();
      for (const mf of this.app.vault.getMarkdownFiles()) {
        const raw = frontmatterOf(this.app, mf)?.[r.linkKey];
        if (raw == null) continue;
        for (const nm of linkTargets(raw)) {
          const dest = this.app.metadataCache.getFirstLinkpathDest(nm, mf.path);
          if (!dest) continue;
          const arr = map.get(dest.path);
          if (!arr) map.set(dest.path, [mf]);
          else if (!arr.includes(mf)) arr.push(mf);
        }
      }
      reverseMaps.set(i, map);
    }
    const width = cols.length + rollups.length;
    const ranges = /* @__PURE__ */ new Map();
    for (const p of cols) {
      if (colorOf(p) !== "scale") continue;
      let min = Infinity;
      let max = -Infinity;
      for (const en of entries) {
        const n = parseNumber(this.text(en, p));
        if (n == null) continue;
        if (n < min) min = n;
        if (n > max) max = n;
      }
      if (min !== Infinity) ranges.set(p, { min, max });
    }
    const colMax = /* @__PURE__ */ new Map();
    for (const p of cols) {
      const nf = this.plugin.numberFormat(String(p));
      if (!nf || !nf.display || nf.display === "plain") continue;
      let max = 0;
      for (const en of entries) {
        const n = parseNumber(this.text(en, p));
        if (n != null && n > max) max = n;
      }
      colMax.set(String(p), max || 1);
    }
    const table = root.createEl("table", { cls: "pb-table" });
    const hr = table.createEl("thead").createEl("tr");
    const frozen = this.freezeCount();
    const lefts = [];
    let totalW = 0;
    let ci = 0;
    for (const p of cols) {
      const th = hr.createEl("th", { cls: "pb-th pb-th-menu" });
      const wrap = th.createDiv({ cls: "pb-th-typed" });
      if (p.startsWith("formula.")) (0, import_obsidian.setIcon)(wrap.createSpan({ cls: "pb-th-fx" }), "sigma");
      wrap.createSpan({ cls: "pb-th-label", text: this.config.getDisplayName(p) });
      const ft = p.startsWith("note.") ? this.plugin.fieldType(frontmatterKey(p)) : null;
      if (ft) wrap.createSpan({ cls: "pb-th-type", text: PB_TYPE_LABEL[ft] });
      if (sortCfg && sortCfg.prop === String(p)) (0, import_obsidian.setIcon)(wrap.createSpan({ cls: "pb-th-mark" }), sortCfg.dir === "DESC" ? "arrow-down" : "arrow-up");
      if (this.columnFilter(String(p))) (0, import_obsidian.setIcon)(wrap.createSpan({ cls: "pb-th-mark" }), "filter");
      th.setAttribute("aria-label", "Click for column options");
      th.addEventListener("contextmenu", (ev2) => {
        ev2.preventDefault();
        this.openColumnMenu(th, p, { x: ev2.clientX, y: ev2.clientY });
      });
      const w = this.applyColWidth(th, String(p));
      lefts.push(totalW);
      if (ci < frozen) {
        th.addClass("pb-frozen");
        th.style.left = totalW + "px";
        if (ci === frozen - 1) th.addClass("pb-frozen-edge");
      }
      totalW += w;
      this.attachColResize(th, String(p));
      this.attachColReorder(th, p, cols, hr);
      ci++;
    }
    const RU_W = 140;
    const ADD_W = 34;
    for (const r of rollups) {
      hr.createEl("th", { cls: "pb-th pb-ru", text: r.label });
      totalW += RU_W;
    }
    const addTh = hr.createEl("th", { cls: "pb-th pb-th-add", attr: { "aria-label": "Add a column" } });
    totalW += ADD_W;
    (0, import_obsidian.setIcon)(addTh.createSpan(), "plus");
    addTh.addEventListener("click", () => this.openAddColumn());
    const firstTh = hr.cells[0];
    if (firstTh && entries.length) {
      firstTh.addClass("pb-selhost");
      const all = firstTh.createEl("input", { cls: "pb-rowsel pb-selall", attr: { type: "checkbox", "aria-label": "Select all rows" } });
      all.checked = this.selected.size === entries.length;
      all.addEventListener("click", (ev2) => {
        ev2.stopPropagation();
        if (this.selected.size === entries.length) this.selected.clear();
        else entries.forEach((en) => this.selected.add(en.file.path));
        this.updateSelUi();
      });
    }
    table.style.width = totalW + "px";
    const tbody = table.createEl("tbody");
    const rawOf = (en, fmKey) => frontmatterOf(this.app, en.file)?.[fmKey];
    const renderRow = (en) => {
      const tr = tbody.createEl("tr", { cls: "pb-tr", attr: { "data-path": en.file.path } });
      let ri = 0;
      for (const p of cols) {
        const td = tr.createEl("td", { cls: "pb-td" });
        if (this.config.get("wrap:" + String(p)) === true) td.addClass("pb-wrap");
        if (ri < frozen) {
          td.addClass("pb-frozen");
          td.style.left = lefts[ri] + "px";
          if (ri === frozen - 1) td.addClass("pb-frozen-edge");
        }
        ri++;
        const s = this.text(en, p);
        const editable = p.startsWith("note.");
        const fmKey = editable ? frontmatterKey(p) : null;
        const raw = fmKey ? rawOf(en, fmKey) : void 0;
        const ft = fmKey ? this.plugin.fieldType(fmKey) : null;
        if (p === "file.name") {
          const link = td.createSpan({ cls: "pb-link", text: s });
          link.addEventListener("click", (ev2) => this.open(en.file, ev2));
          this.hoverable(link, en.file);
          this.openable(link, en.file);
        } else if (ft) {
          this.renderTypedCell(td, en, fmKey, ft, raw, s);
        } else {
          const stored = fmKey ? this.plugin.storedKind(fmKey) : null;
          let kind = stored ?? inferKind(raw);
          if (!stored && raw === void 0 && fmKey) kind = this.plugin.assignedKind(fmKey) ?? "text";
          if (editable && kind === "checkbox") {
            const cb = td.createEl("input", { cls: "pb-check", attr: { type: "checkbox" } });
            cb.checked = raw === true;
            cb.addEventListener("change", () => {
              void this.plugin.writeBatch(
                `${cb.checked ? "Checked" : "Unchecked"} ${this.config.getDisplayName(p)} on "${en.file.basename}"`,
                [{ file: en.file, assignments: { [fmKey]: cb.checked } }]
              );
            });
          } else {
            const nf = this.plugin.numberFormat(String(p));
            const n = nf && hasNumberFormat(nf) ? parseNumber(s) : null;
            if (n != null && isMeter(nf)) {
              renderMeter(td, n, colMax.get(String(p)) ?? 1, nf);
            } else if (n != null && nf.display === "percent") {
              td.setText(formatPercent(n, nf.max ?? (colMax.get(String(p)) ?? 1), nf.decimals ?? 0));
            } else if (kind === "list" && editable) {
              const arr = Array.isArray(raw) ? raw.map((v) => String(v)) : raw == null || raw === "" ? [] : [String(raw)];
              for (const it of arr) {
                if (!it.trim() || it === "null") continue;
                td.createSpan({ cls: "pb-person", text: it }).style.setProperty("--pb-c", this.plugin.hueFor(fmKey, it));
              }
            } else {
              td.setText(this.display(en, p, s));
            }
          }
          if (editable && kind !== "checkbox") {
            this.registerEdit(td, () => this.beginEdit(td, en, fmKey, kind, raw));
          }
          const mode = colorOf(p);
          if (mode === "value" && s && kind !== "checkbox") {
            td.addClass("pb-cat");
            td.style.setProperty("--pb-c", this.plugin.hueFor(fmKey, s));
            td.addEventListener("contextmenu", (ev2) => {
              if (!fmKey) return;
              ev2.preventDefault();
              const menu = new import_obsidian.Menu();
              fillValueColorMenu(menu, this.plugin, fmKey, s, () => this.onDataUpdated());
              menu.showAtMouseEvent(ev2);
            });
          } else if (mode === "scale") {
            const r = ranges.get(p);
            const n = parseNumber(s);
            const pos = r && n != null ? scalePos(n, r.min, r.max) : null;
            if (pos != null) {
              td.addClass("pb-scale");
              td.style.setProperty("--pb-p", pos.toFixed(3));
            }
          }
        }
      }
      for (let i = 0; i < rollups.length; i++) {
        const r = rollups[i];
        const td = tr.createEl("td", { cls: "pb-td pb-ru" });
        let files;
        if (r.dir === "to") {
          files = reverseMaps.get(i)?.get(en.file.path) ?? [];
        } else {
          files = [];
          const raw = frontmatterOf(this.app, en.file)?.[r.linkKey];
          for (const nm of linkTargets(raw)) {
            const lf = this.app.metadataCache.getFirstLinkpathDest(nm, en.file.path);
            if (lf) files.push(lf);
          }
        }
        const values = r.targetKey ? files.map((lf) => frontmatterOf(this.app, lf)?.[r.targetKey]) : [];
        td.setText(rollup(r.op, files.length, values));
      }
      const firstTd = tr.cells[0];
      if (firstTd) {
        firstTd.addClass("pb-selhost");
        const cb = firstTd.createEl("input", { cls: "pb-rowsel", attr: { type: "checkbox", "aria-label": "Select row" } });
        cb.checked = this.selected.has(en.file.path);
        if (cb.checked) tr.addClass("is-selected");
        cb.addEventListener("click", (ev2) => {
          ev2.stopPropagation();
          this.toggleRowSelect(en.file.path, ev2.shiftKey);
        });
        if (!sortCfg && flat) {
          const grip = firstTd.createSpan({ cls: "pb-rowgrip", attr: { "aria-label": "Drag to reorder" } });
          (0, import_obsidian.setIcon)(grip, "grip-vertical");
          this.attachRowDrag(grip, tr, rankKey);
        }
      }
      tr.addEventListener("contextmenu", (ev2) => {
        if (ev2.defaultPrevented) return;
        ev2.preventDefault();
        const menu = new import_obsidian.Menu();
        menu.addItem(
          (i) => i.setTitle(this.selected.has(en.file.path) ? "Deselect row" : "Select row").setIcon("check-square").onClick(() => this.toggleRowSelect(en.file.path, false))
        );
        menu.addItem(
          (i) => i.setTitle("Open in new tab").setIcon("file-plus").onClick(() => void this.app.workspace.getLeaf("tab").openFile(en.file))
        );
        menu.addItem((i) => i.setTitle("Insert row above").setIcon("corner-left-up").onClick(() => void this.insertRowNear(en, 0)));
        menu.addItem((i) => i.setTitle("Insert row below").setIcon("corner-left-down").onClick(() => void this.insertRowNear(en, 1)));
        menu.addItem((i) => i.setTitle("Duplicate row").setIcon("copy").onClick(() => void this.duplicateRows([en.file])));
        menu.addItem((i) => i.setTitle("Delete row").setIcon("trash-2").onClick(() => this.deleteRows([en.file])));
        menu.addSeparator();
        this.app.workspace.trigger("file-menu", menu, en.file, "powerbases-table");
        menu.showAtMouseEvent(ev2);
      });
    };
    const summaryRow = (rows, cls, label) => {
      const tr = tbody.createEl("tr", { cls });
      for (const p of cols) {
        const td = tr.createEl("td", { cls: "pb-td pb-agg" });
        const op = aggOf(p);
        if (op === "none") continue;
        const n = aggregate(rows.map((en) => this.text(en, p)), op);
        if (n != null) {
          td.createSpan({ cls: "pb-agg-op", text: (label ? label + " " : "") + AGG_LABEL[op] });
          td.createSpan({ text: " " + this.aggDisplay(p, n) });
        }
      }
      for (let i = 0; i < rollups.length; i++) tr.createEl("td", { cls: "pb-td pb-agg" });
    };
    const groups = this.data.groupedData.map((g) => {
      let rows = allow ? g.entries.filter((en) => allow.has(en.file.path)) : g.entries;
      if (sortCfg) rows = this.sortEntries(rows, sortCfg);
      return { g, rows };
    });
    const flat = groups.length === 1 && groups[0].g.key === void 0;
    if (rowsDraggable && flat && entries.length) table.addClass("pb-hasrank");
    for (const { g, rows } of groups) {
      const grouped = g.key !== void 0;
      if (grouped && !rows.length) continue;
      const label = grouped ? g.hasKey() ? String(g.key) : "No value" : null;
      let isCollapsed = false;
      if (label != null) {
        isCollapsed = this.collapsed.has(label);
        const gtr = tbody.createEl("tr", { cls: "pb-grouprow" });
        const td = gtr.createEl("td", { attr: { colspan: String(width) } });
        const chev = td.createSpan({ cls: "pb-gchev" + (isCollapsed ? "" : " is-open") });
        (0, import_obsidian.setIcon)(chev, "chevron-right");
        td.createSpan({ text: label + " " });
        td.createSpan({ cls: "pb-gcount", text: String(rows.length) });
        gtr.addEventListener("click", () => {
          if (this.collapsed.has(label)) this.collapsed.delete(label);
          else this.collapsed.add(label);
          this.onDataUpdated();
        });
      }
      if (!isCollapsed) {
        if (flat) this.chunk(tbody, root, rows, (en) => renderRow(en), 140, "tr");
        else for (const en of rows) renderRow(en);
      }
      if (label != null && anyAgg) summaryRow(rows, "pb-tr pb-subtotal", null);
    }
    if (!entries.length) {
      tbody.createEl("tr").createEl("td", { attr: { colspan: String(width) }, cls: "pb-empty", text: this.query ? "No rows match." : "No rows." });
    }
    const foot = table.createEl("tfoot");
    const addTr = foot.createEl("tr", { cls: "pb-addrow" });
    const addTd = addTr.createEl("td", { attr: { colspan: String(width) }, cls: "pb-addrow-td" });
    const addIn = addTd.createSpan({ cls: "pb-addrow-in" });
    (0, import_obsidian.setIcon)(addIn.createSpan(), "plus");
    addIn.createSpan({ text: "New" });
    addTd.addEventListener("click", () => void this.addRow(0));
    if (anyAgg) {
      const fr = foot.createEl("tr", { cls: "pb-foot" });
      for (const p of cols) {
        const td = fr.createEl("td", { cls: "pb-td pb-agg" });
        const op = aggOf(p);
        if (op === "none") continue;
        const n = aggregate(entries.map((en) => this.text(en, p)), op);
        if (n != null) {
          td.createSpan({ cls: "pb-agg-op", text: AGG_LABEL[op] });
          td.createSpan({ text: " " + this.aggDisplay(p, n) });
        }
      }
      for (let i = 0; i < rollups.length; i++) fr.createEl("td", { cls: "pb-td pb-agg" });
    }
    this.updateSelUi();
    if (this.pendingRowEdit) {
      const pe = this.pendingRowEdit;
      this.pendingRowEdit = null;
      const tr = tbody.querySelector(`tr.pb-tr[data-path="${CSS.escape(pe.path)}"]`);
      if (tr) {
        const cells = Array.from(tr.cells);
        const target = (cells[pe.ci]?.pbEdit ? cells[pe.ci] : cells.find((c) => c.pbEdit)) ?? null;
        if (target) {
          target.scrollIntoView({ block: "nearest" });
          target.pbEdit?.();
        }
      }
    }
  }
  /** Frontmatter keys seen across the current rows (for config datalists). */
  notePropKeys() {
    const set = /* @__PURE__ */ new Set();
    for (const en of this.data.data.slice(0, 300)) {
      const fm = frontmatterOf(this.app, en.file);
      if (fm) for (const k of Object.keys(fm)) set.add(k);
    }
    return [...set].sort();
  }
  /** The "Set type" submenu: a native kind (checkbox, number, date, ...), a
   *  Power-Base field type, or Automatic. A column is one or the other. */
  typeMenuItems(fmKey) {
    const curField = this.plugin.fieldType(fmKey);
    const curKind = this.plugin.storedKind(fmKey);
    const items = [
      { label: "Automatic (Obsidian type)", checked: curField == null && curKind == null, onClick: () => void this.setColumnKind(fmKey, null) }
    ];
    const NATIVE = [
      ["text", "Text", "type"],
      ["number", "Number", "hash"],
      ["date", "Date", "calendar"],
      ["datetime", "Date & time", "calendar-clock"],
      ["checkbox", "Checkbox", "check-square"],
      ["list", "List", "list"]
    ];
    for (const [k, label, icon] of NATIVE) {
      items.push({ icon, label, checked: curField == null && curKind === k, onClick: () => void this.setColumnKind(fmKey, k) });
    }
    for (const t of PB_FIELD_TYPES) {
      items.push({ icon: PB_TYPE_ICON[t], label: PB_TYPE_LABEL[t], checked: curField === t, onClick: () => void this.setColumnFieldType(fmKey, t) });
    }
    if (curField === "id" || curField === "button" || curField === "verification") {
      items.push({ icon: "settings-2", label: `Configure ${PB_TYPE_LABEL[curField]}\u2026`, onClick: () => new FieldConfigModal(this.app, this.plugin, fmKey, curField, this.notePropKeys()).open() });
    }
    return items;
  }
  /** Set a column to a native editor kind (clears any Power-Base field type). */
  async setColumnKind(fmKey, kind) {
    await this.plugin.setFieldType(fmKey, null);
    await this.plugin.setStoredKind(fmKey, kind);
    if (kind) this.setObsidianType(fmKey, kind === "list" ? "multitext" : kind);
    this.plugin.refreshAll();
  }
  /** Set a column to a Power-Base field type (clears any native kind override). */
  async setColumnFieldType(fmKey, ft) {
    await this.plugin.setStoredKind(fmKey, null);
    await this.plugin.setFieldType(fmKey, ft);
  }
  /** The "Calculate" submenu items: set the column's summary aggregate (or none). */
  calcMenuItems(pid) {
    const cur = String(this.config.get("agg:" + pid) ?? "none");
    const opts = [
      ["none", "None"],
      ["sum", "Sum"],
      ["avg", "Average"],
      ["min", "Minimum"],
      ["max", "Maximum"],
      ["filled", "Count filled"],
      ["empty", "Count empty"]
    ];
    return opts.map(([op, label]) => ({
      label,
      checked: cur === op,
      onClick: () => {
        this.config.set("agg:" + pid, op === "none" ? null : op);
        this.onDataUpdated();
      }
    }));
  }
  /** The "Sort" submenu items: sort the table by this column, or clear it. */
  sortMenuItems(pid) {
    const cur = this.sortConfig();
    return [
      { icon: "arrow-up", label: "Ascending", checked: cur?.prop === pid && cur.dir === "ASC", onClick: () => this.setSort(pid, "ASC") },
      { icon: "arrow-down", label: "Descending", checked: cur?.prop === pid && cur.dir === "DESC", onClick: () => this.setSort(pid, "DESC") },
      { icon: "x", label: "Clear sort", onClick: () => this.setSort(null) }
    ];
  }
  /* ----- formula columns (native Bases formulas, edited here) ----- */
  /** Sample rows for the formula preview (bounded so the picker stays light). */
  sampleEntries() {
    return this.data.data.slice(0, 50);
  }
  viewName() {
    return this.config.name;
  }
  currentOrder() {
    const order = this.config.getOrder().map((p) => String(p));
    return order.includes("file.name") ? order : ["file.name", ...order];
  }
  /* ----- number + date formatting (per column, applied to cells) ----- */
  /** A cell's display text: the column's number format when the value is a
   *  number, its date format when the value is a date (file dates read from
   *  the file's stat so they format regardless of how Bases renders them),
   *  else the plain rendered string. */
  display(en, p, s) {
    const pid = String(p);
    const nf = this.plugin.numberFormat(pid);
    if (nf && hasNumberFormat(nf)) {
      const n = parseNumber(s);
      if (n != null) return formatNumberValue(n, nf);
    }
    const df = this.plugin.dateFormat(pid);
    if (df && hasDateFormat(df)) {
      const src = pid === "file.mtime" ? localDateString(en.file.stat.mtime) : pid === "file.ctime" ? localDateString(en.file.stat.ctime) : s;
      return formatDateValue(src, df, todayKey());
    }
    return s;
  }
  /** An aggregate value formatted with the column's number format if set. */
  aggDisplay(p, n) {
    const fmt = this.plugin.numberFormat(String(p));
    return fmt && hasNumberFormat(fmt) ? formatNumberValue(n, fmt) : formatNum(n);
  }
  /** Whether a column reads mostly as numbers or dates, by sampling its cells;
   *  drives which "… format" menu item shows and the bulk-apply picker. */
  columnKind(p) {
    if (p === "file.mtime" || p === "file.ctime") return "date";
    if (p === "file.name") return "other";
    if (String(p).startsWith("note.")) {
      const fmKey = frontmatterKey(p);
      const k = this.plugin.storedKind(fmKey) ?? this.plugin.assignedKind(fmKey);
      if (k === "number") return "number";
      if (k === "date" || k === "datetime") return "date";
    }
    let num = 0;
    let date = 0;
    let seen = 0;
    for (const en of this.data.data) {
      const s = this.text(en, p);
      if (!s) continue;
      if (dateKeyOf(s)) date++;
      else if (parseNumber(s) != null) num++;
      if (++seen >= 12) break;
    }
    if (date > 0 && date >= num) return "date";
    if (num > 0) return "number";
    return "other";
  }
  /** The view's other columns of a given kind, for the bulk-apply picker. */
  formattableColumns(kind, exclude) {
    const out = [];
    for (const p of this.currentOrder()) {
      if (p === "file.name" || p === exclude) continue;
      if (this.columnKind(p) === kind) out.push({ propId: p, label: this.config.getDisplayName(p) });
    }
    return out;
  }
  openNumberFormat(propId) {
    new NumberFormatModal(this.app, this.plugin, propId, this.formattableColumns("number", propId)).open();
  }
  openDateFormat(propId) {
    new DateFormatModal(this.app, this.plugin, propId, this.formattableColumns("date", propId)).open();
  }
  /** The view's other Phone columns, for the bulk-apply picker. */
  phoneColumns(exclude) {
    const out = [];
    for (const p of this.currentOrder()) {
      if (p === exclude || !p.startsWith("note.")) continue;
      if (this.plugin.fieldType(frontmatterKey(p)) === "phone")
        out.push({ propId: p, label: this.config.getDisplayName(p) });
    }
    return out;
  }
  openPhoneFormat(propId) {
    new PhoneFormatModal(this.app, this.plugin, propId, this.phoneColumns(propId)).open();
  }
  /* ----- add a new property column (Notion's "+" at the header end) ----- */
  openAddColumn(at) {
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: adding columns needs a saved .base file; an inline base block has none.");
      return;
    }
    new AddColumnModal(this.app, (name, type) => void this.addColumn(file, name, type, at)).open();
  }
  /** Register the Obsidian type of a new property so empty cells edit right. */
  setObsidianType(name, obsType) {
    try {
      const mtm = this.app.metadataTypeManager;
      mtm?.setType?.(name, obsType);
    } catch {
    }
  }
  /** Create a new column of any offered type: a plain property (with its
   *  Obsidian type), a Power-Base field type, a colored Select/Status, or a
   *  formula, then open its format/config dialog where that helps. */
  async addColumn(file, rawName, type, at) {
    if (type === "formula") {
      this.openFormulaModal();
      return;
    }
    if (type === "ctime" || type === "mtime") {
      const pid = type === "ctime" ? "file.ctime" : "file.mtime";
      if (this.currentOrder().includes(pid)) {
        new Notice("Power Bases: that column is already in this view.");
        return;
      }
      try {
        await addViewColumn(this.app, file, pid, this.viewName(), this.type, this.currentOrder(), void 0, at);
      } catch (e) {
        new Notice("Power Bases: could not add the column. " + e.message);
        return;
      }
      this.plugin.refreshAll();
      this.openDateFormat(pid);
      return;
    }
    const name = rawName.replace(/[\r\n]+/g, " ").replace(/[:#[\]{}",.]/g, "").replace(/\s+/g, " ").trim();
    if (!name) {
      new Notice("Power Bases: name the column first.");
      return;
    }
    const propId = "note." + name;
    const NATIVE = { text: "text", number: "number", date: "date", datetime: "datetime", checkbox: "checkbox", list: "multitext" };
    const isField = PB_FIELD_TYPES.includes(type);
    this.setObsidianType(name, NATIVE[type] ?? (type === "files" ? "multitext" : "text"));
    if (NATIVE[type]) await this.plugin.setStoredKind(name, type);
    else if (type === "select" || type === "status") await this.plugin.setStoredKind(name, "text");
    const viewOpts = type === "select" || type === "status" ? { ["color:" + propId]: "value" } : void 0;
    try {
      await addViewColumn(this.app, file, propId, this.viewName(), this.type, this.currentOrder(), viewOpts, at);
    } catch (e) {
      new Notice("Power Bases: could not add the column. " + e.message);
      return;
    }
    if (isField) await this.plugin.setFieldType(name, type);
    this.plugin.refreshAll();
    new Notice(`Power Bases: added the "${name}" column.`);
    if (type === "number") this.openNumberFormat(propId);
    else if (type === "date" || type === "datetime") this.openDateFormat(propId);
    else if (type === "button" || type === "id" || type === "verification") {
      new FieldConfigModal(this.app, this.plugin, name, type, this.notePropKeys()).open();
    }
  }
  /* ----- client-side sort, per-column filters, and freeze ----- */
  sortConfig() {
    const c = parseJson(this.config.get("pbSort"));
    return c && c.prop ? { prop: c.prop, dir: c.dir === "DESC" ? "DESC" : "ASC" } : null;
  }
  setSort(prop, dir = "ASC") {
    this.config.set("pbSort", prop ? JSON.stringify({ prop, dir }) : null);
    this.onDataUpdated();
  }
  sortEntries(entries, cfg) {
    const sign = cfg.dir === "DESC" ? -1 : 1;
    const key = cfg.prop;
    return entries.slice().sort((a, b) => {
      const sa = this.text(a, key);
      const sb = this.text(b, key);
      if (sa === sb) return 0;
      if (sa === "") return 1;
      if (sb === "") return -1;
      const na = parseNumber(sa);
      const nb = parseNumber(sb);
      const cmp = na != null && nb != null ? na - nb : sa.localeCompare(sb);
      return cmp * sign;
    });
  }
  columnFilter(pid) {
    const f = parseJson(this.config.get("filter:" + pid));
    return f && f.op ? { op: f.op, value: f.value ?? "" } : null;
  }
  columnFilters() {
    const out = [];
    for (const p of this.currentOrder()) {
      const f = this.columnFilter(String(p));
      if (f) out.push({ pid: String(p), op: f.op, value: f.value });
    }
    return out;
  }
  setFilter(pid, f) {
    this.config.set("filter:" + pid, f ? JSON.stringify(f) : null);
    this.onDataUpdated();
  }
  applyColumnFilters(entries) {
    const filters = this.columnFilters();
    if (!filters.length) return entries;
    return entries.filter((en) => filters.every((f) => matchesColumnFilter(this.text(en, f.pid), f.op, f.value)));
  }
  freezeCount() {
    const n = Number(this.config.get("freeze") ?? 0);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
  }
  setFreeze(n) {
    this.config.set("freeze", n > 0 ? n : null);
    this.onDataUpdated();
  }
  /** The type icon shown on a column's flyout button (and its meaning). */
  columnIcon(p) {
    if (p === "file.name") return "file-text";
    if (p === "file.mtime" || p === "file.ctime") return "calendar-clock";
    if (p.startsWith("formula.")) return "sigma";
    const fmKey = frontmatterKey(p);
    const ft = this.plugin.fieldType(fmKey);
    if (ft) return PB_TYPE_ICON[ft];
    const k = this.plugin.storedKind(fmKey) ?? this.columnKind(p);
    return k === "number" ? "hash" : k === "date" ? "calendar" : k === "checkbox" ? "check-square" : k === "list" ? "list" : "type";
  }
  /** The column flyout: a Notion-style menu opened by clicking a header. A name
   *  field at the top renames the column; the rows carry every column action. */
  openColumnMenu(th, p, at) {
    document.body.querySelectorAll(".pb-colmenu").forEach((el) => el.remove());
    const isNote = p.startsWith("note.");
    const isFormula = p.startsWith("formula.");
    const pid = String(p);
    const fmKey = isNote ? frontmatterKey(p) : "";
    const kind = this.columnKind(p);
    const pop = document.body.createDiv({ cls: "pb-colmenu" });
    const rect = th.getBoundingClientRect();
    const live = th.isConnected && rect.width > 0;
    const anchorLeft = live ? rect.left : at ? at.x : 6;
    const anchorTop = live ? rect.bottom : at ? at.y : 76;
    pop.style.left = Math.max(6, Math.min(anchorLeft, window.innerWidth - 240)) + "px";
    pop.style.top = anchorTop + 4 + "px";
    let sub = null;
    const closeSub = () => {
      sub?.remove();
      sub = null;
      pop.querySelectorAll(".pb-colmenu-row.is-active, .pb-colmenu-typebtn.is-active").forEach((el) => el.removeClass("is-active"));
    };
    let closed = false;
    const close = () => {
      if (closed) return;
      closed = true;
      document.removeEventListener("mousedown", outside, true);
      closeSub();
      pop.remove();
    };
    const outside = (e) => {
      const t = e.target;
      if (!pop.contains(t) && !(sub && sub.contains(t))) close();
    };
    const openSubmenuAt = (anchor, items) => {
      sub = document.body.createDiv({ cls: "pb-colmenu pb-colmenu-sub" });
      sub.style.left = Math.min(anchor.right - 4, window.innerWidth - 220) + "px";
      sub.style.top = Math.min(anchor.top - 6, window.innerHeight - 340) + "px";
      const srows = sub.createDiv({ cls: "pb-colmenu-rows" });
      for (const it of items) {
        const sr = srows.createDiv({ cls: "pb-colmenu-row" });
        const ic = sr.createSpan({ cls: "pb-colmenu-ic" });
        if (it.icon) (0, import_obsidian.setIcon)(ic, it.icon);
        sr.createSpan({ cls: "pb-colmenu-label", text: it.label });
        if (it.checked) (0, import_obsidian.setIcon)(sr.createSpan({ cls: "pb-colmenu-x" }), "check");
        sr.addEventListener("click", () => {
          close();
          it.onClick();
        });
      }
    };
    const nameRow = pop.createDiv({ cls: "pb-colmenu-namerow" });
    const typeBtn = nameRow.createDiv({ cls: "pb-colmenu-typebtn", attr: { "aria-label": "Set type" } });
    (0, import_obsidian.setIcon)(typeBtn, this.columnIcon(p));
    if (isNote) {
      typeBtn.addClass("is-clickable");
      typeBtn.addEventListener("click", () => {
        const already = typeBtn.hasClass("is-active");
        closeSub();
        if (already) return;
        typeBtn.addClass("is-active");
        const pr = pop.getBoundingClientRect();
        openSubmenuAt({ right: pr.right, top: pr.top }, this.typeMenuItems(fmKey));
      });
    }
    if (isNote || isFormula) {
      const cur = this.config.getDisplayName(p);
      const nameBox = nameRow.createDiv({ cls: "pb-colmenu-namebox" });
      const nameIn = nameBox.createEl("input", { cls: "pb-colmenu-name", attr: { placeholder: "Column name" } });
      nameIn.value = cur;
      nameIn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const v = nameIn.value.trim();
          close();
          if (v && v !== cur) void this.renameColumn(p, v);
        } else if (e.key === "Escape") close();
      });
    } else {
      nameRow.createDiv({ cls: "pb-colmenu-title", text: this.config.getDisplayName(p) });
    }
    const rows = pop.createDiv({ cls: "pb-colmenu-rows" });
    const sep = () => rows.createDiv({ cls: "pb-colmenu-sep" });
    const row = (icon, label, cb, o) => {
      const r = rows.createDiv({ cls: "pb-colmenu-row" + (o?.danger ? " is-danger" : "") });
      (0, import_obsidian.setIcon)(r.createSpan({ cls: "pb-colmenu-ic" }), icon);
      r.createSpan({ cls: "pb-colmenu-label", text: label });
      if (o?.check) (0, import_obsidian.setIcon)(r.createSpan({ cls: "pb-colmenu-x" }), "check");
      r.addEventListener("click", () => {
        close();
        cb();
      });
    };
    const subRow = (icon, label, items) => {
      const r = rows.createDiv({ cls: "pb-colmenu-row pb-colmenu-parent" });
      (0, import_obsidian.setIcon)(r.createSpan({ cls: "pb-colmenu-ic" }), icon);
      r.createSpan({ cls: "pb-colmenu-label", text: label });
      (0, import_obsidian.setIcon)(r.createSpan({ cls: "pb-colmenu-x" }), "chevron-right");
      r.addEventListener("click", () => {
        const already = r.hasClass("is-active");
        closeSub();
        if (already) return;
        r.addClass("is-active");
        openSubmenuAt(r.getBoundingClientRect(), items());
      });
    };
    const idx = this.currentOrder().indexOf(pid);
    if (isNote) subRow("shapes", "Set type", () => this.typeMenuItems(fmKey));
    if (isFormula) row("pencil", "Edit formula", () => this.openFormulaModal(pid.slice("formula.".length)));
    if (kind === "date") row("calendar", "Date format", () => this.openDateFormat(pid));
    else if (kind === "number" || isFormula) row("hash", "Number format", () => this.openNumberFormat(pid));
    if (isNote && this.plugin.fieldType(fmKey) === "phone") row("phone", "Phone format", () => this.openPhoneFormat(pid));
    sep();
    row(
      "filter",
      this.columnFilter(pid) ? "Edit filter" : "Filter\u2026",
      () => new ColumnFilterModal(this.app, this.config.getDisplayName(p), this.columnFilter(pid) ?? void 0, (f) => this.setFilter(pid, f)).open()
    );
    subRow("arrow-up-down", "Sort", () => this.sortMenuItems(pid));
    subRow("sigma", "Calculate", () => this.calcMenuItems(pid));
    if (idx >= 0) {
      const isFrozen = this.freezeCount() > idx;
      row("pin", isFrozen ? "Unfreeze" : "Freeze up to here", () => this.setFreeze(isFrozen ? 0 : idx + 1), { check: isFrozen });
    }
    row("wrap-text", "Wrap content", () => this.toggleWrap(pid), { check: this.config.get("wrap:" + pid) === true });
    row("eye-off", "Hide from this view", () => void this.removeColumn(p));
    if (this.config.get("pbHideName") === true)
      row("eye", "Show file name column", () => {
        this.config.set("pbHideName", false);
        this.onDataUpdated();
      });
    sep();
    row("arrow-left-to-line", "Insert left", () => this.insertColumnBeside(p, 0));
    row("arrow-right-to-line", "Insert right", () => this.insertColumnBeside(p, 1));
    if (isNote) row("copy", "Duplicate", () => void this.duplicateColumn(p));
    row("plus", "Add formula column", () => this.openFormulaModal());
    sep();
    if (isNote) {
      row(
        "trash-2",
        "Delete column and data",
        () => {
          const n = this.countWithProp(fmKey);
          new ConfirmModal(this.app, {
            title: "Delete column",
            body: `Delete the "${this.config.getDisplayName(p)}" column and its data from ${n} note${n === 1 ? "" : "s"} in this base? You can undo this afterward.`,
            confirmText: "Delete",
            onConfirm: () => void this.deleteColumnData(p)
          }).open();
        },
        { danger: true }
      );
    } else if (isFormula) {
      const name = pid.slice("formula.".length);
      row(
        "trash-2",
        "Delete formula",
        () => new ConfirmModal(this.app, {
          title: "Delete formula",
          body: `Delete the "${name}" formula and its column from this base?`,
          confirmText: "Delete",
          onConfirm: () => void this.deleteFormulaColumn(name)
        }).open(),
        { danger: true }
      );
    }
    window.setTimeout(() => document.addEventListener("mousedown", outside, true), 0);
  }
  /** Toggle whether a column wraps its content (default is truncate). */
  toggleWrap(pid) {
    this.config.set("wrap:" + pid, this.config.get("wrap:" + pid) === true ? null : true);
    this.onDataUpdated();
  }
  /** Open the add-column dialog inserting beside `p` (offset 0 = left, 1 = right). */
  insertColumnBeside(p, offset) {
    const at = this.currentOrder().indexOf(String(p));
    this.openAddColumn(at < 0 ? void 0 : at + offset);
  }
  /** Copy a note column (property, values, type, and formats) to a new column. */
  async duplicateColumn(p) {
    const file = this.baseFile();
    if (!file || !p.startsWith("note.")) return;
    const key = frontmatterKey(p);
    const newName = this.uniquePropName(key + " copy");
    const newId = "note." + newName;
    const writes = [];
    for (const en of this.data.data) {
      const fm = frontmatterOf(this.app, en.file);
      if (fm && fm[key] != null) writes.push({ file: en.file, assignments: { [newName]: fm[key] } });
    }
    const mtm = this.app.metadataTypeManager;
    const t = mtm?.getAssignedType?.(key);
    if (t) this.setObsidianType(newName, t);
    const at = this.currentOrder().indexOf(String(p)) + 1;
    try {
      await addViewColumn(this.app, file, newId, this.viewName(), this.type, this.currentOrder(), void 0, at);
    } catch (e) {
      new Notice("Power Bases: could not duplicate. " + e.message);
      return;
    }
    const ft = this.plugin.fieldType(key);
    if (ft) await this.plugin.setFieldType(newName, ft);
    const sk = this.plugin.storedKind(key);
    if (sk) await this.plugin.setStoredKind(newName, sk);
    const nf = this.plugin.numberFormat(String(p));
    if (nf) await this.plugin.applyNumberFormat([newId], nf);
    const df = this.plugin.dateFormat(String(p));
    if (df) await this.plugin.applyDateFormat([newId], df);
    const pf = this.plugin.phoneFormat(String(p));
    if (pf) await this.plugin.applyPhoneFormat([newId], pf);
    if (writes.length) await this.plugin.writeBatch(`Duplicated "${key}" to "${newName}"`, writes);
    this.plugin.refreshAll();
    new Notice(`Power Bases: duplicated to "${newName}".`);
  }
  /** A property name not already used by the base's notes. */
  uniquePropName(base) {
    const keys = /* @__PURE__ */ new Set();
    for (const en of this.data.data.slice(0, 300)) {
      const fm = frontmatterOf(this.app, en.file);
      if (fm) for (const k of Object.keys(fm)) keys.add(k);
    }
    let name = base;
    for (let i = 2; keys.has(name); i++) name = base + " " + i;
    return name;
  }
  /** Delete a formula column (removes the formula and its column from the base). */
  async deleteFormulaColumn(name) {
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: deleting formulas needs a saved .base file; an inline base block has none.");
      return;
    }
    await removeFormula(this.app, file, name);
    this.plugin.refreshAll();
    new Notice(`Power Bases: deleted formula "${name}".`);
  }
  /** Rename a column: the frontmatter key across the base's rows (note columns,
   *  one undoable change), the id in the base file, and its saved settings. */
  async renameColumn(p, rawNew) {
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: renaming columns needs a saved .base file; an inline base block has none.");
      return;
    }
    const newName = rawNew.replace(/[\r\n]+/g, " ").replace(/[:#[\]{}",.]/g, "").replace(/\s+/g, " ").trim();
    const isFormula = p.startsWith("formula.");
    const oldName = String(p).slice(String(p).indexOf(".") + 1);
    if (!newName || newName === oldName) {
      this.onDataUpdated();
      return;
    }
    const newId = (isFormula ? "formula." : "note.") + newName;
    if (!isFormula) {
      const writes = [];
      for (const en of this.data.data) {
        const fm = frontmatterOf(this.app, en.file);
        if (fm && oldName in fm) writes.push({ file: en.file, assignments: { [newName]: fm[oldName], [oldName]: void 0 } });
      }
      if (writes.length) await this.plugin.writeBatch(`Renamed "${oldName}" to "${newName}"`, writes);
      const mtm = this.app.metadataTypeManager;
      const t = mtm?.getAssignedType?.(oldName);
      if (t) this.setObsidianType(newName, t);
    }
    try {
      await renamePropertyInBase(this.app, file, String(p), newId, isFormula, oldName, newName);
    } catch (e) {
      new Notice("Power Bases: could not rename the column. " + e.message);
      return;
    }
    await this.plugin.renameSettings(oldName, newName, String(p), newId);
    this.plugin.refreshAll();
    new Notice(`Power Bases: renamed to "${newName}".`);
  }
  /* ----- column widths (drag to resize) and drag-to-reorder ----- */
  /** Apply a column's width (saved in the view config, or a sensible default)
   *  to its header; returns the pixels so the table's total width can be set. */
  applyColWidth(th, propId) {
    const stored = this.config.get("w:" + propId);
    const w = typeof stored === "number" && stored > 0 ? Math.round(stored) : this.defaultColWidth(propId);
    th.style.width = w + "px";
    return w;
  }
  defaultColWidth(propId) {
    if (propId === "file.name") return 180;
    const k = this.columnKind(propId);
    return k === "date" ? 160 : k === "number" ? 120 : 130;
  }
  /** A grip on the header's right edge; dragging it resizes the column and
   *  saves the new width to the view config (persists, travels with copy-setup). */
  attachColResize(th, propId) {
    const grip = th.createDiv({ cls: "pb-col-resize" });
    grip.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const startX = e.clientX;
      const startW = th.getBoundingClientRect().width;
      const move = (ev2) => {
        th.style.width = Math.max(48, Math.round(startW + (ev2.clientX - startX))) + "px";
      };
      const up = () => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", up);
        this.config.set("w:" + propId, Math.round(th.getBoundingClientRect().width));
      };
      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up);
    });
  }
  /** Drag a header sideways to reorder columns; a vertical line marks the drop
   *  point and the new order is written into the base file. */
  attachColReorder(th, p, cols, hr) {
    th.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.target.closest(".pb-col-resize, input")) return;
      const startX = e.clientX;
      let dragging = false;
      let line = null;
      let insertBefore = cols.length;
      const ths = Array.from(hr.children).slice(0, cols.length);
      const move = (ev2) => {
        if (!dragging && Math.abs(ev2.clientX - startX) > 6) {
          dragging = true;
          this.draggedHeader = true;
          th.addClass("pb-col-dragging");
          line = document.body.createDiv({ cls: "pb-col-dropline" });
        }
        if (!dragging || !line) return;
        let edge = 0;
        insertBefore = ths.length;
        for (let i = 0; i < ths.length; i++) {
          const r = ths[i].getBoundingClientRect();
          if (ev2.clientX < r.left + r.width / 2) {
            insertBefore = i;
            edge = r.left;
            break;
          }
          edge = r.right;
        }
        const tr = th.closest("table").getBoundingClientRect();
        line.style.left = edge + "px";
        line.style.top = tr.top + "px";
        line.style.height = tr.height + "px";
      };
      const up = (ev2) => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", up);
        th.removeClass("pb-col-dragging");
        line?.remove();
        if (dragging) void this.reorderColumn(cols, p, insertBefore);
        else this.openColumnMenu(th, p, { x: ev2.clientX, y: ev2.clientY });
      };
      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up);
    });
  }
  /** Move a column to a new index and persist the order into the base file. */
  async reorderColumn(cols, moved, insertBefore) {
    const from = cols.indexOf(moved);
    if (from < 0) return;
    const order = cols.map((c) => String(c));
    order.splice(from, 1);
    const to = insertBefore > from ? insertBefore - 1 : insertBefore;
    order.splice(Math.max(0, Math.min(order.length, to)), 0, String(moved));
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: reordering columns needs a saved .base file; an inline base block has none.");
      this.onDataUpdated();
      return;
    }
    try {
      await writeViewOrder(this.app, file, this.viewName(), this.type, order);
    } catch (e) {
      new Notice("Power Bases: could not reorder. " + e.message);
      return;
    }
    this.plugin.refreshAll();
  }
  /** Drop a column from this view's order in the base file (the data stays). */
  async removeColumn(p) {
    if (p === "file.name") {
      this.config.set("pbHideName", true);
      this.onDataUpdated();
      return;
    }
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: removing columns needs a saved .base file; an inline base block has none.");
      return;
    }
    const label = this.config.getDisplayName(p);
    const order = this.currentOrder().filter((o) => o !== String(p));
    try {
      await writeViewOrder(this.app, file, this.viewName(), this.type, order);
    } catch (e) {
      new Notice("Power Bases: could not remove the column. " + e.message);
      return;
    }
    this.plugin.refreshAll();
    new Notice(`Power Bases: removed the "${label}" column.`);
  }
  /** Remove a column and delete its property from the base's rows (one undoable
   *  change), for a full Notion-style column delete. */
  async deleteColumnData(p) {
    if (!p.startsWith("note.")) {
      await this.removeColumn(p);
      return;
    }
    const key = frontmatterKey(p);
    const writes = [];
    for (const en of this.data.data) {
      const fm = frontmatterOf(this.app, en.file);
      if (fm && key in fm) writes.push({ file: en.file, assignments: { [key]: void 0 } });
    }
    if (writes.length) await this.plugin.writeBatch(`Deleted "${key}" from ${writes.length} note${writes.length === 1 ? "" : "s"}`, writes);
    await this.removeColumn(p);
  }
  /** How many of the base's rows carry a given frontmatter key. */
  countWithProp(key) {
    let n = 0;
    for (const en of this.data.data) {
      const fm = frontmatterOf(this.app, en.file);
      if (fm && key in fm) n++;
    }
    return n;
  }
  /** Open the formula editor for this base (add mode, or edit an existing key). */
  openFormulaModal(editKey) {
    const file = this.baseFile();
    if (!file) {
      new Notice("Power Bases: formulas need a saved .base file; an inline base block has none.");
      return;
    }
    new FormulaModal(this.app, this.plugin, this, file, editKey).open();
  }
  /** Click anywhere but a link or button inside the cell to edit; the opener
   *  also rides the element so keyboard navigation (Tab and the arrows) can
   *  re-invoke it on neighboring cells. */
  registerEdit(td, open) {
    td.addClass("pb-editable");
    td.pbEdit = open;
    td.addEventListener("click", (ev2) => {
      if (ev2.target.closest("a, button")) return;
      open();
    });
  }
  makeEditable(td, en, fmKey, kind, raw) {
    this.registerEdit(td, () => this.beginEdit(td, en, fmKey, kind, raw));
  }
  /** Commit-and-move between cells: dx for Tab and Shift+Tab (wrapping to
   *  the neighboring row), dy for the up and down arrows (same column).
   *  Cells advertise editability via pbEdit, so checkboxes and read-only
   *  columns are skipped sideways and block vertical moves. Only rendered
   *  rows are reachable; scrolling renders more. */
  editNeighbor(td, dx, dy) {
    const tr = td.closest("tr");
    const table = td.closest("table");
    if (!(tr instanceof HTMLTableRowElement) || !table) return;
    const rows = Array.from(table.querySelectorAll("tbody tr.pb-tr:not(.pb-subtotal)"));
    const ri = rows.indexOf(tr);
    const ci = td.cellIndex;
    if (ri < 0 || ci < 0) return;
    const scan = (row, from, step) => {
      for (let i = from; i >= 0 && i < row.cells.length; i += step) {
        const c = row.cells[i];
        if (c.pbEdit) return c;
      }
      return null;
    };
    let target = null;
    const pastEnd = ri === rows.length - 1;
    const rowHasContent = Array.from(tr.cells).some((c) => c.textContent?.trim());
    if (dy) {
      const row = rows[ri + dy];
      if (!row && dy > 0) {
        if (rowHasContent) void this.addRow(ci);
        return;
      }
      const c = row?.cells[ci];
      target = c?.pbEdit ? c : null;
    } else if (dx > 0) {
      target = scan(tr, ci + 1, 1) ?? (rows[ri + 1] ? scan(rows[ri + 1], 0, 1) : null);
      if (!target && pastEnd) {
        if (rowHasContent) void this.addRow(0);
        return;
      }
    } else if (dx < 0) {
      const prev = rows[ri - 1];
      target = scan(tr, ci - 1, -1) ?? (prev ? scan(prev, prev.cells.length - 1, -1) : null);
    }
    if (!target) return;
    target.scrollIntoView({ block: "nearest", inline: "nearest" });
    target.pbEdit?.();
  }
  /** Where a keyboard-added row's note belongs: beside the existing rows;
   *  else (empty base) the folder the base's own filters scope to, created
   *  on demand; else the host note's folder. */
  async rowFolder() {
    const first = this.data.data[0]?.file.parent;
    if (first) return first;
    const bf = this.baseFile();
    if (bf) {
      try {
        const cfg = await readBaseConfig(this.app, bf);
        const scoped = scopeFolder(cfg.filters);
        if (scoped) {
          await this.plugin.ensureFolder(scoped);
          const af = this.app.vault.getAbstractFileByPath(scoped);
          if (af instanceof import_obsidian.TFolder) return af;
        }
      } catch {
      }
    }
    const probe = this.controller?.file;
    if (probe instanceof import_obsidian.TFile && probe.extension === "md" && probe.parent) return probe.parent;
    return this.app.workspace.getActiveFile()?.parent ?? this.app.vault.getRoot();
  }
  async addRow(ci = 0) {
    const folder = await this.rowFolder();
    const prefix = folder.path === "/" ? "" : folder.path + "/";
    let name = "Untitled";
    for (let i = 1; this.app.vault.getAbstractFileByPath(prefix + name + ".md"); i++) name = `Untitled ${i}`;
    const f = await this.app.vault.create(prefix + name + ".md", "");
    if (this.plugin.settings.stampEdits && this.plugin.settings.myName.trim()) {
      await this.app.fileManager.processFrontMatter(f, (fm) => this.plugin.stampCreate(fm));
    }
    this.pendingRowEdit = { path: f.path, ci };
  }
  /* ----- manual row order, export, fill-down, grid paste ----- */
  rawRankOf(en, rankKey) {
    const v = frontmatterOf(this.app, en.file)?.[rankKey];
    return typeof v === "number" ? v : null;
  }
  /** Drag a row's grip up or down; the drop renumbers the visible rows in
   *  their new order (gaps of 100, one undoable change), so the manual
   *  order is data that syncs and even drives other views. */
  attachRowDrag(grip, tr, rankKey) {
    grip.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      const table = tr.closest("table");
      if (!table) return;
      const rowsNow = () => Array.from(table.querySelectorAll("tbody tr.pb-tr:not(.pb-subtotal)"));
      let line = null;
      let before = null;
      let dragging = false;
      const startY = e.clientY;
      const move = (ev2) => {
        if (!dragging && Math.abs(ev2.clientY - startY) < 5) return;
        dragging = true;
        tr.addClass("pb-row-dragging");
        if (!line) line = document.body.createDiv({ cls: "pb-row-dropline" });
        before = null;
        const rs = rowsNow();
        let y = rs.length ? rs[rs.length - 1].getBoundingClientRect().bottom : 0;
        for (const r of rs) {
          const rect = r.getBoundingClientRect();
          if (ev2.clientY < rect.top + rect.height / 2) {
            before = r;
            y = rect.top;
            break;
          }
        }
        const tRect = table.getBoundingClientRect();
        line.style.left = tRect.left + "px";
        line.style.width = tRect.width + "px";
        line.style.top = y - 1 + "px";
      };
      const up = () => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", up);
        tr.removeClass("pb-row-dragging");
        line?.remove();
        if (!dragging) return;
        const dp = tr.getAttribute("data-path");
        const bp = before?.getAttribute("data-path") ?? null;
        if (dp && bp !== dp) void this.applyRowDrop(rankKey, dp, bp);
      };
      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up);
    });
  }
  /** An embedded base sits inside the note's `.internal-embed`, wrapped by
   *  Bases' own toolbar (Sort, Filter, ..., and the code toggle). Put the
   *  delete affordance up on that top row, and hide the code toggle (its
   *  raw YAML is not the point of an embed). Re-run each paint since Bases
   *  owns and may repaint that toolbar; guarded so it never doubles up. */
  decorateEmbed() {
    this.rootEl.closest(".internal-embed, .block-language-base")?.addClass("pb-base-host");
    const embed = this.rootEl.closest(".internal-embed");
    if (!embed) return;
    embed.addClass("pb-embed-host");
    if (!embed.querySelector(":scope > .pb-embed-del")) {
      const del = embed.createEl("button", { cls: "pb-embed-del", attr: { "aria-label": "Delete this base" } });
      (0, import_obsidian.setIcon)(del, "trash-2");
      del.addEventListener("click", () => void this.plugin.deleteActiveBase(this));
    }
    embed.querySelectorAll("svg[class*='lucide-code']").forEach((svg) => {
      if (svg.closest(".pb-root")) return;
      const btn = svg.closest("button, [role='button'], .clickable-icon") ?? svg.parentElement;
      btn?.classList.add("pb-native-hidden");
    });
  }
  /** The frontmatter key rows order by, with no sort active: a plain string
   *  stored under `pbRank` (the reliable config path, like freeze and sort),
   *  or the native "Manual order property" option when set from the gear
   *  menu. Null while sorting, which owns the order. */
  resolveRankKey(sortCfg) {
    if (sortCfg) return null;
    const plain = this.config.get("pbRank");
    if (typeof plain === "string" && plain.trim()) return plain.trim();
    const pid = this.config.getAsPropertyId("pbRankProp");
    return pid && String(pid).startsWith("note.") ? frontmatterKey(pid) : null;
  }
  /** The rank key for a drag, provisioning `pbRank` on first use so manual
   *  order needs no setup. */
  ensureRankKey(rankKey) {
    if (rankKey) return rankKey;
    this.config.set("pbRank", "pb-order");
    return "pb-order";
  }
  async applyRowDrop(rankKey, draggedPath, beforePath) {
    if (this.lastEntries.length > 400) {
      new Notice("Power Bases: manual reorder is for tables up to 400 rows; use Sort for bigger sets.");
      return;
    }
    rankKey = this.ensureRankKey(rankKey);
    const list = this.lastEntries.map((en) => en.file);
    const from = list.findIndex((f) => f.path === draggedPath);
    if (from < 0) return;
    const [moved] = list.splice(from, 1);
    let at = beforePath ? list.findIndex((f) => f.path === beforePath) : list.length;
    if (at < 0) at = list.length;
    list.splice(at, 0, moved);
    const ranks = renumber(list.length);
    await this.plugin.writeBatch(
      "Reordered rows",
      list.map((f, i) => ({ file: f, assignments: { [rankKey]: ranks[i] } }))
    );
  }
  /** A new row at a chosen position: manual order gives position meaning,
   *  provisioned on first use; the visible set renumbers around the new
   *  note and its first cell opens for typing. */
  async insertRowNear(en, offset) {
    if (this.sortConfig()) {
      new Notice("Power Bases: clear the column sort to place rows manually.");
      return;
    }
    if (this.lastEntries.length + 1 > 400) {
      new Notice("Power Bases: manual placement is for tables up to 400 rows.");
      return;
    }
    const key = this.ensureRankKey(this.resolveRankKey(this.sortConfig()));
    const folder = await this.rowFolder();
    const prefix = folder.path === "/" ? "" : folder.path + "/";
    let name = "Untitled";
    for (let i = 1; this.app.vault.getAbstractFileByPath(prefix + name + ".md"); i++) name = `Untitled ${i}`;
    const nf = await this.app.vault.create(prefix + name + ".md", "");
    if (this.plugin.settings.stampEdits && this.plugin.settings.myName.trim()) {
      await this.app.fileManager.processFrontMatter(nf, (fm) => this.plugin.stampCreate(fm));
    }
    const files = this.lastEntries.map((e) => e.file);
    const at = files.findIndex((f) => f.path === en.file.path);
    files.splice(at < 0 ? files.length : at + offset, 0, nf);
    const ranks = renumber(files.length);
    await this.plugin.writeBatch(
      "Inserted a row",
      files.map((f, i) => ({ file: f, assignments: { [key]: ranks[i] } }))
    );
    this.pendingRowEdit = { path: nf.path, ci: 0 };
  }
  /** The visible table (current filters, sort, and columns, formatted as
   *  shown) as a CSV file beside the base, spreadsheet-ready. */
  async exportCsv() {
    const cols = this.lastCols.length ? this.lastCols : this.currentOrder();
    const rows = [cols.map((p) => this.config.getDisplayName(p))];
    for (const en of this.lastEntries) {
      rows.push(
        cols.map((p) => {
          if (p === "file.name") return en.file.basename;
          return this.display(en, p, this.text(en, p));
        })
      );
    }
    const bf = this.baseFile();
    const folder = bf?.parent?.path ?? this.app.workspace.getActiveFile()?.parent?.path ?? "";
    const path = this.plugin.uniquePath(folder === "/" ? "" : folder, (bf?.basename ?? "table") + " export", ".csv");
    await this.app.vault.create(path, toCsv(rows));
    new Notice(`Power Bases: exported ${this.lastEntries.length} rows to "${path}".`);
  }
  /** The same column's value one row up, for fill-down (Ctrl+D). */
  cellAbove(td, fmKey) {
    const tr = td.closest("tr");
    const table = td.closest("table");
    if (!(tr instanceof HTMLTableRowElement) || !table) return null;
    const rows = Array.from(table.querySelectorAll("tbody tr.pb-tr:not(.pb-subtotal)"));
    const ri = rows.indexOf(tr);
    if (ri <= 0) return null;
    const f = this.app.vault.getAbstractFileByPath(rows[ri - 1].getAttribute("data-path") ?? "");
    if (!(f instanceof import_obsidian.TFile)) return null;
    const v = frontmatterOf(this.app, f)?.[fmKey];
    if (v == null) return "";
    return Array.isArray(v) ? v.map(String).join(", ") : String(v);
  }
  /** Paste a spreadsheet block: tab-separated columns starting at the anchor
   *  cell, one table row per line, rows created past the end. Property
   *  writes land as one undoable change; values with no editable column
   *  under them are counted and reported, never silently eaten. */
  async pasteGrid(td, text) {
    const grid = parseCsv(text.replace(/\r\n?/g, "\n"), "	").filter((r) => r.some((c) => c.trim()));
    if (!grid.length) return;
    const tr = td.closest("tr");
    const table = td.closest("table");
    if (!(tr instanceof HTMLTableRowElement) || !table) return;
    const rowsEls = Array.from(table.querySelectorAll("tbody tr.pb-tr:not(.pb-subtotal)"));
    const ri = rowsEls.indexOf(tr);
    const ci = td.cellIndex;
    if (ri < 0 || ci < 0) return;
    const cols = this.lastCols;
    const width = grid.reduce((m, r) => Math.max(m, r.length), 0);
    const colTargets = [];
    for (let j = 0; j < width; j++) {
      const p = cols[ci + j];
      if (p && String(p).startsWith("note.")) {
        const key = frontmatterKey(p);
        colTargets.push({ key, kind: this.plugin.storedKind(key) ?? this.plugin.assignedKind(key) ?? "text" });
      } else colTargets.push(null);
    }
    if (!colTargets.some(Boolean)) {
      new Notice("Power Bases: the columns under the paste are not editable.");
      return;
    }
    const files = [];
    for (let i = 0; i < grid.length; i++) {
      const f = this.app.vault.getAbstractFileByPath(rowsEls[ri + i]?.getAttribute("data-path") ?? "");
      if (f instanceof import_obsidian.TFile) files.push(f);
      else break;
    }
    let created = 0;
    if (files.length < grid.length) {
      const folder = await this.rowFolder();
      const prefix = folder.path === "/" ? "" : folder.path + "/";
      for (let i = files.length; i < grid.length; i++) {
        let name = "Untitled";
        for (let k = 1; this.app.vault.getAbstractFileByPath(prefix + name + ".md"); k++) name = `Untitled ${k}`;
        files.push(await this.app.vault.create(prefix + name + ".md", ""));
        created++;
      }
    }
    const titleKey = this.titleColumnKey();
    const renames = [];
    let cellsWritten = 0;
    let dropped = 0;
    const writes = [];
    for (let i = 0; i < grid.length; i++) {
      const assignments = {};
      for (let j = 0; j < grid[i].length; j++) {
        const t = colTargets[j];
        const cell = (grid[i][j] ?? "").trim();
        if (!t) {
          if (cell) dropped++;
          continue;
        }
        let v = cell;
        if (!cell) v = void 0;
        else if (t.kind === "checkbox") v = ["true", "yes", "1", "x"].includes(cell.toLowerCase());
        else if (t.kind === "number") v = Number.isFinite(Number(cell)) ? Number(cell) : cell;
        else if (t.kind === "date" || t.kind === "datetime")
          v = parseDateInput(cell, this.plugin.dateFormat("note." + t.key)?.preset === "eu" ? "eu" : "us") ?? cell;
        else if (t.kind === "list")
          v = cell.split(",").map((s) => s.trim()).filter(Boolean);
        assignments[t.key] = v;
        cellsWritten++;
        if (t.key === titleKey && typeof v === "string") renames.push({ file: files[i], value: v });
      }
      writes.push({ file: files[i], assignments });
    }
    await this.plugin.writeBatch(`Pasted ${cellsWritten} cells across ${grid.length} rows`, writes);
    for (const r of renames) this.maybeRenameUntitledFile(r.file, r.value);
    new Notice(
      `Power Bases: pasted ${cellsWritten} cells across ${grid.length} rows` + (created ? `, ${created} created` : "") + (dropped ? `; ${dropped} values had no editable column` : "") + "."
    );
  }
  /* ----- row selection + bulk actions ----- */
  toggleRowSelect(path, shiftRange) {
    if (shiftRange && this.lastSelPath) {
      const order = this.lastEntries.map((en) => en.file.path);
      const a = order.indexOf(this.lastSelPath);
      const b = order.indexOf(path);
      if (a >= 0 && b >= 0) {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) this.selected.add(order[i]);
        this.lastSelPath = path;
        this.updateSelUi();
        return;
      }
    }
    if (this.selected.has(path)) this.selected.delete(path);
    else this.selected.add(path);
    this.lastSelPath = path;
    this.updateSelUi();
  }
  /** Selection is painted in place (classes, checkboxes, the bar), never by
   *  a repaint: 18,000 chunked rows should not rebuild per click. */
  updateSelUi() {
    const n = this.selected.size;
    this.rootEl.querySelector("table")?.toggleClass("pb-hassel", n > 0);
    this.rootEl.querySelectorAll("tr.pb-tr").forEach((tr) => {
      const on = this.selected.has(tr.getAttribute("data-path") ?? "");
      tr.toggleClass("is-selected", on);
      const cb = tr.querySelector(".pb-rowsel");
      if (cb) cb.checked = on;
    });
    if (this.selBar) {
      this.selBar.toggleClass("is-on", n > 0);
      this.selBar.querySelector(".pb-selbar-count")?.setText(`${n} selected`);
    }
    const all = this.rootEl.querySelector(".pb-selall");
    if (all) all.checked = n > 0 && n === this.lastEntries.length;
  }
  selectedFiles() {
    return [...this.selected].map((p) => this.app.vault.getAbstractFileByPath(p)).filter((f) => f instanceof import_obsidian.TFile);
  }
  /** Trash row notes behind a confirmation; the trash keeps them recoverable. */
  deleteRows(files) {
    if (!files.length) return;
    new ConfirmModal(this.app, {
      title: files.length === 1 ? `Delete "${files[0].basename}"?` : `Delete ${files.length} rows?`,
      body: (files.length === 1 ? "The row's note goes" : `The ${files.length} rows' notes go`) + " to the trash, recoverable per your deleted-files setting.",
      confirmText: "Delete",
      onConfirm: () => {
        void (async () => {
          for (const f of files) await this.app.fileManager.trashFile(f);
          files.forEach((f) => this.selected.delete(f.path));
          new Notice(`Power Bases: ${files.length === 1 ? `"${files[0].basename}"` : files.length + " rows"} moved to trash.`);
        })();
      }
    }).open();
  }
  async duplicateRows(files) {
    if (!files.length) return;
    for (const f of files) {
      const content = await this.app.vault.read(f);
      const folder = f.parent?.path ?? "";
      await this.app.vault.create(this.plugin.uniquePath(folder === "/" ? "" : folder, f.basename + " copy", ".md"), content);
    }
    new Notice(`Power Bases: duplicated ${files.length === 1 ? `"${files[0].basename}"` : files.length + " rows"}.`);
  }
  /** The view's note columns, for the bulk set-property picker. */
  noteColumns() {
    const out = [];
    for (const p of this.currentOrder()) {
      if (!p.startsWith("note.")) continue;
      out.push({ key: frontmatterKey(p), label: this.config.getDisplayName(p) });
    }
    return out;
  }
  /** One property, one value, across many rows, as one undoable change. */
  async bulkSet(files, key, rawValue) {
    if (!files.length || !key) return;
    const kind = this.plugin.storedKind(key) ?? this.plugin.assignedKind(key) ?? "text";
    const t = rawValue.trim();
    let v = t;
    if (!t) v = void 0;
    else if (kind === "checkbox") v = t.toLowerCase() === "true";
    else if (kind === "number") v = Number.isFinite(Number(t)) ? Number(t) : t;
    else if (kind === "date" || kind === "datetime")
      v = parseDateInput(t, this.plugin.dateFormat("note." + key)?.preset === "eu" ? "eu" : "us") ?? t;
    else if (kind === "list")
      v = t.split(",").map((s) => s.trim()).filter(Boolean);
    await this.plugin.writeBatch(
      `Set ${key} on ${files.length} row${files.length === 1 ? "" : "s"}`,
      files.map((f) => ({ file: f, assignments: { [key]: v } }))
    );
  }
  /** Notion names the page after its title column: while a row is still
   *  Untitled, filling its first text column renames the note to match, so
   *  search and links show real names instead of Untitled 4. */
  maybeRenameUntitled(en, fmKey, value) {
    if (fmKey !== this.titleColumnKey()) return;
    this.maybeRenameUntitledFile(en.file, value);
  }
  maybeRenameUntitledFile(file, value) {
    if (!value || !/^Untitled( \d+)?$/.test(file.basename)) return;
    const name = safeName(value);
    if (!name || name === file.basename) return;
    const folder = file.parent?.path ?? "";
    void this.app.fileManager.renameFile(file, this.plugin.uniquePath(folder === "/" ? "" : folder, name, ".md"));
  }
  titleColumnKey() {
    for (const p of this.currentOrder()) {
      if (!p.startsWith("note.")) continue;
      const key = frontmatterKey(p);
      const kind = this.plugin.storedKind(key) ?? this.plugin.assignedKind(key) ?? "text";
      if (kind === "text" && !this.plugin.fieldType(key)) return key;
    }
    return null;
  }
  /** Render a cell that carries an assigned field type. */
  renderTypedCell(td, en, fmKey, ft, raw, s) {
    const linkCell = (href, text, icon) => {
      const a = td.createEl("a", { cls: "pb-linkcell", href });
      const ic = a.createSpan({ cls: "pb-linkcell-ic" });
      (0, import_obsidian.setIcon)(ic, icon);
      a.createSpan({ text });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (href) window.open(href);
      });
    };
    const displayName = () => this.config.getDisplayName("note." + fmKey);
    switch (ft) {
      case "url": {
        const { caption, address } = parseLinkValue(s);
        if (address) linkCell(externalHref(address), caption || address, "external-link");
        this.registerEdit(td, () => this.beginUrlEdit(td, en, fmKey, raw));
        break;
      }
      case "email":
        if (s) linkCell(mailtoHref(s), s, "at-sign");
        this.makeEditable(td, en, fmKey, "text", raw);
        break;
      case "phone":
        if (s) linkCell(telHref(s), formatPhoneValue(s, this.plugin.phoneFormat("note." + fmKey)), "phone");
        this.makeEditable(td, en, fmKey, "text", raw);
        break;
      case "place": {
        const { caption, address } = parseLinkValue(s);
        if (address) linkCell(mapsUrl(address), caption || address, "map-pin");
        this.registerEdit(td, () => this.beginPlaceEdit(td, en, fmKey, raw));
        break;
      }
      case "person": {
        for (const nm of personNames(raw)) {
          const chip = td.createSpan({ cls: "pb-person", text: nm });
          chip.style.setProperty("--pb-c", this.plugin.hueFor(fmKey, nm));
        }
        this.makeEditable(td, en, fmKey, "list", raw);
        break;
      }
      case "id":
        if (s) {
          td.createSpan({ cls: "pb-id", text: s });
          td.addEventListener("contextmenu", (ev2) => {
            ev2.preventDefault();
            const menu = new import_obsidian.Menu();
            menu.addItem((i) => i.setTitle("Regenerate ID").setIcon("refresh-cw").onClick(() => this.generateId(en, fmKey)));
            menu.addItem(
              (i) => i.setTitle("Clear ID").setIcon("x").onClick(
                () => void this.plugin.writeBatch(`Cleared ID on "${en.file.basename}"`, [
                  { file: en.file, assignments: { [fmKey]: void 0 } }
                ])
              )
            );
            menu.showAtMouseEvent(ev2);
          });
        } else {
          const b = td.createEl("button", { cls: "pb-id-gen", text: "Generate" });
          b.addEventListener("click", () => this.generateId(en, fmKey));
        }
        break;
      case "button": {
        const cfg = this.plugin.fieldConfig(fmKey);
        const label = cfg?.buttonLabel?.trim() || displayName() || "Run";
        const b = td.createEl("button", { cls: "pb-btn-cell", text: label });
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          this.runButton(en, fmKey);
        });
        break;
      }
      case "verification": {
        const cfg = this.plugin.fieldConfig(fmKey);
        const expRaw = cfg?.verifyExpiryProp ? frontmatterOf(this.app, en.file)?.[cfg.verifyExpiryProp] : null;
        const state = verifyState(raw, expRaw != null ? String(expRaw) : null, todayKey());
        const badge = td.createSpan({ cls: `pb-verify pb-verify-${state}` });
        (0, import_obsidian.setIcon)(badge.createSpan({ cls: "pb-verify-ic" }), VERIFY_ICON[state]);
        badge.createSpan({ text: VERIFY_LABEL[state] });
        badge.addEventListener("click", (ev2) => {
          ev2.stopPropagation();
          const menu = new import_obsidian.Menu();
          for (const st of ["verified", "unverified", "expired"]) {
            menu.addItem(
              (i) => i.setTitle(VERIFY_LABEL[st]).setIcon(VERIFY_ICON[st]).setChecked(state === st).onClick(() => {
                const value = st === "unverified" ? void 0 : st === "verified" ? "Verified" : "Expired";
                void this.plugin.writeBatch(`Set ${displayName()} to ${VERIFY_LABEL[st]} on "${en.file.basename}"`, [
                  { file: en.file, assignments: { [fmKey]: value } }
                ]);
              })
            );
          }
          menu.showAtMouseEvent(ev2);
        });
        break;
      }
      case "image": {
        const src = this.imageSrc(en, s);
        if (src) td.createEl("img", { cls: "pb-img-cell", attr: { src, alt: s } });
        else if (s) td.createSpan({ cls: "pb-file-link", text: s });
        this.registerEdit(td, () => this.beginFilePick(td, en, fmKey, raw, { images: true, multi: false }));
        break;
      }
      case "files": {
        const items = Array.isArray(raw) ? raw : raw == null || raw === "" ? [] : [raw];
        for (const it of items) {
          const str = String(it).trim();
          if (!str) continue;
          const { link, name } = fileLinkParts(str);
          const a = td.createEl("a", { cls: "pb-file-link", text: name });
          a.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (/^https?:\/\//i.test(link)) window.open(link);
            else {
              void (async () => {
                const dest = this.app.metadataCache.getFirstLinkpathDest((0, import_obsidian.getLinkpath)(link), en.file.path);
                if (dest) await this.plugin.focusOpenTab(dest.path);
                await this.app.workspace.openLinkText(link, en.file.path);
              })();
            }
          });
        }
        this.registerEdit(td, () => this.beginFilePick(td, en, fmKey, raw, { images: false, multi: true }));
        break;
      }
    }
  }
  /** A displayable image src from a wikilink, vault path, or URL cell value. */
  imageSrc(en, s) {
    if (!s) return "";
    const { link } = fileLinkParts(s);
    if (/^https?:\/\//i.test(link)) return link;
    const f = this.app.metadataCache.getFirstLinkpathDest(link, en.file.path) ?? this.app.vault.getAbstractFileByPath(link);
    return f instanceof import_obsidian.TFile ? this.app.vault.getResourcePath(f) : "";
  }
  /** Fill the next sequential ID for this column into the row. */
  generateId(en, fmKey) {
    const prefix = this.plugin.fieldConfig(fmKey)?.prefix ?? "";
    const existing = [];
    for (const e of this.data.data) {
      const v = frontmatterOf(this.app, e.file)?.[fmKey];
      if (v != null && String(v).trim() !== "") existing.push(String(v));
    }
    const id = nextId(existing, prefix);
    void this.plugin.writeBatch(`Assigned ID ${id} to "${en.file.basename}"`, [{ file: en.file, assignments: { [fmKey]: id } }]);
  }
  /** Run a button cell: apply its property writes, then open its link. */
  runButton(en, fmKey) {
    const cfg = this.plugin.fieldConfig(fmKey);
    if (!cfg || !cfg.buttonSets && !cfg.buttonLink) {
      new Notice("Power Bases: configure this button first (right-click the column header).");
      return;
    }
    const now = /* @__PURE__ */ new Date();
    const assignments = {};
    for (const [k, v] of Object.entries(cfg.buttonSets ?? {})) {
      if (!k.trim()) continue;
      assignments[k] = parseRuleValue(expandToken(v, now));
    }
    if (Object.keys(assignments).length) {
      void this.plugin.writeBatch(`Button "${cfg.buttonLabel ?? fmKey}" on "${en.file.basename}"`, [{ file: en.file, assignments }]);
    }
    if (cfg.buttonLink?.trim()) {
      let url = cfg.buttonLink.trim();
      if (url.startsWith("note.")) {
        const v = frontmatterOf(this.app, en.file)?.[url.slice(5)];
        url = v != null ? String(v) : "";
      }
      const href = externalHref(url);
      if (href) window.open(href);
    }
  }
  /** A calendar popover for editing a date/datetime cell: click a day to set
   *  it (a time field appears for datetimes), Today jumps back, Clear empties. */
  /** The month-grid popover. Picking a day (or Clear) calls onPick and
   *  closes; clicking outside closes without picking. */
  openDatePicker(anchor, cur, kind, onPick, onClose) {
    const anchorKey = dateKeyOf(cur) ?? todayKey();
    let viewY = +anchorKey.slice(0, 4);
    let viewM = +anchorKey.slice(5, 7) - 1;
    const selected = dateKeyOf(cur);
    const timeStr = cur.match(/T(\d{2}:\d{2})/)?.[1] ?? "";
    let timeField = null;
    const pop = document.body.createDiv({ cls: "pb-datepick" });
    const rect = anchor.getBoundingClientRect();
    pop.style.left = Math.max(6, Math.min(rect.left, window.innerWidth - 252)) + "px";
    pop.style.top = rect.bottom + 4 + "px";
    let done = false;
    const close = (picked, commit) => {
      if (done) return;
      done = true;
      document.removeEventListener("mousedown", outside, true);
      pop.remove();
      if (commit) onPick(picked);
      else onClose();
    };
    const outside = (e) => {
      if (!pop.contains(e.target)) close(void 0, false);
    };
    const withTime = (key) => kind === "datetime" ? key + "T" + (timeField?.value || timeStr || "09:00") : key;
    const render = () => {
      pop.empty();
      const head = pop.createDiv({ cls: "pb-dp-head" });
      const prev = head.createEl("button", { cls: "pb-dp-nav" });
      (0, import_obsidian.setIcon)(prev, "chevron-left");
      prev.addEventListener("click", () => {
        if (--viewM < 0) {
          viewM = 11;
          viewY--;
        }
        render();
      });
      head.createSpan({ cls: "pb-dp-title", text: new Date(viewY, viewM, 1).toLocaleDateString(void 0, { month: "long", year: "numeric" }) });
      const next = head.createEl("button", { cls: "pb-dp-nav" });
      (0, import_obsidian.setIcon)(next, "chevron-right");
      next.addEventListener("click", () => {
        if (++viewM > 11) {
          viewM = 0;
          viewY++;
        }
        render();
      });
      head.createEl("button", { cls: "pb-dp-today", text: "Today" }).addEventListener("click", () => {
        const t = todayKey();
        viewY = +t.slice(0, 4);
        viewM = +t.slice(5, 7) - 1;
        render();
      });
      const dow = pop.createDiv({ cls: "pb-dp-dow" });
      for (let i = 0; i < 7; i++) dow.createSpan({ text: new Date(2026, 0, 4 + i).toLocaleDateString(void 0, { weekday: "narrow" }) });
      const grid = pop.createDiv({ cls: "pb-dp-grid" });
      const tKey = todayKey();
      for (const cell of monthGrid(viewY, viewM, false)) {
        const cls = "pb-dp-day" + (cell.inMonth ? "" : " pb-dp-out") + (cell.key === tKey ? " pb-dp-todaycell" : "") + (cell.key === selected ? " pb-dp-sel" : "");
        grid.createEl("button", { cls, text: String(cell.day) }).addEventListener("click", () => close(withTime(cell.key), true));
      }
      if (kind === "datetime") {
        const tr = pop.createDiv({ cls: "pb-dp-time" });
        tr.createSpan({ text: "Time" });
        timeField = tr.createEl("input", { attr: { type: "time" } });
        timeField.value = timeStr || "09:00";
      }
      pop.createDiv({ cls: "pb-dp-foot" }).createEl("button", { text: "Clear" }).addEventListener("click", () => close(void 0, true));
    };
    render();
    window.setTimeout(() => document.addEventListener("mousedown", outside, true), 0);
  }
  /** Date cells edit as text you can type (read per the column's date style,
   *  ISO always welcome) with a calendar button for the picker; Tab and the
   *  arrows navigate like any other cell. */
  beginDateEdit(td, en, fmKey, kind, raw) {
    this.editing = true;
    td.empty();
    td.addClass("pb-editing");
    const start = raw == null ? "" : String(raw);
    const wrap = td.createDiv({ cls: "pb-cell-datewrap" });
    const input = wrap.createEl("input", {
      cls: "pb-cell-input",
      attr: { type: "text", placeholder: kind === "datetime" ? "YYYY-MM-DD HH:MM" : "YYYY-MM-DD", spellcheck: "false" }
    });
    input.value = start;
    const calBtn = wrap.createEl("button", { cls: "pb-date-btn", attr: { "aria-label": "Pick from the calendar" } });
    (0, import_obsidian.setIcon)(calBtn, "calendar");
    const style = this.plugin.dateFormat("note." + fmKey)?.preset === "eu" ? "eu" : "us";
    let pickerOpen = false;
    let done = false;
    const close = (commit, navigating = false) => {
      if (done) return true;
      let value;
      if (commit) {
        const text = input.value.trim();
        if (!text) value = void 0;
        else {
          const iso = text === start ? start : parseDateInput(text, style);
          if (iso == null) {
            new Notice("Power Bases: could not read that as a date. Try 2026-07-16" + (style === "eu" ? " or 16/07/2026." : " or 07/16/2026."));
            return false;
          }
          value = iso;
          if (kind === "datetime" && !iso.includes("T")) {
            const t = start.match(/T(\d{2}:\d{2})/)?.[1];
            if (t) value = iso + "T" + t;
          }
        }
      }
      done = true;
      this.editing = false;
      if (commit && (value ?? "") !== start) {
        td.removeClass("pb-editing");
        td.setText(value ?? "");
        void this.plugin.writeBatch(`Set ${this.config.getDisplayName("note." + fmKey)} on "${en.file.basename}"`, [
          { file: en.file, assignments: { [fmKey]: value } }
        ]);
        if (this.pendingUpdate) this.pendingUpdate = false;
        return true;
      }
      if (navigating) {
        td.removeClass("pb-editing");
        td.setText(input.value.trim());
        return true;
      }
      if (this.pendingUpdate) this.pendingUpdate = false;
      this.onDataUpdated();
      return true;
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        close(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close(false);
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (close(true, true)) this.editNeighbor(td, e.shiftKey ? -1 : 1, 0);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (close(true, true)) this.editNeighbor(td, 0, 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (close(true, true)) this.editNeighbor(td, 0, -1);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        const above = this.cellAbove(td, fmKey);
        if (above != null) input.value = above;
      }
    });
    input.addEventListener("blur", () => {
      window.setTimeout(() => {
        if (!pickerOpen) close(true);
      }, 0);
    });
    calBtn.addEventListener("mousedown", (e) => e.preventDefault());
    calBtn.addEventListener("click", () => {
      if (pickerOpen) return;
      pickerOpen = true;
      this.openDatePicker(
        td,
        input.value.trim() || start,
        kind,
        (v) => {
          pickerOpen = false;
          input.value = v ?? "";
          close(true);
        },
        () => {
          pickerOpen = false;
          input.focus();
        }
      );
    });
    input.focus();
    input.select();
  }
  /** A Place cell's editor: the address first (with OpenStreetMap autocomplete,
   *  opt-in and degrading to free text offline), then the caption shown in the
   *  cell. The address opens Google Maps. */
  beginPlaceEdit(td, en, fmKey, raw) {
    this.beginLinkEdit(td, en, fmKey, raw, {
      addressLabel: "Address",
      addressPlaceholder: "Search or type an address",
      captionLabel: "Caption (shown in cell)",
      captionPlaceholder: "Optional short name",
      captionFirst: false,
      suggest: true
    });
  }
  /** A URL cell's editor, a classic two-field Link dialog: the text to
   *  display on top, the address under it. The cell shows the text; the link
   *  opens the address. */
  beginUrlEdit(td, en, fmKey, raw) {
    this.beginLinkEdit(td, en, fmKey, raw, {
      addressLabel: "Address",
      addressPlaceholder: "https://example.com",
      captionLabel: "Text to display",
      captionPlaceholder: "Optional; the address shows when empty",
      captionFirst: true,
      suggest: false
    });
  }
  /** The two-field editor popover behind Place and URL cells: an address plus
   *  the optional display text shown in the cell, stored together as one
   *  `[text](address)` property (bare address when no text), so it stays plain
   *  frontmatter. Place adds OpenStreetMap address suggestions. */
  beginLinkEdit(td, en, fmKey, raw, opts) {
    if (this.editing) return;
    this.editing = true;
    td.addClass("pb-editing");
    const fmLive = frontmatterOf(this.app, en.file);
    if (fmLive) raw = fmLive[fmKey];
    const start = raw == null ? "" : String(raw);
    const cur = parseLinkValue(start);
    let address = cur.address;
    let caption = cur.caption;
    const pop = document.body.createDiv({ cls: "pb-placeedit" });
    const W = 320;
    const rect = td.getBoundingClientRect();
    const left = rect.width > 0 ? rect.left : 40;
    const top = rect.width > 0 ? rect.bottom + 4 : 80;
    pop.style.width = W + "px";
    pop.style.left = Math.max(6, Math.min(left, window.innerWidth - W - 6)) + "px";
    pop.style.top = top + "px";
    const makeField = (label, placeholder, value) => {
      const f = pop.createDiv({ cls: "pb-pe-field" });
      f.createEl("label", { text: label });
      const input = f.createEl("input", {
        cls: "pb-pe-input",
        attr: { type: "text", placeholder, spellcheck: "false" }
      });
      input.value = value;
      return input;
    };
    let addrIn;
    let capIn;
    if (opts.captionFirst) {
      capIn = makeField(opts.captionLabel, opts.captionPlaceholder, caption);
      addrIn = makeField(opts.addressLabel, opts.addressPlaceholder, address);
    } else {
      addrIn = makeField(opts.addressLabel, opts.addressPlaceholder, address);
      capIn = makeField(opts.captionLabel, opts.captionPlaceholder, caption);
    }
    let sugg = null;
    if (opts.suggest) {
      sugg = pop.createDiv({ cls: "pb-pe-sugg" });
      addrIn.parentElement?.after(sugg);
    }
    let done = false;
    let timer = 0;
    let reqSeq = 0;
    const finish = (commit) => {
      if (done) return;
      done = true;
      this.editing = false;
      window.clearTimeout(timer);
      document.removeEventListener("mousedown", outside, true);
      pop.remove();
      if (commit) {
        const val = formatLinkValue(address, caption);
        if (val !== start) {
          void this.plugin.writeBatch(`Set ${this.config.getDisplayName("note." + fmKey)} on "${en.file.basename}"`, [
            { file: en.file, assignments: { [fmKey]: val ? val : void 0 } }
          ]);
          return;
        }
      }
      this.onDataUpdated();
    };
    const outside = (e) => {
      if (!pop.contains(e.target)) finish(true);
    };
    const runSearch = async (q) => {
      if (!sugg) return;
      const query = q.trim();
      if (!this.plugin.settings.placeAutocomplete || query.length < 3) {
        sugg.empty();
        return;
      }
      const seq = ++reqSeq;
      try {
        const res = await (0, import_obsidian.requestUrl)({
          url: "https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&limit=6&q=" + encodeURIComponent(query),
          headers: { "User-Agent": "obsidian-power-bases" }
        });
        if (done || seq !== reqSeq) return;
        const arr = Array.isArray(res.json) ? res.json : [];
        sugg.empty();
        for (const r of arr) {
          const name = String(r.display_name ?? "").trim();
          if (!name) continue;
          const opt = sugg.createDiv({ cls: "pb-pe-opt" });
          (0, import_obsidian.setIcon)(opt.createSpan({ cls: "pb-pe-opt-ic" }), "map-pin");
          opt.createSpan({ cls: "pb-pe-opt-txt", text: name });
          opt.addEventListener("mousedown", (e) => {
            e.preventDefault();
            address = name;
            addrIn.value = name;
            sugg?.empty();
            capIn.focus();
          });
        }
      } catch {
        if (seq === reqSeq) sugg.empty();
      }
    };
    addrIn.addEventListener("input", () => {
      address = addrIn.value;
      if (!opts.suggest) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void runSearch(addrIn.value), 350);
    });
    const onKey = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        finish(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        finish(false);
      }
    };
    addrIn.addEventListener("keydown", onKey);
    capIn.addEventListener("input", () => {
      caption = capIn.value;
    });
    capIn.addEventListener("keydown", onKey);
    window.setTimeout(() => {
      document.addEventListener("mousedown", outside, true);
      const first = opts.captionFirst && address ? capIn : addrIn;
      first.focus();
      first.select();
    }, 0);
  }
  /** The picker behind Image and Files cells: search files already in the
   *  vault (images preview as thumbnails) or upload from the computer, which
   *  copies the file into the configured attachment folder. Cells store plain
   *  `[[wikilinks]]`; typing a URL keeps it as typed, so remote images work. */
  beginFilePick(td, en, fmKey, raw, opts) {
    if (this.editing) return;
    this.editing = true;
    td.addClass("pb-editing");
    const fmLive = frontmatterOf(this.app, en.file);
    if (fmLive) raw = fmLive[fmKey];
    const start = Array.isArray(raw) ? raw.map(String) : raw == null || raw === "" ? [] : [String(raw)];
    let items = [...start];
    let done = false;
    const pop = document.body.createDiv({ cls: "pb-filepick" });
    const W = 340;
    const rect = td.getBoundingClientRect();
    const left = rect.width > 0 ? rect.left : 40;
    const top = rect.width > 0 ? rect.bottom + 4 : 80;
    pop.style.width = W + "px";
    pop.style.left = Math.max(6, Math.min(left, window.innerWidth - W - 6)) + "px";
    pop.style.top = top + "px";
    const finish = (commit, single) => {
      if (done) return;
      done = true;
      this.editing = false;
      document.removeEventListener("mousedown", outside, true);
      pop.remove();
      const label = `Set ${this.config.getDisplayName("note." + fmKey)} on "${en.file.basename}"`;
      if (!opts.multi) {
        if (single !== void 0) {
          void this.plugin.writeBatch(label, [{ file: en.file, assignments: { [fmKey]: single ?? void 0 } }]);
          return;
        }
      } else if (commit && items.join("\n") !== start.join("\n")) {
        void this.plugin.writeBatch(label, [{ file: en.file, assignments: { [fmKey]: items.length ? items : void 0 } }]);
        return;
      }
      this.onDataUpdated();
    };
    const outside = (e) => {
      if (!pop.contains(e.target)) finish(opts.multi);
    };
    let chips = null;
    const renderChips = () => {
      if (!chips) return;
      chips.empty();
      if (!items.length) chips.createSpan({ cls: "pb-le-empty", text: "No files yet" });
      for (const it of items) {
        const chip = chips.createSpan({ cls: "pb-fp-chip" });
        chip.createSpan({ text: fileLinkParts(it).name });
        const x = chip.createSpan({ cls: "pb-le-cx" });
        (0, import_obsidian.setIcon)(x, "x");
        x.addEventListener("click", () => {
          items = items.filter((v) => v !== it);
          renderChips();
        });
      }
    };
    if (opts.multi) {
      chips = pop.createDiv({ cls: "pb-fp-chips" });
      renderChips();
    }
    const search = pop.createEl("input", {
      cls: "pb-pe-input",
      attr: { type: "text", placeholder: opts.images ? "Search images in the vault" : "Search files in the vault", spellcheck: "false" }
    });
    const list = pop.createDiv({ cls: "pb-fp-list" });
    const candidates = () => {
      const q = search.value.trim().toLowerCase();
      let files = this.app.vault.getFiles().filter((f) => opts.images ? IMG_EXTS.has(f.extension.toLowerCase()) : f.extension.toLowerCase() !== "base");
      if (!q) return files.sort((a, b) => b.stat.mtime - a.stat.mtime).slice(0, 12);
      files = files.filter((f) => f.path.toLowerCase().includes(q));
      const score = (f) => f.basename.toLowerCase().startsWith(q) ? 0 : f.basename.toLowerCase().includes(q) ? 1 : 2;
      return files.sort((a, b) => score(a) - score(b) || a.basename.localeCompare(b.basename)).slice(0, 24);
    };
    const pick = (value) => {
      if (opts.multi) {
        if (!items.includes(value)) items.push(value);
        renderChips();
        search.value = "";
        renderList();
        search.focus();
      } else {
        finish(true, value);
      }
    };
    const renderList = () => {
      list.empty();
      for (const f of candidates()) {
        const row = list.createDiv({ cls: "pb-fp-item" });
        if (opts.images) row.createEl("img", { cls: "pb-fp-thumb", attr: { src: this.app.vault.getResourcePath(f), alt: f.name } });
        else (0, import_obsidian.setIcon)(row.createSpan({ cls: "pb-pe-opt-ic" }), "file");
        const txt = row.createDiv({ cls: "pb-fp-text" });
        txt.createDiv({ cls: "pb-fp-name", text: f.name });
        if (f.parent && f.parent.path !== "/") txt.createDiv({ cls: "pb-fp-path", text: f.parent.path });
        row.addEventListener("click", () => pick("[[" + this.app.metadataCache.fileToLinktext(f, en.file.path) + "]]"));
      }
      const q = search.value.trim();
      if (q) {
        const use = list.createDiv({ cls: "pb-fp-item" });
        (0, import_obsidian.setIcon)(use.createSpan({ cls: "pb-pe-opt-ic" }), "corner-down-left");
        use.createDiv({ cls: "pb-fp-text" }).createDiv({ cls: "pb-fp-name", text: `Use "${q}" as typed` });
        use.addEventListener("click", () => pick(q));
      }
    };
    renderList();
    search.addEventListener("input", renderList);
    search.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const q = search.value.trim();
        if (q) pick(q);
        else finish(opts.multi);
      } else if (e.key === "Escape") {
        e.preventDefault();
        finish(false);
      }
    });
    const btns = pop.createDiv({ cls: "pb-fp-btns" });
    const fileIn = pop.createEl("input", { cls: "pb-fp-fileinput", attr: { type: "file" } });
    if (opts.images) fileIn.accept = "image/*";
    if (opts.multi) fileIn.multiple = true;
    btns.createEl("button", { text: opts.images ? "Upload image" : "Upload files" }).addEventListener("click", () => fileIn.click());
    onEventAsync(fileIn, "change", async () => {
      const files = Array.from(fileIn.files ?? []);
      if (!files.length) return;
      const links = [];
      for (const f of files) {
        try {
          links.push(await this.importFile(f, en.file.path));
        } catch (e) {
          new Notice("Power Bases: could not import. " + e.message);
        }
      }
      if (!links.length) return;
      if (opts.multi) {
        for (const l of links) if (!items.includes(l)) items.push(l);
        renderChips();
        renderList();
      } else {
        finish(true, links[0]);
      }
    });
    if (!opts.multi && start.length) btns.createEl("button", { text: "Clear" }).addEventListener("click", () => finish(true, null));
    window.setTimeout(() => {
      document.addEventListener("mousedown", outside, true);
      search.focus();
    }, 0);
  }
  /** Copy a picked file into the vault at the configured attachment location
   *  and return a wikilink to it. */
  async importFile(f, sourcePath) {
    const buf = await f.arrayBuffer();
    const path = await this.app.fileManager.getAvailablePathForAttachment(f.name, sourcePath);
    const tf = await this.app.vault.createBinary(path, buf);
    return "[[" + this.app.metadataCache.fileToLinktext(tf, sourcePath) + "]]";
  }
  /** The distinct values used anywhere in a list column (for the multi-select
   *  options), read from frontmatter so an absent value is never "null". */
  distinctListValues(fmKey) {
    const set = /* @__PURE__ */ new Set();
    for (const en of this.data.data) {
      const raw = frontmatterOf(this.app, en.file)?.[fmKey];
      const arr = Array.isArray(raw) ? raw : raw == null || raw === "" ? [] : [raw];
      for (const v of arr) {
        const s = String(v).trim();
        if (s && s !== "null") set.add(s);
      }
      if (set.size >= 200) break;
    }
    return [...set].sort((a, b) => a.localeCompare(b));
  }
  /** Rename a list value across every row of the base (one undoable change). */
  async renameListOptionAcrossRows(fmKey, oldV, rawNew) {
    const newV = rawNew.trim();
    if (!newV || newV === oldV) return;
    const writes = [];
    for (const en of this.data.data) {
      const raw = frontmatterOf(this.app, en.file)?.[fmKey];
      const arr = Array.isArray(raw) ? raw.map((v) => String(v)) : raw == null || raw === "" ? [] : [String(raw)];
      if (arr.includes(oldV)) writes.push({ file: en.file, assignments: { [fmKey]: [...new Set(arr.map((x) => x === oldV ? newV : x))] } });
    }
    if (writes.length) await this.plugin.writeBatch(`Renamed "${oldV}" to "${newV}"`, writes);
    this.plugin.refreshAll();
  }
  /** Remove a list value from every row of the base (one undoable change). */
  async deleteListOptionAcrossRows(fmKey, v) {
    const writes = [];
    for (const en of this.data.data) {
      const raw = frontmatterOf(this.app, en.file)?.[fmKey];
      const arr = Array.isArray(raw) ? raw.map((x) => String(x)) : raw == null || raw === "" ? [] : [String(raw)];
      if (arr.includes(v)) {
        const next = arr.filter((x) => x !== v);
        writes.push({ file: en.file, assignments: { [fmKey]: next.length ? next : void 0 } });
      }
    }
    if (writes.length) await this.plugin.writeBatch(`Removed "${v}"`, writes);
    this.plugin.refreshAll();
  }
  /** A multi-select popover for a list cell: chips you can remove, an input to
   *  add, and the column's values as options you can add, rename (across the
   *  base's rows), or delete. */
  beginListEdit(td, en, fmKey, raw) {
    this.editing = true;
    td.addClass("pb-editing");
    let items = Array.isArray(raw) ? raw.map((v) => String(v)) : raw == null || raw === "" ? [] : [String(raw)];
    const start = JSON.stringify(items);
    const pop = document.body.createDiv({ cls: "pb-listedit" });
    const rect = td.getBoundingClientRect();
    pop.style.left = Math.max(6, Math.min(rect.left, window.innerWidth - 260)) + "px";
    pop.style.top = rect.bottom + 2 + "px";
    pop.style.minWidth = Math.max(210, rect.width) + "px";
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      this.editing = false;
      document.removeEventListener("mousedown", outside, true);
      pop.remove();
      if (JSON.stringify(items) !== start) {
        void this.plugin.writeBatch(`Edited ${fmKey} of "${en.file.basename}"`, [{ file: en.file, assignments: { [fmKey]: items.length ? items : void 0 } }]);
      } else {
        this.onDataUpdated();
      }
    };
    const outside = (e) => {
      if (!pop.contains(e.target)) finish();
    };
    const chipsEl = pop.createDiv({ cls: "pb-le-chips" });
    const input = pop.createEl("input", { cls: "pb-le-input", attr: { type: "text", placeholder: "Add or find\u2026" } });
    const optsEl = pop.createDiv({ cls: "pb-le-opts" });
    const renderChips = () => {
      chipsEl.empty();
      if (!items.length) chipsEl.createSpan({ cls: "pb-le-empty", text: "Empty" });
      for (const it of items) {
        const chip = chipsEl.createSpan({ cls: "pb-le-chip", text: it });
        chip.style.setProperty("--pb-c", this.plugin.hueFor(fmKey, it));
        const x = chip.createSpan({ cls: "pb-le-cx" });
        (0, import_obsidian.setIcon)(x, "x");
        x.addEventListener("click", (e) => {
          e.stopPropagation();
          items = items.filter((i) => i !== it);
          renderChips();
          renderOpts(input.value);
        });
      }
    };
    const add = (v) => {
      const t = v.trim();
      if (t && !items.includes(t)) items.push(t);
      input.value = "";
      renderChips();
      renderOpts("");
      input.focus();
    };
    const renderOpts = (q) => {
      optsEl.empty();
      const query = q.trim().toLowerCase();
      const all = this.distinctListValues(fmKey);
      const typed = q.trim();
      if (typed && !all.includes(typed) && !items.includes(typed)) {
        const row = optsEl.createDiv({ cls: "pb-le-opt" });
        (0, import_obsidian.setIcon)(row.createSpan({ cls: "pb-le-oic" }), "plus");
        row.createSpan({ cls: "pb-le-olabel", text: `Create "${typed}"` });
        row.addEventListener("click", () => add(typed));
      }
      for (const v of all.filter((x) => !items.includes(x) && x.toLowerCase().includes(query))) {
        const row = optsEl.createDiv({ cls: "pb-le-opt" });
        const chip = row.createSpan({ cls: "pb-le-chip", text: v });
        chip.style.setProperty("--pb-c", this.plugin.hueFor(fmKey, v));
        row.addEventListener("click", () => add(v));
        const acts = row.createSpan({ cls: "pb-le-acts" });
        const edit = acts.createSpan({ cls: "pb-le-act", attr: { "aria-label": "Rename everywhere" } });
        (0, import_obsidian.setIcon)(edit, "pencil");
        edit.addEventListener("click", (e) => {
          e.stopPropagation();
          finish();
          new PromptModal(this.app, { title: `Rename "${v}"`, initial: v, onSubmit: (nv) => void this.renameListOptionAcrossRows(fmKey, v, nv) }).open();
        });
        const del = acts.createSpan({ cls: "pb-le-act pb-le-del", attr: { "aria-label": "Delete everywhere" } });
        (0, import_obsidian.setIcon)(del, "trash-2");
        del.addEventListener("click", (e) => {
          e.stopPropagation();
          finish();
          new ConfirmModal(this.app, { title: "Delete value", body: `Remove "${v}" from every row of this base? You can undo this.`, confirmText: "Delete", onConfirm: () => void this.deleteListOptionAcrossRows(fmKey, v) }).open();
        });
      }
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        add(input.value);
      } else if (e.key === "Escape") finish();
    });
    input.addEventListener("input", () => renderOpts(input.value));
    renderChips();
    renderOpts("");
    window.setTimeout(() => {
      input.focus();
      document.addEventListener("mousedown", outside, true);
    }, 0);
  }
  /** Swap the cell for a typed input; Enter or blur commits, Escape cancels.
   *  Blank input deletes the property, per coerceForKind. */
  beginEdit(td, en, fmKey, kind, raw) {
    if (this.editing) return;
    const fmLive = frontmatterOf(this.app, en.file);
    if (fmLive) raw = fmLive[fmKey];
    if (kind === "date" || kind === "datetime") {
      this.beginDateEdit(td, en, fmKey, kind, raw);
      return;
    }
    if (kind === "list") {
      this.beginListEdit(td, en, fmKey, raw);
      return;
    }
    this.editing = true;
    td.empty();
    td.addClass("pb-editing");
    const type = kind === "number" ? "number" : "text";
    const input = td.createEl("input", { cls: "pb-cell-input", attr: { type } });
    if (kind === "number") input.setAttr("step", "any");
    input.value = raw == null ? "" : String(raw);
    if (kind === "text" && !this.plugin.fieldType(fmKey) && this.config.get("color:note." + fmKey) === "value") {
      const seen = /* @__PURE__ */ new Set();
      for (const other of this.data.data) {
        const rawV = frontmatterOf(this.app, other.file)?.[fmKey];
        const s = rawV == null ? "" : String(rawV).trim();
        if (s && s !== "null") seen.add(s);
        if (seen.size >= 40) break;
      }
      if (seen.size) {
        const id = "pb-dl-" + Math.abs(colorIndex(fmKey + Date.now(), 999983));
        const dl = td.createEl("datalist", { attr: { id } });
        for (const s of seen) dl.createEl("option", { attr: { value: s } });
        input.setAttr("list", id);
      }
    }
    let done = false;
    const close = (commit, navigating = false) => {
      if (done) return;
      done = true;
      this.editing = false;
      if (commit) {
        const next = coerceForKind(kind, input.value);
        const changed = String(raw ?? "") !== input.value.trim();
        if (changed) {
          td.removeClass("pb-editing");
          td.setText(input.value.trim());
          void this.plugin.writeBatch(`Edited ${fmKey} of "${en.file.basename}"`, [
            { file: en.file, assignments: { [fmKey]: next } }
          ]);
          this.maybeRenameUntitled(en, fmKey, input.value.trim());
          if (this.pendingUpdate) {
            this.pendingUpdate = false;
          }
          return;
        }
      }
      if (navigating) {
        td.removeClass("pb-editing");
        td.setText(input.value.trim());
        return;
      }
      if (this.pendingUpdate) this.pendingUpdate = false;
      this.onDataUpdated();
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        close(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close(false);
      } else if (e.key === "Tab") {
        e.preventDefault();
        close(true, true);
        this.editNeighbor(td, e.shiftKey ? -1 : 1, 0);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        close(true, true);
        this.editNeighbor(td, 0, 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        close(true, true);
        this.editNeighbor(td, 0, -1);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        const above = this.cellAbove(td, fmKey);
        if (above != null) input.value = above;
      }
    });
    input.addEventListener("paste", (e) => {
      const textData = e.clipboardData?.getData("text/plain") ?? "";
      if (!textData.includes("	") && !/\n.*\S/.test(textData)) return;
      e.preventDefault();
      close(false, true);
      void this.pasteGrid(td, textData);
    });
    input.addEventListener("blur", () => close(true));
    input.focus();
    if (type === "text") input.select();
  }
};
var PowerTimelineView = class extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-timeline";
    this.dragging = false;
    this.writing = false;
    this.pendingUpdate = false;
  }
  flushPending() {
    if (this.pendingUpdate) {
      this.pendingUpdate = false;
      this.onDataUpdated();
    }
  }
  onDataUpdated() {
    if (this.dragging || this.writing) {
      this.pendingUpdate = true;
      return;
    }
    const root = this.rootEl;
    const prevScroll = root.querySelector(".pb-tl-scroll")?.scrollLeft ?? null;
    root.empty();
    root.className = "pb-root pb-tl";
    const startProp = this.config.getAsPropertyId("startProp");
    if (!startProp) {
      this.hint("Pick a Start date property in the view options to draw the timeline.");
      return;
    }
    const endPropRaw = this.config.getAsPropertyId("endProp");
    const endProp = endPropRaw && endPropRaw !== startProp ? endPropRaw : null;
    const colorProp = this.config.getAsPropertyId("colorProp");
    const milestoneProp = this.config.getAsPropertyId("milestoneProp");
    const progressProp = this.config.getAsPropertyId("progressProp");
    const startKeyName = frontmatterKey(startProp);
    const endKeyName = endProp ? frontmatterKey(endProp) : null;
    const zoom = String(this.config.get("zoom") ?? "week");
    const ppd = zoom === "day" ? 44 : zoom === "month" ? 5 : 16;
    const now = /* @__PURE__ */ new Date();
    const todayKey2 = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const items = [];
    const unscheduled = [];
    for (const en of this.data.data) {
      const s = dateKeyOf(this.text(en, startProp));
      if (!s) {
        unscheduled.push(en);
        continue;
      }
      let e2 = endProp ? dateKeyOf(this.text(en, endProp)) : null;
      if (!e2 || dayDiff(s, e2) < 0) e2 = s;
      items.push({ en, start: s, end: e2 });
    }
    const byPath = new Map(items.map((i) => [i.en.file.path, i]));
    const range = timelineRange(
      items.flatMap((i) => [i.start, i.end]),
      todayKey2,
      7
    );
    const totalDays = dayDiff(range.from, range.to) + 1;
    const NAMEW = 220;
    const top = root.createDiv({ cls: "pb-tl-top" });
    const todayBtn = top.createEl("button", { cls: "pb-cal-btn", text: "Today" });
    const scroll = root.createDiv({ cls: "pb-tl-scroll" });
    const inner = scroll.createDiv({ cls: "pb-tl-inner" });
    inner.style.width = NAMEW + totalDays * ppd + "px";
    if (zoom !== "month") {
      const satOffset = (6 - dayOfWeek(range.from) + 7) % 7;
      inner.addClass("pb-tl-wk");
      inner.style.setProperty("--pb-wkoff", NAMEW + satOffset * ppd + "px");
      inner.style.setProperty("--pb-wk", ppd * 7 + "px");
      inner.style.setProperty("--pb-wkw", ppd * 2 + "px");
    }
    const months = inner.createDiv({ cls: "pb-tl-months" });
    months.createDiv({ cls: "pb-tl-corner" });
    for (const m of monthSpans(range.from, range.to)) {
      const cell = months.createDiv({ cls: "pb-tl-month" });
      cell.style.width = m.days * ppd + "px";
      if (m.days * ppd > 52) {
        cell.setText(
          new Date(Date.UTC(m.y, m.m0, 1)).toLocaleDateString(void 0, {
            month: "short",
            year: "numeric",
            timeZone: "UTC"
          })
        );
      }
    }
    if (zoom === "day") {
      const ticks = inner.createDiv({ cls: "pb-tl-ticks" });
      ticks.createDiv({ cls: "pb-tl-corner" });
      for (let i = 0; i < totalDays; i++) {
        const t = ticks.createDiv({ cls: "pb-tl-tick" });
        t.style.width = ppd + "px";
        t.setText(String(+addDays(range.from, i).slice(8, 10)));
      }
    } else if (zoom === "week") {
      const ticks = inner.createDiv({ cls: "pb-tl-ticks" });
      ticks.createDiv({ cls: "pb-tl-corner" });
      const firstMonday = (1 - dayOfWeek(range.from) + 7) % 7;
      if (firstMonday > 0) {
        const pad = ticks.createDiv({ cls: "pb-tl-tick pb-tl-pad" });
        pad.style.width = firstMonday * ppd + "px";
      }
      for (let w = firstMonday; w < totalDays; w += 7) {
        const t = ticks.createDiv({ cls: "pb-tl-tick" });
        t.style.width = Math.min(7, totalDays - w) * ppd + "px";
        t.setText(String(+addDays(range.from, w).slice(8, 10)));
      }
    }
    const todayOff = dayDiff(range.from, todayKey2);
    if (todayOff >= 0 && todayOff < totalDays) {
      const line = inner.createDiv({ cls: "pb-tl-today" });
      line.style.left = NAMEW + todayOff * ppd + ppd / 2 + "px";
    }
    todayBtn.addEventListener("click", () => {
      scroll.scrollLeft = Math.max(0, NAMEW + todayOff * ppd - scroll.clientWidth / 2);
    });
    if (unscheduled.length) {
      const uns = top.createDiv({ cls: "pb-tl-unsched" });
      const lbl = uns.createSpan({ cls: "pb-tl-unslbl", text: `Unscheduled ${unscheduled.length}` });
      const chips = uns.createDiv({ cls: "pb-tl-unslist" });
      chips.hide();
      lbl.addEventListener("click", () => chips.isShown() ? chips.hide() : chips.show());
      for (const en of unscheduled) {
        const chip = chips.createDiv({ cls: "pb-chip", text: en.file.basename });
        this.hoverable(chip, en.file);
        let guide = null;
        let guideLbl = null;
        let day = null;
        attachPointerGesture(chip, {
          ghostText: en.file.basename,
          onStart: () => {
            this.dragging = true;
            day = null;
            guide = inner.createDiv({ cls: "pb-tl-guide" });
            guideLbl = guide.createDiv({ cls: "pb-tl-guidelbl" });
          },
          onMove: (_dx, _dy, x) => {
            const r = scroll.getBoundingClientRect();
            const xIn = x - r.left + scroll.scrollLeft - NAMEW;
            day = Math.max(0, Math.min(totalDays - 1, Math.floor(xIn / ppd)));
            if (guide) {
              guide.style.left = NAMEW + day * ppd + "px";
              guide.style.width = Math.max(2, ppd) + "px";
            }
            guideLbl?.setText(addDays(range.from, day));
          },
          onDrop: () => {
            const key = day == null ? null : addDays(range.from, day);
            guide?.remove();
            guide = null;
            this.dragging = false;
            if (key == null) {
              this.flushPending();
              return;
            }
            this.writing = true;
            const raw = frontmatterOf(this.app, en.file)?.[startKeyName];
            const next = typeof raw === "string" && dateKeyOf(raw) ? replaceDateKey(raw, key) : key;
            void this.plugin.writeBatch(`Scheduled "${en.file.basename}" for ${key}`, [
              { file: en.file, assignments: { [startKeyName]: next } }
            ]).finally(() => {
              this.writing = false;
              this.flushPending();
            });
          },
          onCancel: () => {
            guide?.remove();
            guide = null;
            this.dragging = false;
            this.flushPending();
          },
          onClick: (ev2) => this.open(en.file, ev2)
        });
      }
    }
    const depProp = this.config.getAsPropertyId("depProp");
    const depKey = depProp ? frontmatterKey(depProp) : null;
    const barEls = /* @__PURE__ */ new Map();
    const renderItemRow = (it) => {
      const row = inner.createDiv({ cls: "pb-tl-row" });
      const name = row.createDiv({ cls: "pb-tl-name", text: it.en.file.basename });
      name.addEventListener("click", (ev2) => this.open(it.en.file, ev2));
      this.hoverable(name, it.en.file);
      const cell = row.createDiv({ cls: "pb-tl-cell" });
      cell.style.width = totalDays * ppd + "px";
      const off = Math.max(0, dayDiff(range.from, it.start));
      const endOff = Math.min(totalDays - 1, dayDiff(range.from, it.end));
      const msVal = milestoneProp ? this.text(it.en, milestoneProp) : "";
      const milestone = msVal !== "" && msVal !== "false" && msVal !== "0";
      const bar = cell.createDiv({
        cls: "pb-tl-bar" + (milestone ? " pb-tl-ms" : ""),
        attr: { title: it.en.file.basename + "  " + it.start + (it.end !== it.start ? " to " + it.end : "") }
      });
      barEls.set(it.en.file.path, bar);
      let hue = "var(--interactive-accent)";
      if (colorProp) {
        const v = this.text(it.en, colorProp);
        if (v) hue = this.plugin.hueFor(colorProp.startsWith("note.") ? frontmatterKey(colorProp) : null, v);
      }
      bar.style.setProperty("--pb-bar", hue);
      if (milestone) {
        bar.style.left = off * ppd + Math.max(0, ppd / 2 - 8) + "px";
        this.attachBarDrag(bar, { en: it.en, start: it.start, end: it.start }, ppd, startKeyName, null);
        return;
      }
      bar.style.left = off * ppd + "px";
      bar.style.width = Math.max(8, (endOff - off + 1) * ppd - 2) + "px";
      if (progressProp) {
        const pct = progressPct(frontmatterOf(this.app, it.en.file)?.[frontmatterKey(progressProp)]);
        if (pct != null) {
          const fill = bar.createDiv({ cls: "pb-tl-fill" });
          fill.style.width = pct + "%";
          bar.setAttr("title", bar.getAttribute("title") + "  " + Math.round(pct) + "%");
        }
      }
      if (endKeyName) {
        bar.createDiv({ cls: "pb-tl-grip pb-tl-grip-l" });
        bar.createDiv({ cls: "pb-tl-grip pb-tl-grip-r" });
      }
      this.attachBarDrag(bar, it, ppd, startKeyName, endKeyName);
    };
    for (const g of this.data.groupedData) {
      if (g.key !== void 0) {
        const gr = inner.createDiv({ cls: "pb-tl-group" });
        gr.createSpan({ text: g.hasKey() ? String(g.key) : "No value" });
      }
      for (const en of g.entries) {
        const it = byPath.get(en.file.path);
        if (it) renderItemRow(it);
      }
    }
    if (depKey) this.drawDeps(inner, barEls, byPath, depKey);
    if (prevScroll != null) scroll.scrollLeft = prevScroll;
    else if (todayOff >= 0) scroll.scrollLeft = Math.max(0, NAMEW + todayOff * ppd - scroll.clientWidth / 2);
  }
  /** Draw finish-to-start dependency arrows between bars after layout, so
   *  positions can be measured. A predecessor that ends after this task
   *  starts is a schedule conflict: the arrow and the late bar go red. */
  drawDeps(inner, barEls, byPath, depKey) {
    window.requestAnimationFrame(() => {
      if (!inner.isConnected) return;
      const NS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(NS, "svg");
      svg.addClass("pb-tl-deps");
      svg.setAttribute("width", String(inner.scrollWidth));
      svg.setAttribute("height", String(inner.scrollHeight));
      const defs = document.createElementNS(NS, "defs");
      for (const [id, cls] of [
        ["pb-arrow", "pb-dep-head"],
        ["pb-arrow-late", "pb-dep-head-late"]
      ]) {
        const marker = document.createElementNS(NS, "marker");
        marker.setAttribute("id", id);
        marker.setAttribute("viewBox", "0 0 8 8");
        marker.setAttribute("refX", "6");
        marker.setAttribute("refY", "4");
        marker.setAttribute("markerWidth", "6");
        marker.setAttribute("markerHeight", "6");
        marker.setAttribute("orient", "auto-start-reverse");
        const tri = document.createElementNS(NS, "path");
        tri.setAttribute("d", "M0 1 L6 4 L0 7 Z");
        tri.setAttribute("class", cls);
        marker.appendChild(tri);
        defs.appendChild(marker);
      }
      svg.appendChild(defs);
      const irect = inner.getBoundingClientRect();
      const loc = (el) => {
        const r = el.getBoundingClientRect();
        return { left: r.left - irect.left, right: r.right - irect.left, midY: r.top - irect.top + r.height / 2 };
      };
      let any = false;
      for (const [path, el] of barEls) {
        const it = byPath.get(path);
        if (!it) continue;
        const raw = frontmatterOf(this.app, it.en.file)?.[depKey];
        const t = loc(el);
        for (const nm of linkTargets(raw)) {
          const pred = this.app.metadataCache.getFirstLinkpathDest(nm, it.en.file.path);
          const predEl = pred ? barEls.get(pred.path) : null;
          if (!pred || !predEl) continue;
          const predIt = byPath.get(pred.path);
          const s = loc(predEl);
          const late = dayDiff(predIt.end, it.start) < 0;
          const midx = Math.max(s.right + 10, t.left - 10);
          const d = `M ${s.right} ${s.midY} L ${midx} ${s.midY} L ${midx} ${t.midY} L ${t.left - 2} ${t.midY}`;
          const path2 = document.createElementNS(NS, "path");
          path2.setAttribute("d", d);
          path2.setAttribute("class", "pb-dep" + (late ? " pb-dep-late" : ""));
          path2.setAttribute("marker-end", late ? "url(#pb-arrow-late)" : "url(#pb-arrow)");
          svg.appendChild(path2);
          if (late) el.addClass("pb-tl-late");
          any = true;
        }
      }
      if (any) inner.appendChild(svg);
    });
  }
  /** Middle of the bar moves it; the 8px edges resize start or end. Deltas
   *  snap to whole days at the current zoom; Escape restores the bar. */
  attachBarDrag(bar, it, ppd, startKeyName, endKeyName) {
    let mode = "move";
    let baseLeft = 0;
    let baseWidth = 0;
    bar.addEventListener("pointerdown", (e) => {
      const rect = bar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      mode = endKeyName && x <= 8 ? "l" : endKeyName && x >= rect.width - 8 ? "r" : "move";
    });
    attachPointerGesture(bar, {
      onStart: () => {
        this.dragging = true;
        baseLeft = parseFloat(bar.style.left) || 0;
        baseWidth = parseFloat(bar.style.width) || 0;
        bar.addClass("pb-tl-dragging");
      },
      onMove: (dx) => {
        const dd = Math.round(dx / ppd) * ppd;
        if (mode === "move") bar.style.left = baseLeft + dd + "px";
        else if (mode === "r") bar.style.width = Math.max(8, baseWidth + dd) + "px";
        else {
          const shift = Math.min(dd, baseWidth - 8);
          bar.style.left = baseLeft + shift + "px";
          bar.style.width = baseWidth - shift + "px";
        }
      },
      onDrop: (dx) => {
        bar.removeClass("pb-tl-dragging");
        this.dragging = false;
        const days = Math.round(dx / ppd);
        if (days !== 0) void this.commitBarDrag(it, mode, days, startKeyName, endKeyName);
        else this.flushPending();
      },
      onCancel: () => {
        bar.style.left = baseLeft + "px";
        bar.style.width = baseWidth + "px";
        bar.removeClass("pb-tl-dragging");
        this.dragging = false;
        this.flushPending();
      },
      onClick: (ev2) => this.open(it.en.file, ev2)
    });
  }
  async commitBarDrag(it, mode, days, startKeyName, endKeyName) {
    let newStart = it.start;
    let newEnd = it.end;
    if (mode === "move") {
      newStart = addDays(it.start, days);
      newEnd = addDays(it.end, days);
    } else if (mode === "l") {
      newStart = addDays(it.start, days);
      if (dayDiff(newStart, newEnd) < 0) newStart = newEnd;
    } else {
      newEnd = addDays(it.end, days);
      if (dayDiff(newStart, newEnd) < 0) newEnd = newStart;
    }
    this.writing = true;
    try {
      const cache = frontmatterOf(this.app, it.en.file) ?? {};
      const assignments = {};
      if (newStart !== it.start) {
        const rawS = cache[startKeyName];
        assignments[startKeyName] = typeof rawS === "string" ? replaceDateKey(rawS, newStart) : newStart;
      }
      if (endKeyName && newEnd !== it.end) {
        const rawE = cache[endKeyName];
        if (rawE != null || mode === "r") {
          assignments[endKeyName] = typeof rawE === "string" ? replaceDateKey(rawE, newEnd) : newEnd;
        }
      }
      const label = mode === "move" ? `Moved "${it.en.file.basename}" to ${newStart}` : `Resized "${it.en.file.basename}"`;
      await this.plugin.writeBatch(label, [{ file: it.en.file, assignments }]);
    } finally {
      this.writing = false;
      this.flushPending();
    }
  }
};
var PowerChartView = class extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-chart";
  }
  onDataUpdated() {
    const root = this.rootEl;
    root.empty();
    root.className = "pb-root pb-chart";
    const groupProp = this.config.getAsPropertyId("groupProp");
    if (!groupProp) {
      this.hint("Pick a Group by property in the view options to draw the chart.");
      return;
    }
    const chartType = String(this.config.get("chartType") ?? "bar");
    const aggRaw = String(this.config.get("chartAgg") ?? "count");
    const agg = ["count", "sum", "avg", "min", "max"].includes(aggRaw) ? aggRaw : "count";
    const valueProp = this.config.getAsPropertyId("valueProp");
    if (agg !== "count" && !valueProp) {
      this.hint("Pick a Measure property, or set Measure to Count.");
      return;
    }
    const gKey = groupProp.startsWith("note.") ? frontmatterKey(groupProp) : null;
    const labels = this.data.data.map((en) => {
      const s = this.text(en, groupProp);
      return s === "" ? null : s;
    });
    const values = valueProp ? this.data.data.map((en) => this.text(en, valueProp)) : this.data.data.map(() => "");
    let data = groupAggregate(labels, values, agg);
    if (this.config.get("sortValue") === true) data = [...data].sort((a, b) => b.value - a.value);
    if (!data.length) {
      this.hint("No data to chart yet.");
      return;
    }
    const measureLabel = agg === "count" ? "Count" : agg[0].toUpperCase() + agg.slice(1) + " of " + this.config.getDisplayName(valueProp);
    const head = root.createDiv({ cls: "pb-chart-head" });
    head.createSpan({ cls: "pb-chart-title", text: measureLabel + " by " + this.config.getDisplayName(groupProp) });
    const body = root.createDiv({ cls: "pb-chart-body" });
    const hue = (label) => this.plugin.hueFor(gKey, label);
    if (chartType === "donut") this.renderDonut(body, data, hue);
    else this.renderAxisChart(body, data, hue, chartType === "line");
    const legend = root.createDiv({ cls: "pb-chart-legend" });
    for (const d of data) {
      const item = legend.createDiv({ cls: "pb-legend-item" });
      item.createSpan({ cls: "pb-legend-dot" }).style.background = hue(d.label);
      item.createSpan({ text: `${d.label} \xB7 ${formatNum(d.value)}` });
    }
  }
  svg(parent, w, h) {
    const s = createSvg("svg", { cls: "pb-chart-svg", attr: { viewBox: `0 0 ${w} ${h}` } });
    parent.appendChild(s);
    return s;
  }
  el(tag, attrs) {
    return createSvg(tag, { attr: attrs });
  }
  renderAxisChart(host, data, hue, line) {
    const W = 620;
    const H = 320;
    const padL = 46;
    const padB = 46;
    const padT = 12;
    const plotW = W - padL - 12;
    const plotH = H - padT - padB;
    const max = Math.max(...data.map((d) => d.value), 0);
    const ticks = axisTicks(max, 4);
    const ceil = ticks[ticks.length - 1] || 1;
    const svg = this.svg(host, W, H);
    const yOf = (v) => padT + plotH - v / ceil * plotH;
    for (const t of ticks) {
      const y = yOf(t);
      svg.appendChild(
        this.el("line", { x1: String(padL), y1: String(y), x2: String(W - 12), y2: String(y), class: "pb-axis-grid" })
      );
      const lbl = this.el("text", { x: String(padL - 6), y: String(y + 3), class: "pb-axis-label", "text-anchor": "end" });
      lbl.textContent = formatNum(t);
      svg.appendChild(lbl);
    }
    const band = plotW / data.length;
    if (line) {
      let d = "";
      data.forEach((row, i) => {
        const x = padL + band * (i + 0.5);
        const y = yOf(row.value);
        d += (i === 0 ? "M" : "L") + x + " " + y + " ";
      });
      svg.appendChild(this.el("path", { d: d.trim(), class: "pb-line", stroke: "var(--interactive-accent)" }));
      data.forEach((row, i) => {
        const x = padL + band * (i + 0.5);
        const dot = this.el("circle", { cx: String(x), cy: String(yOf(row.value)), r: "3.5", fill: hue(row.label) });
        const t = this.el("title", {});
        t.textContent = `${row.label}: ${formatNum(row.value)}`;
        dot.appendChild(t);
        svg.appendChild(dot);
      });
    } else {
      const bw = Math.min(band * 0.7, 64);
      data.forEach((row, i) => {
        const x = padL + band * (i + 0.5) - bw / 2;
        const y = yOf(row.value);
        const rect = this.el("rect", {
          x: String(x),
          y: String(y),
          width: String(bw),
          height: String(padT + plotH - y),
          rx: "3",
          fill: hue(row.label),
          class: "pb-bar-rect"
        });
        const t = this.el("title", {});
        t.textContent = `${row.label}: ${formatNum(row.value)}`;
        rect.appendChild(t);
        svg.appendChild(rect);
      });
    }
    data.forEach((row, i) => {
      const x = padL + band * (i + 0.5);
      const lbl = this.el("text", { x: String(x), y: String(H - padB + 16), class: "pb-axis-label", "text-anchor": "middle" });
      lbl.textContent = row.label.length > 9 ? row.label.slice(0, 8) + "\u2026" : row.label;
      svg.appendChild(lbl);
    });
  }
  renderDonut(host, data, hue) {
    const S = 300;
    const cx = S / 2;
    const cy = S / 2;
    const rOuter = 130;
    const rInner = 78;
    const svg = this.svg(host, S, S);
    const segs = donutSegments(data.map((d) => d.value));
    const total = data.reduce((a, b) => a + (b.value > 0 ? b.value : 0), 0);
    segs.forEach((seg, i) => {
      if (seg.frac <= 0) return;
      const a0 = seg.offset;
      const a1 = seg.offset + seg.frac;
      const [x0o, y0o] = arcPoint(cx, cy, rOuter, a0);
      const [x1o, y1o] = arcPoint(cx, cy, rOuter, a1);
      const [x1i, y1i] = arcPoint(cx, cy, rInner, a1);
      const [x0i, y0i] = arcPoint(cx, cy, rInner, a0);
      const large = seg.frac > 0.5 ? 1 : 0;
      const d = [
        `M ${x0o} ${y0o}`,
        `A ${rOuter} ${rOuter} 0 ${large} 1 ${x1o} ${y1o}`,
        `L ${x1i} ${y1i}`,
        `A ${rInner} ${rInner} 0 ${large} 0 ${x0i} ${y0i}`,
        "Z"
      ].join(" ");
      const path = this.el("path", { d, fill: hue(data[i].label), class: "pb-donut-seg" });
      const t = this.el("title", {});
      t.textContent = `${data[i].label}: ${formatNum(data[i].value)} (${Math.round(seg.frac * 100)}%)`;
      path.appendChild(t);
      svg.appendChild(path);
    });
    const center = this.el("text", { x: String(cx), y: String(cy + 6), class: "pb-donut-total", "text-anchor": "middle" });
    center.textContent = formatNum(total);
    svg.appendChild(center);
  }
};
var PowerGalleryView = class extends PBView {
  constructor() {
    super(...arguments);
    this.type = "powerbases-gallery";
  }
  onDataUpdated() {
    this.resetChunkers();
    const root = this.rootEl;
    root.empty();
    root.className = "pb-root pb-gallery pb-gallery-" + String(this.config.get("cardSize") ?? "medium");
    const imageProp = this.config.getAsPropertyId("imageProp");
    const fit = this.config.get("fitCover") !== false;
    const shown = this.config.getOrder().filter((p) => p !== "file.name" && p !== imageProp);
    const head = root.createDiv({ cls: "pb-view-head" });
    this.filterBox(head, "Filter pages\u2026");
    const entries = this.filtered(this.data.data);
    head.createSpan({ cls: "pb-view-count", text: `${entries.length}` });
    const grid = root.createDiv({ cls: "pb-gallery-grid" });
    this.chunk(grid, root, entries, (en) => {
      const card = grid.createDiv({ cls: "pb-gcard", attr: { "data-path": en.file.path } });
      const cover = card.createDiv({ cls: "pb-gcover" + (fit ? " pb-fit" : "") });
      const src = this.coverSrc(en, imageProp);
      if (src) {
        const img = cover.createEl("img", { attr: { loading: "lazy", src } });
        img.addEventListener("error", () => {
          cover.addClass("pb-gcover-none");
          img.remove();
        });
      } else {
        cover.addClass("pb-gcover-none");
        (0, import_obsidian.setIcon)(cover.createSpan({ cls: "pb-gcover-icon" }), "image");
      }
      const meta = card.createDiv({ cls: "pb-gmeta" });
      meta.createDiv({ cls: "pb-gtitle", text: en.file.basename });
      for (const p of shown.slice(0, 3)) {
        const s = this.text(en, p);
        if (!s) continue;
        meta.createDiv({ cls: "pb-gprop", text: s });
      }
      this.hoverable(card, en.file);
      this.openable(card, en.file);
      card.addEventListener("click", (ev2) => this.open(en.file, ev2));
    });
    if (!entries.length) grid.createDiv({ cls: "pb-empty", text: this.query ? "No pages match." : "No pages to show." });
  }
  /** A resource URL for the card cover: an explicit image property (wikilink
   *  or path) if set, else the first image embedded in the note. */
  coverSrc(en, imageProp) {
    const resolve = (name) => {
      const f = this.app.metadataCache.getFirstLinkpathDest(name, en.file.path);
      return f ? this.app.vault.getResourcePath(f) : null;
    };
    if (imageProp) {
      const raw = frontmatterOf(this.app, en.file)?.[frontmatterKey(imageProp)];
      const first = Array.isArray(raw) ? raw[0] : raw;
      if (typeof first === "string" && first.trim()) {
        const m = first.match(/^\[\[([^\]|]+)/);
        const target = (m ? m[1] : first).split("#")[0].trim();
        if (/^https?:\/\//.test(target)) return target;
        const r = resolve(target);
        if (r) return r;
      }
    }
    const embeds = this.app.metadataCache.getFileCache(en.file)?.embeds;
    if (embeds) {
      for (const e of embeds) {
        const target = e.link.split("#")[0].split("|")[0].trim();
        if (/\.(png|jpe?g|gif|webp|avif|svg|bmp)$/i.test(target)) {
          const r = resolve(target);
          if (r) return r;
        }
      }
    }
    return null;
  }
};

/* nosourcemap */