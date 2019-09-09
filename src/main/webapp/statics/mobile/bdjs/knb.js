;var KNB =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpKNB"];
/******/ 	window["webpackJsonpKNB"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "./chunk/" + ({"1":"dpapp","2":"mtnb","3":"hbnb","4":"wx","5":"titans","6":"dpzeus"}[chunkId]||chunkId) + "." + {"1":"b09d5d2399cc37d244fa","2":"7d62dd1ad32687abfc21","3":"6e0a49fe410bf57faf80","4":"f97c95a661766cc14f97","5":"4a719d22efd2b14a7e3e","6":"364affed814233cb1180"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = function(){var a=""; if(document.currentScript){a = document.currentScript.src}else{var scripts=document.scripts;for(var i=0;i<scripts.length;i++){if((/\/bs\/knb\/([0-9a-f]*|v\d+.\d+.\d+)\/knb\.js/).test(scripts[i].src)){a=scripts[i].src;break;}}}return a.replace(/knb.js.*$/,"")}();

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var KNB = __webpack_require__(1);

	var env = __webpack_require__(13);
	if (env.isDPApp) {
	  __webpack_require__.e/* nsure */(1, function(require) {
	    KNB.load(__webpack_require__(15));
	    KNB._ready();
	  });
	} else if (env.isMTNB) {
	  __webpack_require__.e/* nsure */(2, function(require) {
	    KNB.load(__webpack_require__(73));
	    KNB._ready();
	  });
	} else if (env.isHBNB) {
	  __webpack_require__.e/* nsure */(3, function(require) {
	    KNB.load(__webpack_require__(74));
	    KNB._ready();
	  });
	} else if ((env.isWX || env.isMiniProgramWebview) && typeof _KNB_IGNORE_WECHAT === 'undefined') {
	  __webpack_require__.e/* nsure */(4, function(require) {
	    KNB.load(__webpack_require__(189));
	    KNB._ready();
	  });
	} else if (env.isTitans) {
	  __webpack_require__.e/* nsure */(5, function(require) {
	    KNB.load(__webpack_require__(193));
	    KNB._ready();
	  });
	} else if (env.isDPZeus) {
	  __webpack_require__.e/* nsure */(6, function(require) {
	    KNB.load(__webpack_require__(196));
	    KNB._ready();
	  });
	} else {
	  KNB._ready();
	}

	module.exports = KNB;



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var apis = __webpack_require__(2);
	var mixin = __webpack_require__(3);
	var version = __webpack_require__(4);
	var getUA = __webpack_require__(5);
	var promisify = __webpack_require__(9);

	var noop = function () {};
	var cacheFns = [];

	var KNB = {
	  __version__: version,

	  NOTIMPLEMENTED: function(apiName, opts) {
	    var this$1 = this;

	    var fail = opts.fail || noop;
	    if (this._isReady) return fail({error: -1, msg: 'API [' + apiName + '] is not implemented'});
	    this.cache = this.cache || [];
	    this.cache.push(function () { return this$1[apiName](opts); });
	  },
	  load: function(child) {
	    var this$1 = this;

	    mixin(this, child);

	    // assign an _add method for child
	    // so child can dynamically add methods
	    child._add = function (name, fn) {
	      this$1[name] = fn;
	    };
	  },
	  _ready:function() {
	    this._isReady = true;
	    var tasks = this.cache || [];
	    function afterReady() {
	      (function doTasks(arr) {
	        if (!arr.length) return;
	        var task = arr.shift();
	        if (typeof task === 'function') task();
	        doTasks(arr);
	      })(tasks);

	      cacheFns.forEach(function (fn) { return fn(); });
	    }
	    // 说明具体环境脚本已经重写了ready方法
	    // 此时，需要等待具体环境ready
	    if (this.ready && !this.ready.isFromLoader) return this.ready(afterReady);
	    afterReady();
	  },
	  ready: function(cb) {
	    if (this._isReady) return cb();
	    if (typeof cb === 'function') cacheFns.push(cb);
	  },
	  use: function(api, opts) {
	    var this$1 = this;

	    this.cache = this.cache || [];
	    this.cache.push(function () { return this$1.use(api, opts); });
	  }
	};
	KNB.ready.isFromLoader = true;
	apis.forEach(function(api) {
	  KNB[api] = function(opts) {
	    if ( opts === void 0 ) opts={};

	    KNB.NOTIMPLEMENTED(api, opts);
	  };
	});
	KNB.getUA = getUA; // override getUA
	KNB.env = __webpack_require__(13);
	KNB.uaInfo = getUA.internal;
	promisify(KNB);

	module.exports = KNB;


/***/ },
/* 2 */
/***/ function(module, exports) {

	// API set to implement
	module.exports = [
	    'config',

	    'isApiSupported',
	    'getApisVersion',
	    'getUA',
	    'Semver',
	    'checkAuthorization',

	    'getFingerprint',
	    'getUserInfo',
	    'getDeviceInfo',
	    'login',
	    'logout',
	    'sendSMS',
	    'getContactList',
	    'pickContact',

	    'getCity',
	    'getLocationCity',
	    'getLocation',
	    'getNetworkType',
	    'pickCity',

	    'share',
	    'configShare',

	    'openWebview',
	    'closeWebview',
	    'jumpWebview',

	    'setTitle',
	    'setImageTitle',
	    'setNavButtons',
	    'setNavigationBarHidden',
	    'setBackgroundColor',
	    'setBouncesEnabled',
	    'setStatusBarStyle',
	    'setPullDown',
	    'stopPullDown',
	    'setLLButton',
	    'setSearchBar',
	    'scanQRCode',
	    'showKeyboard',

	    'store',
	    'retrieve',

	    'alert',
	    'confirm',
	    'prompt',
	    'sendLog',

	    'chooseImage',
	    'previewImage',
	    'uploadImage',
	    'downloadImage',

	    'publish',
	    'subscribe',
	    'unsubscribe',

	    'setResult',
	    'getResult',
	  ];


/***/ },
/* 3 */
/***/ function(module, exports) {

	//extend simple implementation

	module.exports = function (a, b, c, d, e, f) {
	  var objs = [b, c, d, e, f].filter(Boolean);
	  var target = a || {};
	  objs.forEach(function (source) {
	    for (var key in source) {
	      if (source.hasOwnProperty(key)) {
	        target[key] = source[key];
	      }
	    }
	  });
	  return target;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ("1.6.5");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var QS = __webpack_require__(6);
	function getUAInfo() {
	  var lua = (navigator.userAgent + '').toLowerCase();
	  var VER_REG_STR = "([0-9][0-9.a-zA-Z_]*)";
	  var regexp = function (str) { return new RegExp(str, 'i'); };
	  var isstr  = function (str) { return typeof str === 'string'; };
	  var href = location.href;
	  var qs = QS.parse((location.search || '').slice(1));

	  var apps = {
	    dianping: [/com\.dianping\.ba.\w+/, /com\.dianping\.\w+/],
	    meituan: ['meituangroup', /com.meituan.imeituan-?\w+/],
	    maoyanpro: ['moviepro', 'moviepro/android'],
	    maoyan: ['movie'],
	    moma: ['moma'],
	    daxiang: ['xm'],

	    wechat: ['micromessenger'],
	    qq: ['qq'],

	    unknown: ['never_match_anything'],
	  };
	  var appName = function () {
	     var names = Object.keys(apps);
	     for (var i = 0; i < names.length; i++) {
	       var matchers = apps[names[i]];
	       for (var j = 0; j < matchers.length; j++) {
	         if (isstr(matchers[j]) ? regexp('\\W' + matchers[j] + '\\W').test(lua) : matchers[j].test(lua)) return names[i]; 
	       }
	     }
	     return "unknown";
	  }();
	  var appVersion = function () {
	    var matchers = apps[appName];
	    for (var i = 0; i < matchers.length; i++) {
	      var mstring = isstr(matchers[i]) ? matchers[i] : matchers[i].source;
	      var m = lua.match(regexp(mstring + ' ' + VER_REG_STR)) || lua.match(regexp(mstring + '/' + VER_REG_STR));
	      if (m) return m[1];
	    }
	    return "0";
	  }();
	  var osName = function () {
	    if (/android/.test(lua)) return 'android';
	    if (/ios|iphone|ipod|ipad/.test(lua)) return 'ios';
	    if (/macintosh/.test(lua)) return 'mac';
	    if (/windows/.test(lua)) return 'windows';
	    return "unknown";
	  }();
	  var osVersion = function () {
	    var m;
	    // https://developer.chrome.com/multidevice/user-agent
	    // order matters!
	    if (osName === 'android') m  =  lua.match(regexp('android '+ VER_REG_STR)) || lua.match(regexp('android/'+ VER_REG_STR));
	    if (osName === 'ios') m = lua.match(regexp(VER_REG_STR +' like Mac OS X')) || lua.match(regexp('iOS/' + VER_REG_STR));

	    // 通常而言mac/window的版本不重要，无视之
	    return (m ? m[1] : '0').replace(/_/g, '.');
	  }();

	  // internal version info
	  // MATCHED INDEX:     1  2              3      4             5       6
	  // EXAMPLE:         KNB/1.1.0         Android/5.1     MeituanGroup/7.3.1
	  var reg1 = regexp(("(KNB)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR));
	  var reg2 = regexp(("(KNB)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR + " ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/" + VER_REG_STR));
	  var m   = lua.match(reg1) || lua.match(reg2);
	  var _knbVersion = m && m[2];

	  // Try KNB Generic Mode
	  if (appName === 'unknown' && m) {
	    appName    = m[5];
	    appVersion = m[6];
	  }

	  // God knowns who you are
	  if (appName === 'unknown') {
	    // waimai app
	    if (href.indexOf('wm_ctype=') > -1) appName = "waimai";
	    // meituan like app < 7.0
	    if (/iphone|ipod|ipad|android/.test(href)) {
	      if ((qs.utm_campaign || '').indexOf('Agroup') > -1) appName = 'meituan';
	      appVersion = qs.version_name;
	    }
	  }

	  var matchTitansVerison = lua.match(regexp(("(TitansX|TitansNoX)/" + VER_REG_STR)));
	  var titansxVersion = matchTitansVerison && matchTitansVerison[2];

	  return {
	    appName: appName,
	    appVersion: appVersion,
	    osName: osName,
	    osVersion: osVersion,

	    titansxVersion: titansxVersion,
	    _knbVersion: _knbVersion
	  };
	}

	function getUA(ref) {
	  var success = ref.success;

	  success && success(getUAInfo());
	}

	// The actual method
	getUA.internal = getUAInfo;

	module.exports = getUA;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(7);
	exports.encode = exports.stringify = __webpack_require__(8);


/***/ },
/* 7 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var win = typeof window !== 'undefined' ? window : {};
	var mixin = __webpack_require__(3);
	var Promise = win.Promise || __webpack_require__(10);
	var apis = __webpack_require__(2);

	// get an empty object from obj's type
	function empty(obj) {
	  return Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
	}

	module.exports = function (KNB) {
	  if (KNB.getPromiseInstance) return;
	  KNB.getPromiseInstance = function () {
	    var KNBP = {};
	    apis.forEach(function (name) {
	      if (name === 'config') return;
	      KNBP[name] = function (config) {
	        return new Promise(function (resolve, reject) {
	          KNB[name](mixin(empty(config), config, { success: resolve, fail: reject }));
	        });
	      };
	    });
	    KNBP.use = function (name, config) {
	      return new Promise(function (resolve, reject) {
	        KNB.use(name, mixin(empty(config), config, { success: resolve, fail: reject }));
	      });
	    };
	    KNBP.all = function (args) { return Promise.all(args); };
	    return KNBP;
	  };
	}



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate) {'use strict';

	var PENDING = 'pending';
	var SETTLED = 'settled';
	var FULFILLED = 'fulfilled';
	var REJECTED = 'rejected';
	var NOOP = function () {};
	var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';

	var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
	var asyncQueue = [];
	var asyncTimer;

	function asyncFlush() {
		// run promise callbacks
		for (var i = 0; i < asyncQueue.length; i++) {
			asyncQueue[i][0](asyncQueue[i][1]);
		}

		// reset async asyncQueue
		asyncQueue = [];
		asyncTimer = false;
	}

	function asyncCall(callback, arg) {
		asyncQueue.push([callback, arg]);

		if (!asyncTimer) {
			asyncTimer = true;
			asyncSetTimer(asyncFlush, 0);
		}
	}

	function invokeResolver(resolver, promise) {
		function resolvePromise(value) {
			resolve(promise, value);
		}

		function rejectPromise(reason) {
			reject(promise, reason);
		}

		try {
			resolver(resolvePromise, rejectPromise);
		} catch (e) {
			rejectPromise(e);
		}
	}

	function invokeCallback(subscriber) {
		var owner = subscriber.owner;
		var settled = owner._state;
		var value = owner._data;
		var callback = subscriber[settled];
		var promise = subscriber.then;

		if (typeof callback === 'function') {
			settled = FULFILLED;
			try {
				value = callback(value);
			} catch (e) {
				reject(promise, e);
			}
		}

		if (!handleThenable(promise, value)) {
			if (settled === FULFILLED) {
				resolve(promise, value);
			}

			if (settled === REJECTED) {
				reject(promise, value);
			}
		}
	}

	function handleThenable(promise, value) {
		var resolved;

		try {
			if (promise === value) {
				throw new TypeError('A promises callback cannot return that same promise.');
			}

			if (value && (typeof value === 'function' || typeof value === 'object')) {
				// then should be retrieved only once
				var then = value.then;

				if (typeof then === 'function') {
					then.call(value, function (val) {
						if (!resolved) {
							resolved = true;

							if (value === val) {
								fulfill(promise, val);
							} else {
								resolve(promise, val);
							}
						}
					}, function (reason) {
						if (!resolved) {
							resolved = true;

							reject(promise, reason);
						}
					});

					return true;
				}
			}
		} catch (e) {
			if (!resolved) {
				reject(promise, e);
			}

			return true;
		}

		return false;
	}

	function resolve(promise, value) {
		if (promise === value || !handleThenable(promise, value)) {
			fulfill(promise, value);
		}
	}

	function fulfill(promise, value) {
		if (promise._state === PENDING) {
			promise._state = SETTLED;
			promise._data = value;

			asyncCall(publishFulfillment, promise);
		}
	}

	function reject(promise, reason) {
		if (promise._state === PENDING) {
			promise._state = SETTLED;
			promise._data = reason;

			asyncCall(publishRejection, promise);
		}
	}

	function publish(promise) {
		promise._then = promise._then.forEach(invokeCallback);
	}

	function publishFulfillment(promise) {
		promise._state = FULFILLED;
		publish(promise);
	}

	function publishRejection(promise) {
		promise._state = REJECTED;
		publish(promise);
		if (!promise._handled && isNode) {
			global.process.emit('unhandledRejection', promise._data, promise);
		}
	}

	function notifyRejectionHandled(promise) {
		global.process.emit('rejectionHandled', promise);
	}

	/**
	 * @class
	 */
	function Promise(resolver) {
		if (typeof resolver !== 'function') {
			throw new TypeError('Promise resolver ' + resolver + ' is not a function');
		}

		if (this instanceof Promise === false) {
			throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
		}

		this._then = [];

		invokeResolver(resolver, this);
	}

	Promise.prototype = {
		constructor: Promise,

		_state: PENDING,
		_then: null,
		_data: undefined,
		_handled: false,

		then: function (onFulfillment, onRejection) {
			var subscriber = {
				owner: this,
				then: new this.constructor(NOOP),
				fulfilled: onFulfillment,
				rejected: onRejection
			};

			if ((onRejection || onFulfillment) && !this._handled) {
				this._handled = true;
				if (this._state === REJECTED && isNode) {
					asyncCall(notifyRejectionHandled, this);
				}
			}

			if (this._state === FULFILLED || this._state === REJECTED) {
				// already resolved, call callback async
				asyncCall(invokeCallback, subscriber);
			} else {
				// subscribe
				this._then.push(subscriber);
			}

			return subscriber.then;
		},

		catch: function (onRejection) {
			return this.then(null, onRejection);
		}
	};

	Promise.all = function (promises) {
		if (!Array.isArray(promises)) {
			throw new TypeError('You must pass an array to Promise.all().');
		}

		return new Promise(function (resolve, reject) {
			var results = [];
			var remaining = 0;

			function resolver(index) {
				remaining++;
				return function (value) {
					results[index] = value;
					if (!--remaining) {
						resolve(results);
					}
				};
			}

			for (var i = 0, promise; i < promises.length; i++) {
				promise = promises[i];

				if (promise && typeof promise.then === 'function') {
					promise.then(resolver(i), reject);
				} else {
					results[i] = promise;
				}
			}

			if (!remaining) {
				resolve(results);
			}
		});
	};

	Promise.race = function (promises) {
		if (!Array.isArray(promises)) {
			throw new TypeError('You must pass an array to Promise.race().');
		}

		return new Promise(function (resolve, reject) {
			for (var i = 0, promise; i < promises.length; i++) {
				promise = promises[i];

				if (promise && typeof promise.then === 'function') {
					promise.then(resolve, reject);
				} else {
					resolve(promise);
				}
			}
		});
	};

	Promise.resolve = function (value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}

		return new Promise(function (resolve) {
			resolve(value);
		});
	};

	Promise.reject = function (reason) {
		return new Promise(function (resolve, reject) {
			reject(reason);
		});
	};

	module.exports = Promise;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(11).setImmediate))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(12).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(11).clearImmediate))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var arguments$1 = arguments;

	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments$1[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	function getENV() {
	  var semver = __webpack_require__(14); 
	  // make sure the script not throwing error under nodejs.
	  var win  = typeof window !== 'undefined'    ? window              : {};
	  var href = typeof location !== 'undefined'  ? location.href       : '';
	  var ua   = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	  var is_stupid_ios = /ios|iphone|ipad|ipod/i.test(ua); // iOS下UA非常不可靠
	  var titansXVersionParse = ua.match(/titans(no)?x\/([\w.]+)/i);
	  var titansXVersion = titansXVersionParse ? titansXVersionParse[2] : '0';

	  //优先加载自定义环境
	  if (!!win._KNB_CUSTOM_ENV) {
	    return {
	      isWX: !!win._KNB_WX,
	      isMTNB: !!win._KNB_MTNB,
	      isTitans: !!win._KNB_TITANS,
	      isHBNB: !!win._KNB_HBNB,
	      isDPApp: !!win._KNB_DPAPP
	    }
	  }

	  var regDP = win._KNB_REGDP || /dp\/com\.dianping\.[\w\.]+\/([\d\.]+)/i;
	  var regMT = win._KNB_REGMT || /moviepro|MTNB|Meituan|MOMA/i;
	  var regHB = win._KNB_REGHB || /iHotel|HBNB/i;
	  var regWX = win._KNB_REGWX || /micromessenger/i;
	  var regTitans = win._KNB_REGTITANS || /TitansX/i;
	  var regDPZeus = win._KNB_DPZEUS || /merchant\.mobile|dpcrm|mp\.mobile/i;

	  var isWX     = regWX.test(ua);
	  var isDPApp  = regDP.test(ua);
	  var isMTNB   = regMT.test(ua) || /f=(iphone|ipad|ipod|android)/.test(href);
	  var isHBNB   = regHB.test(ua) && !win._MTNB;
	  var isDPZeus = regDPZeus.test(ua);
	  var isTitans = function() {
	    if (href.indexOf('knb_force_use_titans') > -1) return true;
	    // 限制 7.5 版本 HBNB 加载至 Titans
	    if (is_stupid_ios && semver.gt('11.0', titansXVersion)) return !!win._TitansX;
	    return regTitans.test(ua);
	  }();
	  var isMiniProgramWebview = win.__wxjs_environment === 'miniprogram';

	  var isNative = isDPApp || isHBNB || isTitans || regMT.test(ua);
	  // KNB.isNative 去掉小程序判断不知影响是否较大 ???
	  //TitansNoX和点评包名的优先级高于其他，修复点评下引入美团实现的bug
	  if (/titansnox/i.test(ua) && isDPApp) {
	    isTitans = isHBNB = isWX = isMTNB = isDPZeus = false;
	  } 
	  // order matters
	  if (isWX)     { isTitans = isHBNB = isDPApp = isMTNB = isDPZeus = false; }
	  if (isDPZeus) { isTitans = isWX   = isMTNB  = isHBNB = isDPApp  = false; }
	  if (isTitans) { isDPApp  = isWX   = isMTNB  = isHBNB = isDPZeus = false; }
	  if (isHBNB)   { isTitans = isWX   = isDPApp = isMTNB = isDPZeus = false; }
	  if (isMTNB)   { isTitans = isWX   = isDPApp = isHBNB = isDPZeus = false; }
	  if (isDPApp)  { isTitans = isWX   = isMTNB  = isHBNB = isDPZeus = false; }

	  return {
	    isWX: isWX,
	    isTitans: isTitans,
	    isHBNB: isHBNB,
	    isDPApp: isDPApp,
	    isMTNB: isMTNB,
	    isNative: isNative,
	    isDPZeus: isDPZeus,
	    isMiniProgramWebview: isMiniProgramWebview,
	  };
	}

	module.exports = getENV();
	module.exports.getENV = getENV;  // make it testable


/***/ },
/* 14 */
/***/ function(module, exports) {

	//版本比较方法
	module.exports = {
	  eq: function(a, b) {
	    return a === b;
	  },
	  gt: function(a, b) {
	    var splitedA = a ? a.split('.') : [];
	    var splitedB = b ? b.split('.') : [];
	    [0,1,2].forEach(function(i){
	      splitedA[i] = splitedA[i] || 0;
	      splitedB[i] = splitedB[i] || 0;
	    });
	    if (+splitedA[0] !== +splitedB[0]) {
	      return +splitedA[0] > +splitedB[0];
	    } else {
	      if (+splitedA[1] !== +splitedB[1]) {
	        return +splitedA[1] > +splitedB[1];
	      } else {
	        return +splitedA[2] > +(splitedB[2] || 0);
	      }
	    }
	  },
	  lt: function(a, b) {
	    return !this.gte(a, b);
	  },
	  gte: function(a, b) {
	    return this.eq(a, b) || this.gt(a, b);
	  },
	  lte: function(a, b) {
	    return this.eq(a, b) || this.lt(a, b);
	  }
	};

/***/ }
/******/ ]);
