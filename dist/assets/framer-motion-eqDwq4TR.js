import { r as require$$0 } from "./tslib-CrxKFx1j.js";
import { r as reactExports } from "./react-Co2L6_bH.js";
import { r as require$$2 } from "./hey-listen-a0xrDGjh.js";
import { v as valueTypes_cjs } from "./style-value-types-bW3mb0AH.js";
import { p as popmotion_cjs } from "./popmotion-CJvGBFY5.js";
import { f as framesync_cjs } from "./framesync-3qtSxmQR.js";
import { r as require$$6 } from "./@motionone-D6QGPJHo.js";
import { g as getAugmentedNamespace } from "./@floating-ui-4Y5N-uvO.js";
var cjs = {};
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
const isPropValid_browser_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const require$$7 = /* @__PURE__ */ getAugmentedNamespace(isPropValid_browser_esm);
(function(exports) {
  var define_process_env_default = {};
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib = require$$0;
  var React = reactExports;
  var heyListen = require$$2;
  var styleValueTypes = valueTypes_cjs;
  var popmotion = popmotion_cjs;
  var sync = framesync_cjs;
  var dom = require$$6;
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { "default": e };
  }
  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = /* @__PURE__ */ Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var React__namespace = /* @__PURE__ */ _interopNamespace(React);
  var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
  var sync__default = /* @__PURE__ */ _interopDefaultLegacy(sync);
  var defaultEnvironment = "production";
  var env = typeof process === "undefined" || define_process_env_default === void 0 ? defaultEnvironment : "production";
  var createDefinition = function(propNames) {
    return {
      isEnabled: function(props) {
        return propNames.some(function(name) {
          return !!props[name];
        });
      }
    };
  };
  var featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView"
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
      "onPan",
      "onPanStart",
      "onPanSessionStart",
      "onPanEnd"
    ]),
    inView: createDefinition([
      "whileInView",
      "onViewportEnter",
      "onViewportLeave"
    ])
  };
  function loadFeatures(features) {
    for (var key in features) {
      if (features[key] === null)
        continue;
      if (key === "projectionNodeConstructor") {
        featureDefinitions.projectionNodeConstructor = features[key];
      } else {
        featureDefinitions[key].Component = features[key];
      }
    }
  }
  var LazyContext = React.createContext({ strict: false });
  var featureNames = Object.keys(featureDefinitions);
  var numFeatures = featureNames.length;
  function useFeatures(props, visualElement2, preloadedFeatures) {
    var features = [];
    var lazyContext = React.useContext(LazyContext);
    if (!visualElement2)
      return null;
    if (env !== "production" && preloadedFeatures && lazyContext.strict) {
      heyListen.invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
      var name_1 = featureNames[i];
      var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
      if (isEnabled(props) && Component) {
        features.push(React__namespace.createElement(Component, tslib.__assign({ key: name_1 }, props, { visualElement: visualElement2 })));
      }
    }
    return features;
  }
  var MotionConfigContext = React.createContext({
    transformPagePoint: function(p) {
      return p;
    },
    isStatic: false,
    reducedMotion: "never"
  });
  var MotionContext = React.createContext({});
  function useVisualElementContext() {
    return React.useContext(MotionContext).visualElement;
  }
  var PresenceContext = React.createContext(null);
  var isBrowser = typeof document !== "undefined";
  var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;
  var prefersReducedMotion = { current: null };
  var hasDetected = false;
  function initPrefersReducedMotion() {
    hasDetected = true;
    if (!isBrowser)
      return;
    if (window.matchMedia) {
      var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
      var setReducedMotionPreferences = function() {
        return prefersReducedMotion.current = motionMediaQuery_1.matches;
      };
      motionMediaQuery_1.addListener(setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }
  function useReducedMotion() {
    !hasDetected && initPrefersReducedMotion();
    var _a = tslib.__read(React.useState(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
    return shouldReduceMotion;
  }
  function useReducedMotionConfig() {
    var reducedMotionPreference = useReducedMotion();
    var reducedMotion = React.useContext(MotionConfigContext).reducedMotion;
    if (reducedMotion === "never") {
      return false;
    } else if (reducedMotion === "always") {
      return true;
    } else {
      return reducedMotionPreference;
    }
  }
  function useVisualElement(Component, visualState, props, createVisualElement) {
    var lazyContext = React.useContext(LazyContext);
    var parent = useVisualElementContext();
    var presenceContext = React.useContext(PresenceContext);
    var shouldReduceMotion = useReducedMotionConfig();
    var visualElementRef = React.useRef(void 0);
    if (!createVisualElement)
      createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component, {
        visualState,
        parent,
        props,
        presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
        blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        shouldReduceMotion
      });
    }
    var visualElement2 = visualElementRef.current;
    useIsomorphicLayoutEffect(function() {
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
    });
    React.useEffect(function() {
      var _a;
      (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    useIsomorphicLayoutEffect(function() {
      return function() {
        return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
      };
    }, []);
    return visualElement2;
  }
  function isRefObject(ref) {
    return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }
  function useMotionRef(visualState, visualElement2, externalRef) {
    return React.useCallback(
      function(instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement2) {
          instance ? visualElement2.mount(instance) : visualElement2.unmount();
        }
        if (externalRef) {
          if (typeof externalRef === "function") {
            externalRef(instance);
          } else if (isRefObject(externalRef)) {
            externalRef.current = instance;
          }
        }
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [visualElement2]
    );
  }
  function isVariantLabels(v) {
    return Array.isArray(v);
  }
  function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
  }
  function getCurrent(visualElement2) {
    var current = {};
    visualElement2.forEachValue(function(value, key) {
      return current[key] = value.get();
    });
    return current;
  }
  function getVelocity$1(visualElement2) {
    var velocity = {};
    visualElement2.forEachValue(function(value, key) {
      return velocity[key] = value.getVelocity();
    });
    return velocity;
  }
  function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) {
      currentValues = {};
    }
    if (currentVelocity === void 0) {
      currentVelocity = {};
    }
    if (typeof definition === "function") {
      definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    if (typeof definition === "string") {
      definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    if (typeof definition === "function") {
      definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
  }
  function resolveVariant(visualElement2, definition, custom) {
    var props = visualElement2.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
  }
  function checkIfControllingVariants(props) {
    var _a;
    return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
  }
  function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
  }
  function getCurrentTreeVariants(props, context) {
    if (checkIfControllingVariants(props)) {
      var initial = props.initial, animate2 = props.animate;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate2) ? animate2 : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }
  function useCreateMotionContext(props) {
    var _a = getCurrentTreeVariants(props, React.useContext(MotionContext)), initial = _a.initial, animate2 = _a.animate;
    return React.useMemo(function() {
      return { initial, animate: animate2 };
    }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }
  function useConstant(init) {
    var ref = React.useRef(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }
  var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false
  };
  var id$1 = 1;
  function useProjectionId() {
    return useConstant(function() {
      if (globalProjectionState.hasEverUpdated) {
        return id$1++;
      }
    });
  }
  var LayoutGroupContext = React.createContext({});
  var SwitchLayoutGroupContext = React.createContext({});
  function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
    var _b;
    var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
    var initialPromotionConfig = React.useContext(SwitchLayoutGroupContext);
    if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
      return;
    }
    visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
    visualElement2.projection.setOptions({
      layoutId,
      layout,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement: visualElement2,
      scheduleRender: function() {
        return visualElement2.scheduleRender();
      },
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof layout === "string" ? layout : "both",
      initialPromotionConfig,
      layoutScroll
    });
  }
  var VisualElementHandler = (
    /** @class */
    function(_super) {
      tslib.__extends(VisualElementHandler2, _super);
      function VisualElementHandler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
        this.updateProps();
        return null;
      };
      VisualElementHandler2.prototype.componentDidUpdate = function() {
      };
      VisualElementHandler2.prototype.updateProps = function() {
        var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
        if (visualElement2)
          visualElement2.setProps(props);
      };
      VisualElementHandler2.prototype.render = function() {
        return this.props.children;
      };
      return VisualElementHandler2;
    }(React__default["default"].Component)
  );
  function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState2 = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
      var layoutId = useLayoutId(props);
      props = tslib.__assign(tslib.__assign({}, props), { layoutId });
      var config = React.useContext(MotionConfigContext);
      var features = null;
      var context = useCreateMotionContext(props);
      var projectionId = config.isStatic ? void 0 : useProjectionId();
      var visualState = useVisualState2(props, config.isStatic);
      if (!config.isStatic && isBrowser) {
        context.visualElement = useVisualElement(Component, visualState, tslib.__assign(tslib.__assign({}, config), props), createVisualElement);
        useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
        features = useFeatures(props, context.visualElement, preloadedFeatures);
      }
      return React__namespace.createElement(
        VisualElementHandler,
        { visualElement: context.visualElement, props: tslib.__assign(tslib.__assign({}, config), props) },
        features,
        React__namespace.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement))
      );
    }
    return React.forwardRef(MotionComponent);
  }
  function useLayoutId(_a) {
    var _b;
    var layoutId = _a.layoutId;
    var layoutGroupId = (_b = React.useContext(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
      if (customMotionComponentConfig === void 0) {
        customMotionComponentConfig = {};
      }
      return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
      return custom;
    }
    var componentCache = /* @__PURE__ */ new Map();
    return new Proxy(custom, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: function(_target, key) {
        if (!componentCache.has(key)) {
          componentCache.set(key, custom(key));
        }
        return componentCache.get(key);
      }
    });
  }
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function isSVGComponent(Component) {
    if (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof Component !== "string" || /**
      * If it contains a dash, the element is a custom HTML webcomponent.
      */
      Component.includes("-")
    ) {
      return false;
    } else if (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      lowercaseSVGElements.indexOf(Component) > -1 || /**
      * If it contains a capital letter, it's an SVG component
      */
      /[A-Z]/.test(Component)
    ) {
      return true;
    }
    return false;
  }
  var scaleCorrectors = {};
  function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
  }
  var transformAxes = ["", "X", "Y", "Z"];
  var order = ["translate", "scale", "rotate", "skew"];
  var transformProps = ["transformPerspective", "x", "y", "z"];
  order.forEach(function(operationKey) {
    return transformAxes.forEach(function(axesKey) {
      return transformProps.push(operationKey + axesKey);
    });
  });
  function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
  }
  var transformPropSet = new Set(transformProps);
  function isTransformProp(key) {
    return transformPropSet.has(key);
  }
  var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
  function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
  }
  function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }
  var isMotionValue = function(value) {
    return Boolean(value !== null && typeof value === "object" && value.getVelocity);
  };
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform2 = _a.transform, transformKeys2 = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    var transformString = "";
    transformKeys2.sort(sortTransformProps);
    var transformHasZ = false;
    var numTransformKeys = transformKeys2.length;
    for (var i = 0; i < numTransformKeys; i++) {
      var key = transformKeys2[i];
      transformString += "".concat(translateAlias[key] || key, "(").concat(transform2[key], ") ");
      if (key === "z")
        transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += "translateZ(0)";
    } else {
      transformString = transformString.trim();
    }
    if (transformTemplate) {
      transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
    } else if (allowTransformNone && transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }
  function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return "".concat(originX, " ").concat(originY, " ").concat(originZ);
  }
  function isCSSVariable$1(key) {
    return key.startsWith("--");
  }
  var getValueAsType = function(value, type) {
    return type && typeof value === "number" ? type.transform(value) : value;
  };
  var int = tslib.__assign(tslib.__assign({}, styleValueTypes.number), { transform: Math.round });
  var numberValueTypes = {
    // Border props
    borderWidth: styleValueTypes.px,
    borderTopWidth: styleValueTypes.px,
    borderRightWidth: styleValueTypes.px,
    borderBottomWidth: styleValueTypes.px,
    borderLeftWidth: styleValueTypes.px,
    borderRadius: styleValueTypes.px,
    radius: styleValueTypes.px,
    borderTopLeftRadius: styleValueTypes.px,
    borderTopRightRadius: styleValueTypes.px,
    borderBottomRightRadius: styleValueTypes.px,
    borderBottomLeftRadius: styleValueTypes.px,
    // Positioning props
    width: styleValueTypes.px,
    maxWidth: styleValueTypes.px,
    height: styleValueTypes.px,
    maxHeight: styleValueTypes.px,
    size: styleValueTypes.px,
    top: styleValueTypes.px,
    right: styleValueTypes.px,
    bottom: styleValueTypes.px,
    left: styleValueTypes.px,
    // Spacing props
    padding: styleValueTypes.px,
    paddingTop: styleValueTypes.px,
    paddingRight: styleValueTypes.px,
    paddingBottom: styleValueTypes.px,
    paddingLeft: styleValueTypes.px,
    margin: styleValueTypes.px,
    marginTop: styleValueTypes.px,
    marginRight: styleValueTypes.px,
    marginBottom: styleValueTypes.px,
    marginLeft: styleValueTypes.px,
    // Transform props
    rotate: styleValueTypes.degrees,
    rotateX: styleValueTypes.degrees,
    rotateY: styleValueTypes.degrees,
    rotateZ: styleValueTypes.degrees,
    scale: styleValueTypes.scale,
    scaleX: styleValueTypes.scale,
    scaleY: styleValueTypes.scale,
    scaleZ: styleValueTypes.scale,
    skew: styleValueTypes.degrees,
    skewX: styleValueTypes.degrees,
    skewY: styleValueTypes.degrees,
    distance: styleValueTypes.px,
    translateX: styleValueTypes.px,
    translateY: styleValueTypes.px,
    translateZ: styleValueTypes.px,
    x: styleValueTypes.px,
    y: styleValueTypes.px,
    z: styleValueTypes.px,
    perspective: styleValueTypes.px,
    transformPerspective: styleValueTypes.px,
    opacity: styleValueTypes.alpha,
    originX: styleValueTypes.progressPercentage,
    originY: styleValueTypes.progressPercentage,
    originZ: styleValueTypes.px,
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: styleValueTypes.alpha,
    strokeOpacity: styleValueTypes.alpha,
    numOctaves: int
  };
  function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    var _a;
    var style = state.style, vars = state.vars, transform2 = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
    transformKeys2.length = 0;
    var hasTransform2 = false;
    var hasTransformOrigin = false;
    var transformIsNone = true;
    for (var key in latestValues) {
      var value = latestValues[key];
      if (isCSSVariable$1(key)) {
        vars[key] = value;
        continue;
      }
      var valueType = numberValueTypes[key];
      var valueAsType = getValueAsType(value, valueType);
      if (isTransformProp(key)) {
        hasTransform2 = true;
        transform2[key] = valueAsType;
        transformKeys2.push(key);
        if (!transformIsNone)
          continue;
        if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
          transformIsNone = false;
      } else if (isTransformOriginProp(key)) {
        transformOrigin[key] = valueAsType;
        hasTransformOrigin = true;
      } else {
        style[key] = valueAsType;
      }
    }
    if (hasTransform2) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    } else if (transformTemplate) {
      style.transform = transformTemplate({}, "");
    } else if (!latestValues.transform && style.transform) {
      style.transform = "none";
    }
    if (hasTransformOrigin) {
      style.transformOrigin = buildTransformOrigin(transformOrigin);
    }
  }
  var createHtmlRenderState = function() {
    return {
      style: {},
      transform: {},
      transformKeys: [],
      transformOrigin: {},
      vars: {}
    };
  };
  function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return React.useMemo(function() {
      var state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
      var vars = state.vars, style = state.style;
      return tslib.__assign(tslib.__assign({}, vars), style);
    }, [visualState]);
  }
  function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
      style = props.transformValues(style);
    }
    return style;
  }
  function useHTMLProps(props, visualState, isStatic) {
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag) && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
  }
  var validMotionProps = /* @__PURE__ */ new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
    "whileInView",
    "onViewportEnter",
    "onViewportLeave",
    "viewport",
    "layoutScroll"
  ]);
  function isValidMotionProp(key) {
    return validMotionProps.has(key);
  }
  var shouldForward = function(key) {
    return !isValidMotionProp(key);
  };
  function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
      return;
    shouldForward = function(key) {
      return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
    };
  }
  try {
    loadExternalIsValidProp(require$$7.default);
  } catch (_a) {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
      props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }
  function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string" ? origin : styleValueTypes.px.transform(offset + size * origin);
  }
  function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return "".concat(pxOriginX, " ").concat(pxOriginY);
  }
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
    if (spacing === void 0) {
      spacing = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    attrs.pathLength = 1;
    var keys = camelKeys;
    attrs[keys.offset] = styleValueTypes.px.transform(-offset);
    var pathLength = styleValueTypes.px.transform(length);
    var pathSpacing = styleValueTypes.px.transform(spacing);
    attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
  }
  function buildSVGAttrs(state, _a, options, transformTemplate) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = tslib.__rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    buildHTMLStyles(state, latest, options, transformTemplate);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
    if (attrs.transform) {
      if (dimensions)
        style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
      style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset);
    }
  }
  var createSvgRenderState = function() {
    return tslib.__assign(tslib.__assign({}, createHtmlRenderState()), { attrs: {} });
  };
  function useSVGProps(props, visualState) {
    var visualProps = React.useMemo(function() {
      var state = createSvgRenderState();
      buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
      return tslib.__assign(tslib.__assign({}, state.attrs), { style: tslib.__assign({}, state.style) });
    }, [visualState]);
    if (props.style) {
      var rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = tslib.__assign(tslib.__assign({}, rawStyles), visualProps.style);
    }
    return visualProps;
  }
  function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) {
      forwardMotionProps = false;
    }
    var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
      var latestValues = _a.latestValues;
      var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
      var visualProps = useVisualProps(props, latestValues, isStatic);
      var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
      var elementProps = tslib.__assign(tslib.__assign(tslib.__assign({}, filteredProps), visualProps), { ref });
      if (projectionId) {
        elementProps["data-projection-id"] = projectionId;
      }
      return React.createElement(Component, elementProps);
    };
    return useRender;
  }
  var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
  var REPLACE_TEMPLATE = "$1-$2";
  var camelToDash = function(str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
  };
  function renderHTML(element, _a, styleProp, projection) {
    var style = _a.style, vars = _a.vars;
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    for (var key in vars) {
      element.style.setProperty(key, vars[key]);
    }
  }
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength"
  ]);
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (var key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }
  function scrapeMotionValuesFromProps$1(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
      if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }
  function scrapeMotionValuesFromProps(props) {
    var newValues = scrapeMotionValuesFromProps$1(props);
    for (var key in props) {
      if (isMotionValue(props[key])) {
        var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }
  function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
  }
  var isKeyframesTarget = function(v) {
    return Array.isArray(v);
  };
  var isCustomValue = function(v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
  };
  var resolveFinalValueInKeyframes = function(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };
  function resolveMotionValue(value) {
    var unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
  }
  function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
      renderState: createRenderState()
    };
    if (onMount) {
      state.mount = function(instance) {
        return onMount(props, instance, state);
      };
    }
    return state;
  }
  var makeUseVisualState = function(config) {
    return function(props, isStatic) {
      var context = React.useContext(MotionContext);
      var presenceContext = React.useContext(PresenceContext);
      return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function() {
        return makeState(config, props, context, presenceContext);
      });
    };
  };
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    var initial = props.initial, animate2 = props.animate;
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
      initial !== null && initial !== void 0 ? initial : initial = context.initial;
      animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
    }
    var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
    var variantToSet = initialAnimationIsBlocked ? animate2 : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      list.forEach(function(definition) {
        var resolved = resolveVariantFromProps(props, definition);
        if (!resolved)
          return;
        var transitionEnd = resolved.transitionEnd;
        resolved.transition;
        var target = tslib.__rest(resolved, ["transitionEnd", "transition"]);
        for (var key2 in target) {
          var valueTarget = target[key2];
          if (Array.isArray(valueTarget)) {
            var index2 = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index2];
          }
          if (valueTarget !== null) {
            values[key2] = valueTarget;
          }
        }
        for (var key2 in transitionEnd)
          values[key2] = transitionEnd[key2];
      });
    }
    return values;
  }
  var svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createSvgRenderState,
      onMount: function(props, instance, _a) {
        var renderState = _a.renderState, latestValues = _a.latestValues;
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
        renderSVG(instance, renderState);
      }
    })
  };
  var htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
      createRenderState: createHtmlRenderState
    })
  };
  function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
    return tslib.__assign(tslib.__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
  }
  exports.AnimationType = void 0;
  (function(AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["InView"] = "whileInView";
    AnimationType["Exit"] = "exit";
  })(exports.AnimationType || (exports.AnimationType = {}));
  function addDomEvent(target, eventName, handler, options) {
    if (options === void 0) {
      options = { passive: true };
    }
    target.addEventListener(eventName, handler, options);
    return function() {
      return target.removeEventListener(eventName, handler);
    };
  }
  function useDomEvent(ref, eventName, handler, options) {
    React.useEffect(function() {
      var element = ref.current;
      if (handler && element) {
        return addDomEvent(element, eventName, handler, options);
      }
    }, [ref, eventName, handler, options]);
  }
  function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
    var onFocus = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Focus, true);
    };
    var onBlur = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Focus, false);
    };
    useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
    useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
  }
  function isMouseEvent(event) {
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
      return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
  }
  function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
  }
  function filterPrimaryPointer(eventHandler) {
    return function(event) {
      var isMouseEvent2 = event instanceof MouseEvent;
      var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
      if (isPrimaryPointer) {
        eventHandler(event);
      }
    };
  }
  var defaultPagePoint = { pageX: 0, pageY: 0 };
  function pointFromTouch(e, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function pointFromMouse(point, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function extractEventInfo(event, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
    };
  }
  var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) {
      shouldFilterPrimaryPointer = false;
    }
    var listener = function(event) {
      return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
  };
  var supportsPointerEvents = function() {
    return isBrowser && window.onpointerdown === null;
  };
  var supportsTouchEvents = function() {
    return isBrowser && window.ontouchstart === null;
  };
  var supportsMouseEvents = function() {
    return isBrowser && window.onmousedown === null;
  };
  var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave"
  };
  var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel"
  };
  function getPointerEventName(name) {
    if (supportsPointerEvents()) {
      return name;
    } else if (supportsTouchEvents()) {
      return touchEventNames[name];
    } else if (supportsMouseEvents()) {
      return mouseEventNames[name];
    }
    return name;
  }
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function createLock(name) {
    var lock = null;
    return function() {
      var openLock = function() {
        lock = null;
      };
      if (lock === null) {
        lock = name;
        return openLock;
      }
      return false;
    };
  }
  var globalHorizontalLock = createLock("dragHorizontal");
  var globalVerticalLock = createLock("dragVertical");
  function getGlobalLock(drag2) {
    var lock = false;
    if (drag2 === "y") {
      lock = globalVerticalLock();
    } else if (drag2 === "x") {
      lock = globalHorizontalLock();
    } else {
      var openHorizontal_1 = globalHorizontalLock();
      var openVertical_1 = globalVerticalLock();
      if (openHorizontal_1 && openVertical_1) {
        lock = function() {
          openHorizontal_1();
          openVertical_1();
        };
      } else {
        if (openHorizontal_1)
          openHorizontal_1();
        if (openVertical_1)
          openVertical_1();
      }
    }
    return lock;
  }
  function isDragActive() {
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
      return true;
    openGestureLock();
    return false;
  }
  function createHoverEvent(visualElement2, isActive, callback) {
    return function(event, info) {
      var _a;
      if (!isMouseEvent(event) || isDragActive())
        return;
      (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(exports.AnimationType.Hover, isActive);
      callback === null || callback === void 0 ? void 0 : callback(event, info);
    };
  }
  function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
    usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0, { passive: !onHoverStart });
    usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
  }
  var isNodeOrChild = function(parent, child) {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };
  function useUnmountEffect(callback) {
    return React.useEffect(function() {
      return function() {
        return callback();
      };
    }, []);
  }
  function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = React.useRef(false);
    var cancelPointerEndListeners = React.useRef(null);
    var eventOptions = {
      passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
    };
    function removePointerEndListener() {
      var _a2;
      (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
      cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
      var _a2;
      removePointerEndListener();
      isPressing.current = false;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Tap, false);
      return !isDragActive();
    }
    function onPointerUp(event, info) {
      if (!checkPointerEnd())
        return;
      !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
      if (!checkPointerEnd())
        return;
      onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
      var _a2;
      removePointerEndListener();
      if (isPressing.current)
        return;
      isPressing.current = true;
      cancelPointerEndListeners.current = popmotion.pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Tap, true);
      onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    }
    usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
    useUnmountEffect(removePointerEndListener);
  }
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, element) {
    if (warned.has(message))
      return;
    console.warn(message);
    warned.add(message);
  }
  var observerCallbacks = /* @__PURE__ */ new WeakMap();
  var observers = /* @__PURE__ */ new WeakMap();
  var fireObserverCallback = function(entry) {
    var _a;
    (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
  };
  var fireAllObserverCallbacks = function(entries) {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver(_a) {
    var root = _a.root, options = tslib.__rest(_a, ["root"]);
    var lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    var rootObservers = observers.get(lookupRoot);
    var key = JSON.stringify(options);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, tslib.__assign({ root }, options));
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options, callback) {
    var rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return function() {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }
  function useViewport(_a) {
    var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
    var state = React.useRef({
      hasEnteredView: false,
      isInView: false
    });
    var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
    if (viewport.once && state.current.hasEnteredView)
      shouldObserve = false;
    var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
    useObserver(shouldObserve, state.current, visualElement2, viewport);
  }
  var thresholdNames = {
    some: 0,
    all: 1
  };
  function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
    var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
    React.useEffect(function() {
      if (!shouldObserve)
        return;
      var options = {
        root: root === null || root === void 0 ? void 0 : root.current,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      var intersectionCallback = function(entry) {
        var _a2;
        var isIntersecting = entry.isIntersecting;
        if (state.isInView === isIntersecting)
          return;
        state.isInView = isIntersecting;
        if (once && !isIntersecting && state.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          state.hasEnteredView = true;
        }
        (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.InView, isIntersecting);
        var props = visualElement2.getProps();
        var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
        callback === null || callback === void 0 ? void 0 : callback(entry);
      };
      return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
    }, [shouldObserve, root, rootMargin, amount]);
  }
  function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
    var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
    React.useEffect(function() {
      if (!shouldObserve || !fallback)
        return;
      if (env !== "production") {
        warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
      }
      requestAnimationFrame(function() {
        var _a2;
        state.hasEnteredView = true;
        var onViewportEnter = visualElement2.getProps().onViewportEnter;
        onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
        (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.InView, true);
      });
    }, [shouldObserve]);
  }
  var makeRenderlessComponent = function(hook) {
    return function(props) {
      hook(props);
      return null;
    };
  };
  var gestureAnimations = {
    inView: makeRenderlessComponent(useViewport),
    tap: makeRenderlessComponent(useTapGesture),
    focus: makeRenderlessComponent(useFocusGesture),
    hover: makeRenderlessComponent(useHoverGesture)
  };
  var counter = 0;
  var incrementId = function() {
    return counter++;
  };
  var useId = function() {
    return useConstant(incrementId);
  };
  function usePresence() {
    var context = React.useContext(PresenceContext);
    if (context === null)
      return [true, null];
    var isPresent2 = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    var id2 = useId();
    React.useEffect(function() {
      return register(id2);
    }, []);
    var safeToRemove = function() {
      return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
    };
    return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
  }
  function useIsPresent() {
    return isPresent(React.useContext(PresenceContext));
  }
  function isPresent(context) {
    return context === null ? true : context.isPresent;
  }
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (var i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }
  var secondsToMilliseconds = function(seconds) {
    return seconds * 1e3;
  };
  var easingLookup = {
    linear: popmotion.linear,
    easeIn: popmotion.easeIn,
    easeInOut: popmotion.easeInOut,
    easeOut: popmotion.easeOut,
    circIn: popmotion.circIn,
    circInOut: popmotion.circInOut,
    circOut: popmotion.circOut,
    backIn: popmotion.backIn,
    backInOut: popmotion.backInOut,
    backOut: popmotion.backOut,
    anticipate: popmotion.anticipate,
    bounceIn: popmotion.bounceIn,
    bounceInOut: popmotion.bounceInOut,
    bounceOut: popmotion.bounceOut
  };
  var easingDefinitionToFunction = function(definition) {
    if (Array.isArray(definition)) {
      heyListen.invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
      var _a = tslib.__read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
      return popmotion.cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
      heyListen.invariant(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
      return easingLookup[definition];
    }
    return definition;
  };
  var isEasingArray = function(ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
  };
  var isAnimatable = function(key, value) {
    if (key === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    styleValueTypes.complex.test(value) && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };
  var underDampedSpring = function() {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
    };
  };
  var criticallyDampedSpring = function(to) {
    return {
      type: "spring",
      stiffness: 550,
      damping: to === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    };
  };
  var linearTween = function() {
    return {
      type: "keyframes",
      ease: "linear",
      duration: 0.3
    };
  };
  var keyframes = function(values) {
    return {
      type: "keyframes",
      duration: 0.8,
      values
    };
  };
  var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring
  };
  var getDefaultTransition = function(valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
      transitionFactory = keyframes;
    } else {
      transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return tslib.__assign({ to }, transitionFactory(to));
  };
  var defaultValueTypes = tslib.__assign(tslib.__assign({}, numberValueTypes), {
    // Color props
    color: styleValueTypes.color,
    backgroundColor: styleValueTypes.color,
    outlineColor: styleValueTypes.color,
    fill: styleValueTypes.color,
    stroke: styleValueTypes.color,
    // Border props
    borderColor: styleValueTypes.color,
    borderTopColor: styleValueTypes.color,
    borderRightColor: styleValueTypes.color,
    borderBottomColor: styleValueTypes.color,
    borderLeftColor: styleValueTypes.color,
    filter: styleValueTypes.filter,
    WebkitFilter: styleValueTypes.filter
  });
  var getDefaultValueType = function(key) {
    return defaultValueTypes[key];
  };
  function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== styleValueTypes.filter)
      defaultValueType = styleValueTypes.complex;
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
  }
  var instantAnimationState = {
    current: false
  };
  function isTransitionDefined(_a) {
    _a.when;
    _a.delay;
    _a.delayChildren;
    _a.staggerChildren;
    _a.staggerDirection;
    _a.repeat;
    _a.repeatType;
    _a.repeatDelay;
    _a.from;
    var transition = tslib.__rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
  }
  var legacyRepeatWarning = false;
  function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = tslib.__rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = tslib.__assign({}, transition);
    if (times)
      options["offset"] = times;
    if (transition.duration)
      options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
      options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    if (ease) {
      options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
    }
    if (transition.type === "tween")
      options.type = "keyframes";
    if (yoyo || loop || flip) {
      heyListen.warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
      legacyRepeatWarning = true;
      if (yoyo) {
        options.repeatType = "reverse";
      } else if (loop) {
        options.repeatType = "loop";
      } else if (flip) {
        options.repeatType = "mirror";
      }
      options.repeat = loop || yoyo || flip || transition.repeat;
    }
    if (transition.type !== "spring")
      options.type = "keyframes";
    return options;
  }
  function getDelayFromTransition(transition, key) {
    var _a, _b;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
  }
  function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
      options.to = tslib.__spreadArray([], tslib.__read(options.to), false);
      options.to[0] = options.from;
    }
    return options;
  }
  function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
      (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
    }
    hydrateKeyframes(options);
    if (!isTransitionDefined(transition)) {
      transition = tslib.__assign(tslib.__assign({}, transition), getDefaultTransition(key, options.to));
    }
    return tslib.__assign(tslib.__assign({}, options), convertTransitionToAnimationOptions(transition));
  }
  function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = isAnimatable(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
      origin = getAnimatableNone(key, target);
    } else if (isZero(origin) && typeof target === "string") {
      origin = getZeroUnit(target);
    } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
      target = getZeroUnit(origin);
    }
    var isOriginAnimatable = isAnimatable(key, origin);
    heyListen.warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
    function start() {
      var options = {
        from: origin,
        to: target,
        velocity: value.getVelocity(),
        onComplete,
        onUpdate: function(v) {
          return value.set(v);
        }
      };
      return valueTransition.type === "inertia" || valueTransition.type === "decay" ? popmotion.inertia(tslib.__assign(tslib.__assign({}, options), valueTransition)) : popmotion.animate(tslib.__assign(tslib.__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
        var _a2;
        options.onUpdate(v);
        (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
      }, onComplete: function() {
        var _a2;
        options.onComplete();
        (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
      } }));
    }
    function set() {
      var _a2, _b;
      var finalTarget = resolveFinalValueInKeyframes(target);
      value.set(finalTarget);
      onComplete();
      (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
      (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
      return { stop: function() {
      } };
    }
    return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
  }
  function isZero(value) {
    return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
  }
  function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
  }
  function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
  }
  function startAnimation(key, value, target, transition) {
    if (transition === void 0) {
      transition = {};
    }
    if (instantAnimationState.current) {
      transition = { type: false };
    }
    return value.start(function(onComplete) {
      var delayTimer;
      var controls;
      var animation = getAnimation(key, value, target, transition, onComplete);
      var delay = getDelayFromTransition(transition, key);
      var start = function() {
        return controls = animation();
      };
      if (delay) {
        delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
      } else {
        start();
      }
      return function() {
        clearTimeout(delayTimer);
        controls === null || controls === void 0 ? void 0 : controls.stop();
      };
    });
  }
  var isNumericalString = function(v) {
    return /^\-?\d*\.?\d+$/.test(v);
  };
  var isZeroValueString = function(v) {
    return /^0[^.\s]+$/.test(v);
  };
  function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
  }
  function removeItem(arr, item) {
    var index2 = arr.indexOf(item);
    index2 > -1 && arr.splice(index2, 1);
  }
  function moveItem(_a, fromIndex, toIndex) {
    var _b = tslib.__read(_a), arr = _b.slice(0);
    var startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
      var endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
      var _c = tslib.__read(arr.splice(fromIndex, 1), 1), item = _c[0];
      arr.splice(endIndex, 0, item);
    }
    return arr;
  }
  var SubscriptionManager = (
    /** @class */
    function() {
      function SubscriptionManager2() {
        this.subscriptions = [];
      }
      SubscriptionManager2.prototype.add = function(handler) {
        var _this = this;
        addUniqueItem(this.subscriptions, handler);
        return function() {
          return removeItem(_this.subscriptions, handler);
        };
      };
      SubscriptionManager2.prototype.notify = function(a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
          return;
        if (numSubscriptions === 1) {
          this.subscriptions[0](a, b, c);
        } else {
          for (var i = 0; i < numSubscriptions; i++) {
            var handler = this.subscriptions[i];
            handler && handler(a, b, c);
          }
        }
      };
      SubscriptionManager2.prototype.getSize = function() {
        return this.subscriptions.length;
      };
      SubscriptionManager2.prototype.clear = function() {
        this.subscriptions.length = 0;
      };
      return SubscriptionManager2;
    }()
  );
  var isFloat = function(value) {
    return !isNaN(parseFloat(value));
  };
  var MotionValue = (
    /** @class */
    function() {
      function MotionValue2(init) {
        var _this = this;
        this.version = "6.5.1";
        this.timeDelta = 0;
        this.lastUpdated = 0;
        this.updateSubscribers = new SubscriptionManager();
        this.velocityUpdateSubscribers = new SubscriptionManager();
        this.renderSubscribers = new SubscriptionManager();
        this.canTrackVelocity = false;
        this.updateAndNotify = function(v, render) {
          if (render === void 0) {
            render = true;
          }
          _this.prev = _this.current;
          _this.current = v;
          var _a = sync.getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
          if (_this.lastUpdated !== timestamp) {
            _this.timeDelta = delta;
            _this.lastUpdated = timestamp;
            sync__default["default"].postRender(_this.scheduleVelocityCheck);
          }
          if (_this.prev !== _this.current) {
            _this.updateSubscribers.notify(_this.current);
          }
          if (_this.velocityUpdateSubscribers.getSize()) {
            _this.velocityUpdateSubscribers.notify(_this.getVelocity());
          }
          if (render) {
            _this.renderSubscribers.notify(_this.current);
          }
        };
        this.scheduleVelocityCheck = function() {
          return sync__default["default"].postRender(_this.velocityCheck);
        };
        this.velocityCheck = function(_a) {
          var timestamp = _a.timestamp;
          if (timestamp !== _this.lastUpdated) {
            _this.prev = _this.current;
            _this.velocityUpdateSubscribers.notify(_this.getVelocity());
          }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
      }
      MotionValue2.prototype.onChange = function(subscription) {
        return this.updateSubscribers.add(subscription);
      };
      MotionValue2.prototype.clearListeners = function() {
        this.updateSubscribers.clear();
      };
      MotionValue2.prototype.onRenderRequest = function(subscription) {
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
      };
      MotionValue2.prototype.attach = function(passiveEffect) {
        this.passiveEffect = passiveEffect;
      };
      MotionValue2.prototype.set = function(v, render) {
        if (render === void 0) {
          render = true;
        }
        if (!render || !this.passiveEffect) {
          this.updateAndNotify(v, render);
        } else {
          this.passiveEffect(v, this.updateAndNotify);
        }
      };
      MotionValue2.prototype.get = function() {
        return this.current;
      };
      MotionValue2.prototype.getPrevious = function() {
        return this.prev;
      };
      MotionValue2.prototype.getVelocity = function() {
        return this.canTrackVelocity ? (
          // These casts could be avoided if parseFloat would be typed better
          popmotion.velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
        ) : 0;
      };
      MotionValue2.prototype.start = function(animation) {
        var _this = this;
        this.stop();
        return new Promise(function(resolve) {
          _this.hasAnimated = true;
          _this.stopAnimation = animation(resolve);
        }).then(function() {
          return _this.clearAnimation();
        });
      };
      MotionValue2.prototype.stop = function() {
        if (this.stopAnimation)
          this.stopAnimation();
        this.clearAnimation();
      };
      MotionValue2.prototype.isAnimating = function() {
        return !!this.stopAnimation;
      };
      MotionValue2.prototype.clearAnimation = function() {
        this.stopAnimation = null;
      };
      MotionValue2.prototype.destroy = function() {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
      };
      return MotionValue2;
    }()
  );
  function motionValue(init) {
    return new MotionValue(init);
  }
  var testValueType = function(v) {
    return function(type) {
      return type.test(v);
    };
  };
  var auto = {
    test: function(v) {
      return v === "auto";
    },
    parse: function(v) {
      return v;
    }
  };
  var dimensionValueTypes = [styleValueTypes.number, styleValueTypes.px, styleValueTypes.percent, styleValueTypes.degrees, styleValueTypes.vw, styleValueTypes.vh, auto];
  var findDimensionValueType = function(v) {
    return dimensionValueTypes.find(testValueType(v));
  };
  var valueTypes = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(dimensionValueTypes), false), [styleValueTypes.color, styleValueTypes.complex], false);
  var findValueType = function(v) {
    return valueTypes.find(testValueType(v));
  };
  function setMotionValue(visualElement2, key, value) {
    if (visualElement2.hasValue(key)) {
      visualElement2.getValue(key).set(value);
    } else {
      visualElement2.addValue(key, motionValue(value));
    }
  }
  function setTarget(visualElement2, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
    _a.transition;
    var target = tslib.__rest(_a, ["transitionEnd", "transition"]);
    target = tslib.__assign(tslib.__assign({}, target), transitionEnd);
    for (var key in target) {
      var value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement2, key, value);
    }
  }
  function setVariants(visualElement2, variantLabels) {
    var reversedLabels = tslib.__spreadArray([], tslib.__read(variantLabels), false).reverse();
    reversedLabels.forEach(function(key) {
      var _a;
      var variant = visualElement2.getVariant(key);
      variant && setTarget(visualElement2, variant);
      (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
        setVariants(child, variantLabels);
      });
    });
  }
  function setValues(visualElement2, definition) {
    if (Array.isArray(definition)) {
      return setVariants(visualElement2, definition);
    } else if (typeof definition === "string") {
      return setVariants(visualElement2, [definition]);
    } else {
      setTarget(visualElement2, definition);
    }
  }
  function checkTargetForNewValues(visualElement2, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function(key2) {
      return !visualElement2.hasValue(key2);
    });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
      return;
    for (var i = 0; i < numNewValues; i++) {
      var key = newValueKeys[i];
      var targetValue = target[key];
      var value = null;
      if (Array.isArray(targetValue)) {
        value = targetValue[0];
      }
      if (value === null) {
        value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
      }
      if (value === void 0 || value === null)
        continue;
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && styleValueTypes.complex.test(targetValue)) {
        value = getAnimatableNone(key, targetValue);
      }
      visualElement2.addValue(key, motionValue(value));
      (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
      visualElement2.setBaseTarget(key, value);
    }
  }
  function getOriginFromTransition(key, transition) {
    if (!transition)
      return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
  }
  function getOrigin(target, transition, visualElement2) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
      origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
  }
  function animateVisualElement(visualElement2, definition, options) {
    if (options === void 0) {
      options = {};
    }
    visualElement2.notifyAnimationStart(definition);
    var animation;
    if (Array.isArray(definition)) {
      var animations2 = definition.map(function(variant) {
        return animateVariant(visualElement2, variant, options);
      });
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement2, definition, options);
    } else {
      var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
      animation = animateTarget(visualElement2, resolvedDefinition, options);
    }
    return animation.then(function() {
      return visualElement2.notifyAnimationComplete(definition);
    });
  }
  function animateVariant(visualElement2, variant, options) {
    var _a;
    if (options === void 0) {
      options = {};
    }
    var resolved = resolveVariant(visualElement2, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    var getAnimation2 = resolved ? function() {
      return animateTarget(visualElement2, resolved, options);
    } : function() {
      return Promise.resolve();
    };
    var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
      if (forwardDelay === void 0) {
        forwardDelay = 0;
      }
      var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
      return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : function() {
      return Promise.resolve();
    };
    var when = transition.when;
    if (when) {
      var _c = tslib.__read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
      return first().then(last);
    } else {
      return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
    }
  }
  function animateTarget(visualElement2, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = tslib.__rest(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
      transition = transitionOverride;
    var animations2 = [];
    var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
      var value = visualElement2.getValue(key);
      var valueTarget = target[key];
      if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      var valueTransition = tslib.__assign({ delay }, transition);
      if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
        valueTransition = tslib.__assign(tslib.__assign({}, valueTransition), { type: false, delay: 0 });
      }
      var animation = startAnimation(key, value, valueTarget, valueTransition);
      animations2.push(animation);
    }
    return Promise.all(animations2).then(function() {
      transitionEnd && setTarget(visualElement2, transitionEnd);
    });
  }
  function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) {
      delayChildren = 0;
    }
    if (staggerChildren === void 0) {
      staggerChildren = 0;
    }
    if (staggerDirection === void 0) {
      staggerDirection = 1;
    }
    var animations2 = [];
    var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1 ? function(i) {
      if (i === void 0) {
        i = 0;
      }
      return i * staggerChildren;
    } : function(i) {
      if (i === void 0) {
        i = 0;
      }
      return maxStaggerDuration - i * staggerChildren;
    };
    Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
      animations2.push(animateVariant(child, variant, tslib.__assign(tslib.__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
        return child.notifyAnimationComplete(variant);
      }));
    });
    return Promise.all(animations2);
  }
  function stopAnimation(visualElement2) {
    visualElement2.forEachValue(function(value) {
      return value.stop();
    });
  }
  function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
  }
  function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  var variantPriorityOrder = [
    exports.AnimationType.Animate,
    exports.AnimationType.InView,
    exports.AnimationType.Focus,
    exports.AnimationType.Hover,
    exports.AnimationType.Tap,
    exports.AnimationType.Drag,
    exports.AnimationType.Exit
  ];
  var reversePriorityOrder = tslib.__spreadArray([], tslib.__read(variantPriorityOrder), false).reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement2) {
    return function(animations2) {
      return Promise.all(animations2.map(function(_a) {
        var animation = _a.animation, options = _a.options;
        return animateVisualElement(visualElement2, animation, options);
      }));
    };
  }
  function createAnimationState(visualElement2) {
    var animate2 = animateList(visualElement2);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    var buildResolvedTypeValues = function(acc, definition) {
      var resolved = resolveVariant(visualElement2, definition);
      if (resolved) {
        resolved.transition;
        var transitionEnd = resolved.transitionEnd, target = tslib.__rest(resolved, ["transition", "transitionEnd"]);
        acc = tslib.__assign(tslib.__assign(tslib.__assign({}, acc), target), transitionEnd);
      }
      return acc;
    };
    function isAnimated(key) {
      return allAnimatedKeys[key] !== void 0;
    }
    function setAnimateFunction(makeAnimator) {
      animate2 = makeAnimator(visualElement2);
    }
    function animateChanges(options, changedActiveType) {
      var _a;
      var props = visualElement2.getProps();
      var context = visualElement2.getVariantContext(true) || {};
      var animations2 = [];
      var removedKeys = /* @__PURE__ */ new Set();
      var encounteredKeys = {};
      var removedVariantIndex = Infinity;
      var _loop_1 = function(i2) {
        var type = reversePriorityOrder[i2];
        var typeState = state[type];
        var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
        var propIsVariant = isVariantLabel(prop);
        var activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i2;
        var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = tslib.__assign({}, encounteredKeys);
        if (
          // If it isn't active and hasn't *just* been set as inactive
          !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
          !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
          isAnimationControls(prop) || typeof prop === "boolean"
        ) {
          return "continue";
        }
        var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        var shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
        type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
        i2 > removedVariantIndex && propIsVariant;
        var definitionList = Array.isArray(prop) ? prop : [prop];
        var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
        if (activeDelta === false)
          resolvedValues = {};
        var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
        var allKeys = tslib.__assign(tslib.__assign({}, prevResolvedValues), resolvedValues);
        var markToAnimate = function(key2) {
          shouldAnimateType = true;
          removedKeys.delete(key2);
          typeState.needsAnimating[key2] = true;
        };
        for (var key in allKeys) {
          var next = resolvedValues[key];
          var prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          if (next !== prev) {
            if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
              if (!shallowCompare(next, prev) || variantDidChange) {
                markToAnimate(key);
              } else {
                typeState.protectedKeys[key] = true;
              }
            } else if (next !== void 0) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = tslib.__assign(tslib.__assign({}, encounteredKeys), resolvedValues);
        }
        if (isInitialRender && visualElement2.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        if (shouldAnimateType && !isInherited) {
          animations2.push.apply(animations2, tslib.__spreadArray([], tslib.__read(definitionList.map(function(animation) {
            return {
              animation,
              options: tslib.__assign({ type }, options)
            };
          })), false));
        }
      };
      for (var i = 0; i < numAnimationTypes; i++) {
        _loop_1(i);
      }
      allAnimatedKeys = tslib.__assign({}, encounteredKeys);
      if (removedKeys.size) {
        var fallbackAnimation_1 = {};
        removedKeys.forEach(function(key) {
          var fallbackTarget = visualElement2.getBaseTarget(key);
          if (fallbackTarget !== void 0) {
            fallbackAnimation_1[key] = fallbackTarget;
          }
        });
        animations2.push({ animation: fallbackAnimation_1 });
      }
      var shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      return shouldAnimate ? animate2(animations2) : Promise.resolve();
    }
    function setActive(type, isActive, options) {
      var _a;
      if (state[type].isActive === isActive)
        return Promise.resolve();
      (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
        var _a2;
        return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
      });
      state[type].isActive = isActive;
      var animations2 = animateChanges(options, type);
      for (var key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      isAnimated,
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: function() {
        return state;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (isVariantLabels(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive) {
    if (isActive === void 0) {
      isActive = false;
    }
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    var _a;
    return _a = {}, _a[exports.AnimationType.Animate] = createTypeState(true), _a[exports.AnimationType.InView] = createTypeState(), _a[exports.AnimationType.Hover] = createTypeState(), _a[exports.AnimationType.Tap] = createTypeState(), _a[exports.AnimationType.Drag] = createTypeState(), _a[exports.AnimationType.Focus] = createTypeState(), _a[exports.AnimationType.Exit] = createTypeState(), _a;
  }
  var animations = {
    animation: makeRenderlessComponent(function(_a) {
      var visualElement2 = _a.visualElement, animate2 = _a.animate;
      visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
      if (isAnimationControls(animate2)) {
        React.useEffect(function() {
          return animate2.subscribe(visualElement2);
        }, [animate2]);
      }
    }),
    exit: makeRenderlessComponent(function(props) {
      var custom = props.custom, visualElement2 = props.visualElement;
      var _a = tslib.__read(usePresence(), 2), isPresent2 = _a[0], safeToRemove = _a[1];
      var presenceContext = React.useContext(PresenceContext);
      React.useEffect(function() {
        var _a2, _b;
        visualElement2.isPresent = isPresent2;
        var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Exit, !isPresent2, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
        !isPresent2 && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
      }, [isPresent2]);
    })
  };
  var PanSession = (
    /** @class */
    function() {
      function PanSession2(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        this.startEvent = null;
        this.lastMoveEvent = null;
        this.lastMoveEventInfo = null;
        this.handlers = {};
        this.updatePoint = function() {
          if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
            return;
          var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
          var isPanStarted = _this.startEvent !== null;
          var isDistancePastThreshold = popmotion.distance(info2.offset, { x: 0, y: 0 }) >= 3;
          if (!isPanStarted && !isDistancePastThreshold)
            return;
          var point2 = info2.point;
          var timestamp2 = sync.getFrameData().timestamp;
          _this.history.push(tslib.__assign(tslib.__assign({}, point2), { timestamp: timestamp2 }));
          var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
          if (!isPanStarted) {
            onStart && onStart(_this.lastMoveEvent, info2);
            _this.startEvent = _this.lastMoveEvent;
          }
          onMove && onMove(_this.lastMoveEvent, info2);
        };
        this.handlePointerMove = function(event2, info2) {
          _this.lastMoveEvent = event2;
          _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
          if (isMouseEvent(event2) && event2.buttons === 0) {
            _this.handlePointerUp(event2, info2);
            return;
          }
          sync__default["default"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function(event2, info2) {
          _this.end();
          var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
          var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
          if (_this.startEvent && onEnd) {
            onEnd(event2, panInfo);
          }
          onSessionEnd && onSessionEnd(event2, panInfo);
        };
        if (isTouchEvent(event) && event.touches.length > 1)
          return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = sync.getFrameData().timestamp;
        this.history = [tslib.__assign(tslib.__assign({}, point), { timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = popmotion.pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
      }
      PanSession2.prototype.updateHandlers = function(handlers) {
        this.handlers = handlers;
      };
      PanSession2.prototype.end = function() {
        this.removeListeners && this.removeListeners();
        sync.cancelSync.update(this.updatePoint);
      };
      return PanSession2;
    }()
  );
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo(_a, history) {
    var point = _a.point;
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
    if (time === 0) {
      return { x: 0, y: 0 };
    }
    var currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time,
      y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    if (target === void 0) {
      target = 0;
    }
    if (maxDistance === void 0) {
      maxDistance = 0.01;
    }
    return popmotion.distance(value, target) < maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin) {
    if (origin === void 0) {
      origin = 0.5;
    }
    delta.origin = origin;
    delta.originPoint = popmotion.mix(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
      delta.scale = 1;
    delta.translate = popmotion.mix(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
      delta.translate = 0;
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
    calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
  }
  function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
  }
  function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
  }
  function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
  }
  function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== void 0 && point < min) {
      point = elastic ? popmotion.mix(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? popmotion.mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      _a = tslib.__read([max, min], 2), min = _a[0], max = _a[1];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = popmotion.progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = popmotion.progress(source.min, source.max - targetLength, target.min);
    }
    return popmotion.clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic) {
    if (dragElastic === void 0) {
      dragElastic = defaultElastic;
    }
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
  }
  var createAxisDelta = function() {
    return {
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
    };
  };
  var createDelta = function() {
    return {
      x: createAxisDelta(),
      y: createAxisDelta()
    };
  };
  var createAxis = function() {
    return { min: 0, max: 0 };
  };
  var createBox = function() {
    return {
      x: createAxis(),
      y: createAxis()
    };
  };
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }
  function convertBoundingBoxToBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2)
      return point;
    var topLeft = transformPoint2({ x: point.left, y: point.top });
    var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }
  function isIdentityScale(scale) {
    return scale === void 0 || scale === 1;
  }
  function hasScale(_a) {
    var scale = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
  }
  function hasTransform(values) {
    return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
  }
  function hasTranslate(value) {
    return value && value !== "0%";
  }
  function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale === void 0) {
      scale = 1;
    }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
  }
  function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
    var _a, _b;
    if (isSharedTransition === void 0) {
      isSharedTransition = false;
    }
    var treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta = node.projectionDelta;
      if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
        continue;
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues);
      }
    }
  }
  function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
  }
  function transformAxis(axis, transforms, _a) {
    var _b = tslib.__read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
    var originPoint = popmotion.mix(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
  }
  var xKeys$1 = ["x", "scaleX", "originX"];
  var yKeys$1 = ["y", "scaleY", "originY"];
  function transformBox(box, transform2) {
    transformAxis(box.x, transform2, xKeys$1);
    transformAxis(box.y, transform2, yKeys$1);
  }
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode2.scroll;
    if (scroll) {
      translateAxis(viewportBox.x, scroll.x);
      translateAxis(viewportBox.y, scroll.y);
    }
    return viewportBox;
  }
  var elementDragControls = /* @__PURE__ */ new WeakMap();
  var VisualElementDragControls = (
    /** @class */
    function() {
      function VisualElementDragControls2(visualElement2) {
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        this.constraints = false;
        this.hasMutatedConstraints = false;
        this.elastic = createBox();
        this.visualElement = visualElement2;
      }
      VisualElementDragControls2.prototype.start = function(originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
        if (this.visualElement.isPresent === false)
          return;
        var onSessionStart = function(event) {
          _this.stopAnimation();
          if (snapToCursor) {
            _this.snapToCursor(extractEventInfo(event, "page").point);
          }
        };
        var onStart = function(event, info) {
          var _a2;
          var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
          if (drag2 && !dragPropagation) {
            if (_this.openGlobalLock)
              _this.openGlobalLock();
            _this.openGlobalLock = getGlobalLock(drag2);
            if (!_this.openGlobalLock)
              return;
          }
          _this.isDragging = true;
          _this.currentDirection = null;
          _this.resolveConstraints();
          if (_this.visualElement.projection) {
            _this.visualElement.projection.isAnimationBlocked = true;
            _this.visualElement.projection.target = void 0;
          }
          eachAxis(function(axis) {
            var _a3, _b3;
            var current = _this.getAxisMotionValue(axis).get() || 0;
            if (styleValueTypes.percent.test(current)) {
              var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
              if (measuredAxis) {
                var length_1 = calcLength(measuredAxis);
                current = length_1 * (parseFloat(current) / 100);
              }
            }
            _this.originPoint[axis] = current;
          });
          onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
          (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(exports.AnimationType.Drag, true);
        };
        var onMove = function(event, info) {
          var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
          if (!dragPropagation && !_this.openGlobalLock)
            return;
          var offset = info.offset;
          if (dragDirectionLock && _this.currentDirection === null) {
            _this.currentDirection = getCurrentDirection(offset);
            if (_this.currentDirection !== null) {
              onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
            }
            return;
          }
          _this.updateAxis("x", info.point, offset);
          _this.updateAxis("y", info.point, offset);
          _this.visualElement.syncRender();
          onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
        };
        var onSessionEnd = function(event, info) {
          return _this.stop(event, info);
        };
        this.panSession = new PanSession(originEvent, {
          onSessionStart,
          onStart,
          onMove,
          onSessionEnd
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
      };
      VisualElementDragControls2.prototype.stop = function(event, info) {
        var isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
          return;
        var velocity = info.velocity;
        this.startAnimation(velocity);
        var onDragEnd = this.getProps().onDragEnd;
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
      };
      VisualElementDragControls2.prototype.cancel = function() {
        var _a, _b;
        this.isDragging = false;
        if (this.visualElement.projection) {
          this.visualElement.projection.isAnimationBlocked = false;
        }
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = void 0;
        var dragPropagation = this.getProps().dragPropagation;
        if (!dragPropagation && this.openGlobalLock) {
          this.openGlobalLock();
          this.openGlobalLock = null;
        }
        (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(exports.AnimationType.Drag, false);
      };
      VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset) {
        var drag2 = this.getProps().drag;
        if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
          return;
        var axisValue = this.getAxisMotionValue(axis);
        var next = this.originPoint[axis] + offset[axis];
        if (this.constraints && this.constraints[axis]) {
          next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
      };
      VisualElementDragControls2.prototype.resolveConstraints = function() {
        var _this = this;
        var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        var layout = (this.visualElement.projection || {}).layout;
        var prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
          if (!this.constraints) {
            this.constraints = this.resolveRefConstraints();
          }
        } else {
          if (dragConstraints && layout) {
            this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
          } else {
            this.constraints = false;
          }
        }
        this.elastic = resolveDragElastic(dragElastic);
        if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
          eachAxis(function(axis) {
            if (_this.getAxisMotionValue(axis)) {
              _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
            }
          });
        }
      };
      VisualElementDragControls2.prototype.resolveRefConstraints = function() {
        var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
        if (!constraints || !isRefObject(constraints))
          return false;
        var constraintsElement = constraints.current;
        heyListen.invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        var projection = this.visualElement.projection;
        if (!projection || !projection.layout)
          return false;
        var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
        if (onMeasureDragConstraints) {
          var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
          this.hasMutatedConstraints = !!userConstraints;
          if (userConstraints) {
            measuredConstraints = convertBoundingBoxToBox(userConstraints);
          }
        }
        return measuredConstraints;
      };
      VisualElementDragControls2.prototype.startAnimation = function(velocity) {
        var _this = this;
        var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
        var constraints = this.constraints || {};
        var momentumAnimations = eachAxis(function(axis) {
          var _a2;
          if (!shouldDrag(axis, drag2, _this.currentDirection)) {
            return;
          }
          var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
          if (dragSnapToOrigin)
            transition = { min: 0, max: 0 };
          var bounceStiffness = dragElastic ? 200 : 1e6;
          var bounceDamping = dragElastic ? 40 : 1e7;
          var inertia = tslib.__assign(tslib.__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
          return _this.startAxisValueAnimation(axis, inertia);
        });
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
      };
      VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        return startAnimation(axis, axisValue, 0, transition);
      };
      VisualElementDragControls2.prototype.stopAnimation = function() {
        var _this = this;
        eachAxis(function(axis) {
          return _this.getAxisMotionValue(axis).stop();
        });
      };
      VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
        var _a, _b;
        var dragKey = "_drag" + axis.toUpperCase();
        var externalMotionValue = this.visualElement.getProps()[dragKey];
        return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
      };
      VisualElementDragControls2.prototype.snapToCursor = function(point) {
        var _this = this;
        eachAxis(function(axis) {
          var drag2 = _this.getProps().drag;
          if (!shouldDrag(axis, drag2, _this.currentDirection))
            return;
          var projection = _this.visualElement.projection;
          var axisValue = _this.getAxisMotionValue(axis);
          if (projection && projection.layout) {
            var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
            axisValue.set(point[axis] - popmotion.mix(min, max, 0.5));
          }
        });
      };
      VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
        var _this = this;
        var _a;
        var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
        var projection = this.visualElement.projection;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
          return;
        this.stopAnimation();
        var boxProgress = { x: 0, y: 0 };
        eachAxis(function(axis) {
          var axisValue = _this.getAxisMotionValue(axis);
          if (axisValue) {
            var latest = axisValue.get();
            boxProgress[axis] = calcOrigin({ min: latest, max: latest }, _this.constraints[axis]);
          }
        });
        var transformTemplate = this.visualElement.getProps().transformTemplate;
        this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
        (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        eachAxis(function(axis) {
          if (!shouldDrag(axis, drag2, null))
            return;
          var axisValue = _this.getAxisMotionValue(axis);
          var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
          axisValue.set(popmotion.mix(min, max, boxProgress[axis]));
        });
      };
      VisualElementDragControls2.prototype.addListeners = function() {
        var _this = this;
        var _a;
        elementDragControls.set(this.visualElement, this);
        var element = this.visualElement.getInstance();
        var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
          var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
          drag2 && dragListener && _this.start(event);
        });
        var measureDragConstraints = function() {
          var dragConstraints = _this.getProps().dragConstraints;
          if (isRefObject(dragConstraints)) {
            _this.constraints = _this.resolveRefConstraints();
          }
        };
        var projection = this.visualElement.projection;
        var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
          (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
          projection.updateLayout();
        }
        measureDragConstraints();
        var stopResizeListener = addDomEvent(window, "resize", function() {
          return _this.scalePositionWithinConstraints();
        });
        projection.addEventListener("didUpdate", function(_a2) {
          var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
          if (_this.isDragging && hasLayoutChanged) {
            eachAxis(function(axis) {
              var motionValue2 = _this.getAxisMotionValue(axis);
              if (!motionValue2)
                return;
              _this.originPoint[axis] += delta[axis].translate;
              motionValue2.set(motionValue2.get() + delta[axis].translate);
            });
            _this.visualElement.syncRender();
          }
        });
        return function() {
          stopResizeListener();
          stopPointerListener();
          stopMeasureLayoutListener();
        };
      };
      VisualElementDragControls2.prototype.getProps = function() {
        var props = this.visualElement.getProps();
        var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
        return tslib.__assign(tslib.__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
      };
      return VisualElementDragControls2;
    }()
  );
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) {
      lockThreshold = 10;
    }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }
  function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
    var dragControls = useConstant(function() {
      return new VisualElementDragControls(visualElement2);
    });
    React.useEffect(function() {
      return groupDragControls && groupDragControls.subscribe(dragControls);
    }, [dragControls, groupDragControls]);
    React.useEffect(function() {
      return dragControls.addListeners();
    }, [dragControls]);
  }
  function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = React.useRef(null);
    var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
    var handlers = {
      onSessionStart: onPanSessionStart,
      onStart: onPanStart,
      onMove: onPan,
      onEnd: function(event, info) {
        panSession.current = null;
        onPanEnd && onPanEnd(event, info);
      }
    };
    React.useEffect(function() {
      if (panSession.current !== null) {
        panSession.current.updateHandlers(handlers);
      }
    });
    function onPointerDown(event) {
      panSession.current = new PanSession(event, handlers, {
        transformPagePoint
      });
    }
    usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function() {
      return panSession.current && panSession.current.end();
    });
  }
  var drag = {
    pan: makeRenderlessComponent(usePanGesture),
    drag: makeRenderlessComponent(useDrag)
  };
  var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount"
  ];
  function createLifecycles() {
    var managers = names.map(function() {
      return new SubscriptionManager();
    });
    var propSubscriptions = {};
    var lifecycles = {
      clearAllListeners: function() {
        return managers.forEach(function(manager) {
          return manager.clear();
        });
      },
      updatePropListeners: function(props) {
        names.forEach(function(name) {
          var _a;
          var on = "on" + name;
          var propListener = props[on];
          (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
          if (propListener) {
            propSubscriptions[name] = lifecycles[on](propListener);
          }
        });
      }
    };
    managers.forEach(function(manager, i) {
      lifecycles["on" + names[i]] = function(handler) {
        return manager.add(handler);
      };
      lifecycles["notify" + names[i]] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return manager.notify.apply(manager, tslib.__spreadArray([], tslib.__read(args), false));
      };
    });
    return lifecycles;
  }
  function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
      var nextValue = next[key];
      var prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          var existingValue = element.getValue(key);
          !existingValue.hasAnimated && existingValue.set(nextValue);
        } else {
          element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
        }
      }
    }
    for (var key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }
  var visualElement = function(_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
    return function(_a2, options) {
      var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
      if (options === void 0) {
        options = {};
      }
      var isMounted = false;
      var latestValues = visualState.latestValues, renderState = visualState.renderState;
      var instance;
      var lifecycles = createLifecycles();
      var values = /* @__PURE__ */ new Map();
      var valueSubscriptions = /* @__PURE__ */ new Map();
      var prevMotionValues = {};
      var baseTarget = tslib.__assign({}, latestValues);
      var removeFromVariantTree;
      function render() {
        if (!instance || !isMounted)
          return;
        triggerBuild();
        renderInstance(instance, renderState, props.style, element.projection);
      }
      function triggerBuild() {
        build(element, renderState, latestValues, options, props);
      }
      function update() {
        lifecycles.notifyUpdate(latestValues);
      }
      function bindToMotionValue(key2, value2) {
        var removeOnChange = value2.onChange(function(latestValue) {
          latestValues[key2] = latestValue;
          props.onUpdate && sync__default["default"].update(update, false, true);
        });
        var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
        valueSubscriptions.set(key2, function() {
          removeOnChange();
          removeOnRenderRequest();
        });
      }
      var initialMotionValues = scrapeMotionValuesFromProps2(props);
      for (var key in initialMotionValues) {
        var value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
      var isControllingVariants = checkIfControllingVariants(props);
      var isVariantNode = checkIfVariantNode(props);
      var element = tslib.__assign(tslib.__assign({
        treeType,
        /**
         * This is a mirror of the internal instance prop, which keeps
         * VisualElement type-compatible with React's RefObject.
         */
        current: null,
        /**
         * The depth of this visual element within the visual element tree.
         */
        depth: parent ? parent.depth + 1 : 0,
        parent,
        children: /* @__PURE__ */ new Set(),
        /**
         *
         */
        presenceId,
        shouldReduceMotion,
        /**
         * If this component is part of the variant tree, it should track
         * any children that are also part of the tree. This is essentially
         * a shadow tree to simplify logic around how to stagger over children.
         */
        variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
        /**
         * Whether this instance is visible. This can be changed imperatively
         * by the projection tree, is analogous to CSS's visibility in that
         * hidden elements should take up layout, and needs enacting by the configured
         * render function.
         */
        isVisible: void 0,
        /**
         * Normally, if a component is controlled by a parent's variants, it can
         * rely on that ancestor to trigger animations further down the tree.
         * However, if a component is created after its parent is mounted, the parent
         * won't trigger that mount animation so the child needs to.
         *
         * TODO: This might be better replaced with a method isParentMounted
         */
        manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
        /**
         * This can be set by AnimatePresence to force components that mount
         * at the same time as it to mount as if they have initial={false} set.
         */
        blockInitialAnimation,
        /**
         * Determine whether this component has mounted yet. This is mostly used
         * by variant children to determine whether they need to trigger their
         * own animations on mount.
         */
        isMounted: function() {
          return Boolean(instance);
        },
        mount: function(newInstance) {
          isMounted = true;
          instance = element.current = newInstance;
          if (element.projection) {
            element.projection.mount(newInstance);
          }
          if (isVariantNode && parent && !isControllingVariants) {
            removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
          }
          values.forEach(function(value2, key2) {
            return bindToMotionValue(key2, value2);
          });
          parent === null || parent === void 0 ? void 0 : parent.children.add(element);
          element.setProps(props);
        },
        /**
         *
         */
        unmount: function() {
          var _a3;
          (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
          sync.cancelSync.update(update);
          sync.cancelSync.render(render);
          valueSubscriptions.forEach(function(remove) {
            return remove();
          });
          removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
          parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
          lifecycles.clearAllListeners();
          instance = void 0;
          isMounted = false;
        },
        /**
         * Add a child visual element to our set of children.
         */
        addVariantChild: function(child) {
          var _a3;
          var closestVariantNode = element.getClosestVariantNode();
          if (closestVariantNode) {
            (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
            return function() {
              return closestVariantNode.variantChildren.delete(child);
            };
          }
        },
        sortNodePosition: function(other) {
          if (!sortNodePosition || treeType !== other.treeType)
            return 0;
          return sortNodePosition(element.getInstance(), other.getInstance());
        },
        /**
         * Returns the closest variant node in the tree starting from
         * this visual element.
         */
        getClosestVariantNode: function() {
          return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
        },
        /**
         * Expose the latest layoutId prop.
         */
        getLayoutId: function() {
          return props.layoutId;
        },
        /**
         * Returns the current instance.
         */
        getInstance: function() {
          return instance;
        },
        /**
         * Get/set the latest static values.
         */
        getStaticValue: function(key2) {
          return latestValues[key2];
        },
        setStaticValue: function(key2, value2) {
          return latestValues[key2] = value2;
        },
        /**
         * Returns the latest motion value state. Currently only used to take
         * a snapshot of the visual element - perhaps this can return the whole
         * visual state
         */
        getLatestValues: function() {
          return latestValues;
        },
        /**
         * Set the visiblity of the visual element. If it's changed, schedule
         * a render to reflect these changes.
         */
        setVisibility: function(visibility) {
          if (element.isVisible === visibility)
            return;
          element.isVisible = visibility;
          element.scheduleRender();
        },
        /**
         * Make a target animatable by Popmotion. For instance, if we're
         * trying to animate width from 100px to 100vw we need to measure 100vw
         * in pixels to determine what we really need to animate to. This is also
         * pluggable to support Framer's custom value types like Color,
         * and CSS variables.
         */
        makeTargetAnimatable: function(target, canMutate) {
          if (canMutate === void 0) {
            canMutate = true;
          }
          return makeTargetAnimatable(element, target, props, canMutate);
        },
        /**
         * Measure the current viewport box with or without transforms.
         * Only measures axis-aligned boxes, rotate and skew must be manually
         * removed with a re-render to work.
         */
        measureViewportBox: function() {
          return measureViewportBox2(instance, props);
        },
        // Motion values ========================
        /**
         * Add a motion value and bind it to this visual element.
         */
        addValue: function(key2, value2) {
          if (element.hasValue(key2))
            element.removeValue(key2);
          values.set(key2, value2);
          latestValues[key2] = value2.get();
          bindToMotionValue(key2, value2);
        },
        /**
         * Remove a motion value and unbind any active subscriptions.
         */
        removeValue: function(key2) {
          var _a3;
          values.delete(key2);
          (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
          valueSubscriptions.delete(key2);
          delete latestValues[key2];
          removeValueFromRenderState(key2, renderState);
        },
        /**
         * Check whether we have a motion value for this key
         */
        hasValue: function(key2) {
          return values.has(key2);
        },
        /**
         * Get a motion value for this key. If called with a default
         * value, we'll create one if none exists.
         */
        getValue: function(key2, defaultValue) {
          var value2 = values.get(key2);
          if (value2 === void 0 && defaultValue !== void 0) {
            value2 = motionValue(defaultValue);
            element.addValue(key2, value2);
          }
          return value2;
        },
        /**
         * Iterate over our motion values.
         */
        forEachValue: function(callback) {
          return values.forEach(callback);
        },
        /**
         * If we're trying to animate to a previously unencountered value,
         * we need to check for it in our state and as a last resort read it
         * directly from the instance (which might have performance implications).
         */
        readValue: function(key2) {
          var _a3;
          return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
        },
        /**
         * Set the base target to later animate back to. This is currently
         * only hydrated on creation and when we first read a value.
         */
        setBaseTarget: function(key2, value2) {
          baseTarget[key2] = value2;
        },
        /**
         * Find the base target for a value thats been removed from all animation
         * props.
         */
        getBaseTarget: function(key2) {
          if (getBaseTarget) {
            var target = getBaseTarget(props, key2);
            if (target !== void 0 && !isMotionValue(target))
              return target;
          }
          return baseTarget[key2];
        }
      }, lifecycles), {
        /**
         * Build the renderer state based on the latest visual state.
         */
        build: function() {
          triggerBuild();
          return renderState;
        },
        /**
         * Schedule a render on the next animation frame.
         */
        scheduleRender: function() {
          sync__default["default"].render(render, false, true);
        },
        /**
         * Synchronously fire render. It's prefered that we batch renders but
         * in many circumstances, like layout measurement, we need to run this
         * synchronously. However in those instances other measures should be taken
         * to batch reads/writes.
         */
        syncRender: render,
        /**
         * Update the provided props. Ensure any newly-added motion values are
         * added to our map, old ones removed, and listeners updated.
         */
        setProps: function(newProps) {
          if (newProps.transformTemplate || props.transformTemplate) {
            element.scheduleRender();
          }
          props = newProps;
          lifecycles.updatePropListeners(newProps);
          prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps2(props), prevMotionValues);
        },
        getProps: function() {
          return props;
        },
        // Variants ==============================
        /**
         * Returns the variant definition with a given name.
         */
        getVariant: function(name) {
          var _a3;
          return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
        },
        /**
         * Returns the defined default transition on this component.
         */
        getDefaultTransition: function() {
          return props.transition;
        },
        getTransformPagePoint: function() {
          return props.transformPagePoint;
        },
        /**
         * Used by child variant nodes to get the closest ancestor variant props.
         */
        getVariantContext: function(startAtParent) {
          if (startAtParent === void 0) {
            startAtParent = false;
          }
          if (startAtParent)
            return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
          if (!isControllingVariants) {
            var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
            if (props.initial !== void 0) {
              context_1.initial = props.initial;
            }
            return context_1;
          }
          var context = {};
          for (var i = 0; i < numVariantProps; i++) {
            var name_1 = variantProps[i];
            var prop = props[name_1];
            if (isVariantLabel(prop) || prop === false) {
              context[name_1] = prop;
            }
          }
          return context;
        }
      });
      return element;
    };
  };
  var variantProps = tslib.__spreadArray(["initial"], tslib.__read(variantPriorityOrder), false);
  var numVariantProps = variantProps.length;
  function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
  }
  var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
      return [,];
    var _a = tslib.__read(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    heyListen.invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
    var _a = tslib.__read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    if (!token)
      return;
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      return resolved.trim();
    } else if (isCSSVariable(fallback)) {
      return getVariableValue(fallback, element, depth + 1);
    } else {
      return fallback;
    }
  }
  function resolveCSSVariables(visualElement2, _a, transitionEnd) {
    var _b;
    var target = tslib.__rest(_a, []);
    var element = visualElement2.getInstance();
    if (!(element instanceof Element))
      return { target, transitionEnd };
    if (transitionEnd) {
      transitionEnd = tslib.__assign({}, transitionEnd);
    }
    visualElement2.forEachValue(function(value) {
      var current2 = value.get();
      if (!isCSSVariable(current2))
        return;
      var resolved2 = getVariableValue(current2, element);
      if (resolved2)
        value.set(resolved2);
    });
    for (var key in target) {
      var current = target[key];
      if (!isCSSVariable(current))
        continue;
      var resolved = getVariableValue(current, element);
      if (!resolved)
        continue;
      target[key] = resolved;
      if (transitionEnd)
        (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
    }
    return { target, transitionEnd };
  }
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y"
  ]);
  var isPositionalKey = function(key) {
    return positionalKeys.has(key);
  };
  var hasPositionalKey = function(target) {
    return Object.keys(target).some(isPositionalKey);
  };
  var setAndResetVelocity = function(value, to) {
    value.set(to, false);
    value.set(to);
  };
  var isNumOrPxType = function(v) {
    return v === styleValueTypes.number || v === styleValueTypes.px;
  };
  var BoundingBoxDimension;
  (function(BoundingBoxDimension2) {
    BoundingBoxDimension2["width"] = "width";
    BoundingBoxDimension2["height"] = "height";
    BoundingBoxDimension2["left"] = "left";
    BoundingBoxDimension2["right"] = "right";
    BoundingBoxDimension2["top"] = "top";
    BoundingBoxDimension2["bottom"] = "bottom";
  })(BoundingBoxDimension || (BoundingBoxDimension = {}));
  var getPosFromMatrix = function(matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
  };
  var getTranslateFromMatrix = function(pos2, pos3) {
    return function(_bbox, _a) {
      var transform2 = _a.transform;
      if (transform2 === "none" || !transform2)
        return 0;
      var matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
      } else {
        var matrix = transform2.match(/^matrix\((.+)\)$/);
        if (matrix) {
          return getPosFromMatrix(matrix[1], pos2);
        } else {
          return 0;
        }
      }
    };
  };
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformProps.filter(function(key) {
    return !transformKeys.has(key);
  });
  function removeNonTranslationalTransform(visualElement2) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    if (removedTransforms.length)
      visualElement2.syncRender();
    return removedTransforms;
  }
  var positionalValues = {
    // Dimensions
    width: function(_a, _b) {
      var x = _a.x;
      var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
      return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function(_a, _b) {
      var y = _a.y;
      var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
      return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function(_bbox, _a) {
      var top = _a.top;
      return parseFloat(top);
    },
    left: function(_bbox, _a) {
      var left = _a.left;
      return parseFloat(left);
    },
    bottom: function(_a, _b) {
      var y = _a.y;
      var top = _b.top;
      return parseFloat(top) + (y.max - y.min);
    },
    right: function(_a, _b) {
      var x = _a.x;
      var left = _b.left;
      return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
  };
  var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
    var originBbox = visualElement2.measureViewportBox();
    var element = visualElement2.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display;
    var origin = {};
    if (display === "none") {
      visualElement2.setStaticValue("display", target.display || "block");
    }
    changedKeys.forEach(function(key) {
      origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    visualElement2.syncRender();
    var targetBbox = visualElement2.measureViewportBox();
    changedKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      setAndResetVelocity(value, origin[key]);
      target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
  };
  var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
    if (origin === void 0) {
      origin = {};
    }
    if (transitionEnd === void 0) {
      transitionEnd = {};
    }
    target = tslib.__assign({}, target);
    transitionEnd = tslib.__assign({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (!visualElement2.hasValue(key))
        return;
      var from = origin[key];
      var fromType = findDimensionValueType(from);
      var to = target[key];
      var toType;
      if (isKeyframesTarget(to)) {
        var numKeyframes = to.length;
        var fromIndex = to[0] === null ? 1 : 0;
        from = to[fromIndex];
        fromType = findDimensionValueType(from);
        for (var i = fromIndex; i < numKeyframes; i++) {
          if (!toType) {
            toType = findDimensionValueType(to[i]);
            heyListen.invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
          } else {
            heyListen.invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
          }
        }
      } else {
        toType = findDimensionValueType(to);
      }
      if (fromType !== toType) {
        if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
          var current = value.get();
          if (typeof current === "string") {
            value.set(parseFloat(current));
          }
          if (typeof to === "string") {
            target[key] = parseFloat(to);
          } else if (Array.isArray(to) && toType === styleValueTypes.px) {
            target[key] = to.map(parseFloat);
          }
        } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
          if (from === 0) {
            value.set(toType.transform(from));
          } else {
            target[key] = fromType.transform(to);
          }
        } else {
          if (!hasAttemptedToRemoveTransformValues) {
            removedTransformValues = removeNonTranslationalTransform(visualElement2);
            hasAttemptedToRemoveTransformValues = true;
          }
          changedValueTypeKeys.push(key);
          transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
          setAndResetVelocity(value, to);
        }
      }
    });
    if (changedValueTypeKeys.length) {
      var scrollY_1 = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
      var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
      if (removedTransformValues.length) {
        removedTransformValues.forEach(function(_a) {
          var _b = tslib.__read(_a, 2), key = _b[0], value = _b[1];
          visualElement2.getValue(key).set(value);
        });
      }
      visualElement2.syncRender();
      if (scrollY_1 !== null)
        window.scrollTo({ top: scrollY_1 });
      return { target: convertedTarget, transitionEnd };
    } else {
      return { target, transitionEnd };
    }
  };
  function unitConversion(visualElement2, target, origin, transitionEnd) {
    return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
  }
  var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement2, target, origin, transitionEnd);
  };
  function getComputedStyle$1(element) {
    return window.getComputedStyle(element);
  }
  var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function(domElement, key) {
      if (isTransformProp(key)) {
        var defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      } else {
        var computedStyle = getComputedStyle$1(domElement);
        return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      }
    },
    sortNodePosition: function(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function(props, key) {
      var _a;
      return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function(element, _a) {
      var transformPagePoint = _a.transformPagePoint;
      return measureViewportBox(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function(element, domElement, props) {
      var transformTemplate = props.transformTemplate;
      domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      element.scheduleRender();
    },
    restoreTransform: function(instance, mutableState) {
      instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function(key, _a) {
      var vars = _a.vars, style = _a.style;
      delete vars[key];
      delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function(element, _a, _b, isMounted) {
      var transformValues = _b.transformValues;
      if (isMounted === void 0) {
        isMounted = true;
      }
      var transition = _a.transition, transitionEnd = _a.transitionEnd, target = tslib.__rest(_a, ["transition", "transitionEnd"]);
      var origin = getOrigin(target, transition || {}, element);
      if (transformValues) {
        if (transitionEnd)
          transitionEnd = transformValues(transitionEnd);
        if (target)
          target = transformValues(target);
        if (origin)
          origin = transformValues(origin);
      }
      if (isMounted) {
        checkTargetForNewValues(element, target, origin);
        var parsed = parseDomVariant(element, target, origin, transitionEnd);
        transitionEnd = parsed.transitionEnd;
        target = parsed.target;
      }
      return tslib.__assign({ transition, transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    build: function(element, renderState, latestValues, options, props) {
      if (element.isVisible !== void 0) {
        renderState.style.visibility = element.isVisible ? "visible" : "hidden";
      }
      buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    },
    render: renderHTML
  };
  var htmlVisualElement = visualElement(htmlConfig);
  var svgVisualElement = visualElement(tslib.__assign(tslib.__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
    return props[key];
  }, readValueFromInstance: function(domElement, key) {
    var _a;
    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  }, scrapeMotionValuesFromProps, build: function(_element, renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  }, render: renderSVG }));
  var createDomVisualElement = function(Component, options) {
    return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
  };
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  var correctBorderRadius = {
    correct: function(latest, node) {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (styleValueTypes.px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      var x = pixelsToPercent(latest, node.target.x);
      var y = pixelsToPercent(latest, node.target.y);
      return "".concat(x, "% ").concat(y, "%");
    }
  };
  var varToken = "_$css";
  var correctBoxShadow = {
    correct: function(latest, _a) {
      var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
      var original = latest;
      var containsCSSVariables = latest.includes("var(");
      var cssVariables = [];
      if (containsCSSVariables) {
        latest = latest.replace(cssVariableRegex, function(match) {
          cssVariables.push(match);
          return varToken;
        });
      }
      var shadow = styleValueTypes.complex.parse(latest);
      if (shadow.length > 5)
        return original;
      var template = styleValueTypes.complex.createTransformer(latest);
      var offset = typeof shadow[0] !== "number" ? 1 : 0;
      var xScale = projectionDelta.x.scale * treeScale.x;
      var yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      var averageScale = popmotion.mix(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      var output = template(shadow);
      if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function() {
          var cssVariable = cssVariables[i_1];
          i_1++;
          return cssVariable;
        });
      }
      return output;
    }
  };
  var MeasureLayoutWithContext = (
    /** @class */
    function(_super) {
      tslib.__extends(MeasureLayoutWithContext2, _super);
      function MeasureLayoutWithContext2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MeasureLayoutWithContext2.prototype.componentDidMount = function() {
        var _this = this;
        var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
        var projection = visualElement2.projection;
        addScaleCorrector(defaultScaleCorrectors);
        if (projection) {
          if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
            layoutGroup.group.add(projection);
          if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
            switchLayoutGroup.register(projection);
          }
          projection.root.didUpdate();
          projection.addEventListener("animationComplete", function() {
            _this.safeToRemove();
          });
          projection.setOptions(tslib.__assign(tslib.__assign({}, projection.options), { onExitComplete: function() {
            return _this.safeToRemove();
          } }));
        }
        globalProjectionState.hasEverUpdated = true;
      };
      MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
        var _this = this;
        var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent2 = _a.isPresent;
        var projection = visualElement2.projection;
        if (!projection)
          return null;
        projection.isPresent = isPresent2;
        if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
          projection.willUpdate();
        } else {
          this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent2) {
          if (isPresent2) {
            projection.promote();
          } else if (!projection.relegate()) {
            sync__default["default"].postRender(function() {
              var _a2;
              if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
                _this.safeToRemove();
              }
            });
          }
        }
        return null;
      };
      MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
        var projection = this.props.visualElement.projection;
        if (projection) {
          projection.root.didUpdate();
          if (!projection.currentAnimation && projection.isLead()) {
            this.safeToRemove();
          }
        }
      };
      MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
        var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
        var projection = visualElement2.projection;
        if (projection) {
          projection.scheduleCheckAfterUnmount();
          if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
            layoutGroup.group.remove(projection);
          if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
            promoteContext.deregister(projection);
        }
      };
      MeasureLayoutWithContext2.prototype.safeToRemove = function() {
        var safeToRemove = this.props.safeToRemove;
        safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
      };
      MeasureLayoutWithContext2.prototype.render = function() {
        return null;
      };
      return MeasureLayoutWithContext2;
    }(React__default["default"].Component)
  );
  function MeasureLayout(props) {
    var _a = tslib.__read(usePresence(), 2), isPresent2 = _a[0], safeToRemove = _a[1];
    var layoutGroup = React.useContext(LayoutGroupContext);
    return React__default["default"].createElement(MeasureLayoutWithContext, tslib.__assign({}, props, { layoutGroup, switchLayoutGroup: React.useContext(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove }));
  }
  var defaultScaleCorrectors = {
    borderRadius: tslib.__assign(tslib.__assign({}, correctBorderRadius), { applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ] }),
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };
  var layoutFeatures = {
    measureLayout: MeasureLayout
  };
  function animate(from, to, transition) {
    if (transition === void 0) {
      transition = {};
    }
    var value = isMotionValue(from) ? from : motionValue(from);
    startAnimation("", value, to, transition);
    return {
      stop: function() {
        return value.stop();
      },
      isAnimating: function() {
        return value.isAnimating();
      }
    };
  }
  var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  var numBorders = borders.length;
  var asNumber = function(value) {
    return typeof value === "string" ? parseFloat(value) : value;
  };
  var isPx = function(value) {
    return typeof value === "number" || styleValueTypes.px.test(value);
  };
  function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    var _a, _b, _c, _d;
    if (shouldCrossfadeOpacity) {
      target.opacity = popmotion.mix(
        0,
        // (follow?.opacity as number) ?? 0,
        // TODO Reinstate this if only child
        (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1,
        easeCrossfadeIn(progress)
      );
      target.opacityExit = popmotion.mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress));
    } else if (isOnlyMember) {
      target.opacity = popmotion.mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress);
    }
    for (var i = 0; i < numBorders; i++) {
      var borderLabel = "border".concat(borders[i], "Radius");
      var followRadius = getRadius(follow, borderLabel);
      var leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(popmotion.mix(asNumber(followRadius), asNumber(leadRadius), progress), 0);
        if (styleValueTypes.percent.test(leadRadius) || styleValueTypes.percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = popmotion.mix(follow.rotate || 0, lead.rotate || 0, progress);
    }
  }
  function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
  }
  var easeCrossfadeIn = compress(0, 0.5, popmotion.circOut);
  var easeCrossfadeOut = compress(0.5, 0.95, popmotion.linear);
  function compress(min, max, easing) {
    return function(p) {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(popmotion.progress(min, max, p));
    };
  }
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }
  function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate, scale, origin, boxScale, originAxis, sourceAxis) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale === void 0) {
      scale = 1;
    }
    if (origin === void 0) {
      origin = 0.5;
    }
    if (originAxis === void 0) {
      originAxis = axis;
    }
    if (sourceAxis === void 0) {
      sourceAxis = axis;
    }
    if (styleValueTypes.percent.test(translate)) {
      translate = parseFloat(translate);
      var relativeProgress = popmotion.mix(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    var originPoint = popmotion.mix(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
    var _b = tslib.__read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
    removeAxisTransforms(box.y, transforms, yKeys, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
  }
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function boxEquals(a, b) {
    return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
  }
  var NodeStack = (
    /** @class */
    function() {
      function NodeStack2() {
        this.members = [];
      }
      NodeStack2.prototype.add = function(node) {
        addUniqueItem(this.members, node);
        node.scheduleRender();
      };
      NodeStack2.prototype.remove = function(node) {
        removeItem(this.members, node);
        if (node === this.prevLead) {
          this.prevLead = void 0;
        }
        if (node === this.lead) {
          var prevLead = this.members[this.members.length - 1];
          if (prevLead) {
            this.promote(prevLead);
          }
        }
      };
      NodeStack2.prototype.relegate = function(node) {
        var indexOfNode = this.members.findIndex(function(member2) {
          return node === member2;
        });
        if (indexOfNode === 0)
          return false;
        var prevLead;
        for (var i = indexOfNode; i >= 0; i--) {
          var member = this.members[i];
          if (member.isPresent !== false) {
            prevLead = member;
            break;
          }
        }
        if (prevLead) {
          this.promote(prevLead);
          return true;
        } else {
          return false;
        }
      };
      NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
        var _a;
        var prevLead = this.lead;
        if (node === prevLead)
          return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
          prevLead.instance && prevLead.scheduleRender();
          node.scheduleRender();
          node.resumeFrom = prevLead;
          if (preserveFollowOpacity) {
            node.resumeFrom.preserveOpacity = true;
          }
          if (prevLead.snapshot) {
            node.snapshot = prevLead.snapshot;
            node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
            node.snapshot.isShared = true;
          }
          if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
            node.isLayoutDirty = true;
          }
          var crossfade = node.options.crossfade;
          if (crossfade === false) {
            prevLead.hide();
          }
        }
      };
      NodeStack2.prototype.exitAnimationComplete = function() {
        this.members.forEach(function(node) {
          var _a, _b, _c, _d, _e;
          (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
          (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
        });
      };
      NodeStack2.prototype.scheduleRender = function() {
        this.members.forEach(function(node) {
          node.instance && node.scheduleRender(false);
        });
      };
      NodeStack2.prototype.removeLeadSnapshot = function() {
        if (this.lead && this.lead.snapshot) {
          this.lead.snapshot = void 0;
        }
      };
      return NodeStack2;
    }()
  );
  var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var transform2 = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
    transform2 += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
    if (latestTransform) {
      var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
      if (rotate)
        transform2 += "rotate(".concat(rotate, "deg) ");
      if (rotateX)
        transform2 += "rotateX(".concat(rotateX, "deg) ");
      if (rotateY)
        transform2 += "rotateY(".concat(rotateY, "deg) ");
    }
    var elementScaleX = delta.x.scale * treeScale.x;
    var elementScaleY = delta.y.scale * treeScale.y;
    transform2 += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
    return transform2 === identityProjection ? "none" : transform2;
  }
  var compareByDepth = function(a, b) {
    return a.depth - b.depth;
  };
  var FlatTree = (
    /** @class */
    function() {
      function FlatTree2() {
        this.children = [];
        this.isDirty = false;
      }
      FlatTree2.prototype.add = function(child) {
        addUniqueItem(this.children, child);
        this.isDirty = true;
      };
      FlatTree2.prototype.remove = function(child) {
        removeItem(this.children, child);
        this.isDirty = true;
      };
      FlatTree2.prototype.forEach = function(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
      };
      return FlatTree2;
    }()
  );
  var animationTarget = 1e3;
  function createProjectionNode(_a) {
    var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, checkIsScrollRoot = _a.checkIsScrollRoot, resetTransform = _a.resetTransform;
    return (
      /** @class */
      function() {
        function ProjectionNode(id2, latestValues, parent) {
          var _this = this;
          if (latestValues === void 0) {
            latestValues = {};
          }
          if (parent === void 0) {
            parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
          }
          this.children = /* @__PURE__ */ new Set();
          this.options = {};
          this.isTreeAnimating = false;
          this.isAnimationBlocked = false;
          this.isLayoutDirty = false;
          this.updateManuallyBlocked = false;
          this.updateBlockedByResize = false;
          this.isUpdating = false;
          this.isSVG = false;
          this.needsReset = false;
          this.shouldResetTransform = false;
          this.treeScale = { x: 1, y: 1 };
          this.eventHandlers = /* @__PURE__ */ new Map();
          this.potentialNodes = /* @__PURE__ */ new Map();
          this.checkUpdateFailed = function() {
            if (_this.isUpdating) {
              _this.isUpdating = false;
              _this.clearAllSnapshots();
            }
          };
          this.updateProjection = function() {
            _this.nodes.forEach(resolveTargetDelta);
            _this.nodes.forEach(calcProjection);
          };
          this.hasProjected = false;
          this.isVisible = true;
          this.animationProgress = 0;
          this.sharedNodes = /* @__PURE__ */ new Map();
          this.id = id2;
          this.latestValues = latestValues;
          this.root = parent ? parent.root || parent : this;
          this.path = parent ? tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(parent.path), false), [parent], false) : [];
          this.parent = parent;
          this.depth = parent ? parent.depth + 1 : 0;
          id2 && this.root.registerPotentialNode(id2, this);
          for (var i = 0; i < this.path.length; i++) {
            this.path[i].shouldResetTransform = true;
          }
          if (this.root === this)
            this.nodes = new FlatTree();
        }
        ProjectionNode.prototype.addEventListener = function(name, handler) {
          if (!this.eventHandlers.has(name)) {
            this.eventHandlers.set(name, new SubscriptionManager());
          }
          return this.eventHandlers.get(name).add(handler);
        };
        ProjectionNode.prototype.notifyListeners = function(name) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          var subscriptionManager = this.eventHandlers.get(name);
          subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, tslib.__spreadArray([], tslib.__read(args), false));
        };
        ProjectionNode.prototype.hasListeners = function(name) {
          return this.eventHandlers.has(name);
        };
        ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
          this.potentialNodes.set(id2, node);
        };
        ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
          var _this = this;
          var _a2;
          if (isLayoutDirty === void 0) {
            isLayoutDirty = false;
          }
          if (this.instance)
            return;
          this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
          this.instance = instance;
          var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
          if (visualElement2 && !visualElement2.getInstance()) {
            visualElement2.mount(instance);
          }
          this.root.nodes.add(this);
          (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
          this.id && this.root.potentialNodes.delete(this.id);
          if (isLayoutDirty && (layout || layoutId)) {
            this.isLayoutDirty = true;
          }
          if (attachResizeListener) {
            var unblockTimeout_1;
            var resizeUnblockUpdate_1 = function() {
              return _this.root.updateBlockedByResize = false;
            };
            attachResizeListener(instance, function() {
              _this.root.updateBlockedByResize = true;
              clearTimeout(unblockTimeout_1);
              unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
              if (globalProjectionState.hasAnimatedSinceResize) {
                globalProjectionState.hasAnimatedSinceResize = false;
                _this.nodes.forEach(finishAnimation);
              }
            });
          }
          if (layoutId) {
            this.root.registerSharedNode(layoutId, this);
          }
          if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
            this.addEventListener("didUpdate", function(_a3) {
              var _b2, _c, _d, _e, _f;
              var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
              if (_this.isTreeAnimationBlocked()) {
                _this.target = void 0;
                _this.relativeTarget = void 0;
                return;
              }
              var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
              var _g = visualElement2.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
              var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
              var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
              if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
                if (_this.resumeFrom) {
                  _this.resumingFrom = _this.resumeFrom;
                  _this.resumingFrom.resumingFrom = void 0;
                }
                _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                var animationOptions = tslib.__assign(tslib.__assign({}, getValueTransition(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
                if (visualElement2.shouldReduceMotion) {
                  animationOptions.delay = 0;
                  animationOptions.type = false;
                }
                _this.startAnimation(animationOptions);
              } else {
                if (!hasLayoutChanged && _this.animationProgress === 0) {
                  _this.finishAnimation();
                }
                _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
              }
              _this.targetLayout = newLayout;
            });
          }
        };
        ProjectionNode.prototype.unmount = function() {
          var _a2, _b;
          this.options.layoutId && this.willUpdate();
          this.root.nodes.remove(this);
          (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
          (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
          this.instance = void 0;
          sync.cancelSync.preRender(this.updateProjection);
        };
        ProjectionNode.prototype.blockUpdate = function() {
          this.updateManuallyBlocked = true;
        };
        ProjectionNode.prototype.unblockUpdate = function() {
          this.updateManuallyBlocked = false;
        };
        ProjectionNode.prototype.isUpdateBlocked = function() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        };
        ProjectionNode.prototype.isTreeAnimationBlocked = function() {
          var _a2;
          return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
        };
        ProjectionNode.prototype.startUpdate = function() {
          var _a2;
          if (this.isUpdateBlocked())
            return;
          this.isUpdating = true;
          (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
        };
        ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
          var _a2, _b, _c;
          if (shouldNotifyListeners === void 0) {
            shouldNotifyListeners = true;
          }
          if (this.root.isUpdateBlocked()) {
            (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
            return;
          }
          !this.root.isUpdating && this.root.startUpdate();
          if (this.isLayoutDirty)
            return;
          this.isLayoutDirty = true;
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            node.shouldResetTransform = true;
            node.updateScroll();
          }
          var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
          if (layoutId === void 0 && !layout)
            return;
          var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
          this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
          this.updateSnapshot();
          shouldNotifyListeners && this.notifyListeners("willUpdate");
        };
        ProjectionNode.prototype.didUpdate = function() {
          var updateWasBlocked = this.isUpdateBlocked();
          if (updateWasBlocked) {
            this.unblockUpdate();
            this.clearAllSnapshots();
            this.nodes.forEach(clearMeasurements);
            return;
          }
          if (!this.isUpdating)
            return;
          this.isUpdating = false;
          if (this.potentialNodes.size) {
            this.potentialNodes.forEach(mountNodeEarly);
            this.potentialNodes.clear();
          }
          this.nodes.forEach(resetTransformStyle);
          this.nodes.forEach(updateLayout);
          this.nodes.forEach(notifyLayoutUpdate);
          this.clearAllSnapshots();
          sync.flushSync.update();
          sync.flushSync.preRender();
          sync.flushSync.render();
        };
        ProjectionNode.prototype.clearAllSnapshots = function() {
          this.nodes.forEach(clearSnapshot);
          this.sharedNodes.forEach(removeLeadSnapshots);
        };
        ProjectionNode.prototype.scheduleUpdateProjection = function() {
          sync__default["default"].preRender(this.updateProjection, false, true);
        };
        ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
          var _this = this;
          sync__default["default"].postRender(function() {
            if (_this.isLayoutDirty) {
              _this.root.didUpdate();
            } else {
              _this.root.checkUpdateFailed();
            }
          });
        };
        ProjectionNode.prototype.updateSnapshot = function() {
          if (this.snapshot || !this.instance)
            return;
          var measured = this.measure();
          var layout = this.removeTransform(this.removeElementScroll(measured));
          roundBox(layout);
          this.snapshot = {
            measured,
            layout,
            latestValues: {}
          };
        };
        ProjectionNode.prototype.updateLayout = function() {
          var _a2;
          if (!this.instance)
            return;
          this.updateScroll();
          if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
            return;
          }
          if (this.resumeFrom && !this.resumeFrom.instance) {
            for (var i = 0; i < this.path.length; i++) {
              var node = this.path[i];
              node.updateScroll();
            }
          }
          var measured = this.measure();
          roundBox(measured);
          var prevLayout = this.layout;
          this.layout = {
            measured,
            actual: this.removeElementScroll(measured)
          };
          this.layoutCorrected = createBox();
          this.isLayoutDirty = false;
          this.projectionDelta = void 0;
          this.notifyListeners("measure", this.layout.actual);
          (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
        };
        ProjectionNode.prototype.updateScroll = function() {
          if (this.options.layoutScroll && this.instance) {
            this.isScrollRoot = checkIsScrollRoot(this.instance);
            this.scroll = measureScroll(this.instance);
          }
        };
        ProjectionNode.prototype.resetTransform = function() {
          var _a2;
          if (!resetTransform)
            return;
          var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
          var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
          var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
          var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
          var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
          if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
            resetTransform(this.instance, transformTemplateValue);
            this.shouldResetTransform = false;
            this.scheduleRender();
          }
        };
        ProjectionNode.prototype.measure = function() {
          var visualElement2 = this.options.visualElement;
          if (!visualElement2)
            return createBox();
          var box = visualElement2.measureViewportBox();
          var scroll = this.root.scroll;
          if (scroll) {
            translateAxis(box.x, scroll.x);
            translateAxis(box.y, scroll.y);
          }
          return box;
        };
        ProjectionNode.prototype.removeElementScroll = function(box) {
          var boxWithoutScroll = createBox();
          copyBoxInto(boxWithoutScroll, box);
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            var scroll_1 = node.scroll, options = node.options, isScrollRoot = node.isScrollRoot;
            if (node !== this.root && scroll_1 && options.layoutScroll) {
              if (isScrollRoot) {
                copyBoxInto(boxWithoutScroll, box);
                var rootScroll = this.root.scroll;
                if (rootScroll) {
                  translateAxis(boxWithoutScroll.x, -rootScroll.x);
                  translateAxis(boxWithoutScroll.y, -rootScroll.y);
                }
              }
              translateAxis(boxWithoutScroll.x, scroll_1.x);
              translateAxis(boxWithoutScroll.y, scroll_1.y);
            }
          }
          return boxWithoutScroll;
        };
        ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
          if (transformOnly === void 0) {
            transformOnly = false;
          }
          var withTransforms = createBox();
          copyBoxInto(withTransforms, box);
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
              transformBox(withTransforms, {
                x: -node.scroll.x,
                y: -node.scroll.y
              });
            }
            if (!hasTransform(node.latestValues))
              continue;
            transformBox(withTransforms, node.latestValues);
          }
          if (hasTransform(this.latestValues)) {
            transformBox(withTransforms, this.latestValues);
          }
          return withTransforms;
        };
        ProjectionNode.prototype.removeTransform = function(box) {
          var _a2;
          var boxWithoutTransform = createBox();
          copyBoxInto(boxWithoutTransform, box);
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            if (!node.instance)
              continue;
            if (!hasTransform(node.latestValues))
              continue;
            hasScale(node.latestValues) && node.updateSnapshot();
            var sourceBox = createBox();
            var nodeBox = node.measure();
            copyBoxInto(sourceBox, nodeBox);
            removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
          }
          if (hasTransform(this.latestValues)) {
            removeBoxTransforms(boxWithoutTransform, this.latestValues);
          }
          return boxWithoutTransform;
        };
        ProjectionNode.prototype.setTargetDelta = function(delta) {
          this.targetDelta = delta;
          this.root.scheduleUpdateProjection();
        };
        ProjectionNode.prototype.setOptions = function(options) {
          var _a2;
          this.options = tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
        };
        ProjectionNode.prototype.clearMeasurements = function() {
          this.scroll = void 0;
          this.layout = void 0;
          this.snapshot = void 0;
          this.prevTransformTemplateValue = void 0;
          this.targetDelta = void 0;
          this.target = void 0;
          this.isLayoutDirty = false;
        };
        ProjectionNode.prototype.resolveTargetDelta = function() {
          var _a2;
          var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
          if (!this.layout || !(layout || layoutId))
            return;
          if (!this.targetDelta && !this.relativeTarget) {
            this.relativeParent = this.getClosestProjectingParent();
            if (this.relativeParent && this.relativeParent.layout) {
              this.relativeTarget = createBox();
              this.relativeTargetOrigin = createBox();
              calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
            }
          }
          if (!this.relativeTarget && !this.targetDelta)
            return;
          if (!this.target) {
            this.target = createBox();
            this.targetWithTransforms = createBox();
          }
          if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
            calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
          } else if (this.targetDelta) {
            if (Boolean(this.resumingFrom)) {
              this.target = this.applyTransform(this.layout.actual);
            } else {
              copyBoxInto(this.target, this.layout.actual);
            }
            applyBoxDelta(this.target, this.targetDelta);
          } else {
            copyBoxInto(this.target, this.layout.actual);
          }
          if (this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = false;
            this.relativeParent = this.getClosestProjectingParent();
            if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
              this.relativeTarget = createBox();
              this.relativeTargetOrigin = createBox();
              calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
            }
          }
        };
        ProjectionNode.prototype.getClosestProjectingParent = function() {
          if (!this.parent || hasTransform(this.parent.latestValues))
            return void 0;
          if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
            return this.parent;
          } else {
            return this.parent.getClosestProjectingParent();
          }
        };
        ProjectionNode.prototype.calcProjection = function() {
          var _a2;
          var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
          this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
          if (!this.isTreeAnimating) {
            this.targetDelta = this.relativeTarget = void 0;
          }
          if (!this.layout || !(layout || layoutId))
            return;
          var lead = this.getLead();
          copyBoxInto(this.layoutCorrected, this.layout.actual);
          applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
          var target = lead.target;
          if (!target)
            return;
          if (!this.projectionDelta) {
            this.projectionDelta = createDelta();
            this.projectionDeltaWithTransform = createDelta();
          }
          var prevTreeScaleX = this.treeScale.x;
          var prevTreeScaleY = this.treeScale.y;
          var prevProjectionTransform = this.projectionTransform;
          calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
          this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
          if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
            this.hasProjected = true;
            this.scheduleRender();
            this.notifyListeners("projectionUpdate", target);
          }
        };
        ProjectionNode.prototype.hide = function() {
          this.isVisible = false;
        };
        ProjectionNode.prototype.show = function() {
          this.isVisible = true;
        };
        ProjectionNode.prototype.scheduleRender = function(notifyAll) {
          var _a2, _b, _c;
          if (notifyAll === void 0) {
            notifyAll = true;
          }
          (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
          notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
          if (this.resumingFrom && !this.resumingFrom.instance) {
            this.resumingFrom = void 0;
          }
        };
        ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
          var _this = this;
          var _a2;
          if (hasOnlyRelativeTargetChanged === void 0) {
            hasOnlyRelativeTargetChanged = false;
          }
          var snapshot = this.snapshot;
          var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
          var mixedValues = tslib.__assign({}, this.latestValues);
          var targetDelta = createDelta();
          this.relativeTarget = this.relativeTargetOrigin = void 0;
          this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
          var relativeLayout = createBox();
          var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
          var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
          var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
          this.animationProgress = 0;
          this.mixTargetDelta = function(latest) {
            var _a3;
            var progress = latest / 1e3;
            mixAxisDelta(targetDelta.x, delta.x, progress);
            mixAxisDelta(targetDelta.y, delta.y, progress);
            _this.setTargetDelta(targetDelta);
            if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
              calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
              mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress);
            }
            if (isSharedLayoutAnimation) {
              _this.animationValues = mixedValues;
              mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
            }
            _this.root.scheduleUpdateProjection();
            _this.scheduleRender();
            _this.animationProgress = progress;
          };
          this.mixTargetDelta(0);
        };
        ProjectionNode.prototype.startAnimation = function(options) {
          var _this = this;
          var _a2, _b;
          this.notifyListeners("animationStart");
          (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
          if (this.resumingFrom) {
            (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
          }
          if (this.pendingAnimation) {
            sync.cancelSync.update(this.pendingAnimation);
            this.pendingAnimation = void 0;
          }
          this.pendingAnimation = sync__default["default"].update(function() {
            globalProjectionState.hasAnimatedSinceResize = true;
            _this.currentAnimation = animate(0, animationTarget, tslib.__assign(tslib.__assign({}, options), { onUpdate: function(latest) {
              var _a3;
              _this.mixTargetDelta(latest);
              (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
            }, onComplete: function() {
              var _a3;
              (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
              _this.completeAnimation();
            } }));
            if (_this.resumingFrom) {
              _this.resumingFrom.currentAnimation = _this.currentAnimation;
            }
            _this.pendingAnimation = void 0;
          });
        };
        ProjectionNode.prototype.completeAnimation = function() {
          var _a2;
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = void 0;
            this.resumingFrom.preserveOpacity = void 0;
          }
          (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
          this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
          this.notifyListeners("animationComplete");
        };
        ProjectionNode.prototype.finishAnimation = function() {
          var _a2;
          if (this.currentAnimation) {
            (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
            this.currentAnimation.stop();
          }
          this.completeAnimation();
        };
        ProjectionNode.prototype.applyTransformsToTarget = function() {
          var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
          if (!targetWithTransforms || !target || !layout)
            return;
          copyBoxInto(targetWithTransforms, target);
          transformBox(targetWithTransforms, latestValues);
          calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        };
        ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
          var _a2, _b, _c;
          if (!this.sharedNodes.has(layoutId)) {
            this.sharedNodes.set(layoutId, new NodeStack());
          }
          var stack = this.sharedNodes.get(layoutId);
          stack.add(node);
          node.promote({
            transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
            preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
          });
        };
        ProjectionNode.prototype.isLead = function() {
          var stack = this.getStack();
          return stack ? stack.lead === this : true;
        };
        ProjectionNode.prototype.getLead = function() {
          var _a2;
          var layoutId = this.options.layoutId;
          return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
        };
        ProjectionNode.prototype.getPrevLead = function() {
          var _a2;
          var layoutId = this.options.layoutId;
          return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
        };
        ProjectionNode.prototype.getStack = function() {
          var layoutId = this.options.layoutId;
          if (layoutId)
            return this.root.sharedNodes.get(layoutId);
        };
        ProjectionNode.prototype.promote = function(_a2) {
          var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
          var stack = this.getStack();
          if (stack)
            stack.promote(this, preserveFollowOpacity);
          if (needsReset) {
            this.projectionDelta = void 0;
            this.needsReset = true;
          }
          if (transition)
            this.setOptions({ transition });
        };
        ProjectionNode.prototype.relegate = function() {
          var stack = this.getStack();
          if (stack) {
            return stack.relegate(this);
          } else {
            return false;
          }
        };
        ProjectionNode.prototype.resetRotation = function() {
          var visualElement2 = this.options.visualElement;
          if (!visualElement2)
            return;
          var hasRotate = false;
          var resetValues = {};
          for (var i = 0; i < transformAxes.length; i++) {
            var axis = transformAxes[i];
            var key = "rotate" + axis;
            if (!visualElement2.getStaticValue(key)) {
              continue;
            }
            hasRotate = true;
            resetValues[key] = visualElement2.getStaticValue(key);
            visualElement2.setStaticValue(key, 0);
          }
          if (!hasRotate)
            return;
          visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
          for (var key in resetValues) {
            visualElement2.setStaticValue(key, resetValues[key]);
          }
          visualElement2.scheduleRender();
        };
        ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
          var _a2, _b, _c, _d, _e, _f;
          if (styleProp === void 0) {
            styleProp = {};
          }
          var styles = {};
          if (!this.instance || this.isSVG)
            return styles;
          if (!this.isVisible) {
            return { visibility: "hidden" };
          } else {
            styles.visibility = "";
          }
          var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
          if (this.needsReset) {
            this.needsReset = false;
            styles.opacity = "";
            styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
            styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
            return styles;
          }
          var lead = this.getLead();
          if (!this.projectionDelta || !this.layout || !lead.target) {
            var emptyStyles = {};
            if (this.options.layoutId) {
              emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
              emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
            }
            if (this.hasProjected && !hasTransform(this.latestValues)) {
              emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
              this.hasProjected = false;
            }
            return emptyStyles;
          }
          var valuesToRender = lead.animationValues || lead.latestValues;
          this.applyTransformsToTarget();
          styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
          if (transformTemplate) {
            styles.transform = transformTemplate(valuesToRender, styles.transform);
          }
          var _g = this.projectionDelta, x = _g.x, y = _g.y;
          styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
          if (lead.animationValues) {
            styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
          } else {
            styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
          }
          for (var key in scaleCorrectors) {
            if (valuesToRender[key] === void 0)
              continue;
            var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
            var corrected = correct(valuesToRender[key], lead);
            if (applyTo) {
              var num = applyTo.length;
              for (var i = 0; i < num; i++) {
                styles[applyTo[i]] = corrected;
              }
            } else {
              styles[key] = corrected;
            }
          }
          if (this.options.layoutId) {
            styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
          }
          return styles;
        };
        ProjectionNode.prototype.clearSnapshot = function() {
          this.resumeFrom = this.snapshot = void 0;
        };
        ProjectionNode.prototype.resetTree = function() {
          this.root.nodes.forEach(function(node) {
            var _a2;
            return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
          });
          this.root.nodes.forEach(clearMeasurements);
          this.root.sharedNodes.clear();
        };
        return ProjectionNode;
      }()
    );
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    var _a, _b, _c, _d;
    var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
      if (node.options.animationType === "size") {
        eachAxis(function(axis) {
          var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
          var length = calcLength(axisSnapshot);
          axisSnapshot.min = layout_1[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (node.options.animationType === "position") {
        eachAxis(function(axis) {
          var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
          var length = calcLength(layout_1[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
        });
      }
      var layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
      var visualDelta = createDelta();
      if (snapshot.isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
      } else {
        calcBoxDelta(visualDelta, layout_1, snapshot.layout);
      }
      var hasLayoutChanged = !isDeltaZero(layoutDelta);
      var hasRelativeTargetChanged = false;
      if (!node.resumeFrom) {
        node.relativeParent = node.getClosestProjectingParent();
        if (node.relativeParent && !node.relativeParent.resumeFrom) {
          var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
          if (parentSnapshot && parentLayout) {
            var relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
            var relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
            if (!boxEquals(relativeSnapshot, relativeLayout)) {
              hasRelativeTargetChanged = true;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout_1,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeTargetChanged
      });
    } else if (node.isLead()) {
      (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    node.options.transition = void 0;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function resetTransformStyle(node) {
    var visualElement2 = node.options.visualElement;
    if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
      visualElement2.notifyBeforeLayoutMeasure();
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetRotation(node) {
    node.resetRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDelta(output, delta, p) {
    output.translate = popmotion.mix(delta.translate, 0, p);
    output.scale = popmotion.mix(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = popmotion.mix(from.min, to.min, p);
    output.max = popmotion.mix(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  function mountNodeEarly(node, id2) {
    var searchNode = node.root;
    for (var i = node.path.length - 1; i >= 0; i--) {
      if (Boolean(node.path[i].instance)) {
        searchNode = node.path[i];
        break;
      }
    }
    var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
    var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
    if (element)
      node.mount(element, true);
  }
  function roundAxis(axis) {
    axis.min = Math.round(axis.min);
    axis.max = Math.round(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }
  var DocumentProjectionNode = createProjectionNode({
    attachResizeListener: function(ref, notify2) {
      return addDomEvent(ref, "resize", notify2);
    },
    measureScroll: function() {
      return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
      };
    },
    checkIsScrollRoot: function() {
      return true;
    }
  });
  var rootProjectionNode = {
    current: void 0
  };
  var HTMLProjectionNode = createProjectionNode({
    measureScroll: function(instance) {
      return {
        x: instance.scrollLeft,
        y: instance.scrollTop
      };
    },
    defaultParent: function() {
      if (!rootProjectionNode.current) {
        var documentNode = new DocumentProjectionNode(0, {});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: function(instance, value) {
      instance.style.transform = value !== null && value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: function(instance) {
      return Boolean(window.getComputedStyle(instance).position === "fixed");
    }
  });
  var featureBundle = tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, animations), gestureAnimations), drag), layoutFeatures);
  var motion = /* @__PURE__ */ createMotionProxy(function(Component, config) {
    return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
  });
  function createDomMotionComponent(key) {
    return createMotionComponent(createDomMotionConfig(key, { forwardMotionProps: false }, featureBundle, createDomVisualElement, HTMLProjectionNode));
  }
  var m = createMotionProxy(createDomMotionConfig);
  function useIsMounted() {
    var isMounted = React.useRef(false);
    useIsomorphicLayoutEffect(function() {
      isMounted.current = true;
      return function() {
        isMounted.current = false;
      };
    }, []);
    return isMounted;
  }
  function useForceUpdate() {
    var isMounted = useIsMounted();
    var _a = tslib.__read(React.useState(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    var forceRender = React.useCallback(function() {
      isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    var deferredForceRender = React.useCallback(function() {
      return sync__default["default"].postRender(forceRender);
    }, [forceRender]);
    return [deferredForceRender, forcedRenderCount];
  }
  var PresenceChild = function(_a) {
    var children = _a.children, initial = _a.initial, isPresent2 = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = useConstant(newChildrenMap);
    var id2 = useId();
    var context = React.useMemo(
      function() {
        return {
          id: id2,
          initial,
          isPresent: isPresent2,
          custom,
          onExitComplete: function(childId) {
            var e_1, _a2;
            presenceChildren.set(childId, true);
            try {
              for (var _b = tslib.__values(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var isComplete = _c.value;
                if (!isComplete)
                  return;
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
          },
          register: function(childId) {
            presenceChildren.set(childId, false);
            return function() {
              return presenceChildren.delete(childId);
            };
          }
        };
      },
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      presenceAffectsLayout ? void 0 : [isPresent2]
    );
    React.useMemo(function() {
      presenceChildren.forEach(function(_, key) {
        return presenceChildren.set(key, false);
      });
    }, [isPresent2]);
    React__namespace.useEffect(function() {
      !isPresent2 && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
    }, [isPresent2]);
    return React__namespace.createElement(PresenceContext.Provider, { value: context }, children);
  };
  function newChildrenMap() {
    return /* @__PURE__ */ new Map();
  }
  var getChildKey = function(child) {
    return child.key || "";
  };
  function updateChildLookup(children, allChildren) {
    children.forEach(function(child) {
      var key = getChildKey(child);
      allChildren.set(key, child);
    });
  }
  function onlyElements(children) {
    var filtered = [];
    React.Children.forEach(children, function(child) {
      if (React.isValidElement(child))
        filtered.push(child);
    });
    return filtered;
  }
  var AnimatePresence = function(_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    var _d = tslib.__read(useForceUpdate(), 1), forceRender = _d[0];
    var forceRenderLayoutGroup = React.useContext(LayoutGroupContext).forceRender;
    if (forceRenderLayoutGroup)
      forceRender = forceRenderLayoutGroup;
    var isMounted = useIsMounted();
    var filteredChildren = onlyElements(children);
    var childrenToRender = filteredChildren;
    var exiting = /* @__PURE__ */ new Set();
    var presentChildren = React.useRef(childrenToRender);
    var allChildren = React.useRef(/* @__PURE__ */ new Map()).current;
    var isInitialRender = React.useRef(true);
    useIsomorphicLayoutEffect(function() {
      isInitialRender.current = false;
      updateChildLookup(filteredChildren, allChildren);
      presentChildren.current = childrenToRender;
    });
    useUnmountEffect(function() {
      isInitialRender.current = true;
      allChildren.clear();
      exiting.clear();
    });
    if (isInitialRender.current) {
      return React__namespace.createElement(React__namespace.Fragment, null, childrenToRender.map(function(child) {
        return React__namespace.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout }, child);
      }));
    }
    childrenToRender = tslib.__spreadArray([], tslib.__read(childrenToRender), false);
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
      var key = presentKeys[i];
      if (targetKeys.indexOf(key) === -1) {
        exiting.add(key);
      }
    }
    if (exitBeforeEnter && exiting.size) {
      childrenToRender = [];
    }
    exiting.forEach(function(key2) {
      if (targetKeys.indexOf(key2) !== -1)
        return;
      var child = allChildren.get(key2);
      if (!child)
        return;
      var insertionIndex = presentKeys.indexOf(key2);
      var onExit = function() {
        allChildren.delete(key2);
        exiting.delete(key2);
        var removeIndex = presentChildren.current.findIndex(function(presentChild) {
          return presentChild.key === key2;
        });
        presentChildren.current.splice(removeIndex, 1);
        if (!exiting.size) {
          presentChildren.current = filteredChildren;
          if (isMounted.current === false)
            return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      childrenToRender.splice(insertionIndex, 0, React__namespace.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout }, child));
    });
    childrenToRender = childrenToRender.map(function(child) {
      var key2 = child.key;
      return exiting.has(key2) ? child : React__namespace.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout }, child);
    });
    if (env !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
      console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return React__namespace.createElement(React__namespace.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function(child) {
      return React.cloneElement(child);
    }));
  };
  var DeprecatedLayoutGroupContext = React.createContext(null);
  var notify = function(node) {
    return !node.isLayoutDirty && node.willUpdate(false);
  };
  function nodeGroup() {
    var nodes = /* @__PURE__ */ new Set();
    var subscriptions = /* @__PURE__ */ new WeakMap();
    var dirtyAll = function() {
      return nodes.forEach(notify);
    };
    return {
      add: function(node) {
        nodes.add(node);
        subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
      },
      remove: function(node) {
        var _a;
        nodes.delete(node);
        (_a = subscriptions.get(node)) === null || _a === void 0 ? void 0 : _a();
        subscriptions.delete(node);
        dirtyAll();
      },
      dirty: dirtyAll
    };
  }
  var shouldInheritGroup = function(inherit) {
    return inherit === true;
  };
  var shouldInheritId = function(inherit) {
    return shouldInheritGroup(inherit === true) || inherit === "id";
  };
  var LayoutGroup = function(_a) {
    var _b, _c;
    var children = _a.children, id2 = _a.id, inheritId = _a.inheritId, _d = _a.inherit, inherit = _d === void 0 ? true : _d;
    if (inheritId !== void 0)
      inherit = inheritId;
    var layoutGroupContext = React.useContext(LayoutGroupContext);
    var deprecatedLayoutGroupContext = React.useContext(DeprecatedLayoutGroupContext);
    var _e = tslib.__read(useForceUpdate(), 2), forceRender = _e[0], key = _e[1];
    var context = React.useRef(null);
    var upstreamId = (_b = layoutGroupContext.id) !== null && _b !== void 0 ? _b : deprecatedLayoutGroupContext;
    if (context.current === null) {
      if (shouldInheritId(inherit) && upstreamId) {
        id2 = id2 ? upstreamId + "-" + id2 : upstreamId;
      }
      context.current = {
        id: id2,
        group: shouldInheritGroup(inherit) ? (_c = layoutGroupContext === null || layoutGroupContext === void 0 ? void 0 : layoutGroupContext.group) !== null && _c !== void 0 ? _c : nodeGroup() : nodeGroup()
      };
    }
    var memoizedContext = React.useMemo(function() {
      return tslib.__assign(tslib.__assign({}, context.current), { forceRender });
    }, [key]);
    return React__namespace.createElement(LayoutGroupContext.Provider, { value: memoizedContext }, children);
  };
  var id = 0;
  var AnimateSharedLayout = function(_a) {
    var children = _a.children;
    React__namespace.useEffect(function() {
      heyListen.warning(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
    }, []);
    return React__namespace.createElement(LayoutGroup, { id: useConstant(function() {
      return "asl-".concat(id++);
    }) }, children);
  };
  function MotionConfig(_a) {
    var children = _a.children, isValidProp = _a.isValidProp, config = tslib.__rest(_a, ["children", "isValidProp"]);
    isValidProp && loadExternalIsValidProp(isValidProp);
    config = tslib.__assign(tslib.__assign({}, React.useContext(MotionConfigContext)), config);
    config.isStatic = useConstant(function() {
      return config.isStatic;
    });
    var context = React.useMemo(function() {
      return config;
    }, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
    return React__namespace.createElement(MotionConfigContext.Provider, { value: context }, children);
  }
  function LazyMotion(_a) {
    var children = _a.children, features = _a.features, _b = _a.strict, strict = _b === void 0 ? false : _b;
    var _c = tslib.__read(React.useState(!isLazyBundle(features)), 2), setIsLoaded = _c[1];
    var loadedRenderer = React.useRef(void 0);
    if (!isLazyBundle(features)) {
      var renderer = features.renderer, loadedFeatures = tslib.__rest(features, ["renderer"]);
      loadedRenderer.current = renderer;
      loadFeatures(loadedFeatures);
    }
    React.useEffect(function() {
      if (isLazyBundle(features)) {
        features().then(function(_a2) {
          var renderer2 = _a2.renderer, loadedFeatures2 = tslib.__rest(_a2, ["renderer"]);
          loadFeatures(loadedFeatures2);
          loadedRenderer.current = renderer2;
          setIsLoaded(true);
        });
      }
    }, []);
    return React__namespace.createElement(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict } }, children);
  }
  function isLazyBundle(features) {
    return typeof features === "function";
  }
  var ReorderContext = React.createContext(null);
  function checkReorder(order2, value, offset, velocity) {
    if (!velocity)
      return order2;
    var index2 = order2.findIndex(function(item2) {
      return item2.value === value;
    });
    if (index2 === -1)
      return order2;
    var nextOffset = velocity > 0 ? 1 : -1;
    var nextItem = order2[index2 + nextOffset];
    if (!nextItem)
      return order2;
    var item = order2[index2];
    var nextLayout = nextItem.layout;
    var nextItemCenter = popmotion.mix(nextLayout.min, nextLayout.max, 0.5);
    if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
      return moveItem(order2, index2, index2 + nextOffset);
    }
    return order2;
  }
  function ReorderGroup(_a, externalRef) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? "ul" : _b, _c = _a.axis, axis = _c === void 0 ? "y" : _c, onReorder = _a.onReorder, values = _a.values, props = tslib.__rest(_a, ["children", "as", "axis", "onReorder", "values"]);
    var Component = useConstant(function() {
      return motion(as);
    });
    var order2 = [];
    var isReordering = React.useRef(false);
    heyListen.invariant(Boolean(values), "Reorder.Group must be provided a values prop");
    var context = {
      axis,
      registerItem: function(value, layout) {
        if (layout && order2.findIndex(function(entry) {
          return value === entry.value;
        }) === -1) {
          order2.push({ value, layout: layout[axis] });
          order2.sort(compareMin);
        }
      },
      updateOrder: function(id2, offset, velocity) {
        if (isReordering.current)
          return;
        var newOrder = checkReorder(order2, id2, offset, velocity);
        if (order2 !== newOrder) {
          isReordering.current = true;
          onReorder(newOrder.map(getValue).filter(function(value) {
            return values.indexOf(value) !== -1;
          }));
        }
      }
    };
    React.useEffect(function() {
      isReordering.current = false;
    });
    return React__namespace.createElement(
      Component,
      tslib.__assign({}, props, { ref: externalRef }),
      React__namespace.createElement(ReorderContext.Provider, { value: context }, children)
    );
  }
  var Group = React.forwardRef(ReorderGroup);
  function getValue(item) {
    return item.value;
  }
  function compareMin(a, b) {
    return a.layout.min - b.layout.min;
  }
  function useMotionValue(initial) {
    var value = useConstant(function() {
      return motionValue(initial);
    });
    var isStatic = React.useContext(MotionConfigContext).isStatic;
    if (isStatic) {
      var _a = tslib.__read(React.useState(initial), 2), setLatest_1 = _a[1];
      React.useEffect(function() {
        return value.onChange(setLatest_1);
      }, []);
    }
    return value;
  }
  var isCustomValueType = function(v) {
    return typeof v === "object" && v.mix;
  };
  var getMixer = function(v) {
    return isCustomValueType(v) ? v.mix : void 0;
  };
  function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = popmotion.interpolate(inputRange, outputRange, tslib.__assign({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
  }
  function useOnChange(value, callback) {
    useIsomorphicLayoutEffect(function() {
      if (isMotionValue(value))
        return value.onChange(callback);
    }, [callback]);
  }
  function useMultiOnChange(values, handler) {
    useIsomorphicLayoutEffect(function() {
      var subscriptions = values.map(function(value) {
        return value.onChange(handler);
      });
      return function() {
        return subscriptions.forEach(function(unsubscribe) {
          return unsubscribe();
        });
      };
    });
  }
  function useCombineMotionValues(values, combineValues) {
    var value = useMotionValue(combineValues());
    var updateValue = function() {
      return value.set(combineValues());
    };
    updateValue();
    useMultiOnChange(values, function() {
      return sync__default["default"].update(updateValue, false, true);
    });
    return value;
  }
  function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    var transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], function(_a) {
      var _b = tslib.__read(_a, 1), latest = _b[0];
      return transformer(latest);
    });
  }
  function useListTransform(values, transformer) {
    var latest = useConstant(function() {
      return [];
    });
    return useCombineMotionValues(values, function() {
      latest.length = 0;
      var numValues = values.length;
      for (var i = 0; i < numValues; i++) {
        latest[i] = values[i].get();
      }
      return transformer(latest);
    });
  }
  function useDefaultMotionValue(value, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = 0;
    }
    return isMotionValue(value) ? value : useMotionValue(defaultValue);
  }
  function ReorderItem(_a, externalRef) {
    var children = _a.children, style = _a.style, value = _a.value, _b = _a.as, as = _b === void 0 ? "li" : _b, onDrag = _a.onDrag, _c = _a.layout, layout = _c === void 0 ? true : _c, props = tslib.__rest(_a, ["children", "style", "value", "as", "onDrag", "layout"]);
    var Component = useConstant(function() {
      return motion(as);
    });
    var context = React.useContext(ReorderContext);
    var point = {
      x: useDefaultMotionValue(style === null || style === void 0 ? void 0 : style.x),
      y: useDefaultMotionValue(style === null || style === void 0 ? void 0 : style.y)
    };
    var zIndex = useTransform([point.x, point.y], function(_a2) {
      var _b2 = tslib.__read(_a2, 2), latestX = _b2[0], latestY = _b2[1];
      return latestX || latestY ? 1 : "unset";
    });
    var measuredLayout = React.useRef(null);
    heyListen.invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
    var _d = context, axis = _d.axis, registerItem = _d.registerItem, updateOrder = _d.updateOrder;
    React.useEffect(function() {
      registerItem(value, measuredLayout.current);
    }, [context]);
    return React__namespace.createElement(Component, tslib.__assign({ drag: axis }, props, { dragSnapToOrigin: true, style: tslib.__assign(tslib.__assign({}, style), { x: point.x, y: point.y, zIndex }), layout, onDrag: function(event, gesturePoint) {
      var velocity = gesturePoint.velocity;
      velocity[axis] && updateOrder(value, point[axis].get(), velocity[axis]);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, gesturePoint);
    }, onLayoutMeasure: function(measured) {
      measuredLayout.current = measured;
    }, ref: externalRef }), children);
  }
  var Item = React.forwardRef(ReorderItem);
  var Reorder = {
    Group,
    Item
  };
  var domAnimation = tslib.__assign(tslib.__assign({ renderer: createDomVisualElement }, animations), gestureAnimations);
  var domMax = tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, domAnimation), drag), layoutFeatures), { projectionNodeConstructor: HTMLProjectionNode });
  function useMotionTemplate(fragments) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      values[_i - 1] = arguments[_i];
    }
    var numFragments = fragments.length;
    function buildValue() {
      var output = "";
      for (var i = 0; i < numFragments; i++) {
        output += fragments[i];
        var value = values[i];
        if (value)
          output += values[i].get();
      }
      return output;
    }
    return useCombineMotionValues(values, buildValue);
  }
  function useSpring(source, config) {
    if (config === void 0) {
      config = {};
    }
    var isStatic = React.useContext(MotionConfigContext).isStatic;
    var activeSpringAnimation = React.useRef(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    React.useMemo(function() {
      return value.attach(function(v, set) {
        if (isStatic)
          return set(v);
        if (activeSpringAnimation.current) {
          activeSpringAnimation.current.stop();
        }
        activeSpringAnimation.current = popmotion.animate(tslib.__assign(tslib.__assign({ from: value.get(), to: v, velocity: value.getVelocity() }, config), { onUpdate: set }));
        return value.get();
      });
    }, [JSON.stringify(config)]);
    useOnChange(source, function(v) {
      return value.set(parseFloat(v));
    });
    return value;
  }
  function useVelocity(value) {
    var velocity = useMotionValue(value.getVelocity());
    React.useEffect(function() {
      return value.velocityUpdateSubscribers.add(function(newVelocity) {
        velocity.set(newVelocity);
      });
    }, [value]);
    return velocity;
  }
  var createScrollMotionValues = function() {
    return {
      scrollX: motionValue(0),
      scrollY: motionValue(0),
      scrollXProgress: motionValue(0),
      scrollYProgress: motionValue(0)
    };
  };
  function useScroll(_a) {
    if (_a === void 0) {
      _a = {};
    }
    var container = _a.container, target = _a.target, options = tslib.__rest(_a, ["container", "target"]);
    var values = useConstant(createScrollMotionValues);
    useIsomorphicLayoutEffect(function() {
      return dom.scroll(function(_a2) {
        var x = _a2.x, y = _a2.y;
        values.scrollX.set(x.current);
        values.scrollXProgress.set(x.progress);
        values.scrollY.set(y.current);
        values.scrollYProgress.set(y.progress);
      }, tslib.__assign(tslib.__assign({}, options), { container: (container === null || container === void 0 ? void 0 : container.current) || void 0, target: (target === null || target === void 0 ? void 0 : target.current) || void 0 }));
    }, []);
    return values;
  }
  function useElementScroll(ref) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
    return useScroll({ container: ref });
  }
  function useViewportScroll() {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
    return useScroll();
  }
  var getCurrentTime = typeof performance !== "undefined" ? function() {
    return performance.now();
  } : function() {
    return Date.now();
  };
  function useAnimationFrame(callback) {
    var initialTimestamp = useConstant(getCurrentTime);
    var isStatic = React.useContext(MotionConfigContext).isStatic;
    React.useEffect(function() {
      if (isStatic)
        return;
      var provideTimeSinceStart = function(_a) {
        var timestamp = _a.timestamp;
        callback(timestamp - initialTimestamp);
      };
      sync__default["default"].update(provideTimeSinceStart, true);
      return function() {
        return sync.cancelSync.update(provideTimeSinceStart);
      };
    }, [callback]);
  }
  function useTime() {
    var time = useMotionValue(0);
    useAnimationFrame(function(t) {
      return time.set(t);
    });
    return time;
  }
  function animationControls() {
    var hasMounted = false;
    var pendingAnimations = [];
    var subscribers = /* @__PURE__ */ new Set();
    var controls = {
      subscribe: function(visualElement2) {
        subscribers.add(visualElement2);
        return function() {
          return void subscribers.delete(visualElement2);
        };
      },
      start: function(definition, transitionOverride) {
        if (hasMounted) {
          var animations_1 = [];
          subscribers.forEach(function(visualElement2) {
            animations_1.push(animateVisualElement(visualElement2, definition, {
              transitionOverride
            }));
          });
          return Promise.all(animations_1);
        } else {
          return new Promise(function(resolve) {
            pendingAnimations.push({
              animation: [definition, transitionOverride],
              resolve
            });
          });
        }
      },
      set: function(definition) {
        heyListen.invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return subscribers.forEach(function(visualElement2) {
          setValues(visualElement2, definition);
        });
      },
      stop: function() {
        subscribers.forEach(function(visualElement2) {
          stopAnimation(visualElement2);
        });
      },
      mount: function() {
        hasMounted = true;
        pendingAnimations.forEach(function(_a) {
          var animation = _a.animation, resolve = _a.resolve;
          controls.start.apply(controls, tslib.__spreadArray([], tslib.__read(animation), false)).then(resolve);
        });
        return function() {
          hasMounted = false;
          controls.stop();
        };
      }
    };
    return controls;
  }
  function useAnimationControls() {
    var controls = useConstant(animationControls);
    React.useEffect(controls.mount, []);
    return controls;
  }
  var useAnimation = useAnimationControls;
  function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var index2 = React.useRef(0);
    var _a = tslib.__read(React.useState(items[index2.current]), 2), item = _a[0], setItem = _a[1];
    var runCycle = React.useCallback(function(next) {
      index2.current = typeof next !== "number" ? popmotion.wrap(0, items.length, index2.current + 1) : next;
      setItem(items[index2.current]);
    }, tslib.__spreadArray([items.length], tslib.__read(items), false));
    return [item, runCycle];
  }
  function useInView(ref, _a) {
    var _b = _a === void 0 ? {} : _a, root = _b.root, margin = _b.margin, amount = _b.amount, _c = _b.once, once = _c === void 0 ? false : _c;
    var _d = tslib.__read(React.useState(false), 2), isInView = _d[0], setInView = _d[1];
    React.useEffect(function() {
      var _a2;
      if (!ref.current || once && isInView)
        return;
      var onEnter = function() {
        setInView(true);
        return once ? void 0 : function() {
          return setInView(false);
        };
      };
      var options = {
        root: (_a2 = root === null || root === void 0 ? void 0 : root.current) !== null && _a2 !== void 0 ? _a2 : void 0,
        margin,
        amount: amount === "some" ? "any" : amount
      };
      return dom.inView(ref.current, onEnter, options);
    }, [root, ref, margin, once]);
    return isInView;
  }
  var DragControls = (
    /** @class */
    function() {
      function DragControls2() {
        this.componentControls = /* @__PURE__ */ new Set();
      }
      DragControls2.prototype.subscribe = function(controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function() {
          return _this.componentControls.delete(controls);
        };
      };
      DragControls2.prototype.start = function(event, options) {
        this.componentControls.forEach(function(controls) {
          controls.start(event.nativeEvent || event, options);
        });
      };
      return DragControls2;
    }()
  );
  var createDragControls = function() {
    return new DragControls();
  };
  function useDragControls() {
    return useConstant(createDragControls);
  }
  function useInstantLayoutTransition() {
    return startTransition;
  }
  function startTransition(cb) {
    if (!rootProjectionNode.current)
      return;
    rootProjectionNode.current.isUpdating = false;
    rootProjectionNode.current.blockUpdate();
    cb === null || cb === void 0 ? void 0 : cb();
  }
  function useInstantTransition() {
    var _a = tslib.__read(useForceUpdate(), 2), forceUpdate = _a[0], forcedRenderCount = _a[1];
    var startInstantLayoutTransition = useInstantLayoutTransition();
    React.useEffect(function() {
      sync__default["default"].postRender(function() {
        return sync__default["default"].postRender(function() {
          return instantAnimationState.current = false;
        });
      });
    }, [forcedRenderCount]);
    return function(callback) {
      startInstantLayoutTransition(function() {
        instantAnimationState.current = true;
        forceUpdate();
        callback();
      });
    };
  }
  function useResetProjection() {
    var reset = React__namespace.useCallback(function() {
      var root = rootProjectionNode.current;
      if (!root)
        return;
      root.resetTree();
    }, []);
    return reset;
  }
  var createObject = function() {
    return {};
  };
  var stateVisualElement = visualElement({
    build: function() {
    },
    measureViewportBox: createBox,
    resetTransform: function() {
    },
    restoreTransform: function() {
    },
    removeValueFromRenderState: function() {
    },
    render: function() {
    },
    scrapeMotionValuesFromProps: createObject,
    readValueFromInstance: function(_state, key, options) {
      return options.initialState[key] || 0;
    },
    makeTargetAnimatable: function(element, _a) {
      var transition = _a.transition, transitionEnd = _a.transitionEnd, target = tslib.__rest(_a, ["transition", "transitionEnd"]);
      var origin = getOrigin(target, transition || {}, element);
      checkTargetForNewValues(element, target, origin);
      return tslib.__assign({ transition, transitionEnd }, target);
    }
  });
  var useVisualState = makeUseVisualState({
    scrapeMotionValuesFromProps: createObject,
    createRenderState: createObject
  });
  function useAnimatedState(initialState) {
    var _a = tslib.__read(React.useState(initialState), 2), animationState = _a[0], setAnimationState = _a[1];
    var visualState = useVisualState({}, false);
    var element = useConstant(function() {
      return stateVisualElement({ props: {}, visualState }, { initialState });
    });
    React.useEffect(function() {
      element.mount({});
      return element.unmount;
    }, [element]);
    React.useEffect(function() {
      element.setProps({
        onUpdate: function(v) {
          setAnimationState(tslib.__assign({}, v));
        }
      });
    }, [setAnimationState, element]);
    var startAnimation2 = useConstant(function() {
      return function(animationDefinition) {
        return animateVisualElement(element, animationDefinition);
      };
    });
    return [animationState, startAnimation2];
  }
  var maxScale = 1e5;
  var invertScale = function(scale) {
    return scale > 1e-3 ? 1 / scale : maxScale;
  };
  var hasWarned = false;
  function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var visualElement2 = useVisualElementContext();
    heyListen.invariant(!!(scale || visualElement2), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    heyListen.warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
      parentScaleX = scale.scaleX || parentScaleX;
      parentScaleY = scale.scaleY || parentScaleY;
    } else if (visualElement2) {
      parentScaleX = visualElement2.getValue("scaleX", 1);
      parentScaleY = visualElement2.getValue("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX, scaleY };
  }
  exports.AnimatePresence = AnimatePresence;
  exports.AnimateSharedLayout = AnimateSharedLayout;
  exports.DeprecatedLayoutGroupContext = DeprecatedLayoutGroupContext;
  exports.DragControls = DragControls;
  exports.FlatTree = FlatTree;
  exports.LayoutGroup = LayoutGroup;
  exports.LayoutGroupContext = LayoutGroupContext;
  exports.LazyMotion = LazyMotion;
  exports.MotionConfig = MotionConfig;
  exports.MotionConfigContext = MotionConfigContext;
  exports.MotionContext = MotionContext;
  exports.MotionValue = MotionValue;
  exports.PresenceContext = PresenceContext;
  exports.Reorder = Reorder;
  exports.SwitchLayoutGroupContext = SwitchLayoutGroupContext;
  exports.addPointerEvent = addPointerEvent;
  exports.addScaleCorrector = addScaleCorrector;
  exports.animate = animate;
  exports.animateVisualElement = animateVisualElement;
  exports.animationControls = animationControls;
  exports.animations = animations;
  exports.calcLength = calcLength;
  exports.checkTargetForNewValues = checkTargetForNewValues;
  exports.createBox = createBox;
  exports.createDomMotionComponent = createDomMotionComponent;
  exports.createMotionComponent = createMotionComponent;
  exports.domAnimation = domAnimation;
  exports.domMax = domMax;
  exports.filterProps = filterProps;
  exports.isBrowser = isBrowser;
  exports.isDragActive = isDragActive;
  exports.isMotionValue = isMotionValue;
  exports.isValidMotionProp = isValidMotionProp;
  exports.m = m;
  exports.makeUseVisualState = makeUseVisualState;
  exports.motion = motion;
  exports.motionValue = motionValue;
  exports.resolveMotionValue = resolveMotionValue;
  exports.transform = transform;
  exports.useAnimation = useAnimation;
  exports.useAnimationControls = useAnimationControls;
  exports.useAnimationFrame = useAnimationFrame;
  exports.useCycle = useCycle;
  exports.useDeprecatedAnimatedState = useAnimatedState;
  exports.useDeprecatedInvertedScale = useInvertedScale;
  exports.useDomEvent = useDomEvent;
  exports.useDragControls = useDragControls;
  exports.useElementScroll = useElementScroll;
  exports.useForceUpdate = useForceUpdate;
  exports.useInView = useInView;
  exports.useInstantLayoutTransition = useInstantLayoutTransition;
  exports.useInstantTransition = useInstantTransition;
  exports.useIsPresent = useIsPresent;
  exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
  exports.useMotionTemplate = useMotionTemplate;
  exports.useMotionValue = useMotionValue;
  exports.usePresence = usePresence;
  exports.useReducedMotion = useReducedMotion;
  exports.useReducedMotionConfig = useReducedMotionConfig;
  exports.useResetProjection = useResetProjection;
  exports.useScroll = useScroll;
  exports.useSpring = useSpring;
  exports.useTime = useTime;
  exports.useTransform = useTransform;
  exports.useUnmountEffect = useUnmountEffect;
  exports.useVelocity = useVelocity;
  exports.useViewportScroll = useViewportScroll;
  exports.useVisualElementContext = useVisualElementContext;
  exports.visualElement = visualElement;
  exports.wrapHandler = wrapHandler;
})(cjs);
export {
  cjs as c
};
