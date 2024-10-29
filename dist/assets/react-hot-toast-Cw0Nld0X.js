import { r as reactExports } from "./react-Co2L6_bH.js";
import { h as h$1, u as u$1, j, m } from "./goober-BmfOThNE.js";
var W = (e) => typeof e == "function", T = (e, t) => W(e) ? e(t) : e;
var U = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), b = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})();
var Q = 20;
var S = /* @__PURE__ */ new Map(), X = 1e3, $ = (e) => {
  if (S.has(e)) return;
  let t = setTimeout(() => {
    S.delete(e), u({ type: 4, toastId: e });
  }, X);
  S.set(e, t);
}, J = (e) => {
  let t = S.get(e);
  t && clearTimeout(t);
}, v = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Q) };
    case 1:
      return t.toast.id && J(t.toast.id), { ...e, toasts: e.toasts.map((r) => r.id === t.toast.id ? { ...r, ...t.toast } : r) };
    case 2:
      let { toast: o } = t;
      return e.toasts.find((r) => r.id === o.id) ? v(e, { type: 1, toast: o }) : v(e, { type: 0, toast: o });
    case 3:
      let { toastId: s } = t;
      return s ? $(s) : e.toasts.forEach((r) => {
        $(r.id);
      }), { ...e, toasts: e.toasts.map((r) => r.id === s || s === void 0 ? { ...r, visible: false } : r) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((r) => r.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let a = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((r) => ({ ...r, pauseDuration: r.pauseDuration + a })) };
  }
}, A = [], P = { toasts: [], pausedAt: void 0 }, u = (e) => {
  P = v(P, e), A.forEach((t) => {
    t(P);
  });
}, Y = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, I = (e = {}) => {
  let [t, o] = reactExports.useState(P);
  reactExports.useEffect(() => (A.push(o), () => {
    let a = A.indexOf(o);
    a > -1 && A.splice(a, 1);
  }), [t]);
  let s = t.toasts.map((a) => {
    var r, c;
    return { ...e, ...e[a.type], ...a, duration: a.duration || ((r = e[a.type]) == null ? void 0 : r.duration) || (e == null ? void 0 : e.duration) || Y[a.type], style: { ...e.style, ...(c = e[a.type]) == null ? void 0 : c.style, ...a.style } };
  });
  return { ...t, toasts: s };
};
var G = (e, t = "blank", o) => ({ createdAt: Date.now(), visible: true, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...o, id: (o == null ? void 0 : o.id) || U() }), h = (e) => (t, o) => {
  let s = G(t, e, o);
  return u({ type: 2, toast: s }), s.id;
}, n = (e, t) => h("blank")(e, t);
n.error = h("error");
n.success = h("success");
n.loading = h("loading");
n.custom = h("custom");
n.dismiss = (e) => {
  u({ type: 3, toastId: e });
};
n.remove = (e) => u({ type: 4, toastId: e });
n.promise = (e, t, o) => {
  let s = n.loading(t.loading, { ...o, ...o == null ? void 0 : o.loading });
  return e.then((a) => (n.success(T(t.success, a), { id: s, ...o, ...o == null ? void 0 : o.success }), a)).catch((a) => {
    n.error(T(t.error, a), { id: s, ...o, ...o == null ? void 0 : o.error });
  }), e;
};
var Z = (e, t) => {
  u({ type: 1, toast: { id: e, height: t } });
}, ee = () => {
  u({ type: 5, time: Date.now() });
}, D = (e) => {
  let { toasts: t, pausedAt: o } = I(e);
  reactExports.useEffect(() => {
    if (o) return;
    let r = Date.now(), c = t.map((i) => {
      if (i.duration === 1 / 0) return;
      let d = (i.duration || 0) + i.pauseDuration - (r - i.createdAt);
      if (d < 0) {
        i.visible && n.dismiss(i.id);
        return;
      }
      return setTimeout(() => n.dismiss(i.id), d);
    });
    return () => {
      c.forEach((i) => i && clearTimeout(i));
    };
  }, [t, o]);
  let s = reactExports.useCallback(() => {
    o && u({ type: 6, time: Date.now() });
  }, [o]), a = reactExports.useCallback((r, c) => {
    let { reverseOrder: i = false, gutter: d = 8, defaultPosition: p } = c || {}, g = t.filter((m2) => (m2.position || p) === (r.position || p) && m2.height), E = g.findIndex((m2) => m2.id === r.id), x = g.filter((m2, R) => R < E && m2.visible).length;
    return g.filter((m2) => m2.visible).slice(...i ? [x + 1] : [0, x]).reduce((m2, R) => m2 + (R.height || 0) + d, 0);
  }, [t]);
  return { toasts: t, handlers: { updateHeight: Z, startPause: ee, endPause: s, calculateOffset: a } };
};
var oe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re = h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se = h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _ = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
var ne = h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
var pe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de = h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var ue = j("div")`
  position: absolute;
`, le = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te = h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({ toast: e }) => {
  let { icon: t, type: o, iconTheme: s } = e;
  return t !== void 0 ? typeof t == "string" ? reactExports.createElement(fe, null, t) : t : o === "blank" ? null : reactExports.createElement(le, null, reactExports.createElement(V, { ...s }), o !== "loading" && reactExports.createElement(ue, null, o === "error" ? reactExports.createElement(_, { ...s }) : reactExports.createElement(w, { ...s })));
};
var ye = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, he = "0%{opacity:0;} 100%{opacity:1;}", xe = "0%{opacity:1;} 100%{opacity:0;}", be = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (e, t) => {
  let s = e.includes("top") ? 1 : -1, [a, r] = b() ? [he, xe] : [ye(s), ge(s)];
  return { animation: t ? `${h$1(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$1(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, F = reactExports.memo(({ toast: e, position: t, style: o, children: s }) => {
  let a = e.height ? Ae(e.position || t || "top-center", e.visible) : { opacity: 0 }, r = reactExports.createElement(M, { toast: e }), c = reactExports.createElement(Se, { ...e.ariaProps }, T(e.message, e));
  return reactExports.createElement(be, { className: e.className, style: { ...a, ...o, ...e.style } }, typeof s == "function" ? s({ icon: r, message: c }) : reactExports.createElement(reactExports.Fragment, null, r, c));
});
m(reactExports.createElement);
var Ee = ({ id: e, className: t, style: o, onHeightUpdate: s, children: a }) => {
  let r = reactExports.useCallback((c) => {
    if (c) {
      let i = () => {
        let d = c.getBoundingClientRect().height;
        s(e, d);
      };
      i(), new MutationObserver(i).observe(c, { subtree: true, childList: true, characterData: true });
    }
  }, [e, s]);
  return reactExports.createElement("div", { ref: r, className: t, style: o }, a);
}, Re = (e, t) => {
  let o = e.includes("top"), s = o ? { top: 0 } : { bottom: 0 }, a = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: b() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (o ? 1 : -1)}px)`, ...s, ...a };
}, ve = u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, O = 16, Ie = ({ reverseOrder: e, position: t = "top-center", toastOptions: o, gutter: s, children: a, containerStyle: r, containerClassName: c }) => {
  let { toasts: i, handlers: d } = D(o);
  return reactExports.createElement("div", { style: { position: "fixed", zIndex: 9999, top: O, left: O, right: O, bottom: O, pointerEvents: "none", ...r }, className: c, onMouseEnter: d.startPause, onMouseLeave: d.endPause }, i.map((p) => {
    let g = p.position || t, E = d.calculateOffset(p, { reverseOrder: e, gutter: s, defaultPosition: t }), x = Re(g, E);
    return reactExports.createElement(Ee, { id: p.id, key: p.id, onHeightUpdate: d.updateHeight, className: p.visible ? ve : "", style: x }, p.type === "custom" ? T(p.message, p) : a ? a(p) : reactExports.createElement(F, { toast: p, position: g }));
  }));
};
var _t = n;
export {
  Ie as I,
  _t as _,
  n
};
