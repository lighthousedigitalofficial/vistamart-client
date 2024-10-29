import { r as reactExports, R as React } from "./react-Co2L6_bH.js";
import { h as hideOthers } from "./aria-hidden-CVJM-MhR.js";
import { t as tabbable } from "./tabbable-BX5NpjS7.js";
import { r as reactDomExports } from "./react-dom-Dx1DRd70.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const sides = ["top", "right", "bottom", "left"];
const alignments = ["start", "end"];
const placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map((d) => {
        const alignment2 = getAlignment(d.placement);
        return [d.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d[0]) ? 2 : 3
      ).every((v) => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow$1(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow$1(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
const inline$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow$1(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow$1(value).Node;
}
function isElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow$1(value).Element;
}
function isHTMLElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow$1(value).HTMLElement;
}
function isShadowRoot$1(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow$1(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement$1(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow$1(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement$1(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot$1(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot$1(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow$1(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement$1(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement$1(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement$1(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow$1(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow$1(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement$1(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow$1(domElement);
    const offsetWin = offsetParent && isElement$1(offsetParent) ? getWindow$1(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow$1(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement$1(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow$1(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement$1(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement$1(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement$1(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement$1(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft - // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement$1(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow$1(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement$1(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement$1(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement$1,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const detectOverflow = detectOverflow$1;
const offset = offset$1;
const autoPlacement = autoPlacement$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const inline = inline$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const arrow = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow$1({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow$1({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
var index$1 = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef$1(value) {
  const ref = reactExports.useRef(value);
  index$1(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating$1(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = reactExports.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = reactExports.useRef(null);
  const floatingRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef(data);
  const whileElementsMountedRef = useLatestRef$1(whileElementsMounted);
  const platformRef = useLatestRef$1(platform2);
  const [reference, _setReference] = reactExports.useState(null);
  const [floating, _setFloating] = reactExports.useState(null);
  const setReference = reactExports.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = reactExports.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = reactExports.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        reactDomExports.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index$1(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = reactExports.useRef(false);
  index$1(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index$1(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = reactExports.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = reactExports.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}
var index = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
let serverHandoffComplete = false;
let count = 0;
const genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = reactExports.useState(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  reactExports.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
const useReactId = React[/* @__PURE__ */ "useId".toString()];
const useId = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      map.set(event, (map.get(event) || []).filter((l) => l !== listener));
    }
  };
}
const FloatingNodeContext = /* @__PURE__ */ reactExports.createContext(null);
const FloatingTreeContext = /* @__PURE__ */ reactExports.createContext(null);
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = reactExports.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
const useFloatingTree = () => reactExports.useContext(FloatingTreeContext);
const useFloatingNodeId = (customParentId) => {
  const id = useId();
  const tree = useFloatingTree();
  const reactParentId = useFloatingParentNodeId();
  const parentId = customParentId || reactParentId;
  index(() => {
    const node = {
      id,
      parentId
    };
    tree == null ? void 0 : tree.addNode(node);
    return () => {
      tree == null ? void 0 : tree.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
};
const FloatingNode = (_ref) => {
  let {
    children,
    id
  } = _ref;
  const parentId = useFloatingParentNodeId();
  return /* @__PURE__ */ reactExports.createElement(FloatingNodeContext.Provider, {
    value: reactExports.useMemo(() => ({
      id,
      parentId
    }), [id, parentId])
  }, children);
};
const FloatingTree = (_ref2) => {
  let {
    children
  } = _ref2;
  const nodesRef = reactExports.useRef([]);
  const addNode = reactExports.useCallback((node) => {
    nodesRef.current = [...nodesRef.current, node];
  }, []);
  const removeNode = reactExports.useCallback((node) => {
    nodesRef.current = nodesRef.current.filter((n) => n !== node);
  }, []);
  const events = reactExports.useState(() => createPubSub())[0];
  return /* @__PURE__ */ reactExports.createElement(FloatingTreeContext.Provider, {
    value: reactExports.useMemo(() => ({
      nodesRef,
      addNode,
      removeNode,
      events
    }), [nodesRef, addNode, removeNode, events])
  }, children);
};
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function getWindow(value) {
  return getDocument(value).defaultView || window;
}
function isElement(value) {
  return value ? value instanceof getWindow(value).Element : false;
}
function isHTMLElement(value) {
  return value ? value instanceof getWindow(value).HTMLElement : false;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
const safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
const useHover = function(context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef(handleClose);
  const delayRef = useLatestRef(delay);
  const pointerTypeRef = reactExports.useRef();
  const timeoutRef = reactExports.useRef();
  const handlerRef = reactExports.useRef();
  const restTimeoutRef = reactExports.useRef();
  const blockMouseMoveRef = reactExports.useRef(true);
  const performedPointerEventsMutationRef = reactExports.useRef(false);
  const unbindMouseMoveRef = reactExports.useRef(() => {
  });
  const isHoverOpen = reactExports.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  reactExports.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events]);
  reactExports.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = reactExports.useCallback(function(runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = reactExports.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = reactExports.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  reactExports.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        clearTimeout(timeoutRef.current);
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      closeWithDelay();
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          cleanupMouseMoveHandler();
          closeWithDelay();
        }
      })(event);
    }
    if (isElement(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  index(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  reactExports.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave() {
          events.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
};
const FloatingDelayGroupContext = /* @__PURE__ */ reactExports.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
const useDelayGroupContext = () => reactExports.useContext(FloatingDelayGroupContext);
const FloatingDelayGroup = (_ref) => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = reactExports.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = reactExports.useRef(null);
  const setCurrentId = reactExports.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /* @__PURE__ */ reactExports.createElement(FloatingDelayGroupContext.Provider, {
    value: reactExports.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
};
const useDelayGroup = (_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  reactExports.useEffect(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, "close")
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  reactExports.useEffect(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  reactExports.useEffect(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function activeElement$1(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
let rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  }) || [];
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    }) || [];
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function getTabbableIn(container, direction) {
  const allTabbable = tabbable(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement$1(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
const useInsertionEffect = React[/* @__PURE__ */ "useInsertionEffect".toString()];
const useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent(callback) {
  const ref = reactExports.useRef(() => {
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return reactExports.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
const HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
let activeElement;
let timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    activeElement = event.target;
    clearTimeout(timeoutId);
  }
}
function isTabFocus(event) {
  const result = activeElement === event.relatedTarget;
  activeElement = event.relatedTarget;
  clearTimeout(timeoutId);
  return result;
}
const FocusGuard = /* @__PURE__ */ reactExports.forwardRef(function FocusGuard2(props, ref) {
  const onFocus = useEvent(props.onFocus);
  const [role, setRole] = reactExports.useState();
  index(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  return /* @__PURE__ */ reactExports.createElement("span", _extends({}, props, {
    ref,
    tabIndex: 0,
    role,
    "aria-hidden": role ? void 0 : true,
    "data-floating-ui-focus-guard": "",
    style: HIDDEN_STYLES,
    onFocus: (event) => {
      if (isSafari() && isMac() && !isTabFocus(event)) {
        event.persist();
        timeoutId = window.setTimeout(() => {
          onFocus(event);
        }, 50);
      } else {
        onFocus(event);
      }
    }
  }));
});
const PortalContext = /* @__PURE__ */ reactExports.createContext(null);
const useFloatingPortalNode = function(_temp) {
  let {
    id,
    enabled = true
  } = _temp === void 0 ? {} : _temp;
  const [portalEl, setPortalEl] = reactExports.useState(null);
  const uniqueId = useId();
  const portalContext = usePortalContext();
  index(() => {
    if (!enabled) {
      return;
    }
    const rootNode = id ? document.getElementById(id) : null;
    if (rootNode) {
      rootNode.setAttribute("data-floating-ui-portal", "");
      setPortalEl(rootNode);
    } else {
      const newPortalEl = document.createElement("div");
      if (id !== "") {
        newPortalEl.id = id || uniqueId;
      }
      newPortalEl.setAttribute("data-floating-ui-portal", "");
      setPortalEl(newPortalEl);
      const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
      container.appendChild(newPortalEl);
      return () => {
        container.removeChild(newPortalEl);
      };
    }
  }, [id, portalContext, uniqueId, enabled]);
  return portalEl;
};
const FloatingPortal = (_ref) => {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    enabled: !root
  });
  const [focusManagerState, setFocusManagerState] = reactExports.useState(null);
  const beforeOutsideRef = reactExports.useRef(null);
  const afterOutsideRef = reactExports.useRef(null);
  const beforeInsideRef = reactExports.useRef(null);
  const afterInsideRef = reactExports.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && !!(root || portalNode) && preserveTabOrder
  );
  reactExports.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /* @__PURE__ */ reactExports.createElement(PortalContext.Provider, {
    value: reactExports.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null ? void 0 : prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), root ? /* @__PURE__ */ reactDomExports.createPortal(children, root) : portalNode ? /* @__PURE__ */ reactDomExports.createPortal(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null ? void 0 : nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
      }
    }
  }));
};
const usePortalContext = () => reactExports.useContext(PortalContext);
const VisuallyHiddenDismiss = /* @__PURE__ */ reactExports.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
function FloatingFocusManager(_ref) {
  let {
    context,
    children,
    order = ["content"],
    guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = _ref;
  const {
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const orderRef = useLatestRef(order);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const [tabbableContentLength, setTabbableContentLength] = reactExports.useState(null);
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const startDismissButtonRef = reactExports.useRef(null);
  const endDismissButtonRef = reactExports.useRef(null);
  const preventReturnFocusRef = reactExports.useRef(false);
  const previouslyFocusedElementRef = reactExports.useRef(null);
  const isPointerDownRef = reactExports.useRef(false);
  const isInsidePortal = portalContext != null;
  const isTypeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
  const getTabbableContent = reactExports.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? tabbable(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = reactExports.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  reactExports.useEffect(() => {
    if (!modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  reactExports.useEffect(() => {
    if (!closeOnFocusOut) {
      return;
    }
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute("data-floating-ui-focus-guard") || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context, _node$context2;
        return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
      }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context3, _node$context4;
        return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
      })));
      if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
      relatedTarget !== previouslyFocusedElementRef.current) {
        preventReturnFocusRef.current = true;
        setTimeout(() => onOpenChange(false));
      }
    }
    if (floating && isHTMLElement(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  reactExports.useEffect(() => {
    var _portalContext$portal;
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[data-floating-ui-portal]")) || []);
    function getDismissButtons() {
      return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
    }
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
      const cleanup = hideOthers(orderRef.current.includes("reference") || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes);
      return () => {
        cleanup();
      };
    }
  }, [domReference, floating, modal, orderRef, portalContext, isTypeableCombobox]);
  reactExports.useEffect(() => {
    if (modal && !guards && floating) {
      const tabIndexValues = [];
      const options = getTabbableOptions();
      const allTabbable = tabbable(getDocument(floating).body, options);
      const floatingTabbable = getTabbableElements();
      const elements = allTabbable.filter((el) => !floatingTabbable.includes(el));
      elements.forEach((el, i) => {
        tabIndexValues[i] = el.getAttribute("tabindex");
        el.setAttribute("tabindex", "-1");
      });
      return () => {
        elements.forEach((el, i) => {
          const value = tabIndexValues[i];
          if (value == null) {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", value);
          }
        });
      };
    }
  }, [floating, modal, guards, getTabbableElements]);
  index(() => {
    if (!floating) return;
    const doc = getDocument(floating);
    let returnFocusValue = returnFocus;
    let preventReturnFocusScroll = false;
    const previouslyFocusedElement = activeElement$1(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;
    const focusableElements = getTabbableElements(floating);
    const elToFocus = (typeof initialFocus === "number" ? focusableElements[initialFocus] : initialFocus.current) || floating;
    !ignoreInitialFocus && enqueueFocus(elToFocus, {
      preventScroll: elToFocus === floating
    });
    function onDismiss(payload) {
      if (payload.type === "escapeKey" && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (["referencePress", "escapeKey"].includes(payload.type)) {
        return;
      }
      const returnFocus2 = payload.data.returnFocus;
      if (typeof returnFocus2 === "object") {
        returnFocusValue = true;
        preventReturnFocusScroll = returnFocus2.preventScroll;
      } else {
        returnFocusValue = returnFocus2;
      }
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
      if (contains(floating, activeElement$1(doc)) && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (returnFocusValue && isHTMLElement(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
        if (!refs.domReference.current || isPointerDownRef.current) {
          enqueueFocus(previouslyFocusedElementRef.current, {
            // When dismissing nested floating elements, by the time the rAF has
            // executed, the menus will all have been unmounted. When they try
            // to get focused, the calls get ignored — leaving the root
            // reference focused as desired.
            cancelPrevious: false,
            preventScroll: preventReturnFocusScroll
          });
        } else {
          var _previouslyFocusedEle;
          contextData.__syncReturnFocus = true;
          (_previouslyFocusedEle = previouslyFocusedElementRef.current) == null ? void 0 : _previouslyFocusedEle.focus({
            preventScroll: preventReturnFocusScroll
          });
          setTimeout(() => {
            delete contextData.__syncReturnFocus;
          });
        }
      }
    };
  }, [floating, getTabbableElements, initialFocus, returnFocus, dataRef, refs, events, ignoreInitialFocus]);
  index(() => {
    if (!portalContext) return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut
      // Not concerned about the <RT> generic type.
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [portalContext, modal, closeOnFocusOut, context]);
  index(() => {
    if (ignoreInitialFocus || !floating) return;
    function setState() {
      setTabbableContentLength(getTabbableContent().length);
    }
    setState();
    if (typeof MutationObserver === "function") {
      const observer = new MutationObserver(setState);
      observer.observe(floating, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [floating, getTabbableContent, ignoreInitialFocus, refs]);
  const shouldRenderGuards = guards && (isInsidePortal || modal) && !isTypeableCombobox;
  function renderDismissButton(location) {
    return visuallyHiddenDismiss && modal ? /* @__PURE__ */ reactExports.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: () => onOpenChange(false)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss") : null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, shouldRenderGuards && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), isTypeableCombobox ? null : renderDismissButton("start"), /* @__PURE__ */ reactExports.cloneElement(children, tabbableContentLength === 0 || order.includes("floating") ? {
    tabIndex: 0
  } : {}), renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ reactExports.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = true;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}
const identifier = "data-floating-ui-scroll-lock";
const FloatingOverlay = /* @__PURE__ */ reactExports.forwardRef(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  index(() => {
    var _window$visualViewpor, _window$visualViewpor2;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, "");
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: "hidden",
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: "",
          [paddingProp]: ""
        });
      };
    }
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: "fixed",
      overflow: "hidden",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0",
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        overflow: "",
        top: "",
        left: "",
        right: "",
        [paddingProp]: ""
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /* @__PURE__ */ reactExports.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
const useClick = function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = reactExports.useRef();
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
              onOpenChange(false);
            }
          } else {
            event.preventDefault();
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onClick(event) {
          if (dataRef.current.__syncReturnFocus) {
            return;
          }
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
          }
          if (event.key === "Enter") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        },
        onKeyUp(event) {
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " ") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
};
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
const bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
const captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
const normalizeBubblesProp = function(bubbles) {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  if (bubbles === void 0) {
    bubbles = true;
  }
  return {
    escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles.escapeKey) != null ? _bubbles$escapeKey : true,
    outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
};
const useDismiss = function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = _ref;
  let {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles = true
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = reactExports.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  reactExports.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
        if (children.length > 0) {
          let shouldDismiss = true;
          children.forEach((child) => {
            var _child$context;
            if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
              shouldDismiss = false;
              return;
            }
          });
          if (!shouldDismiss) {
            return;
          }
        }
        events.emit("dismiss", {
          type: "escapeKey",
          data: {
            returnFocus: {
              preventScroll: false
            }
          }
        });
        onOpenChange(false);
      }
    }
    function onOutsidePress(event) {
      const insideReactTree = insideReactTreeRef.current;
      insideReactTreeRef.current = false;
      if (insideReactTree) {
        return;
      }
      if (typeof outsidePress === "function" && !outsidePress(event)) {
        return;
      }
      const target = getTarget(event);
      if (isHTMLElement(target) && floating) {
        const win = floating.ownerDocument.defaultView || window;
        const canScrollX = target.scrollWidth > target.clientWidth;
        const canScrollY = target.scrollHeight > target.clientHeight;
        let xCond = canScrollY && event.offsetX > target.clientWidth;
        if (canScrollY) {
          const isRTL2 = win.getComputedStyle(target).direction === "rtl";
          if (isRTL2) {
            xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
          }
        }
        if (xCond || canScrollX && event.offsetY > target.clientHeight) {
          return;
        }
      }
      const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context;
        return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
      });
      if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
        return;
      }
      const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context2;
          if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
      events.emit("dismiss", {
        type: "outsidePress",
        data: {
          returnFocus: nested ? {
            preventScroll: true
          } : isVirtualClick(event) || isVirtualPointerEvent(event)
        }
      });
      onOpenChange(false);
    }
    function onScroll() {
      onOpenChange(false);
    }
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", onKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, onOutsidePress);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", onKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, onOutsidePress);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, nested]);
  reactExports.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false);
          }
        }
      },
      floating: {
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
};
const useFocus = function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    keyboardOnly = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = reactExports.useRef("");
  const blockFocusRef = reactExports.useRef(false);
  const timeoutRef = reactExports.useRef();
  reactExports.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;
    function onBlur() {
      if (!open && isHTMLElement(domReference) && domReference === activeElement$1(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [floating, domReference, open, enabled]);
  reactExports.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === "referencePress" || payload.type === "escapeKey") {
        blockFocusRef.current = true;
      }
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref2) {
          let {
            pointerType
          } = _ref2;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }
          if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard") && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = setTimeout(() => {
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
};
let isPreventScrollSupported = false;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index2, cols, prevRow) {
  return Math.floor(index2 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index2) {
  return index2 < 0 || index2 >= listRef.current.length;
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index2 = startingIndex;
  do {
    var _list$index, _list$index2;
    index2 = index2 + (decrement ? -amount : amount);
  } while (index2 >= 0 && index2 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index2) : list[index2] == null || ((_list$index = list[index2]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index2]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
  return index2;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
const useListNavigation = function(_ref, _temp2) {
  let {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference
    }
  } = _ref;
  let {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true
  } = _temp2 === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null,
    onNavigate: () => {
    }
  } : _temp2;
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEvent(unstable_onNavigate);
  const focusItemOnOpenRef = reactExports.useRef(focusItemOnOpen);
  const indexRef = reactExports.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = reactExports.useRef(null);
  const isPointerModalityRef = reactExports.useRef(true);
  const previousOnNavigateRef = reactExports.useRef(onNavigate);
  const previousOpenRef = reactExports.useRef(open);
  const forceSyncFocus = reactExports.useRef(false);
  const forceScrollIntoViewRef = reactExports.useRef(false);
  const disabledIndicesRef = useLatestRef(disabledIndices);
  const latestOpenRef = useLatestRef(open);
  const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
  const [activeId, setActiveId] = reactExports.useState();
  const focusItem = reactExports.useCallback(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (virtual) {
      setActiveId(item2 == null ? void 0 : item2.id);
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null ? void 0 : item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  }, [virtual, scrollItemIntoViewRef]);
  index(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate(selectedIndex);
      }
    } else if (previousOpenRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, selectedIndex, onNavigate]);
  index(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousOpenRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousOpenRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
          onNavigate(indexRef.current);
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index(() => {
    if (!enabled) {
      return;
    }
    if (previousOpenRef.current && !open) {
      var _tree$nodesRef$curren, _tree$nodesRef$curren2;
      const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
      if (parentFloating && !contains(parentFloating, activeElement$1(getDocument(parentFloating)))) {
        parentFloating.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, open, tree, parentId]);
  index(() => {
    keyRef.current = null;
    previousOnNavigateRef.current = onNavigate;
    previousOpenRef.current = open;
  });
  const hasActiveIndex = activeIndex != null;
  const item = reactExports.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index2 = listRef.current.indexOf(currentTarget);
      if (index2 !== -1) {
        onNavigate(index2);
      }
    }
    const props = {
      onFocus(_ref2) {
        let {
          currentTarget
        } = _ref2;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref3) => {
        let {
          currentTarget
        } = _ref3;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref4) {
          let {
            currentTarget
          } = _ref4;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave() {
          if (!isPointerModalityRef.current) {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          reactDomExports.flushSync(() => onNavigate(null));
          if (!virtual) {
            var _refs$floating$curren;
            (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return props;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false);
        if (isHTMLElement(domReference)) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const prevIndex = indexRef.current;
        if (event.key === ARROW_UP) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices: disabledIndices2
            });
            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset3 = maxIndex - (maxCol - col);
              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset3 : offset3 - cols;
              }
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (event.key === ARROW_DOWN) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices: disabledIndices2
            });
            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices: disabledIndices2
              });
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (orientation === "both") {
          const prevRow = Math.floor(prevIndex / cols);
          if (event.key === ARROW_RIGHT) {
            stopEvent(event);
            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          if (event.key === ARROW_LEFT) {
            stopEvent(event);
            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2,
                decrement: true
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          const lastRow = Math.floor(maxIndex / cols) === prevRow;
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            } else {
              indexRef.current = prevIndex;
            }
          }
          onNavigate(indexRef.current);
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement$1(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": activeId
    };
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          if (virtual && open) {
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          const isNavigationKey = isArrowKey || event.key === "Enter" || event.key === " " || event.key === "";
          if (isNavigationKey) {
            keyRef.current = event.key;
          }
          if (nested) {
            if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true);
              }
            }
            return;
          }
          if (isMainOrientationKey(event.key, orientation)) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true);
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
};
function useMergeRefs(refs) {
  return reactExports.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
const useRole = function(_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = "dialog"
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId();
  const referenceId = useId();
  return reactExports.useMemo(() => {
    const floatingProps = {
      id: rootId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === "tooltip") {
      return {
        reference: {
          "aria-describedby": open ? rootId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": role === "alertdialog" ? "dialog" : role,
        "aria-controls": open ? rootId : void 0,
        ...role === "listbox" && {
          role: "combobox"
        },
        ...role === "menu" && {
          id: referenceId
        }
      },
      floating: {
        ...floatingProps,
        ...role === "menu" && {
          "aria-labelledby": referenceId
        }
      }
    };
  }, [enabled, role, open, rootId, referenceId]);
};
const camelCaseToKebabCase = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = reactExports.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  reactExports.useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, durationMs]);
  return isMounted;
}
function useTransitionStatus(_ref, _temp) {
  let {
    open,
    elements: {
      floating
    }
  } = _ref;
  let {
    duration = 250
  } = _temp === void 0 ? {} : _temp;
  const isNumberDuration = typeof duration === "number";
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [initiated, setInitiated] = reactExports.useState(false);
  const [status, setStatus] = reactExports.useState("unmounted");
  const isMounted = useDelayUnmount(open, closeDuration);
  index(() => {
    if (initiated && !isMounted) {
      setStatus("unmounted");
    }
  }, [initiated, isMounted]);
  index(() => {
    if (!floating) return;
    if (open) {
      setStatus("initial");
      const frame = requestAnimationFrame(() => {
        setStatus("open");
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    } else {
      setInitiated(true);
      setStatus("close");
    }
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
function useTransitionStyles(context, _temp2) {
  let {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = _temp2 === void 0 ? {} : _temp2;
  const placement = context.placement;
  const side = placement.split("-")[0];
  const [styles, setStyles] = reactExports.useState({});
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = useLatestRef(unstable_initial);
  const openRef = useLatestRef(unstable_open);
  const closeRef = useLatestRef(unstable_close);
  const commonRef = useLatestRef(unstable_common);
  const isNumberDuration = typeof duration === "number";
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  index(() => {
    const fnArgs = {
      side,
      placement
    };
    const initial = initialRef.current;
    const close = closeRef.current;
    const open = openRef.current;
    const common = commonRef.current;
    const initialStyles = typeof initial === "function" ? initial(fnArgs) : initial;
    const closeStyles = typeof close === "function" ? close(fnArgs) : close;
    const commonStyles = typeof common === "function" ? common(fnArgs) : common;
    const openStyles = (typeof open === "function" ? open(fnArgs) : open) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    if (status === "initial") {
      setStyles((styles2) => ({
        transitionProperty: styles2.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === "open") {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(","),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === "close") {
      const styles2 = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles2).map(camelCaseToKebabCase).join(","),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles2
      });
    }
  }, [side, placement, closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status]);
  return {
    isMounted,
    styles
  };
}
const useTypeahead = function(_ref, _temp) {
  var _ref2;
  let {
    open,
    dataRef
  } = _ref;
  let {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch = () => {
    },
    enabled = true,
    findMatch = null,
    resetMs = 1e3,
    ignoreKeys = [],
    selectedIndex = null
  } = _temp === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null
  } : _temp;
  const timeoutIdRef = reactExports.useRef();
  const stringRef = reactExports.useRef("");
  const prevIndexRef = reactExports.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
  const matchIndexRef = reactExports.useRef(null);
  const onMatch = useEvent(unstable_onMatch);
  const findMatchRef = useLatestRef(findMatch);
  const ignoreKeysRef = useLatestRef(ignoreKeys);
  index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index(() => {
    if (open && stringRef.current === "") {
      var _ref3;
      prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function onKeyDown(event) {
      const target = getTarget(event.nativeEvent);
      if (isElement(target) && (activeElement$1(getDocument(target)) !== event.currentTarget ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false)) {
        return;
      }
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        dataRef.current.typing = true;
        if (event.key === " ") {
          stopEvent(event);
        }
      }
      const listContent = listRef.current;
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        dataRef.current.typing = false;
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const orderedList = [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)];
      const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
      const index2 = str ? listContent.indexOf(str) : -1;
      if (index2 !== -1) {
        onMatch(index2);
        matchIndexRef.current = index2;
      }
    }
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown
      }
    };
  }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch]);
};
function getArgsWithCustomFloatingHeight(args, height) {
  return {
    ...args,
    rects: {
      ...args.rects,
      floating: {
        ...args.rects.floating,
        height
      }
    }
  };
}
const inner = (props) => ({
  name: "inner",
  options: props,
  async fn(middlewareArguments) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = middlewareArguments;
    const item = listRef.current[index2];
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...middlewareArguments,
      ...await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(middlewareArguments)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        reactDomExports.flushSync(() => onFallbackChange(true));
      } else {
        reactDomExports.flushSync(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
const useInnerOffset = (_ref, _ref2) => {
  let {
    open,
    elements
  } = _ref;
  let {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = _ref2;
  const onChange = useEvent(unstable_onChange);
  const controlledScrollingRef = reactExports.useRef(false);
  const prevScrollTopRef = reactExports.useRef(null);
  const initialOverflowRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        reactDomExports.flushSync(() => {
          onChange((d) => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return reactExports.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              reactDomExports.flushSync(() => onChange((d) => d + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
};
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside2 = !isInside2;
    }
  }
  return isInside2;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
function safePolygon(_temp) {
  let {
    restMs = 0,
    buffer = 0.5,
    blockPointerEvents = false
  } = _temp === void 0 ? {} : _temp;
  let timeoutId2;
  let isInsideRect = false;
  let hasLanded = false;
  const fn = (_ref) => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId2);
        onClose();
      }
      clearTimeout(timeoutId2);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split("-")[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      if (isOverFloatingEl) {
        hasLanded = true;
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }
      if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }
      if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        return close();
      }
      let rectPoly = [];
      switch (side) {
        case "top":
          rectPoly = [[rect.left, refRect.top + 1], [rect.left, rect.bottom - 1], [rect.right, rect.bottom - 1], [rect.right, refRect.top + 1]];
          isInsideRect = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1;
          break;
        case "bottom":
          rectPoly = [[rect.left, rect.top + 1], [rect.left, refRect.bottom - 1], [rect.right, refRect.bottom - 1], [rect.right, rect.top + 1]];
          isInsideRect = clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom;
          break;
        case "left":
          rectPoly = [[rect.right - 1, rect.bottom], [rect.right - 1, rect.top], [refRect.left + 1, rect.top], [refRect.left + 1, rect.bottom]];
          isInsideRect = clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom;
          break;
        case "right":
          rectPoly = [[refRect.right - 1, rect.bottom], [refRect.right - 1, rect.top], [rect.left + 1, rect.top], [rect.left + 1, rect.bottom]];
          isInsideRect = clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
          break;
      }
      function getPolygon(_ref3) {
        let [x2, y2] = _ref3;
        const isFloatingWider = rect.width > refRect.width;
        const isFloatingTaller = rect.height > refRect.height;
        switch (side) {
          case "top": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "bottom": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "left": {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
            return [...commonPoints, cursorPointOne, cursorPointTwo];
          }
          case "right": {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        }
      }
      const poly = isInsideRect ? rectPoly : getPolygon([x, y]);
      if (isInsideRect) {
        return;
      } else if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isPointInPolygon([clientX, clientY], poly)) {
        close();
      } else if (restMs && !hasLanded) {
        timeoutId2 = setTimeout(close, restMs);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating$1(options);
  const tree = useFloatingTree();
  const domReferenceRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef({});
  const events = reactExports.useState(() => createPubSub())[0];
  const [domReference, setDomReference] = reactExports.useState(null);
  const setPositionReference = reactExports.useCallback((node) => {
    const positionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = reactExports.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = reactExports.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = reactExports.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent(unstable_onOpenChange);
  const context = reactExports.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, events, open, onOpenChange, refs, elements]);
  index(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return reactExports.useMemo(() => ({
    ...position,
    context,
    refs,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, context, setReference, setPositionReference]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
const useInteractions = function(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = reactExports.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return reactExports.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
};
const floatingUi_react_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FloatingDelayGroup,
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  FloatingTree,
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  flip,
  getOverflowAncestors,
  hide,
  inline,
  inner,
  limitShift,
  offset,
  platform,
  safePolygon,
  shift,
  size,
  useClick,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingPortalNode,
  useFloatingTree,
  useFocus,
  useHover,
  useId,
  useInnerOffset,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTransitionStatus,
  useTransitionStyles,
  useTypeahead
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(floatingUi_react_esm);
export {
  getDefaultExportFromCjs as a,
  commonjsGlobal as c,
  getAugmentedNamespace as g,
  require$$1 as r
};
