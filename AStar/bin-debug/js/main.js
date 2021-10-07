

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/eui/Comp.ts");
__webpack_require__("./src/eui/Layer.ts");
__webpack_require__("./src/modules/AStar/AStar.ts");
__webpack_require__("./src/modules/AStar/Grid.ts");
__webpack_require__("./src/modules/AStar/Nodes.ts");
__webpack_require__("./src/modules/TestAStar.ts");
__webpack_require__("./src/modules/TestAStar2.ts");
__webpack_require__("./src/modules/base/CONST.ts");
__webpack_require__("./src/modules/base/Global.ts");
__webpack_require__("./src/modules/base/Message.ts");
__webpack_require__("./src/modules/base/MessageItem.ts");
/**
 * 主入口
 */
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        loadingView.x = (this.stage.stageWidth - loadingView.width) / 2;
                        loadingView.y = (this.stage.stageHeight - loadingView.height) / 2;
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var self = this;
        Global.stage = self.stage;
        self.parent.removeChild(self);
        var testAStar = new G.TestAStar();
        Global.stage.addChild(testAStar);
        // let testAStar2 = new G.TestAStar2();
        // self.addChild(testAStar2);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/eui/Comp.ts":
/***/ (function(module, exports) {

var mo = window['mo']; 
var mo;
(function (mo) {
    var Comp = /** @class */ (function (_super) {
        __extends(Comp, _super);
        function Comp() {
            var _this = _super.call(this) || this;
            var self = _this;
            self.ctor_b();
            self.ctor();
            self.ctor_a();
            if (!self._skinName) {
                console.error("请设置皮肤_skinName");
                return _this;
            }
            _this.addEventListener(eui.UIEvent.COMPLETE, self.initUI, self);
            self.skinName = "resource/skins/" + self._skinName;
            return _this;
        }
        Comp.prototype.ctor_b = function () { };
        Comp.prototype.ctor_a = function () { };
        Comp.prototype.ctor = function () { };
        Comp.prototype.onEnter_b = function () { };
        Comp.prototype.onEnter = function () { };
        Comp.prototype.onEnter_a = function () { };
        Comp.prototype.initUI = function () {
            var self = this;
            self.onEnter_b();
            self.onEnter();
            self.onEnter_a();
        };
        return Comp;
    }(eui.Component));
    mo.Comp = Comp;
    __reflect(Comp.prototype,"mo.Comp",[]); 
})(mo || (mo = {}));
window["mo"] = mo;


/***/ }),

/***/ "./src/eui/Layer.ts":
/***/ (function(module, exports) {

var mo = window['mo']; 
var mo;
(function (mo) {
    var Layer = /** @class */ (function (_super) {
        __extends(Layer, _super);
        function Layer() {
            var _this = _super.call(this) || this;
            var self = _this;
            self.width = Global.stage.stageWidth;
            self.height = Global.stage.stageHeight;
            return _this;
        }
        return Layer;
    }(mo.Comp));
    mo.Layer = Layer;
    __reflect(Layer.prototype,"mo.Layer",[]); 
})(mo || (mo = {}));
window["mo"] = mo;


/***/ }),

/***/ "./src/modules/AStar/AStar.ts":
/***/ (function(module, exports) {

var G = window['G']; 
/**
 * AStar寻路算法
 * @author CYK
 */
var G;
(function (G) {
    var AStar = /** @class */ (function () {
        function AStar() {
            // private _heuristic:Function = this.manhattan;
            // private _heuristic:Function = this.euclidian;
            this._heuristic = this.diagonal; //估计公式
            this._straightCost = 1.0; //直线代价
            this._diagCost = Math.SQRT2; //对角线代价
        }
        //判断节点是否开放列表
        AStar.prototype.isOpen = function (node) {
            var self = this;
            return self._open.indexOf(node) > -1;
        };
        //判断节点是否封闭列表
        AStar.prototype.isClosed = function (node) {
            var self = this;
            return self._closed.indexOf(node) > -1;
        };
        //对指定的网络寻找路径
        AStar.prototype.findPath = function (grid) {
            var self = this;
            self._grid = grid;
            self._open = [];
            self._closed = [];
            self._startNode = self._grid.startNode;
            self._endNode = self._grid.endNode;
            self._startNode.g = 0;
            self._startNode.h = self._heuristic(self._startNode);
            self._startNode.f = self._startNode.g + self._startNode.h;
            self._startCalculateTime = egret.getTimer();
            return self.search();
        };
        //计算周围节点代价的关键处理函数
        AStar.prototype.search = function () {
            var self = this;
            var _t = 1;
            var node = self._startNode;
            //如果当前节点不是终点
            while (node != self._endNode) {
                //找出相邻节点的x,y范围
                var startX = Math.max(0, node.x - 1);
                var endX = Math.min(self._grid.numCols - 1, node.x + 1);
                var startY = Math.max(0, node.y - 1);
                var endY = Math.min(self._grid.numRows - 1, node.y + 1);
                //循环处理所有相邻节点
                for (var i = startX; i <= endX; i++) {
                    for (var j = startY; j <= endY; j++) {
                        var test = self._grid.getNode(i, j);
                        //如果是当前节点，或者是不可通过的，且排除水平和垂直方向都是障碍物节点时的特例情况
                        if (test == node || !test.walkable || !self._grid.getNode(node.x, test.y).walkable || !self._grid.getNode(test.x, node.y).walkable) {
                            continue;
                        }
                        var cost = self._straightCost;
                        //如果是对象线，则使用对角代价
                        if (!((node.x == test.x) || (node.y == test.y))) {
                            cost = self._diagCost;
                        }
                        //计算test节点的总代价
                        var g = node.g + cost * test.costMultiplier;
                        var h = self._heuristic(test);
                        var f = g + h;
                        //如果该点在open或close列表中
                        if (self.isOpen(test) || self.isClosed(test)) {
                            //如果本次计算的代价更小，则以本次计算为准
                            if (f < test.f) {
                                // console.log("\n第", _t, "轮，有节点重新指向，x=", i, "，y=", j, "，g=", g, "，h=", h, "，f=", f, "，test=",test.toString());
                                test.f = f;
                                test.g = g;
                                test.h = h;
                                test.parent = node; //重新指定该点的父节点为本轮计算中心点
                            }
                        }
                        else //如果还不在open列表中，则除了更新代价以及设置父节点，还要加入open数组
                         {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                            self._open.push(test);
                        }
                    }
                }
                self._closed.push(node); //把处理过的本轮中心节点加入close节点
                //辅助调试，输出open数组中都有哪些节点
                // for (let i = 0; i < self._open.length; i++) {
                //    console.log(self._open[i].toString());
                // }
                if (self._open.length == 0) {
                    Message.show("没找到最佳节点，无路可走!");
                    console.log("没找到最佳节点，无路可走!");
                    var totTime = (egret.getTimer() - self._startCalculateTime) / 1000;
                    self.costTotTime = totTime;
                    console.log("本次寻路计算总耗时: " + totTime + "秒");
                    return false;
                }
                self._open.sort(function (a, b) { return a.f - b.f; }); //按总代价从小到大排序
                node = self._open.shift(); //从open数组中删除代价最小的结节，同时把该节点赋值为node，做为下次的中心点
                // console.log("第", _t, "轮取出的最佳节点为：", node.toString());
                _t++;
            }
            //循环结束后，构建路径
            self.buildPath();
            return true;
        };
        //根据父节点指向，从终点反向连接到起点
        AStar.prototype.buildPath = function () {
            var self = this;
            self._path = [];
            var node = self._endNode;
            self._path.push(node);
            while (node != self._startNode) {
                node = node.parent;
                self._path.unshift(node);
            }
            var totTime = (egret.getTimer() - self._startCalculateTime) / 1000;
            self.costTotTime = totTime;
            console.log("本次寻路计算总耗时: " + totTime + "秒");
        };
        //曼哈顿估价法
        AStar.prototype.manhattan = function (node) {
            var self = this;
            return Math.abs(node.x - self._endNode.x) * self._straightCost + Math.abs(node.y - self._endNode.y) * self._straightCost;
        };
        //几何估价法
        AStar.prototype.euclidian = function (node) {
            var self = this;
            var dx = node.x - self._endNode.x;
            var dy = node.y - self._endNode.y;
            return Math.sqrt(dx * dx + dy * dy) * self._straightCost;
        };
        //对角线估价法
        AStar.prototype.diagonal = function (node) {
            var self = this;
            var dx = Math.abs(node.x - self._endNode.x);
            var dy = Math.abs(node.y - self._endNode.y);
            var diag = Math.min(dx, dy);
            var straight = dx + dy;
            return self._diagCost * diag + self._straightCost * (straight - 2 * diag);
        };
        Object.defineProperty(AStar.prototype, "visited", {
            //返回所有被计算过的节点(辅助函数)
            get: function () {
                var self = this;
                return self._closed.concat(self._open);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AStar.prototype, "openArray", {
            //返回open数组
            get: function () {
                var self = this;
                return self._open;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AStar.prototype, "closedArray", {
            //返回close数组
            get: function () {
                var self = this;
                return self._closed;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AStar.prototype, "path", {
            get: function () {
                var self = this;
                return self._path;
            },
            enumerable: false,
            configurable: true
        });
        return AStar;
    }());
    G.AStar = AStar;
    __reflect(AStar.prototype,"G.AStar",[]); 
})(G || (G = {}));
window["G"] = G;


/***/ }),

/***/ "./src/modules/AStar/Grid.ts":
/***/ (function(module, exports) {

/**
 * 地图所有格子信息
 * @author CYK
 */
var Grid = /** @class */ (function () {
    function Grid(numCols, numRows) {
        var self = this;
        self._numCols = numCols;
        self._numRows = numRows;
        self._nodes = [];
        for (var i = 0; i < self._numCols; i++) {
            self._nodes[i] = [];
            for (var j = 0; j < self._numRows; j++) {
                self._nodes[i][j] = new Nodes(i, j);
            }
        }
    }
    Grid.prototype.getNode = function (x, y) {
        var self = this;
        return self._nodes[x][y];
    };
    Grid.prototype.setEndNode = function (x, y) {
        var self = this;
        self._endNode = self._nodes[x][y];
    };
    Grid.prototype.setStartNode = function (x, y) {
        var self = this;
        self._startNode = self._nodes[x][y];
    };
    Grid.prototype.setWalkable = function (x, y, value) {
        var self = this;
        self._nodes[x][y].walkable = value;
    };
    Object.defineProperty(Grid.prototype, "endNode", {
        get: function () {
            var self = this;
            return self._endNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numCols", {
        get: function () {
            var self = this;
            return self._numCols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numRows", {
        get: function () {
            var self = this;
            return self._numRows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "startNode", {
        get: function () {
            var self = this;
            return self._startNode;
        },
        enumerable: false,
        configurable: true
    });
    /** 获取可行走节点随机一点坐标**/
    Grid.prototype.getRanDomStartPos = function () {
        var self = this;
        var canWalkArr = [];
        for (var i = 0; i < self._numCols; i++) {
            for (var j = 0; j < self._numRows; j++) {
                var node = self._nodes[i][j];
                if (node.walkable)
                    canWalkArr.push(node);
            }
        }
        var randomIdx = Math.floor(Math.random() * canWalkArr.length);
        return canWalkArr[randomIdx];
    };
    return Grid;
}());
window["Grid"] = Grid;
__reflect(Grid.prototype,"Grid",[]); 


/***/ }),

/***/ "./src/modules/AStar/Nodes.ts":
/***/ (function(module, exports) {

/**
 * 每个节点的信息
 * @author CYK
 */
var Nodes = /** @class */ (function () {
    function Nodes(x, y) {
        this.walkable = true; //是否可穿越（通常把障碍物节点设置为false）
        this.costMultiplier = 1.0; //代价因子
        var self = this;
        self.x = x;
        self.y = y;
    }
    Nodes.prototype.toString = function () {
        var self = this;
        return "x=" + self.x.toString() + ",y=" + self.y.toString() + ",g=" + Number(self.g).toFixed(1) + ",h=" + Number(self.h).toFixed(1) + ",f=" + Number(self.f).toFixed(1);
    };
    return Nodes;
}());
window["Nodes"] = Nodes;
__reflect(Nodes.prototype,"Nodes",[]); 


/***/ }),

/***/ "./src/modules/TestAStar.ts":
/***/ (function(module, exports) {

var G = window['G']; 
/**
 * 测试AStar（平路情况下（代价因子一样大））
 * @author CYK
 *
 */
var G;
(function (G) {
    var TestAStar = /** @class */ (function (_super) {
        __extends(TestAStar, _super);
        function TestAStar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestAStar.prototype.ctor = function () {
            var self = this;
            self._skinName = "aStar/TestAStar.exml";
            self._cellSize = 40;
            self._speed = 1;
        };
        TestAStar.prototype.onEnter = function () {
            var self = this;
            self.makeGrid();
            self.makePlayer();
            self.grp_container.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGridClick, self);
            self.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onReset, self);
        };
        TestAStar.prototype.onReset = function () {
            var self = this;
            self.grp_container.removeChildren();
            self.makeGrid();
            self.makePlayer();
        };
        /** 生成一个player角色(简单起见，就是一个圈) */
        TestAStar.prototype.makePlayer = function () {
            var self = this;
            var radius = 15; //半径
            self._player = new egret.Shape();
            self._player.graphics.beginFill(0xff0000);
            self._player.graphics.drawCircle(0, 0, radius);
            self._player.graphics.endFill();
            var ranDomStaryPos = self._grid.getRanDomStartPos();
            self._player.x = ranDomStaryPos.x * self._cellSize + self._cellSize / 2;
            self._player.y = ranDomStaryPos.y * self._cellSize + self._cellSize / 2;
            self.grp_container.addChild(self._player);
        };
        /** 生成网格，并随机放置一些障碍 */
        TestAStar.prototype.makeGrid = function () {
            var self = this;
            self.lbl_cost.text = "本次寻路总耗时";
            self._grid = new Grid(Math.ceil(self.grp_container.width / self._cellSize), Math.floor((Global.stage.stageHeight - 58) / self._cellSize));
            self._pathShape = new egret.Shape(); //路过的格子轨迹
            self.grp_container.addChild(self._pathShape);
            var line = new egret.Shape();
            var lineGraphics = line.graphics;
            self.grp_container.addChild(line);
            for (var i = 0; i < self._grid.numCols + 1; i++) //画竖线
             {
                lineGraphics.lineStyle(1);
                lineGraphics.moveTo(i * self._cellSize, 0);
                lineGraphics.lineTo(i * self._cellSize, self._grid.numRows * self._cellSize);
            }
            for (var i = 0; i < self._grid.numRows + 1; i++) //画横线
             {
                lineGraphics.lineStyle(1);
                lineGraphics.moveTo(0, i * self._cellSize);
                lineGraphics.lineTo(self._grid.numCols * self._cellSize, i * self._cellSize);
            }
            //障碍物
            var blockShape = new egret.Shape();
            var blockGraphics = blockShape.graphics;
            self.grp_container.addChild(blockShape);
            var bolckCount = Math.floor((self._grid.numCols * self._grid.numRows) / 4);
            for (var i = 0; i < bolckCount; i++) {
                var _x = Math.floor(Math.random() * self._grid.numCols);
                var _y = Math.floor(Math.random() * self._grid.numRows);
                self._grid.setWalkable(_x, _y, false);
                var node = self._grid.getNode(_x, _y);
                blockGraphics.lineStyle(0);
                blockGraphics.beginFill(self.getColor(node));
                blockGraphics.drawRect(_x * self._cellSize, _y * self._cellSize, self._cellSize, self._cellSize);
            }
        };
        /** 返回节点颜色 */
        TestAStar.prototype.getColor = function (node) {
            var self = this;
            if (!node.walkable)
                return 0;
            if (node == self._grid.startNode)
                return 0xcccccc;
            if (node == self._grid.endNode)
                return 0xff0000;
            return 0xffffff;
        };
        /** 鼠标点击时随机设置终点，并以player当前位置做为起点 */
        TestAStar.prototype.onGridClick = function (event) {
            var self = this;
            self._pathShape.graphics.clear();
            var xPos = Math.floor(event.stageX / self._cellSize);
            var yPos = Math.floor(event.stageY / self._cellSize);
            self._grid.setEndNode(xPos, yPos);
            var endNode = self._grid.endNode;
            if (endNode.walkable) {
                self._pathShape.graphics.lineStyle(0);
                self._pathShape.graphics.beginFill(self.getColor(endNode));
                self._pathShape.graphics.drawRect(xPos * self._cellSize, yPos * self._cellSize, self._cellSize, self._cellSize);
            }
            xPos = Math.floor(self._player.x / self._cellSize);
            yPos = Math.floor(self._player.y / self._cellSize);
            self._grid.setStartNode(xPos, yPos);
            self.findPath();
        };
        /** 寻路 */
        TestAStar.prototype.findPath = function () {
            var self = this;
            var astar = new G.AStar();
            if (astar.findPath(self._grid)) {
                self.lbl_cost.text = "本次寻路总耗时: " + astar.costTotTime + "秒";
                self._path = astar.path;
                self._index = 0;
                self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
            }
        };
        /**每帧的动画处理*/
        TestAStar.prototype.onEnterFrame = function (event) {
            var self = this;
            var _cellSize = self._cellSize;
            var targetX = self._path[self._index].x * _cellSize + _cellSize / 2;
            var targetY = self._path[self._index].y * _cellSize + _cellSize / 2;
            //把经过的点，涂上黄色
            var passedNode = self._path[self._index];
            self._pathShape.graphics.lineStyle(0);
            self._pathShape.graphics.beginFill(0xffff00);
            self._pathShape.graphics.drawRect(passedNode.x * _cellSize, passedNode.y * _cellSize, _cellSize, _cellSize);
            var dx = targetX - self._player.x;
            var dy = targetY - self._player.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 1) {
                self._index++; //索引加1，即取一个路径节点
                if (self._index >= self._path.length) //达到最后一个节点时，移除ENTER_FRAME监听
                 {
                    self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                }
            }
            else {
                self._player.x += dx * self._speed;
                self._player.y += dy * self._speed;
            }
        };
        return TestAStar;
    }(mo.Layer));
    G.TestAStar = TestAStar;
    __reflect(TestAStar.prototype,"G.TestAStar",[]); 
})(G || (G = {}));
window["G"] = G;


/***/ }),

/***/ "./src/modules/TestAStar2.ts":
/***/ (function(module, exports) {

var G = window['G']; 
/**
 * 测试AStar（模拟上路、陡坡中行走（代价因子会比平路的大））
 * @author CYK
 *
 */
var G;
(function (G) {
    var TestAStar2 = /** @class */ (function (_super) {
        __extends(TestAStar2, _super);
        function TestAStar2() {
            var _this = _super.call(this) || this;
            _this._cellSize = 40;
            var self = _this;
            self.touchEnabled = true;
            self._grid = new Grid(Math.ceil(Global.stage.stageWidth / self._cellSize), Math.ceil(Global.stage.stageHeight / self._cellSize));
            self._grid.setStartNode(1, 1);
            self._grid.setEndNode(self._grid.numCols - 1, self._grid.numRows - 1);
            for (var i = 0; i < self._grid.numCols; i++) {
                for (var j = 0; j < self._grid.numRows; j++) {
                    //为每个节点设置不同的“代价权重因子”
                    var mult = Math.sin(i * .50) + Math.cos(j * .2 + i * .05);
                    self._grid.getNode(i, j).costMultiplier = Math.abs(mult) + 1;
                }
            }
            self.drawGrid();
            self.findPath();
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGridClick, self);
            return _this;
        }
        //画网格
        TestAStar2.prototype.drawGrid = function () {
            var self = this;
            var _cellSize = self._cellSize;
            self.graphics.clear();
            for (var i = 0; i < self._grid.numCols; i++) {
                for (var j = 0; j < self._grid.numRows; j++) {
                    var node = self._grid.getNode(i, j);
                    self.graphics.lineStyle(0.5);
                    self.graphics.beginFill(self.getColor(node));
                    self.graphics.drawRect(i * _cellSize, j * _cellSize, _cellSize, _cellSize);
                }
            }
        };
        //取得单元格的颜色(与权重因子关联，costMultiplier越小，颜色越深)
        TestAStar2.prototype.getColor = function (node) {
            var self = this;
            if (!node.walkable)
                return 0;
            if (node == self._grid.startNode)
                return 0x666666;
            if (node == self._grid.endNode)
                return 0x666666;
            var shade = 300 - 70 * node.costMultiplier;
            return shade << 16 | shade << 8 | shade;
        };
        //单元格点击时，切换节点为普通节点或障碍物节点
        TestAStar2.prototype.onGridClick = function (event) {
            var self = this;
            var xPos = Math.floor(event.localX / self._cellSize);
            var yPos = Math.floor(event.localY / self._cellSize);
            self._grid.setWalkable(xPos, yPos, !self._grid.getNode(xPos, yPos).walkable);
            self.drawGrid();
            self.findPath();
        };
        //找路
        TestAStar2.prototype.findPath = function () {
            var self = this;
            var astar = new G.AStar();
            if (astar.findPath(self._grid)) {
                self.showPath(astar);
            }
        };
        TestAStar2.prototype.showVisited = function (astar) {
            var self = this;
            var visited = astar.visited;
            var _cellSize = self._cellSize;
            for (var i = 0; i < visited.length; i++) {
                self.graphics.beginFill(0xcccccc);
                self.graphics.drawRect(visited[i].x * _cellSize, visited[i].y * _cellSize, _cellSize, _cellSize);
                self.graphics.endFill();
            }
        };
        TestAStar2.prototype.showPath = function (astar) {
            var self = this;
            var path = astar.path;
            for (var i = 0; i < path.length; i++) {
                self.graphics.lineStyle(0);
                self.graphics.beginFill(0);
                self.graphics.drawCircle(path[i].x * self._cellSize + self._cellSize / 2, path[i].y * self._cellSize + self._cellSize / 2, self._cellSize / 3);
            }
        };
        return TestAStar2;
    }(egret.Sprite));
    G.TestAStar2 = TestAStar2;
    __reflect(TestAStar2.prototype,"G.TestAStar2",[]); 
})(G || (G = {}));
window["G"] = G;


/***/ }),

/***/ "./src/modules/base/CONST.ts":
/***/ (function(module, exports) {

var CONST = window['CONST']; 
var CONST;
(function (CONST) {
    var MsgType;
    (function (MsgType) {
        MsgType[MsgType["TYPE_NORMAL"] = 2] = "TYPE_NORMAL";
        MsgType[MsgType["TYPE_LAYOUT_2"] = 1] = "TYPE_LAYOUT_2";
        MsgType[MsgType["TYPE_MOUSEPOS"] = 0] = "TYPE_MOUSEPOS";
        MsgType[MsgType["TYPE_MISSION"] = 3] = "TYPE_MISSION";
    })(MsgType = CONST.MsgType || (CONST.MsgType = {}));
    window["MsgType"] = MsgType;
})(CONST || (CONST = {}));
window["CONST"] = CONST;


/***/ }),

/***/ "./src/modules/base/Global.ts":
/***/ (function(module, exports) {

var Global = /** @class */ (function () {
    function Global() {
    }
    return Global;
}());
window["Global"] = Global;
__reflect(Global.prototype,"Global",[]); 


/***/ }),

/***/ "./src/modules/base/Message.ts":
/***/ (function(module, exports) {

var Message = /** @class */ (function () {
    function Message() {
    }
    Message.show = function (content, color) {
        if (color === void 0) { color = 0xec1010; }
        var self = this;
        if (content == "" || content == null)
            return;
        var messageItem = new MessageItem();
        messageItem.setData(content, color);
        messageItem.x = (Global.stage.stageWidth - messageItem.width) / 2;
        messageItem.y = (Global.stage.stageHeight - messageItem.height) / 2;
        egret.Tween.get(messageItem).to({ y: messageItem.y - 70 }, 300).wait(150).to({ alpha: 0 }, 300).call(function () {
            egret.Tween.removeTweens(messageItem);
            messageItem.parent.removeChild(messageItem);
        });
        Global.stage.addChild(messageItem);
    };
    return Message;
}());
window["Message"] = Message;
__reflect(Message.prototype,"Message",[]); 


/***/ }),

/***/ "./src/modules/base/MessageItem.ts":
/***/ (function(module, exports) {

var MessageItem = /** @class */ (function (_super) {
    __extends(MessageItem, _super);
    function MessageItem() {
        var _this = _super.call(this) || this;
        var self = _this;
        self.touchEnabled = self.touchChildren = false;
        self._textField = new egret.TextField();
        self.addChild(self._textField);
        return _this;
    }
    MessageItem.prototype.setData = function (content, color, size, font) {
        if (size === void 0) { size = 30; }
        if (font === void 0) { font = "宋体"; }
        var self = this;
        self._textField.textColor = color;
        self._textField.size = size;
        self._textField.fontFamily = font;
        self._textField.strokeColor = 0;
        self._textField.stroke = 1;
        self._textField.text = content;
    };
    Object.defineProperty(MessageItem.prototype, "width", {
        get: function () {
            var self = this;
            return self._textField.textWidth + 20;
        },
        enumerable: false,
        configurable: true
    });
    return MessageItem;
}(egret.Sprite));
window["MessageItem"] = MessageItem;
__reflect(MessageItem.prototype,"MessageItem",[]); 


/***/ })

/******/ });