!function() {
    function t(e, n, r) {
        function i(o, a) {
            if (!n[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(o, !0);
                    if (s)
                        return s(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var c = n[o] = {
                    exports: {}
                };
                e[o][0].call(c.exports, function(t) {
                    var n = e[o][1][t];
                    return i(n || t)
                }, c, c.exports, t, e, n, r)
            }
            return n[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++)
            i(r[o]);
        return i
    }
    return t
}()({
    1: [function(t, e, n) {
        !function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(t) {
                if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                return n(t)
            }
            : n(t)
        }("undefined" != typeof window ? window : this, function(t, e) {
            function n(t) {
                var e = !!t && "length"in t && t.length
                  , n = ft.type(t);
                return "function" === n || ft.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }
            function r(t, e, n) {
                if (ft.isFunction(e))
                    return ft.grep(t, function(t, r) {
                        return !!e.call(t, r, t) !== n
                    });
                if (e.nodeType)
                    return ft.grep(t, function(t) {
                        return t === e !== n
                    });
                if ("string" == typeof e) {
                    if (kt.test(e))
                        return ft.filter(e, t, n);
                    e = ft.filter(e, t)
                }
                return ft.grep(t, function(t) {
                    return ft.inArray(t, e) > -1 !== n
                })
            }
            function i(t, e) {
                do
                    t = t[e];
                while (t && 1 !== t.nodeType);
                return t
            }
            function s(t) {
                var e = {};
                return ft.each(t.match(Nt) || [], function(t, n) {
                    e[n] = !0
                }),
                e
            }
            function o() {
                rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a),
                t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a),
                t.detachEvent("onload", a))
            }
            function a() {
                (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (o(),
                ft.ready())
            }
            function l(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var r = "data-" + e.replace(Yt, "-$1").toLowerCase();
                    if (n = t.getAttribute(r),
                    "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : At.test(n) ? ft.parseJSON(n) : n
                        } catch (i) {}
                        ft.data(t, e, n)
                    } else
                        n = void 0
                }
                return n
            }
            function u(t) {
                var e;
                for (e in t)
                    if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)
                        return !1;
                return !0
            }
            function c(t, e, n, r) {
                if (Et(t)) {
                    var i, s, o = ft.expando, a = t.nodeType, l = a ? ft.cache : t, u = a ? t[o] : t[o] && o;
                    if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof e)
                        return u || (u = a ? t[o] = nt.pop() || ft.guid++ : o),
                        l[u] || (l[u] = a ? {} : {
                            toJSON: ft.noop
                        }),
                        ("object" == typeof e || "function" == typeof e) && (r ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)),
                        s = l[u],
                        r || (s.data || (s.data = {}),
                        s = s.data),
                        void 0 !== n && (s[ft.camelCase(e)] = n),
                        "string" == typeof e ? (i = s[e],
                        null == i && (i = s[ft.camelCase(e)])) : i = s,
                        i
                }
            }
            function h(t, e, n) {
                if (Et(t)) {
                    var r, i, s = t.nodeType, o = s ? ft.cache : t, a = s ? t[ft.expando] : ft.expando;
                    if (o[a]) {
                        if (e && (r = n ? o[a] : o[a].data)) {
                            ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in r ? e = [e] : (e = ft.camelCase(e),
                            e = e in r ? [e] : e.split(" ")),
                            i = e.length;
                            for (; i--; )
                                delete r[e[i]];
                            if (n ? !u(r) : !ft.isEmptyObject(r))
                                return
                        }
                        (n || (delete o[a].data,
                        u(o[a]))) && (s ? ft.cleanData([t], !0) : ht.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0)
                    }
                }
            }
            function d(t, e, n, r) {
                var i, s = 1, o = 20, a = r ? function() {
                    return r.cur()
                }
                : function() {
                    return ft.css(t, e, "")
                }
                , l = a(), u = n && n[3] || (ft.cssNumber[e] ? "" : "px"), c = (ft.cssNumber[e] || "px" !== u && +l) && Lt.exec(ft.css(t, e));
                if (c && c[3] !== u) {
                    u = u || c[3],
                    n = n || [],
                    c = +l || 1;
                    do
                        s = s || ".5",
                        c /= s,
                        ft.style(t, e, c + u);
                    while (s !== (s = a() / l) && 1 !== s && --o)
                }
                return n && (c = +c || +l || 0,
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = u,
                r.start = c,
                r.end = i)),
                i
            }
            function f(t) {
                var e = Ut.split("|")
                  , n = t.createDocumentFragment();
                if (n.createElement)
                    for (; e.length; )
                        n.createElement(e.pop());
                return n
            }
            function p(t, e) {
                var n, r, i = 0, s = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                if (!s)
                    for (s = [],
                    n = t.childNodes || t; null != (r = n[i]); i++)
                        !e || ft.nodeName(r, e) ? s.push(r) : ft.merge(s, p(r, e));
                return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], s) : s
            }
            function m(t, e) {
                for (var n, r = 0; null != (n = t[r]); r++)
                    ft._data(n, "globalEval", !e || ft._data(e[r], "globalEval"))
            }
            function g(t) {
                Wt.test(t.type) && (t.defaultChecked = t.checked)
            }
            function y(t, e, n, r, i) {
                for (var s, o, a, l, u, c, h, d = t.length, y = f(e), v = [], w = 0; d > w; w++)
                    if (o = t[w],
                    o || 0 === o)
                        if ("object" === ft.type(o))
                            ft.merge(v, o.nodeType ? [o] : o);
                        else if ($t.test(o)) {
                            for (l = l || y.appendChild(e.createElement("div")),
                            u = (qt.exec(o) || ["", ""])[1].toLowerCase(),
                            h = zt[u] || zt._default,
                            l.innerHTML = h[1] + ft.htmlPrefilter(o) + h[2],
                            s = h[0]; s--; )
                                l = l.lastChild;
                            if (!ht.leadingWhitespace && Bt.test(o) && v.push(e.createTextNode(Bt.exec(o)[0])),
                            !ht.tbody)
                                for (o = "table" !== u || Vt.test(o) ? "<table>" !== h[1] || Vt.test(o) ? 0 : l : l.firstChild,
                                s = o && o.childNodes.length; s--; )
                                    ft.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                            for (ft.merge(v, l.childNodes),
                            l.textContent = ""; l.firstChild; )
                                l.removeChild(l.firstChild);
                            l = y.lastChild
                        } else
                            v.push(e.createTextNode(o));
                for (l && y.removeChild(l),
                ht.appendChecked || ft.grep(p(v, "input"), g),
                w = 0; o = v[w++]; )
                    if (r && ft.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (a = ft.contains(o.ownerDocument, o),
                    l = p(y.appendChild(o), "script"),
                    a && m(l),
                    n)
                        for (s = 0; o = l[s++]; )
                            It.test(o.type || "") && n.push(o);
                return l = null,
                y
            }
            function v() {
                return !0
            }
            function w() {
                return !1
            }
            function b() {
                try {
                    return rt.activeElement
                } catch (t) {}
            }
            function x(t, e, n, r, i, s) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n,
                    n = void 0);
                    for (a in e)
                        x(t, a, n, r, e[a], s);
                    return t
                }
                if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
                i === !1)
                    i = w;
                else if (!i)
                    return t;
                return 1 === s && (o = i,
                i = function(t) {
                    return ft().off(t),
                    o.apply(this, arguments)
                }
                ,
                i.guid = o.guid || (o.guid = ft.guid++)),
                t.each(function() {
                    ft.event.add(this, e, i, r, n)
                })
            }
            function _(t, e) {
                return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }
            function k(t) {
                return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type,
                t
            }
            function S(t) {
                var e = ie.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"),
                t
            }
            function T(t, e) {
                if (1 === e.nodeType && ft.hasData(t)) {
                    var n, r, i, s = ft._data(t), o = ft._data(e, s), a = s.events;
                    if (a) {
                        delete o.handle,
                        o.events = {};
                        for (n in a)
                            for (r = 0,
                            i = a[n].length; i > r; r++)
                                ft.event.add(e, n, a[n][r])
                    }
                    o.data && (o.data = ft.extend({}, o.data))
                }
            }
            function C(t, e) {
                var n, r, i;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(),
                    !ht.noCloneEvent && e[ft.expando]) {
                        i = ft._data(e);
                        for (r in i.events)
                            ft.removeEvent(e, r, i.handle);
                        e.removeAttribute(ft.expando)
                    }
                    "script" === n && e.text !== t.text ? (k(e).text = t.text,
                    S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
                    ht.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
                    e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
                }
            }
            function M(t, e, n, r) {
                e = st.apply([], e);
                var i, s, o, a, l, u, c = 0, h = t.length, d = h - 1, f = e[0], m = ft.isFunction(f);
                if (m || h > 1 && "string" == typeof f && !ht.checkClone && re.test(f))
                    return t.each(function(i) {
                        var s = t.eq(i);
                        m && (e[0] = f.call(this, i, s.html())),
                        M(s, e, n, r)
                    });
                if (h && (u = y(e, t[0].ownerDocument, !1, t, r),
                i = u.firstChild,
                1 === u.childNodes.length && (u = i),
                i || r)) {
                    for (a = ft.map(p(u, "script"), k),
                    o = a.length; h > c; c++)
                        s = u,
                        c !== d && (s = ft.clone(s, !0, !0),
                        o && ft.merge(a, p(s, "script"))),
                        n.call(t[c], s, c);
                    if (o)
                        for (l = a[a.length - 1].ownerDocument,
                        ft.map(a, S),
                        c = 0; o > c; c++)
                            s = a[c],
                            It.test(s.type || "") && !ft._data(s, "globalEval") && ft.contains(l, s) && (s.src ? ft._evalUrl && ft._evalUrl(s.src) : ft.globalEval((s.text || s.textContent || s.innerHTML || "").replace(se, "")));
                    u = i = null
                }
                return t
            }
            function D(t, e, n) {
                for (var r, i = e ? ft.filter(e, t) : t, s = 0; null != (r = i[s]); s++)
                    n || 1 !== r.nodeType || ft.cleanData(p(r)),
                    r.parentNode && (n && ft.contains(r.ownerDocument, r) && m(p(r, "script")),
                    r.parentNode.removeChild(r));
                return t
            }
            function N(t, e) {
                var n = ft(e.createElement(t)).appendTo(e.body)
                  , r = ft.css(n[0], "display");
                return n.detach(),
                r
            }
            function O(t) {
                var e = rt
                  , n = ue[t];
                return n || (n = N(t, e),
                "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
                e = (le[0].contentWindow || le[0].contentDocument).document,
                e.write(),
                e.close(),
                n = N(t, e),
                le.detach()),
                ue[t] = n),
                n
            }
            function j(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }
            function E(t) {
                if (t in Se)
                    return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--; )
                    if (t = ke[n] + e,
                    t in Se)
                        return t
            }
            function A(t, e) {
                for (var n, r, i, s = [], o = 0, a = t.length; a > o; o++)
                    r = t[o],
                    r.style && (s[o] = ft._data(r, "olddisplay"),
                    n = r.style.display,
                    e ? (s[o] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && Ht(r) && (s[o] = ft._data(r, "olddisplay", O(r.nodeName)))) : (i = Ht(r),
                    (n && "none" !== n || !i) && ft._data(r, "olddisplay", i ? n : ft.css(r, "display"))));
                for (o = 0; a > o; o++)
                    r = t[o],
                    r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? s[o] || "" : "none"));
                return t
            }
            function Y(t, e, n) {
                var r = be.exec(e);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
            }
            function P(t, e, n, r, i) {
                for (var s = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)
                    "margin" === n && (o += ft.css(t, n + Ft[s], !0, i)),
                    r ? ("content" === n && (o -= ft.css(t, "padding" + Ft[s], !0, i)),
                    "margin" !== n && (o -= ft.css(t, "border" + Ft[s] + "Width", !0, i))) : (o += ft.css(t, "padding" + Ft[s], !0, i),
                    "padding" !== n && (o += ft.css(t, "border" + Ft[s] + "Width", !0, i)));
                return o
            }
            function L(t, e, n) {
                var r = !0
                  , i = "width" === e ? t.offsetWidth : t.offsetHeight
                  , s = pe(t)
                  , o = ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, s);
                if (0 >= i || null == i) {
                    if (i = me(t, e, s),
                    (0 > i || null == i) && (i = t.style[e]),
                    he.test(i))
                        return i;
                    r = o && (ht.boxSizingReliable() || i === t.style[e]),
                    i = parseFloat(i) || 0
                }
                return i + P(t, e, n || (o ? "border" : "content"), r, s) + "px"
            }
            function F(t, e, n, r, i) {
                return new F.prototype.init(t,e,n,r,i)
            }
            function H() {
                return t.setTimeout(function() {
                    Te = void 0
                }),
                Te = ft.now()
            }
            function R(t, e) {
                var n, r = {
                    height: t
                }, i = 0;
                for (e = e ? 1 : 0; 4 > i; i += 2 - e)
                    n = Ft[i],
                    r["margin" + n] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t),
                r
            }
            function W(t, e, n) {
                for (var r, i = (B.tweeners[e] || []).concat(B.tweeners["*"]), s = 0, o = i.length; o > s; s++)
                    if (r = i[s].call(n, e, t))
                        return r
            }
            function q(t, e, n) {
                var r, i, s, o, a, l, u, c, h = this, d = {}, f = t.style, p = t.nodeType && Ht(t), m = ft._data(t, "fxshow");
                n.queue || (a = ft._queueHooks(t, "fx"),
                null == a.unqueued && (a.unqueued = 0,
                l = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || l()
                }
                ),
                a.unqueued++,
                h.always(function() {
                    h.always(function() {
                        a.unqueued--,
                        ft.queue(t, "fx").length || a.empty.fire()
                    })
                })),
                1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                u = ft.css(t, "display"),
                c = "none" === u ? ft._data(t, "olddisplay") || O(t.nodeName) : u,
                "inline" === c && "none" === ft.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== O(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden",
                ht.shrinkWrapBlocks() || h.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }));
                for (r in e)
                    if (i = e[r],
                    Me.exec(i)) {
                        if (delete e[r],
                        s = s || "toggle" === i,
                        i === (p ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r])
                                continue;
                            p = !0
                        }
                        d[r] = m && m[r] || ft.style(t, r)
                    } else
                        u = void 0;
                if (ft.isEmptyObject(d))
                    "inline" === ("none" === u ? O(t.nodeName) : u) && (f.display = u);
                else {
                    m ? "hidden"in m && (p = m.hidden) : m = ft._data(t, "fxshow", {}),
                    s && (m.hidden = !p),
                    p ? ft(t).show() : h.done(function() {
                        ft(t).hide()
                    }),
                    h.done(function() {
                        var e;
                        ft._removeData(t, "fxshow");
                        for (e in d)
                            ft.style(t, e, d[e])
                    });
                    for (r in d)
                        o = W(p ? m[r] : 0, r, h),
                        r in m || (m[r] = o.start,
                        p && (o.end = o.start,
                        o.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function I(t, e) {
                var n, r, i, s, o;
                for (n in t)
                    if (r = ft.camelCase(n),
                    i = e[r],
                    s = t[n],
                    ft.isArray(s) && (i = s[1],
                    s = t[n] = s[0]),
                    n !== r && (t[r] = s,
                    delete t[n]),
                    o = ft.cssHooks[r],
                    o && "expand"in o) {
                        s = o.expand(s),
                        delete t[r];
                        for (n in s)
                            n in t || (t[n] = s[n],
                            e[n] = i)
                    } else
                        e[r] = i
            }
            function B(t, e, n) {
                var r, i, s = 0, o = B.prefilters.length, a = ft.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (i)
                        return !1;
                    for (var e = Te || H(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, s = 1 - r, o = 0, l = u.tweens.length; l > o; o++)
                        u.tweens[o].run(s);
                    return a.notifyWith(t, [u, s, n]),
                    1 > s && l ? n : (a.resolveWith(t, [u]),
                    !1)
                }, u = a.promise({
                    elem: t,
                    props: ft.extend({}, e),
                    opts: ft.extend(!0, {
                        specialEasing: {},
                        easing: ft.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Te || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var r = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(r),
                        r
                    },
                    stop: function(e) {
                        var n = 0
                          , r = e ? u.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; r > n; n++)
                            u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]),
                        a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]),
                        this
                    }
                }), c = u.props;
                for (I(c, u.opts.specialEasing); o > s; s++)
                    if (r = B.prefilters[s].call(u, t, c, u.opts))
                        return ft.isFunction(r.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(r.stop, r)),
                        r;
                return ft.map(c, W, u),
                ft.isFunction(u.opts.start) && u.opts.start.call(t, u),
                ft.fx.timer(ft.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function U(t) {
                return ft.attr(t, "class") || ""
            }
            function z(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e,
                    e = "*");
                    var r, i = 0, s = e.toLowerCase().match(Nt) || [];
                    if (ft.isFunction(n))
                        for (; r = s[i++]; )
                            "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                            (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                }
            }
            function $(t, e, n, r) {
                function i(a) {
                    var l;
                    return s[a] = !0,
                    ft.each(t[a] || [], function(t, a) {
                        var u = a(e, n, r);
                        return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                        i(u),
                        !1)
                    }),
                    l
                }
                var s = {}
                  , o = t === Ke;
                return i(e.dataTypes[0]) || !s["*"] && i("*")
            }
            function V(t, e) {
                var n, r, i = ft.ajaxSettings.flatOptions || {};
                for (r in e)
                    void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
                return n && ft.extend(!0, t, n),
                t
            }
            function G(t, e, n) {
                for (var r, i, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                    l.shift(),
                    void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                    for (o in a)
                        if (a[o] && a[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                if (l[0]in n)
                    s = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || t.converters[o + " " + l[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                return s ? (s !== l[0] && l.unshift(s),
                n[s]) : void 0
            }
            function X(t, e, n, r) {
                var i, s, o, a, l, u = {}, c = t.dataTypes.slice();
                if (c[1])
                    for (o in t.converters)
                        u[o.toLowerCase()] = t.converters[o];
                for (s = c.shift(); s; )
                    if (t.responseFields[s] && (n[t.responseFields[s]] = e),
                    !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                    l = s,
                    s = c.shift())
                        if ("*" === s)
                            s = l;
                        else if ("*" !== l && l !== s) {
                            if (o = u[l + " " + s] || u["* " + s],
                            !o)
                                for (i in u)
                                    if (a = i.split(" "),
                                    a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        o === !0 ? o = u[i] : u[i] !== !0 && (s = a[0],
                                        c.unshift(a[1]));
                                        break
                                    }
                            if (o !== !0)
                                if (o && t["throws"])
                                    e = o(e);
                                else
                                    try {
                                        e = o(e)
                                    } catch (h) {
                                        return {
                                            state: "parsererror",
                                            error: o ? h : "No conversion from " + l + " to " + s
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: e
                }
            }
            function Z(t) {
                return t.style && t.style.display || ft.css(t, "display")
            }
            function J(t) {
                if (!ft.contains(t.ownerDocument || rt, t))
                    return !0;
                for (; t && 1 === t.nodeType; ) {
                    if ("none" === Z(t) || "hidden" === t.type)
                        return !0;
                    t = t.parentNode
                }
                return !1
            }
            function K(t, e, n, r) {
                var i;
                if (ft.isArray(e))
                    ft.each(e, function(e, i) {
                        n || rn.test(t) ? r(t, i) : K(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
                    });
                else if (n || "object" !== ft.type(e))
                    r(t, e);
                else
                    for (i in e)
                        K(t + "[" + i + "]", e[i], n, r)
            }
            function Q() {
                try {
                    return new t.XMLHttpRequest
                } catch (e) {}
            }
            function tt() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            function et(t) {
                return ft.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
            }
            var nt = []
              , rt = t.document
              , it = nt.slice
              , st = nt.concat
              , ot = nt.push
              , at = nt.indexOf
              , lt = {}
              , ut = lt.toString
              , ct = lt.hasOwnProperty
              , ht = {}
              , dt = "1.12.4"
              , ft = function(t, e) {
                return new ft.fn.init(t,e)
            }
              , pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , mt = /^-ms-/
              , gt = /-([\da-z])/gi
              , yt = function(t, e) {
                return e.toUpperCase()
            };
            ft.fn = ft.prototype = {
                jquery: dt,
                constructor: ft,
                selector: "",
                length: 0,
                toArray: function() {
                    return it.call(this)
                },
                get: function(t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : it.call(this)
                },
                pushStack: function(t) {
                    var e = ft.merge(this.constructor(), t);
                    return e.prevObject = this,
                    e.context = this.context,
                    e
                },
                each: function(t) {
                    return ft.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(ft.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(it.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length
                      , n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: ot,
                sort: nt.sort,
                splice: nt.splice
            },
            ft.extend = ft.fn.extend = function() {
                var t, e, n, r, i, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof o && (u = o,
                o = arguments[a] || {},
                a++),
                "object" == typeof o || ft.isFunction(o) || (o = {}),
                a === l && (o = this,
                a--); l > a; a++)
                    if (null != (i = arguments[a]))
                        for (r in i)
                            t = o[r],
                            n = i[r],
                            o !== n && (u && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1,
                            s = t && ft.isArray(t) ? t : []) : s = t && ft.isPlainObject(t) ? t : {},
                            o[r] = ft.extend(u, s, n)) : void 0 !== n && (o[r] = n));
                return o
            }
            ,
            ft.extend({
                expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === ft.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ft.type(t)
                }
                ,
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t)
                        return !1;
                    return !0
                },
                isPlainObject: function(t) {
                    var e;
                    if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))
                        return !1;
                    try {
                        if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (n) {
                        return !1
                    }
                    if (!ht.ownFirst)
                        for (e in t)
                            return ct.call(t, e);
                    for (e in t)
                        ;
                    return void 0 === e || ct.call(t, e)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
                },
                globalEval: function(e) {
                    e && ft.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    }
                    )(e)
                },
                camelCase: function(t) {
                    return t.replace(mt, "ms-").replace(gt, yt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var r, i = 0;
                    if (n(t))
                        for (r = t.length; r > i && e.call(t[i], i, t[i]) !== !1; i++)
                            ;
                    else
                        for (i in t)
                            if (e.call(t[i], i, t[i]) === !1)
                                break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(pt, "")
                },
                makeArray: function(t, e) {
                    var r = e || [];
                    return null != t && (n(Object(t)) ? ft.merge(r, "string" == typeof t ? [t] : t) : ot.call(r, t)),
                    r
                },
                inArray: function(t, e, n) {
                    var r;
                    if (e) {
                        if (at)
                            return at.call(e, t, n);
                        for (r = e.length,
                        n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in e && e[n] === t)
                                return n
                    }
                    return -1
                },
                merge: function(t, e) {
                    for (var n = +e.length, r = 0, i = t.length; n > r; )
                        t[i++] = e[r++];
                    if (n !== n)
                        for (; void 0 !== e[r]; )
                            t[i++] = e[r++];
                    return t.length = i,
                    t
                },
                grep: function(t, e, n) {
                    for (var r, i = [], s = 0, o = t.length, a = !n; o > s; s++)
                        r = !e(t[s], s),
                        r !== a && i.push(t[s]);
                    return i
                },
                map: function(t, e, r) {
                    var i, s, o = 0, a = [];
                    if (n(t))
                        for (i = t.length; i > o; o++)
                            s = e(t[o], o, r),
                            null != s && a.push(s);
                    else
                        for (o in t)
                            s = e(t[o], o, r),
                            null != s && a.push(s);
                    return st.apply([], a)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, r, i;
                    return "string" == typeof e && (i = t[e],
                    e = t,
                    t = i),
                    ft.isFunction(t) ? (n = it.call(arguments, 2),
                    r = function() {
                        return t.apply(e || this, n.concat(it.call(arguments)))
                    }
                    ,
                    r.guid = t.guid = t.guid || ft.guid++,
                    r) : void 0
                },
                now: function() {
                    return +new Date
                },
                support: ht
            }),
            "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]),
            ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                lt["[object " + e + "]"] = e.toLowerCase()
            });
            var vt = function(t) {
                function e(t, e, n, r) {
                    var i, s, o, a, l, u, h, f, p = e && e.ownerDocument, m = e ? e.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                        return n;
                    if (!r && ((e ? e.ownerDocument || e : W) !== E && j(e),
                    e = e || E,
                    Y)) {
                        if (11 !== m && (u = yt.exec(t)))
                            if (i = u[1]) {
                                if (9 === m) {
                                    if (!(o = e.getElementById(i)))
                                        return n;
                                    if (o.id === i)
                                        return n.push(o),
                                        n
                                } else if (p && (o = p.getElementById(i)) && H(e, o) && o.id === i)
                                    return n.push(o),
                                    n
                            } else {
                                if (u[2])
                                    return K.apply(n, e.getElementsByTagName(t)),
                                    n;
                                if ((i = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                    return K.apply(n, e.getElementsByClassName(i)),
                                    n
                            }
                        if (x.qsa && !z[t + " "] && (!P || !P.test(t))) {
                            if (1 !== m)
                                p = e,
                                f = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = R),
                                h = T(t),
                                s = h.length,
                                l = dt.test(a) ? "#" + a : "[id='" + a + "']"; s--; )
                                    h[s] = l + " " + d(h[s]);
                                f = h.join(","),
                                p = vt.test(t) && c(e.parentNode) || e
                            }
                            if (f)
                                try {
                                    return K.apply(n, p.querySelectorAll(f)),
                                    n
                                } catch (g) {} finally {
                                    a === R && e.removeAttribute("id")
                                }
                        }
                    }
                    return M(t.replace(at, "$1"), e, n, r)
                }
                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()],
                        t[n + " "] = r
                    }
                    var e = [];
                    return t
                }
                function r(t) {
                    return t[R] = !0,
                    t
                }
                function i(t) {
                    var e = E.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null
                    }
                }
                function s(t, e) {
                    for (var n = t.split("|"), r = n.length; r--; )
                        _.attrHandle[n[r]] = e
                }
                function o(t, e) {
                    var n = e && t
                      , r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === e)
                                return -1;
                    return t ? 1 : -1
                }
                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }
                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }
                function u(t) {
                    return r(function(e) {
                        return e = +e,
                        r(function(n, r) {
                            for (var i, s = t([], n.length, e), o = s.length; o--; )
                                n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }
                function h() {}
                function d(t) {
                    for (var e = 0, n = t.length, r = ""; n > e; e++)
                        r += t[e].value;
                    return r
                }
                function f(t, e, n) {
                    var r = e.dir
                      , i = n && "parentNode" === r
                      , s = I++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[r]; )
                            if (1 === e.nodeType || i)
                                return t(e, n, s)
                    }
                    : function(e, n, o) {
                        var a, l, u, c = [q, s];
                        if (o) {
                            for (; e = e[r]; )
                                if ((1 === e.nodeType || i) && t(e, n, o))
                                    return !0
                        } else
                            for (; e = e[r]; )
                                if (1 === e.nodeType || i) {
                                    if (u = e[R] || (e[R] = {}),
                                    l = u[e.uniqueID] || (u[e.uniqueID] = {}),
                                    (a = l[r]) && a[0] === q && a[1] === s)
                                        return c[2] = a[2];
                                    if (l[r] = c,
                                    c[2] = t(e, n, o))
                                        return !0
                                }
                    }
                }
                function p(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--; )
                            if (!t[i](e, n, r))
                                return !1;
                        return !0
                    }
                    : t[0]
                }
                function m(t, n, r) {
                    for (var i = 0, s = n.length; s > i; i++)
                        e(t, n[i], r);
                    return r
                }
                function g(t, e, n, r, i) {
                    for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)
                        (s = t[a]) && (!n || n(s, r, i)) && (o.push(s),
                        u && e.push(a));
                    return o
                }
                function y(t, e, n, i, s, o) {
                    return i && !i[R] && (i = y(i)),
                    s && !s[R] && (s = y(s, o)),
                    r(function(r, o, a, l) {
                        var u, c, h, d = [], f = [], p = o.length, y = r || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !r && e ? y : g(y, d, t, a, l), w = n ? s || (r ? t : p || i) ? [] : o : v;
                        if (n && n(v, w, a, l),
                        i)
                            for (u = g(w, f),
                            i(u, [], a, l),
                            c = u.length; c--; )
                                (h = u[c]) && (w[f[c]] = !(v[f[c]] = h));
                        if (r) {
                            if (s || t) {
                                if (s) {
                                    for (u = [],
                                    c = w.length; c--; )
                                        (h = w[c]) && u.push(v[c] = h);
                                    s(null, w = [], u, l)
                                }
                                for (c = w.length; c--; )
                                    (h = w[c]) && (u = s ? tt(r, h) : d[c]) > -1 && (r[u] = !(o[u] = h))
                            }
                        } else
                            w = g(w === o ? w.splice(p, w.length) : w),
                            s ? s(null, o, w, l) : K.apply(o, w)
                    })
                }
                function v(t) {
                    for (var e, n, r, i = t.length, s = _.relative[t[0].type], o = s || _.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, o, !0), u = f(function(t) {
                        return tt(e, t) > -1
                    }, o, !0), c = [function(t, n, r) {
                        var i = !s && (r || n !== D) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                        return e = null,
                        i
                    }
                    ]; i > a; a++)
                        if (n = _.relative[t[a].type])
                            c = [f(p(c), n)];
                        else {
                            if (n = _.filter[t[a].type].apply(null, t[a].matches),
                            n[R]) {
                                for (r = ++a; i > r && !_.relative[t[r].type]; r++)
                                    ;
                                return y(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(at, "$1"), n, r > a && v(t.slice(a, r)), i > r && v(t = t.slice(r)), i > r && d(t))
                            }
                            c.push(n)
                        }
                    return p(c)
                }
                function w(t, n) {
                    var i = n.length > 0
                      , s = t.length > 0
                      , o = function(r, o, a, l, u) {
                        var c, h, d, f = 0, p = "0", m = r && [], y = [], v = D, w = r || s && _.find.TAG("*", u), b = q += null == v ? 1 : Math.random() || .1, x = w.length;
                        for (u && (D = o === E || o || u); p !== x && null != (c = w[p]); p++) {
                            if (s && c) {
                                for (h = 0,
                                o || c.ownerDocument === E || (j(c),
                                a = !Y); d = t[h++]; )
                                    if (d(c, o || E, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = b)
                            }
                            i && ((c = !d && c) && f--,
                            r && m.push(c))
                        }
                        if (f += p,
                        i && p !== f) {
                            for (h = 0; d = n[h++]; )
                                d(m, y, o, a);
                            if (r) {
                                if (f > 0)
                                    for (; p--; )
                                        m[p] || y[p] || (y[p] = Z.call(l));
                                y = g(y)
                            }
                            K.apply(l, y),
                            u && !r && y.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (q = b,
                        D = v),
                        m
                    };
                    return i ? r(o) : o
                }
                var b, x, _, k, S, T, C, M, D, N, O, j, E, A, Y, P, L, F, H, R = "sizzle" + 1 * new Date, W = t.document, q = 0, I = 0, B = n(), U = n(), z = n(), $ = function(t, e) {
                    return t === e && (O = !0),
                    0
                }, V = 1 << 31, G = {}.hasOwnProperty, X = [], Z = X.pop, J = X.push, K = X.push, Q = X.slice, tt = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e)
                            return n;
                    return -1
                }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", ot = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ht = new RegExp(st), dt = new RegExp("^" + rt + "$"), ft = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + et + ")$","i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
                }, pt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, wt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, _t = function() {
                    j()
                };
                try {
                    K.apply(X = Q.call(W.childNodes), W.childNodes),
                    X[W.childNodes.length].nodeType
                } catch (kt) {
                    K = {
                        apply: X.length ? function(t, e) {
                            J.apply(t, Q.call(e))
                        }
                        : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++]; )
                                ;
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {},
                S = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }
                ,
                j = e.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : W;
                    return r !== E && 9 === r.nodeType && r.documentElement ? (E = r,
                    A = E.documentElement,
                    Y = !S(E),
                    (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)),
                    x.attributes = i(function(t) {
                        return t.className = "i",
                        !t.getAttribute("className")
                    }),
                    x.getElementsByTagName = i(function(t) {
                        return t.appendChild(E.createComment("")),
                        !t.getElementsByTagName("*").length
                    }),
                    x.getElementsByClassName = gt.test(E.getElementsByClassName),
                    x.getById = i(function(t) {
                        return A.appendChild(t).id = R,
                        !E.getElementsByName || !E.getElementsByName(R).length
                    }),
                    x.getById ? (_.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && Y) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }
                    ,
                    _.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }
                    ) : (delete _.find.ID,
                    _.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }
                    ),
                    _.find.TAG = x.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    }
                    : function(t, e) {
                        var n, r = [], i = 0, s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return s
                    }
                    ,
                    _.find.CLASS = x.getElementsByClassName && function(t, e) {
                        return "undefined" != typeof e.getElementsByClassName && Y ? e.getElementsByClassName(t) : void 0
                    }
                    ,
                    L = [],
                    P = [],
                    (x.qsa = gt.test(E.querySelectorAll)) && (i(function(t) {
                        A.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"),
                        t.querySelectorAll("[id~=" + R + "-]").length || P.push("~="),
                        t.querySelectorAll(":checked").length || P.push(":checked"),
                        t.querySelectorAll("a#" + R + "+*").length || P.push(".#.+[+~]")
                    }),
                    i(function(t) {
                        var e = E.createElement("input");
                        e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="),
                        t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        P.push(",.*:")
                    })),
                    (x.matchesSelector = gt.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(t) {
                        x.disconnectedMatch = F.call(t, "div"),
                        F.call(t, "[s!='']:x"),
                        L.push("!=", st)
                    }),
                    P = P.length && new RegExp(P.join("|")),
                    L = L.length && new RegExp(L.join("|")),
                    e = gt.test(A.compareDocumentPosition),
                    H = e || gt.test(A.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t
                          , r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    }
                    : function(t, e) {
                        if (e)
                            for (; e = e.parentNode; )
                                if (e === t)
                                    return !0;
                        return !1
                    }
                    ,
                    $ = e ? function(t, e) {
                        if (t === e)
                            return O = !0,
                            0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                        1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === E || t.ownerDocument === W && H(W, t) ? -1 : e === E || e.ownerDocument === W && H(W, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(t, e) {
                        if (t === e)
                            return O = !0,
                            0;
                        var n, r = 0, i = t.parentNode, s = e.parentNode, a = [t], l = [e];
                        if (!i || !s)
                            return t === E ? -1 : e === E ? 1 : i ? -1 : s ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                        if (i === s)
                            return o(t, e);
                        for (n = t; n = n.parentNode; )
                            a.unshift(n);
                        for (n = e; n = n.parentNode; )
                            l.unshift(n);
                        for (; a[r] === l[r]; )
                            r++;
                        return r ? o(a[r], l[r]) : a[r] === W ? -1 : l[r] === W ? 1 : 0
                    }
                    ,
                    E) : E
                }
                ,
                e.matches = function(t, n) {
                    return e(t, null, null, n)
                }
                ,
                e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== E && j(t),
                    n = n.replace(ct, "='$1']"),
                    x.matchesSelector && Y && !z[n + " "] && (!L || !L.test(n)) && (!P || !P.test(n)))
                        try {
                            var r = F.call(t, n);
                            if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return r
                        } catch (i) {}
                    return e(n, E, null, [t]).length > 0
                }
                ,
                e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== E && j(t),
                    H(t, e)
                }
                ,
                e.attr = function(t, e) {
                    (t.ownerDocument || t) !== E && j(t);
                    var n = _.attrHandle[e.toLowerCase()]
                      , r = n && G.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !Y) : void 0;
                    return void 0 !== r ? r : x.attributes || !Y ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }
                ,
                e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }
                ,
                e.uniqueSort = function(t) {
                    var e, n = [], r = 0, i = 0;
                    if (O = !x.detectDuplicates,
                    N = !x.sortStable && t.slice(0),
                    t.sort($),
                    O) {
                        for (; e = t[i++]; )
                            e === t[i] && (r = n.push(i));
                        for (; r--; )
                            t.splice(n[r], 1)
                    }
                    return N = null,
                    t
                }
                ,
                k = e.getText = function(t) {
                    var e, n = "", r = 0, i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += k(t)
                        } else if (3 === i || 4 === i)
                            return t.nodeValue
                    } else
                        for (; e = t[r++]; )
                            n += k(e);
                    return n
                }
                ,
                _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(bt, xt),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                            t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                            t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                            t[2] = n.slice(0, e)),
                            t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(bt, xt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            }
                            : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = B[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, r) {
                            return function(i) {
                                var s = e.attr(i, t);
                                return null == s ? "!=" === n : n ? (s += "",
                                "=" === n ? s === r : "!=" === n ? s !== r : "^=" === n ? r && 0 === s.indexOf(r) : "*=" === n ? r && s.indexOf(r) > -1 : "$=" === n ? r && s.slice(-r.length) === r : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(r) > -1 : "|=" === n ? s === r || s.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, r, i) {
                            var s = "nth" !== t.slice(0, 3)
                              , o = "last" !== t.slice(-4)
                              , a = "of-type" === e;
                            return 1 === r && 0 === i ? function(t) {
                                return !!t.parentNode
                            }
                            : function(e, n, l) {
                                var u, c, h, d, f, p, m = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !l && !a, w = !1;
                                if (g) {
                                    if (s) {
                                        for (; m; ) {
                                            for (d = e; d = d[m]; )
                                                if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                                    return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? g.firstChild : g.lastChild],
                                    o && v) {
                                        for (d = g,
                                        h = d[R] || (d[R] = {}),
                                        c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                        u = c[t] || [],
                                        f = u[0] === q && u[1],
                                        w = f && u[2],
                                        d = f && g.childNodes[f]; d = ++f && d && d[m] || (w = f = 0) || p.pop(); )
                                            if (1 === d.nodeType && ++w && d === e) {
                                                c[t] = [q, f, w];
                                                break
                                            }
                                    } else if (v && (d = e,
                                    h = d[R] || (d[R] = {}),
                                    c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                    u = c[t] || [],
                                    f = u[0] === q && u[1],
                                    w = f),
                                    w === !1)
                                        for (; (d = ++f && d && d[m] || (w = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++w || (v && (h = d[R] || (d[R] = {}),
                                        c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                        c[t] = [q, w]),
                                        d !== e)); )
                                            ;
                                    return w -= i,
                                    w === r || w % r === 0 && w / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var i, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[R] ? s(n) : s.length > 1 ? (i = [t, t, "", n],
                            _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                                for (var r, i = s(t, n), o = i.length; o--; )
                                    r = tt(t, i[o]),
                                    t[r] = !(e[r] = i[o])
                            }) : function(t) {
                                return s(t, 0, i)
                            }
                            ) : s
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = []
                              , n = []
                              , i = C(t.replace(at, "$1"));
                            return i[R] ? r(function(t, e, n, r) {
                                for (var s, o = i(t, null, r, []), a = t.length; a--; )
                                    (s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, r, s) {
                                return e[0] = t,
                                i(e, null, s, n),
                                e[0] = null,
                                !n.pop()
                            }
                        }),
                        has: r(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: r(function(t) {
                            return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }),
                        lang: r(function(t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = Y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === A
                        },
                        focus: function(t) {
                            return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return pt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(t, e) {
                            return [e - 1]
                        }),
                        eq: u(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: u(function(t, e) {
                            for (var n = 0; e > n; n += 2)
                                t.push(n);
                            return t
                        }),
                        odd: u(function(t, e) {
                            for (var n = 1; e > n; n += 2)
                                t.push(n);
                            return t
                        }),
                        lt: u(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; --r >= 0; )
                                t.push(r);
                            return t
                        }),
                        gt: u(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; ++r < e; )
                                t.push(r);
                            return t
                        })
                    }
                },
                _.pseudos.nth = _.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    _.pseudos[b] = a(b);
                for (b in {
                    submit: !0,
                    reset: !0
                })
                    _.pseudos[b] = l(b);
                return h.prototype = _.filters = _.pseudos,
                _.setFilters = new h,
                T = e.tokenize = function(t, n) {
                    var r, i, s, o, a, l, u, c = U[t + " "];
                    if (c)
                        return n ? 0 : c.slice(0);
                    for (a = t,
                    l = [],
                    u = _.preFilter; a; ) {
                        (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                        l.push(s = [])),
                        r = !1,
                        (i = ut.exec(a)) && (r = i.shift(),
                        s.push({
                            value: r,
                            type: i[0].replace(at, " ")
                        }),
                        a = a.slice(r.length));
                        for (o in _.filter)
                            !(i = ft[o].exec(a)) || u[o] && !(i = u[o](i)) || (r = i.shift(),
                            s.push({
                                value: r,
                                type: o,
                                matches: i
                            }),
                            a = a.slice(r.length));
                        if (!r)
                            break
                    }
                    return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
                }
                ,
                C = e.compile = function(t, e) {
                    var n, r = [], i = [], s = z[t + " "];
                    if (!s) {
                        for (e || (e = T(t)),
                        n = e.length; n--; )
                            s = v(e[n]),
                            s[R] ? r.push(s) : i.push(s);
                        s = z(t, w(i, r)),
                        s.selector = t
                    }
                    return s
                }
                ,
                M = e.select = function(t, e, n, r) {
                    var i, s, o, a, l, u = "function" == typeof t && t, h = !r && T(t = u.selector || t);
                    if (n = n || [],
                    1 === h.length) {
                        if (s = h[0] = h[0].slice(0),
                        s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && Y && _.relative[s[1].type]) {
                            if (e = (_.find.ID(o.matches[0].replace(bt, xt), e) || [])[0],
                            !e)
                                return n;
                            u && (e = e.parentNode),
                            t = t.slice(s.shift().value.length)
                        }
                        for (i = ft.needsContext.test(t) ? 0 : s.length; i-- && (o = s[i],
                        !_.relative[a = o.type]); )
                            if ((l = _.find[a]) && (r = l(o.matches[0].replace(bt, xt), vt.test(s[0].type) && c(e.parentNode) || e))) {
                                if (s.splice(i, 1),
                                t = r.length && d(s),
                                !t)
                                    return K.apply(n, r),
                                    n;
                                break
                            }
                    }
                    return (u || C(t, h))(r, e, !Y, n, !e || vt.test(t) && c(e.parentNode) || e),
                    n
                }
                ,
                x.sortStable = R.split("").sort($).join("") === R,
                x.detectDuplicates = !!O,
                j(),
                x.sortDetached = i(function(t) {
                    return 1 & t.compareDocumentPosition(E.createElement("div"))
                }),
                i(function(t) {
                    return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }),
                x.attributes && i(function(t) {
                    return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }),
                i(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(et, function(t, e, n) {
                    var r;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }),
                e
            }(t);
            ft.find = vt,
            ft.expr = vt.selectors,
            ft.expr[":"] = ft.expr.pseudos,
            ft.uniqueSort = ft.unique = vt.uniqueSort,
            ft.text = vt.getText,
            ft.isXMLDoc = vt.isXML,
            ft.contains = vt.contains;
            var wt = function(t, e, n) {
                for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                    if (1 === t.nodeType) {
                        if (i && ft(t).is(n))
                            break;
                        r.push(t)
                    }
                return r
            }
              , bt = function(t, e) {
                for (var n = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && n.push(t);
                return n
            }
              , xt = ft.expr.match.needsContext
              , _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
              , kt = /^.[^:#\[\.,]*$/;
            ft.filter = function(t, e, n) {
                var r = e[0];
                return n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === r.nodeType ? ft.find.matchesSelector(r, t) ? [r] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }
            ,
            ft.fn.extend({
                find: function(t) {
                    var e, n = [], r = this, i = r.length;
                    if ("string" != typeof t)
                        return this.pushStack(ft(t).filter(function() {
                            for (e = 0; i > e; e++)
                                if (ft.contains(r[e], this))
                                    return !0
                        }));
                    for (e = 0; i > e; e++)
                        ft.find(t, r[e], n);
                    return n = this.pushStack(i > 1 ? ft.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + t : t,
                    n
                },
                filter: function(t) {
                    return this.pushStack(r(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(r(this, t || [], !0))
                },
                is: function(t) {
                    return !!r(this, "string" == typeof t && xt.test(t) ? ft(t) : t || [], !1).length
                }
            });
            var St, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Ct = ft.fn.init = function(t, e, n) {
                var r, i;
                if (!t)
                    return this;
                if (n = n || St,
                "string" == typeof t) {
                    if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t),
                    !r || !r[1] && e)
                        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (r[1]) {
                        if (e = e instanceof ft ? e[0] : e,
                        ft.merge(this, ft.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)),
                        _t.test(r[1]) && ft.isPlainObject(e))
                            for (r in e)
                                ft.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this
                    }
                    if (i = rt.getElementById(r[2]),
                    i && i.parentNode) {
                        if (i.id !== r[2])
                            return St.find(t);
                        this.length = 1,
                        this[0] = i
                    }
                    return this.context = rt,
                    this.selector = t,
                    this
                }
                return t.nodeType ? (this.context = this[0] = t,
                this.length = 1,
                this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector,
                this.context = t.context),
                ft.makeArray(t, this))
            }
            ;
            Ct.prototype = ft.fn,
            St = ft(rt);
            var Mt = /^(?:parents|prev(?:Until|All))/
              , Dt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            ft.fn.extend({
                has: function(t) {
                    var e, n = ft(t, this), r = n.length;
                    return this.filter(function() {
                        for (e = 0; r > e; e++)
                            if (ft.contains(this, n[e]))
                                return !0
                    })
                },
                closest: function(t, e) {
                    for (var n, r = 0, i = this.length, s = [], o = xt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            }
                    return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }),
            ft.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return wt(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return wt(t, "parentNode", n)
                },
                next: function(t) {
                    return i(t, "nextSibling")
                },
                prev: function(t) {
                    return i(t, "previousSibling")
                },
                nextAll: function(t) {
                    return wt(t, "nextSibling")
                },
                prevAll: function(t) {
                    return wt(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return wt(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return wt(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return bt((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return bt(t.firstChild)
                },
                contents: function(t) {
                    return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
                }
            }, function(t, e) {
                ft.fn[t] = function(n, r) {
                    var i = ft.map(this, e, n);
                    return "Until" !== t.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = ft.filter(r, i)),
                    this.length > 1 && (Dt[t] || (i = ft.uniqueSort(i)),
                    Mt.test(t) && (i = i.reverse())),
                    this.pushStack(i)
                }
            });
            var Nt = /\S+/g;
            ft.Callbacks = function(t) {
                t = "string" == typeof t ? s(t) : ft.extend({}, t);
                var e, n, r, i, o = [], a = [], l = -1, u = function() {
                    for (i = t.once,
                    r = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < o.length; )
                            o[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = o.length,
                            n = !1);
                    t.memory || (n = !1),
                    e = !1,
                    i && (o = n ? [] : "")
                }, c = {
                    add: function() {
                        return o && (n && !e && (l = o.length - 1,
                        a.push(n)),
                        function r(e) {
                            ft.each(e, function(e, n) {
                                ft.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ft.type(n) && r(n)
                            })
                        }(arguments),
                        n && !e && u()),
                        this
                    },
                    remove: function() {
                        return ft.each(arguments, function(t, e) {
                            for (var n; (n = ft.inArray(e, o, n)) > -1; )
                                o.splice(n, 1),
                                l >= n && l--
                        }),
                        this
                    },
                    has: function(t) {
                        return t ? ft.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return i = a = [],
                        o = n = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = !0,
                        n || c.disable(),
                        this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(t, n) {
                        return i || (n = n || [],
                        n = [t, n.slice ? n.slice() : n],
                        a.push(n),
                        e || u()),
                        this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return c
            }
            ,
            ft.extend({
                Deferred: function(t) {
                    var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]]
                      , n = "pending"
                      , r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var t = arguments;
                            return ft.Deferred(function(n) {
                                ft.each(e, function(e, s) {
                                    var o = ft.isFunction(t[e]) && t[e];
                                    i[s[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [t] : arguments)
                                    })
                                }),
                                t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ft.extend(t, r) : r
                        }
                    }
                      , i = {};
                    return r.pipe = r.then,
                    ft.each(e, function(t, s) {
                        var o = s[2]
                          , a = s[3];
                        r[s[1]] = o.add,
                        a && o.add(function() {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock),
                        i[s[0]] = function() {
                            return i[s[0] + "With"](this === i ? r : this, arguments),
                            this
                        }
                        ,
                        i[s[0] + "With"] = o.fireWith
                    }),
                    r.promise(i),
                    t && t.call(i, i),
                    i
                },
                when: function(t) {
                    var e, n, r, i = 0, s = it.call(arguments), o = s.length, a = 1 !== o || t && ft.isFunction(t.promise) ? o : 0, l = 1 === a ? t : ft.Deferred(), u = function(t, n, r) {
                        return function(i) {
                            n[t] = this,
                            r[t] = arguments.length > 1 ? it.call(arguments) : i,
                            r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                        }
                    };
                    if (o > 1)
                        for (e = new Array(o),
                        n = new Array(o),
                        r = new Array(o); o > i; i++)
                            s[i] && ft.isFunction(s[i].promise) ? s[i].promise().progress(u(i, n, e)).done(u(i, r, s)).fail(l.reject) : --a;
                    return a || l.resolveWith(r, s),
                    l.promise()
                }
            });
            var Ot;
            ft.fn.ready = function(t) {
                return ft.ready.promise().done(t),
                this
            }
            ,
            ft.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ft.readyWait++ : ft.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0,
                    t !== !0 && --ft.readyWait > 0 || (Ot.resolveWith(rt, [ft]),
                    ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"),
                    ft(rt).off("ready"))))
                }
            }),
            ft.ready.promise = function(e) {
                if (!Ot)
                    if (Ot = ft.Deferred(),
                    "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll)
                        t.setTimeout(ft.ready);
                    else if (rt.addEventListener)
                        rt.addEventListener("DOMContentLoaded", a),
                        t.addEventListener("load", a);
                    else {
                        rt.attachEvent("onreadystatechange", a),
                        t.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == t.frameElement && rt.documentElement
                        } catch (r) {}
                        n && n.doScroll && !function i() {
                            if (!ft.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return t.setTimeout(i, 50)
                                }
                                o(),
                                ft.ready()
                            }
                        }()
                    }
                return Ot.promise(e)
            }
            ,
            ft.ready.promise();
            var jt;
            for (jt in ft(ht))
                break;
            ht.ownFirst = "0" === jt,
            ht.inlineBlockNeedsLayout = !1,
            ft(function() {
                var t, e, n, r;
                n = rt.getElementsByTagName("body")[0],
                n && n.style && (e = rt.createElement("div"),
                r = rt.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(r).appendChild(e),
                "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
                t && (n.style.zoom = 1)),
                n.removeChild(r))
            }),
            function() {
                var t = rt.createElement("div");
                ht.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ht.deleteExpando = !1
                }
                t = null
            }();
            var Et = function(t) {
                var e = ft.noData[(t.nodeName + " ").toLowerCase()]
                  , n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            }
              , At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , Yt = /([A-Z])/g;
            ft.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando],
                    !!t && !u(t)
                },
                data: function(t, e, n) {
                    return c(t, e, n)
                },
                removeData: function(t, e) {
                    return h(t, e)
                },
                _data: function(t, e, n) {
                    return c(t, e, n, !0)
                },
                _removeData: function(t, e) {
                    return h(t, e, !0)
                }
            }),
            ft.fn.extend({
                data: function(t, e) {
                    var n, r, i, s = this[0], o = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = ft.data(s),
                        1 === s.nodeType && !ft._data(s, "parsedAttrs"))) {
                            for (n = o.length; n--; )
                                o[n] && (r = o[n].name,
                                0 === r.indexOf("data-") && (r = ft.camelCase(r.slice(5)),
                                l(s, r, i[r])));
                            ft._data(s, "parsedAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof t ? this.each(function() {
                        ft.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        ft.data(this, t, e)
                    }) : s ? l(s, t, ft.data(s, t)) : void 0
                },
                removeData: function(t) {
                    return this.each(function() {
                        ft.removeData(this, t)
                    })
                }
            }),
            ft.extend({
                queue: function(t, e, n) {
                    var r;
                    return t ? (e = (e || "fx") + "queue",
                    r = ft._data(t, e),
                    n && (!r || ft.isArray(n) ? r = ft._data(t, e, ft.makeArray(n)) : r.push(n)),
                    r || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = ft.queue(t, e)
                      , r = n.length
                      , i = n.shift()
                      , s = ft._queueHooks(t, e)
                      , o = function() {
                        ft.dequeue(t, e)
                    };
                    "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === e && n.unshift("inprogress"),
                    delete s.stop,
                    i.call(t, o, s)),
                    !r && s && s.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return ft._data(t, n) || ft._data(t, n, {
                        empty: ft.Callbacks("once memory").add(function() {
                            ft._removeData(t, e + "queue"),
                            ft._removeData(t, n)
                        })
                    })
                }
            }),
            ft.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t,
                    t = "fx",
                    n--),
                    arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = ft.queue(this, t, e);
                        ft._queueHooks(this, t),
                        "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        ft.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, r = 1, i = ft.Deferred(), s = this, o = this.length, a = function() {
                        --r || i.resolveWith(s, [s])
                    };
                    for ("string" != typeof t && (e = t,
                    t = void 0),
                    t = t || "fx"; o--; )
                        n = ft._data(s[o], t + "queueHooks"),
                        n && n.empty && (r++,
                        n.empty.add(a));
                    return a(),
                    i.promise(e)
                }
            }),
            function() {
                var t;
                ht.shrinkWrapBlocks = function() {
                    if (null != t)
                        return t;
                    t = !1;
                    var e, n, r;
                    return n = rt.getElementsByTagName("body")[0],
                    n && n.style ? (e = rt.createElement("div"),
                    r = rt.createElement("div"),
                    r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(r).appendChild(e),
                    "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    e.appendChild(rt.createElement("div")).style.width = "5px",
                    t = 3 !== e.offsetWidth),
                    n.removeChild(r),
                    t) : void 0
                }
            }();
            var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , Lt = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$","i")
              , Ft = ["Top", "Right", "Bottom", "Left"]
              , Ht = function(t, e) {
                return t = e || t,
                "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
            }
              , Rt = function(t, e, n, r, i, s, o) {
                var a = 0
                  , l = t.length
                  , u = null == n;
                if ("object" === ft.type(n)) {
                    i = !0;
                    for (a in n)
                        Rt(t, e, a, n[a], !0, s, o)
                } else if (void 0 !== r && (i = !0,
                ft.isFunction(r) || (o = !0),
                u && (o ? (e.call(t, r),
                e = null) : (u = e,
                e = function(t, e, n) {
                    return u.call(ft(t), n)
                }
                )),
                e))
                    for (; l > a; a++)
                        e(t[a], n, o ? r : r.call(t[a], a, e(t[a], n)));
                return i ? t : u ? e.call(t) : l ? e(t[0], n) : s
            }
              , Wt = /^(?:checkbox|radio)$/i
              , qt = /<([\w:-]+)/
              , It = /^$|\/(?:java|ecma)script/i
              , Bt = /^\s+/
              , Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function() {
                var t = rt.createElement("div")
                  , e = rt.createDocumentFragment()
                  , n = rt.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ht.leadingWhitespace = 3 === t.firstChild.nodeType,
                ht.tbody = !t.getElementsByTagName("tbody").length,
                ht.htmlSerialize = !!t.getElementsByTagName("link").length,
                ht.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                e.appendChild(n),
                ht.appendChecked = n.checked,
                t.innerHTML = "<textarea>x</textarea>",
                ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                e.appendChild(t),
                n = rt.createElement("input"),
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                t.appendChild(n),
                ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                ht.noCloneEvent = !!t.addEventListener,
                t[ft.expando] = 1,
                ht.attributes = !t.getAttribute(ft.expando)
            }();
            var zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            zt.optgroup = zt.option,
            zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead,
            zt.th = zt.td;
            var $t = /<|&#?\w+;/
              , Vt = /<tbody/i;
            !function() {
                var e, n, r = rt.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    n = "on" + e,
                    (ht[e] = n in t) || (r.setAttribute(n, "t"),
                    ht[e] = r.attributes[n].expando === !1);
                r = null
            }();
            var Gt = /^(?:input|select|textarea)$/i
              , Xt = /^key/
              , Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Jt = /^(?:focusinfocus|focusoutblur)$/
              , Kt = /^([^.]*)(?:\.(.+)|)/;
            ft.event = {
                global: {},
                add: function(t, e, n, r, i) {
                    var s, o, a, l, u, c, h, d, f, p, m, g = ft._data(t);
                    if (g) {
                        for (n.handler && (l = n,
                        n = l.handler,
                        i = l.selector),
                        n.guid || (n.guid = ft.guid++),
                        (o = g.events) || (o = g.events = {}),
                        (c = g.handle) || (c = g.handle = function(t) {
                            return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(c.elem, arguments)
                        }
                        ,
                        c.elem = t),
                        e = (e || "").match(Nt) || [""],
                        a = e.length; a--; )
                            s = Kt.exec(e[a]) || [],
                            f = m = s[1],
                            p = (s[2] || "").split(".").sort(),
                            f && (u = ft.event.special[f] || {},
                            f = (i ? u.delegateType : u.bindType) || f,
                            u = ft.event.special[f] || {},
                            h = ft.extend({
                                type: f,
                                origType: m,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && ft.expr.match.needsContext.test(i),
                                namespace: p.join(".")
                            }, l),
                            (d = o[f]) || (d = o[f] = [],
                            d.delegateCount = 0,
                            u.setup && u.setup.call(t, r, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))),
                            u.add && (u.add.call(t, h),
                            h.handler.guid || (h.handler.guid = n.guid)),
                            i ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                            ft.event.global[f] = !0);
                        t = null
                    }
                },
                remove: function(t, e, n, r, i) {
                    var s, o, a, l, u, c, h, d, f, p, m, g = ft.hasData(t) && ft._data(t);
                    if (g && (c = g.events)) {
                        for (e = (e || "").match(Nt) || [""],
                        u = e.length; u--; )
                            if (a = Kt.exec(e[u]) || [],
                            f = m = a[1],
                            p = (a[2] || "").split(".").sort(),
                            f) {
                                for (h = ft.event.special[f] || {},
                                f = (r ? h.delegateType : h.bindType) || f,
                                d = c[f] || [],
                                a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                l = s = d.length; s--; )
                                    o = d[s],
                                    !i && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (d.splice(s, 1),
                                    o.selector && d.delegateCount--,
                                    h.remove && h.remove.call(t, o));
                                l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ft.removeEvent(t, f, g.handle),
                                delete c[f])
                            } else
                                for (f in c)
                                    ft.event.remove(t, f + e[u], n, r, !0);
                        ft.isEmptyObject(c) && (delete g.handle,
                        ft._removeData(t, "events"))
                    }
                },
                trigger: function(e, n, r, i) {
                    var s, o, a, l, u, c, h, d = [r || rt], f = ct.call(e, "type") ? e.type : e, p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = c = r = r || rt,
                    3 !== r.nodeType && 8 !== r.nodeType && !Jt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."),
                    f = p.shift(),
                    p.sort()),
                    o = f.indexOf(":") < 0 && "on" + f,
                    e = e[ft.expando] ? e : new ft.Event(f,"object" == typeof e && e),
                    e.isTrigger = i ? 2 : 3,
                    e.namespace = p.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = r),
                    n = null == n ? [e] : ft.makeArray(n, [e]),
                    u = ft.event.special[f] || {},
                    i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                        if (!i && !u.noBubble && !ft.isWindow(r)) {
                            for (l = u.delegateType || f,
                            Jt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                                d.push(a),
                                c = a;
                            c === (r.ownerDocument || rt) && d.push(c.defaultView || c.parentWindow || t)
                        }
                        for (h = 0; (a = d[h++]) && !e.isPropagationStopped(); )
                            e.type = h > 1 ? l : u.bindType || f,
                            s = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"),
                            s && s.apply(a, n),
                            s = o && a[o],
                            s && s.apply && Et(a) && (e.result = s.apply(a, n),
                            e.result === !1 && e.preventDefault());
                        if (e.type = f,
                        !i && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && Et(r) && o && r[f] && !ft.isWindow(r)) {
                            c = r[o],
                            c && (r[o] = null),
                            ft.event.triggered = f;
                            try {
                                r[f]()
                            } catch (m) {}
                            ft.event.triggered = void 0,
                            c && (r[o] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function(t) {
                    t = ft.event.fix(t);
                    var e, n, r, i, s, o = [], a = it.call(arguments), l = (ft._data(this, "events") || {})[t.type] || [], u = ft.event.special[t.type] || {};
                    if (a[0] = t,
                    t.delegateTarget = this,
                    !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                        for (o = ft.event.handlers.call(this, t, l),
                        e = 0; (i = o[e++]) && !t.isPropagationStopped(); )
                            for (t.currentTarget = i.elem,
                            n = 0; (s = i.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                                (!t.rnamespace || t.rnamespace.test(s.namespace)) && (t.handleObj = s,
                                t.data = s.data,
                                r = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a),
                                void 0 !== r && (t.result = r) === !1 && (t.preventDefault(),
                                t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t),
                        t.result
                    }
                },
                handlers: function(t, e) {
                    var n, r, i, s, o = [], a = e.delegateCount, l = t.target;
                    if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                                for (r = [],
                                n = 0; a > n; n++)
                                    s = e[n],
                                    i = s.selector + " ",
                                    void 0 === r[i] && (r[i] = s.needsContext ? ft(i, this).index(l) > -1 : ft.find(i, this, null, [l]).length),
                                    r[i] && r.push(s);
                                r.length && o.push({
                                    elem: l,
                                    handlers: r
                                })
                            }
                    return a < e.length && o.push({
                        elem: this,
                        handlers: e.slice(a)
                    }),
                    o
                },
                fix: function(t) {
                    if (t[ft.expando])
                        return t;
                    var e, n, r, i = t.type, s = t, o = this.fixHooks[i];
                    for (o || (this.fixHooks[i] = o = Zt.test(i) ? this.mouseHooks : Xt.test(i) ? this.keyHooks : {}),
                    r = o.props ? this.props.concat(o.props) : this.props,
                    t = new ft.Event(s),
                    e = r.length; e--; )
                        n = r[e],
                        t[n] = s[n];
                    return t.target || (t.target = s.srcElement || rt),
                    3 === t.target.nodeType && (t.target = t.target.parentNode),
                    t.metaKey = !!t.metaKey,
                    o.filter ? o.filter(t, s) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                        t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, r, i, s = e.button, o = e.fromElement;
                        return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || rt,
                        i = r.documentElement,
                        n = r.body,
                        t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                        t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                        !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
                        t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                        t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== b() && this.focus)
                                try {
                                    return this.focus(),
                                    !1
                                } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === b() && this.blur ? (this.blur(),
                            !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return ft.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                            !1) : void 0
                        },
                        _default: function(t) {
                            return ft.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n) {
                    var r = ft.extend(new ft.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    ft.event.trigger(r, null, e),
                    r.isDefaultPrevented() && n.preventDefault()
                }
            },
            ft.removeEvent = rt.removeEventListener ? function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }
            : function(t, e, n) {
                var r = "on" + e;
                t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null),
                t.detachEvent(r, n))
            }
            ,
            ft.Event = function(t, e) {
                return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t,
                this.type = t.type,
                this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : w) : this.type = t,
                e && ft.extend(this, e),
                this.timeStamp = t && t.timeStamp || ft.now(),
                void (this[ft.expando] = !0)) : new ft.Event(t,e)
            }
            ,
            ft.Event.prototype = {
                constructor: ft.Event,
                isDefaultPrevented: w,
                isPropagationStopped: w,
                isImmediatePropagationStopped: w,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = v,
                    t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = v,
                    t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
                    t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = v,
                    t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            ft.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                ft.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, r = this, i = t.relatedTarget, s = t.handleObj;
                        return (!i || i !== r && !ft.contains(r, i)) && (t.type = s.origType,
                        n = s.handler.apply(this, arguments),
                        t.type = e),
                        n
                    }
                }
            }),
            ht.submit || (ft.event.special.submit = {
                setup: function() {
                    return ft.nodeName(this, "form") ? !1 : void ft.event.add(this, "click._submit keypress._submit", function(t) {
                        var e = t.target
                          , n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                        n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                            t._submitBubble = !0
                        }),
                        ft._data(n, "submit", !0))
                    })
                },
                postDispatch: function(t) {
                    t._submitBubble && (delete t._submitBubble,
                    this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
                },
                teardown: function() {
                    return ft.nodeName(this, "form") ? !1 : void ft.event.remove(this, "._submit")
                }
            }),
            ht.change || (ft.event.special.change = {
                setup: function() {
                    return Gt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ft.event.add(this, "propertychange._change", function(t) {
                        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                    }),
                    ft.event.add(this, "click._change", function(t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1),
                        ft.event.simulate("change", this, t)
                    })),
                    !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                        var e = t.target;
                        Gt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                        }),
                        ft._data(e, "change", !0))
                    })
                },
                handle: function(t) {
                    var e = t.target;
                    return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return ft.event.remove(this, "._change"),
                    !Gt.test(this.nodeName)
                }
            }),
            ht.focusin || ft.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    ft.event.simulate(e, t.target, ft.event.fix(t))
                };
                ft.event.special[e] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                          , i = ft._data(r, e);
                        i || r.addEventListener(t, n, !0),
                        ft._data(r, e, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                          , i = ft._data(r, e) - 1;
                        i ? ft._data(r, e, i) : (r.removeEventListener(t, n, !0),
                        ft._removeData(r, e))
                    }
                }
            }),
            ft.fn.extend({
                on: function(t, e, n, r) {
                    return x(this, t, e, n, r)
                },
                one: function(t, e, n, r) {
                    return x(this, t, e, n, r, 1)
                },
                off: function(t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj)
                        return r = t.handleObj,
                        ft(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" == typeof t) {
                        for (i in t)
                            this.off(i, e, t[i]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (n = e,
                    e = void 0),
                    n === !1 && (n = w),
                    this.each(function() {
                        ft.event.remove(this, t, n, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        ft.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    return n ? ft.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Qt = / jQuery\d+="(?:null|\d+)"/g
              , te = new RegExp("<(?:" + Ut + ")[\\s/>]","i")
              , ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
              , ne = /<script|<style|<link/i
              , re = /checked\s*(?:[^=]|=\s*.checked.)/i
              , ie = /^true\/(.*)/
              , se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
              , oe = f(rt)
              , ae = oe.appendChild(rt.createElement("div"));
            ft.extend({
                htmlPrefilter: function(t) {
                    return t.replace(ee, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var r, i, s, o, a, l = ft.contains(t.ownerDocument, t);
                    if (ht.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML,
                    ae.removeChild(s = ae.firstChild)),
                    !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                        for (r = p(s),
                        a = p(t),
                        o = 0; null != (i = a[o]); ++o)
                            r[o] && C(i, r[o]);
                    if (e)
                        if (n)
                            for (a = a || p(t),
                            r = r || p(s),
                            o = 0; null != (i = a[o]); o++)
                                T(i, r[o]);
                        else
                            T(t, s);
                    return r = p(s, "script"),
                    r.length > 0 && m(r, !l && p(t, "script")),
                    r = a = i = null,
                    s
                },
                cleanData: function(t, e) {
                    for (var n, r, i, s, o = 0, a = ft.expando, l = ft.cache, u = ht.attributes, c = ft.event.special; null != (n = t[o]); o++)
                        if ((e || Et(n)) && (i = n[a],
                        s = i && l[i])) {
                            if (s.events)
                                for (r in s.events)
                                    c[r] ? ft.event.remove(n, r) : ft.removeEvent(n, r, s.handle);
                            l[i] && (delete l[i],
                            u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a),
                            nt.push(i))
                        }
                }
            }),
            ft.fn.extend({
                domManip: M,
                detach: function(t) {
                    return D(this, t, !0)
                },
                remove: function(t) {
                    return D(this, t)
                },
                text: function(t) {
                    return Rt(this, function(t) {
                        return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
                    }, null, t, arguments.length)
                },
                append: function() {
                    return M(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return M(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return M(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return M(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ft.cleanData(p(t, !1)); t.firstChild; )
                            t.removeChild(t.firstChild);
                        t.options && ft.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null == t ? !1 : t,
                    e = null == e ? t : e,
                    this.map(function() {
                        return ft.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return Rt(this, function(t) {
                        var e = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === t)
                            return 1 === e.nodeType ? e.innerHTML.replace(Qt, "") : void 0;
                        if ("string" == typeof t && !ne.test(t) && (ht.htmlSerialize || !te.test(t)) && (ht.leadingWhitespace || !Bt.test(t)) && !zt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = ft.htmlPrefilter(t);
                            try {
                                for (; r > n; n++)
                                    e = this[n] || {},
                                    1 === e.nodeType && (ft.cleanData(p(e, !1)),
                                    e.innerHTML = t);
                                e = 0
                            } catch (i) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return M(this, arguments, function(e) {
                        var n = this.parentNode;
                        ft.inArray(this, t) < 0 && (ft.cleanData(p(this)),
                        n && n.replaceChild(e, this))
                    }, t)
                }
            }),
            ft.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                ft.fn[t] = function(t) {
                    for (var n, r = 0, i = [], s = ft(t), o = s.length - 1; o >= r; r++)
                        n = r === o ? this : this.clone(!0),
                        ft(s[r])[e](n),
                        ot.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var le, ue = {
                HTML: "block",
                BODY: "block"
            }, ce = /^margin/, he = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$","i"), de = function(t, e, n, r) {
                var i, s, o = {};
                for (s in e)
                    o[s] = t.style[s],
                    t.style[s] = e[s];
                i = n.apply(t, r || []);
                for (s in e)
                    t.style[s] = o[s];
                return i
            }, fe = rt.documentElement;
            !function() {
                function e() {
                    var e, c, h = rt.documentElement;
                    h.appendChild(l),
                    u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    n = i = a = !1,
                    r = o = !0,
                    t.getComputedStyle && (c = t.getComputedStyle(u),
                    n = "1%" !== (c || {}).top,
                    a = "2px" === (c || {}).marginLeft,
                    i = "4px" === (c || {
                        width: "4px"
                    }).width,
                    u.style.marginRight = "50%",
                    r = "4px" === (c || {
                        marginRight: "4px"
                    }).marginRight,
                    e = u.appendChild(rt.createElement("div")),
                    e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    e.style.marginRight = e.style.width = "0",
                    u.style.width = "1px",
                    o = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
                    u.removeChild(e)),
                    u.style.display = "none",
                    s = 0 === u.getClientRects().length,
                    s && (u.style.display = "",
                    u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    u.childNodes[0].style.borderCollapse = "separate",
                    e = u.getElementsByTagName("td"),
                    e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    s = 0 === e[0].offsetHeight,
                    s && (e[0].style.display = "",
                    e[1].style.display = "none",
                    s = 0 === e[0].offsetHeight)),
                    h.removeChild(l)
                }
                var n, r, i, s, o, a, l = rt.createElement("div"), u = rt.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5",
                ht.opacity = "0.5" === u.style.opacity,
                ht.cssFloat = !!u.style.cssFloat,
                u.style.backgroundClip = "content-box",
                u.cloneNode(!0).style.backgroundClip = "",
                ht.clearCloneStyle = "content-box" === u.style.backgroundClip,
                l = rt.createElement("div"),
                l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                u.innerHTML = "",
                l.appendChild(u),
                ht.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
                ft.extend(ht, {
                    reliableHiddenOffsets: function() {
                        return null == n && e(),
                        s
                    },
                    boxSizingReliable: function() {
                        return null == n && e(),
                        i
                    },
                    pixelMarginRight: function() {
                        return null == n && e(),
                        r
                    },
                    pixelPosition: function() {
                        return null == n && e(),
                        n
                    },
                    reliableMarginRight: function() {
                        return null == n && e(),
                        o
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(),
                        a
                    }
                }))
            }();
            var pe, me, ge = /^(top|right|bottom|left)$/;
            t.getComputedStyle ? (pe = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t),
                n.getComputedStyle(e)
            }
            ,
            me = function(t, e, n) {
                var r, i, s, o, a = t.style;
                return n = n || pe(t),
                o = n ? n.getPropertyValue(e) || n[e] : void 0,
                "" !== o && void 0 !== o || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)),
                n && !ht.pixelMarginRight() && he.test(o) && ce.test(e) && (r = a.width,
                i = a.minWidth,
                s = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = o,
                o = n.width,
                a.width = r,
                a.minWidth = i,
                a.maxWidth = s),
                void 0 === o ? o : o + ""
            }
            ) : fe.currentStyle && (pe = function(t) {
                return t.currentStyle
            }
            ,
            me = function(t, e, n) {
                var r, i, s, o, a = t.style;
                return n = n || pe(t),
                o = n ? n[e] : void 0,
                null == o && a && a[e] && (o = a[e]),
                he.test(o) && !ge.test(e) && (r = a.left,
                i = t.runtimeStyle,
                s = i && i.left,
                s && (i.left = t.currentStyle.left),
                a.left = "fontSize" === e ? "1em" : o,
                o = a.pixelLeft + "px",
                a.left = r,
                s && (i.left = s)),
                void 0 === o ? o : o + "" || "auto"
            }
            );
            var ye = /alpha\([^)]*\)/i
              , ve = /opacity\s*=\s*([^)]*)/i
              , we = /^(none|table(?!-c[ea]).+)/
              , be = new RegExp("^(" + Pt + ")(.*)$","i")
              , xe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , _e = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , ke = ["Webkit", "O", "Moz", "ms"]
              , Se = rt.createElement("div").style;
            ft.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = me(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": ht.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, s, o, a = ft.camelCase(e), l = t.style;
                        if (e = ft.cssProps[a] || (ft.cssProps[a] = E(a) || a),
                        o = ft.cssHooks[e] || ft.cssHooks[a],
                        void 0 === n)
                            return o && "get"in o && void 0 !== (i = o.get(t, !1, r)) ? i : l[e];
                        if (s = typeof n,
                        "string" === s && (i = Lt.exec(n)) && i[1] && (n = d(t, e, i),
                        s = "number"),
                        null != n && n === n && ("number" === s && (n += i && i[3] || (ft.cssNumber[a] ? "" : "px")),
                        ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                        !(o && "set"in o && void 0 === (n = o.set(t, n, r)))))
                            try {
                                l[e] = n
                            } catch (u) {}
                    }
                },
                css: function(t, e, n, r) {
                    var i, s, o, a = ft.camelCase(e);
                    return e = ft.cssProps[a] || (ft.cssProps[a] = E(a) || a),
                    o = ft.cssHooks[e] || ft.cssHooks[a],
                    o && "get"in o && (s = o.get(t, !0, n)),
                    void 0 === s && (s = me(t, e, r)),
                    "normal" === s && e in _e && (s = _e[e]),
                    "" === n || n ? (i = parseFloat(s),
                    n === !0 || isFinite(i) ? i || 0 : s) : s
                }
            }),
            ft.each(["height", "width"], function(t, e) {
                ft.cssHooks[e] = {
                    get: function(t, n, r) {
                        return n ? we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? de(t, xe, function() {
                            return L(t, e, r)
                        }) : L(t, e, r) : void 0
                    },
                    set: function(t, n, r) {
                        var i = r && pe(t);
                        return Y(t, n, r ? P(t, e, r, ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
                    }
                }
            }),
            ht.opacity || (ft.cssHooks.opacity = {
                get: function(t, e) {
                    return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                },
                set: function(t, e) {
                    var n = t.style
                      , r = t.currentStyle
                      , i = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
                      , s = r && r.filter || n.filter || "";
                    n.zoom = 1,
                    (e >= 1 || "" === e) && "" === ft.trim(s.replace(ye, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === e || r && !r.filter) || (n.filter = ye.test(s) ? s.replace(ye, i) : s + " " + i)
                }
            }),
            ft.cssHooks.marginRight = j(ht.reliableMarginRight, function(t, e) {
                return e ? de(t, {
                    display: "inline-block"
                }, me, [t, "marginRight"]) : void 0
            }),
            ft.cssHooks.marginLeft = j(ht.reliableMarginLeft, function(t, e) {
                return e ? (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }),
            ft.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                ft.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                            i[t + Ft[r] + e] = s[r] || s[r - 2] || s[0];
                        return i
                    }
                },
                ce.test(t) || (ft.cssHooks[t + e].set = Y)
            }),
            ft.fn.extend({
                css: function(t, e) {
                    return Rt(this, function(t, e, n) {
                        var r, i, s = {}, o = 0;
                        if (ft.isArray(e)) {
                            for (r = pe(t),
                            i = e.length; i > o; o++)
                                s[e[o]] = ft.css(t, e[o], !1, r);
                            return s
                        }
                        return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return A(this, !0)
                },
                hide: function() {
                    return A(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        Ht(this) ? ft(this).show() : ft(this).hide()
                    })
                }
            }),
            ft.Tween = F,
            F.prototype = {
                constructor: F,
                init: function(t, e, n, r, i, s) {
                    this.elem = t,
                    this.prop = n,
                    this.easing = i || ft.easing._default,
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = s || (ft.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = F.propHooks[this.prop];
                    return t && t.get ? t.get(this) : F.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = F.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : F.propHooks._default.set(this),
                    this
                }
            },
            F.prototype.init.prototype = F.prototype,
            F.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""),
                        e && "auto" !== e ? e : 0)
                    },
                    set: function(t) {
                        ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            },
            F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            },
            ft.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            },
            ft.fx = F.prototype.init,
            ft.fx.step = {};
            var Te, Ce, Me = /^(?:toggle|show|hide)$/, De = /queueHooks$/;
            ft.Animation = ft.extend(B, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return d(n.elem, t, Lt.exec(e), n),
                        n
                    }
                    ]
                },
                tweener: function(t, e) {
                    ft.isFunction(t) ? (e = t,
                    t = ["*"]) : t = t.match(Nt);
                    for (var n, r = 0, i = t.length; i > r; r++)
                        n = t[r],
                        B.tweeners[n] = B.tweeners[n] || [],
                        B.tweeners[n].unshift(e)
                },
                prefilters: [q],
                prefilter: function(t, e) {
                    e ? B.prefilters.unshift(t) : B.prefilters.push(t)
                }
            }),
            ft.speed = function(t, e, n) {
                var r = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return r.duration = ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ft.fx.speeds ? ft.fx.speeds[r.duration] : ft.fx.speeds._default,
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    ft.isFunction(r.old) && r.old.call(this),
                    r.queue && ft.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            ft.fn.extend({
                fadeTo: function(t, e, n, r) {
                    return this.filter(Ht).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, r)
                },
                animate: function(t, e, n, r) {
                    var i = ft.isEmptyObject(t)
                      , s = ft.speed(e, n, r)
                      , o = function() {
                        var e = B(this, ft.extend({}, t), s);
                        (i || ft._data(this, "finish")) && e.stop(!0)
                    };
                    return o.finish = o,
                    i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(t, e, n) {
                    var r = function(t) {
                        var e = t.stop;
                        delete t.stop,
                        e(n)
                    };
                    return "string" != typeof t && (n = e,
                    e = t,
                    t = void 0),
                    e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function() {
                        var e = !0
                          , i = null != t && t + "queueHooks"
                          , s = ft.timers
                          , o = ft._data(this);
                        if (i)
                            o[i] && o[i].stop && r(o[i]);
                        else
                            for (i in o)
                                o[i] && o[i].stop && De.test(i) && r(o[i]);
                        for (i = s.length; i--; )
                            s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n),
                            e = !1,
                            s.splice(i, 1));
                        (e || !n) && ft.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"),
                    this.each(function() {
                        var e, n = ft._data(this), r = n[t + "queue"], i = n[t + "queueHooks"], s = ft.timers, o = r ? r.length : 0;
                        for (n.finish = !0,
                        ft.queue(this, t, []),
                        i && i.stop && i.stop.call(this, !0),
                        e = s.length; e--; )
                            s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                            s.splice(e, 1));
                        for (e = 0; o > e; e++)
                            r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            ft.each(["toggle", "show", "hide"], function(t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function(t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, r, i)
                }
            }),
            ft.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ft.fn[t] = function(t, n, r) {
                    return this.animate(e, t, n, r)
                }
            }),
            ft.timers = [],
            ft.fx.tick = function() {
                var t, e = ft.timers, n = 0;
                for (Te = ft.now(); n < e.length; n++)
                    t = e[n],
                    t() || e[n] !== t || e.splice(n--, 1);
                e.length || ft.fx.stop(),
                Te = void 0
            }
            ,
            ft.fx.timer = function(t) {
                ft.timers.push(t),
                t() ? ft.fx.start() : ft.timers.pop()
            }
            ,
            ft.fx.interval = 13,
            ft.fx.start = function() {
                Ce || (Ce = t.setInterval(ft.fx.tick, ft.fx.interval))
            }
            ,
            ft.fx.stop = function() {
                t.clearInterval(Ce),
                Ce = null
            }
            ,
            ft.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ft.fn.delay = function(e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = t.setTimeout(n, e);
                    r.stop = function() {
                        t.clearTimeout(i)
                    }
                })
            }
            ,
            function() {
                var t, e = rt.createElement("input"), n = rt.createElement("div"), r = rt.createElement("select"), i = r.appendChild(rt.createElement("option"));
                n = rt.createElement("div"),
                n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                t = n.getElementsByTagName("a")[0],
                e.setAttribute("type", "checkbox"),
                n.appendChild(e),
                t = n.getElementsByTagName("a")[0],
                t.style.cssText = "top:1px",
                ht.getSetAttribute = "t" !== n.className,
                ht.style = /top/.test(t.getAttribute("style")),
                ht.hrefNormalized = "/a" === t.getAttribute("href"),
                ht.checkOn = !!e.value,
                ht.optSelected = i.selected,
                ht.enctype = !!rt.createElement("form").enctype,
                r.disabled = !0,
                ht.optDisabled = !i.disabled,
                e = rt.createElement("input"),
                e.setAttribute("value", ""),
                ht.input = "" === e.getAttribute("value"),
                e.value = "t",
                e.setAttribute("type", "radio"),
                ht.radioValue = "t" === e.value
            }();
            var Ne = /\r/g
              , Oe = /[\x20\t\r\n\f]+/g;
            ft.fn.extend({
                val: function(t) {
                    var e, n, r, i = this[0];
                    {
                        if (arguments.length)
                            return r = ft.isFunction(t),
                            this.each(function(n) {
                                var i;
                                1 === this.nodeType && (i = r ? t.call(this, n, ft(this).val()) : t,
                                null == i ? i = "" : "number" == typeof i ? i += "" : ft.isArray(i) && (i = ft.map(i, function(t) {
                                    return null == t ? "" : t + ""
                                })),
                                e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()],
                                e && "set"in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                            });
                        if (i)
                            return e = ft.valHooks[i.type] || ft.valHooks[i.nodeName.toLowerCase()],
                            e && "get"in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value,
                            "string" == typeof n ? n.replace(Ne, "") : null == n ? "" : n)
                    }
                }
            }),
            ft.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = ft.find.attr(t, "value");
                            return null != e ? e : ft.trim(ft.text(t)).replace(Oe, " ")
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, r = t.options, i = t.selectedIndex, s = "select-one" === t.type || 0 > i, o = s ? null : [], a = s ? i + 1 : r.length, l = 0 > i ? a : s ? i : 0; a > l; l++)
                                if (n = r[l],
                                (n.selected || l === i) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = ft(n).val(),
                                    s)
                                        return e;
                                    o.push(e)
                                }
                            return o
                        },
                        set: function(t, e) {
                            for (var n, r, i = t.options, s = ft.makeArray(e), o = i.length; o--; )
                                if (r = i[o],
                                ft.inArray(ft.valHooks.option.get(r), s) > -1)
                                    try {
                                        r.selected = n = !0
                                    } catch (a) {
                                        r.scrollHeight
                                    }
                                else
                                    r.selected = !1;
                            return n || (t.selectedIndex = -1),
                            i
                        }
                    }
                }
            }),
            ft.each(["radio", "checkbox"], function() {
                ft.valHooks[this] = {
                    set: function(t, e) {
                        return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
                    }
                },
                ht.checkOn || (ft.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
                )
            });
            var je, Ee, Ae = ft.expr.attrHandle, Ye = /^(?:checked|selected)$/i, Pe = ht.getSetAttribute, Le = ht.input;
            ft.fn.extend({
                attr: function(t, e) {
                    return Rt(this, ft.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        ft.removeAttr(this, t)
                    })
                }
            }),
            ft.extend({
                attr: function(t, e, n) {
                    var r, i, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)
                        return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (e = e.toLowerCase(),
                        i = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Ee : je)),
                        void 0 !== n ? null === n ? void ft.removeAttr(t, e) : i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                        n) : i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = ft.find.attr(t, e),
                        null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!ht.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e),
                                n && (t.value = n),
                                e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, r, i = 0, s = e && e.match(Nt);
                    if (s && 1 === t.nodeType)
                        for (; n = s[i++]; )
                            r = ft.propFix[n] || n,
                            ft.expr.match.bool.test(n) ? Le && Pe || !Ye.test(n) ? t[r] = !1 : t[ft.camelCase("default-" + n)] = t[r] = !1 : ft.attr(t, n, ""),
                            t.removeAttribute(Pe ? n : r)
                }
            }),
            Ee = {
                set: function(t, e, n) {
                    return e === !1 ? ft.removeAttr(t, n) : Le && Pe || !Ye.test(n) ? t.setAttribute(!Pe && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0,
                    n
                }
            },
            ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = Ae[e] || ft.find.attr;
                Le && Pe || !Ye.test(e) ? Ae[e] = function(t, e, r) {
                    var i, s;
                    return r || (s = Ae[e],
                    Ae[e] = i,
                    i = null != n(t, e, r) ? e.toLowerCase() : null,
                    Ae[e] = s),
                    i
                }
                : Ae[e] = function(t, e, n) {
                    return n ? void 0 : t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }),
            Le && Pe || (ft.attrHooks.value = {
                set: function(t, e, n) {
                    return ft.nodeName(t, "input") ? void (t.defaultValue = e) : je && je.set(t, e, n)
                }
            }),
            Pe || (je = {
                set: function(t, e, n) {
                    var r = t.getAttributeNode(n);
                    return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)),
                    r.value = e += "",
                    "value" === n || e === t.getAttribute(n) ? e : void 0
                }
            },
            Ae.id = Ae.name = Ae.coords = function(t, e, n) {
                var r;
                return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
            }
            ,
            ft.valHooks.button = {
                get: function(t, e) {
                    var n = t.getAttributeNode(e);
                    return n && n.specified ? n.value : void 0
                },
                set: je.set
            },
            ft.attrHooks.contenteditable = {
                set: function(t, e, n) {
                    je.set(t, "" === e ? !1 : e, n)
                }
            },
            ft.each(["width", "height"], function(t, e) {
                ft.attrHooks[e] = {
                    set: function(t, n) {
                        return "" === n ? (t.setAttribute(e, "auto"),
                        n) : void 0
                    }
                }
            })),
            ht.style || (ft.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText || void 0
                },
                set: function(t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var Fe = /^(?:input|select|textarea|button|object)$/i
              , He = /^(?:a|area)$/i;
            ft.fn.extend({
                prop: function(t, e) {
                    return Rt(this, ft.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = ft.propFix[t] || t,
                    this.each(function() {
                        try {
                            this[t] = void 0,
                            delete this[t]
                        } catch (e) {}
                    })
                }
            }),
            ft.extend({
                prop: function(t, e, n) {
                    var r, i, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)
                        return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e,
                        i = ft.propHooks[e]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = ft.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Fe.test(t.nodeName) || He.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }),
            ht.hrefNormalized || ft.each(["href", "src"], function(t, e) {
                ft.propHooks[e] = {
                    get: function(t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }),
            ht.optSelected || (ft.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex),
                    null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex)
                }
            }),
            ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ft.propFix[this.toLowerCase()] = this
            }),
            ht.enctype || (ft.propFix.enctype = "encoding");
            var Re = /[\t\r\n\f]/g;
            ft.fn.extend({
                addClass: function(t) {
                    var e, n, r, i, s, o, a, l = 0;
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).addClass(t.call(this, e, U(this)))
                        });
                    if ("string" == typeof t && t)
                        for (e = t.match(Nt) || []; n = this[l++]; )
                            if (i = U(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Re, " ")) {
                                for (o = 0; s = e[o++]; )
                                    r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                                a = ft.trim(r),
                                i !== a && ft.attr(n, "class", a)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, n, r, i, s, o, a, l = 0;
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).removeClass(t.call(this, e, U(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof t && t)
                        for (e = t.match(Nt) || []; n = this[l++]; )
                            if (i = U(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Re, " ")) {
                                for (o = 0; s = e[o++]; )
                                    for (; r.indexOf(" " + s + " ") > -1; )
                                        r = r.replace(" " + s + " ", " ");
                                a = ft.trim(r),
                                i !== a && ft.attr(n, "class", a)
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                        ft(this).toggleClass(t.call(this, n, U(this), e), e)
                    }) : this.each(function() {
                        var e, r, i, s;
                        if ("string" === n)
                            for (r = 0,
                            i = ft(this),
                            s = t.match(Nt) || []; e = s[r++]; )
                                i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                        else
                            (void 0 === t || "boolean" === n) && (e = U(this),
                            e && ft._data(this, "__className__", e),
                            ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e, n, r = 0;
                    for (e = " " + t + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + U(n) + " ").replace(Re, " ").indexOf(e) > -1)
                            return !0;
                    return !1
                }
            }),
            ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                ft.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }),
            ft.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
            var We = t.location
              , qe = ft.now()
              , Ie = /\?/
              , Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ft.parseJSON = function(e) {
                if (t.JSON && t.JSON.parse)
                    return t.JSON.parse(e + "");
                var n, r = null, i = ft.trim(e + "");
                return i && !ft.trim(i.replace(Be, function(t, e, i, s) {
                    return n && e && (r = 0),
                    0 === r ? t : (n = i || e,
                    r += !s - !i,
                    "")
                })) ? Function("return " + i)() : ft.error("Invalid JSON: " + e)
            }
            ,
            ft.parseXML = function(e) {
                var n, r;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t.DOMParser ? (r = new t.DOMParser,
                    n = r.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"),
                    n.async = "false",
                    n.loadXML(e))
                } catch (i) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e),
                n
            }
            ;
            var Ue = /#.*$/
              , ze = /([?&])_=[^&]*/
              , $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
              , Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Ge = /^(?:GET|HEAD)$/
              , Xe = /^\/\//
              , Ze = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
              , Je = {}
              , Ke = {}
              , Qe = "*/".concat("*")
              , tn = We.href
              , en = Ze.exec(tn.toLowerCase()) || [];
            ft.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: tn,
                    type: "GET",
                    isLocal: Ve.test(en[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Qe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ft.parseJSON,
                        "text xml": ft.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
                },
                ajaxPrefilter: z(Je),
                ajaxTransport: z(Ke),
                ajax: function(e, n) {
                    function r(e, n, r, i) {
                        var s, h, v, w, x, k = n;
                        2 !== b && (b = 2,
                        l && t.clearTimeout(l),
                        c = void 0,
                        a = i || "",
                        _.readyState = e > 0 ? 4 : 0,
                        s = e >= 200 && 300 > e || 304 === e,
                        r && (w = G(d, _, r)),
                        w = X(d, w, _, s),
                        s ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"),
                        x && (ft.lastModified[o] = x),
                        x = _.getResponseHeader("etag"),
                        x && (ft.etag[o] = x)),
                        204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state,
                        h = w.data,
                        v = w.error,
                        s = !v)) : (v = k,
                        (e || !k) && (k = "error",
                        0 > e && (e = 0))),
                        _.status = e,
                        _.statusText = (n || k) + "",
                        s ? m.resolveWith(f, [h, k, _]) : m.rejectWith(f, [_, k, v]),
                        _.statusCode(y),
                        y = void 0,
                        u && p.trigger(s ? "ajaxSuccess" : "ajaxError", [_, d, s ? h : v]),
                        g.fireWith(f, [_, k]),
                        u && (p.trigger("ajaxComplete", [_, d]),
                        --ft.active || ft.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e,
                    e = void 0),
                    n = n || {};
                    var i, s, o, a, l, u, c, h, d = ft.ajaxSetup({}, n), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? ft(f) : ft.event, m = ft.Deferred(), g = ft.Callbacks("once memory"), y = d.statusCode || {}, v = {}, w = {}, b = 0, x = "canceled", _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!h)
                                    for (h = {}; e = $e.exec(a); )
                                        h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = w[n] = w[n] || t,
                            v[t] = e),
                            this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t),
                            this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t)
                                        y[e] = [y[e], t[e]];
                                else
                                    _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return c && c.abort(e),
                            r(0, e),
                            this
                        }
                    };
                    if (m.promise(_).complete = g.add,
                    _.success = _.done,
                    _.error = _.fail,
                    d.url = ((e || d.url || tn) + "").replace(Ue, "").replace(Xe, en[1] + "//"),
                    d.type = n.method || n.type || d.method || d.type,
                    d.dataTypes = ft.trim(d.dataType || "*").toLowerCase().match(Nt) || [""],
                    null == d.crossDomain && (i = Ze.exec(d.url.toLowerCase()),
                    d.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))),
                    d.data && d.processData && "string" != typeof d.data && (d.data = ft.param(d.data, d.traditional)),
                    $(Je, d, n, _),
                    2 === b)
                        return _;
                    u = ft.event && d.global,
                    u && 0 === ft.active++ && ft.event.trigger("ajaxStart"),
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !Ge.test(d.type),
                    o = d.url,
                    d.hasContent || (d.data && (o = d.url += (Ie.test(o) ? "&" : "?") + d.data,
                    delete d.data),
                    d.cache === !1 && (d.url = ze.test(o) ? o.replace(ze, "$1_=" + qe++) : o + (Ie.test(o) ? "&" : "?") + "_=" + qe++)),
                    d.ifModified && (ft.lastModified[o] && _.setRequestHeader("If-Modified-Since", ft.lastModified[o]),
                    ft.etag[o] && _.setRequestHeader("If-None-Match", ft.etag[o])),
                    (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", d.contentType),
                    _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Qe + "; q=0.01" : "") : d.accepts["*"]);
                    for (s in d.headers)
                        _.setRequestHeader(s, d.headers[s]);
                    if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === b))
                        return _.abort();
                    x = "abort";
                    for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        _[s](d[s]);
                    if (c = $(Ke, d, n, _)) {
                        if (_.readyState = 1,
                        u && p.trigger("ajaxSend", [_, d]),
                        2 === b)
                            return _;
                        d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                            _.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1,
                            c.send(v, r)
                        } catch (k) {
                            if (!(2 > b))
                                throw k;
                            r(-1, k)
                        }
                    } else
                        r(-1, "No Transport");
                    return _
                },
                getJSON: function(t, e, n) {
                    return ft.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return ft.get(t, void 0, e, "script")
                }
            }),
            ft.each(["get", "post"], function(t, e) {
                ft[e] = function(t, n, r, i) {
                    return ft.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    ft.ajax(ft.extend({
                        url: t,
                        type: e,
                        dataType: i,
                        data: n,
                        success: r
                    }, ft.isPlainObject(t) && t))
                }
            }),
            ft._evalUrl = function(t) {
                return ft.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            ft.fn.extend({
                wrapAll: function(t) {
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).wrapAll(t.call(this, e))
                        });
                    if (this[0]) {
                        var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                        e.map(function() {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                                t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return ft.isFunction(t) ? this.each(function(e) {
                        ft(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = ft(this)
                          , n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = ft.isFunction(t);
                    return this.each(function(n) {
                        ft(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            ft.expr.filters.hidden = function(t) {
                return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
            }
            ,
            ft.expr.filters.visible = function(t) {
                return !ft.expr.filters.hidden(t)
            }
            ;
            var nn = /%20/g
              , rn = /\[\]$/
              , sn = /\r?\n/g
              , on = /^(?:submit|button|image|reset|file)$/i
              , an = /^(?:input|select|textarea|keygen)/i;
            ft.param = function(t, e) {
                var n, r = [], i = function(t, e) {
                    e = ft.isFunction(e) ? e() : null == e ? "" : e,
                    r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional),
                ft.isArray(t) || t.jquery && !ft.isPlainObject(t))
                    ft.each(t, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in t)
                        K(n, t[n], e, i);
                return r.join("&").replace(nn, "+")
            }
            ,
            ft.fn.extend({
                serialize: function() {
                    return ft.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = ft.prop(this, "elements");
                        return t ? ft.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !ft(this).is(":disabled") && an.test(this.nodeName) && !on.test(t) && (this.checked || !Wt.test(t))
                    }).map(function(t, e) {
                        var n = ft(this).val();
                        return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(sn, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(sn, "\r\n")
                        }
                    }).get()
                }
            }),
            ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
                return this.isLocal ? tt() : rt.documentMode > 8 ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || tt()
            }
            : Q;
            var ln = 0
              , un = {}
              , cn = ft.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in un)
                    un[t](void 0, !0)
            }),
            ht.cors = !!cn && "withCredentials"in cn,
            cn = ht.ajax = !!cn,
            cn && ft.ajaxTransport(function(e) {
                if (!e.crossDomain || ht.cors) {
                    var n;
                    return {
                        send: function(r, i) {
                            var s, o = e.xhr(), a = ++ln;
                            if (o.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (s in e.xhrFields)
                                    o[s] = e.xhrFields[s];
                            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                            e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            for (s in r)
                                void 0 !== r[s] && o.setRequestHeader(s, r[s] + "");
                            o.send(e.hasContent && e.data || null),
                            n = function(t, r) {
                                var s, l, u;
                                if (n && (r || 4 === o.readyState))
                                    if (delete un[a],
                                    n = void 0,
                                    o.onreadystatechange = ft.noop,
                                    r)
                                        4 !== o.readyState && o.abort();
                                    else {
                                        u = {},
                                        s = o.status,
                                        "string" == typeof o.responseText && (u.text = o.responseText);
                                        try {
                                            l = o.statusText
                                        } catch (c) {
                                            l = ""
                                        }
                                        s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                    }
                                u && i(s, l, u, o.getAllResponseHeaders())
                            }
                            ,
                            e.async ? 4 === o.readyState ? t.setTimeout(n) : o.onreadystatechange = un[a] = n : n()
                        },
                        abort: function() {
                            n && n(void 0, !0)
                        }
                    }
                }
            }),
            ft.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return ft.globalEval(t),
                        t
                    }
                }
            }),
            ft.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET",
                t.global = !1)
            }),
            ft.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n = rt.head || ft("head")[0] || rt.documentElement;
                    return {
                        send: function(r, i) {
                            e = rt.createElement("script"),
                            e.async = !0,
                            t.scriptCharset && (e.charset = t.scriptCharset),
                            e.src = t.url,
                            e.onload = e.onreadystatechange = function(t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                                e.parentNode && e.parentNode.removeChild(e),
                                e = null,
                                n || i(200, "success"))
                            }
                            ,
                            n.insertBefore(e, n.firstChild)
                        },
                        abort: function() {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var hn = []
              , dn = /(=)\?(?=&|$)|\?\?/;
            ft.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = hn.pop() || ft.expando + "_" + qe++;
                    return this[t] = !0,
                    t
                }
            }),
            ft.ajaxPrefilter("json jsonp", function(e, n, r) {
                var i, s, o, a = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(dn, "$1" + i) : e.jsonp !== !1 && (e.url += (Ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return o || ft.error(i + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                s = t[i],
                t[i] = function() {
                    o = arguments
                }
                ,
                r.always(function() {
                    void 0 === s ? ft(t).removeProp(i) : t[i] = s,
                    e[i] && (e.jsonpCallback = n.jsonpCallback,
                    hn.push(i)),
                    o && ft.isFunction(s) && s(o[0]),
                    o = s = void 0
                }),
                "script") : void 0
            }),
            ft.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t)
                    return null;
                "boolean" == typeof e && (n = e,
                e = !1),
                e = e || rt;
                var r = _t.exec(t)
                  , i = !n && [];
                return r ? [e.createElement(r[1])] : (r = y([t], e, i),
                i && i.length && ft(i).remove(),
                ft.merge([], r.childNodes))
            }
            ;
            var fn = ft.fn.load;
            ft.fn.load = function(t, e, n) {
                if ("string" != typeof t && fn)
                    return fn.apply(this, arguments);
                var r, i, s, o = this, a = t.indexOf(" ");
                return a > -1 && (r = ft.trim(t.slice(a, t.length)),
                t = t.slice(0, a)),
                ft.isFunction(e) ? (n = e,
                e = void 0) : e && "object" == typeof e && (i = "POST"),
                o.length > 0 && ft.ajax({
                    url: t,
                    type: i || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    s = arguments,
                    o.html(r ? ft("<div>").append(ft.parseHTML(t)).find(r) : t)
                }).always(n && function(t, e) {
                    o.each(function() {
                        n.apply(this, s || [t.responseText, e, t])
                    })
                }
                ),
                this
            }
            ,
            ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                ft.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }),
            ft.expr.filters.animated = function(t) {
                return ft.grep(ft.timers, function(e) {
                    return t === e.elem
                }).length
            }
            ,
            ft.offset = {
                setOffset: function(t, e, n) {
                    var r, i, s, o, a, l, u, c = ft.css(t, "position"), h = ft(t), d = {};
                    "static" === c && (t.style.position = "relative"),
                    a = h.offset(),
                    s = ft.css(t, "top"),
                    l = ft.css(t, "left"),
                    u = ("absolute" === c || "fixed" === c) && ft.inArray("auto", [s, l]) > -1,
                    u ? (r = h.position(),
                    o = r.top,
                    i = r.left) : (o = parseFloat(s) || 0,
                    i = parseFloat(l) || 0),
                    ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))),
                    null != e.top && (d.top = e.top - a.top + o),
                    null != e.left && (d.left = e.left - a.left + i),
                    "using"in e ? e.using.call(t, d) : h.css(d)
                }
            },
            ft.fn.extend({
                offset: function(t) {
                    if (arguments.length)
                        return void 0 === t ? this : this.each(function(e) {
                            ft.offset.setOffset(this, t, e)
                        });
                    var e, n, r = {
                        top: 0,
                        left: 0
                    }, i = this[0], s = i && i.ownerDocument;
                    if (s)
                        return e = s.documentElement,
                        ft.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                        n = et(s),
                        {
                            top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                        }) : r
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = {
                            top: 0,
                            left: 0
                        }, r = this[0];
                        return "fixed" === ft.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(),
                        e = this.offset(),
                        ft.nodeName(t[0], "html") || (n = t.offset()),
                        n.top += ft.css(t[0], "borderTopWidth", !0),
                        n.left += ft.css(t[0], "borderLeftWidth", !0)),
                        {
                            top: e.top - n.top - ft.css(r, "marginTop", !0),
                            left: e.left - n.left - ft.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position"); )
                            t = t.offsetParent;
                        return t || fe
                    })
                }
            }),
            ft.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, e) {
                var n = /Y/.test(e);
                ft.fn[t] = function(r) {
                    return Rt(this, function(t, r, i) {
                        var s = et(t);
                        return void 0 === i ? s ? e in s ? s[e] : s.document.documentElement[r] : t[r] : void (s ? s.scrollTo(n ? ft(s).scrollLeft() : i, n ? i : ft(s).scrollTop()) : t[r] = i)
                    }, t, r, arguments.length, null)
                }
            }),
            ft.each(["top", "left"], function(t, e) {
                ft.cssHooks[e] = j(ht.pixelPosition, function(t, n) {
                    return n ? (n = me(t, e),
                    he.test(n) ? ft(t).position()[e] + "px" : n) : void 0
                })
            }),
            ft.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                ft.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, r) {
                    ft.fn[r] = function(r, i) {
                        var s = arguments.length && (n || "boolean" != typeof r)
                          , o = n || (r === !0 || i === !0 ? "margin" : "border");
                        return Rt(this, function(e, n, r) {
                            var i;
                            return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement,
                            Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ft.css(e, n, o) : ft.style(e, n, r, o)
                        }, e, s ? r : void 0, s, null)
                    }
                })
            }),
            ft.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, r) {
                    return this.on(e, t, n, r)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }),
            ft.fn.size = function() {
                return this.length
            }
            ,
            ft.fn.andSelf = ft.fn.addBack,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return ft
            });
            var pn = t.jQuery
              , mn = t.$;
            return ft.noConflict = function(e) {
                return t.$ === ft && (t.$ = mn),
                e && t.jQuery === ft && (t.jQuery = pn),
                ft
            }
            ,
            e || (t.jQuery = t.$ = ft),
            ft
        })
    }
    , {}],
    2: [function(t, e, n) {
        !function(t, r) {
            "object" == typeof n && "undefined" != typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : t.moment = r()
        }(this, function() {
            "use strict";
            function n() {
                return Nr.apply(null, arguments)
            }
            function r(t) {
                Nr = t
            }
            function i(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }
            function s(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }
            function o(t) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e))
                        return !1;
                return !0
            }
            function a(t) {
                return void 0 === t
            }
            function l(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }
            function u(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }
            function c(t, e) {
                var n, r = [];
                for (n = 0; n < t.length; ++n)
                    r.push(e(t[n], n));
                return r
            }
            function h(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            function d(t, e) {
                for (var n in e)
                    h(e, n) && (t[n] = e[n]);
                return h(e, "toString") && (t.toString = e.toString),
                h(e, "valueOf") && (t.valueOf = e.valueOf),
                t
            }
            function f(t, e, n, r) {
                return Ce(t, e, n, r, !0).utc()
            }
            function p() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }
            function m(t) {
                return null == t._pf && (t._pf = p()),
                t._pf
            }
            function g(t) {
                if (null == t._isValid) {
                    var e = m(t)
                      , n = Or.call(e.parsedDateParts, function(t) {
                        return null != t
                    })
                      , r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour),
                    null != Object.isFrozen && Object.isFrozen(t))
                        return r;
                    t._isValid = r
                }
                return t._isValid
            }
            function y(t) {
                var e = f(NaN);
                return null != t ? d(m(e), t) : m(e).userInvalidated = !0,
                e
            }
            function v(t, e) {
                var n, r, i;
                if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
                a(e._i) || (t._i = e._i),
                a(e._f) || (t._f = e._f),
                a(e._l) || (t._l = e._l),
                a(e._strict) || (t._strict = e._strict),
                a(e._tzm) || (t._tzm = e._tzm),
                a(e._isUTC) || (t._isUTC = e._isUTC),
                a(e._offset) || (t._offset = e._offset),
                a(e._pf) || (t._pf = m(e)),
                a(e._locale) || (t._locale = e._locale),
                jr.length > 0)
                    for (n = 0; n < jr.length; n++)
                        r = jr[n],
                        i = e[r],
                        a(i) || (t[r] = i);
                return t
            }
            function w(t) {
                v(this, t),
                this._d = new Date(null != t._d ? t._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                Er === !1 && (Er = !0,
                n.updateOffset(this),
                Er = !1)
            }
            function b(t) {
                return t instanceof w || null != t && null != t._isAMomentObject
            }
            function x(t) {
                return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
            }
            function _(t) {
                var e = +t
                  , n = 0;
                return 0 !== e && isFinite(e) && (n = x(e)),
                n
            }
            function k(t, e, n) {
                var r, i = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), o = 0;
                for (r = 0; i > r; r++)
                    (n && t[r] !== e[r] || !n && _(t[r]) !== _(e[r])) && o++;
                return o + s
            }
            function S(t) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }
            function T(t, e) {
                var r = !0;
                return d(function() {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, t),
                    r) {
                        for (var i, s = [], o = 0; o < arguments.length; o++) {
                            if (i = "",
                            "object" == typeof arguments[o]) {
                                i += "\n[" + o + "] ";
                                for (var a in arguments[0])
                                    i += a + ": " + arguments[0][a] + ", ";
                                i = i.slice(0, -2)
                            } else
                                i = arguments[o];
                            s.push(i)
                        }
                        S(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack),
                        r = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }
            function C(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e),
                Ar[t] || (S(e),
                Ar[t] = !0)
            }
            function M(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }
            function D(t) {
                var e, n;
                for (n in t)
                    e = t[n],
                    M(e) ? this[n] = e : this["_" + n] = e;
                this._config = t,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            function N(t, e) {
                var n, r = d({}, t);
                for (n in e)
                    h(e, n) && (s(t[n]) && s(e[n]) ? (r[n] = {},
                    d(r[n], t[n]),
                    d(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
                for (n in t)
                    h(t, n) && !h(e, n) && s(t[n]) && (r[n] = d({}, r[n]));
                return r
            }
            function O(t) {
                null != t && this.set(t)
            }
            function j(t, e, n) {
                var r = this._calendar[t] || this._calendar.sameElse;
                return M(r) ? r.call(e, n) : r
            }
            function E(t) {
                var e = this._longDateFormat[t]
                  , n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }),
                this._longDateFormat[t])
            }
            function A() {
                return this._invalidDate
            }
            function Y(t) {
                return this._ordinal.replace("%d", t)
            }
            function P(t, e, n, r) {
                var i = this._relativeTime[n];
                return M(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
            }
            function L(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return M(n) ? n(e) : n.replace(/%s/i, e)
            }
            function F(t, e) {
                var n = t.toLowerCase();
                qr[n] = qr[n + "s"] = qr[e] = t
            }
            function H(t) {
                return "string" == typeof t ? qr[t] || qr[t.toLowerCase()] : void 0
            }
            function R(t) {
                var e, n, r = {};
                for (n in t)
                    h(t, n) && (e = H(n),
                    e && (r[e] = t[n]));
                return r
            }
            function W(t, e) {
                Ir[t] = e
            }
            function q(t) {
                var e = [];
                for (var n in t)
                    e.push({
                        unit: n,
                        priority: Ir[n]
                    });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }),
                e
            }
            function I(t, e, n) {
                var r = "" + Math.abs(t)
                  , i = e - r.length
                  , s = t >= 0;
                return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
            }
            function B(t, e, n, r) {
                var i = r;
                "string" == typeof r && (i = function() {
                    return this[r]()
                }
                ),
                t && ($r[t] = i),
                e && ($r[e[0]] = function() {
                    return I(i.apply(this, arguments), e[1], e[2])
                }
                ),
                n && ($r[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), t)
                }
                )
            }
            function U(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }
            function z(t) {
                var e, n, r = t.match(Br);
                for (e = 0,
                n = r.length; n > e; e++)
                    $r[r[e]] ? r[e] = $r[r[e]] : r[e] = U(r[e]);
                return function(e) {
                    var i, s = "";
                    for (i = 0; n > i; i++)
                        s += M(r[i]) ? r[i].call(e, t) : r[i];
                    return s
                }
            }
            function $(t, e) {
                return t.isValid() ? (e = V(e, t.localeData()),
                zr[e] = zr[e] || z(e),
                zr[e](t)) : t.localeData().invalidDate()
            }
            function V(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var r = 5;
                for (Ur.lastIndex = 0; r >= 0 && Ur.test(t); )
                    t = t.replace(Ur, n),
                    Ur.lastIndex = 0,
                    r -= 1;
                return t
            }
            function G(t, e, n) {
                ci[t] = M(e) ? e : function(t, r) {
                    return t && n ? n : e
                }
            }
            function X(t, e) {
                return h(ci, t) ? ci[t](e._strict, e._locale) : new RegExp(Z(t))
            }
            function Z(t) {
                return J(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
                    return e || n || r || i
                }))
            }
            function J(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function K(t, e) {
                var n, r = e;
                for ("string" == typeof t && (t = [t]),
                l(e) && (r = function(t, n) {
                    n[e] = _(t)
                }
                ),
                n = 0; n < t.length; n++)
                    hi[t[n]] = r
            }
            function Q(t, e) {
                K(t, function(t, n, r, i) {
                    r._w = r._w || {},
                    e(t, r._w, r, i)
                })
            }
            function tt(t, e, n) {
                null != e && h(hi, t) && hi[t](e, n._a, n, t)
            }
            function et(t) {
                return nt(t) ? 366 : 365
            }
            function nt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }
            function rt() {
                return nt(this.year())
            }
            function it(t, e) {
                return function(r) {
                    return null != r ? (ot(this, t, r),
                    n.updateOffset(this, e),
                    this) : st(this, t)
                }
            }
            function st(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }
            function ot(t, e, n) {
                t.isValid() && !isNaN(n) && ("FullYear" === e && nt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), ct(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
            }
            function at(t) {
                return t = H(t),
                M(this[t]) ? this[t]() : this
            }
            function lt(t, e) {
                if ("object" == typeof t) {
                    t = R(t);
                    for (var n = q(t), r = 0; r < n.length; r++)
                        this[n[r].unit](t[n[r].unit])
                } else if (t = H(t),
                M(this[t]))
                    return this[t](e);
                return this
            }
            function ut(t, e) {
                return (t % e + e) % e
            }
            function ct(t, e) {
                if (isNaN(t) || isNaN(e))
                    return NaN;
                var n = ut(e, 12);
                return t += (e - n) / 12,
                1 === n ? nt(t) ? 29 : 28 : 31 - n % 7 % 2
            }
            function ht(t, e) {
                return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ki).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone
            }
            function dt(t, e) {
                return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ki.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            function ft(t, e, n) {
                var r, i, s, o = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    r = 0; 12 > r; ++r)
                        s = f([2e3, r]),
                        this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(),
                        this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (i = xi.call(this._shortMonthsParse, o),
                -1 !== i ? i : null) : (i = xi.call(this._longMonthsParse, o),
                -1 !== i ? i : null) : "MMM" === e ? (i = xi.call(this._shortMonthsParse, o),
                -1 !== i ? i : (i = xi.call(this._longMonthsParse, o),
                -1 !== i ? i : null)) : (i = xi.call(this._longMonthsParse, o),
                -1 !== i ? i : (i = xi.call(this._shortMonthsParse, o),
                -1 !== i ? i : null))
            }
            function pt(t, e, n) {
                var r, i, s;
                if (this._monthsParseExact)
                    return ft.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                r = 0; 12 > r; r++) {
                    if (i = f([2e3, r]),
                    n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
                    n || this._monthsParse[r] || (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
                    this._monthsParse[r] = new RegExp(s.replace(".", ""),"i")),
                    n && "MMMM" === e && this._longMonthsParse[r].test(t))
                        return r;
                    if (n && "MMM" === e && this._shortMonthsParse[r].test(t))
                        return r;
                    if (!n && this._monthsParse[r].test(t))
                        return r
                }
            }
            function mt(t, e) {
                var n;
                if (!t.isValid())
                    return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e))
                        e = _(e);
                    else if (e = t.localeData().monthsParse(e),
                    !l(e))
                        return t;
                return n = Math.min(t.date(), ct(t.year(), e)),
                t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
                t
            }
            function gt(t) {
                return null != t ? (mt(this, t),
                n.updateOffset(this, !0),
                this) : st(this, "Month")
            }
            function yt() {
                return ct(this.year(), this.month())
            }
            function vt(t) {
                return this._monthsParseExact ? (h(this, "_monthsRegex") || bt.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ci),
                this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function wt(t) {
                return this._monthsParseExact ? (h(this, "_monthsRegex") || bt.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Mi),
                this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }
            function bt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, r = [], i = [], s = [];
                for (e = 0; 12 > e; e++)
                    n = f([2e3, e]),
                    r.push(this.monthsShort(n, "")),
                    i.push(this.months(n, "")),
                    s.push(this.months(n, "")),
                    s.push(this.monthsShort(n, ""));
                for (r.sort(t),
                i.sort(t),
                s.sort(t),
                e = 0; 12 > e; e++)
                    r[e] = J(r[e]),
                    i[e] = J(i[e]);
                for (e = 0; 24 > e; e++)
                    s[e] = J(s[e]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
            }
            function xt(t, e, n, r, i, s, o) {
                var a = new Date(t,e,n,r,i,s,o);
                return 100 > t && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t),
                a
            }
            function _t(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t),
                e
            }
            function kt(t, e, n) {
                var r = 7 + e - n
                  , i = (7 + _t(t, 0, r).getUTCDay() - e) % 7;
                return -i + r - 1
            }
            function St(t, e, n, r, i) {
                var s, o, a = (7 + n - r) % 7, l = kt(t, r, i), u = 1 + 7 * (e - 1) + a + l;
                return 0 >= u ? (s = t - 1,
                o = et(s) + u) : u > et(t) ? (s = t + 1,
                o = u - et(t)) : (s = t,
                o = u),
                {
                    year: s,
                    dayOfYear: o
                }
            }
            function Tt(t, e, n) {
                var r, i, s = kt(t.year(), e, n), o = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
                return 1 > o ? (i = t.year() - 1,
                r = o + Ct(i, e, n)) : o > Ct(t.year(), e, n) ? (r = o - Ct(t.year(), e, n),
                i = t.year() + 1) : (i = t.year(),
                r = o),
                {
                    week: r,
                    year: i
                }
            }
            function Ct(t, e, n) {
                var r = kt(t, e, n)
                  , i = kt(t + 1, e, n);
                return (et(t) - r + i) / 7
            }
            function Mt(t) {
                return Tt(t, this._week.dow, this._week.doy).week
            }
            function Dt() {
                return this._week.dow
            }
            function Nt() {
                return this._week.doy
            }
            function Ot(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }
            function jt(t) {
                var e = Tt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }
            function Et(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t),
                "number" == typeof t ? t : null) : parseInt(t, 10)
            }
            function At(t, e) {
                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }
            function Yt(t, e) {
                return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }
            function Pt(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }
            function Lt(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }
            function Ft(t, e, n) {
                var r, i, s, o = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    r = 0; 7 > r; ++r)
                        s = f([2e3, 1]).day(r),
                        this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(),
                        this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (i = xi.call(this._weekdaysParse, o),
                -1 !== i ? i : null) : "ddd" === e ? (i = xi.call(this._shortWeekdaysParse, o),
                -1 !== i ? i : null) : (i = xi.call(this._minWeekdaysParse, o),
                -1 !== i ? i : null) : "dddd" === e ? (i = xi.call(this._weekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._shortWeekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._minWeekdaysParse, o),
                -1 !== i ? i : null))) : "ddd" === e ? (i = xi.call(this._shortWeekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._weekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._minWeekdaysParse, o),
                -1 !== i ? i : null))) : (i = xi.call(this._minWeekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._weekdaysParse, o),
                -1 !== i ? i : (i = xi.call(this._shortWeekdaysParse, o),
                -1 !== i ? i : null)))
            }
            function Ht(t, e, n) {
                var r, i, s;
                if (this._weekdaysParseExact)
                    return Ft.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                r = 0; 7 > r; r++) {
                    if (i = f([2e3, 1]).day(r),
                    n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
                    this._weekdaysParse[r] || (s = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
                    this._weekdaysParse[r] = new RegExp(s.replace(".", ""),"i")),
                    n && "dddd" === e && this._fullWeekdaysParse[r].test(t))
                        return r;
                    if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t))
                        return r;
                    if (n && "dd" === e && this._minWeekdaysParse[r].test(t))
                        return r;
                    if (!n && this._weekdaysParse[r].test(t))
                        return r
                }
            }
            function Rt(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = Et(t, this.localeData()),
                this.add(t - e, "d")) : e
            }
            function Wt(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }
            function qt(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                if (null != t) {
                    var e = At(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }
            function It(t) {
                return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || zt.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ei),
                this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function Bt(t) {
                return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || zt.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ai),
                this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function Ut(t) {
                return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || zt.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Yi),
                this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function zt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, r, i, s, o = [], a = [], l = [], u = [];
                for (e = 0; 7 > e; e++)
                    n = f([2e3, 1]).day(e),
                    r = this.weekdaysMin(n, ""),
                    i = this.weekdaysShort(n, ""),
                    s = this.weekdays(n, ""),
                    o.push(r),
                    a.push(i),
                    l.push(s),
                    u.push(r),
                    u.push(i),
                    u.push(s);
                for (o.sort(t),
                a.sort(t),
                l.sort(t),
                u.sort(t),
                e = 0; 7 > e; e++)
                    a[e] = J(a[e]),
                    l[e] = J(l[e]),
                    u[e] = J(u[e]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")","i")
            }
            function $t() {
                return this.hours() % 12 || 12
            }
            function Vt() {
                return this.hours() || 24
            }
            function Gt(t, e) {
                B(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }
            function Xt(t, e) {
                return e._meridiemParse
            }
            function Zt(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }
            function Jt(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            function Kt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }
            function Qt(t) {
                for (var e, n, r, i, s = 0; s < t.length; ) {
                    for (i = Kt(t[s]).split("-"),
                    e = i.length,
                    n = Kt(t[s + 1]),
                    n = n ? n.split("-") : null; e > 0; ) {
                        if (r = te(i.slice(0, e).join("-")))
                            return r;
                        if (n && n.length >= e && k(i, n, !0) >= e - 1)
                            break;
                        e--
                    }
                    s++
                }
                return Pi
            }
            function te(n) {
                var r = null;
                if (!Ri[n] && "undefined" != typeof e && e && e.exports)
                    try {
                        r = Pi._abbr;
                        var i = t;
                        i("./locale/" + n),
                        ee(r)
                    } catch (s) {}
                return Ri[n]
            }
            function ee(t, e) {
                var n;
                return t && (n = a(e) ? ie(t) : ne(t, e),
                n ? Pi = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")),
                Pi._abbr
            }
            function ne(t, e) {
                if (null !== e) {
                    var n, r = Hi;
                    if (e.abbr = t,
                    null != Ri[t])
                        C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        r = Ri[t]._config;
                    else if (null != e.parentLocale)
                        if (null != Ri[e.parentLocale])
                            r = Ri[e.parentLocale]._config;
                        else {
                            if (n = te(e.parentLocale),
                            null == n)
                                return Wi[e.parentLocale] || (Wi[e.parentLocale] = []),
                                Wi[e.parentLocale].push({
                                    name: t,
                                    config: e
                                }),
                                null;
                            r = n._config
                        }
                    return Ri[t] = new O(N(r, e)),
                    Wi[t] && Wi[t].forEach(function(t) {
                        ne(t.name, t.config)
                    }),
                    ee(t),
                    Ri[t]
                }
                return delete Ri[t],
                null
            }
            function re(t, e) {
                if (null != e) {
                    var n, r, i = Hi;
                    r = te(t),
                    null != r && (i = r._config),
                    e = N(i, e),
                    n = new O(e),
                    n.parentLocale = Ri[t],
                    Ri[t] = n,
                    ee(t)
                } else
                    null != Ri[t] && (null != Ri[t].parentLocale ? Ri[t] = Ri[t].parentLocale : null != Ri[t] && delete Ri[t]);
                return Ri[t]
            }
            function ie(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
                !t)
                    return Pi;
                if (!i(t)) {
                    if (e = te(t))
                        return e;
                    t = [t]
                }
                return Qt(t)
            }
            function se() {
                return Yr(Ri)
            }
            function oe(t) {
                var e, n = t._a;
                return n && -2 === m(t).overflow && (e = n[fi] < 0 || n[fi] > 11 ? fi : n[pi] < 1 || n[pi] > ct(n[di], n[fi]) ? pi : n[mi] < 0 || n[mi] > 24 || 24 === n[mi] && (0 !== n[gi] || 0 !== n[yi] || 0 !== n[vi]) ? mi : n[gi] < 0 || n[gi] > 59 ? gi : n[yi] < 0 || n[yi] > 59 ? yi : n[vi] < 0 || n[vi] > 999 ? vi : -1,
                m(t)._overflowDayOfYear && (di > e || e > pi) && (e = pi),
                m(t)._overflowWeeks && -1 === e && (e = wi),
                m(t)._overflowWeekday && -1 === e && (e = bi),
                m(t).overflow = e),
                t
            }
            function ae(t, e, n) {
                return null != t ? t : null != e ? e : n
            }
            function le(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }
            function ue(t) {
                var e, n, r, i, s, o = [];
                if (!t._d) {
                    for (r = le(t),
                    t._w && null == t._a[pi] && null == t._a[fi] && ce(t),
                    null != t._dayOfYear && (s = ae(t._a[di], r[di]),
                    (t._dayOfYear > et(s) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0),
                    n = _t(s, 0, t._dayOfYear),
                    t._a[fi] = n.getUTCMonth(),
                    t._a[pi] = n.getUTCDate()),
                    e = 0; 3 > e && null == t._a[e]; ++e)
                        t._a[e] = o[e] = r[e];
                    for (; 7 > e; e++)
                        t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[mi] && 0 === t._a[gi] && 0 === t._a[yi] && 0 === t._a[vi] && (t._nextDay = !0,
                    t._a[mi] = 0),
                    t._d = (t._useUTC ? _t : xt).apply(null, o),
                    i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(),
                    null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    t._nextDay && (t._a[mi] = 24),
                    t._w && "undefined" != typeof t._w.d && t._w.d !== i && (m(t).weekdayMismatch = !0)
                }
            }
            function ce(t) {
                var e, n, r, i, s, o, a, l;
                if (e = t._w,
                null != e.GG || null != e.W || null != e.E)
                    s = 1,
                    o = 4,
                    n = ae(e.GG, t._a[di], Tt(Me(), 1, 4).year),
                    r = ae(e.W, 1),
                    i = ae(e.E, 1),
                    (1 > i || i > 7) && (l = !0);
                else {
                    s = t._locale._week.dow,
                    o = t._locale._week.doy;
                    var u = Tt(Me(), s, o);
                    n = ae(e.gg, t._a[di], u.year),
                    r = ae(e.w, u.week),
                    null != e.d ? (i = e.d,
                    (0 > i || i > 6) && (l = !0)) : null != e.e ? (i = e.e + s,
                    (e.e < 0 || e.e > 6) && (l = !0)) : i = s
                }
                1 > r || r > Ct(n, s, o) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (a = St(n, r, i, s, o),
                t._a[di] = a.year,
                t._dayOfYear = a.dayOfYear)
            }
            function he(t) {
                var e, n, r, i, s, o, a = t._i, l = qi.exec(a) || Ii.exec(a);
                if (l) {
                    for (m(t).iso = !0,
                    e = 0,
                    n = Ui.length; n > e; e++)
                        if (Ui[e][1].exec(l[1])) {
                            i = Ui[e][0],
                            r = Ui[e][2] !== !1;
                            break
                        }
                    if (null == i)
                        return void (t._isValid = !1);
                    if (l[3]) {
                        for (e = 0,
                        n = zi.length; n > e; e++)
                            if (zi[e][1].exec(l[3])) {
                                s = (l[2] || " ") + zi[e][0];
                                break
                            }
                        if (null == s)
                            return void (t._isValid = !1)
                    }
                    if (!r && null != s)
                        return void (t._isValid = !1);
                    if (l[4]) {
                        if (!Bi.exec(l[4]))
                            return void (t._isValid = !1);
                        o = "Z"
                    }
                    t._f = i + (s || "") + (o || ""),
                    we(t)
                } else
                    t._isValid = !1
            }
            function de(t, e, n, r, i, s) {
                var o = [fe(t), Ti.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
                return s && o.push(parseInt(s, 10)),
                o
            }
            function fe(t) {
                var e = parseInt(t, 10);
                return 49 >= e ? 2e3 + e : 999 >= e ? 1900 + e : e
            }
            function pe(t) {
                return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }
            function me(t, e, n) {
                if (t) {
                    var r = Oi.indexOf(t)
                      , i = new Date(e[0],e[1],e[2]).getDay();
                    if (r !== i)
                        return m(n).weekdayMismatch = !0,
                        n._isValid = !1,
                        !1
                }
                return !0
            }
            function ge(t, e, n) {
                if (t)
                    return Gi[t];
                if (e)
                    return 0;
                var r = parseInt(n, 10)
                  , i = r % 100
                  , s = (r - i) / 100;
                return 60 * s + i
            }
            function ye(t) {
                var e = Vi.exec(pe(t._i));
                if (e) {
                    var n = de(e[4], e[3], e[2], e[5], e[6], e[7]);
                    if (!me(e[1], n, t))
                        return;
                    t._a = n,
                    t._tzm = ge(e[8], e[9], e[10]),
                    t._d = _t.apply(null, t._a),
                    t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    m(t).rfc2822 = !0
                } else
                    t._isValid = !1
            }
            function ve(t) {
                var e = $i.exec(t._i);
                return null !== e ? void (t._d = new Date(+e[1])) : (he(t),
                void (t._isValid === !1 && (delete t._isValid,
                ye(t),
                t._isValid === !1 && (delete t._isValid,
                n.createFromInputFallback(t)))))
            }
            function we(t) {
                if (t._f === n.ISO_8601)
                    return void he(t);
                if (t._f === n.RFC_2822)
                    return void ye(t);
                t._a = [],
                m(t).empty = !0;
                var e, r, i, s, o, a = "" + t._i, l = a.length, u = 0;
                for (i = V(t._f, t._locale).match(Br) || [],
                e = 0; e < i.length; e++)
                    s = i[e],
                    r = (a.match(X(s, t)) || [])[0],
                    r && (o = a.substr(0, a.indexOf(r)),
                    o.length > 0 && m(t).unusedInput.push(o),
                    a = a.slice(a.indexOf(r) + r.length),
                    u += r.length),
                    $r[s] ? (r ? m(t).empty = !1 : m(t).unusedTokens.push(s),
                    tt(s, r, t)) : t._strict && !r && m(t).unusedTokens.push(s);
                m(t).charsLeftOver = l - u,
                a.length > 0 && m(t).unusedInput.push(a),
                t._a[mi] <= 12 && m(t).bigHour === !0 && t._a[mi] > 0 && (m(t).bigHour = void 0),
                m(t).parsedDateParts = t._a.slice(0),
                m(t).meridiem = t._meridiem,
                t._a[mi] = be(t._locale, t._a[mi], t._meridiem),
                ue(t),
                oe(t)
            }
            function be(t, e, n) {
                var r;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n),
                r && 12 > e && (e += 12),
                r || 12 !== e || (e = 0),
                e) : e
            }
            function xe(t) {
                var e, n, r, i, s;
                if (0 === t._f.length)
                    return m(t).invalidFormat = !0,
                    void (t._d = new Date(NaN));
                for (i = 0; i < t._f.length; i++)
                    s = 0,
                    e = v({}, t),
                    null != t._useUTC && (e._useUTC = t._useUTC),
                    e._f = t._f[i],
                    we(e),
                    g(e) && (s += m(e).charsLeftOver,
                    s += 10 * m(e).unusedTokens.length,
                    m(e).score = s,
                    (null == r || r > s) && (r = s,
                    n = e));
                d(t, n || e)
            }
            function _e(t) {
                if (!t._d) {
                    var e = R(t._i);
                    t._a = c([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }),
                    ue(t)
                }
            }
            function ke(t) {
                var e = new w(oe(Se(t)));
                return e._nextDay && (e.add(1, "d"),
                e._nextDay = void 0),
                e
            }
            function Se(t) {
                var e = t._i
                  , n = t._f;
                return t._locale = t._locale || ie(t._l),
                null === e || void 0 === n && "" === e ? y({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                b(e) ? new w(oe(e)) : (u(e) ? t._d = e : i(n) ? xe(t) : n ? we(t) : Te(t),
                g(t) || (t._d = null),
                t))
            }
            function Te(t) {
                var e = t._i;
                a(e) ? t._d = new Date(n.now()) : u(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? ve(t) : i(e) ? (t._a = c(e.slice(0), function(t) {
                    return parseInt(t, 10)
                }),
                ue(t)) : s(e) ? _e(t) : l(e) ? t._d = new Date(e) : n.createFromInputFallback(t)
            }
            function Ce(t, e, n, r, a) {
                var l = {};
                return (n === !0 || n === !1) && (r = n,
                n = void 0),
                (s(t) && o(t) || i(t) && 0 === t.length) && (t = void 0),
                l._isAMomentObject = !0,
                l._useUTC = l._isUTC = a,
                l._l = n,
                l._i = t,
                l._f = e,
                l._strict = r,
                ke(l)
            }
            function Me(t, e, n, r) {
                return Ce(t, e, n, r, !1)
            }
            function De(t, e) {
                var n, r;
                if (1 === e.length && i(e[0]) && (e = e[0]),
                !e.length)
                    return Me();
                for (n = e[0],
                r = 1; r < e.length; ++r)
                    (!e[r].isValid() || e[r][t](n)) && (n = e[r]);
                return n
            }
            function Ne() {
                var t = [].slice.call(arguments, 0);
                return De("isBefore", t)
            }
            function Oe() {
                var t = [].slice.call(arguments, 0);
                return De("isAfter", t)
            }
            function je(t) {
                for (var e in t)
                    if (-1 === xi.call(Ki, e) || null != t[e] && isNaN(t[e]))
                        return !1;
                for (var n = !1, r = 0; r < Ki.length; ++r)
                    if (t[Ki[r]]) {
                        if (n)
                            return !1;
                        parseFloat(t[Ki[r]]) !== _(t[Ki[r]]) && (n = !0)
                    }
                return !0
            }
            function Ee() {
                return this._isValid
            }
            function Ae() {
                return Ke(NaN)
            }
            function Ye(t) {
                var e = R(t)
                  , n = e.year || 0
                  , r = e.quarter || 0
                  , i = e.month || 0
                  , s = e.week || 0
                  , o = e.day || 0
                  , a = e.hour || 0
                  , l = e.minute || 0
                  , u = e.second || 0
                  , c = e.millisecond || 0;
                this._isValid = je(e),
                this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60,
                this._days = +o + 7 * s,
                this._months = +i + 3 * r + 12 * n,
                this._data = {},
                this._locale = ie(),
                this._bubble()
            }
            function Pe(t) {
                return t instanceof Ye
            }
            function Le(t) {
                return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
            }
            function Fe(t, e) {
                B(t, 0, 0, function() {
                    var t = this.utcOffset()
                      , n = "+";
                    return 0 > t && (t = -t,
                    n = "-"),
                    n + I(~~(t / 60), 2) + e + I(~~t % 60, 2)
                })
            }
            function He(t, e) {
                var n = (e || "").match(t);
                if (null === n)
                    return null;
                var r = n[n.length - 1] || []
                  , i = (r + "").match(Qi) || ["-", 0, 0]
                  , s = +(60 * i[1]) + _(i[2]);
                return 0 === s ? 0 : "+" === i[0] ? s : -s
            }
            function Re(t, e) {
                var r, i;
                return e._isUTC ? (r = e.clone(),
                i = (b(t) || u(t) ? t.valueOf() : Me(t).valueOf()) - r.valueOf(),
                r._d.setTime(r._d.valueOf() + i),
                n.updateOffset(r, !1),
                r) : Me(t).local()
            }
            function We(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }
            function qe(t, e, r) {
                var i, s = this._offset || 0;
                if (!this.isValid())
                    return null != t ? this : NaN;
                if (null != t) {
                    if ("string" == typeof t) {
                        if (t = He(ai, t),
                        null === t)
                            return this
                    } else
                        Math.abs(t) < 16 && !r && (t = 60 * t);
                    return !this._isUTC && e && (i = We(this)),
                    this._offset = t,
                    this._isUTC = !0,
                    null != i && this.add(i, "m"),
                    s !== t && (!e || this._changeInProgress ? rn(this, Ke(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    n.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? s : We(this)
            }
            function Ie(t, e) {
                return null != t ? ("string" != typeof t && (t = -t),
                this.utcOffset(t, e),
                this) : -this.utcOffset()
            }
            function Be(t) {
                return this.utcOffset(0, t)
            }
            function Ue(t) {
                return this._isUTC && (this.utcOffset(0, t),
                this._isUTC = !1,
                t && this.subtract(We(this), "m")),
                this
            }
            function ze() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = He(oi, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }
            function $e(t) {
                return this.isValid() ? (t = t ? Me(t).utcOffset() : 0,
                (this.utcOffset() - t) % 60 === 0) : !1
            }
            function Ve() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Ge() {
                if (!a(this._isDSTShifted))
                    return this._isDSTShifted;
                var t = {};
                if (v(t, this),
                t = Se(t),
                t._a) {
                    var e = t._isUTC ? f(t._a) : Me(t._a);
                    this._isDSTShifted = this.isValid() && k(t._a, e.toArray()) > 0
                } else
                    this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            function Xe() {
                return this.isValid() ? !this._isUTC : !1
            }
            function Ze() {
                return this.isValid() ? this._isUTC : !1
            }
            function Je() {
                return this.isValid() ? this._isUTC && 0 === this._offset : !1
            }
            function Ke(t, e) {
                var n, r, i, s = t, o = null;
                return Pe(t) ? s = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : l(t) ? (s = {},
                e ? s[e] = t : s.milliseconds = t) : (o = ts.exec(t)) ? (n = "-" === o[1] ? -1 : 1,
                s = {
                    y: 0,
                    d: _(o[pi]) * n,
                    h: _(o[mi]) * n,
                    m: _(o[gi]) * n,
                    s: _(o[yi]) * n,
                    ms: _(Le(1e3 * o[vi])) * n
                }) : (o = es.exec(t)) ? (n = "-" === o[1] ? -1 : ("+" === o[1],
                1),
                s = {
                    y: Qe(o[2], n),
                    M: Qe(o[3], n),
                    w: Qe(o[4], n),
                    d: Qe(o[5], n),
                    h: Qe(o[6], n),
                    m: Qe(o[7], n),
                    s: Qe(o[8], n)
                }) : null == s ? s = {} : "object" == typeof s && ("from"in s || "to"in s) && (i = en(Me(s.from), Me(s.to)),
                s = {},
                s.ms = i.milliseconds,
                s.M = i.months),
                r = new Ye(s),
                Pe(t) && h(t, "_locale") && (r._locale = t._locale),
                r
            }
            function Qe(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }
            function tn(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
                t.clone().add(n.months, "M").isAfter(e) && --n.months,
                n.milliseconds = +e - +t.clone().add(n.months, "M"),
                n
            }
            function en(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Re(e, t),
                t.isBefore(e) ? n = tn(t, e) : (n = tn(e, t),
                n.milliseconds = -n.milliseconds,
                n.months = -n.months),
                n) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function nn(t, e) {
                return function(n, r) {
                    var i, s;
                    return null === r || isNaN(+r) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    s = n,
                    n = r,
                    r = s),
                    n = "string" == typeof n ? +n : n,
                    i = Ke(n, r),
                    rn(this, i, t),
                    this
                }
            }
            function rn(t, e, r, i) {
                var s = e._milliseconds
                  , o = Le(e._days)
                  , a = Le(e._months);
                t.isValid() && (i = null == i ? !0 : i,
                a && mt(t, st(t, "Month") + a * r),
                o && ot(t, "Date", st(t, "Date") + o * r),
                s && t._d.setTime(t._d.valueOf() + s * r),
                i && n.updateOffset(t, o || a))
            }
            function sn(t, e) {
                var n = t.diff(e, "days", !0);
                return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
            }
            function on(t, e) {
                var r = t || Me()
                  , i = Re(r, this).startOf("day")
                  , s = n.calendarFormat(this, i) || "sameElse"
                  , o = e && (M(e[s]) ? e[s].call(this, r) : e[s]);
                return this.format(o || this.localeData().calendar(s, this, Me(r)))
            }
            function an() {
                return new w(this)
            }
            function ln(t, e) {
                var n = b(t) ? t : Me(t);
                return this.isValid() && n.isValid() ? (e = H(a(e) ? "millisecond" : e),
                "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
            }
            function un(t, e) {
                var n = b(t) ? t : Me(t);
                return this.isValid() && n.isValid() ? (e = H(a(e) ? "millisecond" : e),
                "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
            }
            function cn(t, e, n, r) {
                return r = r || "()",
                ("(" === r[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }
            function hn(t, e) {
                var n, r = b(t) ? t : Me(t);
                return this.isValid() && r.isValid() ? (e = H(e || "millisecond"),
                "millisecond" === e ? this.valueOf() === r.valueOf() : (n = r.valueOf(),
                this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
            }
            function dn(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }
            function fn(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }
            function pn(t, e, n) {
                var r, i, s;
                if (!this.isValid())
                    return NaN;
                if (r = Re(t, this),
                !r.isValid())
                    return NaN;
                switch (i = 6e4 * (r.utcOffset() - this.utcOffset()),
                e = H(e)) {
                case "year":
                    s = mn(this, r) / 12;
                    break;
                case "month":
                    s = mn(this, r);
                    break;
                case "quarter":
                    s = mn(this, r) / 3;
                    break;
                case "second":
                    s = (this - r) / 1e3;
                    break;
                case "minute":
                    s = (this - r) / 6e4;
                    break;
                case "hour":
                    s = (this - r) / 36e5;
                    break;
                case "day":
                    s = (this - r - i) / 864e5;
                    break;
                case "week":
                    s = (this - r - i) / 6048e5;
                    break;
                default:
                    s = this - r
                }
                return n ? s : x(s)
            }
            function mn(t, e) {
                var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()), s = t.clone().add(i, "months");
                return 0 > e - s ? (n = t.clone().add(i - 1, "months"),
                r = (e - s) / (s - n)) : (n = t.clone().add(i + 1, "months"),
                r = (e - s) / (n - s)),
                -(i + r) || 0
            }
            function gn() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function yn(t) {
                if (!this.isValid())
                    return null;
                var e = t !== !0
                  , n = e ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? $(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", $(n, "Z")) : $(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            function vn() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var t = "moment"
                  , e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                e = "Z");
                var n = "[" + t + '("]'
                  , r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                  , i = "-MM-DD[T]HH:mm:ss.SSS"
                  , s = e + '[")]';
                return this.format(n + r + i + s)
            }
            function wn(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = $(this, t);
                return this.localeData().postformat(e)
            }
            function bn(t, e) {
                return this.isValid() && (b(t) && t.isValid() || Me(t).isValid()) ? Ke({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function xn(t) {
                return this.from(Me(), t)
            }
            function _n(t, e) {
                return this.isValid() && (b(t) && t.isValid() || Me(t).isValid()) ? Ke({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function kn(t) {
                return this.to(Me(), t)
            }
            function Sn(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ie(t),
                null != e && (this._locale = e),
                this)
            }
            function Tn() {
                return this._locale
            }
            function Cn(t) {
                switch (t = H(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === t && this.weekday(0),
                "isoWeek" === t && this.isoWeekday(1),
                "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
                this
            }
            function Mn(t) {
                return t = H(t),
                void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"),
                this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }
            function Dn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function Nn() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function On() {
                return new Date(this.valueOf())
            }
            function jn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }
            function En() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }
            function An() {
                return this.isValid() ? this.toISOString() : null
            }
            function Yn() {
                return g(this)
            }
            function Pn() {
                return d({}, m(this))
            }
            function Ln() {
                return m(this).overflow
            }
            function Fn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Hn(t, e) {
                B(0, [t, t.length], 0, e)
            }
            function Rn(t) {
                return Bn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function Wn(t) {
                return Bn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function qn() {
                return Ct(this.year(), 1, 4)
            }
            function In() {
                var t = this.localeData()._week;
                return Ct(this.year(), t.dow, t.doy)
            }
            function Bn(t, e, n, r, i) {
                var s;
                return null == t ? Tt(this, r, i).year : (s = Ct(t, r, i),
                e > s && (e = s),
                Un.call(this, t, e, n, r, i))
            }
            function Un(t, e, n, r, i) {
                var s = St(t, e, n, r, i)
                  , o = _t(s.year, 0, s.dayOfYear);
                return this.year(o.getUTCFullYear()),
                this.month(o.getUTCMonth()),
                this.date(o.getUTCDate()),
                this
            }
            function zn(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }
            function $n(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }
            function Vn(t, e) {
                e[vi] = _(1e3 * ("0." + t))
            }
            function Gn() {
                return this._isUTC ? "UTC" : ""
            }
            function Xn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            function Zn(t) {
                return Me(1e3 * t)
            }
            function Jn() {
                return Me.apply(null, arguments).parseZone()
            }
            function Kn(t) {
                return t
            }
            function Qn(t, e, n, r) {
                var i = ie()
                  , s = f().set(r, e);
                return i[n](s, t)
            }
            function tr(t, e, n) {
                if (l(t) && (e = t,
                t = void 0),
                t = t || "",
                null != e)
                    return Qn(t, e, n, "month");
                var r, i = [];
                for (r = 0; 12 > r; r++)
                    i[r] = Qn(t, r, n, "month");
                return i
            }
            function er(t, e, n, r) {
                "boolean" == typeof t ? (l(e) && (n = e,
                e = void 0),
                e = e || "") : (e = t,
                n = e,
                t = !1,
                l(e) && (n = e,
                e = void 0),
                e = e || "");
                var i = ie()
                  , s = t ? i._week.dow : 0;
                if (null != n)
                    return Qn(e, (n + s) % 7, r, "day");
                var o, a = [];
                for (o = 0; 7 > o; o++)
                    a[o] = Qn(e, (o + s) % 7, r, "day");
                return a
            }
            function nr(t, e) {
                return tr(t, e, "months")
            }
            function rr(t, e) {
                return tr(t, e, "monthsShort")
            }
            function ir(t, e, n) {
                return er(t, e, n, "weekdays")
            }
            function sr(t, e, n) {
                return er(t, e, n, "weekdaysShort")
            }
            function or(t, e, n) {
                return er(t, e, n, "weekdaysMin")
            }
            function ar() {
                var t = this._data;
                return this._milliseconds = ds(this._milliseconds),
                this._days = ds(this._days),
                this._months = ds(this._months),
                t.milliseconds = ds(t.milliseconds),
                t.seconds = ds(t.seconds),
                t.minutes = ds(t.minutes),
                t.hours = ds(t.hours),
                t.months = ds(t.months),
                t.years = ds(t.years),
                this
            }
            function lr(t, e, n, r) {
                var i = Ke(e, n);
                return t._milliseconds += r * i._milliseconds,
                t._days += r * i._days,
                t._months += r * i._months,
                t._bubble()
            }
            function ur(t, e) {
                return lr(this, t, e, 1)
            }
            function cr(t, e) {
                return lr(this, t, e, -1)
            }
            function hr(t) {
                return 0 > t ? Math.floor(t) : Math.ceil(t)
            }
            function dr() {
                var t, e, n, r, i, s = this._milliseconds, o = this._days, a = this._months, l = this._data;
                return s >= 0 && o >= 0 && a >= 0 || 0 >= s && 0 >= o && 0 >= a || (s += 864e5 * hr(pr(a) + o),
                o = 0,
                a = 0),
                l.milliseconds = s % 1e3,
                t = x(s / 1e3),
                l.seconds = t % 60,
                e = x(t / 60),
                l.minutes = e % 60,
                n = x(e / 60),
                l.hours = n % 24,
                o += x(n / 24),
                i = x(fr(o)),
                a += i,
                o -= hr(pr(i)),
                r = x(a / 12),
                a %= 12,
                l.days = o,
                l.months = a,
                l.years = r,
                this
            }
            function fr(t) {
                return 4800 * t / 146097
            }
            function pr(t) {
                return 146097 * t / 4800
            }
            function mr(t) {
                if (!this.isValid())
                    return NaN;
                var e, n, r = this._milliseconds;
                if (t = H(t),
                "month" === t || "year" === t)
                    return e = this._days + r / 864e5,
                    n = this._months + fr(e),
                    "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(pr(this._months)),
                t) {
                case "week":
                    return e / 7 + r / 6048e5;
                case "day":
                    return e + r / 864e5;
                case "hour":
                    return 24 * e + r / 36e5;
                case "minute":
                    return 1440 * e + r / 6e4;
                case "second":
                    return 86400 * e + r / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + r;
                default:
                    throw new Error("Unknown unit " + t)
                }
            }
            function gr() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12) : NaN
            }
            function yr(t) {
                return function() {
                    return this.as(t)
                }
            }
            function vr() {
                return Ke(this)
            }
            function wr(t) {
                return t = H(t),
                this.isValid() ? this[t + "s"]() : NaN
            }
            function br(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            function xr() {
                return x(this.days() / 7)
            }
            function _r(t, e, n, r, i) {
                return i.relativeTime(e || 1, !!n, t, r)
            }
            function kr(t, e, n) {
                var r = Ke(t).abs()
                  , i = Ds(r.as("s"))
                  , s = Ds(r.as("m"))
                  , o = Ds(r.as("h"))
                  , a = Ds(r.as("d"))
                  , l = Ds(r.as("M"))
                  , u = Ds(r.as("y"))
                  , c = i <= Ns.ss && ["s", i] || i < Ns.s && ["ss", i] || 1 >= s && ["m"] || s < Ns.m && ["mm", s] || 1 >= o && ["h"] || o < Ns.h && ["hh", o] || 1 >= a && ["d"] || a < Ns.d && ["dd", a] || 1 >= l && ["M"] || l < Ns.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
                return c[2] = e,
                c[3] = +t > 0,
                c[4] = n,
                _r.apply(null, c)
            }
            function Sr(t) {
                return void 0 === t ? Ds : "function" == typeof t ? (Ds = t,
                !0) : !1
            }
            function Tr(t, e) {
                return void 0 === Ns[t] ? !1 : void 0 === e ? Ns[t] : (Ns[t] = e,
                "s" === t && (Ns.ss = e - 1),
                !0)
            }
            function Cr(t) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e = this.localeData()
                  , n = kr(this, !t, e);
                return t && (n = e.pastFuture(+this, n)),
                e.postformat(n)
            }
            function Mr(t) {
                return (t > 0) - (0 > t) || +t
            }
            function Dr() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var t, e, n, r = Os(this._milliseconds) / 1e3, i = Os(this._days), s = Os(this._months);
                t = x(r / 60),
                e = x(t / 60),
                r %= 60,
                t %= 60,
                n = x(s / 12),
                s %= 12;
                var o = n
                  , a = s
                  , l = i
                  , u = e
                  , c = t
                  , h = r ? r.toFixed(3).replace(/\.?0+$/, "") : ""
                  , d = this.asSeconds();
                if (!d)
                    return "P0D";
                var f = 0 > d ? "-" : ""
                  , p = Mr(this._months) !== Mr(d) ? "-" : ""
                  , m = Mr(this._days) !== Mr(d) ? "-" : ""
                  , g = Mr(this._milliseconds) !== Mr(d) ? "-" : "";
                return f + "P" + (o ? p + o + "Y" : "") + (a ? p + a + "M" : "") + (l ? m + l + "D" : "") + (u || c || h ? "T" : "") + (u ? g + u + "H" : "") + (c ? g + c + "M" : "") + (h ? g + h + "S" : "")
            }
            var Nr, Or;
            Or = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, r = 0; n > r; r++)
                    if (r in e && t.call(this, e[r], r, e))
                        return !0;
                return !1
            }
            ;
            var jr = n.momentProperties = []
              , Er = !1
              , Ar = {};
            n.suppressDeprecationWarnings = !1,
            n.deprecationHandler = null;
            var Yr;
            Yr = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t)
                    h(t, e) && n.push(e);
                return n
            }
            ;
            var Pr = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }
              , Lr = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }
              , Fr = "Invalid date"
              , Hr = "%d"
              , Rr = /\d{1,2}/
              , Wr = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }
              , qr = {}
              , Ir = {}
              , Br = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , Ur = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , zr = {}
              , $r = {}
              , Vr = /\d/
              , Gr = /\d\d/
              , Xr = /\d{3}/
              , Zr = /\d{4}/
              , Jr = /[+-]?\d{6}/
              , Kr = /\d\d?/
              , Qr = /\d\d\d\d?/
              , ti = /\d\d\d\d\d\d?/
              , ei = /\d{1,3}/
              , ni = /\d{1,4}/
              , ri = /[+-]?\d{1,6}/
              , ii = /\d+/
              , si = /[+-]?\d+/
              , oi = /Z|[+-]\d\d:?\d\d/gi
              , ai = /Z|[+-]\d\d(?::?\d\d)?/gi
              , li = /[+-]?\d+(\.\d{1,3})?/
              , ui = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
              , ci = {}
              , hi = {}
              , di = 0
              , fi = 1
              , pi = 2
              , mi = 3
              , gi = 4
              , yi = 5
              , vi = 6
              , wi = 7
              , bi = 8;
            B("Y", 0, 0, function() {
                var t = this.year();
                return 9999 >= t ? "" + t : "+" + t
            }),
            B(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }),
            B(0, ["YYYY", 4], 0, "year"),
            B(0, ["YYYYY", 5], 0, "year"),
            B(0, ["YYYYYY", 6, !0], 0, "year"),
            F("year", "y"),
            W("year", 1),
            G("Y", si),
            G("YY", Kr, Gr),
            G("YYYY", ni, Zr),
            G("YYYYY", ri, Jr),
            G("YYYYYY", ri, Jr),
            K(["YYYYY", "YYYYYY"], di),
            K("YYYY", function(t, e) {
                e[di] = 2 === t.length ? n.parseTwoDigitYear(t) : _(t)
            }),
            K("YY", function(t, e) {
                e[di] = n.parseTwoDigitYear(t)
            }),
            K("Y", function(t, e) {
                e[di] = parseInt(t, 10)
            }),
            n.parseTwoDigitYear = function(t) {
                return _(t) + (_(t) > 68 ? 1900 : 2e3)
            }
            ;
            var xi, _i = it("FullYear", !0);
            xi = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t)
                        return e;
                return -1
            }
            ,
            B("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }),
            B("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }),
            B("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }),
            F("month", "M"),
            W("month", 8),
            G("M", Kr),
            G("MM", Kr, Gr),
            G("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }),
            G("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }),
            K(["M", "MM"], function(t, e) {
                e[fi] = _(t) - 1
            }),
            K(["MMM", "MMMM"], function(t, e, n, r) {
                var i = n._locale.monthsParse(t, r, n._strict);
                null != i ? e[fi] = i : m(n).invalidMonth = t
            });
            var ki = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , Si = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , Ti = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , Ci = ui
              , Mi = ui;
            B("w", ["ww", 2], "wo", "week"),
            B("W", ["WW", 2], "Wo", "isoWeek"),
            F("week", "w"),
            F("isoWeek", "W"),
            W("week", 5),
            W("isoWeek", 5),
            G("w", Kr),
            G("ww", Kr, Gr),
            G("W", Kr),
            G("WW", Kr, Gr),
            Q(["w", "ww", "W", "WW"], function(t, e, n, r) {
                e[r.substr(0, 1)] = _(t)
            });
            var Di = {
                dow: 0,
                doy: 6
            };
            B("d", 0, "do", "day"),
            B("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }),
            B("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }),
            B("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }),
            B("e", 0, 0, "weekday"),
            B("E", 0, 0, "isoWeekday"),
            F("day", "d"),
            F("weekday", "e"),
            F("isoWeekday", "E"),
            W("day", 11),
            W("weekday", 11),
            W("isoWeekday", 11),
            G("d", Kr),
            G("e", Kr),
            G("E", Kr),
            G("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }),
            G("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }),
            G("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }),
            Q(["dd", "ddd", "dddd"], function(t, e, n, r) {
                var i = n._locale.weekdaysParse(t, r, n._strict);
                null != i ? e.d = i : m(n).invalidWeekday = t
            }),
            Q(["d", "e", "E"], function(t, e, n, r) {
                e[r] = _(t)
            });
            var Ni = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , Oi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , ji = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , Ei = ui
              , Ai = ui
              , Yi = ui;
            B("H", ["HH", 2], 0, "hour"),
            B("h", ["hh", 2], 0, $t),
            B("k", ["kk", 2], 0, Vt),
            B("hmm", 0, 0, function() {
                return "" + $t.apply(this) + I(this.minutes(), 2)
            }),
            B("hmmss", 0, 0, function() {
                return "" + $t.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
            }),
            B("Hmm", 0, 0, function() {
                return "" + this.hours() + I(this.minutes(), 2)
            }),
            B("Hmmss", 0, 0, function() {
                return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
            }),
            Gt("a", !0),
            Gt("A", !1),
            F("hour", "h"),
            W("hour", 13),
            G("a", Xt),
            G("A", Xt),
            G("H", Kr),
            G("h", Kr),
            G("k", Kr),
            G("HH", Kr, Gr),
            G("hh", Kr, Gr),
            G("kk", Kr, Gr),
            G("hmm", Qr),
            G("hmmss", ti),
            G("Hmm", Qr),
            G("Hmmss", ti),
            K(["H", "HH"], mi),
            K(["k", "kk"], function(t, e, n) {
                var r = _(t);
                e[mi] = 24 === r ? 0 : r
            }),
            K(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t),
                n._meridiem = t
            }),
            K(["h", "hh"], function(t, e, n) {
                e[mi] = _(t),
                m(n).bigHour = !0
            }),
            K("hmm", function(t, e, n) {
                var r = t.length - 2;
                e[mi] = _(t.substr(0, r)),
                e[gi] = _(t.substr(r)),
                m(n).bigHour = !0
            }),
            K("hmmss", function(t, e, n) {
                var r = t.length - 4
                  , i = t.length - 2;
                e[mi] = _(t.substr(0, r)),
                e[gi] = _(t.substr(r, 2)),
                e[yi] = _(t.substr(i)),
                m(n).bigHour = !0
            }),
            K("Hmm", function(t, e, n) {
                var r = t.length - 2;
                e[mi] = _(t.substr(0, r)),
                e[gi] = _(t.substr(r))
            }),
            K("Hmmss", function(t, e, n) {
                var r = t.length - 4
                  , i = t.length - 2;
                e[mi] = _(t.substr(0, r)),
                e[gi] = _(t.substr(r, 2)),
                e[yi] = _(t.substr(i))
            });
            var Pi, Li = /[ap]\.?m?\.?/i, Fi = it("Hours", !0), Hi = {
                calendar: Pr,
                longDateFormat: Lr,
                invalidDate: Fr,
                ordinal: Hr,
                dayOfMonthOrdinalParse: Rr,
                relativeTime: Wr,
                months: Si,
                monthsShort: Ti,
                week: Di,
                weekdays: Ni,
                weekdaysMin: ji,
                weekdaysShort: Oi,
                meridiemParse: Li
            }, Ri = {}, Wi = {}, qi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ii = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Bi = /Z|[+-]\d\d(?::?\d\d)?/, Ui = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], zi = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], $i = /^\/?Date\((\-?\d+)/i, Vi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Gi = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            n.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }),
            n.ISO_8601 = function() {}
            ,
            n.RFC_2822 = function() {}
            ;
            var Xi = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = Me.apply(null, arguments);
                return this.isValid() && t.isValid() ? this > t ? this : t : y()
            })
              , Zi = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = Me.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : y()
            })
              , Ji = function() {
                return Date.now ? Date.now() : +new Date
            }
              , Ki = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            Fe("Z", ":"),
            Fe("ZZ", ""),
            G("Z", ai),
            G("ZZ", ai),
            K(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0,
                n._tzm = He(ai, t)
            });
            var Qi = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {}
            ;
            var ts = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
              , es = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            Ke.fn = Ye.prototype,
            Ke.invalid = Ae;
            var ns = nn(1, "add")
              , rs = nn(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var is = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            B(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }),
            B(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }),
            Hn("gggg", "weekYear"),
            Hn("ggggg", "weekYear"),
            Hn("GGGG", "isoWeekYear"),
            Hn("GGGGG", "isoWeekYear"),
            F("weekYear", "gg"),
            F("isoWeekYear", "GG"),
            W("weekYear", 1),
            W("isoWeekYear", 1),
            G("G", si),
            G("g", si),
            G("GG", Kr, Gr),
            G("gg", Kr, Gr),
            G("GGGG", ni, Zr),
            G("gggg", ni, Zr),
            G("GGGGG", ri, Jr),
            G("ggggg", ri, Jr),
            Q(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, r) {
                e[r.substr(0, 2)] = _(t)
            }),
            Q(["gg", "GG"], function(t, e, r, i) {
                e[i] = n.parseTwoDigitYear(t)
            }),
            B("Q", 0, "Qo", "quarter"),
            F("quarter", "Q"),
            W("quarter", 7),
            G("Q", Vr),
            K("Q", function(t, e) {
                e[fi] = 3 * (_(t) - 1)
            }),
            B("D", ["DD", 2], "Do", "date"),
            F("date", "D"),
            W("date", 9),
            G("D", Kr),
            G("DD", Kr, Gr),
            G("Do", function(t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }),
            K(["D", "DD"], pi),
            K("Do", function(t, e) {
                e[pi] = _(t.match(Kr)[0])
            });
            var ss = it("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            F("dayOfYear", "DDD"),
            W("dayOfYear", 4),
            G("DDD", ei),
            G("DDDD", Xr),
            K(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = _(t)
            }),
            B("m", ["mm", 2], 0, "minute"),
            F("minute", "m"),
            W("minute", 14),
            G("m", Kr),
            G("mm", Kr, Gr),
            K(["m", "mm"], gi);
            var os = it("Minutes", !1);
            B("s", ["ss", 2], 0, "second"),
            F("second", "s"),
            W("second", 15),
            G("s", Kr),
            G("ss", Kr, Gr),
            K(["s", "ss"], yi);
            var as = it("Seconds", !1);
            B("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }),
            B(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }),
            B(0, ["SSS", 3], 0, "millisecond"),
            B(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }),
            B(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }),
            B(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }),
            B(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }),
            B(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }),
            B(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }),
            F("millisecond", "ms"),
            W("millisecond", 16),
            G("S", ei, Vr),
            G("SS", ei, Gr),
            G("SSS", ei, Xr);
            var ls;
            for (ls = "SSSS"; ls.length <= 9; ls += "S")
                G(ls, ii);
            for (ls = "S"; ls.length <= 9; ls += "S")
                K(ls, Vn);
            var us = it("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"),
            B("zz", 0, 0, "zoneName");
            var cs = w.prototype;
            cs.add = ns,
            cs.calendar = on,
            cs.clone = an,
            cs.diff = pn,
            cs.endOf = Mn,
            cs.format = wn,
            cs.from = bn,
            cs.fromNow = xn,
            cs.to = _n,
            cs.toNow = kn,
            cs.get = at,
            cs.invalidAt = Ln,
            cs.isAfter = ln,
            cs.isBefore = un,
            cs.isBetween = cn,
            cs.isSame = hn,
            cs.isSameOrAfter = dn,
            cs.isSameOrBefore = fn,
            cs.isValid = Yn,
            cs.lang = is,
            cs.locale = Sn,
            cs.localeData = Tn,
            cs.max = Zi,
            cs.min = Xi,
            cs.parsingFlags = Pn,
            cs.set = lt,
            cs.startOf = Cn,
            cs.subtract = rs,
            cs.toArray = jn,
            cs.toObject = En,
            cs.toDate = On,
            cs.toISOString = yn,
            cs.inspect = vn,
            cs.toJSON = An,
            cs.toString = gn,
            cs.unix = Nn,
            cs.valueOf = Dn,
            cs.creationData = Fn,
            cs.year = _i,
            cs.isLeapYear = rt,
            cs.weekYear = Rn,
            cs.isoWeekYear = Wn,
            cs.quarter = cs.quarters = zn,
            cs.month = gt,
            cs.daysInMonth = yt,
            cs.week = cs.weeks = Ot,
            cs.isoWeek = cs.isoWeeks = jt,
            cs.weeksInYear = In,
            cs.isoWeeksInYear = qn,
            cs.date = ss,
            cs.day = cs.days = Rt,
            cs.weekday = Wt,
            cs.isoWeekday = qt,
            cs.dayOfYear = $n,
            cs.hour = cs.hours = Fi,
            cs.minute = cs.minutes = os,
            cs.second = cs.seconds = as,
            cs.millisecond = cs.milliseconds = us,
            cs.utcOffset = qe,
            cs.utc = Be,
            cs.local = Ue,
            cs.parseZone = ze,
            cs.hasAlignedHourOffset = $e,
            cs.isDST = Ve,
            cs.isLocal = Xe,
            cs.isUtcOffset = Ze,
            cs.isUtc = Je,
            cs.isUTC = Je,
            cs.zoneAbbr = Gn,
            cs.zoneName = Xn,
            cs.dates = T("dates accessor is deprecated. Use date instead.", ss),
            cs.months = T("months accessor is deprecated. Use month instead", gt),
            cs.years = T("years accessor is deprecated. Use year instead", _i),
            cs.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ie),
            cs.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ge);
            var hs = O.prototype;
            hs.calendar = j,
            hs.longDateFormat = E,
            hs.invalidDate = A,
            hs.ordinal = Y,
            hs.preparse = Kn,
            hs.postformat = Kn,
            hs.relativeTime = P,
            hs.pastFuture = L,
            hs.set = D,
            hs.months = ht,
            hs.monthsShort = dt,
            hs.monthsParse = pt,
            hs.monthsRegex = wt,
            hs.monthsShortRegex = vt,
            hs.week = Mt,
            hs.firstDayOfYear = Nt,
            hs.firstDayOfWeek = Dt,
            hs.weekdays = Yt,
            hs.weekdaysMin = Lt,
            hs.weekdaysShort = Pt,
            hs.weekdaysParse = Ht,
            hs.weekdaysRegex = It,
            hs.weekdaysShortRegex = Bt,
            hs.weekdaysMinRegex = Ut,
            hs.isPM = Zt,
            hs.meridiem = Jt,
            ee("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10
                      , n = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }),
            n.lang = T("moment.lang is deprecated. Use moment.locale instead.", ee),
            n.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ie);
            var ds = Math.abs
              , fs = yr("ms")
              , ps = yr("s")
              , ms = yr("m")
              , gs = yr("h")
              , ys = yr("d")
              , vs = yr("w")
              , ws = yr("M")
              , bs = yr("y")
              , xs = br("milliseconds")
              , _s = br("seconds")
              , ks = br("minutes")
              , Ss = br("hours")
              , Ts = br("days")
              , Cs = br("months")
              , Ms = br("years")
              , Ds = Math.round
              , Ns = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }
              , Os = Math.abs
              , js = Ye.prototype;
            return js.isValid = Ee,
            js.abs = ar,
            js.add = ur,
            js.subtract = cr,
            js.as = mr,
            js.asMilliseconds = fs,
            js.asSeconds = ps,
            js.asMinutes = ms,
            js.asHours = gs,
            js.asDays = ys,
            js.asWeeks = vs,
            js.asMonths = ws,
            js.asYears = bs,
            js.valueOf = gr,
            js._bubble = dr,
            js.clone = vr,
            js.get = wr,
            js.milliseconds = xs,
            js.seconds = _s,
            js.minutes = ks,
            js.hours = Ss,
            js.days = Ts,
            js.weeks = xr,
            js.months = Cs,
            js.years = Ms,
            js.humanize = Cr,
            js.toISOString = Dr,
            js.toString = Dr,
            js.toJSON = Dr,
            js.locale = Sn,
            js.localeData = Tn,
            js.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Dr),
            js.lang = is,
            B("X", 0, 0, "unix"),
            B("x", 0, 0, "valueOf"),
            G("x", si),
            G("X", li),
            K("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }),
            K("x", function(t, e, n) {
                n._d = new Date(_(t))
            }),
            n.version = "2.22.2",
            r(Me),
            n.fn = cs,
            n.min = Ne,
            n.max = Oe,
            n.now = Ji,
            n.utc = f,
            n.unix = Zn,
            n.months = nr,
            n.isDate = u,
            n.locale = ee,
            n.invalid = y,
            n.duration = Ke,
            n.isMoment = b,
            n.weekdays = ir,
            n.parseZone = Jn,
            n.localeData = ie,
            n.isDuration = Pe,
            n.monthsShort = rr,
            n.weekdaysMin = or,
            n.defineLocale = ne,
            n.updateLocale = re,
            n.locales = se,
            n.weekdaysShort = sr,
            n.normalizeUnits = H,
            n.relativeTimeRounding = Sr,
            n.relativeTimeThreshold = Tr,
            n.calendarFormat = sn,
            n.prototype = cs,
            n.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            },
            n
        })
    }
    , {}],
    3: [function(t, e, n) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function i() {
            throw new Error("clearTimeout has not been defined")
        }
        function s(t) {
            if (h === setTimeout)
                return setTimeout(t, 0);
            if ((h === r || !h) && setTimeout)
                return h = setTimeout,
                setTimeout(t, 0);
            try {
                return h(t, 0)
            } catch (e) {
                try {
                    return h.call(null, t, 0)
                } catch (e) {
                    return h.call(this, t, 0)
                }
            }
        }
        function o(t) {
            if (d === clearTimeout)
                return clearTimeout(t);
            if ((d === i || !d) && clearTimeout)
                return d = clearTimeout,
                clearTimeout(t);
            try {
                return d(t)
            } catch (e) {
                try {
                    return d.call(null, t)
                } catch (e) {
                    return d.call(this, t)
                }
            }
        }
        function a() {
            g && p && (g = !1,
            p.length ? m = p.concat(m) : y = -1,
            m.length && l())
        }
        function l() {
            if (!g) {
                var t = s(a);
                g = !0;
                for (var e = m.length; e; ) {
                    for (p = m,
                    m = []; ++y < e; )
                        p && p[y].run();
                    y = -1,
                    e = m.length
                }
                p = null,
                g = !1,
                o(t)
            }
        }
        function u(t, e) {
            this.fun = t,
            this.array = e
        }
        function c() {}
        var h, d, f = e.exports = {};
        !function() {
            try {
                h = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                h = r
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (t) {
                d = i
            }
        }();
        var p, m = [], g = !1, y = -1;
        f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            m.push(new u(t,e)),
            1 !== m.length || g || s(l)
        }
        ,
        u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        f.title = "browser",
        f.browser = !0,
        f.env = {},
        f.argv = [],
        f.version = "",
        f.versions = {},
        f.on = c,
        f.addListener = c,
        f.once = c,
        f.off = c,
        f.removeListener = c,
        f.removeAllListeners = c,
        f.emit = c,
        f.prependListener = c,
        f.prependOnceListener = c,
        f.listeners = function(t) {
            return []
        }
        ,
        f.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        f.cwd = function() {
            return "/"
        }
        ,
        f.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        f.umask = function() {
            return 0
        }
    }
    , {}],
    4: [function(t, e, n) {
        (function(t) {
            !function(r) {
                function i(t) {
                    throw new RangeError(A[t])
                }
                function s(t, e) {
                    for (var n = t.length, r = []; n--; )
                        r[n] = e(t[n]);
                    return r
                }
                function o(t, e) {
                    var n = t.split("@")
                      , r = "";
                    n.length > 1 && (r = n[0] + "@",
                    t = n[1]),
                    t = t.replace(E, ".");
                    var i = t.split(".")
                      , o = s(i, e).join(".");
                    return r + o
                }
                function a(t) {
                    for (var e, n, r = [], i = 0, s = t.length; s > i; )
                        e = t.charCodeAt(i++),
                        e >= 55296 && 56319 >= e && s > i ? (n = t.charCodeAt(i++),
                        56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                        i--)) : r.push(e);
                    return r
                }
                function l(t) {
                    return s(t, function(t) {
                        var e = "";
                        return t > 65535 && (t -= 65536,
                        e += L(t >>> 10 & 1023 | 55296),
                        t = 56320 | 1023 & t),
                        e += L(t)
                    }).join("")
                }
                function u(t) {
                    return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : _
                }
                function c(t, e) {
                    return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                }
                function h(t, e, n) {
                    var r = 0;
                    for (t = n ? P(t / C) : t >> 1,
                    t += P(t / e); t > Y * S >> 1; r += _)
                        t = P(t / Y);
                    return P(r + (Y + 1) * t / (t + T))
                }
                function d(t) {
                    var e, n, r, s, o, a, c, d, f, p, m = [], g = t.length, y = 0, v = D, w = M;
                    for (n = t.lastIndexOf(N),
                    0 > n && (n = 0),
                    r = 0; n > r; ++r)
                        t.charCodeAt(r) >= 128 && i("not-basic"),
                        m.push(t.charCodeAt(r));
                    for (s = n > 0 ? n + 1 : 0; g > s; ) {
                        for (o = y,
                        a = 1,
                        c = _; s >= g && i("invalid-input"),
                        d = u(t.charCodeAt(s++)),
                        (d >= _ || d > P((x - y) / a)) && i("overflow"),
                        y += d * a,
                        f = w >= c ? k : c >= w + S ? S : c - w,
                        !(f > d); c += _)
                            p = _ - f,
                            a > P(x / p) && i("overflow"),
                            a *= p;
                        e = m.length + 1,
                        w = h(y - o, e, 0 == o),
                        P(y / e) > x - v && i("overflow"),
                        v += P(y / e),
                        y %= e,
                        m.splice(y++, 0, v)
                    }
                    return l(m)
                }
                function f(t) {
                    var e, n, r, s, o, l, u, d, f, p, m, g, y, v, w, b = [];
                    for (t = a(t),
                    g = t.length,
                    e = D,
                    n = 0,
                    o = M,
                    l = 0; g > l; ++l)
                        m = t[l],
                        128 > m && b.push(L(m));
                    for (r = s = b.length,
                    s && b.push(N); g > r; ) {
                        for (u = x,
                        l = 0; g > l; ++l)
                            m = t[l],
                            m >= e && u > m && (u = m);
                        for (y = r + 1,
                        u - e > P((x - n) / y) && i("overflow"),
                        n += (u - e) * y,
                        e = u,
                        l = 0; g > l; ++l)
                            if (m = t[l],
                            e > m && ++n > x && i("overflow"),
                            m == e) {
                                for (d = n,
                                f = _; p = o >= f ? k : f >= o + S ? S : f - o,
                                !(p > d); f += _)
                                    w = d - p,
                                    v = _ - p,
                                    b.push(L(c(p + w % v, 0))),
                                    d = P(w / v);
                                b.push(L(c(d, 0))),
                                o = h(n, y, r == s),
                                n = 0,
                                ++r
                            }
                        ++n,
                        ++e
                    }
                    return b.join("")
                }
                function p(t) {
                    return o(t, function(t) {
                        return O.test(t) ? d(t.slice(4).toLowerCase()) : t
                    })
                }
                function m(t) {
                    return o(t, function(t) {
                        return j.test(t) ? "xn--" + f(t) : t
                    })
                }
                var g = "object" == typeof n && n && !n.nodeType && n
                  , y = "object" == typeof e && e && !e.nodeType && e
                  , v = "object" == typeof t && t;
                (v.global === v || v.window === v || v.self === v) && (r = v);
                var w, b, x = 2147483647, _ = 36, k = 1, S = 26, T = 38, C = 700, M = 72, D = 128, N = "-", O = /^xn--/, j = /[^\x20-\x7E]/, E = /[\x2E\u3002\uFF0E\uFF61]/g, A = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, Y = _ - k, P = Math.floor, L = String.fromCharCode;
                if (w = {
                    version: "1.4.1",
                    ucs2: {
                        decode: a,
                        encode: l
                    },
                    decode: d,
                    encode: f,
                    toASCII: m,
                    toUnicode: p
                },
                "function" == typeof define && "object" == typeof define.amd && define.amd)
                    define("punycode", function() {
                        return w
                    });
                else if (g && y)
                    if (e.exports == g)
                        y.exports = w;
                    else
                        for (b in w)
                            w.hasOwnProperty(b) && (g[b] = w[b]);
                else
                    r.punycode = w
            }(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    5: [function(t, e, n) {
        "use strict";
        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.exports = function(t, e, n, s) {
            e = e || "&",
            n = n || "=";
            var o = {};
            if ("string" != typeof t || 0 === t.length)
                return o;
            var a = /\+/g;
            t = t.split(e);
            var l = 1e3;
            s && "number" == typeof s.maxKeys && (l = s.maxKeys);
            var u = t.length;
            l > 0 && u > l && (u = l);
            for (var c = 0; u > c; ++c) {
                var h, d, f, p, m = t[c].replace(a, "%20"), g = m.indexOf(n);
                g >= 0 ? (h = m.substr(0, g),
                d = m.substr(g + 1)) : (h = m,
                d = ""),
                f = decodeURIComponent(h),
                p = decodeURIComponent(d),
                r(o, f) ? i(o[f]) ? o[f].push(p) : o[f] = [o[f], p] : o[f] = p
            }
            return o
        }
        ;
        var i = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }
    , {}],
    6: [function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (t.map)
                return t.map(e);
            for (var n = [], r = 0; r < t.length; r++)
                n.push(e(t[r], r));
            return n
        }
        var i = function(t) {
            switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
            }
        };
        e.exports = function(t, e, n, a) {
            return e = e || "&",
            n = n || "=",
            null === t && (t = void 0),
            "object" == typeof t ? r(o(t), function(o) {
                var a = encodeURIComponent(i(o)) + n;
                return s(t[o]) ? r(t[o], function(t) {
                    return a + encodeURIComponent(i(t))
                }).join(e) : a + encodeURIComponent(i(t[o]))
            }).join(e) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(t)) : ""
        }
        ;
        var s = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
          , o = Object.keys || function(t) {
            var e = [];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e
        }
    }
    , {}],
    7: [function(t, e, n) {
        "use strict";
        n.decode = n.parse = t("./decode"),
        n.encode = n.stringify = t("./encode")
    }
    , {
        "./decode": 5,
        "./encode": 6
    }],
    8: [function(t, e, n) {
        (function(t) {
            !function() {
                var r = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {}
                  , i = r._
                  , s = Array.prototype
                  , o = Object.prototype
                  , a = "undefined" != typeof Symbol ? Symbol.prototype : null
                  , l = s.push
                  , u = s.slice
                  , c = o.toString
                  , h = o.hasOwnProperty
                  , d = Array.isArray
                  , f = Object.keys
                  , p = Object.create
                  , m = function() {}
                  , g = function(t) {
                    return t instanceof g ? t : this instanceof g ? void (this._wrapped = t) : new g(t)
                };
                "undefined" == typeof n || n.nodeType ? r._ = g : ("undefined" != typeof e && !e.nodeType && e.exports && (n = e.exports = g),
                n._ = g),
                g.VERSION = "1.9.1";
                var y, v = function(t, e, n) {
                    if (void 0 === e)
                        return t;
                    switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        }
                        ;
                    case 3:
                        return function(n, r, i) {
                            return t.call(e, n, r, i)
                        }
                        ;
                    case 4:
                        return function(n, r, i, s) {
                            return t.call(e, n, r, i, s)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }, w = function(t, e, n) {
                    return g.iteratee !== y ? g.iteratee(t, e) : null == t ? g.identity : g.isFunction(t) ? v(t, e, n) : g.isObject(t) && !g.isArray(t) ? g.matcher(t) : g.property(t)
                };
                g.iteratee = y = function(t, e) {
                    return w(t, e, 1 / 0)
                }
                ;
                var b = function(t, e) {
                    return e = null == e ? t.length - 1 : +e,
                    function() {
                        for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; n > i; i++)
                            r[i] = arguments[i + e];
                        switch (e) {
                        case 0:
                            return t.call(this, r);
                        case 1:
                            return t.call(this, arguments[0], r);
                        case 2:
                            return t.call(this, arguments[0], arguments[1], r)
                        }
                        var s = Array(e + 1);
                        for (i = 0; e > i; i++)
                            s[i] = arguments[i];
                        return s[e] = r,
                        t.apply(this, s)
                    }
                }
                  , x = function(t) {
                    if (!g.isObject(t))
                        return {};
                    if (p)
                        return p(t);
                    m.prototype = t;
                    var e = new m;
                    return m.prototype = null,
                    e
                }
                  , _ = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
                  , k = function(t, e) {
                    return null != t && h.call(t, e)
                }
                  , S = function(t, e) {
                    for (var n = e.length, r = 0; n > r; r++) {
                        if (null == t)
                            return void 0;
                        t = t[e[r]]
                    }
                    return n ? t : void 0
                }
                  , T = Math.pow(2, 53) - 1
                  , C = _("length")
                  , M = function(t) {
                    var e = C(t);
                    return "number" == typeof e && e >= 0 && T >= e
                };
                g.each = g.forEach = function(t, e, n) {
                    e = v(e, n);
                    var r, i;
                    if (M(t))
                        for (r = 0,
                        i = t.length; i > r; r++)
                            e(t[r], r, t);
                    else {
                        var s = g.keys(t);
                        for (r = 0,
                        i = s.length; i > r; r++)
                            e(t[s[r]], s[r], t)
                    }
                    return t
                }
                ,
                g.map = g.collect = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !M(t) && g.keys(t), i = (r || t).length, s = Array(i), o = 0; i > o; o++) {
                        var a = r ? r[o] : o;
                        s[o] = e(t[a], a, t)
                    }
                    return s
                }
                ;
                var D = function(t) {
                    var e = function(e, n, r, i) {
                        var s = !M(e) && g.keys(e)
                          , o = (s || e).length
                          , a = t > 0 ? 0 : o - 1;
                        for (i || (r = e[s ? s[a] : a],
                        a += t); a >= 0 && o > a; a += t) {
                            var l = s ? s[a] : a;
                            r = n(r, e[l], l, e)
                        }
                        return r
                    };
                    return function(t, n, r, i) {
                        var s = arguments.length >= 3;
                        return e(t, v(n, i, 4), r, s)
                    }
                };
                g.reduce = g.foldl = g.inject = D(1),
                g.reduceRight = g.foldr = D(-1),
                g.find = g.detect = function(t, e, n) {
                    var r = M(t) ? g.findIndex : g.findKey
                      , i = r(t, e, n);
                    return void 0 !== i && -1 !== i ? t[i] : void 0
                }
                ,
                g.filter = g.select = function(t, e, n) {
                    var r = [];
                    return e = w(e, n),
                    g.each(t, function(t, n, i) {
                        e(t, n, i) && r.push(t)
                    }),
                    r
                }
                ,
                g.reject = function(t, e, n) {
                    return g.filter(t, g.negate(w(e)), n)
                }
                ,
                g.every = g.all = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !M(t) && g.keys(t), i = (r || t).length, s = 0; i > s; s++) {
                        var o = r ? r[s] : s;
                        if (!e(t[o], o, t))
                            return !1
                    }
                    return !0
                }
                ,
                g.some = g.any = function(t, e, n) {
                    e = w(e, n);
                    for (var r = !M(t) && g.keys(t), i = (r || t).length, s = 0; i > s; s++) {
                        var o = r ? r[s] : s;
                        if (e(t[o], o, t))
                            return !0
                    }
                    return !1
                }
                ,
                g.contains = g.includes = g.include = function(t, e, n, r) {
                    return M(t) || (t = g.values(t)),
                    ("number" != typeof n || r) && (n = 0),
                    g.indexOf(t, e, n) >= 0
                }
                ,
                g.invoke = b(function(t, e, n) {
                    var r, i;
                    return g.isFunction(e) ? i = e : g.isArray(e) && (r = e.slice(0, -1),
                    e = e[e.length - 1]),
                    g.map(t, function(t) {
                        var s = i;
                        if (!s) {
                            if (r && r.length && (t = S(t, r)),
                            null == t)
                                return void 0;
                            s = t[e]
                        }
                        return null == s ? s : s.apply(t, n)
                    })
                }),
                g.pluck = function(t, e) {
                    return g.map(t, g.property(e))
                }
                ,
                g.where = function(t, e) {
                    return g.filter(t, g.matcher(e))
                }
                ,
                g.findWhere = function(t, e) {
                    return g.find(t, g.matcher(e))
                }
                ,
                g.max = function(t, e, n) {
                    var r, i, s = -(1 / 0), o = -(1 / 0);
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = M(t) ? t : g.values(t);
                        for (var a = 0, l = t.length; l > a; a++)
                            r = t[a],
                            null != r && r > s && (s = r)
                    } else
                        e = w(e, n),
                        g.each(t, function(t, n, r) {
                            i = e(t, n, r),
                            (i > o || i === -(1 / 0) && s === -(1 / 0)) && (s = t,
                            o = i)
                        });
                    return s
                }
                ,
                g.min = function(t, e, n) {
                    var r, i, s = 1 / 0, o = 1 / 0;
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = M(t) ? t : g.values(t);
                        for (var a = 0, l = t.length; l > a; a++)
                            r = t[a],
                            null != r && s > r && (s = r)
                    } else
                        e = w(e, n),
                        g.each(t, function(t, n, r) {
                            i = e(t, n, r),
                            (o > i || i === 1 / 0 && s === 1 / 0) && (s = t,
                            o = i)
                        });
                    return s
                }
                ,
                g.shuffle = function(t) {
                    return g.sample(t, 1 / 0)
                }
                ,
                g.sample = function(t, e, n) {
                    if (null == e || n)
                        return M(t) || (t = g.values(t)),
                        t[g.random(t.length - 1)];
                    var r = M(t) ? g.clone(t) : g.values(t)
                      , i = C(r);
                    e = Math.max(Math.min(e, i), 0);
                    for (var s = i - 1, o = 0; e > o; o++) {
                        var a = g.random(o, s)
                          , l = r[o];
                        r[o] = r[a],
                        r[a] = l
                    }
                    return r.slice(0, e)
                }
                ,
                g.sortBy = function(t, e, n) {
                    var r = 0;
                    return e = w(e, n),
                    g.pluck(g.map(t, function(t, n, i) {
                        return {
                            value: t,
                            index: r++,
                            criteria: e(t, n, i)
                        }
                    }).sort(function(t, e) {
                        var n = t.criteria
                          , r = e.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n)
                                return 1;
                            if (r > n || void 0 === r)
                                return -1
                        }
                        return t.index - e.index
                    }), "value")
                }
                ;
                var N = function(t, e) {
                    return function(n, r, i) {
                        var s = e ? [[], []] : {};
                        return r = w(r, i),
                        g.each(n, function(e, i) {
                            var o = r(e, i, n);
                            t(s, e, o)
                        }),
                        s
                    }
                };
                g.groupBy = N(function(t, e, n) {
                    k(t, n) ? t[n].push(e) : t[n] = [e]
                }),
                g.indexBy = N(function(t, e, n) {
                    t[n] = e
                }),
                g.countBy = N(function(t, e, n) {
                    k(t, n) ? t[n]++ : t[n] = 1
                });
                var O = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                g.toArray = function(t) {
                    return t ? g.isArray(t) ? u.call(t) : g.isString(t) ? t.match(O) : M(t) ? g.map(t, g.identity) : g.values(t) : []
                }
                ,
                g.size = function(t) {
                    return null == t ? 0 : M(t) ? t.length : g.keys(t).length
                }
                ,
                g.partition = N(function(t, e, n) {
                    t[n ? 0 : 1].push(e)
                }, !0),
                g.first = g.head = g.take = function(t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : g.initial(t, t.length - e)
                }
                ,
                g.initial = function(t, e, n) {
                    return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
                }
                ,
                g.last = function(t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : g.rest(t, Math.max(0, t.length - e))
                }
                ,
                g.rest = g.tail = g.drop = function(t, e, n) {
                    return u.call(t, null == e || n ? 1 : e)
                }
                ,
                g.compact = function(t) {
                    return g.filter(t, Boolean)
                }
                ;
                var j = function(t, e, n, r) {
                    r = r || [];
                    for (var i = r.length, s = 0, o = C(t); o > s; s++) {
                        var a = t[s];
                        if (M(a) && (g.isArray(a) || g.isArguments(a)))
                            if (e)
                                for (var l = 0, u = a.length; u > l; )
                                    r[i++] = a[l++];
                            else
                                j(a, e, n, r),
                                i = r.length;
                        else
                            n || (r[i++] = a)
                    }
                    return r
                };
                g.flatten = function(t, e) {
                    return j(t, e, !1)
                }
                ,
                g.without = b(function(t, e) {
                    return g.difference(t, e)
                }),
                g.uniq = g.unique = function(t, e, n, r) {
                    g.isBoolean(e) || (r = n,
                    n = e,
                    e = !1),
                    null != n && (n = w(n, r));
                    for (var i = [], s = [], o = 0, a = C(t); a > o; o++) {
                        var l = t[o]
                          , u = n ? n(l, o, t) : l;
                        e && !n ? (o && s === u || i.push(l),
                        s = u) : n ? g.contains(s, u) || (s.push(u),
                        i.push(l)) : g.contains(i, l) || i.push(l)
                    }
                    return i
                }
                ,
                g.union = b(function(t) {
                    return g.uniq(j(t, !0, !0))
                }),
                g.intersection = function(t) {
                    for (var e = [], n = arguments.length, r = 0, i = C(t); i > r; r++) {
                        var s = t[r];
                        if (!g.contains(e, s)) {
                            var o;
                            for (o = 1; n > o && g.contains(arguments[o], s); o++)
                                ;
                            o === n && e.push(s)
                        }
                    }
                    return e
                }
                ,
                g.difference = b(function(t, e) {
                    return e = j(e, !0, !0),
                    g.filter(t, function(t) {
                        return !g.contains(e, t)
                    })
                }),
                g.unzip = function(t) {
                    for (var e = t && g.max(t, C).length || 0, n = Array(e), r = 0; e > r; r++)
                        n[r] = g.pluck(t, r);
                    return n
                }
                ,
                g.zip = b(g.unzip),
                g.object = function(t, e) {
                    for (var n = {}, r = 0, i = C(t); i > r; r++)
                        e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n
                }
                ;
                var E = function(t) {
                    return function(e, n, r) {
                        n = w(n, r);
                        for (var i = C(e), s = t > 0 ? 0 : i - 1; s >= 0 && i > s; s += t)
                            if (n(e[s], s, e))
                                return s;
                        return -1
                    }
                };
                g.findIndex = E(1),
                g.findLastIndex = E(-1),
                g.sortedIndex = function(t, e, n, r) {
                    n = w(n, r, 1);
                    for (var i = n(e), s = 0, o = C(t); o > s; ) {
                        var a = Math.floor((s + o) / 2);
                        n(t[a]) < i ? s = a + 1 : o = a
                    }
                    return s
                }
                ;
                var A = function(t, e, n) {
                    return function(r, i, s) {
                        var o = 0
                          , a = C(r);
                        if ("number" == typeof s)
                            t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                        else if (n && s && a)
                            return s = n(r, i),
                            r[s] === i ? s : -1;
                        if (i !== i)
                            return s = e(u.call(r, o, a), g.isNaN),
                            s >= 0 ? s + o : -1;
                        for (s = t > 0 ? o : a - 1; s >= 0 && a > s; s += t)
                            if (r[s] === i)
                                return s;
                        return -1
                    }
                };
                g.indexOf = A(1, g.findIndex, g.sortedIndex),
                g.lastIndexOf = A(-1, g.findLastIndex),
                g.range = function(t, e, n) {
                    null == e && (e = t || 0,
                    t = 0),
                    n || (n = t > e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; r > s; s++,
                    t += n)
                        i[s] = t;
                    return i
                }
                ,
                g.chunk = function(t, e) {
                    if (null == e || 1 > e)
                        return [];
                    for (var n = [], r = 0, i = t.length; i > r; )
                        n.push(u.call(t, r, r += e));
                    return n
                }
                ;
                var Y = function(t, e, n, r, i) {
                    if (!(r instanceof e))
                        return t.apply(n, i);
                    var s = x(t.prototype)
                      , o = t.apply(s, i);
                    return g.isObject(o) ? o : s
                };
                g.bind = b(function(t, e, n) {
                    if (!g.isFunction(t))
                        throw new TypeError("Bind must be called on a function");
                    var r = b(function(i) {
                        return Y(t, r, e, this, n.concat(i))
                    });
                    return r
                }),
                g.partial = b(function(t, e) {
                    var n = g.partial.placeholder
                      , r = function() {
                        for (var i = 0, s = e.length, o = Array(s), a = 0; s > a; a++)
                            o[a] = e[a] === n ? arguments[i++] : e[a];
                        for (; i < arguments.length; )
                            o.push(arguments[i++]);
                        return Y(t, r, this, this, o)
                    };
                    return r
                }),
                g.partial.placeholder = g,
                g.bindAll = b(function(t, e) {
                    e = j(e, !1, !1);
                    var n = e.length;
                    if (1 > n)
                        throw new Error("bindAll must be passed function names");
                    for (; n--; ) {
                        var r = e[n];
                        t[r] = g.bind(t[r], t)
                    }
                }),
                g.memoize = function(t, e) {
                    var n = function(r) {
                        var i = n.cache
                          , s = "" + (e ? e.apply(this, arguments) : r);
                        return k(i, s) || (i[s] = t.apply(this, arguments)),
                        i[s]
                    };
                    return n.cache = {},
                    n
                }
                ,
                g.delay = b(function(t, e, n) {
                    return setTimeout(function() {
                        return t.apply(null, n)
                    }, e)
                }),
                g.defer = g.partial(g.delay, g, 1),
                g.throttle = function(t, e, n) {
                    var r, i, s, o, a = 0;
                    n || (n = {});
                    var l = function() {
                        a = n.leading === !1 ? 0 : g.now(),
                        r = null,
                        o = t.apply(i, s),
                        r || (i = s = null)
                    }
                      , u = function() {
                        var u = g.now();
                        a || n.leading !== !1 || (a = u);
                        var c = e - (u - a);
                        return i = this,
                        s = arguments,
                        0 >= c || c > e ? (r && (clearTimeout(r),
                        r = null),
                        a = u,
                        o = t.apply(i, s),
                        r || (i = s = null)) : r || n.trailing === !1 || (r = setTimeout(l, c)),
                        o
                    };
                    return u.cancel = function() {
                        clearTimeout(r),
                        a = 0,
                        r = i = s = null
                    }
                    ,
                    u
                }
                ,
                g.debounce = function(t, e, n) {
                    var r, i, s = function(e, n) {
                        r = null,
                        n && (i = t.apply(e, n))
                    }, o = b(function(o) {
                        if (r && clearTimeout(r),
                        n) {
                            var a = !r;
                            r = setTimeout(s, e),
                            a && (i = t.apply(this, o))
                        } else
                            r = g.delay(s, e, this, o);
                        return i
                    });
                    return o.cancel = function() {
                        clearTimeout(r),
                        r = null
                    }
                    ,
                    o
                }
                ,
                g.wrap = function(t, e) {
                    return g.partial(e, t)
                }
                ,
                g.negate = function(t) {
                    return function() {
                        return !t.apply(this, arguments)
                    }
                }
                ,
                g.compose = function() {
                    var t = arguments
                      , e = t.length - 1;
                    return function() {
                        for (var n = e, r = t[e].apply(this, arguments); n--; )
                            r = t[n].call(this, r);
                        return r
                    }
                }
                ,
                g.after = function(t, e) {
                    return function() {
                        return --t < 1 ? e.apply(this, arguments) : void 0
                    }
                }
                ,
                g.before = function(t, e) {
                    var n;
                    return function() {
                        return --t > 0 && (n = e.apply(this, arguments)),
                        1 >= t && (e = null),
                        n
                    }
                }
                ,
                g.once = g.partial(g.before, 2),
                g.restArguments = b;
                var P = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                  , L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
                  , F = function(t, e) {
                    var n = L.length
                      , r = t.constructor
                      , i = g.isFunction(r) && r.prototype || o
                      , s = "constructor";
                    for (k(t, s) && !g.contains(e, s) && e.push(s); n--; )
                        s = L[n],
                        s in t && t[s] !== i[s] && !g.contains(e, s) && e.push(s)
                };
                g.keys = function(t) {
                    if (!g.isObject(t))
                        return [];
                    if (f)
                        return f(t);
                    var e = [];
                    for (var n in t)
                        k(t, n) && e.push(n);
                    return P && F(t, e),
                    e
                }
                ,
                g.allKeys = function(t) {
                    if (!g.isObject(t))
                        return [];
                    var e = [];
                    for (var n in t)
                        e.push(n);
                    return P && F(t, e),
                    e
                }
                ,
                g.values = function(t) {
                    for (var e = g.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++)
                        r[i] = t[e[i]];
                    return r
                }
                ,
                g.mapObject = function(t, e, n) {
                    e = w(e, n);
                    for (var r = g.keys(t), i = r.length, s = {}, o = 0; i > o; o++) {
                        var a = r[o];
                        s[a] = e(t[a], a, t)
                    }
                    return s
                }
                ,
                g.pairs = function(t) {
                    for (var e = g.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++)
                        r[i] = [e[i], t[e[i]]];
                    return r
                }
                ,
                g.invert = function(t) {
                    for (var e = {}, n = g.keys(t), r = 0, i = n.length; i > r; r++)
                        e[t[n[r]]] = n[r];
                    return e
                }
                ,
                g.functions = g.methods = function(t) {
                    var e = [];
                    for (var n in t)
                        g.isFunction(t[n]) && e.push(n);
                    return e.sort()
                }
                ;
                var H = function(t, e) {
                    return function(n) {
                        var r = arguments.length;
                        if (e && (n = Object(n)),
                        2 > r || null == n)
                            return n;
                        for (var i = 1; r > i; i++)
                            for (var s = arguments[i], o = t(s), a = o.length, l = 0; a > l; l++) {
                                var u = o[l];
                                e && void 0 !== n[u] || (n[u] = s[u])
                            }
                        return n
                    }
                };
                g.extend = H(g.allKeys),
                g.extendOwn = g.assign = H(g.keys),
                g.findKey = function(t, e, n) {
                    e = w(e, n);
                    for (var r, i = g.keys(t), s = 0, o = i.length; o > s; s++)
                        if (r = i[s],
                        e(t[r], r, t))
                            return r
                }
                ;
                var R = function(t, e, n) {
                    return e in n
                };
                g.pick = b(function(t, e) {
                    var n = {}
                      , r = e[0];
                    if (null == t)
                        return n;
                    g.isFunction(r) ? (e.length > 1 && (r = v(r, e[1])),
                    e = g.allKeys(t)) : (r = R,
                    e = j(e, !1, !1),
                    t = Object(t));
                    for (var i = 0, s = e.length; s > i; i++) {
                        var o = e[i]
                          , a = t[o];
                        r(a, o, t) && (n[o] = a)
                    }
                    return n
                }),
                g.omit = b(function(t, e) {
                    var n, r = e[0];
                    return g.isFunction(r) ? (r = g.negate(r),
                    e.length > 1 && (n = e[1])) : (e = g.map(j(e, !1, !1), String),
                    r = function(t, n) {
                        return !g.contains(e, n)
                    }
                    ),
                    g.pick(t, r, n)
                }),
                g.defaults = H(g.allKeys, !0),
                g.create = function(t, e) {
                    var n = x(t);
                    return e && g.extendOwn(n, e),
                    n
                }
                ,
                g.clone = function(t) {
                    return g.isObject(t) ? g.isArray(t) ? t.slice() : g.extend({}, t) : t
                }
                ,
                g.tap = function(t, e) {
                    return e(t),
                    t
                }
                ,
                g.isMatch = function(t, e) {
                    var n = g.keys(e)
                      , r = n.length;
                    if (null == t)
                        return !r;
                    for (var i = Object(t), s = 0; r > s; s++) {
                        var o = n[s];
                        if (e[o] !== i[o] || !(o in i))
                            return !1
                    }
                    return !0
                }
                ;
                var W, q;
                W = function(t, e, n, r) {
                    if (t === e)
                        return 0 !== t || 1 / t === 1 / e;
                    if (null == t || null == e)
                        return !1;
                    if (t !== t)
                        return e !== e;
                    var i = typeof t;
                    return "function" !== i && "object" !== i && "object" != typeof e ? !1 : q(t, e, n, r)
                }
                ,
                q = function(t, e, n, r) {
                    t instanceof g && (t = t._wrapped),
                    e instanceof g && (e = e._wrapped);
                    var i = c.call(t);
                    if (i !== c.call(e))
                        return !1;
                    switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t === +e;
                    case "[object Symbol]":
                        return a.valueOf.call(t) === a.valueOf.call(e)
                    }
                    var s = "[object Array]" === i;
                    if (!s) {
                        if ("object" != typeof t || "object" != typeof e)
                            return !1;
                        var o = t.constructor
                          , l = e.constructor;
                        if (o !== l && !(g.isFunction(o) && o instanceof o && g.isFunction(l) && l instanceof l) && "constructor"in t && "constructor"in e)
                            return !1
                    }
                    n = n || [],
                    r = r || [];
                    for (var u = n.length; u--; )
                        if (n[u] === t)
                            return r[u] === e;
                    if (n.push(t),
                    r.push(e),
                    s) {
                        if (u = t.length,
                        u !== e.length)
                            return !1;
                        for (; u--; )
                            if (!W(t[u], e[u], n, r))
                                return !1
                    } else {
                        var h, d = g.keys(t);
                        if (u = d.length,
                        g.keys(e).length !== u)
                            return !1;
                        for (; u--; )
                            if (h = d[u],
                            !k(e, h) || !W(t[h], e[h], n, r))
                                return !1
                    }
                    return n.pop(),
                    r.pop(),
                    !0
                }
                ,
                g.isEqual = function(t, e) {
                    return W(t, e)
                }
                ,
                g.isEmpty = function(t) {
                    return null == t ? !0 : M(t) && (g.isArray(t) || g.isString(t) || g.isArguments(t)) ? 0 === t.length : 0 === g.keys(t).length
                }
                ,
                g.isElement = function(t) {
                    return !(!t || 1 !== t.nodeType)
                }
                ,
                g.isArray = d || function(t) {
                    return "[object Array]" === c.call(t)
                }
                ,
                g.isObject = function(t) {
                    var e = typeof t;
                    return "function" === e || "object" === e && !!t
                }
                ,
                g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(t) {
                    g["is" + t] = function(e) {
                        return c.call(e) === "[object " + t + "]"
                    }
                }),
                g.isArguments(arguments) || (g.isArguments = function(t) {
                    return k(t, "callee")
                }
                );
                var I = r.document && r.document.childNodes;
                "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof I && (g.isFunction = function(t) {
                    return "function" == typeof t || !1
                }
                ),
                g.isFinite = function(t) {
                    return !g.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
                }
                ,
                g.isNaN = function(t) {
                    return g.isNumber(t) && isNaN(t)
                }
                ,
                g.isBoolean = function(t) {
                    return t === !0 || t === !1 || "[object Boolean]" === c.call(t)
                }
                ,
                g.isNull = function(t) {
                    return null === t
                }
                ,
                g.isUndefined = function(t) {
                    return void 0 === t
                }
                ,
                g.has = function(t, e) {
                    if (!g.isArray(e))
                        return k(t, e);
                    for (var n = e.length, r = 0; n > r; r++) {
                        var i = e[r];
                        if (null == t || !h.call(t, i))
                            return !1;
                        t = t[i]
                    }
                    return !!n
                }
                ,
                g.noConflict = function() {
                    return r._ = i,
                    this
                }
                ,
                g.identity = function(t) {
                    return t
                }
                ,
                g.constant = function(t) {
                    return function() {
                        return t
                    }
                }
                ,
                g.noop = function() {}
                ,
                g.property = function(t) {
                    return g.isArray(t) ? function(e) {
                        return S(e, t)
                    }
                    : _(t)
                }
                ,
                g.propertyOf = function(t) {
                    return null == t ? function() {}
                    : function(e) {
                        return g.isArray(e) ? S(t, e) : t[e]
                    }
                }
                ,
                g.matcher = g.matches = function(t) {
                    return t = g.extendOwn({}, t),
                    function(e) {
                        return g.isMatch(e, t)
                    }
                }
                ,
                g.times = function(t, e, n) {
                    var r = Array(Math.max(0, t));
                    e = v(e, n, 1);
                    for (var i = 0; t > i; i++)
                        r[i] = e(i);
                    return r
                }
                ,
                g.random = function(t, e) {
                    return null == e && (e = t,
                    t = 0),
                    t + Math.floor(Math.random() * (e - t + 1))
                }
                ,
                g.now = Date.now || function() {
                    return (new Date).getTime()
                }
                ;
                var B = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }
                  , U = g.invert(B)
                  , z = function(t) {
                    var e = function(e) {
                        return t[e]
                    }
                      , n = "(?:" + g.keys(t).join("|") + ")"
                      , r = RegExp(n)
                      , i = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t,
                        r.test(t) ? t.replace(i, e) : t
                    }
                };
                g.escape = z(B),
                g.unescape = z(U),
                g.result = function(t, e, n) {
                    g.isArray(e) || (e = [e]);
                    var r = e.length;
                    if (!r)
                        return g.isFunction(n) ? n.call(t) : n;
                    for (var i = 0; r > i; i++) {
                        var s = null == t ? void 0 : t[e[i]];
                        void 0 === s && (s = n,
                        i = r),
                        t = g.isFunction(s) ? s.call(t) : s
                    }
                    return t
                }
                ;
                var $ = 0;
                g.uniqueId = function(t) {
                    var e = ++$ + "";
                    return t ? t + e : e
                }
                ,
                g.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var V = /(.)^/
                  , G = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , X = /\\|'|\r|\n|\u2028|\u2029/g
                  , Z = function(t) {
                    return "\\" + G[t]
                };
                g.template = function(t, e, n) {
                    !e && n && (e = n),
                    e = g.defaults({}, e, g.templateSettings);
                    var r = RegExp([(e.escape || V).source, (e.interpolate || V).source, (e.evaluate || V).source].join("|") + "|$", "g")
                      , i = 0
                      , s = "__p+='";
                    t.replace(r, function(e, n, r, o, a) {
                        return s += t.slice(i, a).replace(X, Z),
                        i = a + e.length,
                        n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"),
                        e
                    }),
                    s += "';\n",
                    e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                    s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    var o;
                    try {
                        o = new Function(e.variable || "obj","_",s)
                    } catch (a) {
                        throw a.source = s,
                        a
                    }
                    var l = function(t) {
                        return o.call(this, t, g)
                    }
                      , u = e.variable || "obj";
                    return l.source = "function(" + u + "){\n" + s + "}",
                    l
                }
                ,
                g.chain = function(t) {
                    var e = g(t);
                    return e._chain = !0,
                    e
                }
                ;
                var J = function(t, e) {
                    return t._chain ? g(e).chain() : e
                };
                g.mixin = function(t) {
                    return g.each(g.functions(t), function(e) {
                        var n = g[e] = t[e];
                        g.prototype[e] = function() {
                            var t = [this._wrapped];
                            return l.apply(t, arguments),
                            J(this, n.apply(g, t))
                        }
                    }),
                    g
                }
                ,
                g.mixin(g),
                g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                    var e = s[t];
                    g.prototype[t] = function() {
                        var n = this._wrapped;
                        return e.apply(n, arguments),
                        "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
                        J(this, n)
                    }
                }),
                g.each(["concat", "join", "slice"], function(t) {
                    var e = s[t];
                    g.prototype[t] = function() {
                        return J(this, e.apply(this._wrapped, arguments))
                    }
                }),
                g.prototype.value = function() {
                    return this._wrapped
                }
                ,
                g.prototype.valueOf = g.prototype.toJSON = g.prototype.value,
                g.prototype.toString = function() {
                    return String(this._wrapped)
                }
                ,
                "function" == typeof define && define.amd && define("underscore", [], function() {
                    return g
                })
            }()
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    9: [function(t, e, n) {
        "use strict";
        function r() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.host = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.query = null,
            this.pathname = null,
            this.path = null,
            this.href = null
        }
        function i(t, e, n) {
            if (t && u.isObject(t) && t instanceof r)
                return t;
            var i = new r;
            return i.parse(t, e, n),
            i
        }
        function s(t) {
            return u.isString(t) && (t = i(t)),
            t instanceof r ? t.format() : r.prototype.format.call(t)
        }
        function o(t, e) {
            return i(t, !1, !0).resolve(e)
        }
        function a(t, e) {
            return t ? i(t, !1, !0).resolveObject(e) : e
        }
        var l = t("punycode")
          , u = t("./util");
        n.parse = i,
        n.resolve = o,
        n.resolveObject = a,
        n.format = s,
        n.Url = r;
        var c = /^([a-z0-9.+-]+:)/i
          , h = /:[0-9]*$/
          , d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , f = ["<", ">", '"', "`", " ", "\r", "\n", "	"]
          , p = ["{", "}", "|", "\\", "^", "`"].concat(f)
          , m = ["'"].concat(p)
          , g = ["%", "/", "?", ";", "#"].concat(m)
          , y = ["/", "?", "#"]
          , v = 255
          , w = /^[+a-z0-9A-Z_-]{0,63}$/
          , b = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , x = {
            javascript: !0,
            "javascript:": !0
        }
          , _ = {
            javascript: !0,
            "javascript:": !0
        }
          , k = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }
          , S = t("querystring");
        r.prototype.parse = function(t, e, n) {
            if (!u.isString(t))
                throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var r = t.indexOf("?")
              , i = -1 !== r && r < t.indexOf("#") ? "?" : "#"
              , s = t.split(i)
              , o = /\\/g;
            s[0] = s[0].replace(o, "/"),
            t = s.join(i);
            var a = t;
            if (a = a.trim(),
            !n && 1 === t.split("#").length) {
                var h = d.exec(a);
                if (h)
                    return this.path = a,
                    this.href = a,
                    this.pathname = h[1],
                    h[2] ? (this.search = h[2],
                    e ? this.query = S.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "",
                    this.query = {}),
                    this
            }
            var f = c.exec(a);
            if (f) {
                f = f[0];
                var p = f.toLowerCase();
                this.protocol = p,
                a = a.substr(f.length)
            }
            if (n || f || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var T = "//" === a.substr(0, 2);
                !T || f && _[f] || (a = a.substr(2),
                this.slashes = !0)
            }
            if (!_[f] && (T || f && !k[f])) {
                for (var C = -1, M = 0; M < y.length; M++) {
                    var D = a.indexOf(y[M]);
                    -1 !== D && (-1 === C || C > D) && (C = D)
                }
                var N, O;
                O = -1 === C ? a.lastIndexOf("@") : a.lastIndexOf("@", C),
                -1 !== O && (N = a.slice(0, O),
                a = a.slice(O + 1),
                this.auth = decodeURIComponent(N)),
                C = -1;
                for (var M = 0; M < g.length; M++) {
                    var D = a.indexOf(g[M]);
                    -1 !== D && (-1 === C || C > D) && (C = D)
                }
                -1 === C && (C = a.length),
                this.host = a.slice(0, C),
                a = a.slice(C),
                this.parseHost(),
                this.hostname = this.hostname || "";
                var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!j)
                    for (var E = this.hostname.split(/\./), M = 0, A = E.length; A > M; M++) {
                        var Y = E[M];
                        if (Y && !Y.match(w)) {
                            for (var P = "", L = 0, F = Y.length; F > L; L++)
                                P += Y.charCodeAt(L) > 127 ? "x" : Y[L];
                            if (!P.match(w)) {
                                var H = E.slice(0, M)
                                  , R = E.slice(M + 1)
                                  , W = Y.match(b);
                                W && (H.push(W[1]),
                                R.unshift(W[2])),
                                R.length && (a = "/" + R.join(".") + a),
                                this.hostname = H.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > v ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
                j || (this.hostname = l.toASCII(this.hostname));
                var q = this.port ? ":" + this.port : ""
                  , I = this.hostname || "";
                this.host = I + q,
                this.href += this.host,
                j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
                "/" !== a[0] && (a = "/" + a))
            }
            if (!x[p])
                for (var M = 0, A = m.length; A > M; M++) {
                    var B = m[M];
                    if (-1 !== a.indexOf(B)) {
                        var U = encodeURIComponent(B);
                        U === B && (U = escape(B)),
                        a = a.split(B).join(U)
                    }
                }
            var z = a.indexOf("#");
            -1 !== z && (this.hash = a.substr(z),
            a = a.slice(0, z));
            var $ = a.indexOf("?");
            if (-1 !== $ ? (this.search = a.substr($),
            this.query = a.substr($ + 1),
            e && (this.query = S.parse(this.query)),
            a = a.slice(0, $)) : e && (this.search = "",
            this.query = {}),
            a && (this.pathname = a),
            k[p] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search) {
                var q = this.pathname || ""
                  , V = this.search || "";
                this.path = q + V
            }
            return this.href = this.format(),
            this
        }
        ,
        r.prototype.format = function() {
            var t = this.auth || "";
            t && (t = encodeURIComponent(t),
            t = t.replace(/%3A/i, ":"),
            t += "@");
            var e = this.protocol || ""
              , n = this.pathname || ""
              , r = this.hash || ""
              , i = !1
              , s = "";
            this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
            this.port && (i += ":" + this.port)),
            this.query && u.isObject(this.query) && Object.keys(this.query).length && (s = S.stringify(this.query));
            var o = this.search || s && "?" + s || "";
            return e && ":" !== e.substr(-1) && (e += ":"),
            this.slashes || (!e || k[e]) && i !== !1 ? (i = "//" + (i || ""),
            n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            o && "?" !== o.charAt(0) && (o = "?" + o),
            n = n.replace(/[?#]/g, function(t) {
                return encodeURIComponent(t)
            }),
            o = o.replace("#", "%23"),
            e + i + n + o + r
        }
        ,
        r.prototype.resolve = function(t) {
            return this.resolveObject(i(t, !1, !0)).format()
        }
        ,
        r.prototype.resolveObject = function(t) {
            if (u.isString(t)) {
                var e = new r;
                e.parse(t, !1, !0),
                t = e
            }
            for (var n = new r, i = Object.keys(this), s = 0; s < i.length; s++) {
                var o = i[s];
                n[o] = this[o]
            }
            if (n.hash = t.hash,
            "" === t.href)
                return n.href = n.format(),
                n;
            if (t.slashes && !t.protocol) {
                for (var a = Object.keys(t), l = 0; l < a.length; l++) {
                    var c = a[l];
                    "protocol" !== c && (n[c] = t[c])
                }
                return k[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
                n.href = n.format(),
                n
            }
            if (t.protocol && t.protocol !== n.protocol) {
                if (!k[t.protocol]) {
                    for (var h = Object.keys(t), d = 0; d < h.length; d++) {
                        var f = h[d];
                        n[f] = t[f]
                    }
                    return n.href = n.format(),
                    n
                }
                if (n.protocol = t.protocol,
                t.host || _[t.protocol])
                    n.pathname = t.pathname;
                else {
                    for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()); )
                        ;
                    t.host || (t.host = ""),
                    t.hostname || (t.hostname = ""),
                    "" !== p[0] && p.unshift(""),
                    p.length < 2 && p.unshift(""),
                    n.pathname = p.join("/")
                }
                if (n.search = t.search,
                n.query = t.query,
                n.host = t.host || "",
                n.auth = t.auth,
                n.hostname = t.hostname || t.host,
                n.port = t.port,
                n.pathname || n.search) {
                    var m = n.pathname || ""
                      , g = n.search || "";
                    n.path = m + g
                }
                return n.slashes = n.slashes || t.slashes,
                n.href = n.format(),
                n
            }
            var y = n.pathname && "/" === n.pathname.charAt(0)
              , v = t.host || t.pathname && "/" === t.pathname.charAt(0)
              , w = v || y || n.host && t.pathname
              , b = w
              , x = n.pathname && n.pathname.split("/") || []
              , p = t.pathname && t.pathname.split("/") || []
              , S = n.protocol && !k[n.protocol];
            if (S && (n.hostname = "",
            n.port = null,
            n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)),
            n.host = "",
            t.protocol && (t.hostname = null,
            t.port = null,
            t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)),
            t.host = null),
            w = w && ("" === p[0] || "" === x[0])),
            v)
                n.host = t.host || "" === t.host ? t.host : n.host,
                n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname,
                n.search = t.search,
                n.query = t.query,
                x = p;
            else if (p.length)
                x || (x = []),
                x.pop(),
                x = x.concat(p),
                n.search = t.search,
                n.query = t.query;
            else if (!u.isNullOrUndefined(t.search)) {
                if (S) {
                    n.hostname = n.host = x.shift();
                    var T = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                    T && (n.auth = T.shift(),
                    n.host = n.hostname = T.shift())
                }
                return n.search = t.search,
                n.query = t.query,
                u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                n.href = n.format(),
                n
            }
            if (!x.length)
                return n.pathname = null,
                n.search ? n.path = "/" + n.search : n.path = null,
                n.href = n.format(),
                n;
            for (var C = x.slice(-1)[0], M = (n.host || t.host || x.length > 1) && ("." === C || ".." === C) || "" === C, D = 0, N = x.length; N >= 0; N--)
                C = x[N],
                "." === C ? x.splice(N, 1) : ".." === C ? (x.splice(N, 1),
                D++) : D && (x.splice(N, 1),
                D--);
            if (!w && !b)
                for (; D--; D)
                    x.unshift("..");
            !w || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""),
            M && "/" !== x.join("/").substr(-1) && x.push("");
            var O = "" === x[0] || x[0] && "/" === x[0].charAt(0);
            if (S) {
                n.hostname = n.host = O ? "" : x.length ? x.shift() : "";
                var T = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                T && (n.auth = T.shift(),
                n.host = n.hostname = T.shift())
            }
            return w = w || n.host && x.length,
            w && !O && x.unshift(""),
            x.length ? n.pathname = x.join("/") : (n.pathname = null,
            n.path = null),
            u.isNull(n.pathname) && u.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.auth = t.auth || n.auth,
            n.slashes = n.slashes || t.slashes,
            n.href = n.format(),
            n
        }
        ,
        r.prototype.parseHost = function() {
            var t = this.host
              , e = h.exec(t);
            e && (e = e[0],
            ":" !== e && (this.port = e.substr(1)),
            t = t.substr(0, t.length - e.length)),
            t && (this.hostname = t)
        }
    }
    , {
        "./util": 10,
        punycode: 4,
        querystring: 7
    }],
    10: [function(t, e, n) {
        "use strict";
        e.exports = {
            isString: function(t) {
                return "string" == typeof t
            },
            isObject: function(t) {
                return "object" == typeof t && null !== t
            },
            isNull: function(t) {
                return null === t
            },
            isNullOrUndefined: function(t) {
                return null == t
            }
        }
    }
    , {}],
    11: [function(t, e, n) {
        function r(t, e, n) {
            var r = i.parse(t, !0);
            return r.query.utm_source = window.location.hostname,
            r.query.utm_medium = e,
            r.query.utm_campaign = n,
            delete r.search,
            i.format(r)
        }
        var i = t("url");
        e.exports = {
            setMediumCampaign: r
        }
    }
    , {
        url: 9
    }],
    12: [function(t, e, n) {
        e.exports = {
            id: 46,
            stamp: 1560750960472
        }
    }
    , {}],
    13: [function(t, e, n) {
        (function(n) {
            function r(t) {
                p.log("Create ChartWidget"),
                h.call(this, t),
                this.styles = !1,
                this.blockchain = {
                    supply: NaN,
                    blocks: NaN
                },
                this.chart = {
                    canvas: {
                        c: null,
                        i: null
                    },
                    w: NaN,
                    h: NaN,
                    max: 0,
                    min: 1 / 0,
                    tpad: 10,
                    fpad: 0,
                    scale: 1,
                    dx: 1
                },
                this.anim = null,
                this.data = [],
                this.last = {
                    price: NaN,
                    time: NaN
                },
                this.sl_handle = window.setTimeout(u.bind(this.stylesLoaded, this), 2500);
                var e = g + (this.cash ? "cash/" : "") + "history?unix=1&pretty=0"
                  , n = this.cash ? "cash:usd" : "core:usd"
                  , r = m + (this.cash ? "cash-blockchain.json" : "blockchain.json");
                d(e, 36e5, u.bind(this.processChart, this)),
                f.register(n, this.processSpot.bind(this)),
                f.subscribe(n),
                f.subscribe("source:widget-chart"),
                d(r, 36e5, this.processBlockchain.bind(this))
            }
            function i(t, e, n) {
                t.moveTo((0 | e) + .5, (0 | n) + .5)
            }
            function s(t, e, n) {
                t.lineTo((0 | e) + .5, (0 | n) + .5)
            }
            function o(t, e, n, r) {
                t.arc((0 | e) + .5, (0 | n) + .5, r, 0, 2 * Math.PI)
            }
            function a(t) {
                var e = {
                    x: 0,
                    y: 0
                };
                if (t.offsetX)
                    e.x = t.offsetX,
                    e.y = t.offsetY;
                else if (t.pageX && t.target) {
                    var n = l(t.target).offset();
                    e.x = t.pageX - n.left,
                    e.y = t.pageY - n.top
                }
                return e
            }
            var l = t("jquery")
              , u = t("underscore")
              , c = t("moment")
              , h = t("./widget")
              , d = t("./feed-poller")
              , f = t("./stream")
              , p = t("./log")
              , m = n.env.BASE
              , g = n.env.BCX
              , y = t("./analytics")
              , v = t("./util");
            r.prototype = Object.create(h.prototype),
            r.prototype.constructor = r,
            r.prototype.stylesLoaded = function() {
                this.styles = !0,
                window.clearTimeout(this.sl_handle),
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" ")),
                this.doResize(),
                this.updateStats()
            }
            ,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h2 title="Bitcoin ' + (this.cash ? "Cash " : "") + 'price">        <span>$</span><span>&mdash;.&ndash;</span>      </h2>      <h4>' + (this.cash ? "BCH" : "BTC") + '/USD</h4>      <div class="stats">        <div>MktCap<span class="mkt-cap">&mdash;.&ndash;</span></div>        <div>High<span class="high">&mdash;.&ndash;</span></div>        <div>Low<span class="low">&mdash;.&ndash;</span></div>        <div>Supply<span class="supply">&mdash;.&ndash;</span></div>        <div>Blocks<span class="blocks">&mdash;</span></div>      </div>      <p class="changes">        <strong class="arrow"></strong><span class="pct">&mdash;.&ndash;%</span><span class="amt">$&mdash;.&ndash;</span>      </p>      <p class="date-wrap"><span class="date">&mdash;</span></p>    </div>    <div class="btcwdgt-body">      <canvas class="c"></canvas>      <canvas class="i"></canvas>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'),
                this.el.addClass("btcwdgt btcwdgt-headlines btcwdgt-chart"),
                this.campaign && l("a", this.el).each(function(t, e) {
                    var n = l(e).attr("href");
                    l(e).attr("href", y.setMediumCampaign(n, "widget", "Chart Widget"))
                }),
                this.chart.canvas.c = l("canvas.c", this.el)[0],
                this.chart.canvas.i = l("canvas.i", this.el)[0],
                l("canvas.i", this.el).on("mousemove", u.bind(this.onMouseMove, this)),
                this.el.on("mouseout", u.bind(this.clearInteract, this)),
                l(".btcwdgt-header p", this.el).on("mouseover", u.bind(this.clearInteract, this)),
                l(window).on("resize", u.bind(this.onResize, this))
            }
            ,
            r.prototype.onResize = function() {
                window.requestAnimationFrame(u.bind(this.doResize, this))
            }
            ,
            r.prototype.doResize = function() {
                if (this.styles) {
                    var t = l(this.el).innerWidth()
                      , e = 16 / 9
                      , n = t / e
                      , r = "width: " + t + "px !important;       height:" + n + "px !important";
                    l(".btcwdgt-body", this.el).attr("style", r),
                    l("canvas", this.el).attr("style", r).css("width", t).css("height", n),
                    this.chart.canvas.c.width = t * w,
                    this.chart.canvas.c.height = n * w,
                    this.chart.canvas.i.width = t * w,
                    this.chart.canvas.i.height = n * w,
                    this.chart.canvas.c.getContext("2d").scale(w, w),
                    this.chart.canvas.i.getContext("2d").scale(w, w),
                    this.chart.w = t,
                    this.chart.h = n,
                    this.calculate(),
                    this.redraw();
                    var i = NaN;
                    isNaN(this.last.unix) ? this.data.length > 0 && (i = this.data[0][0]) : i = this.last.unix,
                    isNaN(i) || (l(".date", this.el).html(c.unix(i).format("lll")),
                    l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(i).format("l")))
                }
            }
            ,
            r.prototype.calculate = function() {
                this.chart.fpad = l(".btcwdgt-footer", this.el).height();
                var t = function(t) {
                    return t[1]
                };
                this.data.length > 0 && (this.chart.min = u.min(this.data, t)[1],
                this.chart.max = u.max(this.data, t)[1]),
                isNaN(this.last.price) || (this.chart.min = Math.min(this.chart.min, this.last.price),
                this.chart.max = Math.max(this.chart.max, this.last.price)),
                this.chart.scale = (this.chart.h - this.chart.fpad - this.chart.tpad) / (this.chart.max - this.chart.min),
                isNaN(this.last.price) ? this.chart.dx = this.chart.w / (this.data.length - 1) : this.chart.dx = this.chart.w / this.data.length
            }
            ,
            r.prototype.redraw = function() {
                this.draw(this.chart.canvas.c.getContext("2d"))
            }
            ,
            r.prototype.draw = function(t) {
                if (t.clearRect(0, 0, this.chart.w, this.chart.h),
                !(this.data.length <= 0)) {
                    for (var e = 12, n = 2, r = e + n + 1, o = 2, a = o * r, l = (this.chart.h - this.chart.fpad - this.chart.tpad) / a, u = (this.chart.max - this.chart.min) / l, h = Math.pow(10, Math.floor(Math.log10(u))), d = Math.floor(10 * u / h) / 10, f = [1, 1.25, 1.5, 2, 2.5, 5, 7.5, 10], p = h, m = 0; m < f.length; m++)
                        if (f[m] >= d) {
                            p = f[m] * h;
                            break
                        }
                    for (var g, y, v = [], w = [], b = Math.floor(this.chart.min / p) * p, x = b; x < this.chart.max; x += p)
                        y = this.priceToPxY(x),
                        y < this.chart.h - this.chart.fpad && y > 0 && v.push(y),
                        y + e + n < this.chart.h - this.chart.fpad - e && y + n > 0 && w.push([y + n, x]);
                    t.strokeStyle = this.colors.grid,
                    t.beginPath();
                    for (var m = 0; m < v.length; m++)
                        i(t, 0, v[m]),
                        s(t, this.chart.w, v[m]);
                    t.stroke(),
                    t.font = "300 " + e + 'px "museo-sans-rounded", Helvetica, Arial, sans-serif',
                    t.textAlign = "right",
                    t.textBaseline = "bottom",
                    t.strokeStyle = this.colors.labelStroke,
                    t.fillStyle = this.colors.label,
                    v = [];
                    for (var _ = this.chart.h - this.chart.fpad, m = 0; m < this.data.length; m++) {
                        var k = c.unix(this.data[m][0]).utc();
                        if (1 == k.get("date")) {
                            var S = "";
                            S = 0 == k.get("month") ? k.get("year") : k.format("MMM");
                            var T = isNaN(this.last.price) ? m : m + 1;
                            g = this.barToPxX(T),
                            v.push(g),
                            t.strokeText(S, g - 4, _),
                            t.fillText(S, g - 4, _)
                        }
                    }
                    t.strokeStyle = this.colors.grid,
                    t.beginPath();
                    for (var m = 0; m < v.length; m++)
                        i(t, v[m], 0),
                        s(t, v[m], this.chart.h - this.chart.fpad);
                    t.stroke(),
                    t.textAlign = "right",
                    t.textBaseline = "top";
                    var C = t.measureText(this.chart.max.toFixed(2)).width + 3;
                    if (t.beginPath(),
                    isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    if (t.lineTo(0, this.chart.h),
                    t.lineTo(this.chart.w, this.chart.h),
                    isNaN(this.last.price) ? t.lineTo(this.barToPxX(0), this.priceToPxY(this.data[0][1])) : t.lineTo(this.barToPxX(0), this.priceToPxY(this.last.price)),
                    t.fillStyle = this.colors.bg,
                    t.fill(),
                    t.beginPath(),
                    isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    t.strokeStyle = this.colors.fg,
                    t.stroke(),
                    t.strokeStyle = this.colors.labelStroke,
                    t.fillStyle = this.colors.label;
                    for (var m = 0; m < w.length; m++) {
                        var S = w[m][1].toFixed(2);
                        t.strokeText(S, C + e, w[m][0]),
                        t.fillText(S, C + e, w[m][0])
                    }
                    var x = this.last.price;
                    isNaN(x) && (x = this.data[0][1]),
                    y = this.priceToPxY(x),
                    t.beginPath();
                    var M = e + 4
                      , D = C + e + 2;
                    t.moveTo((e / 2 | 0) + .5, (y - M / 2 | 0) + .5),
                    t.lineTo(D, (y - M / 2 | 0) + .5),
                    t.lineTo((D + M / 2 | 0) + .5, y),
                    t.lineTo(D, (y + M / 2 | 0) + .5),
                    t.lineTo((e / 2 | 0) + .5, (y + M / 2 | 0) + .5),
                    t.lineTo((e / 2 | 0) + .5, (y - M / 2 | 0) + .5),
                    t.fillStyle = this.colors.chartbg,
                    t.fill(),
                    t.strokeStyle = this.colors.fg,
                    t.stroke(),
                    t.fillStyle = this.colors.label,
                    t.textAlign = "right",
                    t.textBaseline = "middle",
                    t.fillText(x.toFixed(2), C + e, y)
                }
            }
            ,
            r.prototype.onMouseMove = function(t) {
                var e = this;
                this.anim = window.requestAnimationFrame(function(t) {
                    return function() {
                        e.interact(t)
                    }
                }(t))
            }
            ,
            r.prototype.clearInteract = function(t) {
                try {
                    window.cancelAnimationFrame(this.anim)
                } catch (e) {}
                var n = this.chart.canvas.i.getContext("2d");
                n.clearRect(0, 0, this.chart.w, this.chart.h);
                var r = NaN
                  , i = NaN;
                this.data.length > 0 && (i = this.data[0][0],
                r = this.data[0][1]),
                isNaN(this.last.price) || (i = this.last.time,
                r = this.last.price),
                isNaN(r) || (l("h2 span:last-child", this.el).html(r.toFixed(2)),
                l(".date", this.el).html(c.unix(i).format("lll")),
                l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(i).format("l")))
            }
            ,
            r.prototype.interact = function(t) {
                var e = a(t)
                  , n = this.chart.canvas.i.getContext("2d")
                  , r = Math.round((this.chart.w - e.x) / this.chart.dx);
                if (n.clearRect(0, 0, this.chart.w, this.chart.h),
                !(0 > r || r >= (isNaN(this.last.price) ? this.data.length : this.data.length + 1))) {
                    var u = 5
                      , h = 6
                      , d = NaN
                      , f = NaN;
                    isNaN(this.last.price) ? (f = this.data[r][0],
                    d = this.data[r][1]) : 0 == r ? (f = this.last.time,
                    d = this.last.price) : (f = this.data[r - 1][0],
                    d = this.data[r - 1][1]),
                    n.fillStyle = this.colors.fg;
                    var p = this.barToPxX(r)
                      , m = this.priceToPxY(d);
                    n.beginPath(),
                    p > u + h + 1 && (i(n, 0, m - u),
                    s(n, u, m),
                    s(n, 0, m + u),
                    s(n, 0, m - u)),
                    p < this.chart.w - (u + h + 1) && (i(n, this.chart.w, m - u),
                    s(n, this.chart.w - u, m),
                    s(n, this.chart.w, m + u),
                    s(n, this.chart.w, m - u)),
                    n.fill(),
                    n.strokeStyle = this.colors.crosshair,
                    n.lineWidth = 1,
                    n.beginPath(),
                    i(n, p, 0),
                    s(n, p, m - h - 3),
                    i(n, p, m + h + 3),
                    s(n, p, this.chart.h),
                    n.stroke(),
                    n.strokeStyle = this.colors.label,
                    n.lineWidth = 2,
                    n.beginPath(),
                    i(n, p + h, m),
                    o(n, p, m, h),
                    n.stroke(),
                    l("h2 span:last-child", this.el).html(d.toFixed(2));
                    var g = l(".date", this.el);
                    g.html(c.unix(f).format("lll")),
                    g.width() > l(".date-wrap", this.el).width() && g.html(c.unix(f).format("l"))
                }
            }
            ,
            r.prototype.priceToPxY = function(t) {
                return this.chart.tpad + (this.chart.max - t) * this.chart.scale
            }
            ,
            r.prototype.barToPxX = function(t) {
                return this.chart.w - this.chart.dx * t
            }
            ,
            r.prototype.updateStats = function() {
                if (this.styles) {
                    var t = NaN
                      , e = NaN;
                    if (this.data.length > 0 && (e = this.data[0][0],
                    t = this.data[0][1]),
                    isNaN(this.last.price) || (e = this.last.time,
                    t = this.last.price),
                    !isNaN(t) && !isNaN(e)) {
                        if (l("h2 span:last-child", this.el).html(t.toFixed(2)),
                        l(".date", this.el).html(c.unix(e).format("lll")),
                        l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(e).format("l")),
                        !isNaN(this.blockchain.supply)) {
                            var n = this.blockchain.supply * t;
                            l(".mkt-cap", this.el).html("$" + v.compactDisp(n))
                        }
                        var r = 100 * (t / this.data[0][1] - 1)
                          , i = t - this.data[0][1];
                        l(".changes .pct", this.el).html(Math.abs(r).toFixed(1) + "%"),
                        l(".changes .amt", this.el).html("$" + Math.abs(i).toFixed(2)),
                        l(".arrow", this.el).removeClass("up down"),
                        l(".changes", this.el).removeClass("up down"),
                        i > 0 ? (l(".arrow", this.el).addClass("up"),
                        l(".changes", this.el).addClass("up")) : 0 > i && (l(".arrow", this.el).addClass("down"),
                        l(".changes", this.el).addClass("down"));
                        for (var s = t, o = t, a = 0; a < this.data.length; a++) {
                            var u = this.data[a][1];
                            u > s && (s = u),
                            o > u && (o = u)
                        }
                        l(".high", this.el).html("$" + s.toFixed(2)),
                        l(".low", this.el).html("$" + o.toFixed(2))
                    }
                    isNaN(this.blockchain.supply) || l(".supply", this.el).html(v.compactDisp(this.blockchain.supply)),
                    isNaN(this.blockchain.blocks) || l(".blocks", this.el).text(this.blockchain.blocks)
                }
            }
            ,
            r.prototype.processBlockchain = function(t) {
                this.blockchain.supply = t.supply,
                this.blockchain.blocks = t.blocks,
                this.updateStats()
            }
            ,
            r.prototype.processChart = function(t) {
                this.data = [];
                for (var e = 0; e < t.length; e++)
                    this.data.push([t[e][0], t[e][1] / 100]);
                this.doResize(),
                this.updateStats()
            }
            ,
            r.prototype.processSpot = function(t) {
                if (t.price) {
                    var e = {
                        price: t.price / 100,
                        stamp: t.stamp
                    };
                    this.last.price = e.price,
                    this.last.time = e.stamp,
                    this.doResize(),
                    this.updateStats()
                }
            }
            ;
            var w = 1;
            !function() {
                var t = document.createElement("canvas").getContext("2d")
                  , e = window.devicePixelRatio || 1
                  , n = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                w = e / n
            }(),
            function() {
                var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                window.requestAnimationFrame = "undefined" != typeof t ? t : function(t) {
                    t()
                }
            }(),
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./feed-poller": 16,
        "./log": 18,
        "./stream": 26,
        "./util": 27,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        moment: 2,
        underscore: 8
    }],
    14: [function(t, e, n) {
        e.exports = {
            "default": {
                fg: "#0fcb97",
                bg: "rgba(0, 0, 0, 0.15)",
                chartbg: "#3c3c3c",
                grid: "rgba(255,255,255,0.05)",
                label: "#ccc",
                labelStroke: "#191919",
                crosshair: "rgba(249, 176, 22, 0.25)"
            },
            light: {
                fg: "#0fcb97",
                bg: "rgba(15, 203, 151, 0.15)",
                chartbg: "#fff",
                grid: "rgba(0, 0, 0, 0.05)",
                label: "#3c3c3c",
                labelStroke: "#fff",
                crosshair: "rgba(0,0,0,0.25)"
            }
        }
    }
    , {}],
    15: [function(t, e, n) {
        function r(t) {
            return i.indexOf(t.toLowerCase()) >= 0
        }
        var i = "btc,usd,eur,gbp,jpy,cad,aud,cny,chf,sek,nzd,krw,aed,afn,all,amd,ang,aoa,ars,awg,azn,bam,bbd,bdt,bgn,bhd,bif,bmd,bnd,bob,brl,bsd,btn,bwp,byr,bzd,cdf,clf,clp,cop,crc,cup,cve,czk,djf,dkk,dop,dzd,eek,egp,etb,fjd,fkp,gel,ghs,gip,gmd,gnf,gtq,gyd,hkd,hnl,hrk,htg,huf,idr,ils,inr,iqd,irr,isk,jep,jmd,jod,kes,kgs,khr,kmf,kpw,kwd,kyd,kzt,lak,lbp,lkr,lrd,lsl,ltl,lvl,lyd,mad,mdl,mga,mkd,mmk,mnt,mop,mro,mur,mvr,mwk,mxn,myr,mzn,nad,ngn,nio,nok,npr,omr,pab,pen,pgk,php,pkr,pln,pyg,qar,ron,rsd,rub,rwf,sar,sbd,scr,sdg,sgd,shp,sll,sos,srd,std,svc,syp,szl,thb,tjs,tmt,tnd,top,try,ttd,twd,tzs,uah,ugx,uyu,uzs,vef,vnd,vuv,wst,xaf,xag,xau,xcd,xof,xpf,yer,zar,zmw,zwl";
        e.exports = {
            CURS: i,
            available: r
        }
    }
    , {}],
    16: [function(t, e, n) {
        function r(t, e, n) {
            this.url = t,
            this.period = e,
            this.cb = [],
            this.addCallback(n),
            a.log('Setup FeedPoller. Grab "' + this.url + '" every ' + (this.period / 1e3).toFixed(1) + "s"),
            this.startPolling()
        }
        function i(t, e, n) {
            l[t] ? l[t].addCallback(n) : l[t] = new r(t,e,n)
        }
        var s = t("jquery")
          , o = t("underscore")
          , a = t("./log")
          , l = {};
        r.prototype.addCallback = function(t) {
            "function" == typeof t && this.cb.push(t)
        }
        ,
        r.prototype.startPolling = function() {
            this.poll(),
            setInterval(o.bind(this.poll, this), this.period)
        }
        ,
        r.prototype.poll = function() {
            a.log('Load resource "' + this.url + '"');
            var t = Date.now();
            s.ajax({
                url: this.url,
                dataType: "json",
                context: this
            }).done(function(e, n, r) {
                a.log("Done. " + (Date.now() - t) + "ms"),
                o.each(this.cb, function(t) {
                    try {
                        t(e)
                    } catch (n) {}
                })
            })
        }
        ,
        e.exports = i
    }
    , {
        "./log": 18,
        jquery: 1,
        underscore: 8
    }],
    17: [function(t, e, n) {
        (function(n) {
            function r(t) {
                o.call(this, t),
                l.log("Create ForumWidget"),
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" ")),
                a(u + "forum.json", 6e5, s.bind(this.processFeed, this))
            }
            var i = t("jquery")
              , s = t("underscore")
              , o = t("./widget")
              , a = t("./feed-poller")
              , l = t("./log")
              , u = n.env.BASE
              , c = t("./analytics");
            r.prototype = Object.create(o.prototype),
            r.prototype.constructor = r,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://forum.bitcoin.com/">Active Bitcoin Forum Topics</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'),
                this.el.addClass("btcwdgt btcwdgt-headlines"),
                this.campaign && i("a", this.el).each(function(t, e) {
                    var n = i(e).attr("href");
                    i(e).attr("href", c.setMediumCampaign(n, "widget", "Forum Widget"))
                })
            }
            ,
            r.prototype.processFeed = function(t) {
                for (var e = [], n = 0, r = 0; r < t.length && r != this.rows; r++) {
                    var s = t[r];
                    e[n++] = "<li>",
                    e[n++] = '<a href="',
                    e[n++] = this.campaign ? c.setMediumCampaign(s.url, "widget", "Forum Widget") : s.url,
                    e[n++] = '" title="',
                    e[n++] = s.title,
                    e[n++] = '">',
                    e[n++] = s.title,
                    e[n++] = "</a>",
                    e[n++] = "</li>"
                }
                i("ul", this.el).html(e.join(""))
            }
            ,
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./feed-poller": 16,
        "./log": 18,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        underscore: 8
    }],
    18: [function(t, e, n) {
        function r(t, e, n) {
            try {
                e(n ? JSON.stringify(t, null, 2) : "Bitcoin Widgets: " + t)
            } catch (r) {}
        }
        e.exports = {
            log: function(t, e) {
                r(t, console.log, e)
            },
            data: function(t) {
                r(t, console.log, !0)
            },
            warn: function(t, e) {
                r(t, console.warn, e)
            },
            error: function(t, e) {
                r(t, console.error, e)
            }
        }
    }
    , {}],
    19: [function(t, e, n) {
        (function(e) {
            function n() {
                for (var t = 0; t < d.length; t++)
                    try {
                        d[t].stylesLoaded()
                    } catch (e) {}
            }
            function r(t) {
                i.log('Load style: "' + t + '"');
                var e = document.createElement("link");
                e.rel = "stylesheet",
                e.type = "text/css",
                e.href = t,
                e.media = "all",
                e.onload = n,
                document.getElementsByTagName("head")[0].appendChild(e)
            }
            var i = t("./log")
              , s = t("./forum-posts")
              , o = t("./news-stories")
              , a = t("./news-ticker")
              , l = t("./price")
              , u = t("./chart")
              , c = t("./pool")
              , h = e.env.BASE
              , d = []
              , f = {
                "btcwdgt-forum": s,
                "btcwdgt-news": o,
                "btcwdgt-news-ticker": a,
                "btcwdgt-price": l,
                "btcwdgt-chart": u,
                "btcwdgt-pool": c
            };
            !function() {
                e.env.BUILD.id && i.log("=== Build " + e.env.BUILD.id + " ==="),
                i.log("Initialize. Looking for target elements");
                var t = [];
                for (var n in f)
                    if (f.hasOwnProperty(n)) {
                        var s = document.getElementsByClassName(n);
                        s.length > 0 && i.log('Found "' + n + '"');
                        for (var o = 0; o < s.length; o++)
                            t.push({
                                el: s[o],
                                cn: f[n]
                            })
                    }
                if (0 == t.length)
                    return void i.warn("No target elements found! Cannot create widgets.");
                var a = h + "widget.css";
                e.env.BUILD.id && (a += "?" + e.env.BUILD.id),
                r(a);
                for (var o = 0; o < t.length; o++) {
                    var l = t[o];
                    d.push(new l.cn(l.el))
                }
            }()
        }
        ).call(this, t("_process"))
    }
    , {
        "./chart": 13,
        "./forum-posts": 17,
        "./log": 18,
        "./news-stories": 20,
        "./news-ticker": 21,
        "./pool": 22,
        "./price": 23,
        _process: 3
    }],
    20: [function(t, e, n) {
        (function(n) {
            function r(t) {
                if (l.log("Create NewsWidget"),
                o.call(this, t),
                this.rate = NaN,
                this.last = NaN,
                null != this.cur) {
                    this.key = "btcwdgt-price-" + this.cur.toLowerCase();
                    var e = d.getObj(this.key);
                    null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e));
                    var n = (this.cash ? "cash" : "price") + ":" + this.cl;
                    u.register(n, this.processSpot.bind(this)),
                    u.subscribe(n),
                    u.subscribe("source:widget-news")
                }
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" ")),
                a(c + "news.json", 6e5, s.bind(this.processFeed, this))
            }
            var i = t("jquery")
              , s = t("underscore")
              , o = t("./widget")
              , a = t("./feed-poller")
              , l = t("./log")
              , u = t("./stream")
              , c = n.env.BASE
              , h = t("./analytics")
              , d = t("./storage");
            r.prototype = Object.create(o.prototype),
            r.prototype.constructor = r,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://news.bitcoin.com/">Latest Bitcoin News Stories</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'),
                this.el.addClass("btcwdgt btcwdgt-headlines"),
                this.campaign && i("a", this.el).each(function(t, e) {
                    var n = i(e).attr("href");
                    i(e).attr("href", h.setMediumCampaign(n, "widget", "News Widget"))
                }),
                null != this.cur && i(".btcwdgt-body", this.el).prepend('      <div class="price">        <span>' + (this.cash ? "BCH" : "BTC") + "/" + this.cur.toUpperCase() + '</span>        <div class="p-wrap">          <p></p>        </div>        <strong class="arrow"></strong>      </div>')
            }
            ,
            r.prototype.processFeed = function(t) {
                for (var e = [], n = 0, r = 0; r < t.length && r != this.rows; r++) {
                    var s = t[r];
                    e[n++] = "<li>",
                    e[n++] = '<a href="',
                    e[n++] = this.campaign ? h.setMediumCampaign(s.url, "widget", "News Widget") : s.url,
                    e[n++] = '" title="',
                    e[n++] = s.title,
                    e[n++] = '">',
                    e[n++] = s.title,
                    e[n++] = "</a>",
                    e[n++] = "</li>"
                }
                i("ul", this.el).html(e.join(""))
            }
            ,
            r.prototype.processSpot = function(t) {
                t.price && (this.rate = t.price / 100,
                this.updateRates())
            }
            ,
            r.prototype.processRates = function(t) {
                t.rates && t.rates.usd && t.rates[this.cl] && (this.rates = t.rates,
                this.updateRates())
            }
            ,
            r.prototype.updateRates = function() {
                isNaN(this.last) && (this.last = this.rate),
                this.updateDisplay(),
                this.last = this.rate,
                d.setObj(this.key, this.rate)
            }
            ,
            r.prototype.updateDisplay = function() {
                var t = i("<p/>").text(this.rate.toFixed(2))
                  , e = i(".p-wrap p:first-child", this.el).height();
                if (i(".arrow", this.el).removeClass("up down"),
                this.rate > this.last) {
                    i(".p-wrap", this.el).prepend(t),
                    i(".p-wrap", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"),
                    window.setTimeout(s.bind(function() {
                        i(".p-wrap", this.el).attr("style", "top: 0 !important")
                    }, this), 50),
                    window.setTimeout(s.bind(function() {
                        i(".p-wrap p:last-child", this.el).remove(),
                        i(".p-wrap", this.el).attr("style", null)
                    }, this), 550);
                    var n = i(".p-wrap p:first-child", this.el)
                      , r = n.width() + i(".price span", this.el).width() + 18;
                    i(".arrow", this.el).addClass("up").attr("style", "left: " + r + "px !important;")
                }
                if (this.rate < this.last) {
                    i(".p-wrap", this.el).append(t),
                    i(".p-wrap", this.el).attr("style", "top: " + (-e + "px !important")),
                    window.setTimeout(s.bind(function() {
                        i(".p-wrap p:first-child", this.el).remove(),
                        i(".p-wrap", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500),
                    window.setTimeout(s.bind(function() {
                        i(".p-wrap", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = i(".p-wrap p:last-child", this.el)
                      , r = n.width() + i(".price span", this.el).width() + 18;
                    i(".arrow", this.el).addClass("down").attr("style", "left: " + r + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && i(".p-wrap p", this.el).replaceWith(t)
            }
            ,
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./feed-poller": 16,
        "./log": 18,
        "./storage": 25,
        "./stream": 26,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        underscore: 8
    }],
    21: [function(t, e, n) {
        (function(n) {
            function r(t) {
                l.log("Create NewsTicker"),
                o.call(this, t),
                this.stories = [],
                this.index = -1,
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" ")),
                a(u + "news.json", 15e5, s.bind(this.processFeed, this)),
                window.setInterval(s.bind(this.showNext, this), 7500)
            }
            var i = t("jquery")
              , s = t("underscore")
              , o = t("./widget")
              , a = t("./feed-poller")
              , l = t("./log")
              , u = n.env.BASE
              , c = t("./analytics");
            r.prototype = Object.create(o.prototype),
            r.prototype.constructor = r,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li></li></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://news.bitcoin.com/" class="logo" title="Powered by bitcoin.com news"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'),
                this.el.addClass("btcwdgt btcwdgt-text-ticker"),
                this.campaign && i("a", this.el).each(function(t, e) {
                    var n = i(e).attr("href");
                    i(e).attr("href", c.setMediumCampaign(n, "widget", "News Ticker Widget"))
                })
            }
            ,
            r.prototype.showNext = function() {
                if (0 != this.stories.length) {
                    this.index++,
                    this.index >= this.stories.length && (this.index = 0);
                    var t = []
                      , e = 0
                      , n = this.stories[this.index];
                    t[e++] = "<li>",
                    t[e++] = '<a href="',
                    t[e++] = n.url,
                    t[e++] = '" title="',
                    t[e++] = n.title,
                    t[e++] = '">',
                    t[e++] = n.title,
                    t[e++] = "</a>",
                    t[e++] = "</li>",
                    i("ul", this.el).append(t.join(""));
                    var r = i("ul li:first-child", this.el).height();
                    i("ul", this.el).attr("style", "top: " + (-r + "px !important")),
                    window.setTimeout(s.bind(function() {
                        i("ul li:first-child", this.el).remove(),
                        i("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500),
                    window.setTimeout(s.bind(function() {
                        i("ul", this.el).attr("style", null)
                    }, this), 1e3)
                }
            }
            ,
            r.prototype.processFeed = function(t) {
                if (this.stories = t,
                this.campaign)
                    for (var e = 0; e < this.stories.length; e++)
                        this.stories[e].url = c.setMediumCampaign(this.stories[e].url, "widget", "News Ticker Widget");
                this.index = -1,
                this.showNext()
            }
            ,
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./feed-poller": 16,
        "./log": 18,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        underscore: 8
    }],
    22: [function(t, e, n) {
        (function(n) {
            function r(t) {
                l.log("Create PoolWidget"),
                o.call(this, t),
                this.last = {
                    terahash: NaN,
                    stamp: 0
                },
                this.key = "btcwdgt-pool";
                var e = h.getObj(this.key);
                null != e && e.terahash && (this.last.terahash = e.terahash),
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" ")),
                a(u + "pool.json", 6e5, s.bind(this.processData, this))
            }
            var i = t("jquery")
              , s = t("underscore")
              , o = t("./widget")
              , a = t("./feed-poller")
              , l = t("./log")
              , u = n.env.BASE
              , c = t("./analytics")
              , h = t("./storage")
              , d = t("./util");
            r.prototype = Object.create(o.prototype),
            r.prototype.constructor = r,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://pool.bitcoin.com/" class="logo" title="Powered by the bitcoin.com mining pool"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'),
                this.el.addClass("btcwdgt btcwdgt-s-pool btcwdgt-s-price btcwdgt-text-ticker"),
                this.campaign && i("a", this.el).each(function(t, e) {
                    var n = i(e).attr("href");
                    i(e).attr("href", c.setMediumCampaign(n, "widget", "Pool Widget"))
                })
            }
            ,
            r.prototype.processData = function(t) {
                if (t.stamp && t.terahash) {
                    var e = Math.pow(10, 3 * Math.floor(Math.log10(t.terahash) / 3))
                      , n = t.terahash / e
                      , r = i("<li/>").text(n.toFixed(3 - Math.ceil(Math.log10(n))))
                      , o = i("ul li:first-child", this.el).height();
                    if (i(".arrow", this.el).removeClass("up down"),
                    t.terahash > this.last.terahash) {
                        i("ul", this.el).prepend(r),
                        i("ul", this.el).attr("style", "transition: none !important; top: " + (-o + "px") + " !important"),
                        window.setTimeout(s.bind(function() {
                            i("ul", this.el).attr("style", "top: 0 !important")
                        }, this), 50),
                        window.setTimeout(s.bind(function() {
                            i("ul li:last-child", this.el).remove(),
                            i("ul", this.el).attr("style", null)
                        }, this), 550);
                        var a = i("li:first-child", this.el)
                          , l = a.width() + 16;
                        i(".arrow", this.el).addClass("up").attr("style", "left: " + l + "px !important;")
                    }
                    if (t.terahash < this.last.terahash) {
                        i("ul", this.el).append(r),
                        i("ul", this.el).attr("style", "top: " + (-o + "px !important")),
                        window.setTimeout(s.bind(function() {
                            i("ul li:first-child", this.el).remove(),
                            i("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                        }, this), 500),
                        window.setTimeout(s.bind(function() {
                            i("ul", this.el).attr("style", null)
                        }, this), 1e3);
                        var a = i("li:last-child", this.el)
                          , l = a.width() + 16;
                        i(".arrow", this.el).addClass("down").attr("style", "left: " + l + "px !important;")
                    }
                    (isNaN(this.last.terahash) || t.terahash == this.last.terahash) && i("li", this.el).replaceWith(r),
                    i(".btcwdgt-body span", this.el).html(d.siPrefix(t.terahash, 12) + "Hash/s (BCH)"),
                    this.last = t,
                    h.setObj(this.key, this.last)
                }
            }
            ,
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./feed-poller": 16,
        "./log": 18,
        "./storage": 25,
        "./util": 27,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        underscore: 8
    }],
    23: [function(t, e, n) {
        (function(n) {
            function r(t) {
                a.log("Create PriceWidget"),
                o.call(this, t),
                this.rate = NaN,
                this.last = NaN,
                null == this.cur && (this.cur = "USD",
                this.cl = "usd"),
                this.key = "btcwdgt-price-" + this.cl;
                var e = c.getObj(this.key);
                null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e)),
                this.build(),
                this.el.addClass(this.postBuildClasses.join(" "));
                var n = (this.cash ? "cash" : "core") + ":" + this.cl;
                l.register(n, this.processSpot.bind(this)),
                l.subscribe(n),
                l.subscribe("source:widget-price")
            }
            var i = t("jquery")
              , s = t("underscore")
              , o = t("./widget")
              , a = t("./log")
              , l = t("./stream")
              , u = (n.env.BASE,
            t("./analytics"))
              , c = t("./storage");
            r.prototype = Object.create(o.prototype),
            r.prototype.constructor = r,
            r.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'),
                this.el.addClass("btcwdgt btcwdgt-s-price btcwdgt-text-ticker"),
                this.campaign && i("a", this.el).each(function(t, e) {
                    var n = i(e).attr("href");
                    i(e).attr("href", u.setMediumCampaign(n, "widget", "Price Widget"))
                }),
                i(".btcwdgt-body span", this.el).html((this.cash ? "BCH" : "BTC") + "/" + this.cur)
            }
            ,
            r.prototype.processSpot = function(t) {
                t.price && (this.rate = t.price / 100,
                this.updateRates())
            }
            ,
            r.prototype.updateRates = function() {
                isNaN(this.last) && (this.last = this.rate),
                this.updateDisplay(),
                this.last = this.rate,
                c.setObj(this.key, this.rate)
            }
            ,
            r.prototype.updateDisplay = function() {
                var t = i("<li/>").text(this.rate.toFixed(2));
                if ("JPY" == this.cur)
                    var t = i("<li/>").text(this.rate.toFixed(0));
                var e = i("ul li:first-child", this.el).height();
                if (i(".arrow", this.el).removeClass("up down"),
                this.rate > this.last) {
                    i("ul", this.el).prepend(t),
                    i("ul", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"),
                    window.setTimeout(s.bind(function() {
                        i("ul", this.el).attr("style", "top: 0 !important")
                    }, this), 50),
                    window.setTimeout(s.bind(function() {
                        i("ul li:last-child", this.el).remove(),
                        i("ul", this.el).attr("style", null)
                    }, this), 550);
                    var n = i("li:first-child", this.el)
                      , r = n.width() + 16;
                    i(".arrow", this.el).addClass("up").attr("style", "left: " + r + "px !important;")
                }
                if (this.rate < this.last) {
                    i("ul", this.el).append(t),
                    i("ul", this.el).attr("style", "top: " + (-e + "px !important")),
                    window.setTimeout(s.bind(function() {
                        i("ul li:first-child", this.el).remove(),
                        i("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500),
                    window.setTimeout(s.bind(function() {
                        i("ul", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = i("li:last-child", this.el)
                      , r = n.width() + 16;
                    i(".arrow", this.el).addClass("down").attr("style", "left: " + r + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && i("li", this.el).replaceWith(t)
            }
            ,
            e.exports = r
        }
        ).call(this, t("_process"))
    }
    , {
        "./analytics": 11,
        "./log": 18,
        "./storage": 25,
        "./stream": 26,
        "./widget": 28,
        _process: 3,
        jquery: 1,
        underscore: 8
    }],
    24: [function(t, e, n) {
        (function(e) {
            e.env.BASE = "https://widgets.bitcoin.com/",
            e.env.BCX = "https://index-api.bitcoin.com/api/v0/",
            e.env.WS = "wss://index-api.bitcoin.com/ws",
            e.env.BUILD = t("./build"),
            t("./main")
        }
        ).call(this, t("_process"))
    }
    , {
        "./build": 12,
        "./main": 19,
        _process: 3
    }],
    25: [function(t, e, n) {
        function r() {
            return window.localStorage && "localStorage"in window ? !0 : !1
        }
        function i(t, e) {
            var n = r() ? window.localStorage : l;
            n[t] = e
        }
        function s(t) {
            var e = r() ? window.localStorage : l;
            return e[t]
        }
        function o(t, e) {
            i(t, JSON.stringify(e))
        }
        function a(t) {
            var e = s(t);
            try {
                return JSON.parse(e)
            } catch (n) {
                return null
            }
        }
        var l = {};
        e.exports = {
            available: r,
            get: s,
            set: i,
            getObj: a,
            setObj: o
        }
    }
    , {}],
    26: [function(t, e, n) {
        (function(t) {
            function n() {
                this.callbacks = {},
                this.last = {},
                this.subscriptions = {},
                this.socket = null
            }
            function r(t, e) {
                window[o].register(t, e),
                window[o].connect()
            }
            function i(t) {
                window[o].subscribe(t)
            }
            var s = t.env.WS;
            n.prototype.register = function(t, e) {
                if (this.callbacks.hasOwnProperty(t) || (this.callbacks[t] = []),
                "function" == typeof e && (this.callbacks[t].push(e),
                this.last[t]))
                    try {
                        e(this.last[t])
                    } catch (n) {}
            }
            ,
            n.prototype.subscribe = function(t) {
                this.subscriptions[t] || (this.doSubscribe(t),
                this.subscriptions[t] = (new Date).getTime())
            }
            ,
            n.prototype.doSubscribe = function(t) {
                try {
                    this.socket.send(this.subscribeMessage(t))
                } catch (e) {}
            }
            ,
            n.prototype.subscribeMessage = function(t) {
                return JSON.stringify({
                    op: "subscribe",
                    channel: t
                })
            }
            ,
            n.prototype.dispatch = function(t, e) {
                if (this.last[t] = e,
                this.callbacks.hasOwnProperty(t))
                    for (var n = 0; n < this.callbacks[t].length; n++)
                        try {
                            this.callbacks[t][n](e)
                        } catch (r) {}
            }
            ,
            n.prototype.connect = function() {
                if (null === this.socket)
                    try {
                        this.socket = new WebSocket(s),
                        this.socket.onopen = this.onOpen.bind(this),
                        this.socket.onclose = this.onClose.bind(this),
                        this.socket.onmessage = this.onMessage.bind(this)
                    } catch (t) {}
            }
            ,
            n.prototype.reconnect = function() {
                try {
                    this.socket.readyState != WebSocket.CLOSED && this.socket.close()
                } catch (t) {}
                this.socket = null,
                window.setTimeout(this.connect.bind(this), 1e3 * (15 + 15 * Math.random()))
            }
            ,
            n.prototype.onOpen = function() {
                for (var t in this.subscriptions)
                    this.subscriptions[t] && this.doSubscribe(t)
            }
            ,
            n.prototype.onClose = function() {
                this.reconnect()
            }
            ,
            n.prototype.onMessage = function(t) {
                try {
                    var e = JSON.parse(t.data);
                    e.hasOwnProperty("op") && e.hasOwnProperty("data") && this.dispatch(e.op, e.data)
                } catch (n) {}
            }
            ;
            var o = "BitcoinComStream";
            o in window && window.hasOwnProperty(o) || (window[o] = new n),
            e.exports = {
                register: r,
                subscribe: i
            }
        }
        ).call(this, t("_process"))
    }
    , {
        _process: 3
    }],
    27: [function(t, e, n) {
        function r(t, e) {
            e = e || 0;
            var n = 3 * Math.floor(Math.log10(t) / 3) + e;
            switch (n) {
            case 24:
                return "Y";
            case 21:
                return "Z";
            case 18:
                return "E";
            case 15:
                return "P";
            case 12:
                return "T";
            case 9:
                return "G";
            case 6:
                return "M";
            case 3:
                return "k";
            case 0:
                return "";
            default:
                return "10<sup>" + n + "</sup>&thinsp;"
            }
        }
        function i(t) {
            var e = Math.pow(10, 3 * Math.floor(Math.log10(t) / 3))
              , n = t / e
              , r = 3 - Math.ceil(Math.log10(n));
            return n.toFixed(r) + s(t)
        }
        function s(t) {
            var e = 3 * Math.floor(Math.log10(t) / 3);
            switch (e) {
            case 15:
                return "Q";
            case 12:
                return "T";
            case 9:
                return "B";
            case 6:
                return "M";
            case 3:
                return "k";
            case 0:
                return "";
            default:
                return "&times;10<sup>" + e + "</sup>"
            }
        }
        Math.log10 = Math.log10 || function(t) {
            return Math.log(t) / Math.log(10)
        }
        ,
        e.exports = {
            compactDisp: i,
            scaleAbbr: s,
            siPrefix: r
        }
    }
    , {}],
    28: [function(t, e, n) {
        function r(t) {
            this.el = i(t),
            this.campaign = !("off" == this.el.attr("bw-campaign")),
            this.cur = null,
            this.cl = null;
            var e = this.el.attr("bw-cur");
            "string" == typeof e && s.available(e) && (a.log("Got currency: " + e.toUpperCase()),
            this.cur = e.toUpperCase(),
            this.cl = e.toLowerCase()),
            this.cash = "true" == this.el.attr("bw-cash"),
            this.cash && a.log("Bitcoin Cash base currency"),
            this.rows = 5;
            var n = parseInt(this.el.attr("bw-entries"), 10);
            switch (isNaN(n) || (this.rows = Math.max(1, Math.min(10, n))),
            this.postBuildClasses = [],
            "true" == this.el.attr("bw-noshadow") && this.postBuildClasses.push("btcwdgt-noshadow"),
            this.colors = o["default"],
            this.el.attr("bw-theme")) {
            case "light":
                this.postBuildClasses.push("btcwdgt-light"),
                this.colors = o.light
            }
            this.postBuildClasses.push("btcwdgt-clean")
        }
        var i = t("jquery")
          , s = t("./currencies")
          , o = t("./colors")
          , a = t("./log");
        e.exports = r
    }
    , {
        "./colors": 14,
        "./currencies": 15,
        "./log": 18,
        jquery: 1
    }]
}, {}, [24]);
