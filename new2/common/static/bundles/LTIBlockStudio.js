(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([50,51],{

/***/ "./common/static/xmodule/descriptors/js/001-8723f83c97a354f267ea559bc714ee1a.js":
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function () {

  // Once generated by CoffeeScript 1.9.3, but now lives as pure JS
  /* eslint-disable */
  (function () {
    var extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    this.MetadataOnlyEditingDescriptor = function (superClass) {
      extend(MetadataOnlyEditingDescriptor, superClass);

      function MetadataOnlyEditingDescriptor(element) {
        this.element = element;
      }

      MetadataOnlyEditingDescriptor.prototype.save = function () {
        return {
          data: null
        };
      };

      return MetadataOnlyEditingDescriptor;
    }(XModule.Descriptor);
  }).call(this);
}).call(window);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./common/static/xmodule/descriptors/js/000-58032517f54c5c1a704a908d850cbe64.js");
module.exports = __webpack_require__("./common/static/xmodule/descriptors/js/001-8723f83c97a354f267ea559bc714ee1a.js");


/***/ })

},[7])));
//# sourceMappingURL=LTIBlockStudio.js.map