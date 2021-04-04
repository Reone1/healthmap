import React, {useRef, useEffect} from 'react';

const CanvasSample = () => {
  const canvasEle = useRef(null)
  useEffect(() => {
    if (canvasEle !== null) {

      function init() {
        draw()
      }
      function draw() {
        let ctx = canvasEle.current.getContext("2d")
        ctx.beginPath();
        ctx.moveTo(40, 35);
        ctx.lineTo(20, 50);
        ctx.lineTo(30, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(60, 50);
        ctx.fill()
      }
      init()
    }
  },[canvasEle])
  return  <canvas ref={canvasEle} id="myCanvas" width="300" height="300"
        style={{border:"1px solid #c3c3c3"}}>
      </canvas>
}
export default CanvasSample