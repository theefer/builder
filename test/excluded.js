"format register";


System.register("tree/third", [], function($__export) {
  return {
    setters: [],
    execute: function() {
      $__export('some', 'exports');
    }
  };
});

System.register("tree/second", ["./third", "./cjs"], function($__export) {
  "use strict";
  var __moduleName = "tree/second";
  function require(path) {
    return $traceurRuntime.require("tree/second", path);
  }
  var q;
  return {
    setters: [function(m) {}, function(m) {}],
    execute: function() {
      q = $__export("q", 4);
    }
  };
});

System.register("tree/first", ["jquery-cdn", "@empty", "./second", "./amd"], function($__export) {
  "use strict";
  var __moduleName = "tree/first";
  function require(path) {
    return $traceurRuntime.require("tree/first", path);
  }
  var dep,
      p;
  return {
    setters: [function(m) {}, function(m) {}, function(m) {
      dep = m.dep;
    }, function(m) {}],
    execute: function() {
      p = $__export("p", 5);
    }
  };
});

System.register("tree/cjs", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "tree/cjs.js";
  var __dirname = "tree";
exports.cjs = true;

  global.define = __define;
  return module.exports;
});
