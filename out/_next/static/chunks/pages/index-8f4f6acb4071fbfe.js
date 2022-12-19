(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(9389);
        },
      ]);
    },
    9749: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(6495).Z,
        n = a(2648).Z,
        i = a(1598).Z,
        l = a(7273).Z,
        o = i(a(7294)),
        s = n(a(3121)),
        c = a(2675),
        d = a(139),
        u = a(8730);
      a(7238);
      var g = n(a(9824));
      let h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
      function f(e) {
        return void 0 !== e.default;
      }
      function m(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function p(e, t, a, n, i) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let l = "decode" in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (null == a ? void 0 : a.current) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let i = !1,
                l = !1;
              a.current(
                r({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => l,
                  persist() {},
                  preventDefault() {
                    (i = !0), t.preventDefault();
                  },
                  stopPropagation() {
                    (l = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == n ? void 0 : n.current) && n.current(e);
          }
        });
      }
      let v = o.forwardRef((e, t) => {
          var {
              imgAttributes: a,
              heightInt: n,
              widthInt: i,
              qualityInt: s,
              className: c,
              imgStyle: d,
              blurStyle: u,
              isLazy: g,
              fill: h,
              placeholder: f,
              loading: m,
              srcString: v,
              config: b,
              unoptimized: x,
              loader: j,
              onLoadRef: w,
              onLoadingCompleteRef: y,
              onLoad: N,
              onError: _,
            } = e,
            E = l(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "onLoad",
              "onError",
            ]);
          return (
            (m = g ? "lazy" : m),
            o.default.createElement(
              o.default.Fragment,
              null,
              o.default.createElement(
                "img",
                Object.assign({}, E, a, {
                  width: i,
                  height: n,
                  decoding: "async",
                  "data-nimg": h ? "fill" : "1",
                  className: c,
                  loading: m,
                  style: r({}, d, u),
                  ref: o.useCallback(
                    (e) => {
                      t &&
                        ("function" == typeof t
                          ? t(e)
                          : "object" == typeof t && (t.current = e)),
                        e &&
                          (_ && (e.src = e.src),
                          e.complete && p(e, v, w, y, x));
                    },
                    [v, w, y, _, x, t]
                  ),
                  onLoad(e) {
                    let t = e.currentTarget;
                    p(t, v, w, y, x);
                  },
                  onError(e) {
                    let { style: t } = e.currentTarget;
                    "transparent" === t.color && (t.color = ""),
                      "blur" === f &&
                        t.backgroundImage &&
                        ((t.backgroundSize = ""),
                        (t.backgroundPosition = ""),
                        (t.backgroundRepeat = ""),
                        (t.backgroundImage = "")),
                      _ && _(e);
                  },
                })
              )
            )
          );
        }),
        b = o.forwardRef((e, t) => {
          let a, n;
          var i,
            {
              src: p,
              sizes: b,
              unoptimized: x = !1,
              priority: j = !1,
              loading: w,
              className: y,
              quality: N,
              width: _,
              height: E,
              fill: S,
              style: k,
              onLoad: C,
              onLoadingComplete: z,
              placeholder: P = "empty",
              blurDataURL: R,
              layout: O,
              objectFit: I,
              objectPosition: A,
              lazyBoundary: L,
              lazyRoot: M,
            } = e,
            T = l(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let B = o.useContext(u.ImageConfigContext),
            D = o.useMemo(() => {
              let e = h || B || d.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                a = e.deviceSizes.sort((e, t) => e - t);
              return r({}, e, { allSizes: t, deviceSizes: a });
            }, [B]),
            F = T,
            W = F.loader || g.default;
          if ((delete F.loader, "__next_img_default" in W)) {
            if ("custom" === D.loader)
              throw Error(
                'Image with src "'.concat(p, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let G = W;
            W = (e) => {
              let { config: t } = e,
                a = l(e, ["config"]);
              return G(a);
            };
          }
          if (O) {
            "fill" === O && (S = !0);
            let q = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[O];
            q && (k = r({}, k, q));
            let V = { responsive: "100vw", fill: "100vw" }[O];
            V && !b && (b = V);
          }
          let Z = "",
            U = m(_),
            H = m(E);
          if ("object" == typeof (i = p) && (f(i) || void 0 !== i.src)) {
            let J = f(p) ? p.default : p;
            if (!J.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(J)
                )
              );
            if (!J.height || !J.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(J)
                )
              );
            if (
              ((a = J.blurWidth),
              (n = J.blurHeight),
              (R = R || J.blurDataURL),
              (Z = J.src),
              !S)
            ) {
              if (U || H) {
                if (U && !H) {
                  let X = U / J.width;
                  H = Math.round(J.height * X);
                } else if (!U && H) {
                  let $ = H / J.height;
                  U = Math.round(J.width * $);
                }
              } else (U = J.width), (H = J.height);
            }
          }
          let K = !j && ("lazy" === w || void 0 === w);
          ((p = "string" == typeof p ? p : Z).startsWith("data:") ||
            p.startsWith("blob:")) &&
            ((x = !0), (K = !1)),
            D.unoptimized && (x = !0);
          let Q = m(N),
            Y = Object.assign(
              S
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: I,
                    objectPosition: A,
                  }
                : {},
              { color: "transparent" },
              k
            ),
            ee =
              "blur" === P && R
                ? {
                    backgroundSize: Y.objectFit || "cover",
                    backgroundPosition: Y.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: U,
                          heightInt: H,
                          blurWidth: a,
                          blurHeight: n,
                          blurDataURL: R,
                        }),
                        '")'
                      ),
                  }
                : {},
            et = (function (e) {
              let {
                config: t,
                src: a,
                unoptimized: r,
                width: n,
                quality: i,
                sizes: l,
                loader: o,
              } = e;
              if (r) return { src: a, srcSet: void 0, sizes: void 0 };
              let { widths: s, kind: c } = (function (e, t, a) {
                  let { deviceSizes: r, allSizes: n } = e;
                  if (a) {
                    let i = /(^|\s)(1?\d?\d)vw/g,
                      l = [];
                    for (let o; (o = i.exec(a)); o) l.push(parseInt(o[2]));
                    if (l.length) {
                      let s = 0.01 * Math.min(...l);
                      return {
                        widths: n.filter((e) => e >= r[0] * s),
                        kind: "w",
                      };
                    }
                    return { widths: n, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: r, kind: "w" };
                  let c = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => n.find((t) => t >= e) || n[n.length - 1]
                      )
                    ),
                  ];
                  return { widths: c, kind: "x" };
                })(t, n, l),
                d = s.length - 1;
              return {
                sizes: l || "w" !== c ? l : "100vw",
                srcSet: s
                  .map((e, r) =>
                    ""
                      .concat(
                        o({ config: t, src: a, quality: i, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : r + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: o({ config: t, src: a, quality: i, width: s[d] }),
              };
            })({
              config: D,
              src: p,
              unoptimized: x,
              width: U,
              quality: Q,
              sizes: b,
              loader: W,
            }),
            ea = p,
            er = {
              imageSrcSet: et.srcSet,
              imageSizes: et.sizes,
              crossOrigin: F.crossOrigin,
            },
            en = o.useRef(C);
          o.useEffect(() => {
            en.current = C;
          }, [C]);
          let ei = o.useRef(z);
          o.useEffect(() => {
            ei.current = z;
          }, [z]);
          let el = r(
            {
              isLazy: K,
              imgAttributes: et,
              heightInt: H,
              widthInt: U,
              qualityInt: Q,
              className: y,
              imgStyle: Y,
              blurStyle: ee,
              loading: w,
              config: D,
              fill: S,
              unoptimized: x,
              placeholder: P,
              loader: W,
              srcString: ea,
              onLoadRef: en,
              onLoadingCompleteRef: ei,
            },
            F
          );
          return o.default.createElement(
            o.default.Fragment,
            null,
            o.default.createElement(v, Object.assign({}, el, { ref: t })),
            j
              ? o.default.createElement(
                  s.default,
                  null,
                  o.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + et.src + et.srcSet + et.sizes,
                        rel: "preload",
                        as: "image",
                        href: et.srcSet ? void 0 : et.src,
                      },
                      er
                    )
                  )
                )
              : null
          );
        });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2675: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: a,
              blurWidth: r,
              blurHeight: n,
              blurDataURL: i,
            } = e,
            l = r || t,
            o = n || a,
            s = i.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return l && o
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(l, " ")
                .concat(
                  o,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(r && n ? "1" : "20", "'/%3E")
                .concat(
                  s,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                i,
                "'/%3E%3C/svg%3E"
              );
        });
    },
    9824: function (e, t) {
      "use strict";
      function a(e) {
        let { config: t, src: a, width: r, quality: n } = e;
        return a.endsWith(".svg") && !t.dangerouslyAllowSVG
          ? a
          : ""
              .concat(t.path, "?url=")
              .concat(encodeURIComponent(a), "&w=")
              .concat(r, "&q=")
              .concat(n || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (a.__next_img_default = !0),
        (t.default = a);
    },
    9389: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var r = a(5893),
        n = a(9008),
        i = a.n(n),
        l = a(5675),
        o = a.n(l);
      let s = (e) =>
          (0, r.jsx)("nav", {
            className: "navbar navbar-expand-lg navbar-light bg-light",
            children: (0, r.jsxs)("div", {
              className: "container-fluid",
              children: [
                e.logo,
                (0, r.jsx)("button", {
                  className: "navbar-toggler",
                  type: "button",
                  "data-bs-toggle": "collapse",
                  "data-bs-target": "#navbarSupportedContent",
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: (0, r.jsx)("span", {
                    className: "navbar-toggler-icon",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "collapse navbar-collapse",
                  id: "navbarSupportedContent",
                  children: (0, r.jsx)("ul", {
                    className: "navbar-nav me-auto mb-2 mb-lg-0",
                    children: e.children,
                  }),
                }),
              ],
            }),
          }),
        c = (e) =>
          (0, r.jsxs)("a", {
            className: "navbar-brand",
            href: "#",
            children: [
              (0, r.jsx)(o(), {
                src: "/vercel.svg",
                className: "d-inline-block align-text-top",
                width: "50",
                height: "50",
                alt: "logo",
              }),
              "Logo",
            ],
          }),
        d = (e) => {
          let { label: t = "his", link: a = "#", ...n } = e;
          return (0, r.jsx)("li", {
            className: "nav-item",
            children: (0, r.jsx)("a", {
              className: "nav-link active",
              "aria-current": "page",
              href: a,
              children: t,
            }),
          });
        },
        u = (e) => {
          let { label: t = "hi", link: a = "#", ...n } = e;
          return (0, r.jsxs)("li", {
            className: "nav-item dropdown",
            children: [
              (0, r.jsx)("a", {
                className: "nav-link dropdown-toggle",
                href: a,
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: t,
              }),
              (0, r.jsxs)("ul", {
                className: "dropdown-menu",
                children: [
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: "Action",
                    }),
                  }),
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: "Another action",
                    }),
                  }),
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)("hr", {
                      className: "dropdown-divider",
                    }),
                  }),
                  (0, r.jsx)("li", {
                    children: (0, r.jsx)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: "Something else here",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        g = (e) => {
          let { color: t = "primary", ...a } = e;
          return (0, r.jsx)("div", {
            className: "alert alert-".concat(t),
            role: "alert",
            children: "A simple primary alert—check it out!",
          });
        };
      function h() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("nav", {
              className: "navbar navbar-expand-lg navbar-light bg-light",
              children: (0, r.jsxs)("div", {
                className: "container-fluid",
                children: [
                  (0, r.jsxs)("a", {
                    className: "navbar-brand",
                    href: "#",
                    children: [
                      (0, r.jsx)(o(), {
                        src: "/vercel.svg",
                        className: "d-inline-block align-text-top",
                        width: "50",
                        height: "50",
                        alt: "logo",
                      }),
                      "Logo",
                    ],
                  }),
                  (0, r.jsx)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: (0, r.jsx)("span", {
                      className: "navbar-toggler-icon",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: (0, r.jsx)("ul", {
                      className: "navbar-nav me-auto mb-2 mb-lg-0",
                      children: (0, r.jsx)("li", {
                        className: "nav-item",
                        children: (0, r.jsx)("a", {
                          className: "nav-link active",
                          "aria-current": "page",
                          href: "#",
                          children: "Home",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className: "container",
              children: [
                (0, r.jsxs)(i(), {
                  children: [
                    (0, r.jsx)("title", { children: "Create Next App" }),
                    (0, r.jsx)("meta", {
                      name: "description",
                      content: "Generated by create next app",
                    }),
                    (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                  ],
                }),
                (0, r.jsxs)("main", {
                  className: "main",
                  children: [
                    (0, r.jsxs)(s, {
                      logo: (0, r.jsx)(c, {}),
                      children: [
                        (0, r.jsx)(d, { label: "hi", link: "#" }),
                        (0, r.jsx)(d, { label: "Boy", link: "#" }),
                        (0, r.jsx)(u, { label: "hi", link: "#" }),
                      ],
                    }),
                    (0, r.jsxs)("h1", {
                      children: [
                        "Example heading ",
                        (0, r.jsx)("span", {
                          className: "badge bg-secondary",
                          children: "New",
                        }),
                      ],
                    }),
                    (0, r.jsx)(g, { color: "primary" }),
                  ],
                }),
                (0, r.jsx)("footer", {
                  className: "footer",
                  children: (0, r.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      "Powered by",
                      " ",
                      (0, r.jsx)("span", {
                        className: "logo",
                        children: (0, r.jsx)(o(), {
                          src: "/vercel.svg",
                          alt: "Vercel Logo",
                          width: 72,
                          height: 16,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    9008: function (e, t, a) {
      e.exports = a(3121);
    },
    5675: function (e, t, a) {
      e.exports = a(9749);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
