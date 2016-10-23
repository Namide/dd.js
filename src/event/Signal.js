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
class Signal {
  
  constructor () {
    this._list = [];
  }
  
  /**
   * Add a callback (listener). Similar to addEventListener.
   * 
   * @param {function}  callback  Callback who will be called with dispatch().
   * @returns {void}
   */
  add(callback) {
    this.rm(callback);
    this._list.push(callback);
  }
  
  /**
   * Test if the callback (listener) is already added.
   * 
   * @param {function}  callback  Callback who will be called with dispatch().
   * @returns {Boolean}
   */
  has(callback) {
    return this._list.indexOf(callback) > -1;
  }
  
  /**
   * Remove the callback (listener).
   * Similar to removeEventListener.
   * 
   * @param {function}  callback  Callback who will be called with dispatch().
   * @returns {void}
   */
  rm(callback) {
    const i = this._list.indexOf(callback);
    if (i > -1) {
      this._list.splice(i, 1);
    }
  }
  
  /**
   * Number of callbacks (listener) added to it.
   * 
   * @returns {integer}
   */
  length() {
    return this._list.length;
  }
  
  /**
   * Dispatch the arguments to all callbacks added.
   * 
   * @param {*}  All optionnals arguments.
   * @returns {void}
   */
  dispatch() {
    const l = this._list.length;
    for(let i = 0; i < l; i++) {
      this._list.apply(null, arguments);
    }
  }
}

export default Signal;
