var dist = { exports: {} };
var tailwindMerge_cjs_production_min = {};
function r() {
  for (var r2, o2, t2 = 0, n2 = ""; t2 < arguments.length; ) (r2 = arguments[t2++]) && (o2 = e(r2)) && (n2 && (n2 += " "), n2 += o2);
  return n2;
}
function e(r2) {
  if ("string" == typeof r2) return r2;
  for (var o2, t2 = "", n2 = 0; n2 < r2.length; n2++) r2[n2] && (o2 = e(r2[n2])) && (t2 && (t2 += " "), t2 += o2);
  return t2;
}
function o() {
  return o = Object.assign ? Object.assign.bind() : function(r2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var o2 = arguments[e2];
      for (var t2 in o2) Object.prototype.hasOwnProperty.call(o2, t2) && (r2[t2] = o2[t2]);
    }
    return r2;
  }, o.apply(this, arguments);
}
function t(r2) {
  var e2 = function(r3) {
    var e3 = r3.theme, o2 = r3.prefix, t2 = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return function(r4, e4) {
      return e4 ? r4.map(function(r5) {
        return [r5[0], r5[1].map(function(r6) {
          return "string" == typeof r6 ? e4 + r6 : "object" == typeof r6 ? Object.fromEntries(Object.entries(r6).map(function(r7) {
            return [e4 + r7[0], r7[1]];
          })) : r6;
        })];
      }) : r4;
    }(Object.entries(r3.classGroups), o2).forEach(function(r4) {
      a(r4[1], t2, r4[0], e3);
    }), t2;
  }(r2);
  return { getClassGroupId: function(r3) {
    var o2 = r3.split("-");
    return "" === o2[0] && 1 !== o2.length && o2.shift(), n(o2, e2) || function(r4) {
      if (i.test(r4)) {
        var e3 = i.exec(r4)[1], o3 = null == e3 ? void 0 : e3.substring(0, e3.indexOf(":"));
        if (o3) return "arbitrary.." + o3;
      }
    }(r3);
  }, getConflictingClassGroupIds: function(e3) {
    return r2.conflictingClassGroups[e3] || [];
  } };
}
function n(r2, e2) {
  var o2;
  if (0 === r2.length) return e2.classGroupId;
  var t2 = e2.nextPart.get(r2[0]), i2 = t2 ? n(r2.slice(1), t2) : void 0;
  if (i2) return i2;
  if (0 !== e2.validators.length) {
    var a2 = r2.join("-");
    return null == (o2 = e2.validators.find(function(r3) {
      return (0, r3.validator)(a2);
    })) ? void 0 : o2.classGroupId;
  }
}
Object.defineProperty(tailwindMerge_cjs_production_min, "__esModule", { value: true });
var i = /^\[(.+)\]$/;
function a(r2, e2, o2, t2) {
  r2.forEach(function(r3) {
    if ("string" != typeof r3) {
      if ("function" == typeof r3) return r3.isThemeGetter ? void a(r3(t2), e2, o2, t2) : void e2.validators.push({ validator: r3, classGroupId: o2 });
      Object.entries(r3).forEach(function(r4) {
        a(r4[1], l(e2, r4[0]), o2, t2);
      });
    } else ("" === r3 ? e2 : l(e2, r3)).classGroupId = o2;
  });
}
function l(r2, e2) {
  var o2 = r2;
  return e2.split("-").forEach(function(r3) {
    o2.nextPart.has(r3) || o2.nextPart.set(r3, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), o2 = o2.nextPart.get(r3);
  }), o2;
}
function s(r2) {
  if (r2 < 1) return { get: function() {
  }, set: function() {
  } };
  var e2 = 0, o2 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Map();
  function n2(n3, i2) {
    o2.set(n3, i2), ++e2 > r2 && (e2 = 0, t2 = o2, o2 = /* @__PURE__ */ new Map());
  }
  return { get: function(r3) {
    var e3 = o2.get(r3);
    return void 0 !== e3 ? e3 : void 0 !== (e3 = t2.get(r3)) ? (n2(r3, e3), e3) : void 0;
  }, set: function(r3, e3) {
    o2.has(r3) ? o2.set(r3, e3) : n2(r3, e3);
  } };
}
function c(r2) {
  var e2 = r2.separator || ":";
  return function(r3) {
    for (var o2 = 0, t2 = [], n2 = 0, i2 = 0; i2 < r3.length; i2++) {
      var a2 = r3[i2];
      0 === o2 && a2 === e2[0] && (1 !== e2.length && r3.slice(i2, i2 + e2.length) !== e2 || (t2.push(r3.slice(n2, i2)), n2 = i2 + e2.length)), "[" === a2 ? o2++ : "]" === a2 && o2--;
    }
    var l2 = 0 === t2.length ? r3 : r3.substring(n2), s2 = l2.startsWith("!");
    return { modifiers: t2, hasImportantModifier: s2, baseClassName: s2 ? l2.substring(1) : l2 };
  };
}
function d(r2) {
  return o({ cache: s(r2.cacheSize), splitModifiers: c(r2) }, t(r2));
}
var u = /\s+/;
function p(r2, e2) {
  var o2 = e2.splitModifiers, t2 = e2.getClassGroupId, n2 = e2.getConflictingClassGroupIds, i2 = /* @__PURE__ */ new Set();
  return r2.trim().split(u).map(function(r3) {
    var e3 = o2(r3), n3 = e3.modifiers, i3 = e3.hasImportantModifier, a2 = t2(e3.baseClassName);
    if (!a2) return { isTailwindClass: false, originalClassName: r3 };
    var l2 = function(r4) {
      if (r4.length <= 1) return r4;
      var e4 = [], o3 = [];
      return r4.forEach(function(r5) {
        "[" === r5[0] ? (e4.push.apply(e4, o3.sort().concat([r5])), o3 = []) : o3.push(r5);
      }), e4.push.apply(e4, o3.sort()), e4;
    }(n3).join(":");
    return { isTailwindClass: true, modifierId: i3 ? l2 + "!" : l2, classGroupId: a2, originalClassName: r3 };
  }).reverse().filter(function(r3) {
    if (!r3.isTailwindClass) return true;
    var e3 = r3.modifierId, o3 = r3.classGroupId, t3 = e3 + o3;
    return !i2.has(t3) && (i2.add(t3), n2(o3).forEach(function(r4) {
      return i2.add(e3 + r4);
    }), true);
  }).reverse().map(function(r3) {
    return r3.originalClassName;
  }).join(" ");
}
function b() {
  for (var e2 = arguments.length, o2 = new Array(e2), t2 = 0; t2 < e2; t2++) o2[t2] = arguments[t2];
  var n2, i2, a2, l2 = s2;
  function s2(r2) {
    var e3 = o2[0], t3 = o2.slice(1).reduce(function(r3, e4) {
      return e4(r3);
    }, e3());
    return n2 = d(t3), i2 = n2.cache.get, a2 = n2.cache.set, l2 = c2, c2(r2);
  }
  function c2(r2) {
    var e3 = i2(r2);
    if (e3) return e3;
    var o3 = p(r2, n2);
    return a2(r2, o3), o3;
  }
  return function() {
    return l2(r.apply(null, arguments));
  };
}
function f(r2) {
  var e2 = function(e3) {
    return e3[r2] || [];
  };
  return e2.isThemeGetter = true, e2;
}
var g = /^\[(.+)\]$/, m = /^\d+\/\d+$/, v = /* @__PURE__ */ new Set(["px", "full", "screen"]), h = /^(\d+)?(xs|sm|md|lg|xl)$/, y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, x = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function w(r2) {
  return !Number.isNaN(Number(r2)) || v.has(r2) || m.test(r2) || k(r2);
}
function k(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && (o2.startsWith("length:") || y.test(o2));
}
function z(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && o2.startsWith("size:");
}
function j(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && o2.startsWith("position:");
}
function C(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && (o2.startsWith("url(") || o2.startsWith("url:"));
}
function G(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && (!Number.isNaN(Number(o2)) || o2.startsWith("number:"));
}
function I(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return Number.isInteger(Number(o2 || r2));
}
function N(r2) {
  return g.test(r2);
}
function A() {
  return true;
}
function M(r2) {
  return h.test(r2);
}
function O(r2) {
  var e2, o2 = null == (e2 = g.exec(r2)) ? void 0 : e2[1];
  return !!o2 && x.test(o2);
}
var S = { __proto__: null, isLength: w, isArbitraryLength: k, isArbitrarySize: z, isArbitraryPosition: j, isArbitraryUrl: C, isArbitraryNumber: G, isArbitraryWeight: G, isInteger: I, isArbitraryValue: N, isAny: A, isTshirtSize: M, isArbitraryShadow: O };
function P() {
  var r2 = f("colors"), e2 = f("spacing"), o2 = f("blur"), t2 = f("brightness"), n2 = f("borderColor"), i2 = f("borderRadius"), a2 = f("borderSpacing"), l2 = f("borderWidth"), s2 = f("contrast"), c2 = f("grayscale"), d2 = f("hueRotate"), u2 = f("invert"), p2 = f("gap"), b2 = f("gradientColorStops"), g2 = f("inset"), m2 = f("margin"), v2 = f("opacity"), h2 = f("padding"), y2 = f("saturate"), x2 = f("scale"), S2 = f("sepia"), P2 = f("skew"), W2 = f("space"), T2 = f("translate"), E2 = function() {
    return ["auto", e2];
  }, _2 = function() {
    return ["", w];
  }, R2 = function() {
    return ["auto", I];
  }, $2 = function() {
    return ["", "0", N];
  };
  return { cacheSize: 500, theme: { colors: [A], spacing: [w], blur: ["none", "", M, k], brightness: [I], borderColor: [r2], borderRadius: ["none", "", "full", M, k], borderSpacing: [e2], borderWidth: _2(), contrast: [I], grayscale: $2(), hueRotate: [I], invert: $2(), gap: [e2], gradientColorStops: [r2], inset: E2(), margin: E2(), opacity: [I], padding: [e2], saturate: [I], scale: [I], sepia: $2(), skew: [I, N], space: [e2], translate: [e2] }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", N] }], container: ["container"], columns: [{ columns: [M] }], "break-after": [{ "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }], "break-before": [{ "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [N]) }], overflow: [{ overflow: ["auto", "hidden", "clip", "visible", "scroll"] }], "overflow-x": [{ "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] }], "overflow-y": [{ "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] }], overscroll: [{ overscroll: ["auto", "contain", "none"] }], "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }], "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [g2] }], "inset-x": [{ "inset-x": [g2] }], "inset-y": [{ "inset-y": [g2] }], top: [{ top: [g2] }], right: [{ right: [g2] }], bottom: [{ bottom: [g2] }], left: [{ left: [g2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [I] }], basis: [{ basis: [e2] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", N] }], grow: [{ grow: $2() }], shrink: [{ shrink: $2() }], order: [{ order: ["first", "last", "none", I] }], "grid-cols": [{ "grid-cols": [A] }], "col-start-end": [{ col: ["auto", { span: [I] }] }], "col-start": [{ "col-start": R2() }], "col-end": [{ "col-end": R2() }], "grid-rows": [{ "grid-rows": [A] }], "row-start-end": [{ row: ["auto", { span: [I] }] }], "row-start": [{ "row-start": R2() }], "row-end": [{ "row-end": R2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", N] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", N] }], gap: [{ gap: [p2] }], "gap-x": [{ "gap-x": [p2] }], "gap-y": [{ "gap-y": [p2] }], "justify-content": [{ justify: ["start", "end", "center", "between", "around", "evenly"] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: [].concat(["start", "end", "center", "between", "around", "evenly"], ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(["start", "end", "center", "between", "around", "evenly"], ["baseline", "stretch"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [h2] }], px: [{ px: [h2] }], py: [{ py: [h2] }], pt: [{ pt: [h2] }], pr: [{ pr: [h2] }], pb: [{ pb: [h2] }], pl: [{ pl: [h2] }], m: [{ m: [m2] }], mx: [{ mx: [m2] }], my: [{ my: [m2] }], mt: [{ mt: [m2] }], mr: [{ mr: [m2] }], mb: [{ mb: [m2] }], ml: [{ ml: [m2] }], "space-x": [{ "space-x": [W2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [W2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", e2] }], "min-w": [{ "min-w": ["min", "max", "fit", w] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [M] }, M, k] }], h: [{ h: [e2, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", w] }], "max-h": [{ "max-h": [e2, "min", "max", "fit"] }], "font-size": [{ text: ["base", M, k] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", G] }], "font-family": [{ font: [A] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", w] }], "list-style-type": [{ list: ["none", "disc", "decimal", N] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r2] }], "placeholder-opacity": [{ "placeholder-opacity": [v2] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r2] }], "text-opacity": [{ "text-opacity": [v2] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(["solid", "dashed", "dotted", "double", "none"], ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", w] }], "underline-offset": [{ "underline-offset": ["auto", w] }], "text-decoration-color": [{ decoration: [r2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: [e2] }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"] }], break: [{ break: ["normal", "words", "all", "keep"] }], content: [{ content: ["none", N] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [v2] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [j]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", z] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, C] }], "bg-color": [{ bg: [r2] }], "gradient-from": [{ from: [b2] }], "gradient-via": [{ via: [b2] }], "gradient-to": [{ to: [b2] }], rounded: [{ rounded: [i2] }], "rounded-t": [{ "rounded-t": [i2] }], "rounded-r": [{ "rounded-r": [i2] }], "rounded-b": [{ "rounded-b": [i2] }], "rounded-l": [{ "rounded-l": [i2] }], "rounded-tl": [{ "rounded-tl": [i2] }], "rounded-tr": [{ "rounded-tr": [i2] }], "rounded-br": [{ "rounded-br": [i2] }], "rounded-bl": [{ "rounded-bl": [i2] }], "border-w": [{ border: [l2] }], "border-w-x": [{ "border-x": [l2] }], "border-w-y": [{ "border-y": [l2] }], "border-w-t": [{ "border-t": [l2] }], "border-w-r": [{ "border-r": [l2] }], "border-w-b": [{ "border-b": [l2] }], "border-w-l": [{ "border-l": [l2] }], "border-opacity": [{ "border-opacity": [v2] }], "border-style": [{ border: [].concat(["solid", "dashed", "dotted", "double", "none"], ["hidden"]) }], "divide-x": [{ "divide-x": [l2] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l2] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [v2] }], "divide-style": [{ divide: ["solid", "dashed", "dotted", "double", "none"] }], "border-color": [{ border: [n2] }], "border-color-x": [{ "border-x": [n2] }], "border-color-y": [{ "border-y": [n2] }], "border-color-t": [{ "border-t": [n2] }], "border-color-r": [{ "border-r": [n2] }], "border-color-b": [{ "border-b": [n2] }], "border-color-l": [{ "border-l": [n2] }], "divide-color": [{ divide: [n2] }], "outline-style": [{ outline: [""].concat(["solid", "dashed", "dotted", "double", "none"]) }], "outline-offset": [{ "outline-offset": [w] }], "outline-w": [{ outline: [w] }], "outline-color": [{ outline: [r2] }], "ring-w": [{ ring: _2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r2] }], "ring-opacity": [{ "ring-opacity": [v2] }], "ring-offset-w": [{ "ring-offset": [w] }], "ring-offset-color": [{ "ring-offset": [r2] }], shadow: [{ shadow: ["", "inner", "none", M, O] }], "shadow-color": [{ shadow: [A] }], opacity: [{ opacity: [v2] }], "mix-blend": [{ "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"] }], "bg-blend": [{ "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"] }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [o2] }], brightness: [{ brightness: [t2] }], contrast: [{ contrast: [s2] }], "drop-shadow": [{ "drop-shadow": ["", "none", M, N] }], grayscale: [{ grayscale: [c2] }], "hue-rotate": [{ "hue-rotate": [d2] }], invert: [{ invert: [u2] }], saturate: [{ saturate: [y2] }], sepia: [{ sepia: [S2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [o2] }], "backdrop-brightness": [{ "backdrop-brightness": [t2] }], "backdrop-contrast": [{ "backdrop-contrast": [s2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c2] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d2] }], "backdrop-invert": [{ "backdrop-invert": [u2] }], "backdrop-opacity": [{ "backdrop-opacity": [v2] }], "backdrop-saturate": [{ "backdrop-saturate": [y2] }], "backdrop-sepia": [{ "backdrop-sepia": [S2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a2] }], "border-spacing-x": [{ "border-spacing-x": [a2] }], "border-spacing-y": [{ "border-spacing-y": [a2] }], "table-layout": [{ table: ["auto", "fixed"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N] }], duration: [{ duration: [I] }], ease: [{ ease: ["linear", "in", "out", "in-out", N] }], delay: [{ delay: [I] }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", N] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [x2] }], "scale-x": [{ "scale-x": [x2] }], "scale-y": [{ "scale-y": [x2] }], rotate: [{ rotate: [I, N] }], "translate-x": [{ "translate-x": [T2] }], "translate-y": [{ "translate-y": [T2] }], "skew-x": [{ "skew-x": [P2] }], "skew-y": [{ "skew-y": [P2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N] }], accent: [{ accent: ["auto", r2] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N] }], "caret-color": [{ caret: [r2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": [e2] }], "scroll-mx": [{ "scroll-mx": [e2] }], "scroll-my": [{ "scroll-my": [e2] }], "scroll-mt": [{ "scroll-mt": [e2] }], "scroll-mr": [{ "scroll-mr": [e2] }], "scroll-mb": [{ "scroll-mb": [e2] }], "scroll-ml": [{ "scroll-ml": [e2] }], "scroll-p": [{ "scroll-p": [e2] }], "scroll-px": [{ "scroll-px": [e2] }], "scroll-py": [{ "scroll-py": [e2] }], "scroll-pt": [{ "scroll-pt": [e2] }], "scroll-pr": [{ "scroll-pr": [e2] }], "scroll-pb": [{ "scroll-pb": [e2] }], "scroll-pl": [{ "scroll-pl": [e2] }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", N] }], fill: [{ fill: [r2, "none"] }], "stroke-w": [{ stroke: [w, G] }], stroke: [{ stroke: [r2, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] } };
}
var W = b(P);
function T(r2, e2) {
  for (var o2 in e2) R(r2, o2, e2[o2]);
  return r2;
}
var E = Object.prototype.hasOwnProperty, _ = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function R(r2, e2, o2) {
  if (E.call(r2, e2) && !_.has(typeof o2) && null !== o2) {
    if (Array.isArray(o2) && Array.isArray(r2[e2])) r2[e2] = r2[e2].concat(o2);
    else if ("object" == typeof o2 && "object" == typeof r2[e2]) {
      if (null === r2[e2]) return void (r2[e2] = o2);
      for (var t2 in o2) R(r2[e2], t2, o2[t2]);
    }
  } else r2[e2] = o2;
}
var $ = r;
tailwindMerge_cjs_production_min.createTailwindMerge = b, tailwindMerge_cjs_production_min.extendTailwindMerge = function(r2) {
  for (var e2 = arguments.length, o2 = new Array(e2 > 1 ? e2 - 1 : 0), t2 = 1; t2 < e2; t2++) o2[t2 - 1] = arguments[t2];
  return b.apply(void 0, "function" == typeof r2 ? [P, r2].concat(o2) : [function() {
    return T(P(), r2);
  }].concat(o2));
}, tailwindMerge_cjs_production_min.fromTheme = f, tailwindMerge_cjs_production_min.getDefaultConfig = P, tailwindMerge_cjs_production_min.join = $, tailwindMerge_cjs_production_min.mergeConfigs = T, tailwindMerge_cjs_production_min.twJoin = r, tailwindMerge_cjs_production_min.twMerge = W, tailwindMerge_cjs_production_min.validators = S;
{
  dist.exports = tailwindMerge_cjs_production_min;
}
var distExports = dist.exports;
export {
  distExports as d
};
