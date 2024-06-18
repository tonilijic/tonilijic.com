// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === "function" &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== "undefined" &&
    typeof module.require === "function" &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === "function" &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, "root", {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    awEvQ: [
      function (require, module, exports) {
        "use strict";
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets,
          acceptedAssets,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf("http") === 0
              ? location.hostname
              : "localhost")
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== "undefined"
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == "https:" &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? "wss"
              : "ws";
          var ws = new WebSocket(
            protocol + "://" + hostname + (port ? ":" + port : "") + "/"
          ); // Web extension context
          var extCtx =
            typeof chrome === "undefined"
              ? typeof browser === "undefined"
                ? null
                : browser
              : chrome; // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes("test.js");
          } // $FlowFixMe
          ws.onmessage = async function (event) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            acceptedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            var data = JSON.parse(event.data);
            if (data.type === "update") {
              // Remove error overlay if there is one
              if (typeof document !== "undefined") removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH
              ); // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === "css" ||
                  (asset.type === "js" &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle
                    ))
                );
              });
              if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== "undefined" &&
                  typeof CustomEvent !== "undefined"
                )
                  window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for (var i = 0; i < assetsToAccept.length; i++) {
                  var id = assetsToAccept[i][1];
                  if (!acceptedAssets[id])
                    hmrAcceptRun(assetsToAccept[i][0], id);
                }
              } else fullReload();
            }
            if (data.type === "error") {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  "\uD83D\uDEA8 [parcel]: " +
                    ansiDiagnostic.message +
                    "\n" +
                    stack +
                    "\n\n" +
                    ansiDiagnostic.hints.join("\n")
                );
              }
              if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          ws.onerror = function (e) {
            console.error(e.message);
          };
          ws.onclose = function () {
            console.warn(
              "[parcel] \uD83D\uDEA8 Connection to the HMR server was lost"
            );
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log("[parcel] âœ¨ Error resolved");
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                }, "")
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ðŸš¨ ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>ðŸ“ <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
          }
          errorHTML += "</div>";
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ("reload" in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            "href",
            link.getAttribute("href").split("?")[0] + "?" + Date.now()
          ); // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === "localhost"
                  ? new RegExp(
                      "^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" +
                        getPort()
                    ).test(href)
                  : href.indexOf(hostname + ":" + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === "js") {
            if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule")
                return import(asset.url + "?t=" + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension bugfix for Chromium
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3
                      ) {
                        if (
                          typeof ServiceWorkerGlobalScope != "undefined" &&
                          global instanceof ServiceWorkerGlobalScope
                        ) {
                          extCtx.runtime.reload();
                          return;
                        }
                        asset.url = extCtx.runtime.getURL(
                          "/__parcel_hmr_proxy__?url=" +
                            encodeURIComponent(asset.url + "?t=" + Date.now())
                        );
                        return hmrDownload(asset);
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle, asset) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === "css") reloadCSS();
          else if (asset.type === "js") {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            } else if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id]; // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length))
            return true;
        }
        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData;
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length)
                // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            });
          acceptedAssets[id] = true;
        }
      },
      {},
    ],
    bB7Pu: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        var _main = require("./main");
        var _mainDefault = parcelHelpers.interopDefault(_main);
        (0, _mainDefault.default)();
      },
      {
        "./main": "adjPd",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    adjPd: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _animeEsJs = require("animejs/lib/anime.es.js");
        var _animeEsJsDefault = parcelHelpers.interopDefault(_animeEsJs);
        var _cursor = require("./modules/cursor/cursor");
        var _experiments = require("./experiments");
        var _colorPicker = require("./modules/color-picker/color-picker");
        var _colorPickerDefault = parcelHelpers.interopDefault(_colorPicker);
        var _confettiModuleMjs = require("canvas-confetti/dist/confetti.module.mjs");
        var _confettiModuleMjsDefault =
          parcelHelpers.interopDefault(_confettiModuleMjs);
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const doc = document.documentElement;
        const CURRENT_TIME = Date.now();
        exports.default = () => {
          let isHome = document.body.classList.contains("home");
          let cursorEl = new (0, _cursor.Cursor)();
          (0, _colorPickerDefault.default)();
          let loopVideos = Array.from(document.querySelectorAll("[autoplay]"));
          loopVideos.forEach((v) => {
            v.playsInline = true;
            v.setAttribute("muted", "");
            v.defaultMuted = true;
            v.play();
          });
          const scrollTo = (element) => {
            const elementSelector = element;
            const elementOffset = elementSelector.getBoundingClientRect().top;
            const scrollPosition = window.scrollY;
            const documentTop = document.documentElement.clientTop;
            const scrollOffset = elementOffset + scrollPosition - documentTop;
            (0, _animeEsJsDefault.default)({
              targets: [document.documentElement, document.body],
              scrollTop: scrollOffset,
              duration: 800,
              easing: "easeOutExpo",
            });
          };
          let hrefs = Array.from(document.querySelectorAll("a[href*='#']"));
          hrefs.forEach((href) => {
            href.addEventListener("click", (e) => {
              e.preventDefault();
              scrollTo(document.querySelector(href.getAttribute("href")));
            });
          });
          let isExperiemnts = document.body.classList.contains("experiments");
          if (isExperiemnts) {
            let experiments = new (0, _experiments.Experiments)();
          }
          if (isHome) {
            var isSent = false;
            let video = $("video");
            let intro = $("section.intro");
            let greetEl = $(".greet");
            let areEl = $(".are");
            let greet = ["hi", "gr\xfcetzi", "bonjour"];
            let are = ["we are", "my jsme", "mir sy"];
            let fab = $(".fab");
            let btnHi = $(".about .btn");
            let btnSnd = $(".about .btn--snd");
            let textarea = $(".about textarea");
            let homeWrapper = $(".home-wrapper");
            let arrow = $(".btn__icon");
            let currentText = $$(".about h1, .about p");
            let buttonWrapper = $(".about__buttons");
            let sameReferrer =
              document.referrer.indexOf(
                location.protocol + "//" + location.host
              ) === 0;
            textarea.addEventListener("keyup", (ev) => {
              let hasContent = textarea.value.length > 0;
              doc.classList.toggle("has-content", hasContent);
            });
            btnHi.addEventListener("click", (ev) => {
              if (isSent) return;
              let isWriting = doc.classList.toggle("is-writing");
              let padding = isWriting ? 48 : 0;
              let scrollY =
                document.documentElement.scrollTop || document.body.scrollTop;
              let rect = btnHi.getBoundingClientRect();
              let delta = isWriting
                ? window.innerHeight - rect.top - rect.height - scrollY
                : 0;
              homeWrapper.style.transform = `translateY(${delta}px)`;
              buttonWrapper.style.transform = `translateY(${delta - padding}px)`;
              (0, _animeEsJsDefault.default)({
                targets: cursor,
                y: delta,
              });
              window.scrollTop = 0;
              if (isWriting) textarea.focus();
              else {
                textarea.blur();
                setTimeout(() => {
                  textarea.value = "";
                }, 500);
              }
            });
            let sendMessage = function () {
              doc.classList.remove("is-writing");
              textarea.blur();
              homeWrapper.style.transform = `translateY(0px)`;
              buttonWrapper.style.transform = `translateY(0px)`;
              arrow.innerHTML = "âœ”";
              btnHi.lastElementChild.innerHTML = "thank you";
              isSent = true;
              let httpRequest = new XMLHttpRequest();
              httpRequest.open("POST", "/wp-admin/admin-ajax.php", true);
              httpRequest.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
              );
              httpRequest.send(
                `action=azumbrunnen_contact&message=${encodeURIComponent(textarea.value)}&email=undefined`
              );
              setTimeout(() => {
                function randomInRange(min, max) {
                  return Math.random() * (max - min) + min;
                }
                (0, _confettiModuleMjsDefault.default)({
                  particleCount: 100,
                  spread: 70,
                  origin: {
                    y: 0.6,
                  },
                });
              }, 200);
            };
            btnSnd.addEventListener("click", () => {
              sendMessage();
            });
            var i = 0;
            fab.addEventListener("click", () => {
              let wordsDrawer = document.querySelector(".words__drawer");
              let toggledState = fab.classList.toggle("fab--toggled");
              (0, _animeEsJsDefault.default)({
                targets: wordsDrawer,
                height: toggledState
                  ? wordsDrawer.firstElementChild.getBoundingClientRect()
                      .height + 44
                  : 0,
                easing: "easeOutQuint",
                duration: 1500,
              });
            });
            setTimeout(() => {
              setInterval(() => {
                greetEl.innerHTML = greet[i % 3];
                i++;
              }, 4000);
            }, 3000);
            if (sameReferrer) intro.parentNode.removeChild(intro);
            else {
              document.documentElement.classList.add("is-locked");
              window.addEventListener("DOMContentLoaded", (event) => {
                window.scrollTo(0, 0);
                document.body.scrollTo(0, 0);
                video.playsInline = true;
                video.setAttribute("muted", "");
                video.defaultMuted = true;
              });
              video.addEventListener("ended", () => {
                (0, _animeEsJsDefault.default)({
                  targets: document.body,
                  scrollTop: intro.getBoundingClientRect().height,
                  duration: 1500,
                  easing: "easeInOutQuint",
                  complete: () => {
                    doc.classList.remove("is-locked");
                    let s = document.querySelector("section");
                    s.parentNode.removeChild(s);
                    window.scrollTo(0, 0);
                    document.body.scrollTo(0, 0);
                  },
                });
              });
            }
          }
        };
      },
      {
        "animejs/lib/anime.es.js": "jokr5",
        "./modules/cursor/cursor": "5Grwe",
        "./experiments": "5qIZv",
        "./modules/color-picker/color-picker": "b45Ko",
        "canvas-confetti/dist/confetti.module.mjs": "cIEGq",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    jokr5: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /*
         * anime.js v3.2.1
         * (c) 2020 Julian Garnier
         * Released under the MIT license
         * animejs.com
         */ // Defaults
        var defaultInstanceSettings = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: "normal",
          autoplay: true,
          timelineOffset: 0,
        };
        var defaultTweenSettings = {
          duration: 1000,
          delay: 0,
          endDelay: 0,
          easing: "easeOutElastic(1, .5)",
          round: 0,
        };
        var validTransforms = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ];
        // Caching
        var cache = {
          CSS: {},
          springs: {},
        };
        // Utils
        function minMax(val, min, max) {
          return Math.min(Math.max(val, min), max);
        }
        function stringContains(str, text) {
          return str.indexOf(text) > -1;
        }
        function applyArguments(func, args) {
          return func.apply(null, args);
        }
        var is = {
          arr: function (a) {
            return Array.isArray(a);
          },
          obj: function (a) {
            return stringContains(Object.prototype.toString.call(a), "Object");
          },
          pth: function (a) {
            return is.obj(a) && a.hasOwnProperty("totalLength");
          },
          svg: function (a) {
            return a instanceof SVGElement;
          },
          inp: function (a) {
            return a instanceof HTMLInputElement;
          },
          dom: function (a) {
            return a.nodeType || is.svg(a);
          },
          str: function (a) {
            return typeof a === "string";
          },
          fnc: function (a) {
            return typeof a === "function";
          },
          und: function (a) {
            return typeof a === "undefined";
          },
          nil: function (a) {
            return is.und(a) || a === null;
          },
          hex: function (a) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
          },
          rgb: function (a) {
            return /^rgb/.test(a);
          },
          hsl: function (a) {
            return /^hsl/.test(a);
          },
          col: function (a) {
            return is.hex(a) || is.rgb(a) || is.hsl(a);
          },
          key: function (a) {
            return (
              !defaultInstanceSettings.hasOwnProperty(a) &&
              !defaultTweenSettings.hasOwnProperty(a) &&
              a !== "targets" &&
              a !== "keyframes"
            );
          },
        };
        // Easings
        function parseEasingParameters(string) {
          var match = /\(([^)]+)\)/.exec(string);
          return match
            ? match[1].split(",").map(function (p) {
                return parseFloat(p);
              })
            : [];
        }
        // Spring solver inspired by Webkit Copyright Â© 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
        function spring(string, duration) {
          var params = parseEasingParameters(string);
          var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
          var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
          var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
          var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
          var w0 = Math.sqrt(stiffness / mass);
          var zeta = damping / (2 * Math.sqrt(stiffness * mass));
          var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
          var a = 1;
          var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
          function solver(t) {
            var progress = duration ? (duration * t) / 1000 : t;
            if (zeta < 1)
              progress =
                Math.exp(-progress * zeta * w0) *
                (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
            else progress = (a + b * progress) * Math.exp(-progress * w0);
            if (t === 0 || t === 1) return t;
            return 1 - progress;
          }
          function getDuration() {
            var cached = cache.springs[string];
            if (cached) return cached;
            var frame = 1 / 6;
            var elapsed = 0;
            var rest = 0;
            while (true) {
              elapsed += frame;
              if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
              } else rest = 0;
            }
            var duration = elapsed * frame * 1000;
            cache.springs[string] = duration;
            return duration;
          }
          return duration ? solver : getDuration;
        }
        // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
        function steps(steps) {
          if (steps === void 0) steps = 10;
          return function (t) {
            return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
          };
        }
        // BezierEasing https://github.com/gre/bezier-easing
        var bezier = (function () {
          var kSplineTableSize = 11;
          var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
          function A(aA1, aA2) {
            return 1.0 - 3.0 * aA2 + 3.0 * aA1;
          }
          function B(aA1, aA2) {
            return 3.0 * aA2 - 6.0 * aA1;
          }
          function C(aA1) {
            return 3.0 * aA1;
          }
          function calcBezier(aT, aA1, aA2) {
            return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
          }
          function getSlope(aT, aA1, aA2) {
            return (
              3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1)
            );
          }
          function binarySubdivide(aX, aA, aB, mX1, mX2) {
            var currentX,
              currentT,
              i = 0;
            do {
              currentT = aA + (aB - aA) / 2.0;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0.0) aB = currentT;
              else aA = currentT;
            } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
            return currentT;
          }
          function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
            for (var i = 0; i < 4; ++i) {
              var currentSlope = getSlope(aGuessT, mX1, mX2);
              if (currentSlope === 0.0) return aGuessT;
              var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
          }
          function bezier(mX1, mY1, mX2, mY2) {
            if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
            var sampleValues = new Float32Array(kSplineTableSize);
            if (mX1 !== mY1 || mX2 !== mY2)
              for (var i = 0; i < kSplineTableSize; ++i)
                sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            function getTForX(aX) {
              var intervalStart = 0;
              var currentSample = 1;
              var lastSample = kSplineTableSize - 1;
              for (
                ;
                currentSample !== lastSample &&
                sampleValues[currentSample] <= aX;
                ++currentSample
              )
                intervalStart += kSampleStepSize;
              --currentSample;
              var dist =
                (aX - sampleValues[currentSample]) /
                (sampleValues[currentSample + 1] - sampleValues[currentSample]);
              var guessForT = intervalStart + dist * kSampleStepSize;
              var initialSlope = getSlope(guessForT, mX1, mX2);
              if (initialSlope >= 0.001)
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
              else if (initialSlope === 0.0) return guessForT;
              else
                return binarySubdivide(
                  aX,
                  intervalStart,
                  intervalStart + kSampleStepSize,
                  mX1,
                  mX2
                );
            }
            return function (x) {
              if (mX1 === mY1 && mX2 === mY2) return x;
              if (x === 0 || x === 1) return x;
              return calcBezier(getTForX(x), mY1, mY2);
            };
          }
          return bezier;
        })();
        var penner = (function () {
          // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
          var eases = {
            linear: function () {
              return function (t) {
                return t;
              };
            },
          };
          var functionEasings = {
            Sine: function () {
              return function (t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              };
            },
            Circ: function () {
              return function (t) {
                return 1 - Math.sqrt(1 - t * t);
              };
            },
            Back: function () {
              return function (t) {
                return t * t * (3 * t - 2);
              };
            },
            Bounce: function () {
              return function (t) {
                var pow2,
                  b = 4;
                while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return (
                  1 / Math.pow(4, 3 - b) -
                  7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2)
                );
              };
            },
            Elastic: function (amplitude, period) {
              if (amplitude === void 0) amplitude = 1;
              if (period === void 0) period = 0.5;
              var a = minMax(amplitude, 1, 10);
              var p = minMax(period, 0.1, 2);
              return function (t) {
                return t === 0 || t === 1
                  ? t
                  : -a *
                      Math.pow(2, 10 * (t - 1)) *
                      Math.sin(
                        ((t - 1 - (p / (Math.PI * 2)) * Math.asin(1 / a)) *
                          (Math.PI * 2)) /
                          p
                      );
              };
            },
          };
          var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
          baseEasings.forEach(function (name, i) {
            functionEasings[name] = function () {
              return function (t) {
                return Math.pow(t, i + 2);
              };
            };
          });
          Object.keys(functionEasings).forEach(function (name) {
            var easeIn = functionEasings[name];
            eases["easeIn" + name] = easeIn;
            eases["easeOut" + name] = function (a, b) {
              return function (t) {
                return 1 - easeIn(a, b)(1 - t);
              };
            };
            eases["easeInOut" + name] = function (a, b) {
              return function (t) {
                return t < 0.5
                  ? easeIn(a, b)(t * 2) / 2
                  : 1 - easeIn(a, b)(t * -2 + 2) / 2;
              };
            };
            eases["easeOutIn" + name] = function (a, b) {
              return function (t) {
                return t < 0.5
                  ? (1 - easeIn(a, b)(1 - t * 2)) / 2
                  : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
              };
            };
          });
          return eases;
        })();
        function parseEasings(easing, duration) {
          if (is.fnc(easing)) return easing;
          var name = easing.split("(")[0];
          var ease = penner[name];
          var args = parseEasingParameters(easing);
          switch (name) {
            case "spring":
              return spring(easing, duration);
            case "cubicBezier":
              return applyArguments(bezier, args);
            case "steps":
              return applyArguments(steps, args);
            default:
              return applyArguments(ease, args);
          }
        }
        // Strings
        function selectString(str) {
          try {
            var nodes = document.querySelectorAll(str);
            return nodes;
          } catch (e) {
            return;
          }
        }
        // Arrays
        function filterArray(arr, callback) {
          var len = arr.length;
          var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
          var result = [];
          for (var i = 0; i < len; i++)
            if (i in arr) {
              var val = arr[i];
              if (callback.call(thisArg, val, i, arr)) result.push(val);
            }
          return result;
        }
        function flattenArray(arr) {
          return arr.reduce(function (a, b) {
            return a.concat(is.arr(b) ? flattenArray(b) : b);
          }, []);
        }
        function toArray(o) {
          if (is.arr(o)) return o;
          if (is.str(o)) o = selectString(o) || o;
          if (o instanceof NodeList || o instanceof HTMLCollection)
            return [].slice.call(o);
          return [o];
        }
        function arrayContains(arr, val) {
          return arr.some(function (a) {
            return a === val;
          });
        }
        // Objects
        function cloneObject(o) {
          var clone = {};
          for (var p in o) clone[p] = o[p];
          return clone;
        }
        function replaceObjectProps(o1, o2) {
          var o = cloneObject(o1);
          for (var p in o1) o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
          return o;
        }
        function mergeObjects(o1, o2) {
          var o = cloneObject(o1);
          for (var p in o2) o[p] = is.und(o1[p]) ? o2[p] : o1[p];
          return o;
        }
        // Colors
        function rgbToRgba(rgbValue) {
          var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
          return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
        }
        function hexToRgba(hexValue) {
          var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          var hex = hexValue.replace(rgx, function (m, r, g, b) {
            return r + r + g + g + b + b;
          });
          var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          var r = parseInt(rgb[1], 16);
          var g = parseInt(rgb[2], 16);
          var b = parseInt(rgb[3], 16);
          return "rgba(" + r + "," + g + "," + b + ",1)";
        }
        function hslToRgba(hslValue) {
          var hsl =
            /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) ||
            /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
              hslValue
            );
          var h = parseInt(hsl[1], 10) / 360;
          var s = parseInt(hsl[2], 10) / 100;
          var l = parseInt(hsl[3], 10) / 100;
          var a = hsl[4] || 1;
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 0.5) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }
          var r, g, b;
          if (s == 0) r = g = b = l;
          else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }
          return (
            "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")"
          );
        }
        function colorToRgb(val) {
          if (is.rgb(val)) return rgbToRgba(val);
          if (is.hex(val)) return hexToRgba(val);
          if (is.hsl(val)) return hslToRgba(val);
        }
        // Units
        function getUnit(val) {
          var split =
            /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
              val
            );
          if (split) return split[1];
        }
        function getTransformUnit(propName) {
          if (
            stringContains(propName, "translate") ||
            propName === "perspective"
          )
            return "px";
          if (
            stringContains(propName, "rotate") ||
            stringContains(propName, "skew")
          )
            return "deg";
        }
        // Values
        function getFunctionValue(val, animatable) {
          if (!is.fnc(val)) return val;
          return val(animatable.target, animatable.id, animatable.total);
        }
        function getAttribute(el, prop) {
          return el.getAttribute(prop);
        }
        function convertPxToUnit(el, value, unit) {
          var valueUnit = getUnit(value);
          if (arrayContains([unit, "deg", "rad", "turn"], valueUnit))
            return value;
          var cached = cache.CSS[value + unit];
          if (!is.und(cached)) return cached;
          var baseline = 100;
          var tempEl = document.createElement(el.tagName);
          var parentEl =
            el.parentNode && el.parentNode !== document
              ? el.parentNode
              : document.body;
          parentEl.appendChild(tempEl);
          tempEl.style.position = "absolute";
          tempEl.style.width = baseline + unit;
          var factor = baseline / tempEl.offsetWidth;
          parentEl.removeChild(tempEl);
          var convertedUnit = factor * parseFloat(value);
          cache.CSS[value + unit] = convertedUnit;
          return convertedUnit;
        }
        function getCSSValue(el, prop, unit) {
          if (prop in el.style) {
            var uppercasePropName = prop
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .toLowerCase();
            var value =
              el.style[prop] ||
              getComputedStyle(el).getPropertyValue(uppercasePropName) ||
              "0";
            return unit ? convertPxToUnit(el, value, unit) : value;
          }
        }
        function getAnimationType(el, prop) {
          if (
            is.dom(el) &&
            !is.inp(el) &&
            (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))
          )
            return "attribute";
          if (is.dom(el) && arrayContains(validTransforms, prop))
            return "transform";
          if (is.dom(el) && prop !== "transform" && getCSSValue(el, prop))
            return "css";
          if (el[prop] != null) return "object";
        }
        function getElementTransforms(el) {
          if (!is.dom(el)) return;
          var str = el.style.transform || "";
          var reg = /(\w+)\(([^)]*)\)/g;
          var transforms = new Map();
          var m;
          while ((m = reg.exec(str))) transforms.set(m[1], m[2]);
          return transforms;
        }
        function getTransformValue(el, propName, animatable, unit) {
          var defaultVal = stringContains(propName, "scale")
            ? 1
            : 0 + getTransformUnit(propName);
          var value = getElementTransforms(el).get(propName) || defaultVal;
          if (animatable) {
            animatable.transforms.list.set(propName, value);
            animatable.transforms["last"] = propName;
          }
          return unit ? convertPxToUnit(el, value, unit) : value;
        }
        function getOriginalTargetValue(target, propName, unit, animatable) {
          switch (getAnimationType(target, propName)) {
            case "transform":
              return getTransformValue(target, propName, animatable, unit);
            case "css":
              return getCSSValue(target, propName, unit);
            case "attribute":
              return getAttribute(target, propName);
            default:
              return target[propName] || 0;
          }
        }
        function getRelativeValue(to, from) {
          var operator = /^(\*=|\+=|-=)/.exec(to);
          if (!operator) return to;
          var u = getUnit(to) || 0;
          var x = parseFloat(from);
          var y = parseFloat(to.replace(operator[0], ""));
          switch (operator[0][0]) {
            case "+":
              return x + y + u;
            case "-":
              return x - y + u;
            case "*":
              return x * y + u;
          }
        }
        function validateValue(val, unit) {
          if (is.col(val)) return colorToRgb(val);
          if (/\s/g.test(val)) return val;
          var originalUnit = getUnit(val);
          var unitLess = originalUnit
            ? val.substr(0, val.length - originalUnit.length)
            : val;
          if (unit) return unitLess + unit;
          return unitLess;
        }
        // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
        // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
        function getDistance(p1, p2) {
          return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        }
        function getCircleLength(el) {
          return Math.PI * 2 * getAttribute(el, "r");
        }
        function getRectLength(el) {
          return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
        }
        function getLineLength(el) {
          return getDistance(
            {
              x: getAttribute(el, "x1"),
              y: getAttribute(el, "y1"),
            },
            {
              x: getAttribute(el, "x2"),
              y: getAttribute(el, "y2"),
            }
          );
        }
        function getPolylineLength(el) {
          var points = el.points;
          var totalLength = 0;
          var previousPos;
          for (var i = 0; i < points.numberOfItems; i++) {
            var currentPos = points.getItem(i);
            if (i > 0) totalLength += getDistance(previousPos, currentPos);
            previousPos = currentPos;
          }
          return totalLength;
        }
        function getPolygonLength(el) {
          var points = el.points;
          return (
            getPolylineLength(el) +
            getDistance(
              points.getItem(points.numberOfItems - 1),
              points.getItem(0)
            )
          );
        }
        // Path animation
        function getTotalLength(el) {
          if (el.getTotalLength) return el.getTotalLength();
          switch (el.tagName.toLowerCase()) {
            case "circle":
              return getCircleLength(el);
            case "rect":
              return getRectLength(el);
            case "line":
              return getLineLength(el);
            case "polyline":
              return getPolylineLength(el);
            case "polygon":
              return getPolygonLength(el);
          }
        }
        function setDashoffset(el) {
          var pathLength = getTotalLength(el);
          el.setAttribute("stroke-dasharray", pathLength);
          return pathLength;
        }
        // Motion path
        function getParentSvgEl(el) {
          var parentEl = el.parentNode;
          while (is.svg(parentEl)) {
            if (!is.svg(parentEl.parentNode)) break;
            parentEl = parentEl.parentNode;
          }
          return parentEl;
        }
        function getParentSvg(pathEl, svgData) {
          var svg = svgData || {};
          var parentSvgEl = svg.el || getParentSvgEl(pathEl);
          var rect = parentSvgEl.getBoundingClientRect();
          var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
          var width = rect.width;
          var height = rect.height;
          var viewBox =
            svg.viewBox ||
            (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
          return {
            el: parentSvgEl,
            viewBox: viewBox,
            x: viewBox[0] / 1,
            y: viewBox[1] / 1,
            w: width,
            h: height,
            vW: viewBox[2],
            vH: viewBox[3],
          };
        }
        function getPath(path, percent) {
          var pathEl = is.str(path) ? selectString(path)[0] : path;
          var p = percent || 100;
          return function (property) {
            return {
              property: property,
              el: pathEl,
              svg: getParentSvg(pathEl),
              totalLength: getTotalLength(pathEl) * (p / 100),
            };
          };
        }
        function getPathProgress(path, progress, isPathTargetInsideSVG) {
          function point(offset) {
            if (offset === void 0) offset = 0;
            var l = progress + offset >= 1 ? progress + offset : 0;
            return path.el.getPointAtLength(l);
          }
          var svg = getParentSvg(path.el, path.svg);
          var p = point();
          var p0 = point(-1);
          var p1 = point(1);
          var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
          var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
          switch (path.property) {
            case "x":
              return (p.x - svg.x) * scaleX;
            case "y":
              return (p.y - svg.y) * scaleY;
            case "angle":
              return (Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180) / Math.PI;
          }
        }
        // Decompose value
        function decomposeValue(val, unit) {
          // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
          // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
          var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
          var value =
            validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
          return {
            original: value,
            numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
            strings: is.str(val) || unit ? value.split(rgx) : [],
          };
        }
        // Animatables
        function parseTargets(targets) {
          var targetsArray = targets
            ? flattenArray(
                is.arr(targets) ? targets.map(toArray) : toArray(targets)
              )
            : [];
          return filterArray(targetsArray, function (item, pos, self) {
            return self.indexOf(item) === pos;
          });
        }
        function getAnimatables(targets) {
          var parsed = parseTargets(targets);
          return parsed.map(function (t, i) {
            return {
              target: t,
              id: i,
              total: parsed.length,
              transforms: {
                list: getElementTransforms(t),
              },
            };
          });
        }
        // Properties
        function normalizePropertyTweens(prop, tweenSettings) {
          var settings = cloneObject(tweenSettings);
          // Override duration if easing is a spring
          if (/^spring/.test(settings.easing))
            settings.duration = spring(settings.easing);
          if (is.arr(prop)) {
            var l = prop.length;
            var isFromTo = l === 2 && !is.obj(prop[0]);
            if (!isFromTo) {
              // Duration divided by the number of tweens
              if (!is.fnc(tweenSettings.duration))
                settings.duration = tweenSettings.duration / l;
            } // Transform [from, to] values shorthand to a valid tween value
            else
              prop = {
                value: prop,
              };
          }
          var propArray = is.arr(prop) ? prop : [prop];
          return propArray
            .map(function (v, i) {
              var obj =
                is.obj(v) && !is.pth(v)
                  ? v
                  : {
                      value: v,
                    };
              // Default delay value should only be applied to the first tween
              if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
              // Default endDelay value should only be applied to the last tween
              if (is.und(obj.endDelay))
                obj.endDelay =
                  i === propArray.length - 1 ? tweenSettings.endDelay : 0;
              return obj;
            })
            .map(function (k) {
              return mergeObjects(k, settings);
            });
        }
        function flattenKeyframes(keyframes) {
          var propertyNames = filterArray(
            flattenArray(
              keyframes.map(function (key) {
                return Object.keys(key);
              })
            ),
            function (p) {
              return is.key(p);
            }
          ).reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
          }, []);
          var properties = {};
          var loop = function (i) {
            var propName = propertyNames[i];
            properties[propName] = keyframes.map(function (key) {
              var newKey = {};
              for (var p in key) {
                if (is.key(p)) {
                  if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
              }
              return newKey;
            });
          };
          for (var i = 0; i < propertyNames.length; i++) loop(i);
          return properties;
        }
        function getProperties(tweenSettings, params) {
          var properties = [];
          var keyframes = params.keyframes;
          if (keyframes)
            params = mergeObjects(flattenKeyframes(keyframes), params);
          for (var p in params)
            if (is.key(p))
              properties.push({
                name: p,
                tweens: normalizePropertyTweens(params[p], tweenSettings),
              });
          return properties;
        }
        // Tweens
        function normalizeTweenValues(tween, animatable) {
          var t = {};
          for (var p in tween) {
            var value = getFunctionValue(tween[p], animatable);
            if (is.arr(value)) {
              value = value.map(function (v) {
                return getFunctionValue(v, animatable);
              });
              if (value.length === 1) value = value[0];
            }
            t[p] = value;
          }
          t.duration = parseFloat(t.duration);
          t.delay = parseFloat(t.delay);
          return t;
        }
        function normalizeTweens(prop, animatable) {
          var previousTween;
          return prop.tweens.map(function (t) {
            var tween = normalizeTweenValues(t, animatable);
            var tweenValue = tween.value;
            var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
            var toUnit = getUnit(to);
            var originalValue = getOriginalTargetValue(
              animatable.target,
              prop.name,
              toUnit,
              animatable
            );
            var previousValue = previousTween
              ? previousTween.to.original
              : originalValue;
            var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
            var fromUnit = getUnit(from) || getUnit(originalValue);
            var unit = toUnit || fromUnit;
            if (is.und(to)) to = previousValue;
            tween.from = decomposeValue(from, unit);
            tween.to = decomposeValue(getRelativeValue(to, from), unit);
            tween.start = previousTween ? previousTween.end : 0;
            tween.end =
              tween.start + tween.delay + tween.duration + tween.endDelay;
            tween.easing = parseEasings(tween.easing, tween.duration);
            tween.isPath = is.pth(tweenValue);
            tween.isPathTargetInsideSVG =
              tween.isPath && is.svg(animatable.target);
            tween.isColor = is.col(tween.from.original);
            if (tween.isColor) tween.round = 1;
            previousTween = tween;
            return tween;
          });
        }
        // Tween progress
        var setProgressValue = {
          css: function (t, p, v) {
            return (t.style[p] = v);
          },
          attribute: function (t, p, v) {
            return t.setAttribute(p, v);
          },
          object: function (t, p, v) {
            return (t[p] = v);
          },
          transform: function (t, p, v, transforms, manual) {
            transforms.list.set(p, v);
            if (p === transforms.last || manual) {
              var str = "";
              transforms.list.forEach(function (value, prop) {
                str += prop + "(" + value + ") ";
              });
              t.style.transform = str;
            }
          },
        };
        // Set Value helper
        function setTargetsValue(targets, properties) {
          var animatables = getAnimatables(targets);
          animatables.forEach(function (animatable) {
            for (var property in properties) {
              var value = getFunctionValue(properties[property], animatable);
              var target = animatable.target;
              var valueUnit = getUnit(value);
              var originalValue = getOriginalTargetValue(
                target,
                property,
                valueUnit,
                animatable
              );
              var unit = valueUnit || getUnit(originalValue);
              var to = getRelativeValue(
                validateValue(value, unit),
                originalValue
              );
              var animType = getAnimationType(target, property);
              setProgressValue[animType](
                target,
                property,
                to,
                animatable.transforms,
                true
              );
            }
          });
        }
        // Animations
        function createAnimation(animatable, prop) {
          var animType = getAnimationType(animatable.target, prop.name);
          if (animType) {
            var tweens = normalizeTweens(prop, animatable);
            var lastTween = tweens[tweens.length - 1];
            return {
              type: animType,
              property: prop.name,
              animatable: animatable,
              tweens: tweens,
              duration: lastTween.end,
              delay: tweens[0].delay,
              endDelay: lastTween.endDelay,
            };
          }
        }
        function getAnimations(animatables, properties) {
          return filterArray(
            flattenArray(
              animatables.map(function (animatable) {
                return properties.map(function (prop) {
                  return createAnimation(animatable, prop);
                });
              })
            ),
            function (a) {
              return !is.und(a);
            }
          );
        }
        // Create Instance
        function getInstanceTimings(animations, tweenSettings) {
          var animLength = animations.length;
          var getTlOffset = function (anim) {
            return anim.timelineOffset ? anim.timelineOffset : 0;
          };
          var timings = {};
          timings.duration = animLength
            ? Math.max.apply(
                Math,
                animations.map(function (anim) {
                  return getTlOffset(anim) + anim.duration;
                })
              )
            : tweenSettings.duration;
          timings.delay = animLength
            ? Math.min.apply(
                Math,
                animations.map(function (anim) {
                  return getTlOffset(anim) + anim.delay;
                })
              )
            : tweenSettings.delay;
          timings.endDelay = animLength
            ? timings.duration -
              Math.max.apply(
                Math,
                animations.map(function (anim) {
                  return getTlOffset(anim) + anim.duration - anim.endDelay;
                })
              )
            : tweenSettings.endDelay;
          return timings;
        }
        var instanceID = 0;
        function createNewInstance(params) {
          var instanceSettings = replaceObjectProps(
            defaultInstanceSettings,
            params
          );
          var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
          var properties = getProperties(tweenSettings, params);
          var animatables = getAnimatables(params.targets);
          var animations = getAnimations(animatables, properties);
          var timings = getInstanceTimings(animations, tweenSettings);
          var id = instanceID;
          instanceID++;
          return mergeObjects(instanceSettings, {
            id: id,
            children: [],
            animatables: animatables,
            animations: animations,
            duration: timings.duration,
            delay: timings.delay,
            endDelay: timings.endDelay,
          });
        }
        // Core
        var activeInstances = [];
        var engine = (function () {
          var raf;
          function play() {
            if (
              !raf &&
              (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) &&
              activeInstances.length > 0
            )
              raf = requestAnimationFrame(step);
          }
          function step(t) {
            // memo on algorithm issue:
            // dangerous iteration over mutable `activeInstances`
            // (that collection may be updated from within callbacks of `tick`-ed animation instances)
            var activeInstancesLength = activeInstances.length;
            var i = 0;
            while (i < activeInstancesLength) {
              var activeInstance = activeInstances[i];
              if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
              } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
              }
            }
            raf = i > 0 ? requestAnimationFrame(step) : undefined;
          }
          function handleVisibilityChange() {
            if (!anime.suspendWhenDocumentHidden) return;
            if (isDocumentHidden())
              // suspend ticks
              raf = cancelAnimationFrame(raf);
            else {
              // first adjust animations to consider the time that ticks were suspended
              activeInstances.forEach(function (instance) {
                return instance._onDocumentVisibility();
              });
              engine();
            }
          }
          if (typeof document !== "undefined")
            document.addEventListener(
              "visibilitychange",
              handleVisibilityChange
            );
          return play;
        })();
        function isDocumentHidden() {
          return !!document && document.hidden;
        }
        // Public Instance
        function anime(params) {
          if (params === void 0) params = {};
          var startTime = 0,
            lastTime = 0,
            now = 0;
          var children,
            childrenLength = 0;
          var resolve = null;
          function makePromise(instance) {
            var promise =
              window.Promise &&
              new Promise(function (_resolve) {
                return (resolve = _resolve);
              });
            instance.finished = promise;
            return promise;
          }
          var instance = createNewInstance(params);
          var promise = makePromise(instance);
          function toggleInstanceDirection() {
            var direction = instance.direction;
            if (direction !== "alternate")
              instance.direction =
                direction !== "normal" ? "normal" : "reverse";
            instance.reversed = !instance.reversed;
            children.forEach(function (child) {
              return (child.reversed = instance.reversed);
            });
          }
          function adjustTime(time) {
            return instance.reversed ? instance.duration - time : time;
          }
          function resetTime() {
            startTime = 0;
            lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
          }
          function seekChild(time, child) {
            if (child) child.seek(time - child.timelineOffset);
          }
          function syncInstanceChildren(time) {
            if (!instance.reversePlayback)
              for (var i = 0; i < childrenLength; i++)
                seekChild(time, children[i]);
            else
              for (var i$1 = childrenLength; i$1--; )
                seekChild(time, children[i$1]);
          }
          function setAnimationsProgress(insTime) {
            var i = 0;
            var animations = instance.animations;
            var animationsLength = animations.length;
            while (i < animationsLength) {
              var anim = animations[i];
              var animatable = anim.animatable;
              var tweens = anim.tweens;
              var tweenLength = tweens.length - 1;
              var tween = tweens[tweenLength];
              // Only check for keyframes if there is more than one tween
              if (tweenLength)
                tween =
                  filterArray(tweens, function (t) {
                    return insTime < t.end;
                  })[0] || tween;
              var elapsed =
                minMax(insTime - tween.start - tween.delay, 0, tween.duration) /
                tween.duration;
              var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
              var strings = tween.to.strings;
              var round = tween.round;
              var numbers = [];
              var toNumbersLength = tween.to.numbers.length;
              var progress = void 0;
              for (var n = 0; n < toNumbersLength; n++) {
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath)
                  value = fromNumber + eased * (toNumber - fromNumber);
                else
                  value = getPathProgress(
                    tween.value,
                    eased * toNumber,
                    tween.isPathTargetInsideSVG
                  );
                if (round) {
                  if (!(tween.isColor && n > 2))
                    value = Math.round(value * round) / round;
                }
                numbers.push(value);
              }
              // Manual Array.reduce for better performances
              var stringsLength = strings.length;
              if (!stringsLength) progress = numbers[0];
              else {
                progress = strings[0];
                for (var s = 0; s < stringsLength; s++) {
                  var a = strings[s];
                  var b = strings[s + 1];
                  var n$1 = numbers[s];
                  if (!isNaN(n$1)) {
                    if (!b) progress += n$1 + " ";
                    else progress += n$1 + b;
                  }
                }
              }
              setProgressValue[anim.type](
                animatable.target,
                anim.property,
                progress,
                animatable.transforms
              );
              anim.currentValue = progress;
              i++;
            }
          }
          function setCallback(cb) {
            if (instance[cb] && !instance.passThrough) instance[cb](instance);
          }
          function countIteration() {
            if (instance.remaining && instance.remaining !== true)
              instance.remaining--;
          }
          function setInstanceProgress(engineTime) {
            var insDuration = instance.duration;
            var insDelay = instance.delay;
            var insEndDelay = insDuration - instance.endDelay;
            var insTime = adjustTime(engineTime);
            instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
            instance.reversePlayback = insTime < instance.currentTime;
            if (children) syncInstanceChildren(insTime);
            if (!instance.began && instance.currentTime > 0) {
              instance.began = true;
              setCallback("begin");
            }
            if (!instance.loopBegan && instance.currentTime > 0) {
              instance.loopBegan = true;
              setCallback("loopBegin");
            }
            if (insTime <= insDelay && instance.currentTime !== 0)
              setAnimationsProgress(0);
            if (
              (insTime >= insEndDelay &&
                instance.currentTime !== insDuration) ||
              !insDuration
            )
              setAnimationsProgress(insDuration);
            if (insTime > insDelay && insTime < insEndDelay) {
              if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback("changeBegin");
              }
              setCallback("change");
              setAnimationsProgress(insTime);
            } else if (instance.changeBegan) {
              instance.changeCompleted = true;
              instance.changeBegan = false;
              setCallback("changeComplete");
            }
            instance.currentTime = minMax(insTime, 0, insDuration);
            if (instance.began) setCallback("update");
            if (engineTime >= insDuration) {
              lastTime = 0;
              countIteration();
              if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                  instance.completed = true;
                  setCallback("loopComplete");
                  setCallback("complete");
                  if (!instance.passThrough && "Promise" in window) {
                    resolve();
                    promise = makePromise(instance);
                  }
                }
              } else {
                startTime = now;
                setCallback("loopComplete");
                instance.loopBegan = false;
                if (instance.direction === "alternate")
                  toggleInstanceDirection();
              }
            }
          }
          instance.reset = function () {
            var direction = instance.direction;
            instance.passThrough = false;
            instance.currentTime = 0;
            instance.progress = 0;
            instance.paused = true;
            instance.began = false;
            instance.loopBegan = false;
            instance.changeBegan = false;
            instance.completed = false;
            instance.changeCompleted = false;
            instance.reversePlayback = false;
            instance.reversed = direction === "reverse";
            instance.remaining = instance.loop;
            children = instance.children;
            childrenLength = children.length;
            for (var i = childrenLength; i--; ) instance.children[i].reset();
            if (
              (instance.reversed && instance.loop !== true) ||
              (direction === "alternate" && instance.loop === 1)
            )
              instance.remaining++;
            setAnimationsProgress(instance.reversed ? instance.duration : 0);
          };
          // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
          instance._onDocumentVisibility = resetTime;
          // Set Value helper
          instance.set = function (targets, properties) {
            setTargetsValue(targets, properties);
            return instance;
          };
          instance.tick = function (t) {
            now = t;
            if (!startTime) startTime = now;
            setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
          };
          instance.seek = function (time) {
            setInstanceProgress(adjustTime(time));
          };
          instance.pause = function () {
            instance.paused = true;
            resetTime();
          };
          instance.play = function () {
            if (!instance.paused) return;
            if (instance.completed) instance.reset();
            instance.paused = false;
            activeInstances.push(instance);
            resetTime();
            engine();
          };
          instance.reverse = function () {
            toggleInstanceDirection();
            instance.completed = instance.reversed ? false : true;
            resetTime();
          };
          instance.restart = function () {
            instance.reset();
            instance.play();
          };
          instance.remove = function (targets) {
            var targetsArray = parseTargets(targets);
            removeTargetsFromInstance(targetsArray, instance);
          };
          instance.reset();
          if (instance.autoplay) instance.play();
          return instance;
        }
        // Remove targets from animation
        function removeTargetsFromAnimations(targetsArray, animations) {
          for (var a = animations.length; a--; )
            if (arrayContains(targetsArray, animations[a].animatable.target))
              animations.splice(a, 1);
        }
        function removeTargetsFromInstance(targetsArray, instance) {
          var animations = instance.animations;
          var children = instance.children;
          removeTargetsFromAnimations(targetsArray, animations);
          for (var c = children.length; c--; ) {
            var child = children[c];
            var childAnimations = child.animations;
            removeTargetsFromAnimations(targetsArray, childAnimations);
            if (!childAnimations.length && !child.children.length)
              children.splice(c, 1);
          }
          if (!animations.length && !children.length) instance.pause();
        }
        function removeTargetsFromActiveInstances(targets) {
          var targetsArray = parseTargets(targets);
          for (var i = activeInstances.length; i--; ) {
            var instance = activeInstances[i];
            removeTargetsFromInstance(targetsArray, instance);
          }
        }
        // Stagger helpers
        function stagger(val, params) {
          if (params === void 0) params = {};
          var direction = params.direction || "normal";
          var easing = params.easing ? parseEasings(params.easing) : null;
          var grid = params.grid;
          var axis = params.axis;
          var fromIndex = params.from || 0;
          var fromFirst = fromIndex === "first";
          var fromCenter = fromIndex === "center";
          var fromLast = fromIndex === "last";
          var isRange = is.arr(val);
          var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
          var val2 = isRange ? parseFloat(val[1]) : 0;
          var unit = getUnit(isRange ? val[1] : val) || 0;
          var start = params.start || 0 + (isRange ? val1 : 0);
          var values = [];
          var maxValue = 0;
          return function (el, i, t) {
            if (fromFirst) fromIndex = 0;
            if (fromCenter) fromIndex = (t - 1) / 2;
            if (fromLast) fromIndex = t - 1;
            if (!values.length) {
              for (var index = 0; index < t; index++) {
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                  var fromX = !fromCenter
                    ? fromIndex % grid[0]
                    : (grid[0] - 1) / 2;
                  var fromY = !fromCenter
                    ? Math.floor(fromIndex / grid[0])
                    : (grid[1] - 1) / 2;
                  var toX = index % grid[0];
                  var toY = Math.floor(index / grid[0]);
                  var distanceX = fromX - toX;
                  var distanceY = fromY - toY;
                  var value = Math.sqrt(
                    distanceX * distanceX + distanceY * distanceY
                  );
                  if (axis === "x") value = -distanceX;
                  if (axis === "y") value = -distanceY;
                  values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
              }
              if (easing)
                values = values.map(function (val) {
                  return easing(val / maxValue) * maxValue;
                });
              if (direction === "reverse")
                values = values.map(function (val) {
                  return axis
                    ? val < 0
                      ? val * -1
                      : -val
                    : Math.abs(maxValue - val);
                });
            }
            var spacing = isRange ? (val2 - val1) / maxValue : val1;
            return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
          };
        }
        // Timeline
        function timeline(params) {
          if (params === void 0) params = {};
          var tl = anime(params);
          tl.duration = 0;
          tl.add = function (instanceParams, timelineOffset) {
            var tlIndex = activeInstances.indexOf(tl);
            var children = tl.children;
            if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
            function passThrough(ins) {
              ins.passThrough = true;
            }
            for (var i = 0; i < children.length; i++) passThrough(children[i]);
            var insParams = mergeObjects(
              instanceParams,
              replaceObjectProps(defaultTweenSettings, params)
            );
            insParams.targets = insParams.targets || params.targets;
            var tlDuration = tl.duration;
            insParams.autoplay = false;
            insParams.direction = tl.direction;
            insParams.timelineOffset = is.und(timelineOffset)
              ? tlDuration
              : getRelativeValue(timelineOffset, tlDuration);
            passThrough(tl);
            tl.seek(insParams.timelineOffset);
            var ins = anime(insParams);
            passThrough(ins);
            children.push(ins);
            var timings = getInstanceTimings(children, params);
            tl.delay = timings.delay;
            tl.endDelay = timings.endDelay;
            tl.duration = timings.duration;
            tl.seek(0);
            tl.reset();
            if (tl.autoplay) tl.play();
            return tl;
          };
          return tl;
        }
        anime.version = "3.2.1";
        anime.speed = 1;
        // TODO:#review: naming, documentation
        anime.suspendWhenDocumentHidden = true;
        anime.running = activeInstances;
        anime.remove = removeTargetsFromActiveInstances;
        anime.get = getOriginalTargetValue;
        anime.set = setTargetsValue;
        anime.convertPx = convertPxToUnit;
        anime.path = getPath;
        anime.setDashoffset = setDashoffset;
        anime.stagger = stagger;
        anime.timeline = timeline;
        anime.easing = parseEasings;
        anime.penner = penner;
        anime.random = function (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        exports.default = anime;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    gkKU3: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, "__esModule", {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === "default" ||
              key === "__esModule" ||
              dest.hasOwnProperty(key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    "5Grwe": [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Cursor", () => Cursor);
        var _bezierEasing = require("bezier-easing");
        var _bezierEasingDefault = parcelHelpers.interopDefault(_bezierEasing);
        let map = (value, x1, y1, x2, y2) =>
          ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
        let expoMap = (value, x1, y1, x2, y2) =>
          expo(map(value, x1, y1, x2, y2));
        function getCurrentRotation(el) {
          var st = window.getComputedStyle(el, null);
          var tm =
            st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "none";
          if (tm != "none") {
            var values = tm.split("(")[1].split(")")[0].split(",");
            var angle = Math.round(
              Math.atan2(values[1], values[0]) * (180 / Math.PI)
            );
            return angle < 0 ? angle + 360 : angle; //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
          }
          return 0;
        }
        const DEFAULT_CURSOR_SIZE = 36;
        class Cursor {
          constructor() {
            this.cursorEl = document.querySelector("#cursor");
            document.addEventListener("mousemove", this.mousemove.bind(this));
            document.addEventListener("scroll", this.scroll.bind(this));
            document.addEventListener("touchstart", this.touchstart.bind(this));
            let textCursorNodes = Array.from(
              document.querySelectorAll(
                "h1, h2, h3, h4, h5, h6, p, dd, dt, figcaption, blockquote"
              )
            );
            textCursorNodes.forEach((el) => this.bindTextCursorNodes(el));
            let btnNodes = Array.from(
              document.querySelectorAll(
                ".btn, .fab, .home .tile, .tile--hover, .footer a, .newsletter__button"
              )
            );
            btnNodes.forEach((el) => this.bindBtnNodes(el));
            this.currentDiameter = DEFAULT_CURSOR_SIZE / 2;
            this.isCursorLocked = false;
            this.isTouchLocked = false;
            this.currentPosition = {
              x: -9999,
              y: 0,
            };
            return this.cursorEl;
          }
          scroll() {
            if (!this.isCursorLocked && !this.isTouchLocked) {
              this.cursorEl.style.top =
                this.currentPosition.y + window.pageYOffset + "px";
              this.cursorEl.style.left =
                this.currentPosition.x + window.pageXOffset + "px";
            }
          }
          mousemove({ x, y }) {
            this.currentPosition = {
              x: x,
              y: y,
            };
            if (!this.isCursorLocked && !this.isTouchLocked) {
              this.cursorEl.style.top =
                this.currentPosition.y + window.pageYOffset + "px";
              this.cursorEl.style.left =
                this.currentPosition.x + window.pageXOffset + "px";
            }
          }
          touchstart() {
            this.cursorEl.style.display = "none";
            this.isTouchLocked = true;
          }
          bindTextCursorNodes(el) {
            let fontSize = parseInt(
              window
                .getComputedStyle(el)
                .getPropertyValue("font-size")
                .replace("px", "")
            );
            el.addEventListener(
              "mouseover",
              () => {
                if (!this.isTouchLocked) {
                  this.currentDiameter = fontSize * 1.4;
                  this.cursorEl.style.height = this.currentDiameter + "px";
                  this.cursorEl.classList.add("cursor--text");
                }
              },
              {
                passive: true,
              }
            );
            el.addEventListener(
              "mouseout",
              () => {
                if (!this.isTouchLocked) {
                  this.currentDiameter = DEFAULT_CURSOR_SIZE;
                  this.cursorEl.removeAttribute("style");
                  this.cursorEl.classList.remove("cursor--text");
                }
              },
              {
                passive: true,
              }
            );
          }
          bindBtnNodes(el) {
            let rect = null;
            el.addEventListener("mouseenter", (event) => {
              if (this.isTouchLocked) return;
              this.isCursorLocked = true;
              rect = el.getBoundingClientRect();
              let borderRadius = window
                .getComputedStyle(el)
                .getPropertyValue("border-radius")
                .replace("px", "");
              this.cursorEl.classList.add("is-locked");
              this.cursorEl.style.width = rect.width + "px";
              this.cursorEl.style.height = rect.height + "px";
              this.cursorEl.style.borderRadius = borderRadius + "px";
              this.cursorEl.style.left =
                rect.x + window.pageXOffset + rect.width / 2 + "px";
              this.cursorEl.style.top =
                rect.y + window.pageYOffset + rect.height / 2 + "px";
            });
            el.addEventListener("mousemove", (event) => {
              if (this.isTouchLocked) return;
              const halfHeight = rect.height / 2;
              const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
              const halfWidth = rect.width / 2;
              const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;
              this.cursorEl.style.transform = `translate(calc(-50% + ${leftOffset}px), calc(-50% + ${topOffset}px))`;
              if (el.matches(".tile, .btn, a:not(.fab)"))
                el.style.transform = `translate(${leftOffset * 6}px, ${topOffset * 6}px)`;
              if (el.classList.contains("fab")) {
                let isToggled = el.classList.contains("fab--toggled");
                let extra = isToggled ? 45 : 0;
                el.firstElementChild.style.transform = `translate(${leftOffset * 6}px, ${topOffset * 6}px) rotate(${extra}deg)`;
              }
            });
            el.addEventListener("mouseleave", (event) => {
              if (this.isTouchLocked) return;
              this.isCursorLocked = false;
              this.cursorEl.classList.remove("is-locked");
              this.cursorEl.classList.remove("cursor--text");
              this.cursorEl.style.borderRadius = "100%";
              this.cursorEl.style.width = DEFAULT_CURSOR_SIZE + "px";
              this.cursorEl.style.height = DEFAULT_CURSOR_SIZE + "px";
              el.removeAttribute("style");
              if (el.firstElementChild)
                el.firstElementChild.removeAttribute("style");
            });
          }
        }
      },
      {
        "bezier-easing": "jezh8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    jezh8: [
      function (require, module, exports) {
        /**
         * https://github.com/gre/bezier-easing
         * BezierEasing - use bezier curve for transition easing function
         * by GaÃ«tan Renaudeau 2014 - 2015 â€“ MIT License
         */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 0.001;
        var SUBDIVISION_PRECISION = 0.0000001;
        var SUBDIVISION_MAX_ITERATIONS = 10;
        var kSplineTableSize = 11;
        var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
        var float32ArraySupported = typeof Float32Array === "function";
        function A(aA1, aA2) {
          return 1.0 - 3.0 * aA2 + 3.0 * aA1;
        }
        function B(aA1, aA2) {
          return 3.0 * aA2 - 6.0 * aA1;
        }
        function C(aA1) {
          return 3.0 * aA1;
        }
        // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
        function calcBezier(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }
        // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
        function getSlope(aT, aA1, aA2) {
          return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
        }
        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX,
            currentT,
            i = 0;
          do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
          } while (
            Math.abs(currentX) > SUBDIVISION_PRECISION &&
            ++i < SUBDIVISION_MAX_ITERATIONS
          );
          return currentT;
        }
        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }
        function LinearEasing(x) {
          return x;
        }
        module.exports = function bezier(mX1, mY1, mX2, mY2) {
          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (mX1 === mY1 && mX2 === mY2) return LinearEasing;
          // Precompute samples table
          var sampleValues = float32ArraySupported
            ? new Float32Array(kSplineTableSize)
            : new Array(kSplineTableSize);
          for (var i = 0; i < kSplineTableSize; ++i)
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          function getTForX(aX) {
            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for (
              ;
              currentSample !== lastSample && sampleValues[currentSample] <= aX;
              ++currentSample
            )
              intervalStart += kSampleStepSize;
            --currentSample;
            // Interpolate to provide an initial guess for t
            var dist =
              (aX - sampleValues[currentSample]) /
              (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE)
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0.0) return guessForT;
            else
              return binarySubdivide(
                aX,
                intervalStart,
                intervalStart + kSampleStepSize,
                mX1,
                mX2
              );
          }
          return function BezierEasing(x) {
            // Because JavaScript number are imprecise, we should guarantee the extremes are right.
            if (x === 0) return 0;
            if (x === 1) return 1;
            return calcBezier(getTForX(x), mY1, mY2);
          };
        };
      },
      {},
    ],
    "5qIZv": [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Experiments", () => Experiments);
        var _bezierEasing = require("bezier-easing");
        var _bezierEasingDefault = parcelHelpers.interopDefault(_bezierEasing);
        let expo = (0, _bezierEasingDefault.default)(0.19, 1.0, 0.22, 1.0);
        let sine = (0, _bezierEasingDefault.default)(0.25, 0.46, 0.45, 0.94);
        let map = (value, x1, y1, x2, y2) =>
          ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
        let expoMap = (value, x1, y1, x2, y2) =>
          expo(map(value, x1, y1, x2, y2));
        let sineMap = (value, x1, y1, x2, y2) =>
          sine(map(value, x1, y1, x2, y2));
        let quadMap = (value, x1, y1, x2, y2) =>
          expo(map(value, x1, y1, x2, y2));
        const getBoundingClientRect = function (element) {
          var rect = element.getBoundingClientRect();
          return {
            top: parseInt(rect.top) + window.pageYOffset,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y,
          };
        };
        function iOS() {
          return (
            [
              "iPad Simulator",
              "iPhone Simulator",
              "iPod Simulator",
              "iPad",
              "iPhone",
              "iPod",
            ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
          );
        }
        class Story {
          constructor(options) {
            this.bodyEl = document.querySelector("body");
            this.mapFunctions = {
              linear: map,
              expo: expoMap,
              quad: quadMap,
              sine: sineMap,
            };
            this.config = Object.assign(
              {
                triggerEl: this.bodyEl,
                triggerRect: null,
                storyTarget: this.bodyEl,
                storyTargetRect: null,
                curve: "linear",
                marginTop: 0,
                progress: 0,
                autorun: true,
                onScroll: () => {},
                onInit: () => {},
              },
              options
            );
            window.addEventListener("scroll", this.handleScroll.bind(this));
            if (!iOS())
              window.addEventListener(
                "resize",
                this.updateCoordinates.bind(this)
              );
            document.addEventListener("DOMContentLoaded", () => {
              setTimeout(() => {
                this.updateCoordinates();
                this.config.onInit(this.config);
                if (this.config.autorun) this.config.onScroll(this.config);
              }, 100);
            });
            return this;
          }
          updateCoordinates() {
            this.config.triggerRect = getBoundingClientRect(
              this.config.triggerEl
            );
            this.config.storyTargetRect = getBoundingClientRect(
              this.config.storyTarget
            );
          }
          handleScroll() {
            if (this.config.triggerRect) {
              let scrollY = window.pageYOffset + this.config.marginTop;
              let outerMin =
                parseInt(this.config.triggerRect.top) - this.config.marginTop;
              let outerMax =
                outerMin +
                parseInt(this.config.triggerRect.height) -
                window.innerHeight;
              let progress = Math.min(
                Math.max(
                  this.mapFunctions[this.config.curve](
                    scrollY,
                    outerMin,
                    outerMax,
                    0,
                    1
                  ),
                  0
                ),
                1
              );
              this.config.progress = progress;
              this.config.onScroll(this.config);
            }
          }
        }
        class Experiments {
          constructor() {
            setTimeout(() => window.scrollTo(0, 0), 50);
            this.nav = document.querySelector(".nav");
            this.navRect = getBoundingClientRect(this.nav);
            this.xdrTrigger = document.querySelector(".xdrwrapper");
            this.xdrMood = document.querySelector(".xdrmood");
            this.xdrSegment = document.querySelector(".xdrsegment");
            this.xdrTitle = document.querySelector(".xdrtitle");
            this.xdrTitleSub = document.querySelector(".xdrtitle__sub");
            this.xdrScreen = document.querySelector(".xdrmood__screen");
            this.xdrSummary = document.querySelector(".xdrwrapper .summary");
            this.xdrScreenRect = getBoundingClientRect(this.xdrScreen);
            this.iPhoneFirst = document.querySelector(
              ".iphones__item:first-child"
            );
            this.iPhoneLast = document.querySelector(
              ".iphones__item:nth-child(2)"
            );
            this.clothDownloadDetails = document.querySelector(
              ".cloth__download__details"
            );
            this.artEl = document.querySelector(".art");
            this.artVideos = this.artEl.querySelectorAll("video");
            this.xdrRepeat = document.querySelector(".xdrhand .repeat");
            this.sandRepeat = document.querySelector(".sand .repeat");
            this.xdrHandVideo = document.querySelector(".xdrhand__video");
            this.sandVideo = document.querySelector(".sand__video video");
            this.xdrBezelWidth = 21 / 1505;
            if (
              document.readyState === "ready" ||
              document.readyState === "complete"
            ) {
              document.documentElement.classList.remove("is-locked");
              this.updateCoordinates();
            } else
              document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                  this.updateCoordinates();
                  document.documentElement.classList.remove("is-locked");
                }
              };
            window.addEventListener(
              "resize",
              this.updateCoordinates.bind(this)
            );
            this.artThumbs = document.querySelectorAll(".artthumbnails__item");
            this.artdescriptors = [
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
            ];
            this.artlist = document.querySelector(".artlist");
            this.artThumbs.forEach((thumb, i) => {
              thumb.addEventListener("click", (ev) => {
                this.artEl.className = `art story__block art--${this.artdescriptors[i]}`;
                for (let video of this.artVideos) {
                  video.muted = true;
                  video.pause();
                  video.volume = 0;
                  video.currentTime = 0;
                }
                let video1 =
                  this.artlist.children[
                    this.artdescriptors.length - i - 1
                  ].querySelector("video");
                video1.play();
              });
            });
            this.xdrRepeat.addEventListener("click", () =>
              this.xdrHandVideo.play()
            );
            this.sandRepeat.addEventListener("click", () =>
              this.sandVideo.play()
            );
            this.sandVideo.addEventListener(
              "ended",
              () => (this.sandRepeat.style.opacity = 1)
            );
            this.xdrHandVideo.addEventListener(
              "ended",
              () => (this.xdrRepeat.style.opacity = 1)
            );
            document.addEventListener("DOMContentLoaded", () => {
              setTimeout(() => {
                //this.updateCoordinates();
              }, 100);
            });
            this.originalXdrTopRect = 0;
            this.xdrIntroStory = new Story({
              triggerEl: this.xdrTrigger,
              storyTarget: this.xdrMood,
              onScroll: (story) => {
                let bezelWidth = 21 / 1505;
                let relativeScaleWidth =
                  window.innerWidth / story.storyTargetRect.width +
                  bezelWidth * 3;
                let relativeScaleHeight =
                  window.innerHeight / this.xdrScreenRect.height;
                let relativeY =
                  story.storyTargetRect.top - this.navRect.height / 2;
                let mappedProgress = Math.min(
                  map(story.progress, 0, 0.75, 0, 1),
                  1
                );
                let mappedProgressTitle = Math.min(
                  map(story.progress, 0.6, 0.9, 0, 1),
                  1
                );
                let mappedScale = map(
                  mappedProgress,
                  0,
                  1,
                  relativeScaleWidth > relativeScaleHeight
                    ? relativeScaleWidth
                    : relativeScaleHeight,
                  1
                );
                let mappedY = map(mappedProgress, 0, 1, relativeY, 0);
                this.xdrTitle.style.opacity = mappedProgressTitle;
                this.xdrTitle.style.transform = `translateY(${(1 - mappedProgressTitle) * 24}px)`;
                this.xdrTitleSub.style.opacity = mappedProgressTitle;
                this.xdrTitleSub.style.transform = `translateY(${(1 - mappedProgressTitle) * 32}px)`;
                this.appliedXdrScale = mappedScale;
                this.xdrSegment.style.opacity = story.progress >= 1 ? 1 : 0;
                this.xdrMood.style.transform = `translateY(${-mappedY}px) scale(${mappedScale})`;
              },
              onInit: (story) => {
                this.originalXdrTopRect = story.storyTargetRect.top;
              },
            });
            let xdrHand = new Story({
              hasPlayed: false,
              triggerEl: document.querySelector(".xdrhandtrigger"),
              storyTarget: this.xdrHandVideo,
              onScroll: (story) => {
                if (this.hasPlayedHand) return;
                if (story.progress < 0.6) {
                  this.hasPlayedHand = true;
                  story.storyTarget.play();
                }
              },
              autorun: false,
            });
            let art = new Story({
              triggerEl: document.querySelector(".artlist"),
              storyTarget: document.querySelector(
                ".artlist .artlist__item:last-child video"
              ),
              onScroll: (story) => {
                if (this.hasPlayedArt) return;
                if (story.progress < 0.8) {
                  this.hasPlayedArt = true;
                  setTimeout(() => {
                    story.storyTarget.play();
                  }, 300);
                }
              },
              autorun: false,
            });
            let sand = new Story({
              triggerEl: document.querySelector(".sand h1"),
              storyTarget: document.querySelector(".sand video"),
              onScroll: (story) => {
                if (this.hasPlayedSand) return;
                if (story.progress < 0.2) {
                  story.storyTarget.play();
                  this.hasPlayedSand = true;
                }
              },
              autorun: false,
            });
            let iPhones = new Story({
              hasPlayed: false,
              triggerEl: document.querySelector(".story--cloth"),
              storyTarget: document.querySelector(".iphones"),
              onScroll: (story) => {
                let mappedTransform = Math.min(
                  map(story.progress, 0, 0.9, 0, 75),
                  75
                );
                let mappedScale = Math.min(
                  map(story.progress, 0, 1, 1, 0.8),
                  0.8
                );
                console.log(1 - story.progress);
                this.iPhoneLast.style.transform = `translateZ(-1000px) translateX(${mappedTransform}%) rotate3d(0,1,0,${(1 - story.progress) * 60}deg) scale(${mappedScale})`;
                this.iPhoneFirst.style.transform = `translateZ(-1000px) translateX(${-mappedTransform}%) rotate3d(0,1,0,${(1 - story.progress) * -60}deg) scale(${mappedScale})`;
                this.clothDownloadDetails.classList.toggle(
                  "cloth__download__details--visible",
                  story.progress > 0.8 || window.innerHeight > 900
                );
              },
              autorun: false,
            });
          }
          updateCoordinates(ev) {
            this.navRect = getBoundingClientRect(this.nav);
            this.xdrScreenRect = getBoundingClientRect(this.xdrScreen);
            this.xdrSummaryRect = this.xdrSummary.getBoundingClientRect();
            this.xdrMood.removeAttribute("style");
            this.xdrSegment.style.marginTop = `${this.xdrSummaryRect.height - window.innerHeight}px`;
            setTimeout(() => {
              if (ev)
                this.xdrScreenRect.height =
                  this.xdrScreenRect.height / this.appliedXdrScale;
              this.xdrScreenRect.top =
                this.xdrScreenRect.top / this.appliedXdrScale;
              this.xdrIntroStory.config.storyTargetRect.top =
                this.originalXdrTopRect;
              this.xdrIntroStory.config.onScroll(this.xdrIntroStory.config);
            }, 1);
          }
        }
      },
      {
        "bezier-easing": "jezh8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    b45Ko: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        exports.default = () => {
          let colorNode = document.querySelector(".colors__segments");
          if (colorNode) {
            let segments = Array.from(colorNode.children);
            segments.forEach((s) => {
              s.addEventListener("click", () => {
                segments.forEach((s) =>
                  s.classList.remove("colors__segments__item--active")
                );
                s.classList.add("colors__segments__item--active");
              });
            });
          }
        };
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    cIEGq: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "create", () => create);
        // canvas-confetti v1.5.1 built on 2022-02-08T22:20:40.944Z
        var module = {};
        // source content
        (function main(global, module, isWorker, workerSize) {
          var canUseWorker = !!(
            global.Worker &&
            global.Blob &&
            global.Promise &&
            global.OffscreenCanvas &&
            global.OffscreenCanvasRenderingContext2D &&
            global.HTMLCanvasElement &&
            global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
            global.URL &&
            global.URL.createObjectURL
          );
          function noop() {}
          // create a promise if it exists, otherwise, just
          // call the function directly
          function promise(func) {
            var ModulePromise = module.exports.Promise;
            var Prom =
              ModulePromise !== void 0 ? ModulePromise : global.Promise;
            if (typeof Prom === "function") return new Prom(func);
            func(noop, noop);
            return null;
          }
          var raf = (function () {
            var TIME = Math.floor(1000 / 60);
            var frame, cancel;
            var frames = {};
            var lastFrameTime = 0;
            if (
              typeof requestAnimationFrame === "function" &&
              typeof cancelAnimationFrame === "function"
            ) {
              frame = function (cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                  if (
                    lastFrameTime === time ||
                    lastFrameTime + TIME - 1 < time
                  ) {
                    lastFrameTime = time;
                    delete frames[id];
                    cb();
                  } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
              };
              cancel = function (id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
              };
            } else {
              frame = function (cb) {
                return setTimeout(cb, TIME);
              };
              cancel = function (timer) {
                return clearTimeout(timer);
              };
            }
            return {
              frame: frame,
              cancel: cancel,
            };
          })();
          var getWorker = (function () {
            var worker;
            var prom;
            var resolves = {};
            function decorate(worker) {
              function execute(options, callback) {
                worker.postMessage({
                  options: options || {},
                  callback: callback,
                });
              }
              worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage(
                  {
                    canvas: offscreen,
                  },
                  [offscreen]
                );
              };
              worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                  execute(options, null);
                  return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function (resolve) {
                  function workerDone(msg) {
                    if (msg.data.callback !== id) return;
                    delete resolves[id];
                    worker.removeEventListener("message", workerDone);
                    prom = null;
                    done();
                    resolve();
                  }
                  worker.addEventListener("message", workerDone);
                  execute(options, id);
                  resolves[id] = workerDone.bind(null, {
                    data: {
                      callback: id,
                    },
                  });
                });
                return prom;
              };
              worker.reset = function resetWorker() {
                worker.postMessage({
                  reset: true,
                });
                for (var id in resolves) {
                  resolves[id]();
                  delete resolves[id];
                }
              };
            }
            return function () {
              if (worker) return worker;
              if (!isWorker && canUseWorker) {
                var code = [
                  "var CONFETTI, SIZE = {}, module = {};",
                  "(" + main.toString() + ")(this, module, true, SIZE);",
                  "onmessage = function(msg) {",
                  "  if (msg.data.options) {",
                  "    CONFETTI(msg.data.options).then(function () {",
                  "      if (msg.data.callback) {",
                  "        postMessage({ callback: msg.data.callback });",
                  "      }",
                  "    });",
                  "  } else if (msg.data.reset) {",
                  "    CONFETTI.reset();",
                  "  } else if (msg.data.resize) {",
                  "    SIZE.width = msg.data.resize.width;",
                  "    SIZE.height = msg.data.resize.height;",
                  "  } else if (msg.data.canvas) {",
                  "    SIZE.width = msg.data.canvas.width;",
                  "    SIZE.height = msg.data.canvas.height;",
                  "    CONFETTI = module.exports.create(msg.data.canvas);",
                  "  }",
                  "}",
                ].join("\n");
                try {
                  worker = new Worker(URL.createObjectURL(new Blob([code])));
                } catch (e) {
                  // eslint-disable-next-line no-console
                  typeof console.warn === "function" &&
                    console.warn("\uD83C\uDF8A Could not load worker", e);
                  return null;
                }
                decorate(worker);
              }
              return worker;
            };
          })();
          var defaults = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ["square", "circle"],
            zIndex: 100,
            colors: [
              "#26ccff",
              "#a25afd",
              "#ff5e7e",
              "#88ff5a",
              "#fcff42",
              "#ffa62d",
              "#ff36ff",
            ],
            // probably should be true, but back-compat
            disableForReducedMotion: false,
            scalar: 1,
          };
          function convert(val, transform) {
            return transform ? transform(val) : val;
          }
          function isOk(val) {
            return !(val === null || val === undefined);
          }
          function prop(options, name, transform) {
            return convert(
              options && isOk(options[name]) ? options[name] : defaults[name],
              transform
            );
          }
          function onlyPositiveInt(number) {
            return number < 0 ? 0 : Math.floor(number);
          }
          function randomInt(min, max) {
            // [min, max)
            return Math.floor(Math.random() * (max - min)) + min;
          }
          function toDecimal(str) {
            return parseInt(str, 16);
          }
          function colorsToRgb(colors) {
            return colors.map(hexToRgb);
          }
          function hexToRgb(str) {
            var val = String(str).replace(/[^0-9a-f]/gi, "");
            if (val.length < 6)
              val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
            return {
              r: toDecimal(val.substring(0, 2)),
              g: toDecimal(val.substring(2, 4)),
              b: toDecimal(val.substring(4, 6)),
            };
          }
          function getOrigin(options) {
            var origin = prop(options, "origin", Object);
            origin.x = prop(origin, "x", Number);
            origin.y = prop(origin, "y", Number);
            return origin;
          }
          function setCanvasWindowSize(canvas) {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
          }
          function setCanvasRectSize(canvas) {
            var rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
          }
          function getCanvas(zIndex) {
            var canvas = document.createElement("canvas");
            canvas.style.position = "fixed";
            canvas.style.top = "0px";
            canvas.style.left = "0px";
            canvas.style.pointerEvents = "none";
            canvas.style.zIndex = zIndex;
            return canvas;
          }
          function ellipse(
            context,
            x,
            y,
            radiusX,
            radiusY,
            rotation,
            startAngle,
            endAngle,
            antiClockwise
          ) {
            context.save();
            context.translate(x, y);
            context.rotate(rotation);
            context.scale(radiusX, radiusY);
            context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
            context.restore();
          }
          function randomPhysics(opts) {
            var radAngle = opts.angle * (Math.PI / 180);
            var radSpread = opts.spread * (Math.PI / 180);
            return {
              x: opts.x,
              y: opts.y,
              wobble: Math.random() * 10,
              wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
              velocity:
                opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
              angle2D:
                -radAngle + (0.5 * radSpread - Math.random() * radSpread),
              tiltAngle: (Math.random() * 0.5 + 0.25) * Math.PI,
              color: opts.color,
              shape: opts.shape,
              tick: 0,
              totalTicks: opts.ticks,
              decay: opts.decay,
              drift: opts.drift,
              random: Math.random() + 2,
              tiltSin: 0,
              tiltCos: 0,
              wobbleX: 0,
              wobbleY: 0,
              gravity: opts.gravity * 3,
              ovalScalar: 0.6,
              scalar: opts.scalar,
            };
          }
          function updateFetti(context, fetti) {
            fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
            fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
            fetti.wobble += fetti.wobbleSpeed;
            fetti.velocity *= fetti.decay;
            fetti.tiltAngle += 0.1;
            fetti.tiltSin = Math.sin(fetti.tiltAngle);
            fetti.tiltCos = Math.cos(fetti.tiltAngle);
            fetti.random = Math.random() + 2;
            fetti.wobbleX =
              fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
            fetti.wobbleY =
              fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
            var progress = fetti.tick++ / fetti.totalTicks;
            var x1 = fetti.x + fetti.random * fetti.tiltCos;
            var y1 = fetti.y + fetti.random * fetti.tiltSin;
            var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
            var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
            context.fillStyle =
              "rgba(" +
              fetti.color.r +
              ", " +
              fetti.color.g +
              ", " +
              fetti.color.b +
              ", " +
              (1 - progress) +
              ")";
            context.beginPath();
            if (fetti.shape === "circle")
              context.ellipse
                ? context.ellipse(
                    fetti.x,
                    fetti.y,
                    Math.abs(x2 - x1) * fetti.ovalScalar,
                    Math.abs(y2 - y1) * fetti.ovalScalar,
                    (Math.PI / 10) * fetti.wobble,
                    0,
                    2 * Math.PI
                  )
                : ellipse(
                    context,
                    fetti.x,
                    fetti.y,
                    Math.abs(x2 - x1) * fetti.ovalScalar,
                    Math.abs(y2 - y1) * fetti.ovalScalar,
                    (Math.PI / 10) * fetti.wobble,
                    0,
                    2 * Math.PI
                  );
            else {
              context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
              context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
              context.lineTo(Math.floor(x2), Math.floor(y2));
              context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
            }
            context.closePath();
            context.fill();
            return fetti.tick < fetti.totalTicks;
          }
          function animate(canvas, fettis, resizer, size, done) {
            var animatingFettis = fettis.slice();
            var context = canvas.getContext("2d");
            var animationFrame;
            var destroy;
            var prom = promise(function (resolve) {
              function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                done();
                resolve();
              }
              function update() {
                if (
                  isWorker &&
                  !(
                    size.width === workerSize.width &&
                    size.height === workerSize.height
                  )
                ) {
                  size.width = canvas.width = workerSize.width;
                  size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                  resizer(canvas);
                  size.width = canvas.width;
                  size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function (fetti) {
                  return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
              }
              animationFrame = raf.frame(update);
              destroy = onDone;
            });
            return {
              addFettis: function (fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
              },
              canvas: canvas,
              promise: prom,
              reset: function () {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
              },
            };
          }
          function confettiCannon(canvas, globalOpts) {
            var isLibCanvas = !canvas;
            var allowResize = !!prop(globalOpts || {}, "resize");
            var globalDisableForReducedMotion = prop(
              globalOpts,
              "disableForReducedMotion",
              Boolean
            );
            var shouldUseWorker =
              canUseWorker && !!prop(globalOpts || {}, "useWorker");
            var worker = shouldUseWorker ? getWorker() : null;
            var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
            var initialized =
              canvas && worker ? !!canvas.__confetti_initialized : false;
            var preferLessMotion =
              typeof matchMedia === "function" &&
              matchMedia("(prefers-reduced-motion)").matches;
            var animationObj;
            function fireLocal(options, size, done) {
              var particleCount = prop(
                options,
                "particleCount",
                onlyPositiveInt
              );
              var angle = prop(options, "angle", Number);
              var spread = prop(options, "spread", Number);
              var startVelocity = prop(options, "startVelocity", Number);
              var decay = prop(options, "decay", Number);
              var gravity = prop(options, "gravity", Number);
              var drift = prop(options, "drift", Number);
              var colors = prop(options, "colors", colorsToRgb);
              var ticks = prop(options, "ticks", Number);
              var shapes = prop(options, "shapes");
              var scalar = prop(options, "scalar");
              var origin = getOrigin(options);
              var temp = particleCount;
              var fettis = [];
              var startX = canvas.width * origin.x;
              var startY = canvas.height * origin.y;
              while (temp--)
                fettis.push(
                  randomPhysics({
                    x: startX,
                    y: startY,
                    angle: angle,
                    spread: spread,
                    startVelocity: startVelocity,
                    color: colors[temp % colors.length],
                    shape: shapes[randomInt(0, shapes.length)],
                    ticks: ticks,
                    decay: decay,
                    gravity: gravity,
                    drift: drift,
                    scalar: scalar,
                  })
                );
              // if we have a previous canvas already animating,
              // add to it
              if (animationObj) return animationObj.addFettis(fettis);
              animationObj = animate(canvas, fettis, resizer, size, done);
              return animationObj.promise;
            }
            function fire(options) {
              var disableForReducedMotion =
                globalDisableForReducedMotion ||
                prop(options, "disableForReducedMotion", Boolean);
              var zIndex = prop(options, "zIndex", Number);
              if (disableForReducedMotion && preferLessMotion)
                return promise(function (resolve) {
                  resolve();
                });
              if (isLibCanvas && animationObj)
                // use existing canvas from in-progress animation
                canvas = animationObj.canvas;
              else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
              }
              if (allowResize && !initialized)
                // initialize the size of a user-supplied canvas
                resizer(canvas);
              var size = {
                width: canvas.width,
                height: canvas.height,
              };
              if (worker && !initialized) worker.init(canvas);
              initialized = true;
              if (worker) canvas.__confetti_initialized = true;
              function onResize() {
                if (worker) {
                  // TODO this really shouldn't be immediate, because it is expensive
                  var obj = {
                    getBoundingClientRect: function () {
                      if (!isLibCanvas) return canvas.getBoundingClientRect();
                    },
                  };
                  resizer(obj);
                  worker.postMessage({
                    resize: {
                      width: obj.width,
                      height: obj.height,
                    },
                  });
                  return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
              }
              function done() {
                animationObj = null;
                if (allowResize) global.removeEventListener("resize", onResize);
                if (isLibCanvas && canvas) {
                  document.body.removeChild(canvas);
                  canvas = null;
                  initialized = false;
                }
              }
              if (allowResize)
                global.addEventListener("resize", onResize, false);
              if (worker) return worker.fire(options, size, done);
              return fireLocal(options, size, done);
            }
            fire.reset = function () {
              if (worker) worker.reset();
              if (animationObj) animationObj.reset();
            };
            return fire;
          }
          // Make default export lazy to defer worker creation until called.
          var defaultFire;
          function getDefaultFire() {
            if (!defaultFire)
              defaultFire = confettiCannon(null, {
                useWorker: true,
                resize: true,
              });
            return defaultFire;
          }
          module.exports = function () {
            return getDefaultFire().apply(this, arguments);
          };
          module.exports.reset = function () {
            getDefaultFire().reset();
          };
          module.exports.create = confettiCannon;
        })(
          (function () {
            if (typeof window !== "undefined") return window;
            if (typeof self !== "undefined") return self;
            return this || {};
          })(),
          module,
          false
        );
        // end source content
        exports.default = module.exports;
        var create = module.exports.create;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
  },
  ["awEvQ", "bB7Pu"],
  "bB7Pu",
  "parcelRequire94c2"
);

//# sourceMappingURL=homehub.3d214d75.js.map
