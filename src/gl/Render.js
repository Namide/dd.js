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

import Signal from '../event/Signal.js';

const RenderMsg = {
  NO_WEBGL_SUPPORT : 1
};

/**
 * Connect WebGL with DOM.
 */
class Render {

  /**
   * 
   * @param {DOMElement} canvasDOM  Canvas DOM Element.
   * @param {function}  errorCb  Callback called if an error has occured.
   * @returns {Render}
   */
  constructor(canvasDOM, errorCb) {
    this._canvasDOM = canvasDOM;
    
    this._initSignals();
    this.onError.add(errorCb);
    
    if (this._initGL(canvasDOM)) {
      this._initSize(canvasDOM);
      this._start(this._gl);
    }
    
  }
  
  _start(gl) {
    gl.clearColor(0.2, 0.2, 0.2, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  _initSize(canvasDOM) {
    this.setSize(parseInt(canvasDOM.width), parseInt(canvasDOM.height));
  }
  
  _initSignals() {
    this.onError = new Signal();
  }
  
  _initGL(canvasDOM) {
    
    let gl;

    try {
      gl = canvasDOM.getContext('webgl') ||
           canvasDOM.getContext('experimental-webgl');

    } catch(e) {
      const msg = 'Could not initialise WebGL: ' + e.message;
      this.onError.dispatch(msg, RenderMsg.NO_WEBGL_SUPPORT);
      return false;
    }
    
    if (!gl) {
      const msg = 'Your browser don\'t support WebGL';
      this.onError.dispatch(msg, RenderMsg.NO_WEBGL_SUPPORT);
      return false;
    }
    
    this._gl = gl;
    return true;
  }
  
  update() {
    
  }

  /**
   * Change the size of the viewport.
   * 
   * @param {Number} w  Width of the viewport.
   * @param {Number} h  Height of the viewport.
   * @returns {void}
   */
  setSize(w, h) {
    
    const gl = this._gl;
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
  getSize() {
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
  setBG(r, g, b, a) {
    this._gl.clearColor(r, g, b, a);
  }
}

export {Render, RenderMsg};
