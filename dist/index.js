import g, { PureComponent as E, createRef as _ } from "react";
const M = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: "px"
}, f = (l, t, e) => Math.min(Math.max(l, t), e), S = (...l) => l.filter((t) => t && typeof t == "string").join(" "), P = (l, t) => l === t || l.width === t.width && l.height === t.height && l.x === t.x && l.y === t.y && l.unit === t.unit;
function H(l, t, e, o) {
  const i = y(l, e, o);
  return l.width && (i.height = i.width / t), l.height && (i.width = i.height * t), i.y + i.height > o && (i.height = o - i.y, i.width = i.height * t), i.x + i.width > e && (i.width = e - i.x, i.height = i.width / t), l.unit === "%" ? D(i, e, o) : i;
}
function N(l, t, e) {
  const o = y(l, t, e);
  return o.x = (t - o.width) / 2, o.y = (e - o.height) / 2, l.unit === "%" ? D(o, t, e) : o;
}
function D(l, t, e) {
  return l.unit === "%" ? { ...M, ...l, unit: "%" } : {
    unit: "%",
    x: l.x ? l.x / t * 100 : 0,
    y: l.y ? l.y / e * 100 : 0,
    width: l.width ? l.width / t * 100 : 0,
    height: l.height ? l.height / e * 100 : 0
  };
}
function y(l, t, e) {
  return l.unit ? l.unit === "px" ? { ...M, ...l, unit: "px" } : {
    unit: "px",
    x: l.x ? l.x * t / 100 : 0,
    y: l.y ? l.y * e / 100 : 0,
    width: l.width ? l.width * t / 100 : 0,
    height: l.height ? l.height * e / 100 : 0
  } : { ...M, ...l, unit: "px" };
}
function X(l, t, e, o, i, r = 0, h = 0, w = o, s = i) {
  const n = { ...l };
  let a = Math.min(r, o), c = Math.min(h, i), p = Math.min(w, o), d = Math.min(s, i);
  t && (t > 1 ? (a = h ? h * t : a, c = a / t, p = w * t) : (c = r ? r / t : c, a = c * t, d = s / t)), n.y < 0 && (n.height = Math.max(n.height + n.y, c), n.y = 0), n.x < 0 && (n.width = Math.max(n.width + n.x, a), n.x = 0);
  const u = o - (n.x + n.width);
  u < 0 && (n.x = Math.min(n.x, o - a), n.width += u);
  const C = i - (n.y + n.height);
  if (C < 0 && (n.y = Math.min(n.y, i - c), n.height += C), n.width < a && ((e === "sw" || e == "nw") && (n.x -= a - n.width), n.width = a), n.height < c && ((e === "nw" || e == "ne") && (n.y -= c - n.height), n.height = c), n.width > p && ((e === "sw" || e == "nw") && (n.x -= p - n.width), n.width = p), n.height > d && ((e === "nw" || e == "ne") && (n.y -= d - n.height), n.height = d), t) {
    const R = n.width / n.height;
    if (R < t) {
      const x = Math.max(n.width / t, c);
      (e === "nw" || e == "ne") && (n.y -= x - n.height), n.height = x;
    } else if (R > t) {
      const x = Math.max(n.height * t, a);
      (e === "sw" || e == "nw") && (n.x -= x - n.width), n.width = x;
    }
  }
  return n;
}
function K(l, t, e, o) {
  const i = { ...l };
  return t === "ArrowLeft" ? o === "nw" ? (i.x -= e, i.y -= e, i.width += e, i.height += e) : o === "w" ? (i.x -= e, i.width += e) : o === "sw" ? (i.x -= e, i.width += e, i.height += e) : o === "ne" ? (i.y += e, i.width -= e, i.height -= e) : o === "e" ? i.width -= e : o === "se" && (i.width -= e, i.height -= e) : t === "ArrowRight" && (o === "nw" ? (i.x += e, i.y += e, i.width -= e, i.height -= e) : o === "w" ? (i.x += e, i.width -= e) : o === "sw" ? (i.x += e, i.width -= e, i.height -= e) : o === "ne" ? (i.y -= e, i.width += e, i.height += e) : o === "e" ? i.width += e : o === "se" && (i.width += e, i.height += e)), t === "ArrowUp" ? o === "nw" ? (i.x -= e, i.y -= e, i.width += e, i.height += e) : o === "n" ? (i.y -= e, i.height += e) : o === "ne" ? (i.y -= e, i.width += e, i.height += e) : o === "sw" ? (i.x += e, i.width -= e, i.height -= e) : o === "s" ? i.height -= e : o === "se" && (i.width -= e, i.height -= e) : t === "ArrowDown" && (o === "nw" ? (i.x += e, i.y += e, i.width -= e, i.height -= e) : o === "n" ? (i.y += e, i.height -= e) : o === "ne" ? (i.y += e, i.width -= e, i.height -= e) : o === "sw" ? (i.x -= e, i.width += e, i.height += e) : o === "s" ? i.height += e : o === "se" && (i.width += e, i.height += e)), i;
}
const b = { capture: !0, passive: !1 }, v = class m extends E {
  constructor() {
    super(...arguments), this.docMoveBound = !1, this.mouseDownOnCrop = !1, this.dragStarted = !1, this.evData = {
      startClientX: 0,
      startClientY: 0,
      startCropX: 0,
      startCropY: 0,
      clientX: 0,
      clientY: 0,
      isResize: !0
    }, this.componentRef = _(), this.mediaRef = _(), this.initChangeCalled = !1, this.state = {
      cropIsActive: !1,
      newCropIsBeingDrawn: !1
    }, this.onCropPointerDown = (t) => {
      const { crop: e, disabled: o } = this.props, i = this.getBox();
      if (!e)
        return;
      const r = y(e, i.width, i.height);
      if (o)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const h = t.target.dataset.ord, w = !!h;
      let s = t.clientX, n = t.clientY, a = r.x, c = r.y;
      if (h) {
        const p = t.clientX - i.x, d = t.clientY - i.y;
        let u = 0, C = 0;
        h === "ne" || h == "e" ? (u = p - (r.x + r.width), C = d - r.y, a = r.x, c = r.y + r.height) : h === "se" || h === "s" ? (u = p - (r.x + r.width), C = d - (r.y + r.height), a = r.x, c = r.y) : h === "sw" || h == "w" ? (u = p - r.x, C = d - (r.y + r.height), a = r.x + r.width, c = r.y) : (h === "nw" || h == "n") && (u = p - r.x, C = d - r.y, a = r.x + r.width, c = r.y + r.height), s = a + i.x + u, n = c + i.y + C;
      }
      this.evData = {
        startClientX: s,
        startClientY: n,
        startCropX: a,
        startCropY: c,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: w,
        ord: h
      }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
    }, this.onComponentPointerDown = (t) => {
      const { crop: e, disabled: o, locked: i, keepSelection: r, onChange: h } = this.props, w = this.getBox();
      if (o || i || r && e)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const s = t.clientX - w.x, n = t.clientY - w.y, a = {
        unit: "px",
        x: s,
        y: n,
        width: 0,
        height: 0
      };
      this.evData = {
        startClientX: t.clientX,
        startClientY: t.clientY,
        startCropX: s,
        startCropY: n,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: !0
      }, this.mouseDownOnCrop = !0, h(y(a, w.width, w.height), D(a, w.width, w.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
    }, this.onDocPointerMove = (t) => {
      const { crop: e, disabled: o, onChange: i, onDragStart: r } = this.props, h = this.getBox();
      if (o || !e || !this.mouseDownOnCrop)
        return;
      t.cancelable && t.preventDefault(), this.dragStarted || (this.dragStarted = !0, r && r(t));
      const { evData: w } = this;
      w.clientX = t.clientX, w.clientY = t.clientY;
      let s;
      w.isResize ? s = this.resizeCrop() : s = this.dragCrop(), P(e, s) || i(
        y(s, h.width, h.height),
        D(s, h.width, h.height)
      );
    }, this.onComponentKeyDown = (t) => {
      const { crop: e, disabled: o, onChange: i, onComplete: r } = this.props;
      if (o)
        return;
      const h = t.key;
      let w = !1;
      if (!e)
        return;
      const s = this.getBox(), n = this.makePixelCrop(s), c = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? m.nudgeStepLarge : t.shiftKey ? m.nudgeStepMedium : m.nudgeStep;
      if (h === "ArrowLeft" ? (n.x -= c, w = !0) : h === "ArrowRight" ? (n.x += c, w = !0) : h === "ArrowUp" ? (n.y -= c, w = !0) : h === "ArrowDown" && (n.y += c, w = !0), w) {
        t.cancelable && t.preventDefault(), n.x = f(n.x, 0, s.width - n.width), n.y = f(n.y, 0, s.height - n.height);
        const p = y(n, s.width, s.height), d = D(n, s.width, s.height);
        i(p, d), r && r(p, d);
      }
    }, this.onHandlerKeyDown = (t, e) => {
      const {
        aspect: o = 0,
        crop: i,
        disabled: r,
        minWidth: h = 0,
        minHeight: w = 0,
        maxWidth: s,
        maxHeight: n,
        onChange: a,
        onComplete: c
      } = this.props, p = this.getBox();
      if (r || !i)
        return;
      if (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight")
        t.stopPropagation(), t.preventDefault();
      else
        return;
      const u = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? m.nudgeStepLarge : t.shiftKey ? m.nudgeStepMedium : m.nudgeStep, C = y(i, p.width, p.height), R = K(C, t.key, u, e), x = X(
        R,
        o,
        e,
        p.width,
        p.height,
        h,
        w,
        s,
        n
      );
      if (!P(i, x)) {
        const Y = D(x, p.width, p.height);
        a(x, Y), c && c(x, Y);
      }
    }, this.onDocPointerDone = (t) => {
      const { crop: e, disabled: o, onComplete: i, onDragEnd: r } = this.props, h = this.getBox();
      this.unbindDocMove(), !(o || !e) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, r && r(t), i && i(y(e, h.width, h.height), D(e, h.width, h.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
    }, this.onDragFocus = (t) => {
      var e;
      (e = this.componentRef.current) == null || e.scrollTo(0, 0);
    };
  }
  get document() {
    return document;
  }
  // We unfortunately get the bounding box every time as x+y changes
  // due to scrolling.
  getBox() {
    const t = this.mediaRef.current;
    if (!t)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: e, y: o, width: i, height: r } = t.getBoundingClientRect();
    return { x: e, y: o, width: i, height: r };
  }
  componentDidUpdate(t) {
    const { crop: e, onComplete: o } = this.props;
    if (o && !t.crop && e) {
      const { width: i, height: r } = this.getBox();
      i && r && o(y(e, i, r), D(e, i, r));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect();
  }
  bindDocMove() {
    this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, b), this.document.addEventListener("pointerup", this.onDocPointerDone, b), this.document.addEventListener("pointercancel", this.onDocPointerDone, b), this.docMoveBound = !0);
  }
  unbindDocMove() {
    this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, b), this.document.removeEventListener("pointerup", this.onDocPointerDone, b), this.document.removeEventListener("pointercancel", this.onDocPointerDone, b), this.docMoveBound = !1);
  }
  getCropStyle() {
    const { crop: t } = this.props;
    if (t)
      return {
        top: `${t.y}${t.unit}`,
        left: `${t.x}${t.unit}`,
        width: `${t.width}${t.unit}`,
        height: `${t.height}${t.unit}`
      };
  }
  dragCrop() {
    const { evData: t } = this, e = this.getBox(), o = this.makePixelCrop(e), i = t.clientX - t.startClientX, r = t.clientY - t.startClientY;
    return o.x = f(t.startCropX + i, 0, e.width - o.width), o.y = f(t.startCropY + r, 0, e.height - o.height), o;
  }
  getPointRegion(t, e, o, i) {
    const { evData: r } = this, h = r.clientX - t.x, w = r.clientY - t.y;
    let s;
    i && e ? s = e === "nw" || e === "n" || e === "ne" : s = w < r.startCropY;
    let n;
    return o && e ? n = e === "nw" || e === "w" || e === "sw" : n = h < r.startCropX, n ? s ? "nw" : "sw" : s ? "ne" : "se";
  }
  resolveMinDimensions(t, e, o = 0, i = 0) {
    let r = Math.min(o, t.width), h = Math.min(i, t.height);
    return !e || !r && !h ? [r, h] : e > 1 ? r ? [r, r / e] : [h * e, h] : h ? [h * e, h] : [r, r / e];
  }
  resizeCrop() {
    const { evData: t } = this, { aspect: e = 0, maxWidth: o, maxHeight: i } = this.props, r = this.getBox(), [h, w] = this.resolveMinDimensions(r, e, this.props.minWidth, this.props.minHeight);
    let s = this.makePixelCrop(r), n = this.getPointRegion(r, t.ord, h, w);
    const a = t.ord || n;
    let c = t.clientX - t.startClientX, p = t.clientY - t.startClientY;
    (h && a === "nw" || a === "w" || a === "sw") && (c = Math.min(c, -h)), (w && a === "nw" || a === "n" || a === "ne") && (p = Math.min(p, -w));
    const d = {
      unit: "px",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    n === "ne" ? (d.x = t.startCropX, d.width = c, e ? (d.height = d.width / e, d.y = t.startCropY - d.height) : (d.height = Math.abs(p), d.y = t.startCropY - d.height)) : n === "se" ? (d.x = t.startCropX, d.y = t.startCropY, d.width = c, e ? d.height = d.width / e : d.height = p) : n === "sw" ? (d.x = t.startCropX + c, d.y = t.startCropY, d.width = Math.abs(c), e ? d.height = d.width / e : d.height = p) : n === "nw" && (d.x = t.startCropX + c, d.width = Math.abs(c), e ? (d.height = d.width / e, d.y = t.startCropY - d.height) : (d.height = Math.abs(p), d.y = t.startCropY + p));
    const u = X(
      d,
      e,
      n,
      r.width,
      r.height,
      h,
      w,
      o,
      i
    );
    return e || m.xyOrds.indexOf(a) > -1 ? s = u : m.xOrds.indexOf(a) > -1 ? (s.x = u.x, s.width = u.width) : m.yOrds.indexOf(a) > -1 && (s.y = u.y, s.height = u.height), s.x = f(s.x, 0, r.width - s.width), s.y = f(s.y, 0, r.height - s.height), s;
  }
  createCropSelection() {
    const {
      ariaLabels: t = m.defaultProps.ariaLabels,
      disabled: e,
      locked: o,
      renderSelectionAddon: i,
      ruleOfThirds: r,
      crop: h,
      onMouseEnter: w,
      onMouseLeave: s
    } = this.props, n = this.getCropStyle();
    if (h)
      return /* @__PURE__ */ g.createElement(
        "div",
        {
          style: n,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": t.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          onMouseEnter: () => w ? w() : null,
          onMouseLeave: () => s ? s() : null,
          role: "group"
        },
        !e && !o && /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": t.nwDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "nw"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": t.nDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "n"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": t.neDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "ne"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": t.eDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "e"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": t.seDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "se"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": t.sDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "s"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": t.swDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "sw"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": t.wDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "w"),
            role: "button"
          }
        )),
        i && /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__selection-addon", onMouseDown: (a) => a.stopPropagation() }, i(this.state)),
        r && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
      );
  }
  makePixelCrop(t) {
    const e = { ...M, ...this.props.crop || {} };
    return y(e, t.width, t.height);
  }
  render() {
    const { aspect: t, children: e, circularCrop: o, className: i, crop: r, disabled: h, locked: w, style: s, ruleOfThirds: n } = this.props, { cropIsActive: a, newCropIsBeingDrawn: c } = this.state, p = r ? this.createCropSelection() : null, d = S(
      "ReactCrop",
      i,
      a && "ReactCrop--active",
      h && "ReactCrop--disabled",
      w && "ReactCrop--locked",
      c && "ReactCrop--new-crop",
      r && t && "ReactCrop--fixed-aspect",
      r && o && "ReactCrop--circular-crop",
      r && n && "ReactCrop--rule-of-thirds",
      !this.dragStarted && r && !r.width && !r.height && "ReactCrop--invisible-crop",
      o && "ReactCrop--no-animate"
    );
    return /* @__PURE__ */ g.createElement("div", { ref: this.componentRef, className: d, style: s }, /* @__PURE__ */ g.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, e), p);
  }
};
v.xOrds = ["e", "w"];
v.yOrds = ["n", "s"];
v.xyOrds = ["nw", "ne", "se", "sw"];
v.nudgeStep = 1;
v.nudgeStepMedium = 10;
v.nudgeStepLarge = 100;
v.defaultProps = {
  ariaLabels: {
    cropArea: "Use the arrow keys to move the crop selection area",
    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
  }
};
let I = v;
export {
  I as Component,
  I as ReactCrop,
  P as areCropsEqual,
  N as centerCrop,
  f as clamp,
  S as cls,
  X as containCrop,
  D as convertToPercentCrop,
  y as convertToPixelCrop,
  I as default,
  M as defaultCrop,
  H as makeAspectCrop,
  K as nudgeCrop
};
