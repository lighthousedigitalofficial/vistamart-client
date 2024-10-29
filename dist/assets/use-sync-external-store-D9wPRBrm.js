import { r as reactExports } from "./react-Co2L6_bH.js";
var withSelector = { exports: {} };
var useSyncExternalStoreWithSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g = reactExports;
function n(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var p = "function" === typeof Object.is ? Object.is : n, q = g.useSyncExternalStore, r = g.useRef, t = g.useEffect, u = g.useMemo, v = g.useDebugValue;
useSyncExternalStoreWithSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e, l, h) {
  var c = r(null);
  if (null === c.current) {
    var f = { hasValue: false, value: null };
    c.current = f;
  } else f = c.current;
  c = u(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l(a3);
        if (void 0 !== h && f.hasValue) {
          var b2 = f.value;
          if (h(b2, a3)) return k = b2;
        }
        return k = a3;
      }
      b2 = k;
      if (p(d2, a3)) return b2;
      var e2 = l(a3);
      if (void 0 !== h && h(b2, e2)) return b2;
      d2 = a3;
      return k = e2;
    }
    var c2 = false, d2, k, m = void 0 === e ? null : e;
    return [function() {
      return a2(b());
    }, null === m ? void 0 : function() {
      return a2(m());
    }];
  }, [b, e, l, h]);
  var d = q(a, c[0], c[1]);
  t(function() {
    f.hasValue = true;
    f.value = d;
  }, [d]);
  v(d);
  return d;
};
{
  withSelector.exports = useSyncExternalStoreWithSelector_production_min;
}
var withSelectorExports = withSelector.exports;
export {
  withSelectorExports as w
};
