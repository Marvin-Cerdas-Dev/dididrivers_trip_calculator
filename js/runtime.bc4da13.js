/*! @build 2.6.2 getsitecontrol cb3aa4fd30bc1cab3e80 */ (() => {
    var t = {
            615: function (t, e, n) {
                var r;
                (t = n.nmd(t)),
                    (function (i) {
                        e && e.nodeType, t && t.nodeType;
                        var o = "object" == typeof n.g && n.g;
                        o.global !== o && o.window !== o && o.self;
                        var s,
                            a = 2147483647,
                            c = 36,
                            l = /^xn--/,
                            u = /[^\x20-\x7E]/,
                            d = /[\x2E\u3002\uFF0E\uFF61]/g,
                            h = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                            p = Math.floor,
                            g = String.fromCharCode;
                        function f(t) {
                            throw new RangeError(h[t]);
                        }
                        function m(t, e) {
                            for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
                            return r;
                        }
                        function v(t, e) {
                            var n = t.split("@"),
                                r = "";
                            return n.length > 1 && ((r = n[0] + "@"), (t = n[1])), r + m((t = t.replace(d, ".")).split("."), e).join(".");
                        }
                        function _(t) {
                            for (var e, n, r = [], i = 0, o = t.length; i < o; )
                                (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? (56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                            return r;
                        }
                        function b(t) {
                            return m(t, function (t) {
                                var e = "";
                                return t > 65535 && ((e += g((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), e + g(t);
                            }).join("");
                        }
                        function w(t, e) {
                            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                        }
                        function y(t, e, n) {
                            var r = 0;
                            for (t = n ? p(t / 700) : t >> 1, t += p(t / e); t > 455; r += c) t = p(t / 35);
                            return p(r + (36 * t) / (t + 38));
                        }
                        function x(t) {
                            var e,
                                n,
                                r,
                                i,
                                o,
                                s,
                                l,
                                u,
                                d,
                                h,
                                g,
                                m = [],
                                v = t.length,
                                _ = 0,
                                w = 128,
                                x = 72;
                            for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && f("not-basic"), m.push(t.charCodeAt(r));
                            for (i = n > 0 ? n + 1 : 0; i < v; ) {
                                for (
                                    o = _, s = 1, l = c;
                                    i >= v && f("invalid-input"),
                                        ((u = (g = t.charCodeAt(i++)) - 48 < 10 ? g - 22 : g - 65 < 26 ? g - 65 : g - 97 < 26 ? g - 97 : c) >= c || u > p((a - _) / s)) && f("overflow"),
                                        (_ += u * s),
                                        !(u < (d = l <= x ? 1 : l >= x + 26 ? 26 : l - x));
                                    l += c
                                )
                                    s > p(a / (h = c - d)) && f("overflow"), (s *= h);
                                (x = y(_ - o, (e = m.length + 1), 0 == o)), p(_ / e) > a - w && f("overflow"), (w += p(_ / e)), (_ %= e), m.splice(_++, 0, w);
                            }
                            return b(m);
                        }
                        function k(t) {
                            var e,
                                n,
                                r,
                                i,
                                o,
                                s,
                                l,
                                u,
                                d,
                                h,
                                m,
                                v,
                                b,
                                x,
                                k,
                                O = [];
                            for (v = (t = _(t)).length, e = 128, n = 0, o = 72, s = 0; s < v; ++s) (m = t[s]) < 128 && O.push(g(m));
                            for (r = i = O.length, i && O.push("-"); r < v; ) {
                                for (l = a, s = 0; s < v; ++s) (m = t[s]) >= e && m < l && (l = m);
                                for (l - e > p((a - n) / (b = r + 1)) && f("overflow"), n += (l - e) * b, e = l, s = 0; s < v; ++s)
                                    if (((m = t[s]) < e && ++n > a && f("overflow"), m == e)) {
                                        for (u = n, d = c; !(u < (h = d <= o ? 1 : d >= o + 26 ? 26 : d - o)); d += c) (k = u - h), (x = c - h), O.push(g(w(h + (k % x), 0))), (u = p(k / x));
                                        O.push(g(w(u, 0))), (o = y(n, b, r == i)), (n = 0), ++r;
                                    }
                                ++n, ++e;
                            }
                            return O.join("");
                        }
                        (s = {
                            version: "1.4.1",
                            ucs2: { decode: _, encode: b },
                            decode: x,
                            encode: k,
                            toASCII: function (t) {
                                return v(t, function (t) {
                                    return u.test(t) ? "xn--" + k(t) : t;
                                });
                            },
                            toUnicode: function (t) {
                                return v(t, function (t) {
                                    return l.test(t) ? x(t.slice(4).toLowerCase()) : t;
                                });
                            },
                        }),
                            void 0 ===
                                (r = function () {
                                    return s;
                                }.call(e, n, e, t)) || (t.exports = r);
                    })();
            },
            118: (t, e, n) => {
                function r(t, e = {}, n = o, r = !0) {
                    if (t && e && /{{.+}}/.test(t)) {
                        const i = Object.keys(e).reduce((t, n) => ((t[n.toLowerCase()] = e[n]), t), {});
                        return t.replace(/{{(!)?(=)? *(.+?)}}/gi, (t, o, s, a) => {
                            let c;
                            if (s)
                                try {
                                    c = (function (t, e = {}) {
                                        const n = Object.assign(
                                                Object.assign(
                                                    {},
                                                    (function (t) {
                                                        let e = (t, e, n) =>
                                                            (function (t, e, n) {
                                                                const r = e ? { style: "currency", currency: e } : { minimumFractionDigits: 2 };
                                                                return new Intl.NumberFormat(n || navigator.language, r).format(t);
                                                            })(t, e, n);
                                                        var n;
                                                        return (
                                                            "string" == typeof t.$CURRENCY_FORMAT &&
                                                                ((n = t.$CURRENCY_FORMAT),
                                                                (e = (t) =>
                                                                    n.replace(/{{ *(\w+) *}}/, (e, n) =>
                                                                        "amount_no_decimals_with_comma_separator" === n
                                                                            ? t.toLocaleString("de", { maximumFractionDigits: 0 })
                                                                            : "amount_with_comma_separator" === n
                                                                            ? t.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                                                            : "amount_no_decimals" === n
                                                                            ? t.toLocaleString("en", { maximumFractionDigits: 0 })
                                                                            : t.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                                                    ))),
                                                            {
                                                                IF: (t, e, n) => (t ? e : n),
                                                                ROUND: (t, e = 0) => {
                                                                    const n = Math.round(Math.pow(10, e));
                                                                    return Math.round(n * t) / n;
                                                                },
                                                                CURRENCY: e,
                                                            }
                                                        );
                                                    })(e)
                                                ),
                                                e
                                            ),
                                            r = Object.keys(n),
                                            i = r.map((t) => n[t]);
                                        return (t = '"use strict"; return ' + t), Function.constructor.apply({}, r.concat([t])).apply({}, i);
                                    })(a, e);
                                } catch (l) {}
                            else {
                                const t = a.match(/^ *(\$?\w+?) *(\|.*)? *$/i);
                                if (t) {
                                    const [e, n] = [t[1].toLowerCase(), t[2]];
                                    (function (t, e) {
                                        return {}.hasOwnProperty.call(t, e);
                                    })(i, e) && (c = i[e]),
                                        null == c && (c = n && n.substr(1).trim());
                                }
                            }
                            if (null == c) {
                                if (!r) return t;
                                c = "";
                            }
                            return n && "!" !== o ? n(`${c}`) : `${c}`;
                        });
                    }
                    return t;
                }
                n.d(e, { kC: () => s, uj: () => r });
                const i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };
                function o(t) {
                    return t.replace(/[&<>"'`]/g, (t) => i[t]);
                }
                function s(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                }
            },
            537: function (t, e, n) {
                var r;
                !(function (i) {
                    function o(t, e) {
                        var n = (65535 & t) + (65535 & e);
                        return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
                    }
                    function s(t, e, n, r, i, s) {
                        return o(((a = o(o(e, t), o(r, s))) << (c = i)) | (a >>> (32 - c)), n);
                        var a, c;
                    }
                    function a(t, e, n, r, i, o, a) {
                        return s((e & n) | (~e & r), t, e, i, o, a);
                    }
                    function c(t, e, n, r, i, o, a) {
                        return s((e & r) | (n & ~r), t, e, i, o, a);
                    }
                    function l(t, e, n, r, i, o, a) {
                        return s(e ^ n ^ r, t, e, i, o, a);
                    }
                    function u(t, e, n, r, i, o, a) {
                        return s(n ^ (e | ~r), t, e, i, o, a);
                    }
                    function d(t, e) {
                        var n, r, i, s, d;
                        (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
                        var h = 1732584193,
                            p = -271733879,
                            g = -1732584194,
                            f = 271733878;
                        for (n = 0; n < t.length; n += 16)
                            (r = h),
                                (i = p),
                                (s = g),
                                (d = f),
                                (h = a(h, p, g, f, t[n], 7, -680876936)),
                                (f = a(f, h, p, g, t[n + 1], 12, -389564586)),
                                (g = a(g, f, h, p, t[n + 2], 17, 606105819)),
                                (p = a(p, g, f, h, t[n + 3], 22, -1044525330)),
                                (h = a(h, p, g, f, t[n + 4], 7, -176418897)),
                                (f = a(f, h, p, g, t[n + 5], 12, 1200080426)),
                                (g = a(g, f, h, p, t[n + 6], 17, -1473231341)),
                                (p = a(p, g, f, h, t[n + 7], 22, -45705983)),
                                (h = a(h, p, g, f, t[n + 8], 7, 1770035416)),
                                (f = a(f, h, p, g, t[n + 9], 12, -1958414417)),
                                (g = a(g, f, h, p, t[n + 10], 17, -42063)),
                                (p = a(p, g, f, h, t[n + 11], 22, -1990404162)),
                                (h = a(h, p, g, f, t[n + 12], 7, 1804603682)),
                                (f = a(f, h, p, g, t[n + 13], 12, -40341101)),
                                (g = a(g, f, h, p, t[n + 14], 17, -1502002290)),
                                (h = c(h, (p = a(p, g, f, h, t[n + 15], 22, 1236535329)), g, f, t[n + 1], 5, -165796510)),
                                (f = c(f, h, p, g, t[n + 6], 9, -1069501632)),
                                (g = c(g, f, h, p, t[n + 11], 14, 643717713)),
                                (p = c(p, g, f, h, t[n], 20, -373897302)),
                                (h = c(h, p, g, f, t[n + 5], 5, -701558691)),
                                (f = c(f, h, p, g, t[n + 10], 9, 38016083)),
                                (g = c(g, f, h, p, t[n + 15], 14, -660478335)),
                                (p = c(p, g, f, h, t[n + 4], 20, -405537848)),
                                (h = c(h, p, g, f, t[n + 9], 5, 568446438)),
                                (f = c(f, h, p, g, t[n + 14], 9, -1019803690)),
                                (g = c(g, f, h, p, t[n + 3], 14, -187363961)),
                                (p = c(p, g, f, h, t[n + 8], 20, 1163531501)),
                                (h = c(h, p, g, f, t[n + 13], 5, -1444681467)),
                                (f = c(f, h, p, g, t[n + 2], 9, -51403784)),
                                (g = c(g, f, h, p, t[n + 7], 14, 1735328473)),
                                (h = l(h, (p = c(p, g, f, h, t[n + 12], 20, -1926607734)), g, f, t[n + 5], 4, -378558)),
                                (f = l(f, h, p, g, t[n + 8], 11, -2022574463)),
                                (g = l(g, f, h, p, t[n + 11], 16, 1839030562)),
                                (p = l(p, g, f, h, t[n + 14], 23, -35309556)),
                                (h = l(h, p, g, f, t[n + 1], 4, -1530992060)),
                                (f = l(f, h, p, g, t[n + 4], 11, 1272893353)),
                                (g = l(g, f, h, p, t[n + 7], 16, -155497632)),
                                (p = l(p, g, f, h, t[n + 10], 23, -1094730640)),
                                (h = l(h, p, g, f, t[n + 13], 4, 681279174)),
                                (f = l(f, h, p, g, t[n], 11, -358537222)),
                                (g = l(g, f, h, p, t[n + 3], 16, -722521979)),
                                (p = l(p, g, f, h, t[n + 6], 23, 76029189)),
                                (h = l(h, p, g, f, t[n + 9], 4, -640364487)),
                                (f = l(f, h, p, g, t[n + 12], 11, -421815835)),
                                (g = l(g, f, h, p, t[n + 15], 16, 530742520)),
                                (h = u(h, (p = l(p, g, f, h, t[n + 2], 23, -995338651)), g, f, t[n], 6, -198630844)),
                                (f = u(f, h, p, g, t[n + 7], 10, 1126891415)),
                                (g = u(g, f, h, p, t[n + 14], 15, -1416354905)),
                                (p = u(p, g, f, h, t[n + 5], 21, -57434055)),
                                (h = u(h, p, g, f, t[n + 12], 6, 1700485571)),
                                (f = u(f, h, p, g, t[n + 3], 10, -1894986606)),
                                (g = u(g, f, h, p, t[n + 10], 15, -1051523)),
                                (p = u(p, g, f, h, t[n + 1], 21, -2054922799)),
                                (h = u(h, p, g, f, t[n + 8], 6, 1873313359)),
                                (f = u(f, h, p, g, t[n + 15], 10, -30611744)),
                                (g = u(g, f, h, p, t[n + 6], 15, -1560198380)),
                                (p = u(p, g, f, h, t[n + 13], 21, 1309151649)),
                                (h = u(h, p, g, f, t[n + 4], 6, -145523070)),
                                (f = u(f, h, p, g, t[n + 11], 10, -1120210379)),
                                (g = u(g, f, h, p, t[n + 2], 15, 718787259)),
                                (p = u(p, g, f, h, t[n + 9], 21, -343485551)),
                                (h = o(h, r)),
                                (p = o(p, i)),
                                (g = o(g, s)),
                                (f = o(f, d));
                        return [h, p, g, f];
                    }
                    function h(t) {
                        var e,
                            n = "",
                            r = 32 * t.length;
                        for (e = 0; e < r; e += 8) n += String.fromCharCode((t[e >> 5] >>> e % 32) & 255);
                        return n;
                    }
                    function p(t) {
                        var e,
                            n = [];
                        for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
                        var r = 8 * t.length;
                        for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                        return n;
                    }
                    function g(t) {
                        var e,
                            n,
                            r = "0123456789abcdef",
                            i = "";
                        for (n = 0; n < t.length; n += 1) (e = t.charCodeAt(n)), (i += r.charAt((e >>> 4) & 15) + r.charAt(15 & e));
                        return i;
                    }
                    function f(t) {
                        return unescape(encodeURIComponent(t));
                    }
                    function m(t) {
                        return (function (t) {
                            return h(d(p(t), 8 * t.length));
                        })(f(t));
                    }
                    function v(t, e) {
                        return (function (t, e) {
                            var n,
                                r,
                                i = p(t),
                                o = [],
                                s = [];
                            for (o[15] = s[15] = void 0, i.length > 16 && (i = d(i, 8 * t.length)), n = 0; n < 16; n += 1) (o[n] = 909522486 ^ i[n]), (s[n] = 1549556828 ^ i[n]);
                            return (r = d(o.concat(p(e)), 512 + 8 * e.length)), h(d(s.concat(r), 640));
                        })(f(t), f(e));
                    }
                    function _(t, e, n) {
                        return e ? (n ? v(e, t) : g(v(e, t))) : n ? m(t) : g(m(t));
                    }
                    void 0 ===
                        (r = function () {
                            return _;
                        }.call(e, n, e, t)) || (t.exports = r);
                })();
            },
            681: (t, e) => {
                var n;
                !(function () {
                    var r = {}.hasOwnProperty;
                    function i() {
                        for (var t = [], e = 0; e < arguments.length; e++) {
                            var n = arguments[e];
                            if (n) {
                                var o = typeof n;
                                if ("string" === o || "number" === o) t.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var s = i.apply(null, n);
                                    s && t.push(s);
                                } else if ("object" === o) for (var a in n) r.call(n, a) && n[a] && t.push(a);
                            }
                        }
                        return t.join(" ");
                    }
                    t.exports
                        ? ((i.default = i), (t.exports = i))
                        : void 0 ===
                              (n = function () {
                                  return i;
                              }.apply(e, [])) || (t.exports = n);
                })();
            },
            939: (t, e, n) => {
                function r(t, e) {
                    var n = {};
                    for (var r in t) ({}.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]));
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && {}.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                    }
                    return n;
                }
                n.d(e, { _T: () => r });
            },
            729: (t, e, n) => {
                n.r(e), n.d(e, { WidgetRuntime: () => Yt });
                var r,
                    i = n(939);
                class o {
                    get(t) {}
                    set(t, e) {}
                    remove(t) {}
                    clear() {}
                }
                class s {
                    constructor() {
                        this.store = {};
                    }
                    get(t) {
                        return this.store[t];
                    }
                    set(t, e) {
                        this.store[t] = e;
                    }
                    remove(t) {
                        delete this.store[t];
                    }
                    clear() {
                        this.store = {};
                    }
                }
                class a {
                    constructor(t) {
                        this.name = t;
                    }
                    get storage() {
                        throw new Error("not implemented");
                    }
                    loadItem() {
                        const t = this.storage.getItem(this.name);
                        if (null === t) return {};
                        try {
                            return JSON.parse(t);
                        } catch (e) {}
                    }
                    get storageName() {
                        return this.name;
                    }
                    set(t, e) {
                        const n = this.loadItem();
                        (n[t] = e), this.storage.setItem(this.name, JSON.stringify(n));
                    }
                    get(t) {
                        return this.loadItem()[t];
                    }
                    remove(t) {
                        const e = this.loadItem();
                        delete e[t], this.storage.setItem(this.name, JSON.stringify(e));
                    }
                    clear() {
                        this.storage.removeItem(this.name);
                    }
                }
                class c extends a {
                    static isSupported() {
                        return !!window.localStorage;
                    }
                    get storage() {
                        const t = window.localStorage;
                        if (!t) throw new Error("LocalStorage not supported");
                        return t;
                    }
                }
                class l extends a {
                    static isSupported() {
                        return !!window.localStorage;
                    }
                    get storage() {
                        const t = window.sessionStorage;
                        if (!t) throw new Error("SessionStorage not supported");
                        return t;
                    }
                }
                class u {
                    constructor(t = "local", e = "gsc") {
                        (this._page = new s()), (this._static = new s());
                        let n = () => new s();
                        if ("local" === t) c.isSupported() && (n = (t) => new c(t));
                        else if ("session" === t) l.isSupported() && (n = (t) => new l(t));
                        else if ("memory" === t) n = () => new s();
                        else {
                            if ("disable" !== t) throw new Error(`Unknown storage backend ${t}`);
                            n = () => new o();
                        }
                        (this._general = n(e)), (this._widgets = n(e + "w")), (this._goals = n(e + "g")), (this._session = n(e + "s"));
                    }
                    save(t, e) {
                        this._general.set(t, e);
                    }
                    load(t) {
                        return this._general.get(t);
                    }
                    saveFor(t, e, n) {
                        const r = t.toString();
                        let i = this._widgets.get(r);
                        ("object" == typeof i && i) || (i = {}), (i[e] = n), (i.$last = new Date().getTime()), this._widgets.set(r, i);
                    }
                    loadAllFor(t) {
                        const e = t.toString();
                        return this._widgets.get(e);
                    }
                    loadFor(t, e) {
                        const n = this.loadAllFor(t);
                        if (n) return n[e];
                    }
                    cleanupWidgets(t) {}
                    newSession(t, e) {
                        this._session.clear(), this._session.set("id", t), this._session.set("$start", e.getTime());
                    }
                    saveSession(t, e) {
                        this._session.set(t, e);
                    }
                    loadSession(t) {
                        return this._session.get(t);
                    }
                    cleanupSession() {
                        this._session.clear();
                    }
                    get general() {
                        return this._general;
                    }
                    get widgets() {
                        return this._widgets;
                    }
                    get goals() {
                        return this._goals;
                    }
                    get session() {
                        return this._session;
                    }
                    get page() {
                        return this._page;
                    }
                    get static() {
                        return this._static;
                    }
                }
                !(function (t) {
                    (t.User = "user"),
                        (t.Session = "session"),
                        (t.PageView = "pageView"),
                        (t.Show = "show"),
                        (t.Close = "close"),
                        (t.Hide = "hide"),
                        (t.SubmitWidget = "submit"),
                        (t.OpenUrl = "openUrl"),
                        (t.ShowWidget = "showWidget"),
                        (t.CopyToClipboard = "copyToClipboard"),
                        (t.AddToCart = "addToCart"),
                        (t.ApplyCoupon = "applyCoupon"),
                        (t.Goal = "goal");
                })(r || (r = {}));
                const d = [r.SubmitWidget, r.OpenUrl, r.ShowWidget, r.CopyToClipboard, r.ApplyCoupon, r.AddToCart];
                class h {
                    constructor(t, e, n, r) {
                        (this.sysname = t), (this.value = e), (this.hitId = n), (this.data = r);
                    }
                    asEvent() {
                        const t = Object.assign(Object.assign({}, this.data || {}), { $sysname: this.sysname, $value: this.value, $hitId: this.hitId });
                        return new p(r.Goal, null, t);
                    }
                }
                class p {
                    constructor(t, e, n) {
                        (this.type = t), (this.widget = e), (this.data = n);
                    }
                    prettyData() {
                        const t = this.getData();
                        return this.type === r.OpenUrl ? t.url : this.type === r.ShowWidget ? t.widgetId : t;
                    }
                    get key() {
                        const t = JSON.stringify(this.data || {}),
                            e = this.widget ? this.widget.id : null;
                        return `${this.type}/${t}/${e}`;
                    }
                    getData() {
                        return JSON.parse(JSON.stringify(this.data || {}));
                    }
                    isAction() {
                        return d.includes(this.type);
                    }
                }
                function g(t, e) {
                    let n;
                    return function () {
                        const r = this,
                            i = arguments,
                            o = function () {
                                (n = null), t.apply(r, i);
                            };
                        clearTimeout(n), (n = setTimeout(o, e));
                    };
                }
                function f(t) {
                    for (const e of document.cookie.split(";")) {
                        const [n, r] = e.split("=").map((t) => t.trim());
                        if (n == t) return decodeURIComponent(r);
                    }
                }
                class m {
                    constructor(t, e = []) {
                        (this.runtime = t), (this.subscribers = e), (this.events = []), (this.processDeb = g(this.process.bind(this), 250));
                    }
                    send(t) {
                        return this.add(t, !0);
                    }
                    add(t, e = !1) {
                        return this.events.some((e) => e.key === t.key) || this.events.push(t), e ? this.process() : this.processDeb(), !0;
                    }
                    process() {
                        const t = this.events.slice();
                        (this.events.length = 0),
                            t.length > 0 &&
                                this.collectContext().then((e) => {
                                    for (const r of this.subscribers)
                                        try {
                                            r(t, e);
                                        } catch (n) {}
                                });
                    }
                    async collectContext() {
                        const t = this.runtime.session.currentVisit,
                            e = this.runtime.platform,
                            n = new Date(),
                            r = {
                                userId: t.userId,
                                sessionId: t.sessionId,
                                siteId: this.runtime.settings.siteId,
                                date: n.getTime(),
                                visit: {
                                    utm: { medium: t.utm.utm_medium, source: t.utm.utm_source, term: t.utm.utm_term, content: t.utm.utm_content, campaign: t.utm.utm_campaign, method: t.utm.method },
                                    source: t.source,
                                    referrer: t.referrer,
                                    pageNumber: t.pageNumber,
                                    sessionNumber: t.sessionNumber,
                                    location: t.location,
                                    language: t.language,
                                    displayWidth: t.displayWidth,
                                    displayHeight: t.displayHeight,
                                    external: v(),
                                },
                                context: this.runtime.args.getParams(!0),
                                placement: this.runtime.settings.placement,
                            };
                        if (e) {
                            const t = (await e.getTrackingContext()) || {};
                            r.platform = Object.assign({ type: e.name }, t);
                        }
                        return r;
                    }
                }
                function v() {
                    const t = {},
                        e = f("hubspotutk");
                    return e && (t["hubspot.utk"] = e), t;
                }
                function _(t = "") {
                    let e;
                    const n = /\+/g,
                        r = /([^&=]+)=?([^&]*)/g,
                        i = (t) => decodeURIComponent(t.replace(n, " "));
                    t = t.replace(/^\?/g, "");
                    const o = {};
                    for (; (e = r.exec(t)); ) e[1] && (o[i(e[1])] = e[2] ? i(e[2]) : "");
                    return o;
                }
                var b = n(615);
                const w = 864e5;
                function y(t) {
                    return new Date(t.getTime() + w);
                }
                function x(t, e) {
                    const n = new Date(t.getTime());
                    let r = 0;
                    const i = n.getTime(),
                        o = n.getTimezoneOffset();
                    let s = e.untils[r];
                    for (; s && s - 60 * (e.offsets[r] - o) * 1e3 < i; ) s = e.untils[++r];
                    return n.setMinutes(n.getMinutes() + e.offsets[r] - o), n;
                }
                function k(t, e) {
                    const n = /^(\d{2}):(\d{2})$/i.exec(t);
                    if (n) {
                        const t = new Date(e);
                        return t.setHours(parseInt(n[1])), t.setMinutes(parseInt(n[2])), t.setSeconds(0), t.setMilliseconds(0), t;
                    }
                    throw new Error("malformed time " + t);
                }
                function O(t) {
                    const e = JSON.stringify,
                        n = {};
                    return function () {
                        const r = e(arguments);
                        return r in n ? n[r] : (n[r] = t.apply(this, arguments));
                    };
                }
                function C(t) {
                    return "string" == typeof t;
                }
                function S(t) {
                    return "number" == typeof t && !isNaN(t);
                }
                function T(t) {
                    return S(t) || ("string" == typeof t && null != t.match(/^-?\d*(\.\d*)?$/) && !isNaN(parseFloat(t)));
                }
                function E(t) {
                    return t && Array.isArray(t);
                }
                const j = O(function (t, e) {
                    const n = /^\/(.+)\/([im]+)?$/.exec(t);
                    if (n) return new RegExp(n[1], n[2] || e);
                    const r = t
                        .replace(/[\-\[\]\/{}()?.\\^$|]/g, "\\$&")
                        .replace(/\*/g, ".*?")
                        .replace(/\+/g, ".+?");
                    return new RegExp(`^${r}$`, e);
                });
                function P(t) {
                    if (C(t)) t = t.toLocaleLowerCase();
                    else if (E(t)) t = t.map(P);
                    else if ("object" == typeof (e = t) && null !== e && !E(e)) {
                        const e = {};
                        t = Object.keys(t).reduce(function (e, n) {
                            return (e[n] = P(t[n])), e;
                        }, e);
                    }
                    var e;
                    return t;
                }
                function $(t) {
                    return !(!t || !t.exec);
                }
                const I = "(0?[\\d\\*]+|0x[a-f0-9]+)",
                    A = new RegExp(`^${I}\\.${I}\\.${I}\\.${I}$`, "i"),
                    N = "(?:[0-9a-f\\*]+::?)+",
                    L = { native: new RegExp(`^(::)?(${N})?([0-9a-f\\*]+)?(::)?$`, "i"), transitional: new RegExp(`^((?:${N})|(?:::)(?:${N})?)${I}\\.${I}\\.${I}\\.${I}$`, "i") };
                class R {
                    constructor(t) {
                        if (((this.octets = []), (this.cidr = NaN), (this.version = NaN), (this.maxcidr = NaN), (this.masked = !1), (this.octets = []), (this.cidr = NaN), (this.version = NaN), (this.maxcidr = NaN), (this.masked = !1), !t))
                            throw new Error("no addr");
                        if (t.match(/\//)) {
                            const e = t.split("/");
                            (t = e[0]), (this.cidr = parseInt(e[1]));
                        }
                        if (t.match(/:/)) {
                            if (
                                ((this.version = 6),
                                (this.maxcidr = 128),
                                (this.octets = (function (t) {
                                    if (t.match(L.native))
                                        return (function (t, e) {
                                            if (t.indexOf("::") !== t.lastIndexOf("::")) return null;
                                            let n = 0,
                                                r = -1;
                                            for (; (r = t.indexOf(":", r + 1)) >= 0; ) n++;
                                            ":" === t[0] && n--, ":" === t[t.length - 1] && n--;
                                            let i = 8 - n,
                                                o = ":";
                                            for (; i--; ) o += "0:";
                                            return (
                                                ":" === (t = t.replace("::", o))[0] && (t = t.slice(1)),
                                                ":" === t[t.length - 1] && (t = t.slice(0, -1)),
                                                t.split(":").map((t) => (/\*/.test(t) ? new RegExp(`^${t.replace(/\*/g, ".*")}$`, "i") : parseInt(t, 16)))
                                            );
                                        })(t);
                                })(t)),
                                !this.octets)
                            )
                                throw new Error("parse error");
                            if (this.cidr > this.maxcidr) throw new Error("max cidr");
                            for (const t of this.octets) if (!((0 <= t && t <= 65535) || $(t))) throw new Error("ipv6 part should fit to two octets");
                        } else if (t.length >= 7) {
                            if (
                                ((this.version = 4),
                                (this.maxcidr = 32),
                                (this.octets = (function (t) {
                                    const e = t.match(A);
                                    if (e)
                                        return e.slice(1, 6).map((t) => {
                                            return /\*/.test((e = t)) ? new RegExp(`^${e.replace(/\*/g, ".*")}$`, "i") : "0" === e[0] && "x" !== e[1] ? parseInt(e, 8) : parseInt(e);
                                            var e;
                                        });
                                })(t)),
                                !this.octets)
                            )
                                throw new Error("parse error");
                            for (const t of this.octets) if (!((0 <= t && t <= 255) || $(t))) throw new Error("ipv4 octet is a byte");
                            if (this.cidr > this.maxcidr) throw new Error("max cidr");
                        }
                        if (!this.octets || isNaN(this.version)) throw new Error("parse error");
                        for (const e of this.octets)
                            if ($(e)) {
                                this.masked = !0;
                                break;
                            }
                        if (!isNaN(this.cidr) && this.masked) throw new Error("cidr and masked");
                    }
                    match(t) {
                        if (t.version !== this.version || t.masked || !isNaN(t.cidr) || this.octets.length !== t.octets.length) return !1;
                        let e = !0;
                        if (this.masked || !this.cidr)
                            for (let n = 0; n < this.octets.length; n++) {
                                const r = this.octets[n],
                                    i = t.octets[n];
                                e && (e = $(r) && S(i) ? r.test(6 === t.version ? i.toString(16) : i.toString()) : r === t.octets[n]);
                            }
                        else
                            e = (function (t, e, n, r) {
                                let i = 0;
                                for (; r > 0; ) {
                                    let o = n - r;
                                    if ((o < 0 && (o = 0), t[i] >> o != e[i] >> o)) return !1;
                                    (r -= n), (i += 1);
                                }
                                return !0;
                            })(this.octets, t.octets, 6 === this.version ? 16 : 8, this.cidr);
                        return e;
                    }
                }
                const D = /^((https?:)?\/\/)?([^\/?#]+)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i,
                    W = Object.keys;
                function M(t) {
                    return t.replace(/^#!?\/?/, "/");
                }
                function U(t, e) {
                    const n = (function (t) {
                        const e = t.match(D),
                            [n, , r = "http", i = "*", o = "", s = "", a = ""] = e,
                            c = { href: n, hostname: i, search: s, hash: a, protocol: `${r}//`, pathname: ((l = o), `/${l.replace(/^\/+/, "").replace(/\/$/, "")}`) };
                        var l;
                        return (c.href = c.protocol + c.hostname + c.pathname + c.search + c.hash), c;
                    })(t);
                    return e.reduce((t, e) => {
                        switch (e) {
                            case "hostname":
                                t.hostname = (0, b.toUnicode)(n.hostname);
                                break;
                            case "pathname":
                                t.pathname = decodeURIComponent(n.pathname);
                                break;
                            default:
                                t[e] = n[e];
                        }
                        return t;
                    }, {});
                }
                function V(t) {
                    return decodeURIComponent(t.replace(/\+/g, " "));
                }
                function F(t) {
                    const e = {},
                        n = /([^&=]+)=?([^&]*)/g;
                    let r;
                    for (t = t.replace(/^\?/g, ""); (r = n.exec(t)); ) e[V(r[1])] = V(r[2]);
                    return e;
                }
                const H = O(function t(e, n, r = ["hostname", "pathname", "search", "hash"]) {
                    const i = U(e, r),
                        o = U(n, r),
                        s = W(o);
                    return (
                        s.filter((e) => {
                            const n = o[e],
                                r = i[e];
                            if (n === r) return !0;
                            if ("search" === e) {
                                const t = "",
                                    e = F(r),
                                    i = W(e),
                                    o = F(n);
                                return W(o).every((n) => {
                                    const r = j(o[n], t),
                                        s = j(n, t);
                                    let a = !1;
                                    for (const t of i) if (s.test(t) && ((a = !0), !r.test(e[t]))) return !1;
                                    return a;
                                });
                            }
                            if ("hash" === e) return !n || t(M(r), M(n), ["hostname", "pathname", "search"]);
                            if ("pathname" === e) {
                                const t = j(n, "i");
                                return t.test(r) || t.test(r + "/");
                            }
                            return j(n, "i").test(r);
                        }).length === s.length
                    );
                });
                function z(t, e, n, r) {
                    const i = t(e, n, r);
                    return Array.isArray(i) ? [!i[0], i[1]] : !i;
                }
                function B(t, e, n) {
                    return T(e) && T(t) ? n(parseFloat(e), parseFloat(t)) : null != e && null != t && n(e.toString(), t.toString());
                }
                const q = {
                    "*"(t, e) {
                        return !this[void 0](t, e);
                    },
                    undefined: (t, e) => null == e,
                    "=": (t, e) => e == t,
                    "!="(t, e) {
                        return !this["="](t, e);
                    },
                    in: (t, e) => C(t) && C(e) && -1 !== e.indexOf(t),
                    "!in"(t, e) {
                        return !this.in(t, e);
                    },
                    match: (t, e) => C(t) && C(e) && j(t).test(e),
                    "!match"(t, e) {
                        return !this.match(t, e);
                    },
                    $: (t, e) => C(t) && C(e) && e.substring(e.length - t.length) === t,
                    "^": (t, e) => C(t) && C(e) && 0 === e.indexOf(t),
                    "!^"(t, e) {
                        return z(this["^"], t, e);
                    },
                    "<": (t, e) => B(t, e, (t, e) => t < e),
                    "<=": (t, e) => B(t, e, (t, e) => t <= e),
                    ">": (t, e) => B(t, e, (t, e) => t > e),
                    ">|undefined"(t, e) {
                        return this[void 0](t, e) || this[">"](t, e);
                    },
                    ">=": (t, e) => B(t, e, (t, e) => t >= e),
                    matchUrl: (t, e) => C(t) && C(e) && H(e, t),
                    "!matchUrl"(t, e) {
                        return z(this.matchUrl, t, e);
                    },
                    time: (t, e, n) =>
                        S(e) &&
                        C(t) &&
                        (function (t, e, n) {
                            try {
                                let r = new Date(t);
                                const { from: i, to: o, timezone: s } = (function (t, e) {
                                        const [n, r, i = ""] = t.split("|");
                                        return { from: n ? k(n, e) : void 0, to: r ? k(r, e) : void 0, timezone: i };
                                    })(e, t),
                                    a = (n && n[s || ""]) || { offsets: [0], untils: [0] };
                                if (!i && !o) return [!1, "empty time interval"];
                                const c = i ? x(i, a) : void 0;
                                let l = o ? x(o, a) : void 0;
                                return l && c && (l < c && (l = y(l)), r < c && (r = y(r))), [(!c || r >= c) && (!l || r <= l)];
                            } catch (r) {
                                return [!1, r.message];
                            }
                        })(e, t, n && n.timezones),
                    "!time"(t, e, n) {
                        return z(this.time, t, e, n);
                    },
                    matchIp: (t, e) =>
                        C(t) &&
                        C(e) &&
                        (function (t, e) {
                            try {
                                const n = new R(e),
                                    r = new R(t);
                                return [n.match(r)];
                            } catch (n) {
                                return [!1, n.message];
                            }
                        })(e, t),
                    "!matchIp"(t, e) {
                        return z(this.matchIp, t, e);
                    },
                    date: (t, e) =>
                        S(e) &&
                        C(t) &&
                        (function (t, e) {
                            try {
                                const r = new Date(t),
                                    { from: i, to: o } = (function (t) {
                                        const [e, n] = t.split("|");
                                        return { from: e ? new Date(e + "T00:00:00") : void 0, to: n ? new Date(n + "T00:00:00") : void 0 };
                                    })(e);
                                if (!i && !o) throw new Error("no dates");
                                const s = new Date(i || r),
                                    a = ((n = new Date(o || r)), new Date(n.getTime() + w - 1));
                                return [s <= r && r <= a];
                            } catch (r) {
                                return [!1, r.message];
                            }
                            var n;
                        })(e, t),
                    "!date"(t, e) {
                        return z(this.date, t, e);
                    },
                    ina(t, e) {
                        return (r = e), !(!E((n = t)) && !E(r)) && (E(n) || (n = [n]), E(r) || (r = [r]), n.some((t) => -1 !== r.indexOf(t)));
                        var n, r;
                    },
                    "!ina"(t, e) {
                        return z(this.ina, t, e);
                    },
                };
                function G(t, { type: e, name: n }) {
                    let r = t[e];
                    return "function" == typeof r ? (r = r(n)) : null != r && "object" == typeof r && n && (r = r[n]), r;
                }
                const J = ["date", "!date", "time", "!time", "matchUrl", "!matchUrl", "undefined", "*"];
                function Y(t, { operation: e, value: n }, r) {
                    let i = (t) => t;
                    return J.includes(e) || (i = P), q[e](i(n), i(t), r);
                }
                function K(t) {
                    return t.hasOwnProperty("items");
                }
                const X = { and: (t, e) => t && e, or: (t, e) => t || e };
                function Z({ id: t = "", items: e, operation: n }, r, i, o) {
                    const s = o + ">" + t,
                        a = { id: t, operation: n, items: [] };
                    let c =
                        0 === e.length ||
                        (function (t) {
                            return "and" === t;
                        })(n);
                    const l = X[n];
                    for (const u of e)
                        if (K(u)) {
                            const [t, e] = Z(u, r, i, s);
                            (c = l(c, t)), a.items.push(e);
                        } else {
                            const t = G(r, u);
                            let e;
                            if (u.hasOwnProperty("result") && t === u.envValue) (e = u.result), a.items.push(u);
                            else {
                                let n;
                                (e = Y(t, u, i)), Array.isArray(e) && ((n = e[1]), (e = e[0])), a.items.push(Object.assign(Object.assign({}, u), { envValue: t, result: e, path: s, message: n }));
                            }
                            c = l(c, e);
                        }
                    return [c, a];
                }
                function Q({ group: t, data: e = { timezones: {} } }) {
                    return function (n, r) {
                        return Z(r || t, n, e, "");
                    };
                }
                var tt, et;
                !(function (t) {
                    (t.Random = "ab"),
                        (t.Location = "location"),
                        (t.Geo = "geo"),
                        (t.OS = "os"),
                        (t.Platform = "platform"),
                        (t.Browser = "browser"),
                        (t.Language = "language"),
                        (t.DisplayWidth = "displayWidth"),
                        (t.DisplayHeight = "displayHeight"),
                        (t.Source = "source"),
                        (t.Referrer = "referrer"),
                        (t.PageNumber = "pageNumber"),
                        (t.SessionNumber = "sessionNumber"),
                        (t.IsReturning = "isReturning"),
                        (t.Utm = "utm"),
                        (t.Api = "api"),
                        (t.Cookie = "cookie"),
                        (t.CssSelector = "cssSelector"),
                        (t.Ip = "ip"),
                        (t.Auto = "atonce"),
                        (t.ExitAttempted = "exitAttempted"),
                        (t.ScrollPercent = "scrollPercent"),
                        (t.TimeOnPage = "timeOnPage"),
                        (t.TimeOnSite = "timeOnSite"),
                        (t.TimeIdle = "timeIdle"),
                        (t.TimeDisplay = "timeDisplay"),
                        (t.TimeSinceAction = "timeSinceAction"),
                        (t.TimeSinceLastAction = "timeSinceLastAction"),
                        (t.ActionCount = "actionCount"),
                        (t.TimeSinceLastClose = "timeSinceLastClose"),
                        (t.CloseCount = "closeCount"),
                        (t.TimeSinceLastHide = "timeSinceLastHide"),
                        (t.HideCount = "hideCount"),
                        (t.TimeSinceLastShow = "timeSinceLastShow"),
                        (t.ShowCount = "showCount"),
                        (t.Date = "date"),
                        (t.Time = "time"),
                        (t.Weekday = "weekday"),
                        (t.CartItemCount = "cartItemCount"),
                        (t.CartProduct = "cartProduct"),
                        (t.CartProductType = "cartProductType"),
                        (t.CartVariant = "cartVariant"),
                        (t.CartDiscount = "cartDiscount"),
                        (t.CartTotalPrice = "cartTotalPrice"),
                        (t.CustomerId = "customerId"),
                        (t.CustomerOrderCount = "customerOrderCount"),
                        (t.CustomerTag = "customerTag"),
                        (t.CustomerTotalSpent = "customerTotalSpent"),
                        (t.CustomerAcceptsMarketing = "customerAcceptsMarketing"),
                        (t.ProductId = "productId"),
                        (t.ProductTag = "productTag"),
                        (t.ProductType = "productType"),
                        (t.ProductVendor = "productVendor"),
                        (t.VariantId = "variantId"),
                        (t.VariantPrice = "variantPrice"),
                        (t.VariantAvailable = "variantAvailable"),
                        (t.VariantOptions = "variantOptions"),
                        (t.AddToCart = "addToCart"),
                        (t.RemoveFromCart = "removeFromCart");
                })(tt || (tt = {})),
                    (function (t) {
                        (t.Location = "TargetingGroupLocation"),
                            (t.General = "TargetingGroupGeneral"),
                            (t.Start = "TargetingGroupStart"),
                            (t.Hide = "TargetingGroupHide"),
                            (t.Stop = "TargetingGroupStop"),
                            (t.Schedule = "TargetingGroupSchedule");
                    })(et || (et = {}));
                var nt = n(141);
                class rt {
                    constructor() {
                        this.handlers = {};
                    }
                    on(t, e) {
                        return this.handlers[t] ? this.handlers[t].push(e) : (this.handlers[t] = [e]), this;
                    }
                    off(t, e) {
                        if (this.handlers[t])
                            if (e) for (let n = 0; n < this.handlers[t].length; n++) this.handlers[t][n] === e && this.handlers[t].splice(n, 1);
                            else delete this.handlers[t];
                        return this;
                    }
                    one(t, e) {
                        const n = (...r) => (e.apply(this, r), this.off(t, n));
                        return this.on(t, n);
                    }
                    trigger(t, ...e) {
                        const n = { result: !0, stop: !1 };
                        if (this.handlers[t]) for (const r of this.handlers[t]) n.stop || ((n.out = r.apply(this, [n].concat(e))), (n.result = n.result && (void 0 === n.out || !!n.out)));
                        return n;
                    }
                    proxy(t, e, n = t) {
                        e.on(t, (t, ...e) => this.trigger(n, ...e));
                    }
                }
                function it(t) {
                    const e = document.querySelector(t);
                    if (e) return (e.innerText || "").trim();
                }
                var ot = n(805);
                const st = { sensitivity: 20, startCapturingAfter: 1e3 },
                    at = window.XMLHttpRequest.prototype.open;
                function ct(t, e, ...n) {
                    if (dt) {
                        const n = this.onreadystatechange;
                        this.onreadystatechange = (...r) => {
                            if (this.readyState === XMLHttpRequest.DONE && dt)
                                try {
                                    const n = Promise.resolve({ body: this.responseText, status: this.status });
                                    dt.trigger("request", { method: t, url: e, response: n });
                                } catch (i) {}
                            n && n.apply(this, r);
                        };
                    }
                    return at.apply(this, [t, e, ...n]);
                }
                const lt = window.fetch;
                function ut(...t) {
                    const e = lt.apply(this, t);
                    if (e && "function" == typeof e.then) {
                        const n = t;
                        e.then((t) => {
                            if (dt)
                                try {
                                    let e;
                                    const r = t
                                        .clone()
                                        .text()
                                        .then((e) => ({ status: t.status, body: e }));
                                    if (1 === n.length) {
                                        const t = n[0];
                                        e = "string" == typeof t ? { method: "GET", url: t, response: r } : { method: t.method, url: t.url, response: r };
                                    } else 2 === n.length && (e = { method: n[1].method, url: n[0], response: r });
                                    e && dt.trigger("request", e);
                                } catch (e) {}
                        }).catch(() => {});
                    }
                    return e;
                }
                let dt,
                    ht = !1;
                const pt = [tt.CssSelector, tt.Cookie, tt.TimeDisplay, tt.TimeSinceAction],
                    gt = [tt.ScrollPercent, tt.TimeOnPage, tt.TimeOnSite, tt.TimeIdle, ...pt],
                    ft = [tt.ExitAttempted, ...gt],
                    mt = { timerEnabled: !1, timerResolution: 500, updateByTimer: !1, runBounce: !1, runActivity: !1, runScroll: !1 },
                    vt = { exitAttempted: !1, lastActivity: new Date(), scrollPercent: 0 };
                class _t extends rt {
                    constructor(t, e) {
                        super(),
                            (this.options = Object.assign({}, mt)),
                            (this.enabledKeys = {}),
                            (this.watches = vt),
                            (this.ajaxWatchers = []),
                            (this.prevValue = null),
                            this.configure(e),
                            this.reset(t),
                            this.options.runBounce &&
                                (function (t, e = document.documentElement, n = st) {
                                    const r = g(t, 100),
                                        i = (t) => {
                                            t.clientY < n.sensitivity && r();
                                        },
                                        o = (e) => {
                                            (e.metaKey || e.ctrlKey) && 76 === e.keyCode && t();
                                        },
                                        s = !(0, ot.Z)().events.passiveSupported || { passive: !0, capture: !0 };
                                    setTimeout(() => {
                                        e.addEventListener("mouseout", i, s), e.addEventListener("keydown", o, s);
                                    }, n.startCapturingAfter);
                                })(() => {
                                    (this.watches.exitAttempted = !0), this.update();
                                }),
                            this.options.runScroll &&
                                (function (t) {
                                    const e = document.documentElement,
                                        n = () => {
                                            const n = Math.max(document.body.scrollHeight, document.body.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight),
                                                r = (((window.pageYOffset || e.scrollTop) + (window.innerHeight || e.clientHeight)) / n) * 100;
                                            t(Math.round(r));
                                        };
                                    window.addEventListener("scroll", n, !(0, ot.Z)().events.passiveSupported || { passive: !0, capture: !1 }), window.addEventListener("onload", () => n());
                                })((t) => {
                                    this.watches.scrollPercent = t;
                                }),
                            this.options.runActivity &&
                                (function (t) {
                                    const e = () => t(),
                                        n = () => t(),
                                        r = () => t(),
                                        i = () => t(),
                                        o = !(0, ot.Z)().events.passiveSupported || { passive: !0, capture: !0 };
                                    setTimeout(() => {
                                        window.addEventListener("click", e, o),
                                            window.addEventListener("mousemove", e, o),
                                            window.addEventListener("mouseenter", e, o),
                                            window.addEventListener("mousewheel", e, o),
                                            window.addEventListener("keydown", n, o),
                                            window.addEventListener("scroll", r, o),
                                            window.addEventListener("touchmove", i, o),
                                            window.addEventListener("touchstart", i, o);
                                    }, 100);
                                })((t) => {
                                    this.watches.lastActivity = new Date();
                                }),
                            this.options.timerEnabled && setInterval(() => this.update(), this.options.timerResolution);
                    }
                    configure(t) {
                        t.forEach((t) => {
                            -1 !== ft.indexOf(t) &&
                                ((this.enabledKeys[t] = !0),
                                -1 !== gt.indexOf(t) && ((this.options.timerEnabled = !0), -1 !== pt.indexOf(t) && (this.options.updateByTimer = !0)),
                                t === tt.TimeIdle ? (this.options.runActivity = !0) : t === tt.ScrollPercent ? (this.options.runScroll = !0) : t === tt.ExitAttempted && (this.options.runBounce = !0));
                        });
                    }
                    update(t = !1) {
                        const e = this.currentValue;
                        (t || this.options.updateByTimer || !this.prevValue || Object.keys(this.enabledKeys).some((t) => this.prevValue[t] !== e[t])) && ((this.prevValue = e), this.trigger("change", e));
                    }
                    reset(t) {
                        (this.prevValue = {}), (this.visit = t), (this.watches = Object.assign(Object.assign({}, vt), { scrollPercent: this.watches.scrollPercent }));
                    }
                    readValue() {
                        const t = this.currentValue;
                        return this.watches.exitAttempted && (this.prevValue[tt.ExitAttempted] = this.watches.exitAttempted = !1), t;
                    }
                    get currentValue() {
                        const t = Date.now(),
                            e = {};
                        return (
                            Object.keys(this.enabledKeys).forEach((n) => {
                                n === tt.ExitAttempted
                                    ? (e[n] = this.watches.exitAttempted)
                                    : n === tt.ScrollPercent
                                    ? (e[n] = this.watches.scrollPercent)
                                    : n === tt.TimeIdle
                                    ? (e[n] = t - this.watches.lastActivity.getTime())
                                    : n === tt.TimeOnPage
                                    ? (e[n] = t - this.visit.time)
                                    : n === tt.TimeOnSite && (e[n] = t - this.visit.sessionStartTime);
                            }),
                            e
                        );
                    }
                    addAjaxWatcher(t, e, n = !1) {
                        const r = `${t.method}: ${t.url}`;
                        -1 === this.ajaxWatchers.indexOf(r) &&
                            ((function (t, e) {
                                ht || ((window.XMLHttpRequest.prototype.open = ct), (window.fetch = ut), (ht = !0)),
                                    (dt || (dt = new rt()), dt).on("request", (n, r) => {
                                        (function (t, e) {
                                            return !((e.method && t.method && e.method.toLowerCase() !== t.method.toLowerCase()) || (e.url && t.url && !t.url.match(e.url)));
                                        })(r, e) &&
                                            t &&
                                            setTimeout(() => t(r), 0);
                                    });
                            })((t) => {
                                e && e(t), this.update(n);
                            }, t),
                            this.ajaxWatchers.push(r));
                    }
                }
                function bt(t) {
                    return (0, nt.jj)(
                        (0, nt.xH)(
                            t.map(({ targeting: t }) => {
                                if (t && t.group) return (0, nt.xH)(wt(t.group.items));
                            })
                        ).filter(Boolean)
                    );
                }
                function wt(t) {
                    return (0, nt.xH)(t.map((t) => (K(t) ? wt(t.items) : t.type)));
                }
                class yt extends rt {
                    constructor(t) {
                        super(), (this.runtime = t), (this.widgets = {}), (this.watchers = null), (this.targetingKeys = null), this.reset();
                    }
                    async getEnvironmentForRuntime(t) {
                        const e = await this.runtime.session.getServerData(),
                            n = this.runtime.session.currentVisit,
                            r = n.utm;
                        return {
                            ab: 100 * Math.random(),
                            location: n.location,
                            source: n.source,
                            referrer: n.referrer,
                            pageNumber: n.pageNumber,
                            sessionNumber: n.sessionNumber,
                            isReturning: n.sessionNumber > 1,
                            utm: { term: r.utm_term, source: r.utm_source, content: r.utm_content, campaign: r.utm_campaign, medium: r.utm_medium },
                            geo: e.geo.geopath,
                            platform: e.ua.platform,
                            os: e.ua.os,
                            browser: e.ua.browser,
                            language: n.language,
                            displayWidth: n.displayWidth,
                            displayHeight: n.displayHeight,
                            api: this.runtime.args.getParams(),
                            ip: e.geo.ip,
                            cookie: f,
                            cssSelector: it,
                            atonce: !0,
                            exitAttempted: void 0,
                            scrollPercent: void 0,
                            timeOnPage: void 0,
                            timeOnSite: void 0,
                            timeIdle: void 0,
                            date: t.getTime(),
                            time: t.getTime(),
                            weekday: t.getDay(),
                        };
                    }
                    initialize(t) {
                        (this.targetingKeys = bt(t)),
                            t.forEach((t) => {
                                this.widgets[t.id] = new kt(t);
                            }),
                            (this.watchers = new _t(this.runtime.session.currentVisit, this.targetingKeys)),
                            this.watchers.on("change", (t, e) => {
                                this.triggerChange();
                            });
                    }
                    async getState(t) {
                        let e = Object.assign(Object.assign({}, await this.getEnvironmentForRuntime(t)), this.watchers.readValue());
                        if (this.runtime.platform) {
                            const t = (0, nt.jV)(this.targetingKeys, this.runtime.platform.getEnvironmentKeys());
                            t.length && (e = Object.assign(Object.assign({}, e), await this.runtime.platform.getEnvironment(t)));
                        }
                        return new xt(t, e, this.widgets, this.runtime.storages);
                    }
                    reset() {
                        Object.values(this.widgets).forEach((t) => t.reset()), this.watchers && this.watchers.reset(this.runtime.session.currentVisit);
                    }
                    triggerChange() {
                        this.trigger("change");
                    }
                }
                class xt {
                    constructor(t, e, n, r) {
                        (this.now = t), (this.env = e), (this.widgets = n), (this.storages = r);
                    }
                    getEnvironmentForWidget(t, e) {
                        const n = this.storages.loadAllFor(t) || {},
                            i = (t) => n[t] || { time: 0, value: 0 },
                            o = (t) => {
                                const n = t.reduce((t, e) => Math.max(t, i(e).time), 0);
                                return 0 != n ? e.getTime() - n : void 0;
                            },
                            s = (t) => t.reduce((t, e) => t + i(e).value, 0);
                        return {
                            timeSinceLastAction: o(d),
                            actionCount: s(d),
                            timeSinceLastClose: o([r.Close]),
                            closeCount: s([r.Close]),
                            timeSinceLastHide: o([r.Hide]),
                            hideCount: s([r.Hide]),
                            timeSinceLastShow: o([r.Show]),
                            showCount: s([r.Show]),
                        };
                    }
                    test(t, e) {
                        const n = this.widgets[t];
                        if (!n) return !1;
                        const r = Object.assign(Object.assign({}, this.env), this.getEnvironmentForWidget(t, this.now));
                        if (e) {
                            r[tt.TimeDisplay] = this.now.getTime() - e.getTime();
                            const t = r[tt.TimeSinceLastAction];
                            r[tt.TimeDisplay] > t && (r[tt.TimeSinceAction] = t);
                        }
                        return n.test(r, null != e);
                    }
                }
                class kt {
                    constructor(t) {
                        (this.widget = t), (this.generalResult = !1), (this.startResult = []), (this.hideResult = []), (this.data = (t.targeting || {}).data), this.reset();
                    }
                    test(t, e) {
                        const n = Q(this.generalTargeting())(t)[0];
                        let r,
                            i = n;
                        e || (i = i && Q(this.stopTargeting())(t)[0]);
                        const [o, s] = e ? [this.hideTriggers(), this.hideResult] : [this.startTriggers(), this.startResult];
                        return (
                            o.forEach((i, o) => {
                                let a = !1;
                                i.type === tt.Auto && !0 === i.value ? (a = this.generalResult == e && n == !e) : ([a] = Q(this.makeTargeting([i]))(t)), r || !a || s[o] || (r = i.type), ("=" === i.operation && !0 === i.value) || (s[o] = a);
                            }),
                            (i = r ? i && !e : e),
                            (this.generalResult = n),
                            i
                        );
                    }
                    reset() {
                        (this.startResult = Array.of(this.startTriggers().length).map(() => !1)), (this.hideResult = Array.of(this.hideTriggers().length).map(() => !1));
                    }
                    group(t) {
                        return (((this.widget.targeting || {}).group || {}).items || []).find((e) => e.id === t) || { id: t, items: [], operation: "or" };
                    }
                    makeTargeting(t) {
                        return { group: { items: t, operation: "and" }, data: this.data };
                    }
                    generalTargeting() {
                        const t = [et.Location, et.General, et.Schedule];
                        return this.makeTargeting(t.map((t) => this.group(t)));
                    }
                    stopTargeting() {
                        return this.makeTargeting([this.group(et.Stop)]);
                    }
                    startTriggers() {
                        return this.group(et.Start).items;
                    }
                    hideTriggers() {
                        return this.group(et.Hide).items;
                    }
                }
                class Ot {
                    constructor(t) {
                        (this.runtime = t), (this._created = {});
                    }
                    async initialize(t) {
                        this.runtime.renderer.isRendered() || this.runtime.renderer.render(this.runtime.args.getParams()),
                            t &&
                                (this.widgets ||
                                    ((this.widgets = t.sort((t, e) => (e.sort_order || 0) - (t.sort_order || 0))),
                                    this.widgets.length &&
                                        (this.targeting ||
                                            ((this.targeting = new yt(this.runtime)),
                                            this.targeting.initialize(this.widgets),
                                            this.targeting.on("change", async () => {
                                                await this.update();
                                            })),
                                        this.runtime.platform && (await this.runtime.platform.initialize(this.widgets, this.targeting)))));
                    }
                    async update(t) {
                        if ((await this.initialize(t), !this.widgets)) throw new Error("not initialized");
                        0 !== this.widgets.length && (await this.updateContext(), await this.displayWidgets());
                    }
                    async displayWidgets() {
                        const t = (function (t, e) {
                                let n;
                                const r = e.storages.load("ab") || {},
                                    i = [],
                                    o = {};
                                for (n of t)
                                    if (n.groupId) {
                                        let t = o[n.groupId];
                                        t ? t.push(n) : (t = [n]), (o[n.groupId] = t);
                                    } else i.push(n);
                                for (const s of Object.keys(o || {})) {
                                    let t;
                                    const e = o[s];
                                    if (e) {
                                        if (r[s]) {
                                            for (let i = 0; i < e.length; i++)
                                                if (((n = e[i]), n.id === r[s])) {
                                                    t = i;
                                                    break;
                                                }
                                        } else t = r[s] || Math.floor(Math.random() * e.length);
                                        const o = e.splice(t, 1)[0];
                                        (r[s] = o.id), i.push(o);
                                    }
                                }
                                return e.storages.save("ab", r), i;
                            })(this.widgets, this.runtime).map((t) => t.id),
                            e = (e) => {
                                const n = this.getWidgetUserDisplayAction(e);
                                return !1 !== n && (-1 !== t.indexOf(e) || !0 === n) && void 0;
                            },
                            n = await this.targeting.getState(new Date());
                        this.widgets.forEach((t) => {
                            const r = this.displayAt(t.id);
                            let i = e(t.id);
                            null == i && (i = n.test(t.id, r)), !r && i ? this._createWidget(t) : r && !i && this._hideWidget(t);
                        });
                    }
                    findWidget(t) {
                        return this.widgets.find((e) => e.id === t);
                    }
                    async showWidgetUser(t) {
                        await this.initialize();
                        const e = this.findWidget(t);
                        return !!e && ((await this._createWidget(e)) && this.widgetShownByUser(t), !0);
                    }
                    async closeWidgetUser(t) {
                        await this.initialize();
                        const e = this.findWidget(t);
                        return !!e && ((await this._destroyWidget(e)) && (this.runtime.track.add(new p(r.Close, e)), this.widgetClosedByUser(t)), !0);
                    }
                    async hideWidget(t) {
                        await this.initialize();
                        const e = this.findWidget(t);
                        return !!e && (await this._hideWidget(e));
                    }
                    async updateWidgetTags(t) {
                        await this.initialize(), this.runtime.renderer.updateContext(t);
                    }
                    async _destroyWidget(t) {
                        const e = this._created[t.id];
                        return !(!e || !e.shown || (e.close(), delete this._created[t.id], 0));
                    }
                    async _hideWidget(t) {
                        return (await this._destroyWidget(t)) && this.runtime.track.add(new p(r.Hide, t)), !0;
                    }
                    async _createWidget(t) {
                        return (
                            !this._created[t.id] &&
                            ((this._created[t.id] = { shown: !1 }),
                            (this._created[t.id] = await this.runtime.renderer.createWidget(t)),
                            this._created[t.id].shown ? (this.runtime.track.add(new p(r.Show, t)), !0) : (delete this._created[t.id], !1))
                        );
                    }
                    widgetClosedByUser(t) {
                        this.runtime.storages.static.set(`byUser.${t}`, !1);
                    }
                    widgetShownByUser(t) {
                        this.runtime.storages.static.set(`byUser.${t}`, !0);
                    }
                    getWidgetUserDisplayAction(t) {
                        return this.runtime.storages.static.get(`byUser.${t}`);
                    }
                    async pageView() {
                        this.targeting && this.targeting.reset(), this.updateContext();
                    }
                    displayAt(t) {
                        return (this._created[t] || {}).date;
                    }
                    async updateContext() {
                        await this.initialize();
                        const t = new Date(),
                            e = await this.runtime.session.getServerData(),
                            n = navigator.language,
                            r = this.runtime.session.currentVisit,
                            { href: i, search: o, pathname: s, hash: a } = this.runtime.location(),
                            c = _(o),
                            l = Object.assign(
                                {
                                    $date: t.toLocaleDateString(n),
                                    $month: t.toLocaleString(n, { month: "long" }),
                                    $weekday: t.toLocaleString(n, { weekday: "long" }),
                                    $day: t.toLocaleString(n, { day: "numeric" }),
                                    $country: e.geo.country,
                                    $countryCode: e.geo.country_code,
                                    $region: e.geo.region,
                                    $state: e.geo.region,
                                    $stateCode: e.geo.state_code,
                                    $city: e.geo.city,
                                    $postalCode: e.geo.postal_code,
                                    $browser: e.ua.browser,
                                    $device: e.ua.device,
                                    $os: e.ua.os,
                                    $deviceType: e.ua.platform,
                                    $location: i,
                                    $locationPathname: s,
                                    $locationFullpath: s + o + a,
                                },
                                r ? { $language: r.language, $utmMedium: r.utm.utm_medium, $utmSource: r.utm.utm_source, $utmCampaign: r.utm.utm_campaign, $utmContent: r.utm.utm_content, $utmTerm: r.utm.utm_term } : {}
                            );
                        for (const u in c) l["$" + u] = c[u];
                        if (
                            ((l.$country_code = l.$countryCode),
                            (l.$state_code = l.$stateCode),
                            (l.$postal_code = l.$postalCode),
                            (l.$device_type = l.$deviceType),
                            (l.$utm_medium = l.$utmMedium),
                            (l.$utm_source = l.$utmSource),
                            (l.$utm_campaign = l.$utmCampaign),
                            (l.$utm_content = l.$utmContent),
                            (l.$utm_term = l.$utmTerm),
                            (l.$location_pathname = l.$locationPathname),
                            (l.$location_fullpath = l.$locationFullpath),
                            this.runtime.platform)
                        ) {
                            const t = await this.runtime.platform.getTags();
                            for (const e in t) l["$" + e] = t[e];
                        }
                        this.runtime.settings.currencyFormat && (l.$CURRENCY_FORMAT = this.runtime.settings.currencyFormat), this.runtime.renderer.updateContext(l);
                    }
                }
                class Ct {
                    constructor(t) {
                        this.storages = t;
                    }
                    isInitialized() {
                        return !!this.sessionId;
                    }
                    loadOrCreate(t, e) {
                        const n = this.storages.loadSession("lastVisit"),
                            r = new Date().getTime();
                        n && n < r - 60 * e * 1e3 && this.storages.cleanupSession();
                        const i = { newUser: !1, newSession: !1 };
                        return (
                            (this.userId = this.storages.load("uid")),
                            this.userId && 36 == this.userId.length && (this.userId = null),
                            (i.newUser = !this.userId),
                            i.newUser && this.storages.cleanupSession(),
                            (this.sessionId = this.storages.loadSession("id")),
                            (i.newSession = !this.sessionId),
                            i.newSession
                                ? ((this.sessionStartTime = new Date()),
                                  this.storages.newSession(this.sessionId, this.sessionStartTime),
                                  this.storages.saveSession("source", window.document.referrer),
                                  this.storages.saveSession("landing", t().href),
                                  this.storages.save("sessionsCount", (this.storages.load("sessionsCount") || 0) + 1))
                                : (this.sessionStartTime = new Date(this.storages.session.get("$start"))),
                            i
                        );
                    }
                    updateServerData(t) {
                        if (!this._serverData) {
                            const e = this.storages.loadSession("server");
                            this._serverData = e ? Promise.resolve(e) : this.fetchServerData(t);
                        }
                    }
                    fetchServerData(t) {
                        let e = this.source,
                            n = "";
                        const r = this.landing;
                        let i = {};
                        if (e) {
                            const t = new URL(window.document.location.href);
                            let n;
                            try {
                                n = new URL(e);
                            } catch (s) {
                                e = "";
                            }
                            n && n.hostname != t.hostname && ((i.medium = "referrer"), (i.source = n.hostname));
                        }
                        if (r)
                            try {
                                n = new URL(r).search.replace("?", "");
                            } catch (a) {}
                        const o = new URL(t);
                        return (
                            this.userId && o.searchParams.append("uid", this.userId),
                            this.sessionId && o.searchParams.append("sid", this.sessionId),
                            e && o.searchParams.append("source", e),
                            n && o.searchParams.append("query", n),
                            fetch(o.href)
                                .then((t) => {
                                    if (!t.ok) throw new Error(t.statusText);
                                    return t.json();
                                })
                                .then(
                                    (t) => (
                                        (t.timedelta = t.time - new Date().getTime()),
                                        this.storages.saveSession("server", t),
                                        t.utm && Object.keys(t.utm).length && (i = Object.assign({}, t.utm)),
                                        this.refreshUtmServer(i),
                                        t.id && this.updateId(t.user_id, t.id),
                                        t
                                    )
                                )
                                .catch(() => null)
                        );
                    }
                    async getServerData() {
                        return (this._serverData && (await this._serverData)) || { timedelta: 0, token: "-", geo: {}, ua: {}, utm: {} };
                    }
                    pageView(t) {
                        const e = new Date().getTime(),
                            n = this.refreshUtm(t),
                            r = this.pageNum + 1;
                        this.storages.saveSession("pageNum", r),
                            (this._visit = {
                                userId: this.userId,
                                sessionId: this.sessionId,
                                sessionStartTime: this.sessionStartTime.getTime(),
                                time: e,
                                location: t().href,
                                referrer: window.document.referrer,
                                pageNumber: r,
                                sessionNumber: this.storages.load("sessionsCount") || 1,
                                lastVisit: this.storages.loadSession("lastVisit"),
                                source: this.storages.loadSession("source"),
                                utm: n,
                                language: navigator.language.split("-")[0],
                                displayWidth: window.screen.width,
                                displayHeight: window.screen.height,
                            }),
                            this.storages.saveSession("lastVisit", this._visit.time);
                    }
                    refreshUtm(t) {
                        const e = this.storages.load("utm") || {},
                            n = (function (t) {
                                const e = _(t().search),
                                    n = _(t().hash.substring(1)),
                                    r = {};
                                return (
                                    St.forEach((t) => {
                                        const i = e[t] || n[t];
                                        i && (r[t] = i);
                                    }),
                                    r
                                );
                            })(t);
                        let r = {},
                            i = !1;
                        return (
                            n && Object.keys(n).length && ((r = Object.assign(Object.assign({}, n), { method: "url" })), (i = !0)),
                            !Object.keys(r).length || (!i && Object.keys(e).length) ? Object.keys(e).length && (r = Object.assign({ method: "url" }, e)) : this.storages.save("utm", r),
                            r
                        );
                    }
                    refreshUtmServer(t) {
                        const e = {};
                        t.medium && (e.utm_medium = t.medium), t.source && (e.utm_source = t.source);
                        const n = this.storages.load("utm");
                        Object.keys(e).length && ((n && Object.keys(n).length) || ((e.method = "referrer"), this.storages.save("utm", e), this._visit && (this._visit.utm = e)));
                    }
                    updateId(t, e) {
                        this.userId != t && ((this.userId = t), this.storages.save("uid", this.userId)), (this.sessionId = e), this.storages.saveSession("id", e), (this._visit.userId = t), (this._visit.sessionId = e);
                    }
                    get pageNum() {
                        return this.storages.loadSession("pageNum") || 0;
                    }
                    get source() {
                        return this.storages.loadSession("source");
                    }
                    get landing() {
                        return this.storages.loadSession("landing");
                    }
                    get currentVisit() {
                        return this._visit;
                    }
                }
                const St = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
                    Tt = [
                        tt.ProductId,
                        tt.ProductType,
                        tt.ProductVendor,
                        tt.ProductTag,
                        tt.VariantId,
                        tt.VariantPrice,
                        tt.VariantAvailable,
                        tt.VariantOptions,
                        tt.CartTotalPrice,
                        tt.CartDiscount,
                        tt.CartItemCount,
                        tt.CartProduct,
                        tt.CartProductType,
                        tt.CartVariant,
                        tt.AddToCart,
                        tt.RemoveFromCart,
                        tt.CustomerId,
                        tt.CustomerTag,
                        tt.CustomerOrderCount,
                        tt.CustomerTotalSpent,
                        tt.CustomerAcceptsMarketing,
                    ],
                    Et = [tt.CartTotalPrice, tt.CartDiscount, tt.CartItemCount, tt.CartProduct, tt.CartProductType, tt.CartVariant, tt.AddToCart, tt.RemoveFromCart],
                    jt = [tt.ProductTag, tt.VariantOptions, tt.VariantAvailable],
                    Pt = [tt.CustomerTag, tt.CustomerOrderCount, tt.CustomerTotalSpent, tt.CustomerAcceptsMarketing];
                function $t(t) {
                    return (t.total_price /= 100), (t.items_subtotal_price /= 100), (t.total_discount /= 100), t;
                }
                class It extends rt {
                    constructor() {
                        super(...arguments),
                            (this.name = "shopify"),
                            (this.cartEvents = new rt()),
                            (this.ordersCache = {}),
                            (this.productsCache = {}),
                            (this.cartTagsExists = !1),
                            (this.customerTagsExists = !1),
                            (this.orderTagsExists = !1),
                            (this.productTagsExists = !1),
                            (this.cartEnv = {}),
                            (this.createCartPromise = async () => {
                                const t = await fetch("/cart.js");
                                if (t.ok) return $t(await t.json());
                                throw new Error("Failed to load cart");
                            });
                    }
                    static detect(t) {
                        return t.Shopify || t.ShopifyAnalytics;
                    }
                    async initialize(t, e) {
                        for (let r = 0; r < t.length; r++)
                            for (let e = 0; e < t[r].pages.length; e++) {
                                const n = JSON.stringify(t[r].pages[e].data);
                                n.match(/\$cart/) && (this.cartTagsExists = !0),
                                    n.match(/\$customer/) && (this.customerTagsExists = !0),
                                    n.match(/\$order/) && (this.orderTagsExists = !0),
                                    (n.match(/\$product/) || n.match(/\$variant/)) && (this.productTagsExists = !0);
                            }
                        const n = [];
                        if ((this.cartTagsExists && n.push(this.getCart()), this.customerTagsExists && n.push(this.getCustomer()), this.orderTagsExists)) {
                            const t = this.getOrderId();
                            t && n.push(this.getOrder(t));
                        }
                        return (
                            this.productTagsExists && n.push(this.getProduct()),
                            n.length && (await Promise.all(n)),
                            this.cartEvents.on("init", (t, { newCart: n }) => {
                                e.triggerChange();
                            }),
                            this.cartEvents.on("change", (t, { newCart: n, prevCart: r }) => {
                                const i = n.item_count - r.item_count;
                                i < 0 ? (this.cartEnv[tt.RemoveFromCart] = !0) : i > 0 && (this.cartEnv[tt.AddToCart] = !0), e.triggerChange();
                            }),
                            e.watchers.addAjaxWatcher({ method: "post", url: "/cart/add(\\.js)?" }, () => this.refreshCart()),
                            e.watchers.addAjaxWatcher({ method: "post", url: "/cart/change(\\.js)?" }, (t) => {
                                t.response
                                    ? t.response.then((t) => {
                                          200 === t.status && this.refreshCart($t(JSON.parse(t.body)));
                                      })
                                    : this.refreshCart();
                            }),
                            e.watchers.addAjaxWatcher({ method: "get", url: "/cart.js" }, (t) => {
                                t.response &&
                                    t.response.then((t) => {
                                        200 === t.status && this.refreshCart($t(JSON.parse(t.body)));
                                    });
                            }),
                            this.testOrderGoal(),
                            !0
                        );
                    }
                    getEnvironmentKeys() {
                        return Tt;
                    }
                    async getEnvironment(t) {
                        const e = this.getCustomerId();
                        let n = {};
                        e && (n[tt.CustomerId] = e.toString());
                        const r = t.some((t) => -1 !== jt.indexOf(t)),
                            i = await this.getProduct(r);
                        if (
                            (i &&
                                ((n = Object.assign(Object.assign({}, n), { [tt.ProductId]: i.id.toString(), [tt.ProductType]: i.type, [tt.ProductVendor]: i.vendor, [tt.ProductTag]: i.tags })),
                                i.variant &&
                                    (n = Object.assign(Object.assign({}, n), {
                                        [tt.VariantId]: i.variant.id.toString(),
                                        [tt.VariantPrice]: i.variant.price,
                                        [tt.VariantAvailable]: i.variant.available,
                                        [tt.VariantOptions]: i.variant.options,
                                    }))),
                            t.some((t) => -1 !== Et.indexOf(t)))
                        ) {
                            const t = await this.getCart(),
                                e = t.items || [];
                            n = Object.assign(
                                Object.assign(Object.assign({}, n), {
                                    [tt.CartTotalPrice]: t.total_price,
                                    [tt.CartDiscount]: t.total_discount,
                                    [tt.CartItemCount]: t.item_count,
                                    [tt.CartProduct]: e.map((t) => t.product_id.toString()),
                                    [tt.CartProductType]: [...new Set(e.map((t) => t.product_type).filter((t) => t))],
                                    [tt.CartVariant]: e.map((t) => t.variant_id.toString()),
                                }),
                                this.cartEnv
                            );
                        }
                        if (((this.cartEnv = {}), t.some((t) => -1 !== Pt.indexOf(t)))) {
                            const t = await this.getCustomer();
                            t &&
                                (n = Object.assign(Object.assign({}, n), {
                                    [tt.CustomerId]: t.id.toString(),
                                    [tt.CustomerTag]: t.tags,
                                    [tt.CustomerTotalSpent]: t.total_spent,
                                    [tt.CustomerOrderCount]: t.orders_count,
                                    [tt.CustomerAcceptsMarketing]: t.accepts_marketing,
                                }));
                        }
                        return n;
                    }
                    async getTrackingContext() {
                        const t = this.getCustomerId(),
                            e = this.getOrderId(),
                            n = await this.getProduct(!1),
                            r = {};
                        return t && (r.customerId = t), e && (r.orderId = e), n && ((r.productId = n.id), n.variant && (r.variantId = n.variant.id)), r;
                    }
                    async getTags() {
                        let t = {};
                        if (this.cartTagsExists) {
                            const e = await this.getCart();
                            t = Object.assign(Object.assign({}, t), { cartItemCount: e.item_count, cartTotalPrice: e.total_price, cartDiscount: e.total_discount, cartSubtotalPrice: e.items_subtotal_price });
                        }
                        if (this.customerTagsExists) {
                            const e = await this.getCustomer();
                            e && (t = Object.assign(Object.assign({}, t), { customerId: e.id, customerEmail: e.email, customerPhone: e.phone, customerName: e.name }));
                        }
                        if (this.orderTagsExists) {
                            const e = this.getOrderId();
                            if (e) {
                                const n = await this.getOrder(e);
                                n && (t = Object.assign(Object.assign({}, t), { orderId: n.id, orderName: n.name, orderTotalPrice: n.total_price, orderSubtotalPrice: n.subtotal_price }));
                            }
                        }
                        if (this.productTagsExists) {
                            const e = await this.getProduct(!0);
                            if (e && ((t = Object.assign(Object.assign({}, t), { productId: e.id, productVendor: e.vendor, productType: e.type, productTitle: e.title })), e.variant)) {
                                t = Object.assign(Object.assign({}, t), { variantId: e.variant.id, variantPrice: e.variant.price, variantTitle: e.variant.title, variantSku: e.variant.sku, variantBarcode: e.variant.barcode });
                                for (const n in e.variant.options) t[`variantOption${n}`] = e.variant.options[n];
                            }
                        }
                        return t;
                    }
                    pageView() {
                        (this.cartEnv = {}), this.testOrderGoal();
                    }
                    async getCurrentItem() {
                        const t = await this.getProduct(!1);
                        if (t && t.variant) return { id: t.variant.id, quantity: 1, label: t.variant.display_name };
                    }
                    async runAddToCart(t, e) {
                        const n = { items: t.filter((t) => t.id).map((t) => ({ id: t.id, quantity: t.quantity })) };
                        if (n.items.length < 0) return !1;
                        const r = await fetch("/cart/add.js", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
                        return r.ok && e && window.open(e, "_self"), r.ok;
                    }
                    async runApplyCoupon(t, e) {
                        return e ? (window.open(`/discount/${encodeURI(t)}?redirect=${e ? encodeURIComponent(e) : ""}`, "_self"), !0) : window.fetch(`/discount/${encodeURI(t)}`, { redirect: "manual" }).then(() => !0);
                    }
                    async refreshCart(t = null) {
                        let e = null;
                        if (this.cart)
                            try {
                                e = await this.cart;
                            } catch (o) {
                                this.cart = null;
                            }
                        this.cart = t ? Promise.resolve(t) : this.createCartPromise();
                        const n = await this.cart;
                        var r, i;
                        e ? ((r = e), (i = n), JSON.stringify(r) !== JSON.stringify(i) && this.cartEvents.trigger("change", { newCart: n, prevCart: e })) : this.cartEvents.trigger("init", { newCart: n });
                    }
                    async getCart() {
                        return this.cart || (this.cart = this.createCartPromise()), this.cart;
                    }
                    async createCustomerPromise(t) {
                        const e = await fetch(`/apps/getsitecontrol?view=customer&id=${t}`);
                        if (e.ok) return await e.json();
                    }
                    getShopifyCheckout() {
                        const t = window;
                        if (t.Shopify && t.Shopify.checkout) return t.Shopify.checkout;
                    }
                    getCustomerId() {
                        const t = this.getShopifyCheckout();
                        return t ? t.customer_id : this.getMetaPage().customerId;
                    }
                    getCustomer() {
                        if (!this.customer) {
                            const t = this.getCustomerId();
                            this.customer = t ? this.createCustomerPromise(t) : Promise.resolve();
                        }
                        return this.customer;
                    }
                    getOrderId() {
                        const t = this.getShopifyCheckout();
                        if (t) return t.order_id;
                    }
                    async getOrder(t) {
                        return this.ordersCache[t] || (this.ordersCache[t] = fetch(`/apps/getsitecontrol?view=order&id=${t}`).then((t) => (t.ok ? t.json().then((t) => t) : null))), await this.ordersCache[t];
                    }
                    testOrderGoal() {
                        if (!window.document.location.pathname.match(/^\/\w+\/checkouts\/\w+\/thank_you$/)) return;
                        const t = this.getOrderId();
                        t &&
                            this.getOrder(t).then((t) => {
                                if (t) {
                                    const e = { name: t.name, customer_id: t.customer_id, email: t.email, phone: t.phone, subtotal_price: t.subtotal_price, total_price: t.total_price, currency: t.currency, total_tax: t.total_tax };
                                    this.trigger("goal", new h("order", t.total_price, t.id.toString(), e));
                                }
                            });
                    }
                    getMetaPage() {
                        const t = window;
                        let e = { pageType: null };
                        if (t.ShopifyAnalytics) {
                            const n = t.ShopifyAnalytics.meta;
                            n && n.page && (e = Object.assign({}, n.page));
                        }
                        return e.pageType || ("/cart" === window.document.location.pathname ? (e.pageType = "cart") : "/account" === window.document.location.pathname && (e.pageType = "account")), e;
                    }
                    getMeta() {
                        const t = window,
                            e = { page: this.getMetaPage() };
                        if (t.ShopifyAnalytics) {
                            const n = t.ShopifyAnalytics.meta;
                            n &&
                                ((e.currency = n.currency),
                                (e.selectedVariantId = n.selectedVariantId),
                                n.product &&
                                    (e.product = {
                                        id: n.product.id,
                                        vendor: n.product.vendor,
                                        type: n.product.type,
                                        title: n.product.variants[0].name.split(" - ").slice(0, -1).join(" - ").trim(),
                                        variants: n.product.variants.map((t) => ({ id: t.id, title: t.public_title, sku: t.sku, price: t.price / 100 })),
                                    }));
                        }
                        return e;
                    }
                    async getProduct(t = !1) {
                        const e = this.getMeta();
                        let n = e.product,
                            r = null;
                        const i = window.document.getElementById("ProductJson-product-template");
                        if ((i && (r = JSON.parse(i.innerHTML)), !r && (t || !n))) {
                            const t = window.document.location.pathname.match(/\/products\/([^/]+)$/);
                            if (t) {
                                const e = t[1];
                                this.productsCache[e] || (this.productsCache[e] = fetch(`/products/${e}.js`).then(async (t) => (t.ok ? await t.json() : null))), (r = await this.productsCache[e]);
                            }
                        }
                        r &&
                            ((n = { id: r.id, type: r.type, vendor: r.vendor, variants: [], title: r.title, tags: r.tags, options: r.options }),
                            r.variants.forEach((t) => {
                                n.variants.push({
                                    id: t.id,
                                    title: t.public_title,
                                    display_name: t.name,
                                    price: t.price / 100,
                                    sku: t.sku,
                                    options: n.options.reduce((e, n, r) => Object.assign(Object.assign({}, e), { [n]: t.options[r] }), {}),
                                    barcode: t.barcode,
                                    weight: t.weight,
                                    available: t.available,
                                    taxable: t.taxable,
                                    requires_shipping: t.requires_shipping,
                                });
                            }));
                        let o = e.selectedVariantId;
                        if ((o || (o = _(window.document.location.search).variant), n && n.variants))
                            if (o) {
                                for (let s = 0; s < n.variants.length; s++)
                                    if (n.variants[s].id.toString() == o.toString()) {
                                        n.variant = n.variants[s];
                                        break;
                                    }
                            } else n.variant = n.variants[0];
                        return n;
                    }
                }
                const At = "getsitecontrol";
                function Nt(t) {
                    t.match(/^\d+$/) && (t = `id=${t}`);
                    const e = _(t),
                        { id: n } = e,
                        r = (0, i._T)(e, ["id"]),
                        o = parseInt(n, 10);
                    return Object.assign(Object.assign({}, isNaN(o) ? {} : { id: o }), r);
                }
                function Lt(t) {
                    const e = t.match(new RegExp(`^#${At}\\?(.+)`, "i"));
                    return e ? Nt(e[1]) : {};
                }
                function Rt(t) {
                    return Object.keys(t || {}).length > 0;
                }
                class Dt {
                    constructor() {
                        this._eventListeners = [];
                    }
                    addEventListener(t) {
                        return (
                            this._eventListeners.push(t),
                            this._cleanup ||
                                (this._cleanup = (function (t) {
                                    const e = (t, n = 1) => {
                                            if (n > 3) return;
                                            const r = (function (t) {
                                                return t
                                                    ? [
                                                          ["href", Lt],
                                                          [`data-${At}`, Nt],
                                                      ].reduce((e, [n, r]) => {
                                                          const i = t.getAttribute(n);
                                                          return Object.assign(Object.assign({}, e), i && r(i));
                                                      }, {})
                                                    : null;
                                            })(t);
                                            return Rt(r) ? r : t.parentElement && e(t.parentElement, n + 1);
                                        },
                                        n = (n) => {
                                            const r = n.target;
                                            if (!(r instanceof Element)) return;
                                            const i = e(r);
                                            Rt(i) && (t(i), i.id && n.preventDefault());
                                        };
                                    return (
                                        document.addEventListener("click", n, !1),
                                        () => {
                                            document.removeEventListener("click", n);
                                        }
                                    );
                                })((t) => this._dispatchEvent(t))),
                            () => {
                                (this._eventListeners = this._eventListeners.filter((e) => e !== t)), 0 === this._eventListeners.length && this._cleanup && (this._cleanup(), (this._cleanup = null));
                            }
                        );
                    }
                    processHref(t) {
                        const e = t && Lt(t);
                        Rt(e) && this._dispatchEvent(e);
                    }
                    _dispatchEvent(t) {
                        this._eventListeners.forEach((e) => e(t));
                    }
                }
                var Wt = n(118);
                class Mt {
                    constructor(t) {
                        (this.type = t), (this.value = null);
                    }
                    isHandlers() {
                        return "callback" == this.type;
                    }
                    isData() {
                        return "params" == this.type || "settings" == this.type;
                    }
                    isMethod() {
                        return "show" == this.type || "close" == this.type || "hide" == this.type || "trackPage" == this.type;
                    }
                    static parse(t) {
                        if (Array.isArray(t)) {
                            if ((t = this.transformOnEvent(t)).length < 2) throw new Error("invalid arg array length");
                            const e = new Mt(t[0]);
                            if (e.isData())
                                if ("object" == typeof t[1]) e.value = Object.assign({}, t[1]);
                                else {
                                    if (!(t.length >= 3)) throw new Error("invalid arg array");
                                    e.value = { [t[1]]: t[2] };
                                }
                            else if (e.isHandlers()) {
                                if (t.length < 3) throw new Error("invalid handler arg");
                                if ("string" != typeof t[1]) throw new Error("arg handler type invalid");
                                if ("function" != typeof t[2]) throw new Error("arg not a function");
                                (e.value = t[1]), (e.callback = t[2]);
                            } else if (e.isMethod()) e.value = t[1];
                            else {
                                if ("goal" != e.type) throw new Error("unknown arg type " + e.type);
                                e.value = new h(t[1], t[2], t[3], t[4]);
                            }
                            return e;
                        }
                        throw new Error("unknown arg format");
                    }
                    static transformOnEvent(t) {
                        if (2 === t.length && "string" == typeof t[0]) for (const e in r) if (t[0] === `on${(0, Wt.kC)(r[e])}`) return ["callback", r[e], t[1]];
                        return t;
                    }
                }
                class Ut {
                    constructor() {
                        (this.settings = {}), (this.params = {}), (this.callbacks = {});
                    }
                    addNew(t) {
                        const e = Mt.parse(t);
                        if (e.isData()) Object.assign(this.getCollection(e.type), e.value);
                        else if (e.isHandlers()) {
                            const t = this.getCollection(e.type),
                                n = (t[e.value] = t[e.value] || []);
                            -1 == n.indexOf(e.callback) && n.push(e.callback);
                        }
                        return e;
                    }
                    getCollection(t) {
                        if ("settings" == t) return this.settings;
                        if ("params" == t) return this.params;
                        if ("callback" == t) return this.callbacks;
                        throw new Error("unknown type");
                    }
                    getParams(t) {
                        const e = {};
                        for (const n in this.params || {}) (void 0 === t || (!0 === t && !n.startsWith("_")) || (!1 === t && n.startsWith("_"))) && (e[n] = this.params[n]);
                        return e;
                    }
                    runCallbacks(t, ...e) {
                        (this.callbacks[t] || []).forEach((t) => t(...e));
                    }
                }
                const Vt = n(537),
                    Ft = [r.Show, r.Close, ...d];
                class Ht {
                    constructor(t, e = Ft) {
                        if (((this.enabledEvents = e), "boolean" == typeof t)) this.enabled = t;
                        else if (null != t) throw new Error(`"${typeof t}" config not implemented`);
                        this.track = this.track.bind(this);
                    }
                    isEnabled() {
                        return !1 !== this.enabled;
                    }
                    isEnabledDefault() {
                        return !0 === this.enabled;
                    }
                    isEventEnabled({ type: t, widget: e }) {
                        return -1 !== this.enabledEvents.indexOf(t) && this.isWidgetEnabled(e);
                    }
                    isWidgetEnabled(t) {
                        return this.isEnabledDefault();
                    }
                    getQueue() {
                        throw new Error("not implemented");
                    }
                    async finalize(t) {}
                    async track(t, e) {
                        if (0 === (t = t.filter((t) => this.isEventEnabled(t))).length) return;
                        const n = this.getQueue();
                        n && t.forEach((t, e) => n(t)), await this.finalize(e);
                    }
                }
                class zt extends Ht {
                    constructor(t, e, n) {
                        super(!!e, n), (this.session = t), (this.eventsUrl = e), (this.events = []);
                    }
                    getQueue() {
                        return (t) => {
                            const e = { data: t.getData(), type: t.type };
                            t.widget && (e.widgetId = t.widget.id), this.events.push(e);
                        };
                    }
                    async finalize(t) {
                        if (0 == this.events.length) return;
                        const e = Object.assign(Object.assign({}, t), { events: this.events.slice() });
                        this.events.length = 0;
                        const n = JSON.stringify(e);
                        let r = !1;
                        const i = await this.session.getServerData(),
                            o = t.date + i.timedelta,
                            s = `${o}:${t.sessionId}`,
                            a = Vt(n, s),
                            c = this.eventsUrl + `?ts=${o}&sid=${t.sessionId}&t=${i.token || ""}&s=${a}`;
                        "function" == typeof window.navigator.sendBeacon && (r = window.navigator.sendBeacon(c, n)), r || (await fetch(c, { method: "POST", body: n }));
                    }
                }
                const Bt = /[A-Z]/g;
                class qt extends Ht {
                    constructor(t) {
                        super(t), (this.category = "getsitecontrol");
                    }
                    isWidgetEnabled(t) {
                        const e = (t.settings || {}).trackGA;
                        return !1 !== e && this.isEnabled() && (this.isEnabledDefault() || !!e);
                    }
                    getQueue() {
                        const t = window.GoogleAnalyticsObject || "ga",
                            e = window[t],
                            n = window.gtag;
                        if (n && "function" == typeof n)
                            return (t) => {
                                var e, r;
                                n(
                                    "event",
                                    `${this.category}_${(function (t, e = "_") {
                                        return t.replace(Bt, (t, n) => (n ? e : "") + t.toLowerCase());
                                    })(t.type)}`,
                                    { category: this.category, sender_name: null === (e = t.widget) || void 0 === e ? void 0 : e.name.substring(0, 100), sender_id: null === (r = t.widget) || void 0 === r ? void 0 : r.id }
                                );
                            };
                        if (e && "function" == typeof e) {
                            const t = ["send"];
                            if ("function" == typeof e.getAll) {
                                const n = [];
                                e.getAll().forEach((e) => {
                                    -1 === n.indexOf(e.get("trackingId")) && (n.push(e.get("trackingId")), t.push(e.get("name") + ".send"));
                                });
                            }
                            return (n) => t.forEach((t) => e(t, this.transform(n)));
                        }
                        {
                            const t = window._gaq;
                            if (t && "function" == typeof t.push)
                                return (e) => {
                                    const n = this.transform(e);
                                    t.push(["_trackEvent", n.eventCategory, n.eventAction, n.eventLabel, n.eventValue, n.nonInteraction]);
                                };
                        }
                    }
                    transform(t) {
                        return { hitType: "event", eventCategory: this.category, eventAction: t.type, eventLabel: t.widget ? `${t.widget.name} #${t.widget.id}` : void 0, eventValue: void 0, nonInteraction: !t.isAction() };
                    }
                }
                class Gt extends Ht {
                    constructor(t) {
                        super(t), (this.dataLayerName = "dataLayer");
                    }
                    isWidgetEnabled(t) {
                        const e = (t.settings || {}).trackGTM;
                        return !1 !== e && this.isEnabled() && (this.isEnabledDefault() || !!e);
                    }
                    getQueue() {
                        const t = window[this.dataLayerName];
                        if (t && "function" == typeof t.push) return (e) => t.push(this.transform(e));
                    }
                    transform(t) {
                        const e = { event: `gsc.${t.type}`, "gsc.eventData": t.prettyData() };
                        return t.widget && (e["gsc.widgetId"] = t.widget.id), e;
                    }
                }
                const Jt = {
                    sessionLength: 20,
                    storage: "local",
                    storagePrefix: "gsc",
                    placement: "website",
                    events: [r.Show, r.SubmitWidget, r.OpenUrl, r.ShowWidget, r.CopyToClipboard, r.AddToCart, r.ApplyCoupon, r.Goal],
                    goals: [],
                    trackLocation: !0,
                    previewInteractive: !1,
                };
                class Yt {
                    constructor(t, e = {}) {
                        (this.platform = (function (t) {
                            const e = window;
                            let n;
                            return (void 0 === It.name || It.detect(e)) && (n = new It()), n;
                        })()),
                            (this.settings = Object.assign(Object.assign({}, Jt), e)),
                            (this.renderer = t.createWidgetRenderer(this, { previewInteractive: this.settings.previewInteractive })),
                            (this.location = (function () {
                                let t = window.document.location;
                                const e = window.document.createElement("a");
                                return (() => {
                                    let n = 0;
                                    const r = () => t;
                                    return (
                                        (r.set = (n) => ((e.href = n), "" === e.host && (e.href = e.href), (t = e), r.stopTrack(), !0)),
                                        (r.track = (e, r = 100) => {
                                            if (!n) {
                                                let i = t.pathname + "?" + t.search;
                                                n = window.setInterval(() => {
                                                    const n = t.pathname + "?" + t.search;
                                                    i !== n && ((i = n), e());
                                                }, r);
                                            }
                                        }),
                                        (r.stopTrack = () => {
                                            n && (clearInterval(n), (n = 0));
                                        }),
                                        r
                                    );
                                })();
                            })()),
                            (this.storages = new u(this.settings.storage, this.settings.storagePrefix)),
                            (this.session = new Ct(this.storages)),
                            (this.display = new Ot(this)),
                            (this._args = new Ut()),
                            this.platform &&
                                this.platform.on("goal", (t, e) => {
                                    this.trackGoal(e);
                                }),
                            (this.launcher = new Dt()),
                            this.launcher.addEventListener(async (t) => {
                                var { id: e } = t,
                                    n = (0, i._T)(t, ["id"]);
                                await this.setParams(n), e && (await this.showWidget(e));
                            });
                    }
                    get args() {
                        return this._args;
                    }
                    async updateSettings(t = {}) {
                        t && (this.settings = Object.assign(Object.assign({}, this.settings), t)), this.initTracking(), this.settings.trackLocation ? this.location.track(this.onLocationChange.bind(this)) : this.location.stopTrack();
                    }
                    initTracking() {
                        const t = [],
                            e = new zt(this.session, this.settings.serverUrl, this.settings.events);
                        e.isEnabled() && t.push(e.track);
                        const n = new qt(this.settings.trackGA);
                        n.isEnabled() && t.push(n.track);
                        const r = new Gt(this.settings.trackGTM);
                        var i;
                        r.isEnabled() && t.push(r.track),
                            t.push(
                                ((i = this),
                                async (t, e) => {
                                    const n = new Date().getTime();
                                    for (const r of t)
                                        if (r.widget) {
                                            const t = i.storages.loadFor(r.widget.id, r.type) || { time: n, value: 0 };
                                            (t.time = n), (t.value += 1), i.storages.saveFor(r.widget.id, r.type, t);
                                        }
                                }),
                                (function (t) {
                                    return (e, n) => {
                                        for (const r of e) t.args.runCallbacks(r.type, r.widget ? r.widget.id : void 0, r.prettyData(), n);
                                    };
                                })(this)
                            ),
                            (this.track = new m(this, t));
                    }
                    pageView() {
                        let t = { newUser: !1, newSession: !1 };
                        this.session.isInitialized() || this.session.loadOrCreate(this.location, this.settings.sessionLength),
                            this.settings.serverUrl && this.session.updateServerData(this.settings.serverUrl),
                            this.session.pageView(this.location),
                            this.platform && this.platform.pageView(),
                            this.display.pageView(),
                            this.storages.page.clear(),
                            this.launcher.processHref(this.location().hash),
                            this.track.add(new p(r.PageView));
                    }
                    async run(t) {
                        this.updateSettings(), this.pageView(), await this.display.update(t);
                    }
                    async showWidget(t, e) {
                        if (void 0 !== e) {
                            const n = this.display.findWidget(t);
                            this.trackWidgetEvent(r.ShowWidget, e, { id: t, name: null == n ? void 0 : n.name });
                        }
                        return this.display.showWidgetUser(t);
                    }
                    async closeWidget(t) {
                        return this.display.closeWidgetUser(t);
                    }
                    async sendData(t, e) {
                        return this.trackWidgetEvent(r.SubmitWidget, t, e, !0), Promise.resolve(!0);
                    }
                    openUrl(t, e, n) {
                        return this.trackWidgetEvent(r.OpenUrl, t, { url: e }, "_blank" !== n), window.open(e, n), Promise.resolve(!0);
                    }
                    copyToClipboard(t, e) {
                        return navigator.clipboard ? (this.trackWidgetEvent(r.CopyToClipboard, t, { text: e }), navigator.clipboard.writeText(e).then(() => !0)) : Promise.resolve(!1);
                    }
                    addToCart(t, e, n, i) {
                        if (this.platform) {
                            const o = (e) => {
                                const n = { items: e.map((t) => ({ id: t.id, quantity: t.quantity, name: t.label })) };
                                return this.trackWidgetEvent(r.AddToCart, t, n), this.platform.runAddToCart(e, i).then(() => !0);
                            };
                            return "current" == e ? this.platform.getCurrentItem().then((t) => !!t && o([t])) : o(n);
                        }
                        return Promise.resolve(!1);
                    }
                    applyCoupon(t, e, n) {
                        return this.platform ? (this.trackWidgetEvent(r.ApplyCoupon, t, { coupon: e }), this.platform.runApplyCoupon(e, n)) : Promise.resolve(!1);
                    }
                    trackWidgetEvent(t, e, n = {}, r = !1) {
                        const i = this.display.findWidget(e);
                        this.track.add(new p(t, i, n), r);
                    }
                    sendPreviewEvent(t) {
                        return Promise.resolve(!1);
                    }
                    async apiCall(t) {
                        const e = this._args.addNew(t);
                        let n = !1,
                            r = null;
                        return (
                            "settings" == e.type
                                ? this.updateSettings(e.value)
                                : "params" == e.type
                                ? (this.display.updateWidgetTags(this.args.getParams()), (n = !0))
                                : "trackPage" == e.type
                                ? (this.location.set(e.value), this.pageView(), (n = !0))
                                : "goal" == e.type
                                ? this.trackGoal(e.value)
                                : "show" == e.type
                                ? (r = await this.showWidget(parseInt(e.value)))
                                : "close" == e.type
                                ? (r = await this.closeWidget(parseInt(e.value)))
                                : "hide" == e.type && (r = await this.display.hideWidget(parseInt(e.value))),
                            n && (await this.display.update()),
                            r
                        );
                    }
                    async onLocationChange() {
                        this.pageView(), await this.display.update();
                    }
                    async setParams(t) {
                        t && Object.keys(t).length > 0 && (await this.display.updateWidgetTags(t), await this.display.update());
                    }
                    trackGoal(t) {
                        const e = this.settings.goals.find((e) => e.sysname == t.sysname);
                        if (!e) return;
                        const n = e.hitIdentity || "session",
                            r = this.storages.goals.get(t.sysname) || [],
                            i = this.session.sessionId;
                        r.some(([e, r]) => t.hitId == e && (null != e || "global" == n || ("session" == n && i == r))) || (this.track.send(t.asEvent()), r.push([t.hitId, i, t.value, Date.now()]), this.storages.goals.set(t.sysname, r));
                    }
                }
            },
            141: (t, e, n) => {
                function r(t, e) {
                    return Object.keys(t).reduce((n, r) => ((n[r] = e(t[r])), n), {});
                }
                function i(t) {
                    return t;
                }
                function o(t, e) {
                    return t.filter((t) => -1 !== e.indexOf(t));
                }
                function s(t) {
                    return t.hasOwnProperty("flat") ? t.flat(1) : [].concat(...t);
                }
                function a(t) {
                    const e = t.slice();
                    for (let n = e.length - 1; n > 0; n--) {
                        const t = Math.floor(Math.random() * (n + 1));
                        [e[n], e[t]] = [e[t], e[n]];
                    }
                    return e;
                }
                n.d(e, { Q8: () => r, TV: () => a, jV: () => o, jj: () => i, xH: () => s });
            },
            805: (t, e, n) => {
                let r;
                function i() {
                    return (
                        r ||
                        (r = (function () {
                            let t = !1;
                            try {
                                const e = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0;
                                    },
                                });
                                window.addEventListener("test", null, e);
                            } catch (e) {}
                            return { events: { passiveSupported: t } };
                        })())
                    );
                }
                n.d(e, { Z: () => i });
            },
        },
        e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = (e[r] = { id: r, loaded: !1, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
    }
    (n.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, { a: e }), e;
    }),
        (n.d = (t, e) => {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        }),
        (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (n.o = (t, e) => ({}.hasOwnProperty.call(t, e))),
        (n.r = (t) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
        (() => {
            var t,
                e,
                r,
                i,
                o,
                s,
                a,
                c,
                l = {},
                u = [],
                d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function h(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function p(t) {
                var e = t.parentNode;
                e && e.removeChild(t);
            }
            function g(e, n, r) {
                var i,
                    o,
                    s,
                    a = {};
                for (s in n) "key" == s ? (i = n[s]) : "ref" == s ? (o = n[s]) : (a[s] = n[s]);
                if ((arguments.length > 2 && (a.children = arguments.length > 3 ? t.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps)) for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
                return f(e, a, i, o, null);
            }
            function f(t, n, i, o, s) {
                var a = { type: t, props: n, key: i, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == s ? ++r : s };
                return null == s && null != e.vnode && e.vnode(a), a;
            }
            function m(t) {
                return t.children;
            }
            function v(t, e) {
                (this.props = t), (this.context = e);
            }
            function _(t, e) {
                if (null == e) return t.__ ? _(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? _(t) : null;
            }
            function b(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break;
                        }
                    return b(t);
                }
            }
            function w(t) {
                ((!t.__d && (t.__d = !0) && o.push(t) && !y.__r++) || a !== e.debounceRendering) && ((a = e.debounceRendering) || s)(y);
            }
            function y() {
                for (var t; (y.__r = o.length); )
                    (t = o.sort(function (t, e) {
                        return t.__v.__b - e.__v.__b;
                    })),
                        (o = []),
                        t.some(function (t) {
                            var e, n, r, i, o, s;
                            t.__d &&
                                ((o = (i = (e = t).__v).__e),
                                (s = e.__P) && ((n = []), ((r = h({}, i)).__v = i.__v + 1), P(s, i, r, e.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? _(i) : o, i.__h), $(n, i), i.__e != o && b(i)));
                        });
            }
            function x(t, e, n, r, i, o, s, a, c, d) {
                var h,
                    p,
                    g,
                    v,
                    b,
                    w,
                    y,
                    x = (r && r.__k) || u,
                    O = x.length;
                for (n.__k = [], h = 0; h < e.length; h++)
                    if (
                        null !=
                        (v = n.__k[h] =
                            null == (v = e[h]) || "boolean" == typeof v
                                ? null
                                : "string" == typeof v || "number" == typeof v || "bigint" == typeof v
                                ? f(null, v, null, null, v)
                                : Array.isArray(v)
                                ? f(m, { children: v }, null, null, null)
                                : v.__b > 0
                                ? f(v.type, v.props, v.key, null, v.__v)
                                : v)
                    ) {
                        if (((v.__ = n), (v.__b = n.__b + 1), null === (g = x[h]) || (g && v.key == g.key && v.type === g.type))) x[h] = void 0;
                        else
                            for (p = 0; p < O; p++) {
                                if ((g = x[p]) && v.key == g.key && v.type === g.type) {
                                    x[p] = void 0;
                                    break;
                                }
                                g = null;
                            }
                        P(t, v, (g = g || l), i, o, s, a, c, d),
                            (b = v.__e),
                            (p = v.ref) && g.ref != p && (y || (y = []), g.ref && y.push(g.ref, null, v), y.push(p, v.__c || b, v)),
                            null != b
                                ? (null == w && (w = b), "function" == typeof v.type && v.__k === g.__k ? (v.__d = c = k(v, c, t)) : (c = C(t, v, g, x, b, c)), "function" == typeof n.type && (n.__d = c))
                                : c && g.__e == c && c.parentNode != t && (c = _(g));
                    }
                for (n.__e = w, h = O; h--; ) null != x[h] && ("function" == typeof n.type && null != x[h].__e && x[h].__e == n.__d && (n.__d = _(r, h + 1)), N(x[h], x[h]));
                if (y) for (h = 0; h < y.length; h++) A(y[h], y[++h], y[++h]);
            }
            function k(t, e, n) {
                for (var r, i = t.__k, o = 0; i && o < i.length; o++) (r = i[o]) && ((r.__ = t), (e = "function" == typeof r.type ? k(r, e, n) : C(n, r, r, i, r.__e, e)));
                return e;
            }
            function O(t, e) {
                return (
                    (e = e || []),
                    null == t ||
                        "boolean" == typeof t ||
                        (Array.isArray(t)
                            ? t.some(function (t) {
                                  O(t, e);
                              })
                            : e.push(t)),
                    e
                );
            }
            function C(t, e, n, r, i, o) {
                var s, a, c;
                if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0);
                else if (null == n || i != o || null == i.parentNode)
                    t: if (null == o || o.parentNode !== t) t.appendChild(i), (s = null);
                    else {
                        for (a = o, c = 0; (a = a.nextSibling) && c < r.length; c += 2) if (a == i) break t;
                        t.insertBefore(i, o), (s = o);
                    }
                return void 0 !== s ? s : i.nextSibling;
            }
            function S(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : (t[e] = null == n ? "" : "number" != typeof n || d.test(e) ? n : n + "px");
            }
            function T(t, e, n, r, i) {
                var o;
                t: if ("style" === e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if (("string" == typeof r && (t.style.cssText = r = ""), r)) for (e in r) (n && e in n) || S(t.style, e, "");
                        if (n) for (e in n) (r && n[e] === r[e]) || S(t.style, e, n[e]);
                    }
                else if ("o" === e[0] && "n" === e[1])
                    (o = e !== (e = e.replace(/Capture$/, ""))),
                        (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
                        t.l || (t.l = {}),
                        (t.l[e + o] = n),
                        n ? r || t.addEventListener(e, o ? j : E, o) : t.removeEventListener(e, o ? j : E, o);
                else if ("dangerouslySetInnerHTML" !== e) {
                    if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t)
                        try {
                            t[e] = null == n ? "" : n;
                            break t;
                        } catch (t) {}
                    "function" == typeof n || (null != n && (!1 !== n || ("a" === e[0] && "r" === e[1])) ? t.setAttribute(e, n) : t.removeAttribute(e));
                }
            }
            function E(t) {
                this.l[t.type + !1](e.event ? e.event(t) : t);
            }
            function j(t) {
                this.l[t.type + !0](e.event ? e.event(t) : t);
            }
            function P(t, n, r, i, o, s, a, c, l) {
                var u,
                    d,
                    p,
                    g,
                    f,
                    _,
                    b,
                    w,
                    y,
                    k,
                    O,
                    C = n.type;
                if (void 0 !== n.constructor) return null;
                null != r.__h && ((l = r.__h), (c = n.__e = r.__e), (n.__h = null), (s = [c])), (u = e.__b) && u(n);
                try {
                    t: if ("function" == typeof C) {
                        if (
                            ((w = n.props),
                            (y = (u = C.contextType) && i[u.__c]),
                            (k = u ? (y ? y.props.value : u.__) : i),
                            r.__c
                                ? (b = (d = n.__c = r.__c).__ = d.__E)
                                : ("prototype" in C && C.prototype.render ? (n.__c = d = new C(w, k)) : ((n.__c = d = new v(w, k)), (d.constructor = C), (d.render = L)),
                                  y && y.sub(d),
                                  (d.props = w),
                                  d.state || (d.state = {}),
                                  (d.context = k),
                                  (d.__n = i),
                                  (p = d.__d = !0),
                                  (d.__h = [])),
                            null == d.__s && (d.__s = d.state),
                            null != C.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, C.getDerivedStateFromProps(w, d.__s))),
                            (g = d.props),
                            (f = d.state),
                            p)
                        )
                            null == C.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                        else {
                            if (
                                (null == C.getDerivedStateFromProps && w !== g && null != d.componentWillReceiveProps && d.componentWillReceiveProps(w, k),
                                (!d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(w, d.__s, k)) || n.__v === r.__v)
                            ) {
                                (d.props = w),
                                    (d.state = d.__s),
                                    n.__v !== r.__v && (d.__d = !1),
                                    (d.__v = n),
                                    (n.__e = r.__e),
                                    (n.__k = r.__k),
                                    n.__k.forEach(function (t) {
                                        t && (t.__ = n);
                                    }),
                                    d.__h.length && a.push(d);
                                break t;
                            }
                            null != d.componentWillUpdate && d.componentWillUpdate(w, d.__s, k),
                                null != d.componentDidUpdate &&
                                    d.__h.push(function () {
                                        d.componentDidUpdate(g, f, _);
                                    });
                        }
                        (d.context = k),
                            (d.props = w),
                            (d.state = d.__s),
                            (u = e.__r) && u(n),
                            (d.__d = !1),
                            (d.__v = n),
                            (d.__P = t),
                            (u = d.render(d.props, d.state, d.context)),
                            (d.state = d.__s),
                            null != d.getChildContext && (i = h(h({}, i), d.getChildContext())),
                            p || null == d.getSnapshotBeforeUpdate || (_ = d.getSnapshotBeforeUpdate(g, f)),
                            (O = null != u && u.type === m && null == u.key ? u.props.children : u),
                            x(t, Array.isArray(O) ? O : [O], n, r, i, o, s, a, c, l),
                            (d.base = n.__e),
                            (n.__h = null),
                            d.__h.length && a.push(d),
                            b && (d.__E = d.__ = null),
                            (d.__e = !1);
                    } else null == s && n.__v === r.__v ? ((n.__k = r.__k), (n.__e = r.__e)) : (n.__e = I(r.__e, n, r, i, o, s, a, l));
                    (u = e.diffed) && u(n);
                } catch (t) {
                    (n.__v = null), (l || null != s) && ((n.__e = c), (n.__h = !!l), (s[s.indexOf(c)] = null)), e.__e(t, n, r);
                }
            }
            function $(t, n) {
                e.__c && e.__c(n, t),
                    t.some(function (n) {
                        try {
                            (t = n.__h),
                                (n.__h = []),
                                t.some(function (t) {
                                    t.call(n);
                                });
                        } catch (t) {
                            e.__e(t, n.__v);
                        }
                    });
            }
            function I(e, n, r, i, o, s, a, c) {
                var u,
                    d,
                    h,
                    g = r.props,
                    f = n.props,
                    m = n.type,
                    v = 0;
                if (("svg" === m && (o = !0), null != s))
                    for (; v < s.length; v++)
                        if ((u = s[v]) && "setAttribute" in u == !!m && (m ? u.localName === m : 3 === u.nodeType)) {
                            (e = u), (s[v] = null);
                            break;
                        }
                if (null == e) {
                    if (null === m) return document.createTextNode(f);
                    (e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, f.is && f)), (s = null), (c = !1);
                }
                if (null === m) g === f || (c && e.data === f) || (e.data = f);
                else {
                    if (((s = s && t.call(e.childNodes)), (d = (g = r.props || l).dangerouslySetInnerHTML), (h = f.dangerouslySetInnerHTML), !c)) {
                        if (null != s) for (g = {}, v = 0; v < e.attributes.length; v++) g[e.attributes[v].name] = e.attributes[v].value;
                        (h || d) && ((h && ((d && h.__html == d.__html) || h.__html === e.innerHTML)) || (e.innerHTML = (h && h.__html) || ""));
                    }
                    if (
                        ((function (t, e, n, r, i) {
                            var o;
                            for (o in n) "children" === o || "key" === o || o in e || T(t, o, null, n[o], r);
                            for (o in e) (i && "function" != typeof e[o]) || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || T(t, o, e[o], n[o], r);
                        })(e, f, g, o, c),
                        h)
                    )
                        n.__k = [];
                    else if (((v = n.props.children), x(e, Array.isArray(v) ? v : [v], n, r, i, o && "foreignObject" !== m, s, a, s ? s[0] : r.__k && _(r, 0), c), null != s)) for (v = s.length; v--; ) null != s[v] && p(s[v]);
                    c ||
                        ("value" in f && void 0 !== (v = f.value) && (v !== e.value || ("progress" === m && !v) || ("option" === m && v !== g.value)) && T(e, "value", v, g.value, !1),
                        "checked" in f && void 0 !== (v = f.checked) && v !== e.checked && T(e, "checked", v, g.checked, !1));
                }
                return e;
            }
            function A(t, n, r) {
                try {
                    "function" == typeof t ? t(n) : (t.current = n);
                } catch (t) {
                    e.__e(t, r);
                }
            }
            function N(t, n, r) {
                var i, o;
                if ((e.unmount && e.unmount(t), (i = t.ref) && ((i.current && i.current !== t.__e) || A(i, null, n)), null != (i = t.__c))) {
                    if (i.componentWillUnmount)
                        try {
                            i.componentWillUnmount();
                        } catch (t) {
                            e.__e(t, n);
                        }
                    i.base = i.__P = null;
                }
                if ((i = t.__k)) for (o = 0; o < i.length; o++) i[o] && N(i[o], n, "function" != typeof t.type);
                r || null == t.__e || p(t.__e), (t.__e = t.__d = void 0);
            }
            function L(t, e, n) {
                return this.constructor(t, n);
            }
            function R(n, r, i) {
                var o, s, a;
                e.__ && e.__(n, r),
                    (s = (o = "function" == typeof i) ? null : (i && i.__k) || r.__k),
                    (a = []),
                    P(r, (n = ((!o && i) || r).__k = g(m, null, [n])), s || l, l, void 0 !== r.ownerSVGElement, !o && i ? [i] : s ? null : r.firstChild ? t.call(r.childNodes) : null, a, !o && i ? i : s ? s.__e : r.firstChild, o),
                    $(a, n);
            }
            function D(t, e) {
                var n = {
                    __c: (e = "__cC" + c++),
                    __: t,
                    Consumer: function (t, e) {
                        return t.children(e);
                    },
                    Provider: function (t) {
                        var n, r;
                        return (
                            this.getChildContext ||
                                ((n = []),
                                ((r = {})[e] = this),
                                (this.getChildContext = function () {
                                    return r;
                                }),
                                (this.shouldComponentUpdate = function (t) {
                                    this.props.value !== t.value && n.some(w);
                                }),
                                (this.sub = function (t) {
                                    n.push(t);
                                    var e = t.componentWillUnmount;
                                    t.componentWillUnmount = function () {
                                        n.splice(n.indexOf(t), 1), e && e.call(t);
                                    };
                                })),
                            t.children
                        );
                    },
                };
                return (n.Provider.__ = n.Consumer.contextType = n);
            }
            (t = u.slice),
                (e = {
                    __e: function (t, e, n, r) {
                        for (var i, o, s; (e = e.__); )
                            if ((i = e.__c) && !i.__)
                                try {
                                    if (
                                        ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), (s = i.__d)),
                                        null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), (s = i.__d)),
                                        s)
                                    )
                                        return (i.__E = i);
                                } catch (e) {
                                    t = e;
                                }
                        throw t;
                    },
                }),
                (r = 0),
                (i = function (t) {
                    return null != t && void 0 === t.constructor;
                }),
                (v.prototype.setState = function (t, e) {
                    var n;
                    (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = h({}, this.state))),
                        "function" == typeof t && (t = t(h({}, n), this.props)),
                        t && h(n, t),
                        null != t && this.__v && (e && this.__h.push(e), w(this));
                }),
                (v.prototype.forceUpdate = function (t) {
                    this.__v && ((this.__e = !0), t && this.__h.push(t), w(this));
                }),
                (v.prototype.render = m),
                (o = []),
                (s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
                (y.__r = 0),
                (c = 0);
            var W = n(141);
            function M(t) {
                const { randomizeOptions: e, options: n } = t;
                return e && n && n.length > 1 ? Object.assign(Object.assign({}, t), { options: (0, W.TV)(n) }) : t;
            }
            function U(t) {
                return `getsitecontrol-${t}`;
            }
            function V(t) {
                return `[data-getsitecontrol-inline~="${t}"]`;
            }
            var F =
                Number.isNaN ||
                function (t) {
                    return "number" == typeof t && t != t;
                };
            function H(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++) if (!((r = t[n]) === (i = e[n]) || (F(r) && F(i)))) return !1;
                var r, i;
                return !0;
            }
            function z(t, e) {
                void 0 === e && (e = H);
                var n = null;
                function r() {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    if (n && n.lastThis === this && e(r, n.lastArgs)) return n.lastResult;
                    var o = t.apply(this, r);
                    return (n = { lastResult: o, lastArgs: r, lastThis: this }), o;
                }
                return (
                    (r.clear = function () {
                        n = null;
                    }),
                    r
                );
            }
            function B(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function G(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? q(Object(n), !0).forEach(function (e) {
                              B(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : q(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function J(t) {
                return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
            }
            var Y = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
                K = function () {
                    return Math.random().toString(36).substring(7).split("").join(".");
                },
                X = {
                    INIT: "@@redux/INIT" + K(),
                    REPLACE: "@@redux/REPLACE" + K(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + K();
                    },
                };
            function Z(t) {
                if ("object" != typeof t || null === t) return !1;
                for (var e = t; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
                return Object.getPrototypeOf(t) === e;
            }
            function Q(t, e, n) {
                var r;
                if (("function" == typeof e && "function" == typeof n) || ("function" == typeof n && "function" == typeof arguments[3])) throw new Error(J(0));
                if (("function" == typeof e && void 0 === n && ((n = e), (e = void 0)), void 0 !== n)) {
                    if ("function" != typeof n) throw new Error(J(1));
                    return n(Q)(t, e);
                }
                if ("function" != typeof t) throw new Error(J(2));
                var i = t,
                    o = e,
                    s = [],
                    a = s,
                    c = !1;
                function l() {
                    a === s && (a = s.slice());
                }
                function u() {
                    if (c) throw new Error(J(3));
                    return o;
                }
                function d(t) {
                    if ("function" != typeof t) throw new Error(J(4));
                    if (c) throw new Error(J(5));
                    var e = !0;
                    return (
                        l(),
                        a.push(t),
                        function () {
                            if (e) {
                                if (c) throw new Error(J(6));
                                (e = !1), l();
                                var n = a.indexOf(t);
                                a.splice(n, 1), (s = null);
                            }
                        }
                    );
                }
                function h(t) {
                    if (!Z(t)) throw new Error(J(7));
                    if (void 0 === t.type) throw new Error(J(8));
                    if (c) throw new Error(J(9));
                    try {
                        (c = !0), (o = i(o, t));
                    } finally {
                        c = !1;
                    }
                    for (var e = (s = a), n = 0; n < e.length; n++) (0, e[n])();
                    return t;
                }
                function p(t) {
                    if ("function" != typeof t) throw new Error(J(10));
                    (i = t), h({ type: X.REPLACE });
                }
                function g() {
                    var t,
                        e = d;
                    return (
                        ((t = {
                            subscribe: function (t) {
                                if ("object" != typeof t || null === t) throw new Error(J(11));
                                function n() {
                                    t.next && t.next(u());
                                }
                                return n(), { unsubscribe: e(n) };
                            },
                        })[Y] = function () {
                            return this;
                        }),
                        t
                    );
                }
                return h({ type: X.INIT }), ((r = { dispatch: h, subscribe: d, getState: u, replaceReducer: p })[Y] = g), r;
            }
            function tt() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return 0 === e.length
                    ? function (t) {
                          return t;
                      }
                    : 1 === e.length
                    ? e[0]
                    : e.reduce(function (t, e) {
                          return function () {
                              return t(e.apply(void 0, arguments));
                          };
                      });
            }
            function et(t) {
                return function (e) {
                    var n = e.dispatch,
                        r = e.getState;
                    return function (e) {
                        return function (i) {
                            return "function" == typeof i ? i(n, r, t) : e(i);
                        };
                    };
                };
            }
            var nt = et();
            nt.withExtraArgument = et;
            const rt = nt;
            var it = 0;
            function ot(t, n, r, i, o) {
                var s,
                    a,
                    c = {};
                for (a in n) "ref" == a ? (s = n[a]) : (c[a] = n[a]);
                var l = { type: t, props: c, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --it, __source: o, __self: i };
                if ("function" == typeof t && (s = t.defaultProps)) for (a in s) void 0 === c[a] && (c[a] = s[a]);
                return e.vnode && e.vnode(l), l;
            }
            var st,
                at,
                ct,
                lt = 0,
                ut = [],
                dt = e.__b,
                ht = e.__r,
                pt = e.diffed,
                gt = e.__c,
                ft = e.unmount;
            function mt(t, n) {
                e.__h && e.__h(at, t, lt || n), (lt = 0);
                var r = at.__H || (at.__H = { __: [], __h: [] });
                return t >= r.__.length && r.__.push({}), r.__[t];
            }
            function vt(t) {
                return (
                    (lt = 1),
                    (function (t, e, n) {
                        var r = mt(st++, 2);
                        return (
                            (r.t = t),
                            r.__c ||
                                ((r.__ = [
                                    n ? n(e) : Et(void 0, e),
                                    function (t) {
                                        var e = r.t(r.__[0], t);
                                        r.__[0] !== e && ((r.__ = [e, r.__[1]]), r.__c.setState({}));
                                    },
                                ]),
                                (r.__c = at)),
                            r.__
                        );
                    })(Et, t)
                );
            }
            function _t(t, n) {
                var r = mt(st++, 3);
                !e.__s && Tt(r.__H, n) && ((r.__ = t), (r.__H = n), at.__H.__h.push(r));
            }
            function bt(t) {
                return (
                    (lt = 5),
                    wt(function () {
                        return { current: t };
                    }, [])
                );
            }
            function wt(t, e) {
                var n = mt(st++, 7);
                return Tt(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
            }
            function yt(t, e) {
                return (
                    (lt = 8),
                    wt(function () {
                        return t;
                    }, e)
                );
            }
            function xt(t) {
                var e = at.context[t.__c],
                    n = mt(st++, 9);
                return (n.c = t), e ? (null == n.__ && ((n.__ = !0), e.sub(at)), e.props.value) : t.__;
            }
            function kt() {
                for (var t; (t = ut.shift()); )
                    if (t.__P)
                        try {
                            t.__H.__h.forEach(Ct), t.__H.__h.forEach(St), (t.__H.__h = []);
                        } catch (r) {
                            (t.__H.__h = []), e.__e(r, t.__v);
                        }
            }
            (e.__b = function (t) {
                (at = null), dt && dt(t);
            }),
                (e.__r = function (t) {
                    ht && ht(t), (st = 0);
                    var e = (at = t.__c).__H;
                    e && (e.__h.forEach(Ct), e.__h.forEach(St), (e.__h = []));
                }),
                (e.diffed = function (t) {
                    pt && pt(t);
                    var n = t.__c;
                    n &&
                        n.__H &&
                        n.__H.__h.length &&
                        ((1 !== ut.push(n) && ct === e.requestAnimationFrame) ||
                            (
                                (ct = e.requestAnimationFrame) ||
                                function (t) {
                                    var e,
                                        n = function () {
                                            clearTimeout(r), Ot && cancelAnimationFrame(e), setTimeout(t);
                                        },
                                        r = setTimeout(n, 100);
                                    Ot && (e = requestAnimationFrame(n));
                                }
                            )(kt)),
                        (at = null);
                }),
                (e.__c = function (t, n) {
                    n.some(function (t) {
                        try {
                            t.__h.forEach(Ct),
                                (t.__h = t.__h.filter(function (t) {
                                    return !t.__ || St(t);
                                }));
                        } catch (a) {
                            n.some(function (t) {
                                t.__h && (t.__h = []);
                            }),
                                (n = []),
                                e.__e(a, t.__v);
                        }
                    }),
                        gt && gt(t, n);
                }),
                (e.unmount = function (t) {
                    ft && ft(t);
                    var n,
                        r = t.__c;
                    r &&
                        r.__H &&
                        (r.__H.__.forEach(function (t) {
                            try {
                                Ct(t);
                            } catch (t) {
                                n = t;
                            }
                        }),
                        n && e.__e(n, r.__v));
                });
            var Ot = "function" == typeof requestAnimationFrame;
            function Ct(t) {
                var e = at,
                    n = t.__c;
                "function" == typeof n && ((t.__c = void 0), n()), (at = e);
            }
            function St(t) {
                var e = at;
                (t.__c = t.__()), (at = e);
            }
            function Tt(t, e) {
                return (
                    !t ||
                    t.length !== e.length ||
                    e.some(function (e, n) {
                        return e !== t[n];
                    })
                );
            }
            function Et(t, e) {
                return "function" == typeof e ? e(t) : e;
            }
            const jt = D(null);
            function Pt({ store: t, children: e }) {
                const n = wt(() => ({ store: t }), [t]);
                return ot(jt.Provider, Object.assign({ value: n }, { children: e }), void 0);
            }
            function $t() {
                return xt(jt);
            }
            const It = (t, e) => t === e;
            function At(t, e) {
                return { type: t, payload: e };
            }
            const Nt = {};
            function Lt(t, e = !0) {
                return At("widgets/SET_ANIMATING", { id: t, animating: e });
            }
            function Rt(t, e) {
                return At("widgets/SET_NOTIFICATION", { id: t, notification: e });
            }
            function Dt(t, e) {
                return At("widgets/UPDATE_FORM_STATE", { id: t, formState: e });
            }
            function Wt(t, e, n) {
                return At("widgets/SET_PENDING_ACTIONS", { id: t, actions: e, origin: n });
            }
            function Mt(t = Nt, e) {
                var n;
                if ("widgets/CREATE_OR_UPDATE" === e.type) return Object.assign(Object.assign({}, t), { [e.payload.id]: Object.assign(Object.assign({}, e.payload), { show: !0 }) });
                const r = (null === (n = e.payload) || void 0 === n ? void 0 : n.id) && t[e.payload.id];
                if (r) {
                    const n = (function (t, e) {
                        switch (e.type) {
                            case "widgets/RESET":
                                return Object.assign(Object.assign({}, t), { activePage: 0, pageStack: [], formState: { data: {} } });
                            case "widgets/SET_VISIBILITY":
                                return Object.assign(Object.assign({}, t), { show: e.payload.show });
                            case "widgets/SET_ANIMATING":
                                return Object.assign(Object.assign({}, t), { animating: e.payload.animating });
                            case "widgets/SET_NOTIFICATION":
                                return Object.assign(Object.assign({}, t), { notification: e.payload.notification });
                            case "widgets/UPDATE_FORM_STATE":
                                const { formState: n } = e.payload,
                                    r = n.data ? Object.keys(n.data).reduce((t, e) => ((t[e] = Object.assign(Object.assign({}, t[e]), n.data[e])), t), Object.assign({}, t.formState.data)) : t.formState.data;
                                return Object.assign(Object.assign({}, t), { formState: Object.assign(Object.assign(Object.assign({}, t.formState), n), { data: r }) });
                            case "widgets/SET_FORM_FIELD_VALUE":
                                return Object.assign(Object.assign({}, t), {
                                    formState: Object.assign(Object.assign({}, t.formState), { data: Object.assign(Object.assign({}, t.formState.data), { [e.payload.fieldName]: e.payload.value }), pristine: !1 }),
                                });
                            case "widgets/GO_TO_PREV_PAGE":
                                if (t.pageStack.length > 0) {
                                    const e = [...t.pageStack],
                                        n = Math.max(e.pop(), 0);
                                    return Object.assign(Object.assign({}, t), { activePage: n, pageStack: e });
                                }
                                return t;
                            case "widgets/GO_TO_NEXT_PAGE":
                                const i = Math.min(t.activePage + 1, t.pages.length - 1);
                                return t.activePage !== i ? Object.assign(Object.assign({}, t), { activePage: i, pageStack: void 0 === t.activePage ? t.pageStack : [...t.pageStack, t.activePage] }) : t;
                            case "widgets/SET_PENDING_ACTIONS":
                                return Object.assign(Object.assign({}, t), { pendingActions: { actions: e.payload.actions, origin: e.payload.origin } });
                            default:
                                return t;
                        }
                    })(r, e);
                    if (r !== n) return Object.assign(Object.assign({}, t), { [e.payload.id]: n });
                }
                return t;
            }
            const Ut = {};
            function Vt(t = Ut, e) {
                return "templateTags/SET" === e.type ? Object.assign(Object.assign({}, t), e.payload) : t;
            }
            const Ft = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || tt,
                Ht = (t) =>
                    Q(
                        (function (t) {
                            for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                                var i = e[r];
                                "function" == typeof t[i] && (n[i] = t[i]);
                            }
                            var o,
                                s = Object.keys(n);
                            try {
                                !(function (t) {
                                    Object.keys(t).forEach(function (e) {
                                        var n = t[e];
                                        if (void 0 === n(void 0, { type: X.INIT })) throw new Error(J(12));
                                        if (void 0 === n(void 0, { type: X.PROBE_UNKNOWN_ACTION() })) throw new Error(J(13));
                                    });
                                })(n);
                            } catch (l) {
                                o = l;
                            }
                            return function (t, e) {
                                if ((void 0 === t && (t = {}), o)) throw o;
                                for (var r = !1, i = {}, a = 0; a < s.length; a++) {
                                    var c = s[a],
                                        l = n[c],
                                        u = t[c],
                                        d = l(u, e);
                                    if (void 0 === d) throw (e && e.type, new Error(J(14)));
                                    (i[c] = d), (r = r || d !== u);
                                }
                                return (r = r || s.length !== Object.keys(t).length) ? i : t;
                            };
                        })({ widgets: Mt, templateTags: Vt }),
                        Ft(
                            (function () {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                return function (t) {
                                    return function () {
                                        var n = t.apply(void 0, arguments),
                                            r = function () {
                                                throw new Error(J(15));
                                            },
                                            i = {
                                                getState: n.getState,
                                                dispatch: function () {
                                                    return r.apply(void 0, arguments);
                                                },
                                            },
                                            o = e.map(function (t) {
                                                return t(i);
                                            });
                                        return (r = tt.apply(void 0, o)(n.dispatch)), G(G({}, n), {}, { dispatch: r });
                                    };
                                };
                            })(rt.withExtraArgument(t))
                        )
                    ),
                zt = () =>
                    (function () {
                        const { store: t } = $t();
                        return t;
                    })().dispatch,
                Bt = function (t, e = It) {
                    const { store: n } = $t(),
                        r = bt(t),
                        i = bt(e),
                        [o, s] = vt(() => r.current(n.getState()));
                    return (
                        _t(
                            () =>
                                n.subscribe(() => {
                                    s((t) => {
                                        const e = r.current(n.getState());
                                        return i.current(t, e) ? t : e;
                                    });
                                }),
                            [n]
                        ),
                        o
                    );
                };
            function qt(t, e) {
                return t.widgets[e];
            }
            const Gt = z(function ({ id: t, name: e, pages: n, formState: r }) {
                    const i = n
                        .map((t) => {
                            var e;
                            return (null === (e = t.data) || void 0 === e ? void 0 : e.fields) || [];
                        })
                        .reduce((t, e) => t.concat(e), [])
                        .reduce((t, e) => {
                            const n = (function (t, e) {
                                const n = (null == e ? void 0 : e.value) || [];
                                switch (t.type) {
                                    case "select":
                                    case "checkbox":
                                    case "radio":
                                        return t.options
                                            .filter((t) => -1 !== n.indexOf(t.name))
                                            .map((t) => t.label)
                                            .join();
                                    case "flag":
                                        return t.label;
                                    default:
                                        return n.join();
                                }
                            })(e, r.data[e.name]);
                            return (t[e.name] = "" != n ? n : void 0), t;
                        }, {});
                    return Object.assign(Object.assign({}, i), { $widgetId: `${t}`, $widgetName: e });
                }),
                Jt = z((t, e) => Object.assign(Object.assign({}, t), e));
            function Yt(t, e) {
                const { templateTags: n, widgets: r } = t;
                return Jt(n, Gt(r[e]));
            }
            function Kt(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function Xt(t, e) {
                for (var n in t) if ("__source" !== n && !(n in e)) return !0;
                for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
                return !1;
            }
            function Zt(t) {
                this.props = t;
            }
            function Qt(t, e) {
                function n(t) {
                    var n = this.props.ref,
                        r = n == t.ref;
                    return !r && n && (n.call ? n(null) : (n.current = null)), e ? !e(this.props, t) || !r : Xt(this.props, t);
                }
                function r(e) {
                    return (this.shouldComponentUpdate = n), g(t, e);
                }
                return (r.displayName = "Memo(" + (t.displayName || t.name) + ")"), (r.prototype.isReactComponent = !0), (r.__f = !0), r;
            }
            ((Zt.prototype = new v()).isPureReactComponent = !0),
                (Zt.prototype.shouldComponentUpdate = function (t, e) {
                    return Xt(this.props, t) || Xt(this.state, e);
                });
            var te = e.__b;
            e.__b = function (t) {
                t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)), te && te(t);
            };
            var ee = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
            function ne(t) {
                function e(e) {
                    var n = Kt({}, e);
                    return delete n.ref, t(n, e.ref || null);
                }
                return (e.$$typeof = ee), (e.render = e), (e.prototype.isReactComponent = e.__f = !0), (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"), e;
            }
            var re = e.__e;
            e.__e = function (t, e, n, r) {
                if (t.then) for (var i, o = e; (o = o.__); ) if ((i = o.__c) && i.__c) return null == e.__e && ((e.__e = n.__e), (e.__k = n.__k)), i.__c(t, e);
                re(t, e, n, r);
            };
            var ie = e.unmount;
            function oe() {
                (this.__u = 0), (this.t = null), (this.__b = null);
            }
            function se(t) {
                var e = t.__.__c;
                return e && e.__e && e.__e(t);
            }
            function ae() {
                (this.u = null), (this.o = null);
            }
            (e.unmount = function (t) {
                var e = t.__c;
                e && e.__R && e.__R(), e && !0 === t.__h && (t.type = null), ie && ie(t);
            }),
                ((oe.prototype = new v()).__c = function (t, e) {
                    var n = e.__c,
                        r = this;
                    null == r.t && (r.t = []), r.t.push(n);
                    var i = se(r.__v),
                        o = !1,
                        s = function () {
                            o || ((o = !0), (n.__R = null), i ? i(a) : a());
                        };
                    n.__R = s;
                    var a = function () {
                            if (!--r.__u) {
                                if (r.state.__e) {
                                    var t = r.state.__e;
                                    r.__v.__k[0] = (function t(e, n, r) {
                                        return (
                                            e &&
                                                ((e.__v = null),
                                                (e.__k =
                                                    e.__k &&
                                                    e.__k.map(function (e) {
                                                        return t(e, n, r);
                                                    })),
                                                e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = r))),
                                            e
                                        );
                                    })(t, t.__c.__P, t.__c.__O);
                                }
                                var e;
                                for (r.setState({ __e: (r.__b = null) }); (e = r.t.pop()); ) e.forceUpdate();
                            }
                        },
                        c = !0 === e.__h;
                    r.__u++ || c || r.setState({ __e: (r.__b = r.__v.__k[0]) }), t.then(s, s);
                }),
                (oe.prototype.componentWillUnmount = function () {
                    this.t = [];
                }),
                (oe.prototype.render = function (t, e) {
                    if (this.__b) {
                        if (this.__v.__k) {
                            var n = document.createElement("div"),
                                r = this.__v.__k[0].__c;
                            this.__v.__k[0] = (function t(e, n, r) {
                                return (
                                    e &&
                                        (e.__c &&
                                            e.__c.__H &&
                                            (e.__c.__H.__.forEach(function (t) {
                                                "function" == typeof t.__c && t.__c();
                                            }),
                                            (e.__c.__H = null)),
                                        null != (e = Kt({}, e)).__c && (e.__c.__P === r && (e.__c.__P = n), (e.__c = null)),
                                        (e.__k =
                                            e.__k &&
                                            e.__k.map(function (e) {
                                                return t(e, n, r);
                                            }))),
                                    e
                                );
                            })(this.__b, n, (r.__O = r.__P));
                        }
                        this.__b = null;
                    }
                    var i = e.__e && g(m, null, t.fallback);
                    return i && (i.__h = null), [g(m, null, e.__e ? null : t.children), i];
                });
            var ce = function (t, e, n) {
                if ((++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size)))
                    for (n = t.u; n; ) {
                        for (; n.length > 3; ) n.pop()();
                        if (n[1] < n[0]) break;
                        t.u = n = n[2];
                    }
            };
            function le(t) {
                return (
                    (this.getChildContext = function () {
                        return t.context;
                    }),
                    t.children
                );
            }
            function ue(t) {
                var e = this,
                    n = t.i;
                (e.componentWillUnmount = function () {
                    R(null, e.l), (e.l = null), (e.i = null);
                }),
                    e.i && e.i !== n && e.componentWillUnmount(),
                    t.__v
                        ? (e.l ||
                              ((e.i = n),
                              (e.l = {
                                  nodeType: 1,
                                  parentNode: n,
                                  childNodes: [],
                                  appendChild: function (t) {
                                      this.childNodes.push(t), e.i.appendChild(t);
                                  },
                                  insertBefore: function (t, n) {
                                      this.childNodes.push(t), e.i.appendChild(t);
                                  },
                                  removeChild: function (t) {
                                      this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1), e.i.removeChild(t);
                                  },
                              })),
                          R(g(le, { context: e.context }, t.__v), e.l))
                        : e.l && e.componentWillUnmount();
            }
            function de(t, e) {
                var n = g(ue, { __v: t, i: e });
                return (n.containerInfo = e), n;
            }
            ((ae.prototype = new v()).__e = function (t) {
                var e = this,
                    n = se(e.__v),
                    r = e.o.get(t);
                return (
                    r[0]++,
                    function (i) {
                        var o = function () {
                            e.props.revealOrder ? (r.push(i), ce(e, t, r)) : i();
                        };
                        n ? n(o) : o();
                    }
                );
            }),
                (ae.prototype.render = function (t) {
                    (this.u = null), (this.o = new Map());
                    var e = O(t.children);
                    t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
                    for (var n = e.length; n--; ) this.o.set(e[n], (this.u = [1, 0, this.u]));
                    return t.children;
                }),
                (ae.prototype.componentDidUpdate = ae.prototype.componentDidMount = function () {
                    var t = this;
                    this.o.forEach(function (e, n) {
                        ce(t, n, e);
                    });
                });
            var he = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
                pe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                ge = "undefined" != typeof document,
                fe = function (t) {
                    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t);
                };
            (v.prototype.isReactComponent = {}),
                ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
                    Object.defineProperty(v.prototype, t, {
                        configurable: !0,
                        get: function () {
                            return this["UNSAFE_" + t];
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
                        },
                    });
                });
            var me = e.event;
            function ve() {}
            function _e() {
                return this.cancelBubble;
            }
            function be() {
                return this.defaultPrevented;
            }
            e.event = function (t) {
                return me && (t = me(t)), (t.persist = ve), (t.isPropagationStopped = _e), (t.isDefaultPrevented = be), (t.nativeEvent = t);
            };
            var we = {
                    configurable: !0,
                    get: function () {
                        return this.class;
                    },
                },
                ye = e.vnode;
            e.vnode = function (t) {
                var e = t.type,
                    n = t.props,
                    r = n;
                if ("string" == typeof e) {
                    var i = -1 === e.indexOf("-");
                    for (var o in ((r = {}), n)) {
                        var s = n[o];
                        (ge && "children" === o && "noscript" === e) ||
                            ("value" === o && "defaultValue" in n && null == s) ||
                            ("defaultValue" === o && "value" in n && null == n.value
                                ? (o = "value")
                                : "download" === o && !0 === s
                                ? (s = "")
                                : /ondoubleclick/i.test(o)
                                ? (o = "ondblclick")
                                : /^onchange(textarea|input)/i.test(o + e) && !fe(n.type)
                                ? (o = "oninput")
                                : /^onfocus$/i.test(o)
                                ? (o = "onfocusin")
                                : /^onblur$/i.test(o)
                                ? (o = "onfocusout")
                                : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
                                ? (o = o.toLowerCase())
                                : i && pe.test(o)
                                ? (o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                                : null === s && (s = void 0),
                            (r[o] = s));
                    }
                    "select" == e &&
                        r.multiple &&
                        Array.isArray(r.value) &&
                        (r.value = O(n.children).forEach(function (t) {
                            t.props.selected = -1 != r.value.indexOf(t.props.value);
                        })),
                        "select" == e &&
                            null != r.defaultValue &&
                            (r.value = O(n.children).forEach(function (t) {
                                t.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(t.props.value) : r.defaultValue == t.props.value;
                            })),
                        (t.props = r),
                        n.class != n.className && ((we.enumerable = "className" in n), null != n.className && (r.class = n.className), Object.defineProperty(r, "className", we));
                }
                (t.$$typeof = he), ye && ye(t);
            };
            var xe = e.__r;
            e.__r = function (t) {
                xe && xe(t), t.__c;
            };
            var ke = n(118),
                Oe = n(805);
            const Ce = [
                    "click",
                    "contextmenu",
                    "dblclick",
                    "mousedown",
                    "mouseenter",
                    "mouseleave",
                    "mousemove",
                    "mouseover",
                    "mouseout",
                    "mouseup",
                    "keydown",
                    "keypress",
                    "keyup",
                    "blur",
                    "change",
                    "focus",
                    "focusin",
                    "focusout",
                    "input",
                    "invalid",
                    "reset",
                    "search",
                    "select",
                    "submit",
                    "drag",
                    "dragend",
                    "dragenter",
                    "dragleave",
                    "dragover",
                    "dragstart",
                    "drop",
                    "copy",
                    "cut",
                    "paste",
                    "mousewheel",
                    "wheel",
                    "touchcancel",
                    "touchend",
                    "touchmove",
                    "touchstart",
                ],
                Se = () => {},
                Te = () => {},
                Ee = new Map();
            function je(t) {
                return Ee.has(t) || Ee.set(t, ((t) => window.matchMedia(t.replace(/@media\s*/gi, "")))(t)), Ee.get(t);
            }
            const Pe = (t) => (t && document.querySelector(t)) || null,
                $e = D(void 0);
            function Ie({ children: t, widgetId: e }) {
                const n = wt(() => ({ widgetId: e }), [e]);
                return ot($e.Provider, Object.assign({ value: n }, { children: t }), void 0);
            }
            var Ae = n(939);
            const Ne = ne(function (t, e) {
                const { children: n } = t,
                    r = (0, Ae._T)(t, ["children"]);
                return ot("getsitecontrol-widget", Object.assign({}, r, { ref: e }, { children: n }), void 0);
            });
            class Le extends v {
                getChildContext() {
                    return this.props.context;
                }
                render() {
                    return this.props.children;
                }
            }
            class Re extends v {
                shouldComponentUpdate(t) {
                    return this._update(t), !0;
                }
                componentDidMount() {
                    (this._shadow = this.base.attachShadow({ mode: "open" })), this._update(this.props);
                }
                componentWillUnmount() {
                    this._update(this.props, !0);
                }
                render() {
                    const t = this.props,
                        { host: e, children: n, hostRef: r } = t,
                        i = (0, Ae._T)(t, ["host", "children", "hostRef"]);
                    return ot(e, Object.assign({}, i, { ref: r }), void 0);
                }
                _update(t, e = !1) {
                    R(e ? null : ot(Le, Object.assign({ context: this.context }, { children: t.children }), void 0), this._shadow);
                }
            }
            var De = n(681),
                We = n.n(De);
            const Me = () => xt($e),
                Ue = {
                    flyby: function (t) {
                        return ".root {\n  position: fixed;\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  min-height: 0;\n  left: 0;\n  right: 0;\n  bottom: 10px;\n  margin: 0 auto;\n}\n@media screen and (min-width: 960px) {\n  .root {\n    left: 32px;\n    right: auto;\n    bottom: 32px;\n    margin: 0;\n  }\n}\n.container {\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n  border-radius: 8px;\n}\n.back,\n.close,\n.caret {\n  padding: 20px;\n  position: absolute;\n  z-index: 1;\n}\n.back {\n  padding-right: 10px;\n  top: 0;\n  right: 41px;\n}\n.close {\n  top: 0;\n  right: 0;\n}\n.back + .close {\n  padding-left: 10px;\n}\n";
                    },
                    bar: function (t) {
                        return ".root {\n  position: fixed;\n  margin: 0 auto;\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  min-height: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n}\n.body {\n  margin: 0 auto;\n  width: 100%;\n  min-width: 0;\n}\n@media screen and (min-width: 960px) {\n  .body {\n    width: auto;\n  }\n}\n.back,\n.close,\n.caret {\n  padding: 16px;\n  position: absolute;\n  z-index: 1;\n}\n.back {\n  padding-right: 8px;\n  top: 0;\n  right: 35px;\n}\n.close {\n  top: 0;\n  right: 0;\n}\n.back + .close {\n  padding-left: 8px;\n}\n@media screen and (min-width: 960px) {\n  .back {\n    top: auto;\n    right: auto;\n    left: 0;\n    padding: 20px;\n  }\n}\n@media screen and (min-width: 960px) {\n  .close {\n    top: auto;\n    padding: 20px;\n  }\n  .back + .close {\n    padding-left: 20px;\n  }\n}\n";
                    },
                    panel: function (t) {
                        return ".root {\n  position: fixed;\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  min-height: 0;\n  transition: transform 200ms;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n@media screen and (min-width: 960px) {\n  .root {\n    left: 32px;\n    right: auto;\n    margin: 0;\n  }\n}\n.root.collapsed {\n  transform: translateY(100%) translateY(-60px);\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  position: relative;\n  overflow: var(--root-overflow);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n  border-radius: 8px 8px 0 0;\n}\n.header {\n  height: 60px;\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n  cursor: pointer;\n}\n.header .title {\n  flex-grow: 9999;\n  margin: 0 12px 0 28px;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.body {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n}\n.back,\n.close,\n.caret {\n  padding: 16px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.back {\n  padding-right: 8px;\n}\n.back + .close {\n  padding-left: 8px;\n}\n.caret {\n  padding-right: 28px;\n}\n.back + .caret {\n  padding-left: 8px;\n}\n";
                    },
                    modal: function (t) {
                        return ".overlay {\n  contain: content;\n  z-index: 2147483636;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  outline: 0;\n  line-height: 1.25;\n  -webkit-overflow-scrolling: touch;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 32px 0;\n  align-items: center;\n}\n.root {\n  margin: auto;\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  min-height: 0;\n}\n.container {\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n  border-radius: 8px;\n}\n.back,\n.close,\n.caret {\n  padding: 20px;\n  position: absolute;\n  z-index: 1;\n}\n.back {\n  padding-right: 10px;\n  top: 0;\n  right: 41px;\n}\n.close {\n  top: 0;\n  right: 0;\n}\n.back + .close {\n  padding-left: 10px;\n}\n";
                    },
                    fullscreen: function (t) {
                        var e = ".root {\n  contain: content;\n  z-index: 2147483636;\n  ";
                        return (
                            t.inline ? (e += "\n  position: absolute;\n  ") : (e += "\n  position: fixed;\n  "),
                            (e +=
                                "\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  outline: 0;\n  line-height: 1.25;\n  -webkit-overflow-scrolling: touch;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.container {\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n}\n.body {\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  margin: 0 auto;\n}\n@media screen and (min-width: 960px) {\n  .body {\n    margin: auto;\n  }\n}\n.back,\n.close,\n.caret {\n  padding: 20px;\n  position: absolute;\n  z-index: 1;\n}\n.back {\n  padding-right: 10px;\n  top: 0;\n  right: 41px;\n}\n.close {\n  top: 0;\n  right: 0;\n}\n.back + .close {\n  padding-left: 10px;\n}\n") +
                                "\n"
                        );
                    },
                    sidebar: function (t) {
                        return ".root {\n  position: fixed;\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n  min-height: 0;\n  overflow-y: auto;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.container {\n  display: flex;\n  min-height: 100%;\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n}\n.body {\n  width: 100%;\n  margin: 0 auto;\n}\n@media screen and (min-width: 960px) {\n  .body {\n    margin: auto;\n  }\n}\n.back,\n.close,\n.caret {\n  padding: 16px;\n  position: absolute;\n  z-index: 1;\n}\n.back {\n  padding-right: 8px;\n  top: 0;\n  right: 35px;\n}\n.close {\n  top: 0;\n  right: 0;\n}\n.back + .close {\n  padding-left: 8px;\n}\n";
                    },
                    inline: function (t) {
                        return ":host {\n  display: block;\n}\n.root {\n  width: var(--root-width);\n  max-width: var(--root-max-width);\n}\n.container {\n  position: relative;\n  overflow: var(--root-overflow);\n  padding-top: var(--root-padding-top);\n  padding-right: var(--root-padding-right);\n  padding-bottom: var(--root-padding-bottom);\n  padding-left: var(--root-padding-left);\n  background-color: var(--root-bg);\n  color: var(--root-color);\n}\n.back {\n  position: absolute;\n  padding: 20px;\n  z-index: 1;\n  top: 0;\n  right: 0;\n}\n";
                    },
                };
            const Ve = ({ links: t }) => ot(m, { children: t.map((t, e) => ot("link", { rel: "stylesheet", href: t }, e)) }, void 0),
                Fe = Qt(function ({ layout: t, css: e }) {
                    const { css: n, links: r } = (function (t) {
                        const e = [];
                        return { css: t.replace(/@import\s+url\(['"](:?.*fonts\.googleapis\.com.*)['"]\);/gi, (t, n) => (e.push(n), "")), links: e };
                    })(
                        (function (t, e = "") {
                            let n = e.replace(/:host(?:\s*\((.*)\))?/g, ":host$1");
                            return "modal" === t && ((n = n.replace(/(:host\.(?:enter|leave))\s+\.container/g, "$1")), (n = n.replace(/:host\s*{/g, ".overlay {"))), n.replace(/:host/g, ".root");
                        })(t, e)
                    );
                    return ot(m, { children: [r.length > 0 && de(ot(Ve, { links: r }, void 0), document.head), r.length > 0 && ot(Ve, { links: r }, void 0), ot("style", { children: n }, void 0)] }, void 0);
                }),
                He = "(max-width: 960px)",
                ze = [He];
            function Be(t) {
                var e;
                const { style: n, activePage: r, pages: i } = t,
                    o = null === (e = i[r]) || void 0 === e ? void 0 : e.style,
                    s = ((t) => {
                        const [e, n] = vt(() => t.reduce((t, e) => ((t[e] = je(e).matches), t), {}));
                        return (
                            _t(() => {
                                const e = t.map((t) => je(t));
                                let r = !0;
                                const i = () => {
                                    if (!r) return;
                                    const i = e.reduce((e, n, r) => ((e[t[r]] = n.matches), e), {});
                                    n(i);
                                };
                                return (
                                    e.forEach((t) => t.addListener(i)),
                                    () => {
                                        (r = !1), e.forEach((t) => t.removeListener(i));
                                    }
                                );
                            }, [t]),
                            e
                        );
                    })(ze)[He]
                        ? "mobile"
                        : "desktop";
                return wt(
                    () =>
                        (function (t, ...e) {
                            return [...e]
                                .flatMap((e) => {
                                    var { media: n } = e;
                                    return [(0, Ae._T)(e, ["media"]), null == n ? void 0 : n[t]];
                                })
                                .reduce((t, e = {}) => {
                                    const n = [t.css, e.css].filter(Boolean).join("\n"),
                                        r = [...(t.images || []), ...(e.images || [])],
                                        i = Object.assign(Object.assign({}, t.colors), e.colors);
                                    return Object.assign(Object.assign(Object.assign({}, t), e), { css: n, images: r, colors: i });
                                }, {});
                        })(s, n, o),
                    [s, n, o]
                );
            }
            const qe = (t, e) => Math.min(Math.max(t, 0), e),
                Ge = (t) => qe(t, 1),
                Je = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                Ye = `[\\s|\\(]+(${Je})[,|\\s]+(${Je})[,|\\s]+(${Je})\\s*\\)?`,
                Ke = `[\\s|\\(]+(${Je})[,|\\s]+(${Je})[,|\\s]+(${Je})[,|\\s]+(${Je})\\s*\\)?`,
                Xe = {
                    rgb: new RegExp(`rgb${Ye}`),
                    rgba: new RegExp(`rgba${Ke}`),
                    hsl: new RegExp(`hsl${Ye}`),
                    hsla: new RegExp(`hsla${Ke}`),
                    hsv: new RegExp(`hsv${Ye}`),
                    hsva: new RegExp(`hsva${Ke}`),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                };
            class Ze {
                constructor(t, e) {
                    (this._r = 0),
                        (this._g = 0),
                        (this._b = 0),
                        (this._a = 1),
                        (this._isValid = !1),
                        "string" == typeof t && (t = Ze.parseString(t)),
                        t && ((this._r = qe(t.r, 255)), (this._g = qe(t.g, 255)), (this._b = qe(t.b, 255)), (this._a = Ge(void 0 !== e ? e : t.a)), (this._isValid = !0));
                }
                static fromString(t, e) {
                    return new Ze(t, e);
                }
                static rgb(t, e, n) {
                    return Ze.rgba(t, e, n, 1);
                }
                static rgba(t, e, n, r) {
                    return new Ze({ r: t, g: e, b: n, a: r });
                }
                static hsl(t, e, n) {
                    return Ze.hsla(t, e, n, 1);
                }
                static hsla(t, e, n, r) {
                    (t = (t % 360) / 360), (e = Ge(e)), (n = Ge(n)), (r = Ge(r));
                    const i = n <= 0.5 ? n * (e + 1) : n + e - n * e,
                        o = 2 * n - i,
                        s = (t) => (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? o + (i - o) * t * 6 : 2 * t < 1 ? i : 3 * t < 2 ? o + (i - o) * (2 / 3 - t) * 6 : o);
                    return Ze.rgba(255 * s(t + 1 / 3), 255 * s(t), 255 * s(t - 1 / 3), r);
                }
                static hsv(t, e, n) {
                    return Ze.hsva(t, e, n, 1);
                }
                static hsva(t, e, n, r) {
                    t = ((t % 360) / 360) * 360;
                    const i = Math.floor((t / 60) % 6),
                        o = t / 60 - i,
                        s = [n, n * (1 - e), n * (1 - o * e), n * (1 - (1 - o) * e)],
                        a = [
                            [0, 3, 1],
                            [2, 0, 1],
                            [1, 0, 3],
                            [1, 2, 0],
                            [3, 1, 0],
                            [0, 1, 2],
                        ];
                    return Ze.rgba(255 * s[a[i][0]], 255 * s[a[i][1]], 255 * s[a[i][2]], r);
                }
                static parseString(t) {
                    t = t
                        .replace(/^[\s,#]+/, "")
                        .replace(/\s+$/, "")
                        .toLowerCase();
                    let e = Xe.rgb.exec(t);
                    if (e) return { r: +e[1], g: +e[2], b: +e[3], a: 1 };
                    if (((e = Xe.rgba.exec(t)), e)) return { r: +e[1], g: +e[2], b: +e[3], a: +e[4] };
                    if (((e = Xe.hex6.exec(t)), e)) {
                        const t = e.slice(1, 4).map((t) => parseInt(t, 16));
                        return { r: t[0], g: t[1], b: t[2], a: 1 };
                    }
                    if (((e = Xe.hex3.exec(t)), e)) {
                        const t = e.slice(1, 4).map((t) => parseInt(t + t, 16));
                        return { r: t[0], g: t[1], b: t[2], a: 1 };
                    }
                    return null;
                }
                isValid() {
                    return this._isValid;
                }
                toRgbaString() {
                    const { r: t, g: e, b: n, a: r } = this.toRgba();
                    return `rgba(${[t, e, n, r].join(",")})`;
                }
                toRgb() {
                    return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b) };
                }
                toRgba() {
                    return Object.assign(Object.assign({}, this.toRgb()), { a: Math.round(100 * this._a) / 100 });
                }
                toHsl() {
                    const t = this._r / 255,
                        e = this._g / 255,
                        n = this._b / 255,
                        r = this._a,
                        i = Math.max(t, e, n),
                        o = Math.min(t, e, n),
                        s = (i + o) / 2,
                        a = i - o;
                    let c, l;
                    if (i === o) c = l = 0;
                    else {
                        switch (((l = s > 0.5 ? a / (2 - i - o) : a / (i + o)), i)) {
                            case t:
                                c = (e - n) / a + (e < n ? 6 : 0);
                                break;
                            case e:
                                c = (n - t) / a + 2;
                                break;
                            case n:
                                c = (t - e) / a + 4;
                        }
                        c /= 6;
                    }
                    return { h: 360 * c, s: l, l: s, a: r };
                }
                luma() {
                    let t = this._r / 255,
                        e = this._g / 255,
                        n = this._b / 255;
                    return (
                        (t = t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)),
                        (e = e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)),
                        (n = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)),
                        0.2126 * t + 0.7152 * e + 0.0722 * n
                    );
                }
                lighten(t) {
                    const { h: e, s: n, l: r, a: i } = this.toHsl();
                    return Ze.hsla(e, n, r + t / 100, i);
                }
                darken(t) {
                    const { h: e, s: n, l: r, a: i } = this.toHsl();
                    return Ze.hsla(e, n, r - t / 100, i);
                }
                fade(t) {
                    const { h: e, s: n, l: r } = this.toHsl();
                    return Ze.hsla(e, n, r, t / 100);
                }
                fadeout(t, e = !1) {
                    const { h: n, s: r, l: i, a: o } = this.toHsl();
                    return e && (t *= o), Ze.hsla(n, r, i, o - t / 100);
                }
                static contrast(t, e = Ze.rgba(255, 255, 255, 1), n = Ze.rgba(0, 0, 0, 1), r = 0.43) {
                    if (e.luma() > n.luma()) {
                        const t = n;
                        (n = e), (e = t);
                    }
                    return t.luma() < r ? n : e;
                }
            }
            function Qe(t) {
                return Ze.contrast(t, Ze.fromString("#4c4c4c"), Ze.fromString("#ffffff"));
            }
            function tn(t) {
                const e = Ze.fromString(t);
                return Ze.contrast(e, e.darken(5), e.lighten(5)).toRgbaString();
            }
            const en = ({ viewBox: t, stroke: e, strokeWidth: n = 1 }, r) =>
                    `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t}" fill="none" stroke="${e}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${n}">${r}</svg>')`,
                nn = (t) => en({ viewBox: "0 0 12 12", stroke: t }, '<path fill="none" d="M1 3.95L5.95 8.9l4.95-4.95" />');
            function rn(t) {
                const { colors: e, width: n, maxWidth: r, padding: i = {}, overflow: o } = t,
                    {
                        background: s,
                        text: a,
                        button: c,
                        buttonHover: l,
                        buttonText: u,
                        secondaryButton: d,
                        secondaryButtonHover: h,
                        secondaryButtonText: p,
                        normalButton: g,
                        normalButtonText: f,
                        input: m,
                        inputText: v,
                        inputPlaceholder: _,
                    } = (function (t = {}) {
                        const e = Object.assign(
                            Object.assign(
                                {},
                                (function (t = "#ffffff", e) {
                                    const n = Ze.fromString(t),
                                        r = e ? Ze.fromString(e) : Qe(n),
                                        i = Ze.contrast(n, n.darken(20), n.lighten(20)),
                                        o = Ze.contrast(n, n.darken(10), n.lighten(10)),
                                        s = Ze.contrast(n, r.fade(5), r.fade(15)),
                                        a = Ze.contrast(n, r.fade(5), r.fade(15)),
                                        c = { background: n, text: r, headerText: r, button: i, buttonText: Qe(i), input: a, inputText: r, secondaryButton: o, secondaryButtonText: r, normalButton: s, normalButtonText: r };
                                    return (0, W.Q8)(c, (t) => t.toRgbaString());
                                })(t.background, t.text)
                            ),
                            (0, W.Q8)(t, (t) => Ze.fromString(t).toRgbaString())
                        );
                        return Object.assign(Object.assign({}, e), { buttonHover: tn(e.button), secondaryButtonHover: tn(e.secondaryButton), inputPlaceholder: ((n = e.inputText), Ze.fromString(n).fadeout(50, !0).toRgbaString()) });
                        var n;
                    })(e);
                return `\n:host {\n  --root-width: ${n};\n  --root-max-width: ${r};\n  --root-padding-left: ${i.left};\n  --root-padding-top: ${i.top};\n  --root-padding-right: ${i.right};\n  --root-padding-bottom: ${
                    i.bottom
                };\n  --root-overflow: ${o};\n  --root-bg: ${s};\n  --root-color: ${a};\n  --button-primary-bg: ${c};\n  --button-primary-hover-bg: ${l};\n  --button-primary-color: ${u};\n  --button-secondary-bg: ${d};\n  --button-secondary-hover-bg: ${h};\n  --button-secondary-color: ${p};\n  --button-normal-bg: ${g};\n  --button-normal-color: ${f};\n  --input-bg: ${m};\n  --input-color: ${v};\n  --input-placeholder-color: ${_};\n  --icon-close: ${
                    ((b = a), en({ viewBox: "0 0 24 24", strokeWidth: 2, stroke: b }, '<path d="M1.458 1.458l21.084 21.084m0-21.084L1.458 22.542" />'))
                };\n  --icon-back: ${((t) => en({ viewBox: "0 0 16 11", stroke: t }, '<path d="M1 5.5h15M5.5.55L.55 5.5l4.95 4.95" />'))(a)};\n  --icon-caret: ${nn(a)};\n  --icon-arrow: ${nn(v)};\n  --icon-checkmark: ${((t) =>
                    en({ viewBox: "0 0 12 12", strokeWidth: 2, stroke: t }, '<path fill="none" d="M2.11 5.56l2.83 2.83 4.95-4.95" />'))(v)};\n}\n`;
                var b;
            }
            function on({ widget: t, inline: e }) {
                const n = Be(t),
                    r = wt(() => rn(n), [n]),
                    i = wt(
                        () =>
                            (function (t, e) {
                                const n = (function (t, e) {
                                        const n = { big: !1, horizontal: !1, inline: e };
                                        switch (t) {
                                            case "bar":
                                                return Object.assign(Object.assign({}, n), { horizontal: !0 });
                                            case "modal":
                                            case "fullscreen":
                                            case "sidebar":
                                            case "inline":
                                                return Object.assign(Object.assign({}, n), { big: !0 });
                                            default:
                                                return n;
                                        }
                                    })(t, e),
                                    r = (function (t) {
                                        return Ue[t] || (() => "");
                                    })(t);
                                return (
                                    (o =
                                        "@media print {\n  :host {\n    display: none !important;\n  }\n}\n:host {\n  all: initial;\n}\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\nspan,\na,\nform,\nlabel,\ndiv,\nu,\ni,\nem,\nb,\nstrong,\np,\nh1,\nul,\nol,\nli,\nimg {\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  font-style: inherit;\n}\na,\na:focus,\na:active {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  text-decoration: none;\n}\nimg {\n  display: block;\n}\n::-webkit-input-placeholder,\n:-moz-placeholder,\n::-moz-placeholder,\ninput:-ms-input-placeholder {\n  color: inherit;\n  text-overflow: ellipsis;\n  opacity: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  vertical-align: middle;\n  font-size: inherit;\n  text-align: inherit;\n  font-weight: normal;\n  position: static;\n}\n[placeholder] {\n  text-overflow: ellipsis;\n}\ninput::-moz-placeholder,\ninput:-moz-placeholder,\ninput:-ms-input-placeholder {\n  text-overflow: ellipsis;\n}\ninput,\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ninput,\ntextarea,\nselect {\n  margin: 0;\n  border: 0;\n  background: none;\n  font-family: inherit;\n  outline: 0 none;\n  font-size: inherit;\n}\na,\na *,\ninput[type='submit'],\ninput[type='button'],\ninput[type='radio'],\ninput[type='checkbox'],\nselect,\nbutton {\n  cursor: pointer;\n}\nbutton,\ninput[type='submit'] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  width: auto;\n  height: auto;\n  text-shadow: none;\n  box-shadow: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1;\n  letter-spacing: normal;\n  float: none;\n  font-weight: bold;\n  outline: initial;\n}\nsvg {\n  cursor: inherit;\n  color: currentColor;\n  fill: none;\n  stroke: currentcolor;\n}\ntextarea {\n  line-height: 1.2;\n  overflow: auto;\n  resize: none;\n}\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  background-color: transparent;\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\nlabel,\nbutton,\nbutton:focus,\nbutton:active,\nbutton:hover,\nspan,\ndiv,\ninput,\ntextarea,\na,\na:focus,\na:hover,\na:active {\n  color: inherit;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nu {\n  text-decoration: underline;\n}\ni,\nem {\n  font-style: italic;\n}\n.title {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: normal;\n  color: var(--root-color);\n  font-weight: bold;\n  cursor: inherit;\n}\n"),
                                    (i = n).big
                                        ? (o += "\n.title {\n  font-size: 20px;\n  line-height: 1.4;\n}\n@media screen and (min-width: 960px) {\n  .title {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n}\n")
                                        : i.horizontal
                                        ? (o += "\n.title {\n  line-height: 1.5;\n  font-weight: normal;\n}\n")
                                        : (o += "\n.title {\n  font-size: 20px;\n  line-height: 1.4;\n}\n"),
                                    (o +=
                                        "\n.description {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 1.5;\n}\n.note {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: normal;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.title a,\n.description a,\n.note a {\n  vertical-align: baseline;\n  text-decoration: underline;\n}\n.button {\n  text-decoration: none;\n  display: block;\n  border: solid 1px transparent;\n  white-space: nowrap;\n  outline: 0;\n  font-family: inherit;\n  font-weight: bold;\n  border-radius: 4px;\n  transition: background-color 0.2s ease-out;\n  line-height: 1.5;\n  padding: 11px 23px;\n  position: relative;\n}\n.button > span {\n  display: block;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button > * {\n  min-width: 0;\n}\n.button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.button:hover,\n.button:focus,\n.button:active,\n.button:disabled {\n  outline: 0;\n  text-decoration: none;\n}\n.button.primary {\n  color: var(--button-primary-color);\n  background: var(--button-primary-bg);\n}\n.button.primary:hover,\n.button.primary:focus,\n.button.primary:active {\n  color: var(--button-primary-color);\n  background: var(--button-primary-hover-bg);\n}\n.button.primary.icon {\n  display: flex;\n  align-items: center;\n  padding-left: 13px;\n  padding-right: 13px;\n}\n.button.primary.icon svg {\n  width: 20px;\n  height: 24px;\n  stroke-width: 1px;\n}\n.button.secondary {\n  color: var(--button-secondary-bg);\n  background: var(--button-secondary-bg);\n}\n.button.secondary:hover,\n.button.secondary:focus,\n.button.secondary:active {\n  background: var(--button-secondary-hover-bg);\n  color: var(--button-secondary-bg);\n}\n.button.secondary.icon {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.button.secondary.icon svg {\n  width: 14px;\n  height: 14px;\n  stroke-width: 2px;\n}\n.button.normal {\n  color: var(--button-normal-color);\n  background: var(--button-normal-bg);\n}\n.button.normal:hover,\n.button.normal:focus,\n.button.normal:active {\n  color: var(--button-normal-color);\n}\n.button.normal.icon {\n  display: flex;\n  align-items: center;\n  padding-left: 13px;\n  padding-right: 13px;\n}\n.button.normal.icon svg {\n  width: 20px;\n  height: 24px;\n  stroke-width: 1px;\n}\n.close,\n.back,\n.caret {\n  color: inherit;\n}\n.close::before,\n.back::before,\n.caret::before {\n  display: block;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform-origin: center center;\n  transition: transform 300ms, opacity 200ms;\n  opacity: 0.5;\n  content: '';\n}\n.close:hover::before,\n.back:hover::before,\n.caret:hover::before {\n  opacity: 1;\n}\n.close::before {\n  width: 11px;\n  height: 11px;\n  background-image: var(--icon-close);\n}\n.close:hover::before {\n  transform: rotate(90deg);\n}\n.back::before {\n  width: 16px;\n  height: 11px;\n  background-image: var(--icon-back);\n}\n.back:hover::before {\n  transform: translateX(-3px);\n}\n.caret::before {\n  width: 12px;\n  height: 12px;\n  background-image: var(--icon-caret);\n}\n.caret:hover::before {\n  transform: translateY(3px);\n}\n.caret.collapsed::before {\n  transform: rotate(180deg);\n}\n.caret.collapsed:hover::before {\n  transform: rotate(180deg) translateY(3px);\n}\n.success-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n}\n.success-icon path {\n  fill: var(--root-color);\n  stroke: transparent;\n  opacity: 0;\n}\n.success-icon circle {\n  fill: transparent;\n  stroke: var(--root-color);\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-dasharray: 150.72 150.72;\n}\n.success-icon polyline {\n  fill: transparent;\n  stroke: var(--root-color);\n  stroke-width: 2px;\n  stroke-dasharray: 36 36;\n}\n.input-check {\n  font-size: inherit;\n  white-space: normal;\n  display: flex;\n  width: 100%;\n  "),
                                    i.horizontal ? (o += "\n  flex-direction: row;\n  flex-wrap: nowrap;\n  ") : (o += "\n  flex-direction: column;\n  "),
                                    (o += "\n  position: relative;\n}\n.input-check label {\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  line-height: 24px;\n  "),
                                    i.horizontal
                                        ? (o += "\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n  flex-grow: 1;\n  align-items: center;\n  margin: 0 8px 0 0;\n  ")
                                        : (o += "\n  flex-direction: column;\n  margin: 0 0 8px 0;\n  "),
                                    (o += "\n}\n.input-check label:last-of-type {\n  "),
                                    i.horizontal ? (o += "\n  margin-right: 0;\n  ") : (o += "\n  margin-bottom: 0;\n  "),
                                    (o +=
                                        "\n}\n.input-check input[type='checkbox'],\n.input-check input[type='radio'] {\n  visibility: hidden;\n  position: absolute;\n  top: 4px;\n  font-size: inherit;\n  width: 16px;\n  height: 16px;\n}\n.input-check input[type='checkbox'],\n.input-check input[type='radio'],\n.input-check input[type='checkbox']:hover,\n.input-check input[type='radio']:hover,\n.input-check input[type='checkbox']:active,\n.input-check input[type='radio']:active,\n.input-check input[type='checkbox']:focus,\n.input-check input[type='radio']:focus {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n}\n.input-check span {\n  display: block;\n  position: relative;\n  padding: 0 0 0 24px;\n  cursor: inherit;\n  color: var(--input-color);\n  min-height: 16px;\n  "),
                                    i.horizontal
                                        ? (o += "\n  flex-shrink: 0;\n  padding-right: 8px;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  ")
                                        : (o += "\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: normal;\n  "),
                                    (o +=
                                        "\n}\n.input-check span:after,\n.input-check span:before {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  display: block;\n}\n.input-check span:after {\n  will-change: transform;\n  transition: transform 100ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  transform: scale(0, 0);\n  color: var(--input-color);\n}\n.input-check span:empty {\n  padding: 0 16px;\n}\n.input-check span:empty:before,\n.input-check span:empty:after {\n  display: none;\n}\n.input-check span a {\n  text-decoration: underline;\n}\n.input-check input[type='checkbox'] + span:after {\n  content: '';\n  background-image: var(--icon-checkmark);\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.input-check input[type='radio'] + span:before,\n.input-check input[type='checkbox'] + span:before {\n  content: '';\n  background-color: var(--input-bg);\n}\n.input-check input[type='checkbox'] + span:before {\n  border-radius: 4px;\n}\n.input-check input[type='radio'] + span:after {\n  content: '';\n  background-color: var(--root-color);\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  margin: 4px;\n}\n.input-check input[type='checkbox']:checked + span:after {\n  transform: scale(1, 1);\n}\n.input-check input[type='radio']:checked + span:after {\n  transform: scale(1, 1);\n}\n.input-check input[type='radio'] + span:before {\n  border-radius: 50%;\n}\n.input-rating {\n  display: flex;\n  flex-wrap: nowrap;\n  "),
                                    i.horizontal ? (o += "\n  flex-direction: row;\n  align-items: center;\n  ") : (o += "\n  flex-direction: column;\n  "),
                                    (o +=
                                        "\n  overflow: hidden;\n}\n.input-rating .stars {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.input-rating input[type='radio'] {\n  position: absolute;\n  left: -9999px;\n  width: 24px;\n  height: 24px;\n  margin: 0;\n  opacity: 0;\n}\n.input-rating svg {\n  transition: all 200ms;\n  stroke-opacity: 0.3;\n}\n.input-rating label {\n  display: block;\n  width: 32px;\n  height: 24px;\n  padding: 0 8px 0 0;\n  margin: 0;\n  cursor: pointer;\n}\n.input-rating label svg {\n  width: 100%;\n  height: 100%;\n  fill: transparent;\n}\n.input-rating:hover label svg {\n  fill: transparent;\n}\n.input-rating input:checked ~ label svg {\n  fill: currentcolor;\n  stroke-opacity: 1;\n}\n.input-rating:hover label:hover svg,\n.input-rating:hover label:hover ~ label svg {\n  fill: currentcolor;\n  stroke-opacity: 1;\n}\n.input-select {\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  background: var(--input-bg);\n}\n.input-select:after {\n  pointer-events: none;\n  display: block;\n  content: ' ';\n  opacity: 0.5;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 12px;\n  height: 12px;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  transition: opacity 200ms;\n  background-image: var(--icon-arrow);\n}\n.input-select:hover:after {\n  opacity: 1;\n}\n.input-select select {\n  line-height: 1.5;\n  padding: 12px 40px 12px 16px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  user-select: none;\n  width: 100%;\n  color: var(--input-color);\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.input-select select option {\n  background: white;\n  color: #333;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.input-select select::-ms-expand {\n  display: none;\n}\n.input-text {\n  width: 100%;\n  max-width: 100%;\n  line-height: 1.5;\n  border: solid 1px transparent;\n  padding: 11px 15px;\n  color: var(--input-color);\n  border-radius: 4px;\n  background: var(--input-bg);\n}\n.input-text::placeholder {\n  color: var(--input-placeholder-color);\n}\n.input-textarea {\n  width: 100%;\n  max-width: 100%;\n  border: 0;\n  color: var(--input-color);\n  background: var(--input-bg);\n  font-size: inherit;\n  border-radius: 4px;\n  line-height: 1.5;\n  border: solid 1px transparent;\n  padding: 11px 15px;\n  "),
                                    i.horizontal ? (o += "\n  height: 48px;\n  overflow-y: hidden;\n  ") : (o += "\n  overflow-y: auto;\n  "),
                                    (o += "\n}\n.input-textarea::placeholder {\n  white-space: normal;\n  color: var(--input-placeholder-color);\n}\n"),
                                    i.horizontal
                                        ? (o += "\n.fields {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 16px;\n}\n")
                                        : (o += "\n.fields {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n"),
                                    (o += "\n.field-title {\n  display: block;\n  color: var(--root-color);\n  "),
                                    i.horizontal
                                        ? (o += "\n  flex: none;\n  margin: 0 12px 0 0;\n  ")
                                        : (o += "\n  width: 100%;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: normal;\n  margin: 0 0 4px 0;\n  "),
                                    (o += "\n  line-height: 1.5;\n}\n.field-title a {\n  vertical-align: baseline;\n  text-decoration: underline;\n}\n"),
                                    i.horizontal
                                        ? (o += "\n.field {\n  display: flex;\n  align-items: center;\n  width: auto;\n  min-width: 0;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.field,\n.field:focus {\n  outline: none;\n}\n")
                                        : (o += "\n.field {\n  width: 100%;\n}\n.field + .field {\n  margin: 16px 0 0 0;\n}\n"),
                                    (o += "\n"),
                                    i.horizontal
                                        ? (o +=
                                              "\n.form {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  width: 100%;\n}\n@media screen and (min-width: 960px) {\n  .form {\n    width: auto;\n    max-width: 100%;\n  }\n}\n")
                                        : (o += "\n.form {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n"),
                                    (o += "\n.content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n"),
                                    i.horizontal
                                        ? (o +=
                                              "\n@media screen and (min-width: 960px) {\n  .content {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n  }\n}\n.title,\n.description {\n  margin: 0 0 12px 0;\n}\n.note {\n  margin: 12px 0 0 0;\n}\n@media screen and (min-width: 960px) {\n  .title,\n  .description {\n    margin: 0 16px 0 0;\n  }\n  .note {\n    margin: 0 0 0 16px;\n  }\n}\n")
                                        : (o += "\n.title,\n.description {\n  margin-bottom: 20px;\n}\n.note {\n  margin-top: 20px;\n}\n"),
                                    (o += "\n.buttons {\n  display: flex;\n  flex-direction: row;\n  "),
                                    i.horizontal ? (o += "\n  flex-wrap: nowrap;\n  ") : (o += "\n  flex-wrap: wrap;\n  "),
                                    o +
                                        "\n}\n.buttons .button.icon {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.root {\n  -webkit-text-size-adjust: 100%;\n  z-index: 2147483635;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 16px;\n}\n.root.before-enter {\n  display: none;\n}\n@font-face {\n  font-family: emoji;\n  src: local('Apple Color Emoji'), local('Android Emoji'), local('Segoe UI'), local(EmojiSymbols), local(Symbola);\n  /* Emoji unicode blocks */\n  unicode-range: U+1F300-1F5FF, U+1F600-1F64F, U+1F680-1F6FF, U+2600-26FF;\n}\n" +
                                        r(n)
                                );
                                var i, o;
                            })(t.layout, e),
                        [t.layout, e]
                    );
                return ot(m, { children: [ot("style", { children: r }, void 0), ot("style", { children: i }, void 0), ot(Fe, { layout: t.layout, css: n.css }, void 0)] }, void 0);
            }
            function sn(t) {
                const e = document.documentElement.style;
                for (const n in t) e[n] !== t[n] && (e[n] = t[n]);
            }
            const an = (t) => new Promise((e) => setTimeout(e, t)),
                cn = (t, e = 2500) => async (n, r) => {
                    for (; e > 0; ) {
                        if ((await an(100), !r().widgets[t].animating)) return;
                        e -= 100;
                    }
                };
            function ln(t) {
                switch (t.type) {
                    case "submit":
                        return 3;
                    case "showWidget":
                    case "copyToClipboard":
                        return 2;
                    case "url":
                        return "_blank" === t.target ? 2 : 1;
                    case "applyCoupon":
                    case "addToCart":
                        return t.redirect ? 1 : 2;
                    case "back":
                    case "close":
                        return 0;
                }
            }
            const un = (t, e) => async (n, r, i) => {
                const o = Yt(r(), t);
                switch (e.type) {
                    case "back":
                        return n(At("widgets/GO_TO_PREV_PAGE", { id: t })), !0;
                    case "url":
                        const r = (0, ke.uj)(e.url, o, encodeURIComponent);
                        return i.openUrl(t, r, e.target);
                    case "showWidget":
                        return i.showWidget(e.id, t);
                    case "copyToClipboard":
                        return i.copyToClipboard(t, (0, ke.uj)(e.text, o));
                    case "addToCart":
                        return i.addToCart(t, e.selectionType, e.items, e.redirect);
                    case "applyCoupon":
                        return i.applyCoupon(t, (0, ke.uj)(e.coupon, o), e.redirect);
                    case "close":
                        return i.closeWidget(t);
                }
                return !0;
            };
            const dn = (t, e, n, r = !1) => async (i) => {
                    if (
                        (function (t) {
                            return t.some((t) => "submit" === t.type);
                        })(e)
                    )
                        return (
                            i(
                                Wt(
                                    t,
                                    e.filter((t) => "submit" !== t.type),
                                    n
                                )
                            ),
                            !0
                        );
                    const { preActions: o, postActions: s } = (function (t) {
                            t = (function (t) {
                                return [...t].sort((t, e) => ln(e) - ln(t));
                            })(t);
                            const e = t.findIndex((t) => ln(t) < 2);
                            return -1 === e ? { preActions: t, postActions: [] } : { preActions: t.slice(0, e), postActions: t.slice(e) };
                        })(e),
                        a = r
                            ? null
                            : (function (t) {
                                  return t.reduce((t, e) => (("copyToClipboard" === e.type || "addToCart" === e.type || "applyCoupon" === e.type) && e.successMessage) || t, "");
                              })(o);
                    let c = !0;
                    for (const e of o) c = c && (await i(un(t, e)));
                    c &&
                        a &&
                        (await i(
                            ((t, e, n) => async (r, i) => {
                                if (!e || !n) return;
                                const o = Yt(i(), t),
                                    s = { message: (0, ke.uj)(n, o), name: e };
                                r(Rt(t, s)), await an(1500), i().widgets[t].notification === s && r(Rt(t, null));
                            })(t, n, a)
                        ));
                    for (const e of s) await i(un(t, e));
                    return await i(cn(t)), c;
                },
                hn = () => {
                    const t = zt(),
                        { widgetId: e } = Me();
                    return yt((n, r) => t(dn(e, n, r)), [t, e]);
                };
            function pn() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
                    const e = (16 * Math.random()) | 0;
                    return ("x" === t ? e : (3 & e) | 8).toString(16);
                });
            }
            const gn = (t) => {
                    const { widgetId: e } = Me(),
                        n = Bt((t) => qt(t, e).notification);
                    return ((null == n ? void 0 : n.name) === t && n.message) || null;
                },
                fn = ({ name: t }) => {
                    const e = gn(t);
                    return e ? ot("div", Object.assign({ className: "notification" }, { children: e }), void 0) : null;
                },
                mn = ["input", "fieldset", "button", "select", "textarea", ".input-rating", ".input-check", ".input-flag"].join(",");
            function vn({ children: t, page: e }) {
                const { current: n } = bt(pn()),
                    r = bt(),
                    i = hn(),
                    o = yt(() => {
                        var t;
                        const e = null === (t = r.current) || void 0 === t ? void 0 : t.querySelector("form");
                        e &&
                            e.dispatchEvent(
                                (function (t) {
                                    let e;
                                    return "function" == typeof Event ? (e = new Event(t, { cancelable: !0 })) : ((e = document.createEvent("Event")), e.initEvent(t, !0, !0)), e;
                                })("submit")
                            );
                    }, []);
                return ot(
                    "div",
                    Object.assign(
                        {
                            ref: r,
                            onClick: async (t) => {
                                var r;
                                const s = (null === (r = e.data) || void 0 === r ? void 0 : r.backgroundActions) || [];
                                if (
                                    !s.length ||
                                    (function (t) {
                                        for (; t; ) {
                                            if (t.matches(mn)) return !0;
                                            t = t.parentElement;
                                        }
                                        return !1;
                                    })(t.target)
                                )
                                    return;
                                await i(s, n);
                                const a = s.some((t) => "submit" === t.type);
                                a && o();
                            },
                            className: "container",
                        },
                        {},
                        { children: [ot(fn, { name: n }, void 0), t] }
                    ),
                    void 0
                );
            }
            function _n(...t) {
                return t.filter(Boolean).join(" ");
            }
            const bn = /[A-Z]/g;
            function wn(t, e, n) {
                const r = {};
                r[e] = n;
                const i = /^(-?\d+)(.+)?$/.exec(n);
                if (i) {
                    const [, n, o = ""] = i;
                    if ("%" === o) {
                        const i = parseFloat(n);
                        r.transform = `translate${t}(${"right" == e || "bottom" == e ? i : -i}${o})`;
                    }
                }
                return r;
            }
            function yn(t, e) {
                let n = {};
                const r = "X" === t ? "left" : "top",
                    i = `translate${t}`,
                    o = e.split(/\s+(.*)/, 2);
                if (1 === o.length) e === r ? (n[r] = "0") : "right" === e || "bottom" === e ? ((n[r] = "100%"), (n.transform = `${i}(-100%)`)) : "center" === e ? ((n[r] = "50%"), (n.transform = `${i}(-50%)`)) : (n = wn(t, r, e));
                else if (2 === o.length) {
                    const [e, r] = o;
                    n = wn(t, e, r);
                }
                return n;
            }
            function xn({
                style: t = {},
                opacity: e = 1,
                flipX: n = !1,
                flipY: r = !1,
                angle: i = "0deg",
                transformOrigin: o,
                zIndex: s = 0,
                size: a = "",
                positionX: c = "0",
                positionY: l = "0",
                objectFit: u = "fill",
                objectPosition: d = "50% 50%",
                src: h,
                previewName: p,
            }) {
                const g = Object.assign(
                        Object.assign(
                            { position: "absolute", objectFit: u, objectPosition: d },
                            (function (t, e) {
                                const n = yn("X", t),
                                    r = yn("Y", e);
                                return Object.assign(Object.assign(Object.assign({}, n), r), { transform: _n(n.transform, r.transform) });
                            })(c, l)
                        ),
                        t
                    ),
                    [f, m = f] = a.match(/calc\(.+?\)|\S+/gi) || [""];
                f && m && ((g.width = f), (g.height = m)),
                    s && (g.zIndex = s.toString()),
                    isFinite(e) && 1 !== e && (g.opacity = e.toString()),
                    o && (g.transformOrigin = o),
                    (g.transform = _n(g.transform, n ? "scaleX(-1)" : "", r ? "scaleY(-1)" : "", parseInt(i) ? `rotate(${i})` : ""));
                const v = Object.keys(g).reduce(
                    (t, e) =>
                        t +
                        `${(function (t, e = "-") {
                            return t.replace(bn, (t, n) => (n ? e : "") + t.toLowerCase());
                        })(e)}:${g[e]};`,
                    ""
                );
                return ot("img", Object.assign({ src: h, className: "image", style: v }, {}), void 0);
            }
            function kn() {
                const { widgetId: t } = Me(),
                    e = Bt((e) => qt(e, t)),
                    { images: n = [] } = Be(e),
                    r = n.filter((t) => !t.hidden);
                return 0 === r.length
                    ? null
                    : ot(
                          "div",
                          Object.assign(
                              { className: "images" },
                              {
                                  children: r.map((t, e) => {
                                      var { actions: n } = t,
                                          r = (0, Ae._T)(t, ["actions"]);
                                      return ot(xn, Object.assign({ previewName: `images.${e}` }, r), e + r.src);
                                  }),
                              }
                          ),
                          void 0
                      );
            }
            function On(t) {
                return ot("button", Object.assign({ type: "button", className: "close" }, t), void 0);
            }
            function Cn(t) {
                return ot("button", Object.assign({ type: "button", className: "back" }, t), void 0);
            }
            function Sn(t) {
                var { collapsed: e } = t,
                    n = (0, Ae._T)(t, ["collapsed"]);
                const r = We()("caret", e && "collapsed");
                return ot("button", Object.assign({ type: "button", className: r }, n), void 0);
            }
            function Tn(t) {
                const { layout: e, hasPreviousPage: n, page: r, className: i, innerRef: o, children: s } = t,
                    a = "inline" !== e,
                    c = hn();
                return (
                    ((t) => {
                        _t(() => {
                            if ("modal" === t || "fullscreen" === t) return sn({ overflow: "hidden" }), () => sn({ overflow: null });
                        }, [t]);
                    })(e),
                    ot(
                        "div",
                        Object.assign(
                            { ref: o, className: i, role: "dialog" },
                            {
                                children: ot(
                                    vn,
                                    Object.assign(
                                        { page: r },
                                        {
                                            children: [
                                                ot(kn, {}, void 0),
                                                ot("div", Object.assign({ className: "body" }, { children: s }), void 0),
                                                n && ot(Cn, { onClick: () => c([{ type: "back" }]) }, void 0),
                                                a && ot(On, { onClick: () => c([{ type: "close" }]) }, void 0),
                                            ],
                                        }
                                    ),
                                    void 0
                                ),
                            }
                        ),
                        void 0
                    )
                );
            }
            const { Provider: En, Consumer: jn } = D({ slots: {} });
            function Pn(t, e) {
                const [n, r] = [O(t), O(e)];
                return (
                    n.length === r.length &&
                    n.every((t, e) => {
                        const n = r[e];
                        if (i(t) && i(n)) {
                            const e = t.props,
                                { children: r } = e,
                                i = (0, Ae._T)(e, ["children"]),
                                o = n.props,
                                { children: s } = o,
                                a = (0, Ae._T)(o, ["children"]);
                            return (
                                t.type === n.type &&
                                t.key === n.key &&
                                (function (t, e) {
                                    if (t === e) return !0;
                                    if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
                                    const n = Object.keys(t),
                                        r = Object.keys(e);
                                    if (n.length !== r.length) return !1;
                                    const i = {}.hasOwnProperty.bind(e);
                                    for (let o = 0; o < n.length; o++) {
                                        const r = n[o];
                                        if (!i(r)) return !1;
                                        if (t[r] !== e[r]) return !1;
                                    }
                                    return !0;
                                })(i, a) &&
                                Pn(r, s)
                            );
                        }
                        return t === n;
                    })
                );
            }
            class $n extends v {
                constructor(t, e) {
                    super(t, e),
                        (this.state = {
                            slots: {},
                            take: (t, e) => {
                                Pn(this.state.slots[t], e) || this.setState((n) => ({ slots: Object.assign(Object.assign({}, n.slots), { [t]: e }) }));
                            },
                        });
                }
                render(t) {
                    return ot(En, Object.assign({ value: this.state }, { children: t.children }), void 0);
                }
            }
            function In(t) {
                return ot(jn, { children: (e) => O(e.slots[t.name] || t.children)[0] }, void 0);
            }
            function An(t) {
                return ot(jn, { children: (e) => ((null == e ? void 0 : e.take) ? (e.take(t.slot, t.children), null) : O(t.children)[0]) }, void 0);
            }
            function Nn(t) {
                const { hasPreviousPage: e, page: n, expanded: r, className: i, innerRef: o, children: s } = t,
                    a = hn(),
                    [c, l] = vt(r),
                    u = yt((t) => {
                        t.stopPropagation(), l((t) => !t);
                    }, []),
                    d = yt((t) => (t.stopPropagation(), a([{ type: "back" }])), [a]),
                    h = We()(i, c ? "expanded" : "collapsed");
                return ot(
                    $n,
                    {
                        children: ot(
                            "div",
                            Object.assign(
                                { ref: o, className: h, role: "dialog" },
                                {
                                    children: ot(
                                        vn,
                                        Object.assign(
                                            { page: n },
                                            {
                                                children: [
                                                    ot(kn, {}, void 0),
                                                    ot(
                                                        "div",
                                                        Object.assign({ className: "header", onClick: u }, { children: [ot(In, { name: "title" }, void 0), e && c && ot(Cn, { onClick: d }, void 0), ot(Sn, { collapsed: !c }, void 0)] }),
                                                        void 0
                                                    ),
                                                    ot("div", Object.assign({ className: "body" }, { children: s }), void 0),
                                                ],
                                            }
                                        ),
                                        void 0
                                    ),
                                }
                            ),
                            void 0
                        ),
                    },
                    void 0
                );
            }
            function Ln(t) {
                return ot("div", Object.assign({ "aria-hidden": "true" }, t), void 0);
            }
            function Rn(t) {
                return ot(Ln, Object.assign({ className: "overlay" }, { children: ot(Tn, Object.assign({ layout: "modal" }, t), void 0) }), void 0);
            }
            function Dn(t) {
                var { layout: e, className: n } = t,
                    r = (0, Ae._T)(t, ["layout", "className"]);
                const i = Object.assign({ className: We()("root", n) }, r);
                switch (e) {
                    case "modal":
                        return ot(Rn, Object.assign({}, i), void 0);
                    case "panel":
                        return ot(Nn, Object.assign({}, i), void 0);
                    default:
                        return ot(Tn, Object.assign({ layout: e }, i), void 0);
                }
            }
            const Wn = (t, { data: e, valid: n }) => async (r, i) => {
                    if ((r(Dt(t, { data: e, valid: n })), !n)) return !1;
                    const o = !(function ({ activePage: t, pages: e }) {
                            return e.slice(t + 1).some((t) =>
                                (function ({ data: { backgroundActions: t = [], buttons: e = [] } = {} }) {
                                    const n = e
                                        .filter((t) => t.visible)
                                        .map((t) => t.actions)
                                        .reduce((t, e) => t.concat(e), [])
                                        .concat(t);
                                    return n.some((t) => "submit" === t.type);
                                })(t)
                            );
                        })(i().widgets[t]),
                        s = r(
                            ((t) => (e, n) => {
                                const { activePage: r } = n().widgets[t];
                                return (
                                    e(
                                        (function (t) {
                                            return At("widgets/GO_TO_NEXT_PAGE", { id: t });
                                        })(t)
                                    ),
                                    r !== n().widgets[t].activePage
                                );
                            })(t)
                        );
                    if (o) {
                        const e = await r(
                            ((t, e = !1) => async (n, r, i) => {
                                const o = r().widgets[t];
                                return (
                                    !o.formState.sent &&
                                    (n(Dt(o.id, { sending: !e })),
                                    await i.sendData(
                                        o.id,
                                        (function (t) {
                                            const { data: e } = t.formState;
                                            return t.pages
                                                .map((t) => {
                                                    var e;
                                                    return (null === (e = t.data) || void 0 === e ? void 0 : e.fields) || [];
                                                })
                                                .reduce((t, e) => t.concat(e), [])
                                                .reduce((t, n) => {
                                                    const r = (function (t, e) {
                                                        const { value: n } = e || { value: [] };
                                                        return "flag" == t.type
                                                            ? n.length > 0
                                                            : n.length > 0
                                                            ? (function ({ type: t, options: e }) {
                                                                  return "rating" == t || (null == e ? void 0 : e.length) > 0;
                                                              })(t)
                                                                ? n.reduce((t, e) => ((t[e] = !0), t), {})
                                                                : n[0]
                                                            : null;
                                                    })(n, e[n.name]);
                                                    return null !== r && (t[n.name] = r), t;
                                                }, {});
                                        })(o)
                                    ),
                                    await n(cn(o.id)),
                                    n(Dt(o.id, { sending: !1, sent: !0 })),
                                    !0)
                                );
                            })(t, s)
                        );
                        return (
                            await r(
                                ((a = t),
                                async (t, e) => {
                                    const { pendingActions: { actions: n = [], origin: r } = {} } = e().widgets[a];
                                    return t(Wt(a, [])), t(dn(a, n, r, !0));
                                })
                            ),
                            s ||
                                r(
                                    (function (t) {
                                        return At("widgets/RESET", { id: t });
                                    })(t)
                                ),
                            e
                        );
                    }
                    var a;
                    return !0;
                },
                Mn = /^(?:submit|button|image|reset|file)$/i,
                Un = /^(?:input|select|textarea)/i,
                Vn = /^(?:checkbox|radio)$/i;
            function Fn(t) {
                const { type: e, nodeName: n, name: r } = t;
                return !!r && Un.test(n) && !Mn.test(e);
            }
            const Hn = () => {
                    const { widgetId: t } = Me(),
                        e = Bt((e) => qt(e, t).formState),
                        n = zt(),
                        r = bt(e);
                    r.current = e;
                    const i = yt(
                            (e) => async (r) => {
                                r.preventDefault();
                                const i = r.target,
                                    o = i.checkValidity(),
                                    s = (function (t) {
                                        return Array.from(t.elements)
                                            .filter(Fn)
                                            .reduce((t, e) => {
                                                const { name: n, validity: r } = e,
                                                    i = (function (t) {
                                                        return t.checked || !Vn.test(t.type) ? t.value : null;
                                                    })(e),
                                                    o = t[n] || { value: [], valid: !0 };
                                                return (t[n] = { value: [...o.value, ...(null !== i ? [i] : [])], valid: o.valid && r.valid }), t;
                                            }, {});
                                    })(i);
                                await n(Wn(t, { data: s, valid: o })), null == e || e();
                            },
                            [n, t]
                        ),
                        o = yt(
                            (e, r) => {
                                n(
                                    (function (t, e, n) {
                                        return At("widgets/SET_FORM_FIELD_VALUE", { id: t, fieldName: e, value: n });
                                    })(t, e, r)
                                );
                            },
                            [n, t]
                        ),
                        s = yt((t) => {
                            var e;
                            const n = r.current.data[t];
                            return (null === (e = null == n ? void 0 : n.value) || void 0 === e ? void 0 : e[0]) || "";
                        }, []),
                        a = yt((t) => {
                            const e = r.current.data[t];
                            return (null == e ? void 0 : e.value) || [];
                        }, []);
                    return {
                        handleSubmit: i,
                        setValue: o,
                        getValue: s,
                        getMultiValue: a,
                        getValidity: yt((t) => {
                            const { valid: e = !0 } = r.current.data[t] || {};
                            return e;
                        }, []),
                        getFormFlags: yt(() => {
                            const t = r.current,
                                { data: e } = t;
                            return (0, Ae._T)(t, ["data"]);
                        }, []),
                    };
                },
                zn = D(null),
                Bn = zn,
                qn = function (t) {
                    var { children: e } = t,
                        n = (0, Ae._T)(t, ["children"]);
                    return ot(Bn.Provider, Object.assign({ value: n }, { children: e }), void 0);
                };
            function Gn({ children: t }) {
                const e = Hn(),
                    n = (function () {
                        const t = bt(!1);
                        return (
                            _t(
                                () => (
                                    (t.current = !0),
                                    () => {
                                        t.current = !1;
                                    }
                                ),
                                []
                            ),
                            yt(() => t.current, [])
                        );
                    })(),
                    [r, i] = vt({ submitting: !1, submitted: !1 }),
                    { valid: o = !0, pristine: s = !0 } = e.getFormFlags(),
                    { submitting: a, submitted: c } = r;
                return ot(
                    qn,
                    Object.assign({}, e, {
                        children: ot(
                            "form",
                            Object.assign(
                                {
                                    noValidate: !0,
                                    onSubmit: (t) => {
                                        const r = t.target;
                                        i({ submitting: !0, submitted: !1 }),
                                            e.handleSubmit(() => {
                                                n() && (r.offsetHeight, i({ submitting: !1, submitted: !0 }));
                                            })(t);
                                    },
                                    className: We()("form", { valid: o, invalid: !o, pristine: s, dirty: !s, submit: !a && c, submitting: a }),
                                },
                                !1,
                                { children: t }
                            ),
                            void 0
                        ),
                    }),
                    void 0
                );
            }
            function Jn(t) {
                return ot(
                    "svg",
                    Object.assign({ className: "success-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 70 70" }, t, {
                        children: [
                            ot(
                                "path",
                                {
                                    d:
                                        "M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z",
                                },
                                void 0
                            ),
                            ot("circle", { cx: "35", cy: "35", r: "24" }, void 0),
                            ot("polyline", { points: "23 34 34 43 47 27" }, void 0),
                        ],
                    }),
                    void 0
                );
            }
            const Yn = () => {
                    const { widgetId: t } = Me();
                    return Bt((e) => qt(e, t).formState.sending) ? ot(Jn, {}, void 0) : null;
                },
                Kn = () => {
                    const { widgetId: t } = Me(),
                        e = Bt((e) => Yt(e, t));
                    return { template: yt((t) => (0, ke.uj)(t, e), [e]) };
                };
            function Xn(t, e = "p") {
                return ne(function (n, r) {
                    var { Container: i = e, text: o } = n,
                        s = (0, Ae._T)(n, ["Container", "text"]);
                    const { template: a } = Kn(),
                        c = (function () {
                            const t = hn();
                            return yt(
                                function (e) {
                                    if (e.defaultPrevented || 0 !== e.button) return;
                                    const n = (function (t) {
                                        for (; t && (!t.nodeName || "a" !== t.nodeName.toLowerCase()); ) t = t.parentNode;
                                        return t;
                                    })(e.target);
                                    return n ? (n.blur(), e.preventDefault(), e.stopPropagation(), t([{ type: "url", url: n.href, target: n.target || "_self" }])) : void 0;
                                },
                                [t]
                            );
                        })();
                    return ot(i, Object.assign({ className: t, ref: r, onClick: c, dangerouslySetInnerHTML: { __html: a(o) } }, s), void 0);
                });
            }
            const Zn = Xn("title", "h1"),
                Qn = Xn("description"),
                tr = Xn("note"),
                er = () => xt(zn);
            function nr(t) {
                var {
                        field: { required: e, name: n, type: r = "text", placeholder: i },
                    } = t,
                    o = (0, Ae._T)(t, ["field"]);
                const { template: s } = Kn(),
                    { getValue: a, setValue: c } = er(),
                    l = a(n);
                return g("input", Object.assign({}, o, { className: We()("input-text", { filled: !!l }), required: e, key: n, type: r, name: n, value: l, onInput: (t) => c(n, { value: [t.target.value] }), placeholder: s(i) }));
            }
            function rr(t) {
                var {
                        field: { required: e, name: n, type: r, options: i = [] },
                    } = t,
                    o = (0, Ae._T)(t, ["field"]);
                const { template: s } = Kn(),
                    { getMultiValue: a, setValue: c } = er(),
                    l = a(n),
                    u = "radio" === r ? e : e && 0 === l.length,
                    d = (t) => {
                        let e;
                        const i = t.target.value;
                        (e = "radio" === r ? [i] : t.target.checked ? [...l, i] : l.filter((t) => t !== i)), c(n, { value: e });
                    };
                return ot(
                    "div",
                    Object.assign({ className: "input-check" }, o, {
                        children: i.map((t) => {
                            const e = -1 !== l.indexOf(t.name);
                            return ot("label", { children: [ot("input", { required: u, type: r, name: n, onChange: d, value: t.name, checked: e }, void 0), ot("span", { dangerouslySetInnerHTML: { __html: s(t.label) } }, void 0)] }, t.name);
                        }),
                    }),
                    void 0
                );
            }
            const ir = Qt(({ value: t, label: e }) => ot("option", Object.assign({ value: t }, { children: e }), void 0));
            function or(t) {
                return ot(
                    "svg",
                    Object.assign({ viewBox: "0 0 32 32" }, t, { children: ot("polygon", { points: "16 23.369 6.333 30.5 10.2 19.09 1.5 12.434 12.133 12.434 16 1.5 19.867 12.434 30.5 12.434 21.8 19.09 25.667 30.5" }, void 0) }),
                    void 0
                );
            }
            const sr = [...new Array(10)],
                ar = ~~(sr.length / 2),
                cr = {
                    textarea: function (t) {
                        var {
                                field: { name: e, required: n, placeholder: r },
                            } = t,
                            i = (0, Ae._T)(t, ["field"]);
                        const { template: o } = Kn(),
                            { getValue: s, setValue: a } = er(),
                            c = s(e);
                        return ot(
                            "textarea",
                            Object.assign({}, i, { className: We()("input-textarea", { filled: !!c }), name: e, rows: 4, placeholder: o(r), value: c, onInput: (t) => a(e, { value: [t.target.value] }), required: n }),
                            void 0
                        );
                    },
                    radio: rr,
                    checkbox: rr,
                    rating: function (t) {
                        var {
                                field: { required: e, name: n },
                            } = t,
                            r = (0, Ae._T)(t, ["field"]);
                        const { getValue: i, setValue: o } = er(),
                            s = i(n),
                            a = (t) => o(n, { value: [t.target.value], valid: !0 });
                        return ot(
                            "div",
                            Object.assign({ className: "input-rating" }, r, {
                                children: ot(
                                    "div",
                                    Object.assign(
                                        { className: "stars" },
                                        {
                                            children: sr.map((t, r) => {
                                                const i = (ar - ~~(r / 2)).toString();
                                                return r % 2 == 0
                                                    ? ot("input", { required: e, type: "radio", name: n, id: `${n}${i}`, value: i, onChange: a, checked: s === i }, void 0)
                                                    : ot("label", Object.assign({ for: `${n}${i}` }, { children: ot(or, {}, void 0) }), void 0);
                                            }),
                                        }
                                    ),
                                    void 0
                                ),
                            }),
                            void 0
                        );
                    },
                    flag: function (t) {
                        var {
                                field: { name: e, label: n, required: r },
                            } = t,
                            i = (0, Ae._T)(t, ["field"]);
                        const { template: o } = Kn(),
                            { setValue: s, getValue: a } = er(),
                            c = a(e);
                        return ot(
                            "div",
                            Object.assign(
                                {},
                                i,
                                { className: We()("input-check", "input-flag") },
                                {
                                    children: ot(
                                        "label",
                                        {
                                            children: [
                                                ot(
                                                    "input",
                                                    {
                                                        type: "checkbox",
                                                        name: e,
                                                        value: e,
                                                        required: r,
                                                        checked: !!c,
                                                        onChange: (t) => {
                                                            const n = t.target.checked;
                                                            s(e, { value: n ? [e] : [] });
                                                        },
                                                    },
                                                    void 0
                                                ),
                                                ot("span", { dangerouslySetInnerHTML: { __html: o(n) } }, void 0),
                                            ],
                                        },
                                        e
                                    ),
                                }
                            ),
                            void 0
                        );
                    },
                    select: function (t) {
                        var {
                                field: { name: e, required: n, options: r = [] },
                            } = t,
                            i = (0, Ae._T)(t, ["field"]);
                        const { template: o } = Kn(),
                            { getValue: s, setValue: a } = er(),
                            c = s(e);
                        return ot(
                            "div",
                            Object.assign(
                                {},
                                i,
                                { className: We()("input-select", { selected: !!c }) },
                                {
                                    children: ot(
                                        "select",
                                        Object.assign(
                                            {
                                                required: n,
                                                name: e,
                                                value: c,
                                                onChange: (t) => {
                                                    const n = t.target.value;
                                                    a(e, { value: [n] });
                                                },
                                            },
                                            { children: [(!c || !n) && ot(ir, { value: "", label: "---" }, void 0), r.map((t) => ot(ir, { value: t.name, label: o(t.label) }, t.name))] }
                                        ),
                                        void 0
                                    ),
                                }
                            ),
                            void 0
                        );
                    },
                };
            function lr(t) {
                var { field: e } = t,
                    n = (0, Ae._T)(t, ["field"]);
                return ot(cr[e.type] || nr, Object.assign({ field: e }, n), void 0);
            }
            const ur = Xn("field-title", "label");
            function dr(t) {
                var { field: e, className: n } = t,
                    r = (0, Ae._T)(t, ["field", "className"]);
                const { getValidity: i } = er(),
                    o = i(e.name),
                    s = "flag" !== e.type && e.label,
                    a = We()("field", e.type, n, { "with-label": s }, { valid: o, invalid: !o });
                return ot("div", Object.assign({}, r, { className: a }, (e.name, {}), { children: [s && ot(ur, { for: e.name, text: e.label }, void 0), ot(lr, { field: e, id: e.name }, void 0)] }), void 0);
            }
            function hr({ fields: t }) {
                return 0 === t.length ? null : ot("div", Object.assign({ className: "fields" }, { children: t.map((e, n) => ot(dr, { className: We()({ first: 0 === n, last: n === t.length - 1 }), field: e }, void 0)) }), void 0);
            }
            function pr(t) {
                return ot(
                    "svg",
                    Object.assign({ viewBox: "0 0 20 18" }, t, {
                        children: ot(
                            "path",
                            {
                                stroke: "none",
                                fill: "currentColor",
                                "fill-rule": "nonzero",
                                d: "M20 1l-6 14.8c-.1.4-.5.7-.9.8-.4.1-.9 0-1.2-.2l-5.6-3.6L19 1.3 4.6 11.6.6 9C0 8.7 0 8.3 0 7.9c0-.4.4-.8.8-1L19.4.6l.5.1c0 .1.1.3 0 .4zM6 17.4a1 1 0 0 1-.8 0 1 1 0 0 1-.6-.7l-.7-4v-.2l4.6 3.3-2.4 1.6z",
                            },
                            void 0
                        ),
                    }),
                    void 0
                );
            }
            const gr = ["top", "left", "right", "bottom"],
                fr = ({ name: t }) => {
                    const e = gn(t),
                        { ref: n, position: r } = (() => {
                            const [t, e] = vt("top");
                            return {
                                ref: yt((t) => {
                                    t &&
                                        e(
                                            ((t, e = "top") => {
                                                const n = t.parentElement,
                                                    r = null == n ? void 0 : n.closest(".container");
                                                if (!r) return e;
                                                const { width: i, height: o } = t.getBoundingClientRect(),
                                                    s = n.getBoundingClientRect(),
                                                    a = r.getBoundingClientRect(),
                                                    c = { top: s.top - a.top, left: s.left - a.left, bottom: a.bottom - s.bottom, right: a.right - s.right };
                                                return (
                                                    gr.find((t) => {
                                                        const e = ["top", "bottom"].includes(t) ? o : i;
                                                        return c[t] > e;
                                                    }) || e
                                                );
                                            })(t)
                                        );
                                }, []),
                                position: t,
                            };
                        })();
                    return e ? ot("div", Object.assign({ ref: n, className: `tooltip tooltip-${r}` }, { children: e }), void 0) : null;
                },
                mr = {
                    primary: pr,
                    secondary: function (t) {
                        return ot(
                            "svg",
                            Object.assign({ viewBox: "0 0 24 24" }, t, {
                                children: ot("g", Object.assign({ fill: "none", "fill-rule": "evenodd" }, { children: ot("path", { d: "M1.458 1.458l21.084 21.084m0-21.084L1.458 22.542" }, void 0) }), void 0),
                            }),
                            void 0
                        );
                    },
                    normal: pr,
                };
            function vr({ label: t }) {
                const { template: e } = Kn();
                return ot("span", { children: e(t) }, void 0);
            }
            const _r = ne(function (t, e) {
                var { button: n, onAction: r } = t,
                    i = (0, Ae._T)(t, ["button", "onAction"]);
                const { current: o } = bt(pn()),
                    { type: s, label: a, actions: c = [] } = n,
                    l = mr[s] || mr.primary,
                    u = c.some((t) => "submit" === t.type) ? "submit" : "button",
                    d = We()("button", s, !a && "icon");
                return ot("button", Object.assign({ ref: e, type: u, className: d, onClick: () => r(c, o) }, i, { children: [a ? ot(vr, { label: a }, void 0) : ot(l, {}, void 0), ot(fr, { name: o }, void 0)] }), void 0);
            });
            function br(t) {
                var { buttons: e } = t,
                    n = (0, Ae._T)(t, ["buttons"]);
                const r = hn(),
                    i = (e || []).filter(({ visible: t = !0 }) => t);
                return 0 === i.length ? null : ot("div", Object.assign({ className: "buttons" }, n, { children: i.map((t, e) => ot(_r, Object.assign({ button: t }, {}, { onAction: r }), e)) }), void 0);
            }
            const wr = Qt(function ({ page: t }) {
                const { buttons: e = [], fields: n = [], title: r, description: i, note: o } = t.data,
                    s = We()("content", { "no-fields": !n.length, "no-label": n.length && !n[0].label });
                return ot(
                    "div",
                    Object.assign(
                        { className: s },
                        {
                            children: [
                                ot(An, Object.assign({ slot: "title" }, { children: r && ot(Zn, Object.assign({}, {}, { text: r }), void 0) }), void 0),
                                i && ot(Qn, Object.assign({}, {}, { text: i }), void 0),
                                ot(Gn, { children: [ot(hr, { fields: n }, void 0), ot(br, { buttons: e }, void 0)] }, void 0),
                                ot(Yn, {}, void 0),
                                o && ot(tr, Object.assign({}, {}, { text: o }), void 0),
                            ],
                        }
                    ),
                    void 0
                );
            });
            function yr(t, e) {
                "function" == typeof t ? t(e) : t && (t.current = e);
            }
            const xr = ne(function ({ className: t, widget: e }, n) {
                    const { ref: r } = (() => {
                            const t = zt(),
                                { widgetId: e } = Me();
                            return ((t = {}) => {
                                const e = bt();
                                e.current = t;
                                const n = bt(null);
                                return {
                                    ref: yt((t) => {
                                        let r = 0;
                                        const i = () => {
                                                const { onAnimationStart: t } = e.current;
                                                0 == r++ && (null == t || t());
                                            },
                                            o = () => {
                                                const { onAnimationEnd: t } = e.current;
                                                0 == --r && (null == t || t());
                                            };
                                        n.current !== t &&
                                            (n.current && (n.current.removeEventListener("animationstart", i), n.current.removeEventListener("animationend", o)),
                                            (n.current = t),
                                            n.current && (n.current.addEventListener("animationstart", i), n.current.addEventListener("animationend", o)));
                                    }, []),
                                };
                            })({ onAnimationStart: () => t(Lt(e, !0)), onAnimationEnd: () => t(Lt(e, !1)) });
                        })(),
                        { ref: i } = (() => {
                            const t = bt(Se);
                            return {
                                ref: yt((e) => {
                                    t.current(),
                                        e &&
                                            (t.current = (function (t) {
                                                if (!t) return () => {};
                                                const e = (t) => t.stopPropagation(),
                                                    n = !!(0, Oe.Z)().events.passiveSupported && { passive: !0, capture: !1 };
                                                return (
                                                    Ce.forEach((r) => t.addEventListener(r, e, n)),
                                                    () => {
                                                        Ce.forEach((n) => t.removeEventListener(n, e));
                                                    }
                                                );
                                            })(e));
                                }, []),
                            };
                        })(),
                        { layout: o, activePage: s, pages: a, preview: c, formState: l } = e,
                        u = a[s],
                        d = s > 0 && (!l.sent || !1),
                        h = We()(
                            (function (t) {
                                const { activePage: e, pages: n, formState: r } = t,
                                    { sending: i, sent: o } = r,
                                    s = n[e];
                                return We()(s.name || `page-${e + 1}`, "page-" + (e === n.length - 1 ? "last" : e ? "middle" : "first"), i && "form-sending", o && "form-sent");
                            })(e),
                            t
                        ),
                        p = yt((t) => {
                            yr(n, t), yr(r, t), yr(i, t);
                        }, []);
                    return ot(Dn, Object.assign({ innerRef: p, className: h, layout: o, expanded: null == c ? void 0 : c.expanded, hasPreviousPage: d, page: u }, { children: ot(wr, { page: u }, s) }), void 0);
                }),
                kr = "preEnter",
                Or = "entering",
                Cr = "entered",
                Sr = "preExit",
                Tr = "exiting",
                Er = "exited",
                jr = "unmounted",
                Pr = ({ initialEntered: t = !0, mountOnEnter: e = !1, unmountOnExit: n = !1, preEnter: r = !0, preExit: i = !0, enter: o = !0, exit: s = !0, timeout: a } = {}) => {
                    const [c, l] = (function (n) {
                            const [r, i] = vt(() => (t ? Cr : e ? jr : Er)),
                                o = bt(null),
                                s = yt((t, e) => {
                                    (o.current = e), i(t);
                                }, []);
                            return (
                                _t(() => {
                                    o.current && (o.current(r), (o.current = null));
                                }, [r]),
                                [r, s]
                            );
                        })(),
                        u = bt(c),
                        d = bt(),
                        [h, p] = wt(() => ("object" == typeof a ? [a.enter, a.exit] : [a, a]), [a]),
                        g = yt(
                            (t) => {
                                const e = (t, e) => {
                                    d.current = window.setTimeout(() => g(t), e);
                                };
                                switch (
                                    (t === Er && n && (t = jr),
                                    window.clearTimeout(d.current),
                                    l((u.current = t), () => {
                                        switch (t) {
                                            case kr:
                                                g(Or);
                                                break;
                                            case Sr:
                                                g(Tr);
                                        }
                                    }),
                                    t)
                                ) {
                                    case Or:
                                        h >= 0 && e(Cr, h);
                                        break;
                                    case Tr:
                                        p >= 0 && e(Er, p);
                                }
                            },
                            [l, h, p, n]
                        ),
                        f = yt(() => {
                            switch (u.current) {
                                case kr:
                                case Or:
                                    g(Cr);
                                    break;
                                case Sr:
                                case Tr:
                                    g(Er);
                            }
                        }, [g]),
                        m = yt(
                            (t) => {
                                const e = [kr, Or, Cr].includes(u.current);
                                "boolean" != typeof t && (t = !e), t && !e ? g(o ? (r ? kr : Or) : Cr) : !t && e && g(s ? (i ? Sr : Tr) : Er);
                            },
                            [o, s, r, i, g]
                        );
                    return _t(() => () => window.clearTimeout(d.current), []), [c, m, f];
                },
                $r = "transition",
                Ir = Math.ceil(1e3 / 60),
                Ar = () => {};
            function Nr(t, e) {
                for (; t.length < e.length; ) t = t.concat(t);
                return Math.max.apply(
                    null,
                    e.map((e, n) => Lr(e) + Lr(t[n]))
                );
            }
            function Lr(t) {
                return 1e3 * Number(t.slice(0, -1).replace(",", "."));
            }
            const Rr = { preEnter: "before-enter enter-active", entering: "enter-active enter", preExit: "before-leave leave-active", exiting: "leave-active leave" },
                Dr = ({ in: t, appear: n = !1 }) => {
                    const [r, i, o] = Pr({ initialEntered: !n && t, mountOnEnter: !0, unmountOnExit: !0 }),
                        s = bt(null),
                        a = yt((t) => {
                            s.current = t;
                        }, []),
                        c = ((t) => Rr[t] || "")(r);
                    return (
                        _t(() => i(t), [t, i]),
                        (function (t, n) {
                            var r = mt(st++, 4);
                            !e.__s && Tt(r.__H, n) && ((r.__ = t), (r.__H = n), at.__h.push(r));
                        })(() => {
                            const t = s.current;
                            if (t)
                                return (
                                    "exited" !== r && "entered" !== r && t.scrollTop,
                                    "entering" === r || "exiting" === r
                                        ? (function (t, e) {
                                              const { type: n, timeout: r, propCount: i } = (function (t) {
                                                  const e = window.getComputedStyle(t),
                                                      n = (e.transitionDelay || "").split(", "),
                                                      r = (e.transitionDuration || "").split(", "),
                                                      i = Nr(n, r),
                                                      o = (e.animationDelay || "").split(", "),
                                                      s = (e.animationDuration || "").split(", "),
                                                      a = Nr(o, s),
                                                      c = Math.max(i, a),
                                                      l = c > 0 ? (i > a ? $r : "animation") : null;
                                                  return { type: l, timeout: c, propCount: l ? (l === $r ? r.length : s.length) : 0 };
                                              })(t);
                                              if (!n) return e(), Ar;
                                              const o = n === $r ? "transitionend" : "animationend";
                                              let s = 0,
                                                  a = null;
                                              const c = () => {
                                                      a && (window.clearTimeout(a), (a = null)), t.removeEventListener(o, u);
                                                  },
                                                  l = () => {
                                                      c(), e();
                                                  },
                                                  u = (e) => {
                                                      e.target === t && ++s >= i && l();
                                                  };
                                              return (
                                                  (a = window.setTimeout(() => {
                                                      s < i && l();
                                                  }, r + Ir)),
                                                  t.addEventListener(o, u),
                                                  () => c()
                                              );
                                          })(t, o)
                                        : void 0
                                );
                        }, [r, o]),
                        { isMounted: "unmounted" !== r, ref: a, className: c }
                    );
                },
                Wr = (0, ke.kC)("getsitecontrol"),
                Mr = { before: ["googleoff: all", ...(Wr ? [`Created with ${Wr}.com`] : [])], after: ["googleon: all"] },
                Ur = Qt(function ({ widget: t }) {
                    const { container: e, inline: n } = ((t) => {
                            const e = ((t) => {
                                const e = bt(Pe(t));
                                return (
                                    _t(() => {
                                        e.current = Pe(t);
                                    }, [t]),
                                    e.current
                                );
                            })(V(t));
                            return { container: e || document.body, inline: !!e };
                        })(t.id),
                        { ref: r } = ((t) => {
                            const e = bt(Te),
                                n = bt(t);
                            _t(() => {
                                n.current = t;
                            }, [t]);
                            const r = yt((t) => {
                                e.current(),
                                    t &&
                                        (e.current = (function (t, { before: e = [], after: n = [] }) {
                                            if (!t) return Te;
                                            const r = e.map((t) => document.createComment(t)),
                                                i = n.map((t) => document.createComment(t));
                                            return (
                                                r.forEach((e) => t.parentNode.insertBefore(e, t)),
                                                i.forEach((e) => t.parentNode.insertBefore(e, t.nextSibling)),
                                                () => {
                                                    [...r, ...i].forEach((t) => t.remove());
                                                }
                                            );
                                        })(t, n.current));
                            }, []);
                            return { ref: r };
                        })(Mr),
                        { ref: i, className: o, isMounted: s } = Dr({ in: t.show, appear: !0 });
                    var a, c;
                    return (
                        _t(() => {
                            const t = `${U(a)}-open`;
                            return document.body.classList.toggle(t, c), () => document.body.classList.remove(t);
                        }, [(a = t.id), (c = s)]),
                        s
                            ? de(
                                  ot(
                                      Re,
                                      Object.assign(
                                          { host: Ne, hostRef: r, id: U(t.id) },
                                          { children: ot(Ie, Object.assign({ widgetId: t.id }, { children: [ot(on, { widget: t, inline: n }, void 0), ot(xr, { className: o, widget: t, ref: i }, void 0)] }), void 0) }
                                      ),
                                      void 0
                                  ),
                                  e
                              )
                            : null
                    );
                }),
                Vr = () => {
                    const t = (() => {
                        const t = Bt((t) => t.widgets);
                        return Object.keys(t)
                            .map((e) => t[e])
                            .sort((t, e) => (e.sort_order || 0) - (t.sort_order || 0));
                    })();
                    return ot(m, { children: t.map((t) => ot(Ur, { widget: t }, t.id + t.layout)) }, void 0);
                },
                Fr = ({ store: t }) => ot(Pt, Object.assign({ store: t }, { children: ot(Vr, {}, void 0) }), void 0);
            class Hr {
                constructor(t, e) {
                    (this._dispatch = e), (this.date = new Date());
                    const n = (function (t) {
                        const e = (function (t = []) {
                            return t.map((t) => {
                                const e = t.data.fields ? Object.assign(Object.assign({}, t.data), { fields: t.data.fields.map(M) }) : t.data;
                                return Object.assign(Object.assign({}, t), { data: e });
                            });
                        })(t.pages);
                        return Object.assign(Object.assign({}, t), { pages: e, pageStack: [], show: !0, animating: !1, activePage: Math.max(0, Math.min(0, e.length - 1)), formState: { data: {}, valid: !0 } });
                    })(t);
                    var r;
                    (this._id = n.id),
                        "inline" !== n.layout || ((r = n.id), document.querySelector(V(r)))
                            ? ((this.shown = !0),
                              this._dispatch(
                                  (function (t) {
                                      return At("widgets/CREATE_OR_UPDATE", t);
                                  })(n)
                              ))
                            : (this.shown = !1);
                }
                close() {
                    this._dispatch(
                        (function (t, e = !0) {
                            return At("widgets/SET_VISIBILITY", { id: t, show: e });
                        })(this._id, !1)
                    );
                }
            }
            class zr {
                constructor(t, { previewInteractive: e }) {
                    (this._runtime = t), (this._isRendered = !1), (this._store = Ht(this._runtime));
                }
                isRendered() {
                    return this._isRendered;
                }
                render(t = {}) {
                    (this._isRendered = !0),
                        this.updateContext(t),
                        (function (t) {
                            const e = document.readyState;
                            "complete" === e || "interactive" === e ? setTimeout(t, 0) : document.addEventListener("DOMContentLoaded", t);
                        })(() => {
                            const t = document.createDocumentFragment();
                            document.body.appendChild(t), R(g(Fr, { store: this._store }), t);
                        });
                }
                async createWidget(t) {
                    return new Hr(t, this._store.dispatch);
                }
                updateContext(t) {
                    this._store.dispatch(At("templateTags/SET", t));
                }
                _enablePreviewMode() {
                    e.vnode = (t) => {
                        var e;
                        return null === (e = t.props) || void 0 === e || e.previewField, t;
                    };
                }
            }
            function Br(t, e) {
                return new zr(t, e);
            }
            !(function () {
                const t = Array.prototype;
                if (t.toJSON) {
                    const e = JSON.stringify;
                    JSON.stringify = function (n, ...r) {
                        const i = t.toJSON;
                        delete t.toJSON;
                        const o = e(n, ...r);
                        return (t.toJSON = i), o;
                    };
                }
            })();
            const qr = (() => {
                let t;
                return (e) => (
                    t ||
                        (t = (async function (t, e) {
                            return new (await Promise.resolve()
                                .then(n.bind(n, 729))
                                .then((t) => t.WidgetRuntime))(t, e);
                        })({ createWidgetRenderer: Br }, e)),
                    t
                );
            })();
            let Gr;
            const Jr = window,
                Yr = function (...t) {
                    if (Gr) return Gr.apiCall(t);
                    Yr.q.push(t);
                };
            (Yr.q = []),
                (Yr.start = async ({ runtime: t, widgets: e = [] } = {}) => {
                    Jr.document.documentMode || (Gr || (Gr = await qr(t)), Gr.run(e), Yr.q && (Yr.q.forEach((t) => Yr(...t)), delete Yr.q));
                });
            const Kr = Jr.gsc;
            if (!Kr || !Kr.start) {
                const t = (Kr && Kr.q) || [];
                (Yr.q = [...t]), (Jr.gsc = Yr);
            }
        })();
})();
//# sourceMappingURL=runtime.bc4da13.js.map
