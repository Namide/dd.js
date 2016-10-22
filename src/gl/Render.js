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
 * Connect WebGL with DOM.
 */
class Render {

  constructor(canvasDOM) {
    this._canvasDOM = canvasDOM;
    this._initSize(canvasDOM);
  }

  _initSize(canvasDOM) {

    if (canvasDOM) {

      const getAttr = canvasDOM.getAttribute;
      const setAttr = canvasDOM.setAttribute;
      this._size = [
        parseInt(getAttr('width')),
        parseInt(getAttr('height'))
      ];

      if (isNaN(this._size[0])) {
        this._size[0] = parseInt(canvasDOM.clientWidth);
      }
      if (isNaN(this._size[1])) {
        this._size[1] = parseInt(canvasDOM.clientHeight);
      }

    } else {
      throw new Error('please renseign the canvas DOM Element');
    }
  }

  setSize(w, h) {

  }

  getSize() {
    return this._size;
  }
}

export { Render };
