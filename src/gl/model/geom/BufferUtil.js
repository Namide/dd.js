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

class BufferUtil {
    
  static create(gl) {
    
    var buffer = gl.createBuffer();
    
    // - gl.ARRAY_BUFFER
    // - gl.ELEMENT_ARRAY_BUFFER
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    
    gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
    
    
    // gl.getParameter(gl.ARRAY_BUFFER_BINDING);
    // gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
    
  }
  
  static delete(gl, buffer) {
    gl.deleteBuffer(buffer);
  }
  
  /**
   * 
   * @param {Float32Array}  vert  Vertices list.
   * @returns {undefined}
   */
  /*setDatas(vert, ) {
    const gl = this._gl;
    this._vert = vert;
    gl.bufferData(gl.ARRAY_BUFFER, vert, gl.STATIC_DRAW);
    
    
    
    gl.enableVertexAttribArray(colorLocation);
     
    // Bind the color buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
     
    // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
    var size = 4;          // 4 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        colorLocation, size, type, normalize, stride, offset)
    
  }
  
  setCustomVert(vert)*/
}
