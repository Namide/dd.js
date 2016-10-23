(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * The MIT License
 *
 * Copyright 2016 Damien Doussaud (namide.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Event dispatcher like.
 */
var Signal = function () {
  function Signal() {
    _classCallCheck(this, Signal);

    this._list = [];
  }

  /**
   * Add a callback (listener). Similar to addEventListener.
   * 
   * @param {function}  callback  Callback who will be called with dispatch().
   * @returns {void}
   */


  _createClass(Signal, [{
    key: "add",
    value: function add(callback) {
      this.rm(callback);
      this._list.push(callback);
    }

    /**
     * Test if the callback (listener) is already added.
     * 
     * @param {function}  callback  Callback who will be called with dispatch().
     * @returns {Boolean}
     */

  }, {
    key: "has",
    value: function has(callback) {
      return this._list.indexOf(callback) > -1;
    }

    /**
     * Remove the callback (listener).
     * Similar to removeEventListener.
     * 
     * @param {function}  callback  Callback who will be called with dispatch().
     * @returns {void}
     */

  }, {
    key: "rm",
    value: function rm(callback) {
      var i = this._list.indexOf(callback);
      if (i > -1) {
        this._list.splice(i, 1);
      }
    }

    /**
     * Number of callbacks (listener) added to it.
     * 
     * @returns {integer}
     */

  }, {
    key: "length",
    value: function length() {
      return this._list.length;
    }

    /**
     * Dispatch the arguments to all callbacks added.
     * 
     * @param {*}  All optionnals arguments.
     * @returns {void}
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var l = this._list.length;
      for (var i = 0; i < l; i++) {
        this._list.apply(null, arguments);
      }
    }
  }]);

  return Signal;
}();

exports.default = Signal;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderMsg = exports.Render = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The MIT License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Damien Doussaud (namide.com).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Signal = require('../event/Signal.js');

var _Signal2 = _interopRequireDefault(_Signal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderMsg = {
  NO_WEBGL_SUPPORT: 1
};

/**
 * Connect WebGL with DOM.
 */

var Render = function () {

  /**
   * 
   * @param {DOMElement} canvasDOM  Canvas DOM Element.
   * @param {function}  errorCb  Callback called if an error has occured.
   * @returns {Render}
   */
  function Render(canvasDOM, errorCb) {
    _classCallCheck(this, Render);

    this._canvasDOM = canvasDOM;

    this._initSignals();
    this.onError.add(errorCb);

    if (this._initGL(canvasDOM)) {
      this._initSize(canvasDOM);
      this._start(this._gl);
    }
  }

  _createClass(Render, [{
    key: '_start',
    value: function _start(gl) {
      gl.clearColor(0.2, 0.2, 0.2, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
  }, {
    key: '_initSize',
    value: function _initSize(canvasDOM) {
      this.setSize(parseInt(canvasDOM.width), parseInt(canvasDOM.height));
    }
  }, {
    key: '_initSignals',
    value: function _initSignals() {
      this.onError = new _Signal2.default();
    }
  }, {
    key: '_initGL',
    value: function _initGL(canvasDOM) {

      var gl = void 0;

      try {
        gl = canvasDOM.getContext('webgl') || canvasDOM.getContext('experimental-webgl');
      } catch (e) {
        var msg = 'Could not initialise WebGL: ' + e.message;
        this.onError.dispatch(msg, RenderMsg.NO_WEBGL_SUPPORT);
        return false;
      }

      if (!gl) {
        var _msg = 'Your browser don\'t support WebGL';
        this.onError.dispatch(_msg, RenderMsg.NO_WEBGL_SUPPORT);
        return false;
      }

      this._gl = gl;
      return true;
    }
  }, {
    key: 'update',
    value: function update() {}

    /**
     * Change the size of the viewport.
     * 
     * @param {Number} w  Width of the viewport.
     * @param {Number} h  Height of the viewport.
     * @returns {void}
     */

  }, {
    key: 'setSize',
    value: function setSize(w, h) {

      var gl = this._gl;
      // gl.viewportWidth = w;
      // gl.viewportHeight = h;
      gl.viewport(0, 0, w, h);
    }

    /**
     * Return the size of the viewport with an Array:
     * [width, height]
     * 
     * @returns {Array of Number}  Size of the viewport.
     */

  }, {
    key: 'getSize',
    value: function getSize() {
      return [gl.viewportWidth, gl.viewportHeight];
    }

    /**
     * Change the background color.
     * 
     * @param {Number} r  Red (0.0 to 1.0)
     * @param {Number} g  Green (0.0 to 1.0)
     * @param {Number} b  Blue (0.0 to 1.0)
     * @param {Number} a  Alpha (0.0 to 1.0)
     * @returns {void}
     */

  }, {
    key: 'setBG',
    value: function setBG(r, g, b, a) {
      this._gl.clearColor(r, g, b, a);
    }
  }]);

  return Render;
}();

exports.Render = Render;
exports.RenderMsg = RenderMsg;

},{"../event/Signal.js":1}],3:[function(require,module,exports){
'use strict';

var _Render = require('./Render.js');

var ddgl = {
  Render: _Render.Render

};

window.ddgl = ddgl;

},{"./Render.js":2}]},{},[3]);
